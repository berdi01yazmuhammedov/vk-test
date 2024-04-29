import React, { useEffect } from "react";
import styles from "./MovieDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../../store";
const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const moviesState = useSelector((state) => state.movies);
  const { movies } = moviesState;
  const movie = movies.find((movie) => movie.id == id);
  if (!movie) {
    dispatch(fetchMovies());
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.details}>
      <div className={styles.description}>
        <h1>
          {movie.rating.imdb} {movie.name}
        </h1>
        <p className={styles.text}>{movie.description}</p>
        <p>
          <span>Длительность:</span> {movie.movieLength} мин
        </p>
        <p>
          <span>Популярность: </span> {movie.rating.kp}
        </p>
        <p>
          <span>Дата выхода: </span> {movie.year}
        </p>
      </div>
      <img
        src={movie.poster.url}
        alt={movie.alternativeName}
        width={300}
        height={450}
      />
    </div>
  );
};

export default MovieDetails;
