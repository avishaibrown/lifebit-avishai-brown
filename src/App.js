import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { API_KEY } from "./utils/constants";
import omdbClient from "./axios";
import SearchResults from "./containers/SearchResults/SearchResults";
import MovieDetails from "./containers/MovieDetails/MovieDetails";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [movieDetails, setMovieDetails] = useState({});
  const [movieId, getMovieId] = useState("");
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

  return (
    <div className="App">
      <SearchResults
        setSearchTerm={setSearchTerm}
        getMovieId={getMovieId}
        movies={movieList}
      />
      {movieId && <MovieDetails movieDetails={movieDetails} />}
    </div>
  );
};

export default App;
