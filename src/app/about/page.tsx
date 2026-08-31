import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import RoadDivider from "@/components/RoadDivider";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import SocialMedia from "@/components/sections/SocialMedia";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "About",
  description:
    "Norfolk Dash Cam shares dash cam footage of road incidents from across Norfolk. Learn what we do, how the community grew, and how to submit your own clips.",
  alternates: {
    canonical: "/about",
  },
};

const PILLARS = [
  {
    title: "Dash Cam Footage & Road Incidents",
    body: "At the core of Norfolk Dash Cam is real footage from real Norfolk drivers: near-misses, dangerous overtakes, careless driving and the everyday moments that make you shake your head at your own dashboard. Every clip is genuine, submitted by the community, and shared to raise awareness of what actually happens on our roads.",
  },
  {
    title: "Social Media Presence",
    body: "Norfolk Dash Cam lives across Facebook, YouTube, Instagram and TikTok, posting regularly to a growing audience of Norfolk drivers and road users. Each platform gets its own mix of clips, updates and community moments &mdash; built for wherever you already scroll.",
  },
  {
    title: "Community Engagement",
    body: "This isn't a one-way broadcast. Norfolk Dash Cam is powered by the people watching Norfolk's roads every day. Comments, shares and submissions all feed back into the channel, building a community that looks out for one another behind the wheel.",
  },
  {
    title: "How You Can Submit Footage",
    body: "Got something worth sharing? Submitting your dash cam footage takes minutes through our footage partner &mdash; just upload your clip and a short description of what happened, and it could be featured across our channels.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Norfolk Dash Cam"
        title="Norfolk's Roads, Told Through Real Footage"
        description="Norfolk Dash Cam exists to document what actually happens on Norfolk's roads &mdash; shared by drivers, for drivers, across every major platform."
      />
      <RoadDivider />

      <section className="bg-asphalt-raised px-5 py-16 sm:px-8">
        <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-sm border border-asphalt-line">
          <Image
            src="/brand/banner-reference.jpg"
            alt="Norfolk Dash Cam across Facebook, YouTube, Instagram and TikTok"
            width={1400}
            height={800}
            className="h-full w-full object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-asphalt px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-14">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.05}>
              <div className="flex items-start gap-4">
                <span className="mt-1 font-display text-2xl font-semibold text-safety-yellow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink">
                    {pillar.title}
                  </h2>
                  <p
                    className="mt-3 text-base leading-relaxed text-ink-dim"
                    dangerouslySetInnerHTML={{ __html: pillar.body }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.15}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-5 rounded-sm border border-asphalt-line bg-asphalt-raised px-6 py-12 text-center"
        >
          <h2 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink sm:text-3xl">
            Got Something to Share?
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-ink-dim">
            Send in your footage and it could be featured across Norfolk
            Dash Cam&apos;s channels.
          </p>
          <Button href={LINKS.submitFootage} external>
            Submit Your Footage
          </Button>
        </Reveal>
      </section>

      <RoadDivider />
      <SocialMedia />
    </>
  );
}
