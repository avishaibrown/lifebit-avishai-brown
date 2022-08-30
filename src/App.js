import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import { API_KEY } from "./utils/constants";
import omdbClient from "./axios";

const API_URL = "/?apiKey=" + API_KEY + "&s=abc";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovieSearchResults = async () => {
    let searchResponse = []
    await omdbClient
      .get(API_URL)
      .then((response) => {
        searchResponse = response.data.Search
      });

    setMovieList(searchResponse);
  };

  useEffect(() => {
    getMovieSearchResults();
  }, []);

  return (
    <div className="App">
      <MovieList movies={movieList} />;
    </div>
  );
};

export default App;
