import React from "react";
import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";
const url = "https://via.assets.so/movie.png?id=1&q=95&w=200&h=270&fit=fill";
const MovieCard = () => {
  return (
    <Link to="/movies/:id">
      <article>
        <figure>
          <img src={url} alt="" />
        </figure>
        <div className={styles.rating}>
          <span>8.4</span>
          <div className={styles.desc}>
            <h4>Хороший, плохой, злой</h4>
            <p>22 декабря 1966</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
