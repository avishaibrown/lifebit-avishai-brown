import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import {
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NOT_AVAILABLE } from "../../utils/constants";

const MovieCard = (props) => {
  const { setImdbID, movie } = props;

  const favourites = useSelector((state) => state.favourites);

  return (
    //TODO: Update movie card style to include title, year and favourites button

    //TODO: Append imdbID to /details route
    <Link to="/details">
      <Card sx={{ maxWidth: 345 }} key={movie.imdbID}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="194"
            image={
              movie.Poster !== NOT_AVAILABLE
                ? movie.Poster
                : "./images/No-image-found.jpg"
            }
            alt="movie"
            //TODO: handle onKeyPress Enter
            onClick={() => setImdbID(movie.imdbID)}
          />
        </CardActionArea>
        <CardContent>
          <Typography paragraph noWrap={true}>
            {movie.Title}
          </Typography>
          <Typography>{movie.Year}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          {favourites.includes(movie.imdbID) ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
        </CardActions>
      </Card>
    </Link>
  );
};

export default MovieCard;
