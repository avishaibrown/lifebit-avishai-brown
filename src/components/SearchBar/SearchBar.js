import React from "react";
import { searchBarPlaceholder } from "./../../utils/constants";

const SearchBar = (props) => {
  const { onSearch } = props;

  const onKeyDownHandler = (event) => {
    if (event.key === "Enter" && !!event.target.value) {
      onSearch(event.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={searchBarPlaceholder}
        onKeyDown={(e) => onKeyDownHandler(e)}
      />
    </div>
  );
};

export default SearchBar;
