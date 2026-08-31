import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutTeaser() {
  return (
    <section className="bg-asphalt px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-safety-yellow">
            About the Channel
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            What Norfolk Dash Cam Is
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-dim">
            Norfolk Dash Cam shares dash cam footage of road incidents,
            near-misses and everyday driving from across the county &mdash;
            near-misses, close calls, questionable overtakes and everything
            in between. It&apos;s a growing community of Norfolk drivers
            watching out for each other, one clip at a time.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-dim">
            Every clip is shared across Facebook, YouTube, Instagram and
            TikTok, built entirely from footage sent in by drivers like you.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.08em] text-safety-yellow underline decoration-safety-yellow/30 underline-offset-4 hover:decoration-safety-yellow"
          >
            Read the full story
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="overflow-hidden rounded-sm border border-asphalt-line bg-asphalt-raised">
            <Image
              src="/brand/banner-reference.jpg"
              alt="Norfolk Dash Cam brand banner across Facebook, YouTube, Instagram and TikTok"
              width={1400}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-16 w-16 rounded-sm bg-safety-yellow sm:-bottom-4 sm:-right-4 sm:h-20 sm:w-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #0c0c0e 0 8px, var(--color-safety-yellow) 8px 16px)",
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
