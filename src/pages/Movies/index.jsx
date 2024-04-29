import React, { useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import styles from "./Movies.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store";
const Movies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className={styles.container}>
      <h1>ФИЛЬМЫ</h1>
      <div className={styles.movies}>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard {...movie}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;

