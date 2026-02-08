import { motion } from 'framer-motion';
import heroModelMain from '@/assets/hero-model-main.png';
import heroModelLeft from '@/assets/hero-model-left.png';
import heroModelRight from '@/assets/hero-model-right.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-32">
      {/* Background Brand Typography */}
      <div className="brand-text-bg">
        NOCTURNE
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10" />

      {/* Models Container */}
      <div className="container relative z-20 pb-12 lg:pb-20">
        <div className="grid grid-cols-3 gap-4 lg:gap-8 items-end max-w-6xl mx-auto">
          {/* Left Model */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroModelLeft}
              alt="Streetwear model in dark jacket"
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Center Model - Seated */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative col-span-1"
          >
            <img
              src={heroModelMain}
              alt="Streetwear model in contemplative seated pose"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <img
              src={heroModelRight}
              alt="Streetwear model in dynamic pose"
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-foreground to-transparent"
          />
        </motion.div>
      </div>

      {/* Hero Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-32 lg:bottom-40 left-0 right-0 z-20"
      >
        <div className="container">
          <p className="text-center text-sm lg:text-base tracking-ultra uppercase text-muted-foreground">
            Dark Aesthetics for the Bold
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
