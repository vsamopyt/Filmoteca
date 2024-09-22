import axios from 'axios';
const accesKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzA0YWU2MGNhZDVlNzk4MGNiMDMxOGM3Mzk2ZDdjYSIsIm5iZiI6MTcyMTIyMDk4Mi4yNDEzMDcsInN1YiI6IjY0NzZmMWU0MDA1MDhhMDExNmQ1MzMzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lHZfGfspYA8GzlIWax5Y33RbVcwE3PKe1wTJb2uyLSY';

const currentPageReviews = 1;

axios.defaults.headers.common['Authorization'] = `Bearer ${accesKey}`;
axios.defaults.headers.common['accept'] = 'application/json';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies(currentPage) {
  const response = await axios.get('/trending/movie/day', {
    params: {
      language: 'en-US',
      page: currentPage,
    },
  });
  return response;
}

export async function fetchMovieById(id) {
  const response = await axios.get(`/movie/${id}`, {
    params: {
      language: 'en-US',
    },
  });
  return response;
}

export async function fetchMovieCastById(id) {
  const response = await axios.get(`/movie/${id}/credits`, {
    params: {
      language: 'en-US',
    },
  });
  return response;
}

export async function fetchMovieReviwsById(id) {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: {
      language: 'en-US',
      page: currentPageReviews,
    },
  });
  return response;
}

export async function fetchMoviesBySearch(searchName, currentPageSearch) {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: searchName,
        include_adult: false,
        language: 'en-US',
        page: currentPageSearch,
      },
    }
  );
  return response;
}
