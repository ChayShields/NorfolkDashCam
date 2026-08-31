import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { LINKS } from "@/lib/links";

export default function SubmitFootageSection() {
  return (
    <section className="relative overflow-hidden bg-asphalt-raised px-5 py-20 sm:px-8 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-2"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #0c0c0e 0 10px, var(--color-safety-yellow) 10px 20px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-2"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #0c0c0e 0 10px, var(--color-safety-yellow) 10px 20px)",
        }}
      />
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
          Got Dash Cam Footage?
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
          Send in your interesting, unusual or noteworthy footage captured
          on the roads of Norfolk &mdash; near-misses, bad driving, dash cam
          gold. If it happened on a Norfolk road, we want to see it.
        </p>
        <div className="mt-8">
          <Button href={LINKS.submitFootage} external>
            Submit Your Footage
          </Button>
        </div>
        <p className="mt-4 text-xs text-ink-dim/70">
          Opens our footage submission partner in a new tab.
        </p>
      </Reveal>
    </section>
  );
}
