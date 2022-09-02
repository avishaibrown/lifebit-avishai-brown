import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import MovieDetails from "./MovieDetails";
import * as redux from "react-redux";

const detailsMock = {
  details: {
    Actors: "Diane Sawyer, David Muir, Jonathan Karl",
    Director: "N/A",
    Genre: "News",
    Plot: "Test test test",
    Poster: "test.jpg",
    Rated: "N/A",
    Ratings: [
      { Source: "Internet Movie Database", Value: "5.8/10" },
      { Source: "Rotten Tomatoes", Value: "86%" },
    ],
    Runtime: "30 min",
    Title: "ABC World News Tonight with David Muir",
    Year: "1953-",
    imdbID: "tt0184090",
  },
  favourites: ["tt0184090"],
  loading: false,
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

test("MovieDetails component loading details data", () => {
  redux.useSelector.mockImplementation((callback) => {
    return callback({ ...detailsMock, loading: true });
  });

  const view = render(
    <Provider store={store}>
      <BrowserRouter>
        <MovieDetails />
      </BrowserRouter>
    </Provider>
  );

  const loadingSpinner = view.container.querySelector("#loading-details");
  expect(loadingSpinner).toBeTruthy();
});

test("MovieDetails component with details", () => {
  redux.useSelector.mockImplementation((callback) => {
    return callback(detailsMock);
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <MovieDetails />
      </BrowserRouter>
    </Provider>
  );
});
