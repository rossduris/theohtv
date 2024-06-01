import ServicesSection from "./components/ServicesSection";
import MapSection from "./components/MapSection";
import MessageSection from "./components/MessageSection";
import AboutUsSection from "./components/AboutUsSection";
import VideoSection from "./components/VideoSection";
import GallerySection from "./components/GallerySection";
import CarCompanies from "./components/CarCompanies";

export default function Home() {
  return (
    <main className=" flex flex-col  w-full">
      <VideoSection />
      <AboutUsSection />

      <ServicesSection />

      <GallerySection />

      <MapSection />
      <MessageSection />
    </main>
  );
}
