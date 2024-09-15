// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import SearchBar from '../../components/SearchBar/SearchBar';
// import MovieList from '../../components/MovieList/MovieList';
// import BarLoader from 'react-spinners/BarLoader';
// import { Toaster, toast } from 'react-hot-toast';
// import { fetchMoviesBySearch } from '../../movies-api';
// import css from './MoviesPage.module.css';

// export default function MoviesPage() {
//   const [searchValue, setSearchValue] = useState([]);
//   const [moviesPageLoading, setMoviesPageLoading] = useState(false);
//   const [moviesPageError, setMoviesPageError] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const titleFilter = searchParams.get('title') ?? '';

//   function handleForm(newSearchName) {
//     if (!newSearchName) {
//       return;
//     } else {
//       setSearchParams({ title: newSearchName });
//     }
//   }

//   useEffect(() => {
//     async function getMovieBySearch() {
//       if (!titleFilter) {
//         return;
//       }
//       try {
//         setMoviesPageLoading(true);
//         const result = await fetchMoviesBySearch(titleFilter);
//         setSearchValue(result.data.results);

//         toast.success(`Successfully toasted!  ${result.data.total_results}`);
//       } catch (error) {
//         setMoviesPageError(true);
//       } finally {
//         setMoviesPageLoading(false);
//       }
//     }
//     getMovieBySearch();
//   }, [titleFilter]);

//   return (
//     <section className={css.moviesPageSection}>
//       <div className={css.moviesPageContainer}>
//         {moviesPageError && (
//           <p>Ooops! Something went wrong! Reload the page please!</p>
//         )}
//         <h1 className={css.moviesPageTitle}>Search Movies</h1>
//         <div className={css.moviesPageSearchBar}>
//           <SearchBar onChange={handleForm} />
//         </div>
//         {moviesPageLoading && (
//           <div className={css.moviesPageLoadingContainer}>
//             <BarLoader />
//           </div>
//         )}
//         {searchValue.length > 0 && <MovieList array={searchValue} />}
//         <div>
//           <Toaster />
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
// import usePagination from "../../components/MoviePagePagination/MoviePagePagination"
import PaginatedItems from '../../components/MoviePagePagination/MoviePagePagination';
import BarLoader from 'react-spinners/BarLoader';
import ScrollToTop from 'react-scroll-to-top';
import { Toaster, toast } from 'react-hot-toast';
import { fetchMoviesBySearch } from '../../movies-api';
import css from './MoviesPage.module.css';

const scrollToTopStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0',
  borderRadius: '50%',
  backgroundColor: 'blue',
  border: '4px solid rgb(189, 196, 225)',
  width: '50px',
  height: '50px',
};

const scrollToTopComponentStyle = {
  color: 'white',
  marginBottom: '0px',
};

export default function MoviesPage() {
  const [searchValue, setSearchValue] = useState([]);
  const [moviesPageLoading, setMoviesPageLoading] = useState(false);
  const [moviesPageError, setMoviesPageError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const titleFilter = searchParams.get('title') ?? '';
  const currentPage = searchParams.get('page') ?? '';

  function handleForm(newSearchName) {
    if (!newSearchName) {
      return;
    } else {
      // setSearchParams({ title: newSearchName, page: 1});
      setSearchParams({ title: newSearchName, page: 1 });
    }
  }

  function handlePagination(newPage) {
    setSearchParams({ title: titleFilter, page: newPage });
    console.log(newPage);
  }

  console.log(currentPage);

  useEffect(() => {
    async function getMovieBySearch() {
      if (!titleFilter) {
        return;
      }
      try {
        setMoviesPageLoading(true);
        const result = await fetchMoviesBySearch(titleFilter, currentPage);
        setTotalItems(result.data.total_results);
        setTotalPages(result.data.total_pages);
        console.log(result.data);

        // console.log(result.data.total_results);

        setSearchValue(result.data.results);

        toast.success(`Successfully toasted!  ${result.data.total_results}`);
      } catch (error) {
        setMoviesPageError(true);
      } finally {
        setMoviesPageLoading(false);
      }
    }
    getMovieBySearch();
  }, [titleFilter, currentPage]);

  return (
    <section className={css.moviesPageSection}>
      <div className={css.moviesPageContainer}>
        {moviesPageError && (
          <p>Ooops! Something went wrong! Reload the page please!</p>
        )}
        <div className={css.moviePageSearcWraper}>
          <h1 className={css.moviesPageTitle}>Search movies by name</h1>
          <div className={css.moviesPageSearchBar}>
            <SearchBar onChange={handleForm} />
          </div>
        </div>
        {/* {moviesPageLoading && (
          <div className={css.moviesPageLoadingContainer}>
            <BarLoader />
          </div>
        )} */}

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

        {moviesPageLoading && (
          <div className={css.moviesPageLoadingContainer}>
            <BarLoader
              color={'orange'}
              size={200}
              className={css.pageBarloader}
            />
          </div>
        )}

        {searchValue.length > 0 && (
          <MovieList array={searchValue} currentPage={currentPage} />
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

        <ScrollToTop
          style={scrollToTopStyle}
          component={<p style={scrollToTopComponentStyle}>UP</p>}
        />

        {/* <div id="container" className={css.moviePaginationContainer}>
          <PaginatedItems
            itemsPerPage={20}
            totalItems={totalItems}
            onChange={handlePagination}
            currentPage={currentPage}
            totalPages ={totalPages}
          />
        </div> */}
        {/* <div>
          <Toaster />
        </div> */}
      </div>
    </section>
  );
}
