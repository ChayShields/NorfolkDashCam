export default function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-asphalt px-5 pb-14 pt-20 sm:px-8 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 0%, rgba(247,198,0,0.12) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-safety-yellow">
          {kicker}
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-ink-dim sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
