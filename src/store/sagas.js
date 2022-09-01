import { put } from "redux-saga/effects";
import * as actions from "./actions";
import omdbService from "../services/omdbService";
import { API_KEY } from "../utils/constants";

export function* fetchMoviesSaga(action) {
  yield put(actions.fetchMoviesStart());
  try {
    const url = "/?apiKey=" + API_KEY + "&s=" + action.searchTerm;
    const response = yield omdbService.get(url);
    const fetchedMovies = response.data.Search;
    yield put(actions.fetchMoviesSuccess(fetchedMovies));
  } catch (error) {
    yield put(actions.fetchMoviesFail(error));
  }
}

export function* fetchMovieDetailsSaga(action) {
  yield put(actions.fetchMovieDetailsStart());
  try {
    const url = "/?apiKey=" + API_KEY + "&i=" + action.imdbID;
    const response = yield omdbService.get(url);
    const fetchedMovieDetails = response.data;
    yield put(actions.fetchMovieDetailsSuccess(fetchedMovieDetails));
  } catch (error) {
    yield put(actions.fetchMovieDetailsFail(error));
  }
}
