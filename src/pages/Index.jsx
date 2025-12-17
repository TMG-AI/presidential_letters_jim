import { HeroSection } from "../components/HeroSection";
import { LettersGallery } from "../components/LettersGallery";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-parchment-gradient paper-texture">
      <HeroSection />
      <LettersGallery />
      <Footer />
    </main>
  );
};

export default Index;
