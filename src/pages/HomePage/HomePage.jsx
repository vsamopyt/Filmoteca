import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import ScrollToTop from 'react-scroll-to-top';
import BarLoader from 'react-spinners/BarLoader';

import MovieTitleAnimation from '../../components/MovieTitleAnimation/MovieTitleAnimation';
// import { motion } from 'framer-motion';
import CommonModalWindow from '../../components/CommonlModalWindow/CommonlModalWindow';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../movies-api';
import PaginatedItems from '../../components/MoviePagePagination/MoviePagePagination';
// import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import css from './HomePage.module.css';
// import { GiOrange } from 'react-icons/gi';

const scrollToTopStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0',
  borderRadius: '50%',
  backgroundColor: 'blue',
  border: '6px solid rgb(189, 196, 225)',
  width: '54px',
  height: '54px',
  transition: 'opacity .3s ease-in-out',
};

const scrollToTopComponentStyle = {
  color: 'white',
  marginBottom: '0px',
};

const currentDate = new Date();
const dateString = `${currentDate.getDate()}.${(currentDate.getMonth() + 1)
  .toString()
  .padStart(2, '0')}.${currentDate.getFullYear()}`;

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [homePageLoading, sethomePageLoading] = useState(false);
  const [homePageError, sethomePageError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const currentPage = searchParams.get('page') ?? '';

  // ----modalWindow
  const [isOpen, setIsOpen] = useState(false);
  const [imgLink, setImgLink] = useState('');
  const onOpen = event => {
    if (event.target.tagName === 'svg') {
      console.log(event.target.tagName);

      setIsOpen(true);
      setImgLink(
        `https://image.tmdb.org/t/p/w500/${event.target.getAttribute(
          'data-img'
        )}`
      );
      console.log(event.target.getAttribute('data-img'));
    }
  };
  const onClose = () => {
    setIsOpen(false);
  };

  // ++++++++

  function handlePagination(newPage) {
    setSearchParams({ page: newPage });
  }

  useEffect(() => {
    async function getTrendinMovies() {
      try {
        sethomePageLoading(true);

        const data = await fetchTrendingMovies(currentPage);

        setTotalItems(10000);
        setTotalPages(500);

        setTrendingMovies(data.data.results);
      } catch (error) {
        sethomePageError(true);
      } finally {
        sethomePageLoading(false);
      }
    }
    getTrendinMovies();
  }, [currentPage]);

  return (
    <section className={css.homePageSection}>
      <div className={css.homePageContainer}>
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <MovieTitleAnimation
            style={{}}
            title={`MOVIES TREND ${dateString}`}
            rating="100%"
          />
        </div>

        {homePageError && (
          <p>Ooops! Something went wrong! Reload the page please!</p>
        )}

        {totalPages > 1 && (
          <div id="container" className={css.moviePaginationContainer}>
            <PaginatedItems
              itemsPerPage={20}
              totalItems={totalItems}
              onChange={handlePagination}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        )}

        {homePageLoading && (
          <div className={css.homePageLoadingContainer}>
            <BarLoader
              color={'orange'}
              size={200}
              className={css.pageBarloader}
            />
          </div>
        )}
        {trendingMovies.length > 0 && (
          <MovieList
            array={trendingMovies}
            currentPage={currentPage}
            onOpen={onOpen}
          />
        )}

        <ScrollToTop
          style={scrollToTopStyle}
          component={<p style={scrollToTopComponentStyle}>UP</p>}
        />

        {/* <LoadMoreBtn onHandle={handleLoadMore }/> */}

        {totalPages > 1 && (
          <div id="container" className={css.moviePaginationContainer}>
            <PaginatedItems
              itemsPerPage={20}
              totalItems={totalItems}
              onChange={handlePagination}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        )}

        <CommonModalWindow isOpen={isOpen} onClose={onClose}>
          <div className={css.HomeModalImgWrapper}>
          <img src={imgLink} alt="pictures" width="200"/>
          </div>
        </CommonModalWindow>
      </div>
    </section>
  );
}
