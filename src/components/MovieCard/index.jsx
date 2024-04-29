import React from "react";
import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";
const MovieCard = ({id,name, poster, rating, year, alternativeName}) => {
  return (
    <Link to={`/movies/${id}`}>
      <article>
        <figure>
          <img src={poster.url} alt={alternativeName} width={200} height={270}/>
        </figure>
        <div className={styles.rating}>
          <span>{rating.imdb}</span>
          <div className={styles.desc}>
            <h4>{name}</h4>
            <p>{year}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
