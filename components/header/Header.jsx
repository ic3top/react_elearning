import styles from './Header.module.scss';

import { useState } from "react";

import { Logo } from "../logo/Logo";
import { Button } from "../button/Button";
import { useFetchMovies } from "/hooks/useFetchMovies";

export const Header = ({ onAddMovie }) => {
  const { search, setSearch} = useFetchMovies();

  const [searchVal, setSearchVal] = useState(search.search || '');

  const onInputChange = (val) => {
    setSearchVal(val);
    if (val === '') {
      setSearch({ search: '' })
    }
  }

  const onSearchSubmit = (e) => {
    e.preventDefault();

    setSearch({ search: searchVal })
  }

  return (
    <>
      <div className={styles.topBg} >
        <div className="container">
          <header className={styles.header}>
            <Logo />
            <button className={styles.addBtn} onClick={onAddMovie}>+ add movie</button>
          </header>
          <div className={styles.upper}>
            <h1 className={styles.title}>Find Your Movie</h1>
            <form onSubmit={onSearchSubmit}>
              <input
                value={searchVal}
                onChange={e => onInputChange(e.target.value)}
                className={styles.searchInput}
                type="text"
                placeholder="What do you want to watch?"
              />
              <div className={styles.upperBtn}>
                <Button color="primary" type="submit">Search</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};
