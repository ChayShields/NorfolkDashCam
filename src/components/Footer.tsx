"use client";

import Image from "next/image";
import Link from "next/link";
import { LINKS, NAV_LINKS } from "@/lib/links";
import { openCookieSettings } from "@/components/CookieConsent";

const SOCIAL_LINKS = [
  { label: "Facebook", href: LINKS.social.facebook },
  { label: "YouTube", href: LINKS.social.youtube },
  { label: "Instagram", href: LINKS.social.instagram },
  { label: "TikTok", href: LINKS.social.tiktok },
];

export default function Footer() {
  return (
    <footer className="border-t border-asphalt-line bg-asphalt">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/logo-badge.jpg"
                alt="Norfolk Dash Cam"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="font-display text-base font-semibold uppercase tracking-wide text-ink">
                Norfolk Dash Cam
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ink-dim">
              Capturing the roads of Norfolk, one dash cam clip at a time.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-safety-yellow">
              Navigate
            </h3>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-dim transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-safety-yellow">
              Follow
            </h3>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-dim transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-safety-yellow">
              Get Involved
            </h3>
            <a
              href={LINKS.submitFootage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-dim transition-colors hover:text-ink"
            >
              Submit Footage
            </a>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-dim transition-colors hover:text-ink"
            >
              Advertise via WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-asphalt-line pt-6 text-center">
          <div className="flex items-center gap-4 text-xs text-ink-dim/70">
            <Link
              href="/privacy-policy"
              className="underline decoration-asphalt-line underline-offset-4 transition-colors hover:text-safety-yellow"
            >
              Privacy Policy
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="underline decoration-asphalt-line underline-offset-4 transition-colors hover:text-safety-yellow"
            >
              Cookie Settings
            </button>
          </div>
          <p className="text-xs text-ink-dim/70">
            &copy; {new Date().getFullYear()} Norfolk Dash Cam. All rights reserved.
          </p>
          <a
            href={LINKS.developerCredit}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-dim/70 underline decoration-asphalt-line underline-offset-4 transition-colors hover:text-safety-yellow"
          >
            Designed &amp; Developed by Chay Shields
          </a>
        </div>
      </div>
    </footer>
  );
}
