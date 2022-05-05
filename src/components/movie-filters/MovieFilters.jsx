import { fetchMovies } from '../../store/movies/moviesAsyncActions';
import './movie-filters.scss';
import {connect} from "react-redux";

const genresToShow = [
  'ALL',
  'Documentary',
  'Comedy',
  'Horror',
  'Crime'
]

export const MovieFilters = ({ activeGenre, onSelectGenre, onSelectSort }) => {
  return (
    <div className="filters">
      <div className="filters__genre">
        {genresToShow.map(genre => (
          <button
            className={`filters__btn ${activeGenre === genre && 'filters__btn_active'}`}
            onClick={() => onSelectGenre(genre)}
            key={genre}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="filters__sort">
        <label htmlFor="sort-by">Sort By</label>
        <select name="sort-by" id="sort-by" onChange={e => onSelectSort(e.target.value)}>
          <option value="release_date">Release Date</option>
          <option value="vote_average">Rating</option>
          <option value="vote_count">Views</option>
        </select>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, props) => ({
  ...props,
  onSelectGenre: (genre) => dispatch(fetchMovies({ genre })),
  onSelectSort: (sortBy) => dispatch(fetchMovies({ sortBy })),
});

const mapStateToProps = (state, props) => ({
  ...props,
  activeGenre: state.movies.genre,
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieFilters)
