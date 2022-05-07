import './movie-details.scss';
import searchImg from '../../assets/search.png';

import {Link, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Logo} from "../../components/logo/Logo";
import {fetchMovieById} from '../../store/movies/moviesAsyncActions';


export const MovieDetails = () => {
  const dispatch = useDispatch();
  const [search] = useSearchParams();
  const id = search.get('movie');

  const movie = useSelector(({ movies: { value } }) => value.find(movie => movie.id == id));

  useEffect(() => {
    if (!movie) {
      dispatch(fetchMovieById(id));
    }
  }, [id, movie]);

  if (!movie) return null;

  const {
    title,
    release_date,
    poster_path,
    vote_average,
    genres,
    runtime,
    overview
  } = movie;

  return (
    <div className="movie-details">
      <div className="container">

        <div className="movie-details__top">
          <Logo />
          <Link to="/search" className="movie-details__search">
            <img src={searchImg} alt="magnifying glass"/>
          </Link>
        </div>

        <div className="movie-details__wrapper">
          <div className="movie-details__poster">
            <img src={poster_path} alt="movie poster"/>
          </div>

          <div>
            <div className="movie-details__title-wrapper">
              <h1 className="movie-details__title">{title}</h1>
              <div className="movie-details__rating">{vote_average.toFixed(1)}</div>
            </div>

            <p className="movie-details__genre">{genres.join(' & ')}</p>

            <div className="movie-details__wiki">
              <p>{release_date}</p>
              <p>{runtime} mins</p>
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
