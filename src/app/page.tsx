import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import TracksSection from './components/TracksSection';

export default function Home() {
  return (
    <main className='bg-white h-full min-h-screen'>
      <HeroSection />
      <DetailsSection />
      <TracksSection />
    </main>
  );
}
