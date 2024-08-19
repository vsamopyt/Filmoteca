import css from './MovieCastCard.module.css';
export default function MovieCastCard({ item }) {
  const { character, name, profile_path } = item;
  return (
    <div className={css.MovieCastCardContainer}>
      {profile_path === null ? (
        <img
          src="https://dummyimage.com/400x600/cdcdcd/000.jpg&amp;text=No+poster"
          alt="blank-image"
        />
      ) : (
        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
      )}

      <div className={css.movieCastCardTextContainer}>
        <p className={css.movieCastCardName}>{name}</p>
        <p className={css.movieCastCardCharacter}>as {character}</p>
      </div>
    </div>
  );
}
