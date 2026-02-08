import { motion } from 'framer-motion';
import productHoodie from '@/assets/product-hoodie.png';
import productTshirt from '@/assets/product-tshirt.png';
import productShirt from '@/assets/product-shirt.png';
import productPants from '@/assets/product-pants.png';
import gothicSkull from '@/assets/gothic-skull.png';

const categories = [
  { name: 'Hoodies', image: productHoodie, href: '#hoodies' },
  { name: 'T-Shirts', image: productTshirt, href: '#tshirts' },
  { name: 'Shirts', image: productShirt, href: '#shirts' },
  { name: 'Pants', image: productPants, href: '#pants' },
];

const CategorySection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Gothic Skull Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${gothicSkull})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '70%',
          opacity: 0.2,
          filter: 'invert(1)',
        }}
      />
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground tracking-wide">
            Curated collections for the modern aesthetic
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href={category.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="category-card"
            >
              <div className="aspect-[3/4] bg-card/80 overflow-hidden mb-4 backdrop-blur-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image w-full h-full object-cover transition-transform duration-700"
                />
              </div>
              <h3 className="category-text font-display text-xl lg:text-2xl font-semibold tracking-wide uppercase text-center transition-all duration-300">
                {category.name}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
