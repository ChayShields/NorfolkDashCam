const STORAGE_KEY = "cookie-consent";
const CONSENT_EVENT = "cookieconsentchange";

export type ConsentValue = {
  analytics: boolean;
  decidedAt: number;
};

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentValue;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean) {
  if (typeof window === "undefined") return;
  const value: ConsentValue = { analytics, decidedAt: Date.now() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function onConsentChange(
  handler: (value: ConsentValue | null) => void,
) {
  if (typeof window === "undefined") return () => {};
  const listener = (event: Event) => {
    handler((event as CustomEvent<ConsentValue | null>).detail);
  };
  window.addEventListener(CONSENT_EVENT, listener);
  return () => window.removeEventListener(CONSENT_EVENT, listener);
}
