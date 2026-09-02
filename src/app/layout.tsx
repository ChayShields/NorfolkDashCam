import type { Metadata } from "next";
import { Oswald, Work_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-RQLN4XL8DN";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Norfolk Dash Cam | Capturing the Roads of Norfolk",
    template: "%s | Norfolk Dash Cam",
  },
  description:
    "Norfolk Dash Cam shares dash cam footage of road incidents from across Norfolk. Submit your own footage or follow us on Facebook, YouTube, Instagram and TikTok.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Norfolk Dash Cam",
    title: "Norfolk Dash Cam | Capturing the Roads of Norfolk",
    description:
      "Norfolk Dash Cam shares dash cam footage of road incidents from across Norfolk. Submit your own footage or follow us on social media.",
    images: ["/brand/banner-reference.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norfolk Dash Cam | Capturing the Roads of Norfolk",
    description:
      "Norfolk Dash Cam shares dash cam footage of road incidents from across Norfolk.",
    images: ["/brand/banner-reference.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Norfolk Dash Cam",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-badge.jpg`,
  description:
    "Norfolk Dash Cam shares dash cam footage of road incidents from across Norfolk, UK, across Facebook, YouTube, Instagram and TikTok.",
  sameAs: [
    "https://www.facebook.com/p/Norfolk-Dash-Cam-100063704434791/",
    "https://www.youtube.com/c/NorfolkDashCam",
    "https://www.instagram.com/norfolkdashcam/",
    "https://www.tiktok.com/@norfolkdashcam",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+44-7356-290069",
    url: "https://wa.me/447356290069",
    areaServed: "GB",
    availableLanguage: "English",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${oswald.variable} ${workSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-asphalt font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div
          style={{ display: "none" }}
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html:
              "<!-- THESIS: The homepage is a road you drive down, not a stack of hero-plus-cards; lane-line dividers and chevrons replace default section breaks. OWN-WORLD: Near-black asphalt ground, safety-yellow as the one committed saturated color (30-60% via stripes, buttons, dividers), condensed road-sign display type (Oswald) over humanist body grotesk (Work Sans), UK hazard-sign component language (plates, diagonal caution stripes). STORY: A social visitor lands, instantly reads what Norfolk Dash Cam is, is walked down the road through proof, submission, socials, and advertising, and acts within seconds. FIRST VIEWPORT: Full-bleed dark asphalt hero, camera-badge logo in nav, center lane line receding to a vanishing point, condensed headline plus tagline, yellow road-sign primary CTA, chevrons animating downward as the scroll cue. FORM: Road/route journey scroll, surface seed 2ccb7ea6, dealt index 3 (lead). FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. -->",
          }}
        />
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
