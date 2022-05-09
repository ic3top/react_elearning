import './header.scss';

import {useState} from "react";

import {Logo} from "../logo/Logo";
import {Button} from "../button/Button";
import {useFetchMovies} from "../../hooks/useFetchMovies";

export const Header = ({ onAddMovie }) => {
  const { search, setSearch, fetchMovies } = useFetchMovies();

  const [searchVal, setSearchVal] = useState(search.get('search') || '');

  const onInputChange = (val) => {
    setSearchVal(val);
    if (val === '') {
      setSearch({ search: '' })
      fetchMovies({ search: '' });
    }
  }

  const onSearchSubmit = (e) => {
    e.preventDefault();

    setSearch({ search: searchVal })
    fetchMovies({ search: searchVal });
  }

  return (
    <>
      <div className="top-bg" >
        <div className="container">
          <header className="header">
            <Logo />
            <button className="add-btn" onClick={onAddMovie}>+ add movie</button>
          </header>
          <div className="upper">
            <h1 className="title">Find Your Movie</h1>
            <form onSubmit={onSearchSubmit}>
              <input
                value={searchVal}
                onChange={e => onInputChange(e.target.value)}
                className="search-input"
                type="text"
                placeholder="What do you want to watch?"
              />
              <div className="upper-btn">
                <Button color="primary" type="submit">Search</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};
