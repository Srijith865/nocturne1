import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import OfferStrip from '@/components/OfferStrip';
import Header from '@/components/Header';
import ShopFilters from '@/components/shop/ShopFilters';
import ShopProductGrid, { allProducts } from '@/components/shop/ShopProductGrid';
import ShopPagination from '@/components/shop/ShopPagination';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import gothicSkull from '@/assets/gothic-skull.png';

const PRODUCTS_PER_PAGE = 12;

const Shop = () => {
  // Filter states
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gridDensity, setGridDensity] = useState<2 | 3 | 4>(3);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    // Filter by category
    if (selectedCategories.length > 0) {
      products = products.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by price
    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by availability
    if (inStockOnly) {
      products = products.filter(p => p.inStock);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'alpha-asc':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alpha-desc':
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'date-desc':
        products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    return products;
  }, [sortBy, selectedCategories, priceRange, inStockOnly]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <OfferStrip />
      <Header />
      
      <main className="pt-32 lg:pt-40">
        {/* Page Header */}
        <section className="container mb-8 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl lg:text-6xl font-bold tracking-tight mb-2">
              All Products
            </h1>
            <p className="text-muted-foreground tracking-wide">
              Explore our complete collection of dark streetwear essentials
            </p>
          </motion.div>
        </section>

        {/* Shop Layout */}
        <section className="container pb-20 lg:pb-32 relative">
          {/* Gothic Skull Background */}
          <div 
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            style={{
              backgroundImage: `url(${gothicSkull})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '50%',
              opacity: 0.08,
              filter: 'invert(1)',
            }}
          />

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile Filters Overlay */}
          {mobileFiltersOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
              <div className="relative h-full overflow-auto p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-semibold tracking-wide uppercase">
                    Filters
                  </h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <ShopFilters
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  inStockOnly={inStockOnly}
                  setInStockOnly={setInStockOnly}
                />
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full mt-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase"
                >
                  View Results
                </button>
              </div>
            </motion.div>
          )}

          {/* Desktop Layout */}
          <div className="flex gap-12 relative z-10">
            {/* Desktop Filters */}
            <div className="hidden lg:block">
              <ShopFilters
                sortBy={sortBy}
                setSortBy={setSortBy}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly}
              />
            </div>

            {/* Product Grid */}
            <ShopProductGrid
              gridDensity={gridDensity}
              setGridDensity={setGridDensity}
              products={paginatedProducts}
            />
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <ShopPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </section>

        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
