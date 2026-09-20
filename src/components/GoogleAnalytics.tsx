"use client";

import Script from "next/script";
import { useConsentState } from "@/lib/consent";

// Renders nothing (so no request to Google at all) until the visitor has
// explicitly accepted. Rejecting, or never choosing, keeps GA off entirely.
export default function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  const consent = useConsentState();

  if (consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script src="/api/ga-config" strategy="afterInteractive" />
    </>
  );
}
