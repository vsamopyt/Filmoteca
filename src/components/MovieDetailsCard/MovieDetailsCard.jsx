import { IoEarth } from 'react-icons/io5';
import { SiGoogleearth } from 'react-icons/si';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';

import curtainImg from "../../images/curtainImg.png"
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

  console.log(vote_average);
  const voteAveragePersent = Math.round(vote_average * 100) / 10;
 
  const releaseYear = release_date ?  release_date.slice(0, 4) :"n/a";

  let listGenres;
  let listCountries;

  if (genres.length > 0) {
    listGenres = '';
    listGenres = genres.map(item => item.name).join(', ');
  }

  if (origin_country.length > 0) {
    listCountries = '';
    listCountries = origin_country.map(item => item).join(', ');
  }

  console.log(listCountries);

  return (
    <div className={css.MovieDetailsCardContainer}>
      <header>
        <h1
          className={css.movieDetailsCardTitle}
        >{`${title} (${releaseYear})`}</h1>
        <ul className={css.movieDetailsCardList}>
          <li>
            {' '}
            <SiGoogleearth className={css.SiGoogleearth} />
            <span className={css.movieDetailsCardGenres}>Genres: </span>
            <span>{listGenres}</span>
          </li>
          <li>
            {' '}
            <IoEarth className={css.ioEarth} />
            <span className={css.movieDetailsCardCountry}>Country: </span>
            <span>{listCountries}</span>
          </li>
          <li>
            <FaStarHalfAlt className={css.faStarHalfAlt} />
            <span className={css.movieDetailsCardRating}>Rating: </span>
            <span>{voteAveragePersent + '%'}</span>
          </li>
          <li>
            {' '}
            <FaClockRotateLeft className={css.faClockRotateLeft} />
            <span className={css.movieDetailsCardRuntime}>Runtine: </span>
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
            {backdrop_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                alt="snapshoot of movie"
              />
            ) : (
              <img
                src={curtainImg}
                alt="blank-image"
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
