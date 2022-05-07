import './home.scss';

import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {fetchMovies} from '../../store/movies/moviesAsyncActions';

import {Logo} from "../../components/logo/Logo";
import AddMovieModal from "./modals/add-movie/AddMovieModal";
import MovieFilters from "../../components/movie-filters/MovieFilters";
import MovieList from "../../components/movie-list/MovieList";
import Header from "../../components/header/Header";
import {MovieDetails} from "../movie-details/MovieDetails";

export const Home = () => {
  const dispatch = useDispatch();
  const [showAddMovie, setShowAddMovie] = useState(false);
  const [search] = useSearchParams();
  const movieId = search.get('movie');

  useEffect(() => {
    dispatch(fetchMovies(Object.fromEntries(search)))
  }, []);

  return (
    <>
      <AddMovieModal show={showAddMovie} onClose={() => setShowAddMovie(false)} />

      {
        movieId
          ? <MovieDetails />
          : <Header onAddMovie={() => setShowAddMovie(true)} />
      }

      <div className="divider" />

      <div className="content-bg">
        <div className="content container">
          <MovieFilters />

          <div className="filters-divider" />

          <MovieList />
        </div>
      </div>

      <footer className="footer">
        <Logo />
      </footer>
    </>
  );
}

