import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  ADD_TO_FAVOURITES,
  IMDB,
  ROTTEN_TOMATOES,
  PLOT,
  CAST,
  GENRE,
  DIRECTOR,
} from "../../utils/constants";

const MovieDetails = (props) => {
  const { movieDetails } = props;

  //TODO: Get all of these variables displayed
  let imdbRating = null;
  let rottenTomatoesRating = null;
  let actorsArray = [];
  let directorsArray = [];
  let genresArray = [];

  const getRatings = useRef(() => {});
  const getActors = useRef(() => {});
  const getDirectors = useRef(() => {});
  const getGenres = useRef(() => {});

  getRatings.current = () => {
    for (const index in movieDetails?.Ratings) {
      const rating = movieDetails?.Ratings[index];
      if (rating.Source === IMDB) {
        imdbRating = rating.Value;
      } else if (rating.Source === ROTTEN_TOMATOES)
        rottenTomatoesRating = rating.Value;
    }
  };

  getActors.current = () => {
    actorsArray = movieDetails?.Actors.split(", ");
  };

  getDirectors.current = () => {
    directorsArray = movieDetails?.Director.split(", ");
  };

  getDirectors.current = () => {
    genresArray = movieDetails?.Genre.split(", ");
  };

  useEffect(() => {
    movieDetails?.Ratings && getRatings.current();
    movieDetails?.Actors && getActors.current();
    movieDetails?.Director && getDirectors.current();
    movieDetails?.Genre && getGenres.current();
  }, [movieDetails]);

  //TODO: Change Add To Favourites button to chip, persistently store favourites in array of imdbIDs

  //TODO: Fix styling

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={6}>
          <NavLink to="/search" style={{ textDecoration: "none" }}>
            <ArrowBackIcon />
          </NavLink>
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem light={true} />}
          >
            <p>{movieDetails?.Runtime}</p>
            <p>{movieDetails?.Year}</p>
            <p>{movieDetails?.Rated}</p>
          </Stack>
          <h1 style={{ color: "white" }}>{movieDetails?.Title}</h1>
          <Stack direction="row" spacing={1}>
            <Chip
              label="idmb Rating"
              avatar={<Avatar alt="imdb" src="/images/logo-imdb.png" />}
            />
            <Chip
              label="RT Rating"
              avatar={
                <Avatar
                  alt="rotten tomatoes"
                  src="/images/logo-rotten-tomatoes.png"
                />
              }
            />
            <Chip
              label={ADD_TO_FAVOURITES}
              icon={<FavoriteIcon />}
              variant="outlined"
              onClick={() => {}}
            />
          </Stack>
          <p>{PLOT}</p>
          <p>{movieDetails?.Plot}</p>
          {actorsArray && (
            <>
              <p>{CAST}</p>
              {actorsArray.map((member) => (
                <li>{member}</li>
              ))}
            </>
          )}
          {genresArray && (
            <>
              <p>{GENRE}</p>
              {genresArray.map((member) => (
                <li>{member}</li>
              ))}
            </>
          )}
          {directorsArray && (
            <>
              <p>{DIRECTOR}</p>
              {directorsArray.map((member) => (
                <li>{member}</li>
              ))}
            </>
          )}
        </Grid>
        <Grid item xs={6}>
          <Card key={movieDetails?.imdbID}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={movieDetails?.Poster}
                alt="movie"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieDetails;
