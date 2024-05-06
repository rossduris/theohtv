import Image from "next/image";
import Hero from "./components/Hero";
import { FeatureSection } from "./components/FeatureSection";
import Footer from "./components/Footer";
import MapSection from "./components/MapSection";
import MessageSection from "./components/MessageSection";
import { IntroSection } from "./components/IntroSection";

export default function Home() {
  return (
    <main className=" flex flex-col  w-full">
      <Hero />
      <IntroSection />
      <FeatureSection />
      <MapSection />
      <MessageSection />
    </main>
  );
}
