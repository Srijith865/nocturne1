import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-8">
              About Us
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Born from the shadows of urban culture, NOCTURNE represents the intersection of 
                darkness and design. We craft garments for those who walk their own path — 
                individuals who find beauty in the unconventional and strength in self-expression.
              </p>
              <p>
                Each piece in our collection is designed with intention, constructed with premium 
                materials, and finished with meticulous attention to detail. We believe clothing 
                should be more than fabric — it should be a statement.
              </p>
              <p>
                Our vision is clear: to create timeless streetwear that transcends trends and 
                speaks to the soul of modern urban culture. Welcome to the night.
              </p>
            </div>
            <motion.a
              href="#story"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-3 mt-8 text-sm tracking-widest uppercase font-medium"
            >
              Read Our Story
              <span className="text-2xl">→</span>
            </motion.a>
          </motion.div>

          {/* Gothic Cross Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-80 lg:w-80 lg:h-96">
              {/* Cross Structure */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Vertical Bar */}
                <div className="absolute w-16 lg:w-20 h-full bg-gradient-to-b from-foreground/5 via-foreground/10 to-foreground/5" />
                {/* Horizontal Bar */}
                <div className="absolute w-full h-16 lg:h-20 top-1/4 bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5" />
              </div>
              
              {/* Decorative Inner Cross */}
              <div className="absolute inset-8 flex items-center justify-center opacity-50">
                {/* Vertical Bar Inner */}
                <div className="absolute w-8 lg:w-10 h-full border-l border-r border-foreground/20" />
                {/* Horizontal Bar Inner */}
                <div className="absolute w-full h-8 lg:h-10 top-1/4 border-t border-b border-foreground/20" />
              </div>

              {/* Center Mark */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-foreground/30 rotate-45" />

              {/* Brand Mark */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                <span className="font-display text-xs tracking-ultra uppercase text-muted-foreground">
                  Est. 2024
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
