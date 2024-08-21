import BarLoader from 'react-spinners/BarLoader';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../movies-api';
import { useState, useEffect } from 'react';
import css from './HomePage.module.css';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [homePageLoading, sethomePageLoading] = useState(false);
  const [homePageError, sethomePageError] = useState(false);
  useEffect(() => {
    async function getTrendinMovies() {
      try {
        sethomePageLoading(true);

        const data = await fetchTrendingMovies();

        setTrendingMovies(data.data.results);
      } catch (error) {
        sethomePageError(true);
      } finally {
        sethomePageLoading(false);
      }
    }
    getTrendinMovies();
  }, []);

  return (
    <section className={css.homePageSection}>
      <div className={css.homePageContainer}>
        <h1 className={css.homePageTitle}>-Trending movies-</h1>
        {homePageError && (
          <p>Ooops! Something went wrong! Reload the page please!</p>
        )}
        {homePageLoading && (
          <div className={css.homePageLoadingContainer}>
            <BarLoader />
          </div>
        )}
        {trendingMovies.length > 0 && <MovieList array={trendingMovies} />}
      </div>
    </section>
  );
}
