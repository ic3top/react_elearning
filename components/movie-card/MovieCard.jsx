/* eslint-disable camelcase */
import Image from 'next/image';
import styles from './MovieCard.module.scss';

import dotsImg from '/public/img/dots-more.png';
import closeImg from '/public/img/close-sm.png';
import moviePlaceholderImg from '/public/img/movie-placeholder.png';

import { OutsideClickHandler } from '../outside-click-handler/OutsideClickHandler';

import DeleteMovieModal from '../modals/delete-movie/DeleteMovieModal';
import EditMovieModal from '../modals/edit-movie/EditMovieModal';
import { useToggle } from '../../hooks/useToggle';
import { ImageFallback } from '../image-fallback/ImageFallback';

export function MovieCard({ movie, onClick }) {
  const [deleteModal, toggleDelete] = useToggle(false);
  const [editModal, toggleEdit] = useToggle(false);
  const [menuShown, toggleMenuShown, setMenuShown] = useToggle(false);

  const {
    release_date, title, genres, poster_path, id,
  } = movie;

  return (
    <>
      <DeleteMovieModal
        show={deleteModal}
        onClose={toggleDelete}
        name={title}
        id={id}
      />

      <EditMovieModal movie={movie} show={editModal} onClose={toggleEdit} />

      <div
        role="listitem"
        className={styles.movieCard}
        onMouseLeave={() => setMenuShown(false)}
      >
        <div className={styles.movieCard__imgWrapper}>

          { !menuShown
            && (
            <div className={styles.movieCard__actions}>
              <button onClick={toggleMenuShown}>
                <Image src={dotsImg} alt="three dots" layout="fill" />
              </button>
            </div>
            )}

          <OutsideClickHandler onOutsideClick={() => setMenuShown(false)}>
            <div
              className={`${styles.movieCard__modal} ${menuShown && styles.movieCard__modal_shown}`}
            >
              <button className={styles.movieCard__close} onClick={() => setMenuShown(false)}>
                <Image src={closeImg} alt="x-mark" layout="fill" />
              </button>

              <button
                className={styles.movieCard__btn}
                onClick={toggleEdit}
              >
                Edit
              </button>
              <button
                className={styles.movieCard__btn}
                onClick={toggleDelete}
              >
                Delete
              </button>
            </div>
          </OutsideClickHandler>

          <ImageFallback
            src={poster_path}
            fallbackSrc={moviePlaceholderImg}
            onClick={onClick}
            className={styles.movieCard__img}
            alt="movie"
            layout="fill"
          />
        </div>
        <div className={styles.movieCard__info}>
          <div className={styles.movieCard__title}>{title}</div>
          <div className={styles.movieCard__year}>{release_date?.split('-')[0]}</div>
        </div>
        {genres && <div className={styles.movieCard__genre}>{genres.join(' & ')}</div>}
      </div>
    </>
  );
}
