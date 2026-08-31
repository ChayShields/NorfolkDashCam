"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS, NAV_LINKS } from "@/lib/links";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-asphalt-line bg-asphalt/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-yellow"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo-badge.jpg"
            alt="Norfolk Dash Cam"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0"
            priority
          />
          <span className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
            Norfolk<span className="text-safety-yellow"> Dash Cam</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium uppercase tracking-[0.06em] text-ink-dim transition-colors hover:text-safety-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={LINKS.submitFootage} external className="px-5 py-2.5 text-xs">
            Submit Footage
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-yellow md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-safety-yellow transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-safety-yellow transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-safety-yellow transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-asphalt-line bg-asphalt px-5 pb-6 pt-2 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 font-display text-base font-medium uppercase tracking-wide text-ink-dim hover:text-safety-yellow"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={LINKS.submitFootage}
            external
            className="mt-3 w-full"
          >
            Submit Footage
          </Button>
        </nav>
      )}
    </header>
  );
}
