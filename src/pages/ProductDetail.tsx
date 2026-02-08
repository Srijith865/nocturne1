import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import OfferStrip from '@/components/OfferStrip';
import Header from '@/components/Header';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import SizeSelector from '@/components/product/SizeSelector';
import QuantitySelector from '@/components/product/QuantitySelector';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';
import CustomerReviews from '@/components/product/CustomerReviews';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import gothicSkull from '@/assets/gothic-skull.png';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(Number(id));
  const relatedProducts = getRelatedProducts(Number(id), 4);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Please select a size',
        description: 'Choose a size before adding to cart',
        variant: 'destructive',
      });
      return;
    }
    addToCart(product, quantity, selectedSize);
    toast({
      title: 'Added to cart',
      description: `${product.name} (${selectedSize}) x${quantity}`,
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast({
        title: 'Please select a size',
        description: 'Choose a size before proceeding',
        variant: 'destructive',
      });
      return;
    }
    addToCart(product, quantity, selectedSize);
    navigate('/cart');
  };

  const availableSizes = product.sizes.some(s => s.inStock);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <OfferStrip />
      <Header />

      <main className="pt-28 lg:pt-36">
        {/* Breadcrumb */}
        <div className="container mb-6 lg:mb-8">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shop</span>
          </Link>
        </div>

        {/* Product Section */}
        <section className="container pb-12 lg:pb-20 relative">
          {/* Subtle Gothic Background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${gothicSkull})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '60%',
              opacity: 0.04,
              filter: 'invert(1)',
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductImageGallery 
                images={product.images} 
                productName={product.name} 
              />
            </motion.div>

            {/* Right - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Product Header */}
              <div className="mb-6">
                {product.isNew && (
                  <span className="inline-block bg-foreground text-background text-[10px] font-bold tracking-widest uppercase px-3 py-1 mb-4">
                    New Arrival
                  </span>
                )}
                <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3">
                  <span className={`text-xl lg:text-2xl font-medium ${product.originalPrice ? 'text-destructive' : ''}`}>
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onSelectSize={setSelectedSize}
                />
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!availableSizes}
                className={`w-full py-4 lg:py-5 font-display text-sm lg:text-base tracking-widest uppercase transition-all duration-300 ${
                  availableSizes
                    ? 'bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98]'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                {availableSizes ? (selectedSize ? 'Add to Cart' : 'Select a Size') : 'Sold Out'}
              </button>

              {/* Buy Now Button */}
              {availableSizes && (
                <button
                  onClick={handleBuyNow}
                  className="w-full py-4 lg:py-5 mt-3 border border-foreground bg-transparent text-foreground font-display text-sm lg:text-base tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.98]"
                >
                  {selectedSize ? 'Buy Now' : 'Select Size to Buy'}
                </button>
              )}

              {/* Product Accordions */}
              <div className="mt-10">
                <ProductAccordion
                  productDetails={product.details.productDetails}
                  fabricCare={product.details.fabricCare}
                  sizeGuide={product.details.sizeGuide}
                  shippingReturns={product.details.shippingReturns}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Customer Reviews */}
        <CustomerReviews productName={product.name} />

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
