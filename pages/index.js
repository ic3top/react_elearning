import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import { Provider } from 'react-redux'

import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

import * as moviesApi from '/api/moviesApi';
import { initializeStore, useStore } from '/store/store';

import { Logo } from '/components/logo/Logo';
import { Header } from '/components/header/Header';
import { MovieFilters } from "/components/movie-filters/MovieFilters";
import MovieList from "/components/movie-list/MovieList";
import AddMovieModal from '/components/modals/add-movie/AddMovieModal';
import { MovieDetails } from '/components/movie-details/MovieDetails';

import { useFetchMovies } from '/hooks/useFetchMovies';

import { GENRES, SORT_BY } from '/constants/constants';

export default function Home({ movie }) {
  const { search, setSearch } = useFetchMovies();
  const [showAddMovie, setShowAddMovie] = useState(false);

  useEffect(() => {
    if (!search.sortBy && !search.genre) setSearch({ sortBy: SORT_BY[0], genre: GENRES[0] });
  }, []);

  return (
    <div className={styles.container}>
          <Head>
            <title>Movies Roulette</title>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
          </Head>

          {
            movie
              ? <MovieDetails movie={movie} />
              : <Header onAddMovie={() => setShowAddMovie(true)} />
          }

          <main className={styles.main}>
            <AddMovieModal show={showAddMovie} onClose={() => setShowAddMovie(false)} />

            <div className={styles.divider} />

            <div className={styles.contentBg}>
              <div className="container">
                <MovieFilters />

                <div className={styles.filtersDivider} />

                <MovieList />
              </div>
            </div>

          </main>

          <footer className={styles.footer}>
            <Logo />
          </footer>
        </div>
  )
}
