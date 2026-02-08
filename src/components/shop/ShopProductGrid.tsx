import { motion } from 'framer-motion';
import { Grid2X2, Grid3X3, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProducts } from '@/data/products';

type GridDensity = 2 | 3 | 4;

interface ShopProductGridProps {
  gridDensity: GridDensity;
  setGridDensity: (density: GridDensity) => void;
  products?: typeof allProducts;
}

const ShopProductGrid = ({ 
  gridDensity, 
  setGridDensity,
  products = allProducts 
}: ShopProductGridProps) => {
  const gridClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className="flex-1">
      {/* Grid Controls */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
        <p className="text-sm text-muted-foreground">
          Showing <span className="text-foreground font-medium">{products.length}</span> products
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setGridDensity(2)}
            className={`p-2 transition-colors ${gridDensity === 2 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            aria-label="2 column grid"
          >
            <Grid2X2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setGridDensity(3)}
            className={`p-2 transition-colors ${gridDensity === 3 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            aria-label="3 column grid"
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setGridDensity(4)}
            className={`p-2 transition-colors ${gridDensity === 4 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            aria-label="4 column grid"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className={`grid ${gridClasses[gridDensity]} gap-4 lg:gap-6`}>
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
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
  );
};

export { allProducts };
export default ShopProductGrid;
