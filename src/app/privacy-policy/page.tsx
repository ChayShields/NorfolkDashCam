import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RoadDivider from "@/components/RoadDivider";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Norfolk Dash Cam collects, uses and protects your data, including our use of Google Analytics cookies.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const SECTIONS = [
  {
    title: "Who We Are",
    body: "Norfolk Dash Cam shares dash cam footage of road incidents from across Norfolk across Facebook, YouTube, Instagram and TikTok. Any question about this policy or your data can be sent to <a href=\"mailto:Clips@norfolkdashcam.co.uk\" class=\"underline decoration-asphalt-line underline-offset-4 hover:text-safety-yellow\">Clips@norfolkdashcam.co.uk</a>.",
  },
  {
    title: "Cookies & Analytics",
    body: "This site uses Google Analytics (GA4) to understand how visitors use the site, but only once you give consent via the cookie banner &mdash; no analytics cookie is set until you actively click Accept. IP addresses are anonymised before being processed. You can change your choice at any time using the &ldquo;Cookie Settings&rdquo; link in the footer. If you reject or ignore the banner, no analytics cookies are set and your visit is not tracked.",
  },
  {
    title: "Footage Submissions",
    body: "If you submit dash cam footage, this is handled by our third-party submission partner, not stored directly on this website. If you use our sponsorship enquiry form, this is handled by Jotform. We only see the information you choose to submit through these forms, used solely to review submissions and respond to enquiries.",
  },
  {
    title: "Contacting Us",
    body: "If you email us or message us via WhatsApp, we hold that conversation only for as long as needed to respond to you. We do not add you to any mailing list or share your contact details with third parties.",
  },
  {
    title: "Your Rights",
    body: "Under UK GDPR you have the right to access, correct, or request deletion of your personal data, to object to or restrict how it's processed, to request a copy in a portable format, and to withdraw analytics consent at any time. To exercise any of these, email <a href=\"mailto:Clips@norfolkdashcam.co.uk\" class=\"underline decoration-asphalt-line underline-offset-4 hover:text-safety-yellow\">Clips@norfolkdashcam.co.uk</a>. You also have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk if you believe your data has been mishandled.",
  },
  {
    title: "Changes To This Policy",
    body: "We may update this policy from time to time as the site changes. The current version always applies from the date it's published on this page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        description="How Norfolk Dash Cam collects, uses and protects your data."
      />
      <RoadDivider />

      <section className="bg-asphalt px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-12">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.05}>
              <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-ink">
                {section.title}
              </h2>
              <p
                className="mt-3 text-base leading-relaxed text-ink-dim"
                dangerouslySetInnerHTML={{ __html: section.body }}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
