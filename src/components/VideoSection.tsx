import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            The Vision
          </h2>
          <p className="text-muted-foreground tracking-wide max-w-xl mx-auto">
            A glimpse into our world — where darkness meets design
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video bg-card overflow-hidden group cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {/* Video Placeholder / Thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-br from-gothic-charcoal to-background flex items-center justify-center">
            {/* Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <span className="font-display text-[20vw] font-bold tracking-tighter">
                NOCTURNE
              </span>
            </div>
            
            {/* Play Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 border-2 border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300"
            >
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </motion.button>

            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-foreground/20" />
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-foreground/20" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-foreground/20" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-foreground/20" />
          </div>

          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-background to-transparent">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
              Campaign Film
            </p>
            <h3 className="font-display text-xl lg:text-2xl font-semibold">
              Shadow Series — Fall/Winter 2024
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
