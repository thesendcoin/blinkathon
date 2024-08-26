import HeroSection from "./components/HeroSection";
import DetailsSection from "./components/DetailsSection";
import TracksSection from "./components/TracksSection";
import { SponsorsSection } from "./components/SponsorsSection";

export default function Home() {
  return (
    <main className="bg-white h-full min-h-screen">
      <HeroSection />
      <DetailsSection />
      <TracksSection />
      <SponsorsSection />
    </main>
  );
}
