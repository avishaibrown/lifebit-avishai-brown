import React from "react";

const MovieCard = (props) => {
  const { getMovieId, movie } = props;

  return (
    <div key={movie.imdbID}>
      <img
        src={movie.Poster}
        alt="movie"
        onClick={() => getMovieId(movie.imdbID)}
      />
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
