import ServicesSection from "./components/ServicesSection";
import MapSection from "./components/MapSection";
import AboutUsSection from "./components/AboutUsSection";
import VideoSection from "./components/VideoSection";
import GallerySection from "./components/GallerySection";
import CarCompanies from "./components/CarCompanies";
import ImageSlider from "./components/ImageSlider";
import FlexGallery from "./components/FlexGallery";

export default function Home() {
  return (
    <main className=" flex flex-col  w-full justify-center items-center">
      <VideoSection />
      <AboutUsSection />
      <CarCompanies />

      <ServicesSection />

      <FlexGallery />
      <MapSection />
    </main>
  );
}
