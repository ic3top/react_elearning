import { useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';
import { setMovies } from '/store/movies/moviesActions';

export const useFetchMovies = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return {
    search: router.query,
    routerReady: router.isReady,
    setSearch: (params = {}) => Router.push({
      query: { ...router.query, ...params },
    }, null, { scroll: false }),
    setMovies: (movies, totalAmount) => dispatch(setMovies({ movies, totalAmount })),
  };
};
