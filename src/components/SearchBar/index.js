import React from "react";

//style
import { Wrapper, Content } from "./SearchBar.styles";

function SearchBar({ getForcastDays, setSearchTerm }) {
  return (
    <Wrapper>
      <Content>
        <img
          src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
          alt="search-icon"
          onClick={getForcastDays}
        />
        <input
          type="text"
          placeholder="Enter a city name..."
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              setSearchTerm(event.target.value);
              getForcastDays();
            }
          }}
        />
      </Content>
    </Wrapper>
  );
}

export default SearchBar;
