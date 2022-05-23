import styles from './MovieDetails.module.scss';

import Link from 'next/link'
import Image from 'next/image';

import searchImg from '/public/img/search.png';
import moviePlaceholderImg from '/public/img/movie-placeholder.png';

import { Logo } from "/components/logo/Logo";
import { ImageFallback } from "/components/image-fallback/ImageFallback";


export const MovieDetails = ({ movie }) => {
  if (!movie) return null;

  const {
    title,
    release_date,
    poster_path,
    vote_average,
    genres,
    runtime,
    overview
  } = movie;

  return (
    <div className={styles.movieDetails}>
      <div className="container">

        <div className={styles.movieDetails__top}>
          <Logo />
          <Link href={`/`} className={styles.movieDetails__search}>
            <Image
              src={searchImg}
              alt="magnifying glass"
              width={24}
              height={24}
            />
          </Link>
        </div>

        <div className={styles.movieDetails__wrapper}>
          <div className={styles.movieDetails__poster}>
            <ImageFallback
              src={poster_path}
              fallbackSrc={moviePlaceholderImg}
              alt="movie poster"
              width={300}
              height={400}
            />
          </div>

          <div>
            <div className={styles.movieDetails__titleWrapper}>
              <h1 className={styles.movieDetails__title}>{title}</h1>
              <div className={styles.movieDetails__rating}>{vote_average?.toFixed(1)}</div>
            </div>

            <p className={styles.movieDetails__genre}>{genres?.join(' & ')}</p>

            <div className={styles.movieDetails__wiki}>
              <p>{release_date}</p>
              <p>{runtime} mins</p>
            </div>
            <p className={styles.movieDetails__overview}>
              {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
