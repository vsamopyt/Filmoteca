// import { Link, useLocation } from 'react-router-dom';
// import RatingStars from '../RatingStars/RatingStars';
// // import { PiFilmSlateLight } from 'react-icons/pi';
// import { PiFilmSlateFill } from 'react-icons/pi';
// import css from './MovieCard.module.css';

// export default function MovieCard({ item, index, currentPage }) {
//   const { title, id, poster_path, vote_average, release_date } = item;

//   const releaseYear = release_date ? release_date.slice(0, 4) : 'n/a';
//   const voteAveragePersent = Math.round(vote_average * 100) / 10 + '%';
//   const voteAveragePersentRounded = Math.round(vote_average * 10) + '%';

//   const location = useLocation();

//   return (
//     <>
//       <Link to={`/movies/${id}`} state={location}>
//         {poster_path !== null ? (
//           <img
//             className={css.movieCardImage}
//             src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
//             alt={title}
//           />
//         ) : (
//           <img
//             src="https://dummyimage.com/400x600/cdcdcd/000.jpg&amp;text=No+poster"
//             alt="blank-image"
//           />
//         )}
//         <div className={css.movieCardInfoWrapper}>
//           <h2 className={css.movieCardTitle}>
//             #{index + 1 + (currentPage - 1) * 20} {title}
//           </h2>
//           <span className={css.movieCardInfoYear}>{releaseYear}</span>
         
//         </div>

//       </Link>

      

//       {!poster_path && <p className={css.movieCardName}>{title}</p>}
//       {/* <div className={css.movieCardYearContainer}>
//         <span></span> <span>{releaseYear}</span>
//       </div> */}
//       <div className={css.movieCardRatingContainer}>
//         <div className={css.movieCardIndexContainer}>
//           {voteAveragePersentRounded}
//         </div>
//         <RatingStars rating={voteAveragePersent} />
//       </div>

//       {/* <div className={css.movieCardFilmContainer}>
//         <div className={css.movieCardFilmWraper}>
//           <PiFilmSlateFill className={css.movieCardNumberlogo} />
//           <div className={css.movieCardIndex}>
//             {index + 1 + (currentPage - 1) * 20}
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// }


import { Link, useLocation } from 'react-router-dom';
import RatingStars from '../RatingStars/RatingStars';
// import { PiFilmSlateLight } from 'react-icons/pi';
import { PiFilmSlateFill } from 'react-icons/pi';
import css from './MovieCard.module.css';

export default function MovieCard({ item, index, currentPage }) {
  const { title, id, poster_path, vote_average, release_date } = item;

  const releaseYear = release_date ? release_date.slice(0, 4) : 'n/a';
  const voteAveragePersent = Math.round(vote_average * 100) / 10 + '%';
  const voteAveragePersentRounded = Math.round(vote_average * 10) + '%';

  const location = useLocation();

  return (
    <>
      <Link to={`/movies/${id}`} state={location} >
      <div className={css.movieCardImgWrapper}>

        {poster_path !== null ? (
        
          <img
            className={css.movieCardImage}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <img
            // src="https://dummyimage.com/400x600/cdcdcd/000.jpg&amp;text=No+poster"
            src="https://dummyimage.com/400x600/cdcdcd/000.jpg&amp;text=No+poster"
          />
        )}
      </div>
        <div className={css.movieCardInfoWrapper}>
          <h2 className={css.movieCardTitle}>
            #{index + 1 + (currentPage - 1) * 20} {title}
          </h2>
          <span className={css.movieCardInfoYear}>{releaseYear}</span>
         
        </div>

      </Link>

      

      {!poster_path && <p className={css.movieCardName}>{title}</p>}
      {/* <div className={css.movieCardYearContainer}>
        <span></span> <span>{releaseYear}</span>
      </div> */}
      <div className={css.movieCardRatingContainer}>
        <div className={css.movieCardIndexContainer}>
          {voteAveragePersentRounded}
        </div>
        <RatingStars rating={voteAveragePersent} />
      </div>

      {/* <div className={css.movieCardFilmContainer}>
        <div className={css.movieCardFilmWraper}>
          <PiFilmSlateFill className={css.movieCardNumberlogo} />
          <div className={css.movieCardIndex}>
            {index + 1 + (currentPage - 1) * 20}
          </div>
        </div>
      </div> */}
    </>
  );
}