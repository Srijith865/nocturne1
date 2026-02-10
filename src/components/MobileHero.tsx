import { ArrowRight, ShoppingBag, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import goatHero from "@/assets/goat-hero-mobile.png";

export const MobileHero = () => {
  const { totalItems } = useCart();

  return (
    <div className="relative min-h-svh w-full bg-background overflow-hidden flex flex-col">
      {/* Header */}
      <div className="relative z-20 flex justify-between items-center px-5 pt-5 pb-2">
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

      {/* Goat Image — centered showcase */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        {/* Ambient glow behind goat */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-muted/30 blur-[100px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[75vw] max-w-[320px] aspect-[3/4] mx-auto"
        >
          {/* Decorative frame lines */}
          <div className="absolute -inset-3 border border-border/20 pointer-events-none" />
          <div className="absolute -inset-1.5 border border-border/10 pointer-events-none" />
          
          <img
            src={goatHero}
            alt="NOCTURNE — The GOAT"
            className="w-full h-full object-cover"
          />

          {/* Subtle vignette over image */}
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none" />
          
          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 w-5 h-5 border-t border-l border-foreground/30" />
          <div className="absolute -top-3 -right-3 w-5 h-5 border-t border-r border-foreground/30" />
          <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b border-l border-foreground/30" />
          <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b border-r border-foreground/30" />
        </motion.div>

        {/* Label under image */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[9px] text-muted-foreground font-mono tracking-[0.4em] uppercase mt-5 text-center"
        >
          ✦ &nbsp; The G.O.A.T Collection &nbsp; ✦
        </motion.p>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 px-6 pb-8 pt-4">
        {/* Gothic divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-muted-foreground/40 text-xs">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[2rem] font-bold leading-[0.95] text-foreground tracking-tighter font-display uppercase mb-3 text-center"
        >
          Discover Bold,{" "}
          <span className="text-muted-foreground">Dark</span> Style
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted-foreground text-xs leading-relaxed text-center max-w-[260px] mx-auto mb-6"
        >
          Where gothic luxury meets streetwear. Embrace the darkness.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex gap-3"
        >
          <Link
            to="/shop"
            className="flex-1 bg-foreground text-background font-display text-xs font-semibold tracking-[0.15em] uppercase px-5 py-3.5 flex items-center justify-center gap-2 btn-touch transition-all hover:opacity-90 active:scale-[0.98]"
          >
            Shop Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/shop"
            className="flex-1 border border-border text-foreground font-display text-xs font-semibold tracking-[0.15em] uppercase px-5 py-3.5 flex items-center justify-center btn-touch transition-all hover:bg-secondary active:scale-[0.98]"
          >
            Explore
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
