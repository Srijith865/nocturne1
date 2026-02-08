import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Skull, Menu, X, Sparkles, Shirt, Layers, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCart } from '@/contexts/CartContext';
import SearchDialog from '@/components/SearchDialog';
import PantsIcon from '@/components/icons/PantsIcon';

const navLinks = [
  { label: 'New Arrivals', href: '/shop', icon: Sparkles },
  { label: 'Tops', href: '/shop', icon: Shirt },
  { label: 'Bottoms', href: '/shop', icon: PantsIcon, isCustom: true },
  { label: 'Basics', href: '/shop', icon: Layers },
  { label: 'Sale', href: '/shop', icon: Tag },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastOfferBar, setIsPastOfferBar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsPastOfferBar(window.scrollY > 32);
      if (window.scrollY > 32) setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Original Header - hides when scrolled */}
      <header 
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
          isPastOfferBar ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        } ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="/" 
              className="font-display text-2xl lg:text-3xl font-bold tracking-tight"
            >
              NOCTURNE
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm font-medium tracking-wider uppercase"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4 lg:gap-6">
              <button 
                className="p-2 transition-opacity hover:opacity-60"
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </button>
              <Link 
                to="/cart"
                className="p-2 transition-opacity hover:opacity-60 relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-[10px] font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button 
                className="p-2 transition-opacity hover:opacity-60"
                aria-label="Account"
              >
                <Skull className="w-5 h-5" />
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2 transition-opacity hover:opacity-60"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <nav className="container py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-display tracking-wider uppercase py-2 border-b border-border/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Dock Navigation - appears when scrolled (desktop only) */}
      <AnimatePresence>
        {isPastOfferBar && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
          >
            <div className="pointer-events-auto">
              <Dock 
                className="bg-card/95 backdrop-blur-md border border-border shadow-2xl"
                magnification={60}
                distance={100}
                panelHeight={56}
              >
                {navLinks.map((item) => (
                  <a key={item.label} href={item.href}>
                    <DockItem className="aspect-square rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
                      <DockLabel className="bg-card border-border text-foreground font-display tracking-wider uppercase text-xs">
                        {item.label}
                      </DockLabel>
                      <DockIcon className="text-foreground">
                        {item.isCustom ? (
                          <item.icon className="w-full h-full" />
                        ) : (
                          <item.icon className="w-full h-full" />
                        )}
                      </DockIcon>
                    </DockItem>
                  </a>
                ))}
                
                {/* Separator */}
                <div className="w-px h-8 bg-border self-center mx-1" />
                
                {/* Utility Icons */}
                <div onClick={() => setIsSearchOpen(true)}>
                  <DockItem className="aspect-square rounded-full bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
                    <DockLabel className="bg-card border-border text-foreground font-display tracking-wider uppercase text-xs">
                      Search
                    </DockLabel>
                    <DockIcon className="text-foreground">
                      <Search className="w-full h-full" />
                    </DockIcon>
                  </DockItem>
                </div>
                
                <Link to="/cart">
                  <DockItem className="aspect-square rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
                    <DockLabel className="bg-card border-border text-foreground font-display tracking-wider uppercase text-xs">
                      Cart ({totalItems})
                    </DockLabel>
                    <DockIcon className="text-foreground">
                      <ShoppingBag className="w-full h-full" />
                    </DockIcon>
                  </DockItem>
                </Link>
                
                <DockItem className="aspect-square rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
                  <DockLabel className="bg-card border-border text-foreground font-display tracking-wider uppercase text-xs">
                    Account
                  </DockLabel>
                  <DockIcon className="text-foreground">
                    <Skull className="w-full h-full" />
                  </DockIcon>
                </DockItem>
              </Dock>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Dialog */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
