import type { Metadata } from "next";
import Button from "@/components/Button";
import RoadDivider from "@/components/RoadDivider";
import { LINKS } from "@/lib/links";

// Next.js automatically injects a noindex meta tag on the built-in
// not-found boundary, so this metadata does not need to repeat it.
export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for has taken a wrong turn.",
};

export default function NotFound() {
  return (
    <>
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-asphalt px-5 py-24 text-center sm:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 70% at 50% 10%, rgba(247,198,0,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative flex flex-col items-center">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-safety-yellow">
            Wrong Turn
          </span>
          <h1 className="mt-3 font-display text-[22vw] font-semibold uppercase leading-none tracking-tight text-ink sm:text-8xl">
            4<span className="text-safety-yellow">0</span>4
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-dim sm:text-lg">
            This road doesn&apos;t go anywhere. The page you&apos;re
            looking for has been moved, renamed, or never existed.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/">Back to the Homepage</Button>
            <Button href={LINKS.submitFootage} external variant="outline">
              Submit Your Footage
            </Button>
          </div>
        </div>
      </section>
      <RoadDivider />
    </>
  );
}
