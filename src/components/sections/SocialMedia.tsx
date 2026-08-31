import Reveal from "@/components/Reveal";
import {
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  TiktokIcon,
} from "@/components/icons/SocialIcons";
import { LINKS } from "@/lib/links";

const PLATFORMS = [
  { name: "Facebook", href: LINKS.social.facebook, Icon: FacebookIcon },
  { name: "YouTube", href: LINKS.social.youtube, Icon: YoutubeIcon },
  { name: "Instagram", href: LINKS.social.instagram, Icon: InstagramIcon },
  { name: "TikTok", href: LINKS.social.tiktok, Icon: TiktokIcon },
];

export default function SocialMedia() {
  return (
    <section id="social" className="scroll-mt-20 bg-asphalt px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-safety-yellow">
          Join the Community
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
          Follow Norfolk Dash Cam
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-dim">
          New clips, road updates and Norfolk driving moments &mdash; posted
          across every platform we run.
        </p>
      </Reveal>

      <Reveal
        delay={0.1}
        className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {PLATFORMS.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-sm border border-asphalt-line bg-asphalt-raised px-4 py-7 transition-colors hover:border-safety-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-yellow"
          >
            <Icon className="h-8 w-8 text-ink-dim transition-colors group-hover:text-safety-yellow" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink-dim transition-colors group-hover:text-ink">
              {name}
            </span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
