import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
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
      <Card sx={{ maxWidth: 345 }} key={movie?.imdbID}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="194"
            image={
              movie?.Poster === NOT_AVAILABLE
                ? "./images/No-image-found.jpg"
                : movie.Poster
            }
            alt="movie"
            //TODO: handle onKeyPress Enter
            onClick={() => setImdbID(movie.imdbID)}
          />
          <Box
            py={3}
            px={2}
            sx={{ position: "absolute", zIndex: 2, bottom: 0, width: "100%" }}
          >
            <div>
              <h5>{movie?.Title}</h5>
              <p>{movie?.Year}</p>
              {favourites.includes(movie?.imdbID) ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </div>
          </Box>

          {/* <CardContent sx={{ opacity: 1 }}>
            <Typography paragraph noWrap={true}>
              {movie.Title}
            </Typography>
            <Typography>{movie.Year}</Typography>
            <CardActions disableSpacing>
              {favourites.includes(movie.imdbID) ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </CardActions>
          </CardContent> */}
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MovieCard;

// const useStyles = makeStyles(() => ({
//   card: {
//     borderRadius: '1rem',
//     boxShadow: 'none',
//     position: 'relative',
//     minWidth: 200,
//     minHeight: 360,
//     '&:after': {
//       content: '""',
//       display: 'block',
//       position: 'absolute',
//       width: '100%',
//       height: '64%',
//       bottom: 0,
//       zIndex: 1,
//       background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
//     },
//   },
//   content: {
//     position: 'absolute',
//     zIndex: 2,
//     bottom: 0,
//     width: '100%',
//   },
// }));

// export const GalaxyCardDemo = React.memo(function GalaxyCard() {
//   const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
//   const styles = useStyles();
//   return (
//     <>
//       <Card className={styles.card}>
//         <CardMedia
//           classes={mediaStyles}
//           image={
//             'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'
//           }
//         />
//         <Box py={3} px={2} className={styles.content}>
//           <Info useStyles={useGalaxyInfoStyles}>
//             <InfoSubtitle>Galaxy</InfoSubtitle>
//             <InfoTitle>Buds 2019</InfoTitle>
//             <InfoCaption>Perfect for everyone</InfoCaption>
//           </Info>
//         </Box>
//       </Card>
//     </>
//   );
// });
// export default GalaxyCardDemo
