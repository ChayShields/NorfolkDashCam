"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { getConsent, onConsentChange } from "@/lib/consent";

function subscribe(callback: () => void) {
  return onConsentChange(() => callback());
}

function getSnapshot() {
  return getConsent()?.analytics ?? false;
}

function getServerSnapshot() {
  return false;
}

export default function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  const analyticsAllowed = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!analyticsAllowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        src={`/api/ga-config?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
    </>
  );
}
