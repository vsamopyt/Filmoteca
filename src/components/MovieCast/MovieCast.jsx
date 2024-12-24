import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';
import BarLoader from 'react-spinners/BarLoader';

import { fetchMovieCastById } from '../../movies-api';
import CommonModalWindow from '../CommonlModalWindow/CommonlModalWindow';
import MovieCastCard from '../MovieCastCard/MovieCastCard';
import css from './MovieCast.module.css';

const listVariants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { opacity: 0, y: 20 },
};

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCastDetail, setMovieCastDetail] = useState([]);
  const [movieCastLoading, setMovieCastLoading] = useState(false);
  const [movieCastError, setMovieCastError] = useState(false);

  // -------modal window

  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [character, setCharacter] = useState("");
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = (item) => {
    setIsOpen(true);
    setImg(`https://image.tmdb.org/t/p/w500/${item.profile_path}`);
    setName(item.name); 
    setCharacter(item.character);
  };

  const afterOpenModal = () => {
    document.body.style.overflow = 'hidden';
  };
  const afterCloseModal = () => {
    document.body.style.overflow = 'auto';
  };
// +++++++++

  useEffect(() => {
    async function getMovieCastById() {
      if (!movieId) {
        return;
      }
      try {
        setMovieCastLoading(true);
        const result = await fetchMovieCastById(movieId);
        setMovieCastDetail(result.data.cast);
      } catch (error) {
        setMovieCastError(true);
      } finally {
        setMovieCastLoading(false);
      }
    }
    getMovieCastById();
  }, [movieId]);



  return (
    <div className={css.movieCastLoadingWraper}>
      <h1 className={css.movieCastLoadingTitle}>Movie Cast</h1>
      {movieCastError && (
        <p>Ooops! Something went wrong! Reload the page please!</p>
      )}
      {movieCastLoading && (
        <div className={css.movieCastLoadingContainer}>
          <BarLoader
            color={'orange'}
            size={200}
            className={css.pageBarloader}
          />
        </div>
      )}

      <>
        {' '}
        {movieCastDetail.length > 0 && (
          <ul className={css.movieCastList}>
            {movieCastDetail.map((item, i) => {
              return (
                <motion.li
                  key={item.id}
                  className={css.movieCastListItem}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  onClick={()=>{onOpen(item)}}
                >
                  <MovieCastCard item={item} />
                </motion.li>
              );
            })}
          </ul>
        )}
      </>

      {!movieCastLoading && !movieCastDetail.length && (
        <p className={css.infoMessage}>
          Sorry, there is no info about cast yet
        </p>
      )}

      <CommonModalWindow
        isOpen={isOpen}
        onClose={onClose}
        afterOpenModal={afterOpenModal}
        afterCloseModal={afterCloseModal}
      >
        <div className={css.modalImgWrapper}>
        <img className={css.modalCastImg} src={img} width="200"/> 
        <div className={css.modalCastText}>
        <p>{name}</p>
        <span>as </span>
        <span>{character}</span>
        </div> 
        </div>
   
      </CommonModalWindow>
    </div>
  );
}
