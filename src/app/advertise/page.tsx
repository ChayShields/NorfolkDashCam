import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RoadDivider from "@/components/RoadDivider";
import Reveal from "@/components/Reveal";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Advertise",
  description:
    "Advertise your local business across Norfolk Dash Cam's Facebook, YouTube, Instagram and TikTok audience. Get in touch via WhatsApp or our enquiry form.",
  alternates: {
    canonical: "/advertise",
  },
};

const REASONS = [
  {
    title: "An Engaged Local Audience",
    body: "Norfolk Dash Cam reaches drivers and road users across the county who actively watch, share and comment &mdash; a genuinely local audience, not a generic feed.",
  },
  {
    title: "Multi-Platform Reach",
    body: "Your business gets exposure across Facebook, YouTube, Instagram and TikTok, meeting the audience wherever they already spend their time.",
  },
  {
    title: "Content People Actually Watch",
    body: "Dash cam clips are naturally high-engagement content. Advertising alongside it means your business is seen, not scrolled past.",
  },
];

export default function AdvertisePage() {
  return (
    <>
      <PageHero
        kicker="For Local Businesses"
        title="Advertise With Norfolk Dash Cam"
        description="Put your business in front of an engaged Norfolk audience across Facebook, YouTube, Instagram and TikTok."
      />
      <RoadDivider />

      <section className="bg-asphalt px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          {REASONS.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={i * 0.08}
              className="rounded-sm border border-asphalt-line bg-asphalt-raised p-7"
            >
              <span className="font-display text-xl font-semibold text-safety-yellow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-lg font-semibold uppercase tracking-tight text-ink">
                {reason.title}
              </h2>
              <p
                className="mt-2 text-sm leading-relaxed text-ink-dim"
                dangerouslySetInnerHTML={{ __html: reason.body }}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <RoadDivider />

      <section className="bg-asphalt-raised px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-sm p-[3px]">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #17171a 0 14px, var(--color-safety-yellow) 14px 28px)",
            }}
          />
          <div className="relative flex flex-col items-center gap-6 bg-asphalt px-6 py-14 text-center sm:px-14">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-safety-yellow">
              Ready to Get Started?
            </span>
            <h2 className="max-w-2xl font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
              Let&apos;s Talk Advertising
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
              Message us on WhatsApp for a quick chat, or fill in our
              enquiry form and we&apos;ll come back to you with advertising
              options.
            </p>
            <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-safety-yellow px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-asphalt shadow-[0_4px_0_0_var(--color-safety-yellow-dim)] transition-transform duration-150 hover:brightness-105 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-yellow active:scale-[0.97]"
              >
                <WhatsappIcon className="h-5 w-5" />
                Message on WhatsApp
              </a>
              <a
                href={LINKS.sponsorshipForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-safety-yellow px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-safety-yellow transition-colors hover:bg-safety-yellow hover:text-asphalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-yellow"
              >
                Enquiry Form
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
