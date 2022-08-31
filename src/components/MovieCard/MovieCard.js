import React from "react";
import Card from "@mui/material/Card";
import {
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieCard = (props) => {
  const { setImdbID, movie } = props;

  return (
    //TODO: Get imdbID appended to link /details/:imdbID
    //TODO: Update movie card style to include title, year and favourites button
    //TODO: Read persistent state to check if movie favourites button is filled or not

    <Link to="/details">
      <Card sx={{ maxWidth: 345 }} key={movie.imdbID}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="194"
            image={movie.Poster}
            alt="movie"
            onClick={() => setImdbID(movie.imdbID)}
          />
        </CardActionArea>
        <CardContent>
          <Typography paragraph>{movie.Title}</Typography>
          <Typography>{movie.Year}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
};

export default MovieCard;
