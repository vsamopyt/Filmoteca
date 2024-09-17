// import css from './RatingStars.module.css';
// export default function RatingStars({rating}) {
//     // console.log(rating);
    
//     const ratingStarStyle = {
//         width:rating,
//     }
//   return (
//     <div className={css.RatingStarContainer}>
//       <div  style ={ratingStarStyle} className={css.RatingStarActive}></div>
//       <div className={css.RatingStarsStar}>
//         <div className={css.RatingStarsStarItem}>★</div>
//         <div className={css.RatingStarsStarItem}>★</div>
//         <div className={css.RatingStarsStarItem}>★</div>
//         <div className={css.RatingStarsStarItem}>★</div>
//         <div className={css.RatingStarsStarItem}>★</div>
//       </div>
//     </div>
//   );
// }


import { motion } from 'framer-motion';
import css from './RatingStars.module.css';

export default function RatingStars({ rating }) {
  // Convert the rating (assumed between 0 and 5) to percentage for width calculation
  // console.log("reting",rating);
  // console.log(parseFloat(rating) );
  
  
  // const ratingPercentage = (parseFloat(rating) / 5) * 100;
//   const ratingPercentage = parseFloat(rating) ;
// console.log(ratingPercentage);

  return (
    <div className={css.RatingStarContainer}>
      {/* Animated div for active stars */}
      <motion.div
        className={css.RatingStarActive}
        initial={{ width: 0 }} // Start with 0 width
        // animate={{ width: `${ratingPercentage}%` }} // Animate to rating percentage
        animate={{ width: rating }} // Animate to rating percentage
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity}} // Smooth animation
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