import { Link, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';
export default function MovieCard({ item }) {
  const { title, id, poster_path, vote_average, release_date } = item;
  const releaseYear = release_date.slice(0, 4);

  const location = useLocation();

  return (
    <>
      <Link to={`/movies/${id}`} state={location}>
        {poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <img
            src="https://dummyimage.com/400x600/cdcdcd/000.jpg&amp;text=No+poster"
            alt="blank-image"
          />
        )}
      </Link>
      <div className={css.movieCardRatingContainer}>
        <span>Rating:</span> <span>{vote_average}</span>
      </div>
      {!poster_path && <p className={css.movieCardName}>{title}</p>}
      <div className={css.movieCardYearContainer}>
        <span>Release year:</span> <span>{releaseYear}</span>
      </div>
    </>
  );
}
