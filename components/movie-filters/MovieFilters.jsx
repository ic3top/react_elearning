import styles from './MovieFilters.module.scss';
import { useFetchMovies } from '/hooks/useFetchMovies';
import { GENRES, SORT_BY } from '/constants/constants';

export function MovieFilters() {
  const { search, setSearch } = useFetchMovies();

  const onClickGenre = (genre) => {
    setSearch({ genre });
  };

  const onChangeSort = (sortBy) => {
    setSearch({ sortBy });
  };

  const sortOptions = SORT_BY.map(
    (opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>,
  );
  const genreButtons = GENRES.map((genre) => (
    <button
      className={`${styles.filters__btn} ${search.genre === genre && styles.filters__btn_active}`}
      onClick={() => onClickGenre(genre)}
      key={genre}
    >
      {genre}
    </button>
  ));

  return (
    <div className={styles.filters}>
      <div className={styles.filters__genre}>
        {genreButtons}
      </div>
      <div className={styles.filters__sort}>
        <label htmlFor="sort-by">Sort By</label>
        <select value={search.sortBy || ''} name="sort-by" id="sort-by" onChange={(e) => onChangeSort(e.target.value)}>
          {sortOptions}
        </select>
      </div>
    </div>
  );
}
