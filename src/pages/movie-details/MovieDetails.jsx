import './movie-details.scss';
import searchImg from '../../assets/search.png';

import {Link, useLocation} from "react-router-dom";
import placeholderImg from '../../assets/movie.png';
import {Logo} from "../../components/logo/Logo";

export const MovieDetails = () => {
  const {state} = useLocation();

  if (!state) return <h2>Movie details</h2>

  const {
    movie: {
      title,
      release,
      url,
      rating,
      genre,
      runtime,
      overview
    }
  } = state;

  return (
    <div className="movie-details">
      <div className="container">

        <div className="movie-details__top">
          <Logo />
          <Link to="/home" className="movie-details__search">
            <img src={searchImg} alt="magnifying glass"/>
          </Link>
        </div>

        <div className="movie-details__wrapper">
          <img className="movie-details__poster" src={placeholderImg} alt="movie poster"/>

          <div>
            <div className="movie-details__title-wrapper">
              <h1 className="movie-details__title">{title}</h1>
              <div className="movie-details__rating">{rating.toFixed(1)}</div>
            </div>

            <p className="movie-details__genre">{JSON.stringify(genre)}</p>

            <div className="movie-details__wiki">
              <p>{release}</p>
              <p>{runtime}</p>
            </div>
            <p className="movie-details__overview">
              {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
