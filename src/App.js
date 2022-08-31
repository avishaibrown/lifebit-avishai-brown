import React, { useEffect, useState, useCallback, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./store/actions";
import "./App.css";
import { LOADING } from "./utils/constants";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./containers/SearchResults/SearchResults";
import MovieDetails from "./containers/MovieDetails/MovieDetails";
import Container from "@mui/material/Container";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [imdbID, setImdbID] = useState("");

  const movies = useSelector((state) => state.movies);
  const details = useSelector((state) => state.details);

  const dispatch = useDispatch();

  const fetchMoviesHandler = useCallback(
    () => dispatch(actions.fetchMovies(searchTerm)),
    [dispatch, searchTerm]
  );

  const fetchMovieDetailsHandler = useCallback(() => {
    dispatch(actions.fetchMovieDetails(imdbID));
  }, [dispatch, imdbID]);

  useEffect(() => {
    searchTerm !== undefined && fetchMoviesHandler();
  }, [searchTerm, fetchMoviesHandler]);

  useEffect(() => {
    imdbID && fetchMovieDetailsHandler();
  }, [imdbID, fetchMovieDetailsHandler]);

  const routes = (
    <Routes>
      <Route
        path="/search"
        element={
          <>
            <div style={{ padding: "20px" }}>
              <SearchBar onSearch={(value) => setSearchTerm(value)} />
            </div>
            <SearchResults setImdbID={setImdbID} movies={movies} />
          </>
        }
      />
      <Route
        path="/details"
        element={<MovieDetails movieDetails={details} />}
      />
      <Route path="*" element={<Navigate replace to="/search" />} />
    </Routes>
  );

  return (
    <div style={{ padding: "2rem" }} className="App">
      <Container maxWidth="md">
        <header>
          <img src="/images/logo.png" alt="What's in" />
        </header>
        <Suspense fallback={LOADING}>{routes}</Suspense>
      </Container>
    </div>
  );
};

export default App;
