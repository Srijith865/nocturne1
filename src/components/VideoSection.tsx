import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video bg-card overflow-hidden"
        >
          <video
            className="w-full h-full object-cover"
            src="/critical-darkness.mp4"
            controls
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
