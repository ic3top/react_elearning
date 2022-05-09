import './movie-filters.scss';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import { GENRES } from '../../constants';

export const MovieFilters = () => {
  const { search, setSearch, fetchMovies } = useFetchMovies();

  const onClickGenre = (genre) => {
    setSearch({ genre })
    fetchMovies({ genre });
  }

  const onChangeSort = (sortBy) => {
    setSearch({ sortBy })
    fetchMovies({ sortBy })
  }

  return (
    <div className="filters">
      <div className="filters__genre">
        {GENRES.map(genre => (
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
