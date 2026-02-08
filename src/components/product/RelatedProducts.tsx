import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (products.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl lg:text-3xl font-bold tracking-tight mb-8 lg:mb-12"
        >
          You May Also Like
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="product-card group"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-[3/4] overflow-hidden relative bg-card/80 backdrop-blur-sm">
                  {product.isNew && (
                    <span className="absolute top-3 left-3 z-10 bg-foreground text-background text-[10px] font-bold tracking-widest uppercase px-2 py-1">
                      New
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground text-[10px] font-bold tracking-widest uppercase px-2 py-1">
                      Sale
                    </span>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/60 flex items-center justify-center z-10">
                      <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                        Sold Out
                      </span>
                    </div>
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
                  <div className="flex items-center gap-2">
                    <p className={`text-sm ${product.originalPrice ? 'text-destructive' : 'text-muted-foreground'}`}>
                      ${product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
