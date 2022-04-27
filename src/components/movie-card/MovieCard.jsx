import PropTypes from 'prop-types';
import {useState} from "react";

import './movie-card.scss';

import moviePlaceHolderImg from '../../assets/movie.png';
import dotsImg from '../../assets/dots-more.png';
import closeImg from '../../assets/close-sm.png';
import {OutsideClickHandler} from "../outside-click-handler/OutsideClickHandler";

import {DeleteMovieModal} from "../../pages/home/modals/delete-movie/DeleteMovieModal";
import {EditMovieModal} from "../../pages/home/modals/edit-movie/EditMovieModal";
import {useToggle} from "../../hooks/useToggle";

export const MovieCard = ({ movie, onClick }) => {
  const [deleteModal, toggleDelete] = useToggle(false);
  const [editModal, toggleEdit] = useToggle(false);
  const [menuShown, toggleMenuShown, setMenuShown] = useToggle(false);

  const { year, title, genre, image } = movie;

  return (
    <>
      <DeleteMovieModal
        show={deleteModal}
        onClose={toggleDelete}
        name={title}
      />

      <EditMovieModal movie={movie} show={editModal} onClose={toggleEdit} />

      <div
        className="movie-card"
        onMouseLeave={() => setMenuShown(false)}
        onClick={onClick}
      >
        <div className="movie-card__img-wrapper">

          { !menuShown &&
            <div className="movie-card__actions">
              <button onClick={toggleMenuShown}>
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
                onClick={toggleEdit}
              >Edit</button>
              <button
                className="movie-card__btn"
                onClick={toggleDelete}
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
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}
