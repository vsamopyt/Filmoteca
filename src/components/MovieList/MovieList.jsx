import MovieCard from '../MovieCard/MovieCard';
import css from "./MovieList.module.css"
export default function MovieList({ array }) {
  return (
    <ol className ={css.movieList}>
      {array.map(item => {
        return (
          <li className ={css.movieListItem} key={item.id}>
            <MovieCard item={item} />
          </li>
        );
      })}
    </ol>
  );
}
