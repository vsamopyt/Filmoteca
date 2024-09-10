import css from './RatingStars.module.css';
export default function RatingStars({rating}) {
    // console.log(rating);
    
    const ratingStarStyle = {
        width:rating,
    }
  return (
    <div className={css.RatingStarContainer}>
      <div  style ={ratingStarStyle} className={css.RatingStarActive}></div>
      <div className={css.RatingStarsStar}>
        <div className={css.RatingStarsStarItem}>★</div>
        <div className={css.RatingStarsStarItem}>★</div>
        <div className={css.RatingStarsStarItem}>★</div>
        <div className={css.RatingStarsStarItem}>★</div>
        <div className={css.RatingStarsStarItem}>★</div>
      </div>
    </div>
  );
}
