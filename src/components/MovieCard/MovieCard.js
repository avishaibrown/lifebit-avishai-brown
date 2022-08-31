import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
// import CardContent from "@mui/material/CardContent";
// import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import Typography from "@mui/material/Typography";

const MovieCard = (props) => {
  const { setMovieId, movie } = props;

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
            onClick={() => setMovieId(movie.imdbID)}
          />
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MovieCard;
