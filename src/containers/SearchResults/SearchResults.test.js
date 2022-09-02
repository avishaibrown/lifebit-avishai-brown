import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import SearchResults from "./SearchResults";

const moviesData = [
  {
    Poster: "test.jpg",
    Title: "Test Title",
    Type: "series",
    Year: "2018",
    imdbID: "tt8463714",
  },
];

test("SearchResults component with empty state", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchResults setImdbId={jest.fn()} movies={null} />
      </BrowserRouter>
    </Provider>
  );

  const movieCard = screen.queryByTestId("movie");
  expect(movieCard).toBe(null);
});

test("SearchResults component with data", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchResults setImdbId={jest.fn()} movies={moviesData} />
      </BrowserRouter>
    </Provider>
  );

  const movieCard = screen.getByAltText("movie");
  expect(movieCard).toBeTruthy();
});
