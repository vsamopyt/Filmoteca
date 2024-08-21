import { RxAvatar } from 'react-icons/rx';
import css from './MovieReviewsCard.module.css';
export default function MovieReviewsCard({ item }) {
  const {
    author,
    content,
    created_at,
    author_details: { avatar_path },
  } = item;

  const style = { color: 'rgb(180, 195, 210)', fontSize: '32px' };

  return (
    <>
      <div className={css.movieReviewsCardAuthorContainer}>
        <div className={css.movieReviewsCardImgContainer}>
          {avatar_path ? (
            <img
              className={css.movieReviewsCardImg}
              src={`https://image.tmdb.org/t/p/w500/${avatar_path}`}
              alt="avatar"
            />
          ) : (
            <RxAvatar style={style} />
          )}
        </div>
        <h3>{author}</h3>
      </div>

      <p className={css.movieReviewsCardText}>{content}</p>
      <p className={css.movieReviewsCardDate}>{created_at}</p>
    </>
  );
}
