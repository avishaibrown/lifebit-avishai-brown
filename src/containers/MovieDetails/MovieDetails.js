import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  ADD_TO_FAVOURITES,
  IMDB,
  ROTTEN_TOMATOES,
  PLOT,
  CAST,
  GENRE,
  DIRECTOR,
  BACK_TO_SEARCH,
} from "../../utils/constants";

const MovieDetails = (props) => {
  const { movieDetails } = props;
  let imdbRating,
    rottenTomatoesRating = null;
  const getRatings = useRef(() => {});

  getRatings.current = () => {
    for (const index in movieDetails?.Ratings) {
      const rating = movieDetails?.Ratings[index];
      if (rating.Source === IMDB) {
        imdbRating = rating.Value;
      } else if (rating.Source === ROTTEN_TOMATOES)
        rottenTomatoesRating = rating.Value;
    }
  };

  useEffect(() => {
    movieDetails !== {} && getRatings.current();
  }, [movieDetails]);

  return (
    <>
      <NavLink to="/search" style={{ textDecoration: "none" }}>
        <Button variant="contained">{BACK_TO_SEARCH}</Button>
      </NavLink>
      <p>{movieDetails?.Runtime}</p>
      <p>{movieDetails?.Year}</p>
      <p>{movieDetails?.Rated}</p>
      <p>{movieDetails?.Title}</p>
      <p>{imdbRating}</p>
      {rottenTomatoesRating && <p>{rottenTomatoesRating}</p>}
      <button>{ADD_TO_FAVOURITES}</button>
      <p>{PLOT}</p>
      <p>{movieDetails?.Plot}</p>
      <p>{CAST}</p>
      {/* {Object.values(movieDetails?.Actors).map((member) => (
        <li>{member}</li>
      ))} */}
      <p>{GENRE}</p>
      {/* {movieDetails?.Genre.map((genre) => (
        <li>{genre}</li>
      ))} */}
      <p>{DIRECTOR}</p>
      {/* {movieDetails?.Director.map((name) => (
        <li>{name}</li>
      ))} */}
    </>
  );
};

export default MovieDetails;
