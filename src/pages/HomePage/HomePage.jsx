import BarLoader from 'react-spinners/BarLoader';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../movies-api';
import { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
// import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import css from './HomePage.module.css';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [homePageLoading, sethomePageLoading] = useState(false);
  const [homePageError, sethomePageError] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [schowBtn, setSchowBtn] = useState(false);

  // const handleLoadMore = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  useEffect(() => {
    async function getTrendinMovies() {
      try {
        sethomePageLoading(true);


        const data = await fetchTrendingMovies();
       

        setTrendingMovies(data.data.results);

        // const response = await fetchTrendingMovies(currentPage);
        // const data = response.data.results;
        // if(currentPage === 1) {
        //    setTrendingMovies(data);
        // }
        // else {

        //   setTrendingMovies((previousData)=>{
        //     return [...previousData, ...data]
        //   })
        // }
     

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
        <ScrollToTop style={{ display:"flex", justifyContent: "center", alignItems:"center", padding: "0"}} component={<p style={{ color: "blue", marginBottom: "0px" }}>UP</p>}/>
        {/* <LoadMoreBtn onHandle={handleLoadMore }/> */}
      </div>
     
    </section>
  );
}
