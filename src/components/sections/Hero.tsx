import Button from "@/components/Button";
import ScrollChevrons from "@/components/ScrollChevrons";
import { LINKS } from "@/lib/links";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden bg-asphalt px-5 pb-8 pt-16 sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 12%, rgba(247,198,0,0.14) 0%, transparent 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Road perspective lines converging to a vanishing point */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full opacity-70"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
      >
        <polygon points="500,140 430,500 570,500" fill="#1a1a1d" />
        <line
          x1="500"
          y1="140"
          x2="330"
          y2="500"
          stroke="var(--color-safety-yellow)"
          strokeWidth="3"
          strokeDasharray="18 22"
          opacity="0.7"
        />
        <line
          x1="500"
          y1="140"
          x2="670"
          y2="500"
          stroke="var(--color-safety-yellow)"
          strokeWidth="3"
          strokeDasharray="18 22"
          opacity="0.7"
        />
        <line
          x1="500"
          y1="140"
          x2="500"
          y2="500"
          stroke="var(--color-ink)"
          strokeWidth="2"
          strokeDasharray="14 26"
          opacity="0.35"
        />
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-sm border border-safety-yellow/40 bg-safety-yellow/10 px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.18em] text-safety-yellow">
          Norfolk&apos;s Roads, Documented
        </span>
        <h1 className="font-display text-[13vw] font-semibold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
          Norfolk <span className="text-safety-yellow">Dash Cam</span>
        </h1>
        <p className="mt-6 max-w-xl text-balance text-base text-ink-dim sm:text-lg">
          Capturing the roads of Norfolk, one dash cam clip at a time.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Button href={LINKS.submitFootage} external>
            Submit Your Footage
          </Button>
          <Button href="/#social" variant="outline">
            Follow Norfolk Dash Cam
          </Button>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-2 pt-10">
        <ScrollChevrons />
      </div>
    </section>
  );
}
