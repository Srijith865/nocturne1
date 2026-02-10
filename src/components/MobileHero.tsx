import { ArrowRight, ShoppingBag, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import goatHero from "@/assets/goat-hero-mobile.png";

export const MobileHero = () => {
  const { totalItems } = useCart();

  return (
    <div className="relative h-svh w-full bg-background overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-[10%] right-[10%] w-[250px] h-[250px] rounded-full bg-muted/20 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-20 flex justify-between items-center px-5 pt-5">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
          NOCTURNE
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/cart" className="p-2 relative" aria-label="Cart">
            <ShoppingBag className="w-[18px] h-[18px] text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-foreground text-background text-[8px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="p-2" aria-label="Menu">
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Unified content area */}
      <div className="relative z-10 h-[calc(100svh-60px)] flex flex-col justify-end px-6 pb-8">
        
        {/* Goat image — right-aligned, vertically centered */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-[5%] bottom-[30%] w-[60%] pointer-events-none"
        >
          <img
            src={goatHero}
            alt="NOCTURNE — The GOAT"
            className="w-full h-full object-contain object-right-top"
          />
          {/* Left fade into background for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Text content — left-aligned, overlays the bottom */}
        <div className="relative z-10">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-6 h-px bg-muted-foreground/40" />
            <span className="text-[9px] text-muted-foreground font-mono tracking-[0.35em] uppercase">
              The G.O.A.T Collection
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-[2.8rem] font-bold leading-[0.9] text-foreground tracking-tighter font-display uppercase mb-4"
          >
            Discover<br />
            Bold, <span className="text-muted-foreground">Dark</span><br />
            Style
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-muted-foreground text-sm leading-relaxed max-w-[240px] mb-7"
          >
            Where gothic luxury meets streetwear. Embrace the darkness.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-3"
          >
            <Link
              to="/shop"
              className="bg-foreground text-background font-display text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3.5 flex items-center gap-2 btn-touch transition-all active:scale-[0.98]"
            >
              Shop Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/shop"
              className="border border-border text-foreground font-display text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3.5 btn-touch transition-all hover:bg-secondary active:scale-[0.98]"
            >
              Explore
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
