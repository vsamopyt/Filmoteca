import { Link, useLocation } from 'react-router-dom';
import RatingStars from '../RatingStars/RatingStars';
// import { PiFilmSlateLight } from 'react-icons/pi';
import { PiFilmSlateFill } from "react-icons/pi";
import css from './MovieCard.module.css';

export default function MovieCard({ item, index, currentPage }) {
  const { title, id, poster_path, vote_average, release_date } = item;
  // const releaseYear = "2000";
  // console.log(release_date);
    // const releaseYear = release_date &&  release_date.slice(0, 4);
  const releaseYear = release_date ?  release_date.slice(0, 4) :"n/a";
  const voteAveragePersent = Math.round(vote_average * 100) / 10 + '%';
  const voteAveragePersentRounded = Math.round(vote_average * 10) + '%';

  // console.log(voteAveragePersent);

  const location = useLocation();
  // console.log(index + 1);

  return (
    <>
      <Link to={`/movies/${id}`} state={location}>
        {poster_path !== null ? (
          <img
            className={css.movieCardImage}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <img
            src="https://dummyimage.com/400x600/cdcdcd/000.jpg&amp;text=No+poster"
            alt="blank-image"
          />
        )}
<div className={css.movieCardInfoWrapper}>
<h2 className={css.movieCardTitle}>{title}</h2>
        <span className={css.movieCardInfoYear}>{releaseYear}</span>
        <span className={css.movieCardInfoRating}>{voteAveragePersentRounded }</span>
</div>
        
      </Link>
      {/* <div className={css.movieCardRatingContainer}>
        <span>Rating:</span> <span>{voteAveragePersent+"%"}</span> 
        <RatingStars/>
      </div> */}

      {!poster_path && <p className={css.movieCardName}>{title}</p>}
      <div className={css.movieCardYearContainer}>
        {/* <div className={css.movieCardIndexContainer}>{voteAveragePersent }</div> */}
        <span></span> <span>{releaseYear}</span>
        {/* <RatingStars/> */}
      </div>
      <div className={css.movieCardRatingContainer}>
        {/* <span>Rating:</span> <span>{voteAveragePersent+"%"}</span>  */}
        {/* <div className={css.movieCardIndexContainer}>{index + 1}</div> */}
        <div className={css.movieCardIndexContainer}>
          {voteAveragePersentRounded}
        </div>
        <RatingStars rating={voteAveragePersent} />
      </div>
      {/* <div className={css.movieCardIndexContainer}> */}
      {/* <span>{index+1}</span> */}
      {/* {index+1} */}
      {/* <RatingStars/> */}
      {/* </div> */}

      <div className={css.movieCardFilmContainer}>
        <div className={css.movieCardFilmWraper} >

      <PiFilmSlateFill   className={css.movieCardNumberlogo}/>
        <div className={css.movieCardIndex}>{(index+1)+(currentPage-1)*20 }</div>
          {/* <div className={css.movieCardIndex}>{(index+1)}</div> */}
        </div>
      </div>

 
      {/* <div className={css.movieCardNumberContainer}> */}
        {/* <PiFilmSlateLight  className={css.movieCardNumberlogo}/> */}
        {/* <div className={css.movieCardIndexContainer}>{index+1 }</div> */}
      {/* </div> */}
    </>
  );
}
