// import css from './RatingStars.module.css';
// export default function RatingStars({rating}) {

    
//     const ratingStarStyle = {
//         width:rating,
//     }
//   return (
//     <div className={css.RatingStarContainer}>
//       <div  style ={ratingStarStyle} className={css.RatingStarActive}></div>
//       <div className={css.RatingStarsStar}>
//         {/* <div className={css.RatingStarsStarItem}>★</div>
//         <div className={css.RatingStarsStarItem}>★</div>
//         <div className={css.RatingStarsStarItem}>★</div>
//         <div className={css.RatingStarsStarItem}>★</div>
//         <div className={css.RatingStarsStarItem}>★</div> */}
//       </div>
//     </div>
//   );
// }


import { motion } from 'framer-motion';
import css from './RatingStars.module.css';

export default function RatingStars({ rating }) {
 
  return (
    <div className={css.RatingStarContainer}>
      {/* Animated div for active stars */}
      <motion.div
        className={css.RatingStarActive}
        initial={{ width: 0 }} // Start with 0 width
        // animate={{ width: `${ratingPercentage}%` }} // Animate to rating percentage
        animate={{ width: rating }} // Animate to rating percentage
        transition={{ duration: 1, ease: "easeInOut", }} // Smooth animation
      >
        {/* Overlay the gold stars with the correct width */}
        <div className={css.RatingStarOverlay}>★★★★★</div>
      </motion.div>

      {/* Gray stars (background) */}
      <div className={css.RatingStarsStar}>
        ★★★★★
      </div>
    </div>
  );
}