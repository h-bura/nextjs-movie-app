"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import styles from "./styles.module.css";

function MoviesSection({ title, movies }) {
  const [quentity, setQuentity] = useState(7);
  const [isExpanded, setIsExpanded] = useState(false);

  const showHandler = () => {
    setQuentity(isExpanded ? 7 : 20);
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.slice(0, quentity).map((movie) => {
          const roundedVoteAverage = parseFloat(movie.vote_average).toFixed(1);
          return (
            <div className={styles.movie} key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                <h3 className={styles.movieTitle}>{movie.title}</h3>
                <Image
                  fill
                  unoptimized
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </Link>
              <p className={styles.movieRating}>
                <AiFillStar />
                {roundedVoteAverage}
              </p>
            </div>
          );
        })}
      </div>
      <button className={styles.showMore} onClick={showHandler}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default MoviesSection;
