import './header.scss';
import {useState} from "react";
import {Logo} from "../logo/Logo";
import {Button} from "../button/Button";
import {useOutletContext} from "react-router-dom";

export const Header = ({ onSearch }) => {
  const { onAddMovie } = useOutletContext();
  const [searchVal, setSearchVal] = useState('');

  const onSearchSubmit = (e) => {
    e.preventDefault();

    onSearch(searchVal);
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
                onChange={e => setSearchVal(e.target.value)}
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
