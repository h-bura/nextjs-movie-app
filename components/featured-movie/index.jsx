import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

function FeaturedMovie({ movie = {}, isCompact = true }) {
  const {
    poster_path,
    title,
    overview,
    genres,
    release_date,
    vote_average,
    vote_count,
    runtime,
    original_language,
  } = movie;
  const roundedVoteAverage = parseFloat(vote_average).toFixed(1);
  const language = original_language.toUpperCase();
  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      {!isCompact && (
        <div className={styles.features}>
          {genres?.map((genre) => (
            <p className={styles.genres} key={genre.id}>
              {genre.name},
            </p>
          ))}
          <p>Release Date: {release_date}</p>
          <p>Rating: {roundedVoteAverage}</p>
          <p>Vote Count: {vote_count}</p>
          <p>Runtime: {runtime} min</p>
          <p>Original Language:{language}</p>
        </div>
      )}
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>

        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : "https://images.freeimages.com/images/large-previews/7ab/film-strip-1194817.jpg"
          }
          alt={title}
          fill
        />
      </div>
    </div>
  );
}

export default FeaturedMovie;
