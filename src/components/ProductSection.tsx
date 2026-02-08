import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gothicEye from '@/assets/gothic-eye.png';
import { allProducts } from '@/data/products';

const products = allProducts.slice(0, 8);

const ProductSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Gothic Eye Background */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{
          backgroundImage: `url(${gothicEye})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          opacity: 0.15,
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
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-2">
              Shop Now
            </h2>
            <p className="text-muted-foreground tracking-wide">
              Featured pieces from our latest collections
            </p>
          </div>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-medium hover:gap-4 transition-all group"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            className="product-card group"
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="aspect-[3/4] overflow-hidden relative bg-card/80 backdrop-blur-sm">
                {product.isNew && (
                    <span className="absolute top-3 left-3 z-10 bg-foreground text-background text-[10px] font-bold tracking-widest uppercase px-2 py-1">
                      New
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm lg:text-base mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground bg-transparent text-foreground font-display text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View More Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
