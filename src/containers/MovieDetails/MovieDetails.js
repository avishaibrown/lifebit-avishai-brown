import React from "react";
import {
  ADD_TO_FAVOURITES,
  IMDB,
  ROTTEN_TOMATOES,
  PLOT,
  CAST,
  GENRE,
  DIRECTOR,
} from "../../utils/constants";

const MovieDetails = (props) => {
  const { movieDetails } = props;
  let imdbRating, rottenTomatoesRating;

  //   if (movieDetails !== {}) {
  //     for (const rating of movieDetails?.Ratings) {
  //       if (rating.Source === IMDB) {
  //         imdbRating = rating.Value;
  //       } else if (rating.Source === ROTTEN_TOMATOES)
  //         rottenTomatoesRating = rating.Value;
  //     }
  //   }

  return (
    <>
      <p>{movieDetails?.Runtime}</p>
      <p>{movieDetails?.Year}</p>
      <p>{movieDetails?.Rated}</p>
      <p>{movieDetails?.Title}</p>
      {imdbRating && <p>{imdbRating}</p>}
      {rottenTomatoesRating && <p>{rottenTomatoesRating}</p>}
      <button>{ADD_TO_FAVOURITES}</button>
      <p>{PLOT}</p>
      <p>{movieDetails?.Plot}</p>
      <p>{CAST}</p>
      {/* {movieDetails?.Cast.map((member) => (
        <li>{member}</li>
      ))}
      <p>{GENRE}</p>
      {movieDetails?.Genre.map((genre) => (
        <li>{genre}</li>
      ))}
      <p>{DIRECTOR}</p>
      {movieDetails?.Director.map((name) => (
        <li>{name}</li>
      ))} */}
    </>
  );
};

export default MovieDetails;
