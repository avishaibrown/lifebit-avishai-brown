import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

const SearchResults = (props) => {
    const {setSearchTerm} = props;

  return (
    <>
      <SearchBar onSearch={value => setSearchTerm(value)} />
      <MovieList movies={props.movies} />
    </>
  );
};

export default SearchResults;
