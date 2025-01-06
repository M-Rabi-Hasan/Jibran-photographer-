// src/app/page.tsx
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import { HeroSection } from './components/HeroSection';
import SelectedWorks from './components/SelectedWorks';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SelectedWorks />
      <Footer/>
      {/* Leave space for further sections */}
    </>
  );
}
