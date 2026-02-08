import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import OfferStrip from '@/components/OfferStrip';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import gothicSkull from '@/assets/gothic-skull.png';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    console.log('Proceeding to checkout with:', items);
  };

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
            <span>Continue Shopping</span>
          </Link>
        </div>

        <section className="container pb-12 lg:pb-20 relative">
          {/* Background */}
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

          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-8"
            >
              Your Cart ({totalItems})
            </motion.h1>

            {items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-muted-foreground/50" />
                <h2 className="font-display text-2xl mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">Discover our collection and add some pieces to your cart.</p>
                <Link
                  to="/shop"
                  className="inline-block px-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors"
                >
                  Shop Now
                </Link>
              </motion.div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-4 bg-card/50 border border-border/50"
                    >
                      {/* Image */}
                      <Link to={`/product/${item.product.id}`} className="shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-24 h-32 lg:w-32 lg:h-40 object-cover"
                        />
                      </Link>

                      {/* Details */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <Link to={`/product/${item.product.id}`}>
                            <h3 className="font-display text-lg font-medium hover:underline">
                              {item.product.name}
                            </h3>
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.size)}
                            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">Size: {item.size}</p>
                        <p className="text-lg font-medium mb-4">${item.product.price}</p>

                        {/* Quantity */}
                        <div className="mt-auto flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-border hover:bg-secondary transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-border hover:bg-secondary transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <button
                    onClick={clearCart}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    Clear Cart
                  </button>
                </div>

                {/* Order Summary */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-1"
                >
                  <div className="sticky top-28 p-6 bg-card/50 border border-border/50">
                    <h2 className="font-display text-xl font-bold mb-6">Order Summary</h2>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${totalPrice}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>{totalPrice >= 150 ? 'Free' : '$10'}</span>
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between font-medium">
                        <span>Total</span>
                        <span>${totalPrice >= 150 ? totalPrice : totalPrice + 10}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCheckout}
                      className="w-full py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors"
                    >
                      Checkout
                    </button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Free shipping on orders over $150
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
