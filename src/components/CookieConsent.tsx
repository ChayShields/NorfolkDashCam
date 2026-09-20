"use client";

import Link from "next/link";
import { clearConsent, setConsent, useConsentState } from "@/lib/consent";

// Used by the footer's "Cookie Settings" control. Clearing the stored choice
// re-opens the banner and pauses tracking until the visitor chooses again.
export function openCookieSettings() {
  clearConsent();
}

export default function CookieConsent() {
  const consent = useConsentState();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie settings"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-sm flex-col gap-3 rounded-sm border border-asphalt-line bg-asphalt-raised p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] sm:left-6 sm:right-auto sm:bottom-6"
    >
      <p className="text-sm leading-relaxed text-ink-dim">
        This site uses cookies only for analytics, and only if you say yes.
        Nothing is set until you choose.{" "}
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
          onClick={() => setConsent(true)}
          className="min-h-[44px] flex-1 rounded-sm bg-safety-yellow px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.08em] text-asphalt transition-transform duration-150 hover:brightness-105 active:scale-[0.97]"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => setConsent(false)}
          className="min-h-[44px] flex-1 rounded-sm border-2 border-safety-yellow px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.08em] text-safety-yellow transition-transform duration-150 hover:bg-safety-yellow hover:text-asphalt active:scale-[0.97]"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
