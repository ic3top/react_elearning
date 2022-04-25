import './home.scss';
import { MovieCard } from "../../components/movie-card/MovieCard";
import { Logo } from "../../components/logo/Logo";
import {useState} from "react";
import {AddMovieModal} from "./modals/add-movie/AddMovieModal";
import {Outlet, useNavigate} from "react-router-dom";
import {movies} from "./mocks";

export const Home = () => {
  const navigate = useNavigate();

  const [showAddMovie, setShowAddMovie] = useState(false);
  const [sortBy, setSortBy] = useState('release');

  return (
    <>
      <AddMovieModal show={showAddMovie} onClose={() => setShowAddMovie(false)} />

      <Outlet
        context={{ onAddMovie: () => setShowAddMovie(true) }}
      />

      <div className="divider" />

      <div className="content-bg">
        <div className="content container">
          <div className="filters">
            <div className="filters-genre">
              <button className="filters-btn active">All</button>
              <button className="filters-btn">Documentary</button>
              <button className="filters-btn">Comedy</button>
              <button className="filters-btn">Horror</button>
              <button className="filters-btn">Crime</button>
            </div>
            <div className="filters-sort">
              <label htmlFor="sort-by">Sort By</label>
              <select name="sort-by" id="sort-by" onChange={e => setSortBy(e.target.value)}>
                <option value="release">Release Date</option>
                <option value="rating">Rating</option>
                <option value="views">Views</option>
              </select>
            </div>
          </div>

          <div className="filters-divider" />

          <p className="movies-found"><span>{movies.length}</span> movies found</p>
          <div className="movies">
            {movies.sort((prevMovie, nextMovie) => {
              if (sortBy === 'release') {
                return new Date(nextMovie.release) - new Date(prevMovie.release);
              }

              return nextMovie[sortBy] - prevMovie[sortBy];
            }).map(movie =>
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => navigate(`${movie.id}`, { state: { movie }} )}
              />
            )}
          </div>
        </div>
      </div>
      <footer className="footer">
        <Logo />
      </footer>
    </>
  );
}

