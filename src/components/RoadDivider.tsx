const CHEVRON_COUNT = 14;

export default function RoadDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-10 w-full overflow-hidden bg-asphalt ${className}`}
    >
      <div
        className="absolute left-1/2 top-1/2 h-[3px] w-[120%] -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-safety-yellow) 0 28px, transparent 28px 52px)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 700 40"
        preserveAspectRatio="none"
      >
        {Array.from({ length: CHEVRON_COUNT }).map((_, i) => {
          const x = (700 / CHEVRON_COUNT) * i + 700 / CHEVRON_COUNT / 2;
          return (
            <polyline
              key={i}
              points={`${x - 8},14 ${x},20 ${x - 8},26`}
              fill="none"
              stroke="var(--color-safety-yellow-dim)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.55}
            />
          );
        })}
      </svg>
    </div>
  );
}
