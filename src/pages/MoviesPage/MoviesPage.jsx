import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import BarLoader from 'react-spinners/BarLoader';
import {Toaster, toast} from "react-hot-toast"
import { fetchMoviesBySearch } from '../../movies-api';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
  //   const [searchName, setSearchName] = useState('');
  //   function handleForm(newSearchName) {
  //     setSearchName(newSearchName);
  //   }
  //   const [searchValue, setSearchValue] = useState([]);
  //   const [moviesPageLoading, setMoviesPageLoading] = useState(false);
  //   const [moviesPageError, setMoviesPageError] = useState(false);

  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const titleFilter =  searchParams.get("title") ?? "";

  //   const location = useLocation();
  //   console.log(location);
  //   useEffect(() => {
  //     async function getMovieBySearch() {
  //       try {
  //         setMoviesPageLoading(true);
  //         const result = await fetchMoviesBySearch(searchName);

  //         if(searchName !== "") {
  //           setSearchParams({title:searchName})
  //         } else {
  //           setSearchParams({})
  //         }

  //         console.log(searchName);

  //         setSearchValue(result.data.results);
  //       } catch (error) {
  //         setMoviesPageError(true);
  //       } finally {
  //         setMoviesPageLoading(false);
  //       }
  //     }
  //     getMovieBySearch();
  //   }, [searchName]);

  // const searchValueFilter =searchValue.filter(item=>item.title.toLowerCase().includes(titleFilter))

  //   console.log(searchValueFilter);

  // aaaaaaaaaaaaaaaaaa

  // const [searchName, setSearchName] = useState('');

  // function handleForm(newSearchName) {
  //   setSearchName(newSearchName);
  // }
  const [searchValue, setSearchValue] = useState([]);
  const [moviesPageLoading, setMoviesPageLoading] = useState(false);
  const [moviesPageError, setMoviesPageError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const titleFilter = searchParams.get('title') ?? '';

  function handleForm(newSearchName) {
    if(!newSearchName) {
      return
    }
    else {
      setSearchParams({ title: newSearchName });
    }
  
  }

  useEffect(() => {
    async function getMovieBySearch() {
      if (!titleFilter) {
        return;
      }
      try {
        setMoviesPageLoading(true);
        const result = await fetchMoviesBySearch(titleFilter);
        setSearchValue(result.data.results);
        toast.success(`Successfully toasted!  ${result.data.total_results}`)
      } catch (error) {
        setMoviesPageError(true);
      } finally {
        setMoviesPageLoading(false);
      }
    }
    getMovieBySearch();
  }, [titleFilter]);

  return (
    <section className={css.moviesPageSection}>
      <div className={css.moviesPageContainer}>
        {moviesPageError && (
          <p>Ooops! Something went wrong! Reload the page please!</p>
        )}
        <h1 className={css.moviesPageTitle}>Search Movies</h1>
        <div className={css.moviesPageSearchBar}>

        <SearchBar  onChange={handleForm} />
        </div>
        {moviesPageLoading && (
          <div className={css.moviesPageLoadingContainer}>
            <BarLoader />
          </div>
        )}
        {searchValue.length > 0 && <MovieList array={searchValue} />}
        <div><Toaster/></div>
      </div>
    </section>
  );
}
