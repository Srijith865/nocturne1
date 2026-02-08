import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'New Arrivals', href: '#' },
    { label: 'Best Sellers', href: '#' },
    { label: 'Tops', href: '#' },
    { label: 'Bottoms', href: '#' },
    { label: 'Outerwear', href: '#' },
  ],
  help: [
    { label: 'Contact Us', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Sustainability', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="py-16 lg:py-24 bg-card border-t border-border">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="font-display text-2xl font-bold tracking-tight">
              NOCTURNE
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Dark aesthetics for the bold. Premium streetwear crafted for those who embrace the night.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display text-sm tracking-widest uppercase mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest uppercase mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-display text-sm tracking-widest uppercase mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Join the collective. Get exclusive drops and news.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
              />
              <button
                type="submit"
                className="bg-foreground text-background px-4 py-3 text-sm font-display tracking-widest uppercase hover:bg-foreground/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 NOCTURNE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
