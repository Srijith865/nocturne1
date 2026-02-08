import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import WriteReviewModal from './WriteReviewModal';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Marcus V.',
    rating: 5,
    date: '2 weeks ago',
    title: 'Perfect fit and quality',
    content: 'Exactly what I was looking for. The material is heavyweight and feels premium. Sizing runs true, went with my usual size and it fits perfectly oversized as intended.',
    verified: true,
  },
  {
    id: 2,
    author: 'Sarah K.',
    rating: 5,
    date: '1 month ago',
    title: 'Obsessed with this piece',
    content: 'The attention to detail is incredible. From the stitching to the fabric weight, everything screams quality. Already planning to get more from this collection.',
    verified: true,
  },
  {
    id: 3,
    author: 'Jordan M.',
    rating: 4,
    date: '1 month ago',
    title: 'Great quality, runs large',
    content: 'Beautiful piece with excellent construction. Just note that it runs quite oversized - I would recommend sizing down if you want a less dramatic fit.',
    verified: true,
  },
  {
    id: 4,
    author: 'Alex R.',
    rating: 5,
    date: '2 months ago',
    title: 'Worth every penny',
    content: 'I was hesitant about the price but this exceeded all expectations. The fabric is soft yet durable, and the design is unique without being over the top.',
    verified: false,
  },
];

const StarRating = ({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) => {
  const starSize = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            starSize,
            star <= rating 
              ? 'fill-foreground text-foreground' 
              : 'fill-transparent text-muted-foreground/30'
          )}
        />
      ))}
    </div>
  );
};

const CustomerReviews = ({ productName }: { productName?: string }) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 lg:mb-14"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight mb-3">
                Customer Reviews
              </h2>
              <div className="flex items-center gap-4">
                <StarRating rating={Math.round(averageRating)} size="lg" />
                <span className="text-muted-foreground">
                  {averageRating.toFixed(1)} out of 5 · {totalReviews} reviews
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsReviewModalOpen(true)}
              className="w-fit px-6 py-3 border border-foreground bg-transparent text-foreground font-display text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Write a Review
            </button>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-card/50 border border-border/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{review.author}</span>
                    {review.verified && (
                      <span className="text-[10px] tracking-wider uppercase text-muted-foreground bg-secondary px-2 py-0.5">
                        Verified
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <h4 className="font-medium mb-2">{review.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <button className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
            View All {totalReviews} Reviews
          </button>
        </motion.div>
      </div>

      {/* Write Review Modal */}
      <WriteReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)}
        productName={productName}
      />
    </section>
  );
};

export default CustomerReviews;
