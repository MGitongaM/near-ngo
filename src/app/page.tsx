import HeroSection from "@/components/homePage/HeroSection";
import InfoSection from "@/components/homePage/InfoSection";
import MemberSection from "@/components/homePage/MemberSection";
import { Metadata } from "next";

const url = "/images/Near Open Graph.png";

export const metadata: Metadata = {
  title: "Home - NEAR",
  description:
    "At NEAR, we are dedicated to reimagining and reshaping the global aid system to ensure it truly serves and support local civil society in the Global South.",
  openGraph: {
    images: {
      width: 1200,
      height: 627,
      url,
    },
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <MemberSection />
    </>
  );
}
