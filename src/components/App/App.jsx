import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import BarLoader from 'react-spinners/BarLoader';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import css from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

// const HomePage = lazy(() =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(import('../../pages/HomePage/HomePage')), 3000); // 3-second delay
//   })
// );

const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews.'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

function App() {
  return (
    <>
      <Navigation />

      <Suspense
        fallback={
          <div className={css.appLoadingContainer}>
            <BarLoader color={'orange'} size={200} className={css.appLoader} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;

// header with motion frame

// import { Route, Routes, useLocation } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';

// import Navigation from '../Navigation/Navigation';
// import Footer from '../Footer/Footer';

// const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
// const MovieDetailsPage = lazy(() =>
//   import('../../pages/MovieDetailsPage/MovieDetailsPage')
// );
// const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
// const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews.'));
// const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
// const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

// function App() {
//   const location = useLocation(); // Получаем текущий маршрут

//   return (
//     <>
//       <Navigation />

//       <Suspense fallback={<p>Loading code</p>}>
//         {/* AnimatePresence добавляет анимации при смене маршрутов */}
//         <AnimatePresence mode="wait">
//           {/* motion.div для анимации каждого маршрута */}
//           <motion.div
//             key={location.pathname}
//             initial={{ opacity: 0.9, y: 1}}  // Начальное состояние
//             animate={{ opacity: 1, y: 0 }}   // Анимация входа
//             exit={{ opacity: 0.9, y: -1 }}   // Анимация выхода
//             transition={{ duration: 0.6}}   // Длительность анимации
//           >
//             <Routes location={location} key={location.pathname}>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/movies" element={<MoviesPage />} />
//               <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
//                 <Route path="cast" element={<MovieCast />} />
//                 <Route path="reviews" element={<MovieReviews />} />
//               </Route>
//               <Route path="*" element={<NotFoundPage />} />
//             </Routes>
//           </motion.div>
//         </AnimatePresence>
//       </Suspense>

//       <Footer />
//     </>
//   );
// }

// export default App;
