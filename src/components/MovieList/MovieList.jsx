// import MovieCard from '../MovieCard/MovieCard';
// import css from "./MovieList.module.css"
// export default function MovieList({ array }) {
//   return (
//     <ol className ={css.movieList}>
//       {array.map(item => {
//         return (
//           <li className ={css.movieListItem} key={item.id}>
//             <MovieCard item={item} />
//           </li>
//         );
//       })}
//     </ol>
//   );
// }
import { motion } from 'framer-motion';
import MovieCard from '../MovieCard/MovieCard';
import css from "./MovieList.module.css"

const listVariants = {
  visible: i => ({
    opacity: 1,
    x:0,
    transition: {
      delay: i*0.2
    }
  }),
  hidden: {opacity: 0, x:10}
}

export default function MovieList({ array, currentPage }) {

  // console.log(currentPage);
  
  return (
    <ol className ={css.movieList}>
      {array.map((item,index) => {
        return (
          <motion.li className ={css.movieListItem} key={item.id}
          variants= {listVariants}
              initial="hidden"
              animate ="visible"
              custom = {index}
          
          
          >
            <MovieCard 
            item={item}
            index ={index}
            currentPage = {currentPage}
             />
          </motion.li>
        );
      })}
    </ol>
  );
}
