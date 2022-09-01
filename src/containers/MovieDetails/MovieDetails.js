import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./../../store/actions";
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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  IMDB,
  ROTTEN_TOMATOES,
  PLOT,
  CAST,
  GENRE,
  DIRECTOR,
  ADD_FAVOURITES,
  ADDED_TO_FAVOURITES,
} from "../../utils/constants";
import { buildArray, buildList } from "./../../utils/util";

const MovieDetails = () => {
  const details = useSelector((state) => state.details);
  const ratings = useSelector((state) => state.details.Ratings);
  const actors = buildArray(useSelector((state) => state.details.Actors));
  const directors = buildArray(useSelector((state) => state.details.Director));
  const genres = buildArray(useSelector((state) => state.details.Genre));
  const favourites = useSelector((state) => state.favourites);

  let imdbRating = null;
  let rottenTomatoesRating = null;

  for (const index in ratings) {
    const rating = ratings[index];
    if (rating.Source === IMDB) {
      imdbRating = rating.Value;
    } else if (rating.Source === ROTTEN_TOMATOES)
      rottenTomatoesRating = rating.Value;
  }

  const dispatch = useDispatch();

  const addToFavouritesHandler = (id) => dispatch(actions.addToFavourites(id));

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
            <p>{details?.Runtime}</p>
            <p>{details?.Year}</p>
            <p>{details?.Rated}</p>
          </Stack>
          <h1 style={{ color: "white" }}>{details?.Title}</h1>
          <Stack direction="row" spacing={1}>
            {imdbRating && (
              <Chip
                label={imdbRating}
                avatar={<Avatar alt="imdb" src="/images/logo-imdb.png" />}
              />
            )}
            {rottenTomatoesRating && (
              <Chip
                label={rottenTomatoesRating}
                avatar={
                  <Avatar
                    alt="rotten tomatoes"
                    src="/images/logo-rotten-tomatoes.png"
                  />
                }
              />
            )}
            {/* TODO: Add remove favourites functionality */}
            {favourites.includes(details?.imdbID) ? (
              <Chip label={ADDED_TO_FAVOURITES} icon={<FavoriteIcon />} />
            ) : (
              <Chip
                label={ADD_FAVOURITES}
                icon={<FavoriteBorderIcon />}
                onClick={() => addToFavouritesHandler(details?.imdbID)}
              />
            )}
          </Stack>
          <p>{PLOT}</p>
          <p>{details?.Plot}</p>
          {buildList(actors, CAST)}
          {buildList(genres, GENRE)}
          {buildList(directors, DIRECTOR)}
        </Grid>
        <Grid item xs={6}>
          <Card key={details?.imdbID}>
            <CardActionArea>
              <CardMedia component="img" image={details?.Poster} alt="movie" />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieDetails;
