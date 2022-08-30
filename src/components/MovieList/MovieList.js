import React from "react";

const MovieList = (props) => {
  const { movies } = props;

  return (
    <>
      {movies?.map((movie, index) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt="movie" />
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
        </div>
      ))}
    </>
  );
};

export default MovieList;
