import Hero from "@/components/sections/Hero";
import AboutTeaser from "@/components/sections/AboutTeaser";
import SubmitFootageSection from "@/components/sections/SubmitFootageSection";
import SocialMedia from "@/components/sections/SocialMedia";
import AdvertisingSection from "@/components/sections/AdvertisingSection";
import RoadDivider from "@/components/RoadDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <RoadDivider />
      <AboutTeaser />
      <RoadDivider />
      <SubmitFootageSection />
      <RoadDivider />
      <SocialMedia />
      <RoadDivider />
      <AdvertisingSection />
    </>
  );
}
