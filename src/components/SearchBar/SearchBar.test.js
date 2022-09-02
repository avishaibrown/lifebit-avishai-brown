import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import { SEARCH_BAR_PLACEHOLDER } from "../../utils/constants";
import SearchBar from "./SearchBar";

const onSearch = jest.fn();

test("renders SearchBar component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchBar onSearch={onSearch} />
      </BrowserRouter>
    </Provider>
  );

  const placeholderText = screen.getByPlaceholderText(SEARCH_BAR_PLACEHOLDER);
  expect(placeholderText).toBeTruthy();
});

test("onChange function of SearchBar component", async () => {
  const view = render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchBar onSearch={onSearch} />
      </BrowserRouter>
    </Provider>
  );

  const searchBar = view.container.querySelector("#search-bar");
  await fireEvent.change(searchBar, { target: { value: "test" } });
  expect(searchBar.value).toBe("test");

  const searchIcon = view.container.querySelector("#search-icon");
  await fireEvent.click(searchIcon);
  expect(onSearch).toHaveBeenCalled();
});
