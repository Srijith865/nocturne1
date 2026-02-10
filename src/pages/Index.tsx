import { Suspense, lazy } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
// import { Hero } from "@/components/ui/void-hero";
// const Hero = lazy(() => import("@/components/ui/void-hero").then(module => ({ default: module.Hero })));
import { MobileHero } from "@/components/MobileHero";
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
      {/* Hero Section with Conditional Rendering */}
      {isMobile ? (
        <div className="block md:hidden">
          <MobileHero />
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
