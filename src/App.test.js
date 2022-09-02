import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import App from "./App";
import * as redux from "react-redux";

const mockData = {
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
  movies: [
    {
      Poster: "test.jpg",
      Title: "Test Title",
      Type: "series",
      Year: "2018",
      imdbID: "tt8463714",
    },
  ],
  loading: false,
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

test("Render App with header image", () => {
  const view = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const headerImage = view.container.querySelector("#header-image");
  expect(headerImage).toBeTruthy();
});

test("Type into search field and click search", async () => {
  redux.useSelector.mockImplementation((callback) => {
    return callback(mockData);
  });

  const view = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  const searchBar = view.container.querySelector("#search-bar");
  await fireEvent.change(searchBar, { target: { value: "test" } });
  expect(searchBar.value).toBe("test");

  const searchIcon = view.container.querySelector("#search-icon");
  await fireEvent.click(searchIcon);
  expect(screen.getByAltText("movie")).toBeTruthy();
});
