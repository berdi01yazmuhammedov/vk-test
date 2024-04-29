import React from "react";
import MovieCard from "../../components/MovieCard";
import styles from "./Movies.module.scss";
const Movies = () => {
  return (
    <div className={styles.container}>
      <h1>ФИЛЬМЫ</h1>
      <div className={styles.movies}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Movies;
