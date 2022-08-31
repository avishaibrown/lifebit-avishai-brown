import React, { useEffect, useState, useRef, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { API_KEY, LOADING } from "./utils/constants";
import omdbClient from "./axios";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./containers/SearchResults/SearchResults";
import MovieDetails from "./containers/MovieDetails/MovieDetails";
import Container from "@mui/material/Container";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [movieDetails, setMovieDetails] = useState({});
  const [movieId, setMovieId] = useState("");
  const getMovieSearchResults = useRef(() => {});
  const getMovieDetails = useRef(() => {});

  getMovieSearchResults.current = async () => {
    let searchResponse = [];
    let url = "/?apiKey=" + API_KEY + "&s=" + searchTerm;

    await omdbClient.get(url).then((response) => {
      searchResponse = response.data.Search;
    });

    setMovieList(searchResponse);
  };

  getMovieDetails.current = async () => {
    let detailsResponse = [];
    let url = "/?apiKey=" + API_KEY + "&i=" + movieId;

    await omdbClient.get(url).then((response) => {
      detailsResponse = response.data;
    });

    setMovieDetails(detailsResponse);
  };

  useEffect(() => {
    searchTerm !== undefined && getMovieSearchResults.current();
  }, [searchTerm]);

  useEffect(() => {
    movieId && getMovieDetails.current();
  }, [movieId]);

  const routes = (
    <Routes>
      <Route
        path="/search"
        element={
          <>
            <div style={{ padding: "20px" }}>
              <SearchBar onSearch={(value) => setSearchTerm(value)} />
            </div>
            <SearchResults setMovieId={setMovieId} movies={movieList} />
          </>
        }
      />
      <Route
        path="/details"
        element={<MovieDetails movieDetails={movieDetails} />}
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
