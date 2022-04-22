import './home.scss';
import {Link} from "react-router-dom";
import { MovieCard } from "../../components/movie-card/MovieCard";

const movies = [{
  year: 2003,
  title: 'Pulp Fiction',
  genre: 'Action & Adventure',
  image: 'url',
  id: 1
}, {
  year: 2003,
  title: 'Pulp Fiction',
  genre: 'Action & Adventure',
  image: 'url',
  id: 2
}, {
  year: 2003,
  title: 'Pulp Fiction',
  genre: 'Action & Adventure',
  image: 'url',
  id: 3
}, {
  year: 2003,
  title: 'Pulp Fiction',
  genre: 'Action & Adventure',
  image: 'url',
  id: 4
}]

export const Home = () => (
  <>
    <div className="top-bg" >
      <div className="container">
        <header className="header">
          <Link className="logo" to="/home">
            <span>netflix</span>roulette
          </Link>
          <button className="add-btn">+ add movie</button>
        </header>
        <div className="upper">
          <h1 className="title">Find Your Movie</h1>
          <form>
            <input className="search-input"  type="text" placeholder="What do you want to watch?"/>
            <button className="search-btn" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>

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
            <select name="sort-by" id="sort-by">
              <option value="release">Release Date</option>
              <option value="rating">Rating</option>
              <option value="views">Views</option>
            </select>
          </div>
        </div>

        <div className="filters-divider"></div>

        <p className="movies-found"><span>{movies.length}</span> movies found</p>
        <div className="movies">
          {movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
        </div>
      </div>
    </div>
    <footer className="footer">
      <p className="logo"><span>netflix</span>roulette</p>
    </footer>
  </>
)

