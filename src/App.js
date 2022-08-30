import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { API_KEY } from "./utils/constants";
import omdbClient from "./axios";
import SearchResults from "./containers/SearchResults/SearchResults";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getMovieSearchResults = useRef(() => {});

  getMovieSearchResults.current = async () => {
    let searchResponse = [];
    let url = "/?apiKey=" + API_KEY + "&s=" + searchTerm;

    await omdbClient.get(url).then((response) => {
      searchResponse = response.data.Search;
    });

    setMovieList(searchResponse);
  };

  useEffect(() => {
    searchTerm !== undefined && getMovieSearchResults.current();
  }, [searchTerm]);

  return (
    <div className="App">
      <SearchResults setSearchTerm={setSearchTerm} movies={movieList} />
    </div>
  );
};

export default App;
