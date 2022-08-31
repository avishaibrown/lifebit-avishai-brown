import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { API_KEY } from "./utils/constants";
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

  //TODO: Add navigation between routes /search and /details
  return (
    <Container maxWidth="md">
      <div style={{ padding: "20px" }}>
        <SearchBar onSearch={(value) => setSearchTerm(value)} />
      </div>

      <div style={{ padding: "20px" }}>
        <SearchResults setMovieId={setMovieId} movies={movieList} />
        {movieId && <MovieDetails movieDetails={movieDetails} />}
      </div>
    </Container>
  );
};

export default App;
