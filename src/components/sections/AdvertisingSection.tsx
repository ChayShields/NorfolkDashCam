import Reveal from "@/components/Reveal";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { LINKS } from "@/lib/links";

export default function AdvertisingSection() {
  return (
    <section className="bg-asphalt px-5 py-20 sm:px-8 sm:py-28">
      <Reveal
        className="relative mx-auto max-w-4xl overflow-hidden rounded-sm p-[3px]"
        delay={0}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #0c0c0e 0 14px, var(--color-safety-yellow) 14px 28px)",
          }}
        />
        <div className="relative flex flex-col items-center gap-6 bg-asphalt-raised px-6 py-14 text-center sm:px-14">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-safety-yellow">
            For Local Businesses
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            Want to Advertise Your Business?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
            Put your business in front of the Norfolk Dash Cam audience. If
            you&apos;re a local business interested in advertising across
            our social media platforms, get in touch to discuss advertising
            opportunities.
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
  );
}
