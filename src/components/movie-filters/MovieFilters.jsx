import {connect} from "react-redux";
import './movie-filters.scss';
import { fetchMovies } from '../../store/movies/moviesAsyncActions';
import {useSearchParams} from "react-router-dom";

const genresToShow = [
  'ALL',
  'Documentary',
  'Comedy',
  'Horror',
  'Crime'
]

export const MovieFilters = ({ onSelectGenre, onSelectSort }) => {
  const [search, setSearch] = useSearchParams();

  const onClickGenre = (genre) => {
    setSearch({ ...Object.fromEntries(search), genre });
    onSelectGenre(genre);
  }

  const onChangeSort = (sortBy) => {
    setSearch({ ...Object.fromEntries(search), sortBy });
    onSelectSort(sortBy);
  }

  return (
    <div className="filters">
      <div className="filters__genre">
        {genresToShow.map(genre => (
          <button
            className={`filters__btn ${search.get('genre') === genre && 'filters__btn_active'}`}
            onClick={() => onClickGenre(genre)}
            key={genre}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="filters__sort">
        <label htmlFor="sort-by">Sort By</label>
        <select value={search.get('sortBy') || ''} name="sort-by" id="sort-by" onChange={e => onChangeSort(e.target.value)}>
          <option value="release_date">Release Date</option>
          <option value="vote_average">Rating</option>
          <option value="vote_count">Views</option>
        </select>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre: (genre) => dispatch(fetchMovies({ genre })),
  onSelectSort: (sortBy) => dispatch(fetchMovies({ sortBy })),
});

export default connect(null, mapDispatchToProps)(MovieFilters)
