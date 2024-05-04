import Image from "next/image";
import Hero from "./components/Hero";
import { FeatureSection } from "./components/FeatureSection";
import Footer from "./components/Footer";
import MapSection from "./components/MapSection";
import MessageSection from "./components/MessageSection";
import { IntroSectoin } from "./components/IntroSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <IntroSectoin />
      <FeatureSection />
      <MapSection />
      <MessageSection />
    </main>
  );
}
