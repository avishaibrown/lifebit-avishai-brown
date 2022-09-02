import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { CardMedia, CardActionArea, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NOT_AVAILABLE } from "../../utils/constants";

const MovieCard = (props) => {
  const { setImdbID, movie } = props;
  //control appearance of title, year and favouriteIcon on hover
  const [showOverlay, setShowOverlay] = useState(false);

  const favourites = useSelector((state) => state.favourites);

  return (
    //TODO: Append imdbID to /details route
    <Link to="/details">
      <Card
        sx={{ maxWidth: 345 }}
        key={movie?.imdbID}
        onMouseOver={() => setShowOverlay(true)}
        onMouseOut={() => setShowOverlay(false)}
        id={`movie-card-${movie.imdbID}`}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={
              movie?.Poster === NOT_AVAILABLE
                ? "./images/No-image-found.jpg"
                : movie.Poster
            }
            alt="movie"
            //TODO: handle onKeyPress Enter
            onClick={() => setImdbID(movie.imdbID)}
          />
          {showOverlay && (
            <Box
              sx={{
                position: "absolute",
                zIndex: 2,
                bottom: 0,
                width: "100%",
                backgroundColor: " rgba(0, 0, 0, 0.8)",
              }}
              onClick={() => setImdbID(movie.imdbID)}
            >
              <Typography
                sx={{ fontWeight: "bold", color: "white", fontSize: 12 }}
                align={"left"}
                variant={"subtitle1"}
              >
                {movie?.Title}
              </Typography>
              <Typography
                align={"left"}
                variant={"subtitle2"}
                sx={{ color: "white", fontSize: 10 }}
              >
                {movie?.Year}
              </Typography>
              {favourites.includes(movie?.imdbID) ? (
                <FavoriteIcon size={"small"} sx={{ color: "white" }} />
              ) : (
                <FavoriteBorderIcon size={"small"} sx={{ color: "white" }} />
              )}
            </Box>
          )}
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MovieCard;
