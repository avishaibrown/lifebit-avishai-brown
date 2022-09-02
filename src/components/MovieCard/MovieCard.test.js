import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import MovieCard from "./MovieCard";

const movieData = {
  Poster: "test.jpg",
  Title: "Test Title",
  Type: "series",
  Year: "2018",
  imdbID: "tt8463714",
};

const setImdbID = jest.fn();

test("renders MovieCard with data, hovers over card and fires onClick", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MovieCard setImdbID={setImdbID} movie={movieData} />
      </BrowserRouter>
    </Provider>
  );

  const movieCard = screen.getByAltText("movie");
  expect(movieCard).toBeTruthy();
  await fireEvent.mouseOver(movieCard);
  await fireEvent.mouseOut(movieCard);
  await fireEvent.click(movieCard);
  expect(setImdbID).toHaveBeenCalled();
});
