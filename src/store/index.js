import { takeEvery, all } from "redux-saga/effects";
import { FETCH_MOVIES, FETCH_MOVIE_DETAILS } from "../utils/constants";
import { fetchMoviesSaga, fetchMovieDetails } from "./sagas";

export function* watchSagas() {
  yield all([
    takeEvery(FETCH_MOVIES, fetchMoviesSaga),
    takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetails),
  ]);
}
