import { ErrorBoundary } from "@/components/ui/error-boundary";
import { Hero } from "@/components/ui/void-hero";
import { useIsMobile } from "@/hooks/use-mobile";
import OfferStrip from '@/components/OfferStrip';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import ProductSection from '@/components/ProductSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  const navigationLinks = [
    { name: 'HOME', href: '/' },
    { name: 'WORK', href: '/work' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' }
  ];

  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <OfferStrip />

      {/* Hero Section with Conditional Rendering */}
      {isMobile ? (
        <div className="block md:hidden">
          <ErrorBoundary fallback={<div className="h-screen w-full bg-black text-white flex items-center justify-center">Mobile View Loading...</div>}>
            <Hero
              title="Sculpted Light and Shadow"
              description="A dynamic form drifts through luminous voids — edges curve, surfaces gleam, and subtle glow pulses like a heartbeat. Motion and material merge, revealing the art hidden within geometry."
              links={navigationLinks}
            />
          </ErrorBoundary>
        </div>
      ) : (
        <div className="hidden md:block">
          <Header />
          <HeroSection />
        </div>
      )}

      <main>
        <CategorySection />
        <ProductSection />
        <VideoSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
