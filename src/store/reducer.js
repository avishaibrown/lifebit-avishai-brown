import { updateObject } from "../utils/util";
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIE_DETAILS_START,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAIL,
  ADD_TO_FAVOURITES,
} from "../utils/constants";

const initialState = {
  movies: [],
  loading: false,
  imdbID: null,
  details: {},
  favourites: [],
};

const fetchMoviesStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchMoviesSuccess = (state, action) => {
  return updateObject(state, { movies: action.movies, loading: false });
};

const fetchMoviesFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const addToFavourites = (state, action) => {
  const newFavouritesArray = state.favourites.push(action.imdbID);
  return updateObject(state, { favourites: newFavouritesArray });
};

const fetchMovieDetailsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchMovieDetailsSuccess = (state, action) => {
  return updateObject(state, { details: action.details, loading: false });
};

const fetchMovieDetailsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return fetchMoviesStart(state, action);
    case FETCH_MOVIES_SUCCESS:
      return fetchMoviesSuccess(state, action);
    case FETCH_MOVIES_FAIL:
      return fetchMoviesFail(state, action);
    case ADD_TO_FAVOURITES:
      return addToFavourites(state, action);
    case FETCH_MOVIE_DETAILS_START:
      return fetchMovieDetailsStart(state, action);
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return fetchMovieDetailsSuccess(state, action);
    case FETCH_MOVIE_DETAILS_FAIL:
      return fetchMovieDetailsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
