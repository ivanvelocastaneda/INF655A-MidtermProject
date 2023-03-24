import React, { useState } from "react";
import "./Search.css";
import Scroll from "./Scroll";
import SearchList from "./SearchList";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredItems = details.filter((productItems) => {
    return (
      productItems.name.lowerCase().includes(searchField.toLowerCase()) ||
      productItems.price.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredItems={filteredItems} />
      </Scroll>
    );
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search a product"
        onChange={handleChange}
      />
      {searchList()}
    </div>
  );
}

export default Search;
