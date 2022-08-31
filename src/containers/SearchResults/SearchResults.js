import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {
  NO_RESULTS_FIRST_LINE,
  NO_RESULTS_SECOND_LINE,
} from "../../utils/constants";

const SearchResults = (props) => {
  const { setImdbID, movies } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      {movies ? (
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
                setImdbID={setImdbID}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Container maxWidth={"sm"}>
          <Grid justifyContent="center">
            <img
              src="./images/illustration-empty-state.png"
              alt="empty state"
            />
            <h3 style={{ color: "white" }}>{NO_RESULTS_FIRST_LINE}</h3>
            <p style={{ color: "grey" }}>{NO_RESULTS_SECOND_LINE}</p>
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default SearchResults;
