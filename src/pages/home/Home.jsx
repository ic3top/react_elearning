import './home.scss';
import { MovieCard } from "../../components/movie-card/MovieCard";
import { Header } from "../../components/header/Header";
import { Logo } from "../../components/logo/Logo";
import {useState} from "react";
import {AddMovieModal} from "./modals/add-movie/AddMovieModal";

const movies = [{
  year: 2003,
  title: 'Pulp Fiction 1',
  genre: 'Action & Adventure',
  image: 'url',
  id: 1,
  rating: 5.3,
  views: 1345234,
  release: '2001/02/02'
}, {
  year: 65432,
  title: 'Pulp Fiction 2',
  genre: 'Action & Adventure',
  image: 'url',
  id: 2,
  rating: 4,
  views: 543313,
  release: '2012/02/02'
}, {
  year: 2003,
  title: 'Pulp Fiction 3',
  genre: 'Action & Adventure',
  image: 'url',
  id: 3,
  rating: 6,
  views: 12234,
  release: '2013/01/02'
}, {
  year: 2003,
  title: 'Pulp Fiction 4',
  genre: 'Action & Adventure',
  image: 'url',
  id: 4,
  rating: 9.3,
  views: 1445433,
  release: '2014/02/02'
}]

export const Home = () => {
  const [showAddMovie, setShowAddMovie] = useState(false);
  const [sortBy, setSortBy] = useState('release')

  return (
    <>
      <AddMovieModal show={showAddMovie} onClose={() => setShowAddMovie(false)} />

      <Header onAddMovie={() => setShowAddMovie(true)} />

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
            }).map(movie => <MovieCard key={movie.id} {...movie} />)}
          </div>
        </div>
      </div>
      <footer className="footer">
        <Logo />
      </footer>
    </>
  );
}

