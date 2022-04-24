import PropTypes from 'prop-types';
import {useState} from "react";

import './movie-card.scss';

import moviePlaceHolderImg from '../../assets/movie.png';
import dotsImg from '../../assets/dots-more.png';
import closeImg from '../../assets/close-sm.png';
import {OutsideClickHandler} from "../outside-click-handler/OutsideClickHandler";

import {DeleteMovieModal} from "../../pages/home/modals/delete-movie/DeleteMovieModal";
import {EditMovieModal} from "../../pages/home/modals/edit-movie/EditMovieModal";

export const MovieCard = ({ year, title, genre, image }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [menuShown, setMenuShown] = useState(false);

  return (
    <>
      <DeleteMovieModal
        show={deleteModal}
        onClose={() => setDeleteModal(false)}
        name={title}
      />

      <EditMovieModal show={editModal} onClose={() => setEditModal(false)} />

      <div className="movie-card" onMouseLeave={() => setMenuShown(false)}>
        <div className="movie-card__img-wrapper">

          { !menuShown &&
          <div className="movie-card__actions">
            <button onClick={() => setMenuShown(true)}>
              <img src={dotsImg} alt="three dots"/>
            </button>
          </div>
          }

          <OutsideClickHandler onOutsideClick={() => setMenuShown(false)}>
            <div className={`movie-card__modal ${menuShown && 'movie-card__modal_shown'}`}>
              <button className="movie-card__close" onClick={() => setMenuShown(false)}>
                <img src={closeImg} alt="x-mark"/>
              </button>

              <button
                className="movie-card__btn"
                onClick={() => setEditModal(true)}
              >Edit</button>
              <button
                className="movie-card__btn"
                onClick={() => setDeleteModal(true)}
              >Delete</button>
            </div>
          </OutsideClickHandler>

          <img className="movie-card__img" src={moviePlaceHolderImg} alt="movie"/>
        </div>
        <div className="movie-card__info">
          <div className="movie-card__title">{title}</div>
          <div className="movie-card__year">{year}</div>
        </div>
        {genre && <div className="movie-card__genre">{genre}</div>}
      </div>
    </>
  );
}

MovieCard.propTypes = {
  year: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string,
  image: PropTypes.string.isRequired,
}
