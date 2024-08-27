import { Link, Outlet, useLocation, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { fetchMovieById } from '../../movies-api';
// import { MdMovieFilter } from 'react-icons/md';
// import { MdOutlineMovieFilter } from 'react-icons/md';
import { MdMovieEdit } from 'react-icons/md';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { IoIosPeople } from "react-icons/io";
import clsx from 'clsx';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [MovieDetailsPageLoading, setMovieDetailsPageLoading] = useState(false);
  const [MovieDetailsPageError, setMovieDetailsPageError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movies');

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.linkActive);
  };

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
        <Link className={css.movieDetailsPageLink} to={backLinkRef.current}>
          <FaLongArrowAltLeft /> go back
        </Link>
        {MovieDetailsPageLoading && (
          <div className={css.movieDetailsPageLoadingContainer}>
            <BarLoader
              color={'orange'}
              size={200}
              className={css.movieDetailsPageBarloader}
            />
          </div>
        )}
        {MovieDetailsPageError && (
          <p>Ooops! Something went wrong! Reload the page please!</p>
        )}
        {movieDetail && <MovieDetailsCard data={movieDetail} />}
        <ul className={css.movieDetailsPageList}>
          <li>
            <NavLink  to={'cast'} className ={buildLinkClass} state={location}>
            <IoIosPeople 
            className={css.movieDetailsPageListIcon}/>
            Movie Cast
              
              {/* <div className={css.MovieCast}> Movie Cast</div> */}
            </NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}  className ={buildLinkClass} state={location}>
              <MdMovieEdit className={css.movieDetailsPageListIcon}/>
              Movie Review
            </NavLink>
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
