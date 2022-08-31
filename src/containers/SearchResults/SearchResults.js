import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const SearchResults = (props) => {
  const { setMovieId, movies } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {movies?.map((movie) => (
          <Grid item xs={2} sm={2} md={2} key={movie.imdbID}>
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              setMovieId={setMovieId}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchResults;
