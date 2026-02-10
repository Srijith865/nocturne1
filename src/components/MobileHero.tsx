import { ArrowRight, Search, ShoppingBag, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import goatHero from "@/assets/goat-hero-mobile.png";

export const MobileHero = () => {
  const { totalItems } = useCart();

  return (
    <div className="relative min-h-svh w-full bg-background overflow-hidden">
      {/* Goat Image - positioned to the right */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-[-15%] top-[5%] w-[85%] h-[90%]">
          <img
            src={goatHero}
            alt="NOCTURNE - The GOAT"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
      </div>

      {/* Subtle gothic texture */}
      <div className="absolute inset-0 gothic-skull-bg z-[1]" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center px-5 pt-5">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
          NOCTURNE
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/cart" className="p-2 relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-foreground text-background text-[10px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="p-2" aria-label="Menu">
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-end h-[calc(100svh-60px)] px-6 pb-10">
        {/* Gothic ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-[10px] tracking-[0.3em] font-mono uppercase">Est. MMXXIV</span>
            <div className="w-8 h-px bg-muted-foreground/30" />
            <span className="text-[10px] tracking-[0.3em] font-mono uppercase">Gothic Streetwear</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[3.2rem] font-bold leading-[0.9] text-foreground tracking-tighter font-display uppercase mb-4"
        >
          Discover<br />
          Bold,{" "}
          <span className="text-muted-foreground">Dark</span><br />
          Style
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted-foreground text-sm leading-relaxed max-w-[280px] mb-6"
        >
          Where gothic luxury meets streetwear. Embrace the darkness with NOCTURNE's curated collections.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex gap-3 mb-8"
        >
          <Link
            to="/shop"
            className="bg-foreground text-background font-display text-sm font-semibold tracking-wider uppercase px-6 py-3.5 flex items-center gap-2 btn-touch transition-opacity hover:opacity-90"
          >
            Shop Now <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/shop"
            className="border border-border text-foreground font-display text-sm font-semibold tracking-wider uppercase px-6 py-3.5 btn-touch transition-colors hover:bg-secondary"
          >
            Explore
          </Link>
        </motion.div>

        {/* Footer tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p className="text-[10px] text-muted-foreground font-mono tracking-[0.3em] uppercase">
            01 — The GOAT Collection
          </p>
        </motion.div>
      </div>
    </div>
  );
};
