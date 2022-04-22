import PropTypes from 'prop-types';
import './movie-card.scss';
import moviePlaceHolderImg from './movie.png';

export const MovieCard = ({ year, title, genre, image }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={moviePlaceHolderImg} alt="movie"/>
      </div>
      <div className="card-title-wrapper">
        <div className="card-title">{title}</div>
        <div className="year">{year}</div>
      </div>
      {genre && <div className="genre">{genre}</div>}
    </div>
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
