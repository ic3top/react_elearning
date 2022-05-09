import './home.scss';

import { useEffect, useState } from "react";

import { useFetchMovies } from '../../hooks/useFetchMovies';
import { GENRES } from '../../constants';

import { Logo } from "../../components/logo/Logo";
import AddMovieModal from "./modals/add-movie/AddMovieModal";
import { MovieFilters } from "../../components/movie-filters/MovieFilters";
import MovieList from "../../components/movie-list/MovieList";
import { Header } from "../../components/header/Header";
import { MovieDetails } from "../movie-details/MovieDetails";

export const Home = () => {
  const { search, setSearch, fetchMovies } = useFetchMovies();
  const [showAddMovie, setShowAddMovie] = useState(false);
  const movieId = search.get('movie');

  useEffect(() => {
    if (!search.get('genre')) setSearch({ genre: GENRES[0] })
    fetchMovies();
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

