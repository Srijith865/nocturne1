import { motion } from 'framer-motion';

const offers = [
  "FREE SHIPPING ON ORDERS OVER $150",
  "NEW COLLECTION DROP — SHADOW SERIES",
  "EXCLUSIVE MEMBERS GET 15% OFF",
  "LIMITED EDITION — WHILE SUPPLIES LAST",
  "FREE SHIPPING ON ORDERS OVER $150",
  "NEW COLLECTION DROP — SHADOW SERIES",
  "EXCLUSIVE MEMBERS GET 15% OFF",
  "LIMITED EDITION — WHILE SUPPLIES LAST",
];

const OfferStrip = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="marquee-container">
        <motion.div 
          className="marquee-content flex items-center gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {offers.map((offer, index) => (
            <span 
              key={index} 
              className="inline-flex items-center gap-12 text-xs font-medium tracking-widest uppercase"
            >
              {offer}
              <span className="text-primary-foreground/40">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OfferStrip;
