import React from 'react'
import styles from "./MovieDetails.module.scss";
const MovieDetails = () => {
  return (
    <div className={styles.details}>
      <div className={styles.description}>
        <h1>8.4 Семь Самураев</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam quo mollitia dolorum delectus sit facere ex tenetur commodi, nulla magni deserunt doloribus in, rem numquam consequatur ducimus vitae error corporis dolorem animi aliquam? Nostrum neque eligendi fuga est ducimus eius itaque veritatis ratione autem, debitis harum, quos quaerat id! Esse delectus expedita praesentium rem totam et, nihil fugit assumenda quo consequuntur accusamus reiciendis animi aliquid voluptatem aliquam omnis dicta in a unde perspiciatis corrupti doloremque, mollitia velit beatae! Aut totam deleniti facilis, nemo nam nostrum sunt vel perspiciatis praesentium accusantium vitae commodi explicabo quas quasi sapiente, maxime pariatur quae?</p>
        <p><span>Длительность:</span> 202 мин</p>
        <p><span>Популярность: </span> 24.13</p>
        <p><span>Дата выхода: </span> 26 апреля 1954</p>
        <p><span>Жанр: </span> боевик, драма</p>
      </div>
      <img src="https://via.assets.so/movie.png?id=1&q=95&w=300&h=450&fit=fill" alt="" />
    </div>
  )
}

export default MovieDetails