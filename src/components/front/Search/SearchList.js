import React from "react";

import Products from "../Products/Products";
const SearchList = ({ filteredItem }) => {
  const filtered = filteredItem.map((productItems) => (
    <Products key={productItems.name} productItems={productItems} />
  ));
  return <div> {filtered}</div>;
};

export default SearchList;
