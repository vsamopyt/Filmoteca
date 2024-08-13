import { Route, Routes,} from 'react-router-dom';
import {lazy, Suspense} from "react";
// import HomePage from '../../pages/HomePage/HomePage';
import Navigation from '../Navigation/Navigation';
// import MovieCast from "../MovieCast/MovieCast";
// import MovieReviews from "../MovieReviews/MovieReviews.";
// import { useState } from 'react'
// import MoviesPage from '../../pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
// import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews."));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
<Navigation/>

<Suspense fallback ={<p>Loading code</p>}>

    <Routes>
  <Route path ="/" element={<HomePage/>}/>
  <Route path ="/movies" element ={<MoviesPage/>}/>
  <Route path ="/movies/:movieId" element ={<MovieDetailsPage/>}> 
  <Route path = "cast" element ={<MovieCast/>}/>
  <Route path = "reviews" element ={<MovieReviews/>}/>
  </Route>
  <Route path ="*" element ={<NotFoundPage/>}/>
    </Routes>
</Suspense>
      
    </>
  )
}

export default App
