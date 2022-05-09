import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from '../store/movies/moviesAsyncActions';

export const useFetchMovies = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useSearchParams();

    return {
        search,
        setSearch: params => setSearch({ ...Object.fromEntries(search), ...params }),
        fetchMovies: (params = {}) => dispatch(fetchMovies({ ...Object.fromEntries(search), ...params})),
    };
}
