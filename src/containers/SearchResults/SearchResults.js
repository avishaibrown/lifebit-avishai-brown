import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieCard from "../../components/MovieCard/MovieCard";

const SearchResults = (props) => {
  const { setSearchTerm, getMovieId, movies } = props;

  return (
    <>
      <SearchBar onSearch={(value) => setSearchTerm(value)} />
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} getMovieId={getMovieId} />
      ))}
    </>
  );
};

export default SearchResults;
