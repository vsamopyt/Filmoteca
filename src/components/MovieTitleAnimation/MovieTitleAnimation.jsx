


import { motion } from 'framer-motion';
import css from './MovieTitleAnimation.module.css';

export default function MovieTitleAnimation ({ title, rating }) {


  return (
    <div className={css.RatingStarContainer}>
      {/* Animated div for active stars */}
      <motion.div
        className={css.RatingStarActive}
        initial={{ width: 0, opacity:0.3,  }} // Start with 0 width
        // animate={{ width: `${ratingPercentage}%` }} // Animate to rating percentage
        animate={{ width: rating, opacity:1,}} // Animate to rating percentage
        // transition={{ duration: 3, ease: "easeInOut", repeat: Infinity}} // Smooth animation
        transition={{ duration: 3, ease: "easeOut", }} // Smooth animation
      >
        {/* Overlay the gold stars with the correct width */}
        <div className={css.RatingStarOverlay}>{title}</div>
      </motion.div>

      {/* Gray stars (background) */}
      <div className={css.RatingStarsStar}>
      {title}
      </div>
    </div>
  );
}