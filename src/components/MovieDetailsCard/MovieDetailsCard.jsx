
import css from './MovieDetailsCard.module.css';
export default function MovieDetailsCard({ data }) {
  const {
    overview,
    backdrop_path,
    title,
    genres,
    release_date,
    origin_country,
    vote_average,
    runtime,
  } = data;

  const releaseYear = release_date.slice(0, 4);

  return (
    <div>
      <header>
        <h1
          className={css.movieDetailsCardTitle}
        >{`${title} (${releaseYear})`}</h1>
        <ul className={css.movieDetailsCardList}>
          <li>
            {' '}
            <span>Country: </span>
            <span>{origin_country}</span>
          </li>
          <li>
            <span>Rating: </span>
            <span>{vote_average}</span>
          </li>
          <li>
            {' '}
            <span>Runtime: </span>
            <span>{runtime} min.</span>
          </li>
        </ul>
      </header>
      <main>
        <div>
          <div>
            <p className={css.movieDetailsCardOverview}>{overview}</p>
          </div>
          <div className={css.movieDetailsCardImgContainer}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt="snapshoot of movie"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
