import { motion } from 'framer-motion';
import css from './MovieTitleAnimation.module.css';

export default function MovieTitleAnimation({ title, rating }) {
  return (
    <div className={css.RatingStarContainer}>
      <motion.div
        className={css.RatingStarActive}
        initial={{ width: 0, opacity: 1 }} // Start with 0 width
        animate={{ width: rating, opacity: 1 }} // Animate to rating percentage
        transition={{
          duration: 10,
          ease: 'easeOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }} // Smooth animation
      >
        {/* Overlay the gold stars with the correct width */}
        <div className={css.RatingStarOverlay}>{title}</div>
      </motion.div>

      {/* Gray stars (background) */}
      <div className={css.RatingStarsStar}>{title}</div>
    </div>
  );
}
