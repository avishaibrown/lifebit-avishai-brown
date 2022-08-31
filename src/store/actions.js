import {
  FETCH_MOVIES,
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  ADD_TO_FAVOURITES,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_START,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAIL,
} from "../utils/constants";

export const fetchMovies = (searchTerm) => {
  return {
    type: FETCH_MOVIES,
    searchTerm: searchTerm,
  };
};

export const fetchMoviesStart = () => {
  return {
    type: FETCH_MOVIES_START,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies: movies,
  };
};

export const fetchMoviesFail = (error) => {
  return {
    type: FETCH_MOVIES_FAIL,
    error: error,
  };
};

export const addToFavourites = (imdbID) => {
  return {
    type: ADD_TO_FAVOURITES,
    imdbID: imdbID,
  };
};

export const fetchMovieDetails = (imdbID) => {
  return {
    type: FETCH_MOVIE_DETAILS,
    imdbID: imdbID,
  };
};

export const fetchMovieDetailsStart = () => {
  return {
    type: FETCH_MOVIE_DETAILS_START,
  };
};

export const fetchMovieDetailsSuccess = (details) => {
  return {
    type: FETCH_MOVIE_DETAILS_SUCCESS,
    details: details,
  };
};

export const fetchMovieDetailsFail = (error) => {
  return {
    type: FETCH_MOVIE_DETAILS_FAIL,
    error: error,
  };
};
