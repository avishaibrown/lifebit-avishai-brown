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
import Box from "@mui/material/Box";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [imdbID, setImdbID] = useState("");

  const movies = useSelector((state) => state.movies);
  const details = useSelector((state) => state.details);

  const dispatch = useDispatch();

  //get any favourites stored persistently on app load
  useEffect(() => {
    fetchFavouritesHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFavouritesHandler = useCallback(() => {
    const favouritesArray = JSON.parse(
      localStorage.getItem("movie-favourites")
    );
    dispatch(actions.fetchFavourites(favouritesArray));
  }, [dispatch]);

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
            <Container sx={{ padding: "20px" }}>
              <SearchBar onSearch={(value) => setSearchTerm(value)} />
            </Container>
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
        <Box
          component="img"
          sx={{
            height: 40,
            width: 140,
          }}
          alt="What's in"
          src="/images/logo.png"
        />
        <Suspense fallback={LOADING}>{routes}</Suspense>
      </Container>
    </div>
  );
};

export default App;
