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
import IconButton from "@mui/material/IconButton";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import {
  IMDB,
  ROTTEN_TOMATOES,
  PLOT,
  CAST,
  GENRE,
  DIRECTOR,
  ADD_FAVOURITES,
  ADDED_TO_FAVOURITES,
  NOT_AVAILABLE,
} from "../../utils/constants";
import { buildArray, buildList } from "./../../utils/util";

const MovieDetails = () => {
  const details = useSelector((state) => state.details);
  const ratings = useSelector((state) => state.details.Ratings);
  const actors = buildArray(useSelector((state) => state.details.Actors));
  const directors = buildArray(useSelector((state) => state.details.Director));
  const genres = buildArray(useSelector((state) => state.details.Genre));
  const favourites = useSelector((state) => state.favourites);
  const loading = useSelector((state) => state.loading);

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

  const addToFavouritesHandler = (id) => {
    dispatch(actions.addToFavourites(id));
    sessionStorage.setItem("movie-favourites", JSON.stringify(favourites));
  };

  return loading ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress />
    </Backdrop>
  ) : (
    <>
      <NavLink to="/search" style={{ textDecoration: "none" }}>
        <IconButton sx={{ backgroundColor: "white", float: "left" }}>
          <ArrowBackIcon color={"primary"} />
        </IconButton>
      </NavLink>
      <Grid container spacing={2}>
        <Grid item xs={6} alignItems={"flex-start"} p={"16px"}>
          <Stack
            direction="row"
            spacing={2}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ background: "white" }}
              />
            }
            sx={{ paddingBottom: "2rem" }}
          >
            {details?.Runtime !== NOT_AVAILABLE && (
              <Typography color={"white"}>{details?.Runtime}</Typography>
            )}
            {details?.Year !== NOT_AVAILABLE && (
              <Typography color={"white"}>{details?.Year}</Typography>
            )}
            {details?.Rated !== NOT_AVAILABLE && (
              <Typography color={"white"}>{details?.Rated}</Typography>
            )}
          </Stack>
          <Typography
            variant={"h3"}
            gutterBottom
            align={"left"}
            color={"white"}
          >
            {details?.Title}
          </Typography>
          <Stack direction="row" spacing={2} paddingBottom={3}>
            {imdbRating && (
              <Chip
                label={imdbRating}
                variant={"outlined"}
                avatar={<Avatar alt="imdb" src="/images/logo-imdb.png" />}
                sx={{ color: "white" }}
              />
            )}
            {rottenTomatoesRating && (
              <Chip
                label={rottenTomatoesRating}
                variant={"outlined"}
                avatar={
                  <Avatar
                    alt="rotten tomatoes"
                    src="/images/logo-rotten-tomatoes.png"
                  />
                }
                sx={{ color: "white" }}
              />
            )}
            {/* TODO: Add remove favourites functionality */}
            {favourites.includes(details?.imdbID) ? (
              <Chip
                label={ADDED_TO_FAVOURITES}
                variant={"outlined"}
                icon={<FavoriteIcon />}
                sx={{ color: "white" }}
              />
            ) : (
              <Chip
                label={ADD_FAVOURITES}
                variant={"outlined"}
                icon={<FavoriteBorderIcon />}
                onClick={() => addToFavouritesHandler(details?.imdbID)}
                sx={{ color: "white" }}
              />
            )}
          </Stack>
          <Typography align={"left"} fontSize={14} color={"gray"}>
            {PLOT}
          </Typography>
          <Typography
            align={"left"}
            paddingBottom={10}
            fontSize={14}
            color={"white"}
          >
            {details?.Plot}
          </Typography>
          <Box>
            <Grid container>
              <Grid item xs={4}>
                {buildList(actors, CAST)}
              </Grid>
              <Grid item xs={4}>
                {buildList(genres, GENRE)}
              </Grid>
              <Grid item xs={4}>
                {buildList(directors, DIRECTOR)}
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Card key={details?.imdbID}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={
                  details?.Poster === NOT_AVAILABLE
                    ? "./images/No-image-found.jpg"
                    : details.Poster
                }
                alt="movie"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieDetails;
