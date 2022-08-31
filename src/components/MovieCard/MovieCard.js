import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
// import CardContent from "@mui/material/CardContent";
// import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import Typography from "@mui/material/Typography";

const MovieCard = (props) => {
  const { setMovieId, movie } = props;

  return (
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
  );
};

export default MovieCard;
