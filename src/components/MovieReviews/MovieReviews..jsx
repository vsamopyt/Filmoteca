import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';
import BarLoader from 'react-spinners/BarLoader';

import { fetchMovieReviwsById } from '../../movies-api';
import MovieReviewsCard from '../MovieReviewsCard/MovieReviewsCard';
import css from './MovieReviews.module.css';

const listVariants = {
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
    },
  }),
  hidden: { opacity: 0, x: 100 },
};

export default function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [movieReviewsLoading, setMovieReviewsLoading] = useState(false);
  const [movieReviewsError, setMovieReviewsError] = useState(false);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovieReviwsById() {
      try {
        setMovieReviewsLoading(true);
        const result = await fetchMovieReviwsById(movieId);

        setMovieReviews(result.data.results);
      } catch (error) {
        setMovieReviewsError(true);
      } finally {
        setMovieReviewsLoading(false);
      }
    }
    getMovieReviwsById();
  }, [movieId]);
  return (
    <div className={css.MovieReviewsWraper}>
      <h1 className={css.MovieReviewsTitle}>Movie Reviws</h1>
      {movieReviewsError && (
        <p>Ooops! Something went wrong! Reload the page please!</p>
      )}
      {movieReviewsLoading && (
        <div className={css.movieReviewsLoadingContainer}>
          <BarLoader
            color={'orange'}
            size={200}
            className={css.pageBarloader}
          />
        </div>
      )}

      <>
        {!movieReviewsLoading && movieReviews.length > 0 && (
          <ul className={css.MovieReviewsList}>
            {movieReviews.map((item, i) => {
              return (
                <motion.li
                  key={item.id}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <MovieReviewsCard item={item} />
                </motion.li>
              );
            })}
          </ul>
        )}
      </>

      {!movieReviewsLoading && movieReviews.length === 0 && (
        <p className={css.infoMessage}>Sorry, there are no reviews yet.</p>
      )}
    </div>
  );
}
