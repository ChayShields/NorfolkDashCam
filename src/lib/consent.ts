import { useSyncExternalStore } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const STORAGE_KEY = "cookie-consent";
const CONSENT_EVENT = "cookieconsentchange";

export type ConsentValue = {
  analytics: boolean;
  decidedAt: number;
};

// "accepted" | "rejected" | null (no choice yet) | "pending" (not known yet)
export type ConsentState = "accepted" | "rejected" | null;

// Only used when storage throws: keeps the banner responsive for the current
// page view (the choice just won't persist to the next page load).
let memoryConsent: ConsentValue | null = null;

// Strict on purpose: only a real boolean counts. The old check was
// `getConsent()?.analytics ?? false`, so a tampered value such as
// {"analytics":"yes"} was truthy and switched analytics on.
function parseConsent(raw: string | null): ConsentValue | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    if (value && typeof value === "object" && typeof value.analytics === "boolean") {
      return {
        analytics: value.analytics,
        decidedAt: typeof value.decidedAt === "number" ? value.decidedAt : 0,
      };
    }
  } catch {
    // fall through: malformed JSON counts as no choice
  }
  return null;
}

// Browsers throw a SecurityError on any localStorage access when site data
// is blocked (e.g. "block all cookies"). That must never take the whole site
// down, so every read/write is guarded: a failed read counts as "no choice
// yet" (banner shown, analytics off) and a failed write keeps the choice in
// memory for this page view.
export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    return parseConsent(window.localStorage.getItem(STORAGE_KEY)) ?? memoryConsent;
  } catch {
    return memoryConsent;
  }
}

export function getConsentState(): ConsentState {
  const consent = getConsent();
  if (consent === null) return null;
  return consent.analytics ? "accepted" : "rejected";
}

function writeConsent(value: ConsentValue | null) {
  memoryConsent = value;
  try {
    if (value === null) window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Storage unavailable: memoryConsent above still reflects the click.
  }
}

// GA4 sets `_ga` and `_ga_<ID>` on the highest domain it can, so expiring
// them means trying the host and every parent suffix. Withdrawing consent has
// to actually remove what was set while the visitor had accepted, not just
// stop new cookies appearing. Only these two names are touched.
function clearAnalyticsCookies() {
  const parts = window.location.hostname.split(".");
  const domains: (string | undefined)[] = [undefined];
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(parts.slice(i).join("."), "." + parts.slice(i).join("."));
  }

  document.cookie
    .split(";")
    .map((entry) => entry.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"))
    .forEach((name) => {
      domains.forEach((domain) => {
        document.cookie =
          `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/` +
          (domain ? `; domain=${domain}` : "");
      });
    });
}

// Google's documented switch: while this window flag is true, gtag sends
// nothing new.
function setAnalyticsDisabled(disabled: boolean) {
  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled;
}

// Turns the stored choice into behaviour. Runs once per consent change in
// every tab (the `storage` event fires in the *other* tabs), so rejecting or
// re-opening settings in one tab also stops a sibling tab that already had
// GA loaded.
function applyConsentSideEffects() {
  if (getConsentState() === "accepted") {
    setAnalyticsDisabled(false);
    return;
  }
  setAnalyticsDisabled(true);
  clearAnalyticsCookies();
  // GA4 queues some events (e.g. the 90% scroll hit) and sends them a few
  // seconds later, and the disable flag does not stop ones already queued.
  // If GA has already run in this page, reload so nothing queued can leave
  // after consent was withdrawn. window.gtag only exists once GA has loaded,
  // so this cannot loop: after the reload GA is not loaded.
  if (typeof (window as unknown as { gtag?: unknown }).gtag === "function") {
    window.location.reload();
  }
}

let effectsInstalled = false;

function ensureEffects() {
  if (effectsInstalled || typeof window === "undefined") return;
  effectsInstalled = true;
  window.addEventListener(CONSENT_EVENT, applyConsentSideEffects);
  // A `storage` event means storage works and another tab changed it, so
  // that is now the truth and any in-memory fallback is stale.
  window.addEventListener("storage", () => {
    memoryConsent = null;
    applyConsentSideEffects();
  });
  // A background tab can receive the storage event late, and a page restored
  // from the back/forward cache never receives it, so re-check the stored
  // choice whenever the tab comes back into view. notify() also lets the
  // banner and GA components re-read the choice.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) notify();
  });
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) notify();
  });
}

function notify() {
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: getConsent() }));
}

export function setConsent(analytics: boolean) {
  if (typeof window === "undefined") return;
  ensureEffects();
  writeConsent({ analytics, decidedAt: Date.now() });
  notify();
}

// Clearing the stored choice re-opens the banner, which is how the footer's
// "Cookie Settings" control lets a visitor change their mind later. Tracking
// is paused and analytics cookies cleared until they choose again.
export function clearConsent() {
  if (typeof window === "undefined") return;
  ensureEffects();
  writeConsent(null);
  notify();
}

export function onConsentChange(handler: (value: ConsentValue | null) => void) {
  if (typeof window === "undefined") return () => {};
  ensureEffects();
  const listener = () => handler(getConsent());
  window.addEventListener(CONSENT_EVENT, listener);
  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener(CONSENT_EVENT, listener);
    window.removeEventListener("storage", listener);
  };
}

function subscribe(callback: () => void) {
  return onConsentChange(() => callback());
}

// The server snapshot is "pending", so neither the banner nor GA is in the
// server HTML: no banner flash for returning visitors and no dead banner
// when JavaScript is off.
export function useConsentState(): ConsentState | "pending" {
  return useSyncExternalStore(subscribe, getConsentState, () => "pending" as const);
}
