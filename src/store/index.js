import { takeEvery, all } from "redux-saga/effects";
import {
  // ADD_TO_FAVOURITES,
  FETCH_MOVIES,
  FETCH_MOVIE_DETAILS,
} from "../utils/constants";
import {
  fetchMoviesSaga,
  fetchMovieDetailsSaga,
  // addToFavouritesSaga,
} from "./sagas";

export function* watchSagas() {
  yield all([
    takeEvery(FETCH_MOVIES, fetchMoviesSaga),
    takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetailsSaga),
    // takeEvery(ADD_TO_FAVOURITES, addToFavouritesSaga),
  ]);
}
