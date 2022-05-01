import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";

import './movie-list.scss';
import {MovieCard} from "../movie-card/MovieCard";

export const MovieList = ({ movies, amount }) => {
  const navigate = useNavigate();

  return (
    <>
      <p className="movies__found"><span>{amount}</span> movies found</p>
      <div className="movies">
        {movies.map(movie =>
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => navigate(`${movie.id}`)}
          />
        )}
      </div>
    </>
  )
}

const mapStateToProps = (state, props) => ({
    movies: state.movies.value,
    amount: state.movies.totalAmount,
})

export default connect(mapStateToProps)(MovieList);
