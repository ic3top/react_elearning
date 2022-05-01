import './home.scss';

import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {fetchMovies} from '../../store/movies/moviesAsyncActions';

import {Logo} from "../../components/logo/Logo";
import AddMovieModal from "./modals/add-movie/AddMovieModal";
import MovieFilters from "../../components/movie-filters/movie-filters";
import MovieList from "../../components/movie-list/movie-list";

export const Home = () => {
  const dispatch = useDispatch();
  const [showAddMovie, setShowAddMovie] = useState(false);


  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  return (
    <>
      <AddMovieModal show={showAddMovie} onClose={() => setShowAddMovie(false)} />

      <Outlet
        context={{ onAddMovie: () => setShowAddMovie(true) }}
      />

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

