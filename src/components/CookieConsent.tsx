"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, setConsent } from "@/lib/consent";

const OPEN_SETTINGS_EVENT = "opencookiesettings";

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Deliberately not a lazy useState initializer: getConsent() reads
    // localStorage, which doesn't exist during SSR (the function returns
    // null there), so seeding state from it synchronously during render
    // would make the server always render the banner visible regardless of
    // the client's real stored consent - a genuine hydration mismatch, not
    // just a lint nitpick. Starting at false and correcting once mounted is
    // the correct SSR-safe pattern here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(getConsent() === null);

    const openHandler = () => setVisible(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openHandler);
  }, []);

  if (!visible) return null;

  const decide = (analytics: boolean) => {
    setConsent(analytics);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie settings"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-sm flex-col gap-3 rounded-sm border border-asphalt-line bg-asphalt-raised p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] sm:left-6 sm:right-auto sm:bottom-6"
    >
      <p className="text-sm leading-relaxed text-ink-dim">
        This site uses cookies only for anonymised analytics, and only if
        you say yes. Nothing is set until you choose.{" "}
        <Link
          href="/privacy-policy"
          className="text-ink underline decoration-asphalt-line underline-offset-4 hover:text-safety-yellow"
        >
          Privacy Policy
        </Link>
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => decide(true)}
          className="flex-1 rounded-sm bg-safety-yellow px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.08em] text-asphalt transition-transform duration-150 hover:brightness-105 active:scale-[0.97]"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => decide(false)}
          className="flex-1 rounded-sm border-2 border-safety-yellow px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.08em] text-safety-yellow transition-transform duration-150 hover:bg-safety-yellow hover:text-asphalt active:scale-[0.97]"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
