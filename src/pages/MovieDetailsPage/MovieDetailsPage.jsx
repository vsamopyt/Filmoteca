import { Link, Outlet, useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { fetchMovieById } from '../../movies-api';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [MovieDetailsPageLoading, setMovieDetailsPageLoading] = useState(false);
  const [MovieDetailsPageError, setMovieDetailsPageError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieById() {
      try {
        setMovieDetailsPageLoading(true);
        const result = await fetchMovieById(movieId);
        setMovieDetail(result.data);
      } catch (error) {
        setMovieDetailsPageError(true);
      } finally {
        setMovieDetailsPageLoading(false);
      }
    }
    getMovieById();
  }, [movieId]);

  return (
    <section className={css.movieDetailsPageSection}>
      <div className={css.movieDetailsPageContainer}>
        <Link
          className={css.movieDetailsPageLimk}
          to={backLinkRef.current}
        >
          go back
        </Link>
        {MovieDetailsPageLoading && (
          <div className={css.movieDetailsPageLoadingContainer}>
            <BarLoader />
          </div>
        )}
        {MovieDetailsPageError && (
          <p>Ooops! Something went wrong! Reload the page please!</p>
        )}
        {movieDetail && <MovieDetailsCard data={movieDetail} />}
        <ul className={css.movieDetailsPageList}>
          <li>
            <Link to={'cast'} state={location}>
              Movie Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'} state={location}>
              Movie Review
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading child route component</div>}>
        <Outlet />
        </Suspense>
      </div>
      ;
    </section>
  );
}
