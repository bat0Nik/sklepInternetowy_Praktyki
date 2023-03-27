import React, { useState } from "react";
import { PRODUCTS } from "../products";
import { useContext } from "react";
import Context from "../context/context";
import { Link } from "react-router-dom";
import './search.css'

export const Search = () => {
  const [query, setQuery] = useState("");
  const [elements, setElements] = useState([]);

  const { getItems, getSearchTerm, checkIfSearch } = useContext(Context);

  if (elements !== 0) {
    getItems(elements);
  }

  const searchElement = (searchTerm) => {
    let filteredItems = [];
    PRODUCTS.forEach((element) => {
      if (element.type.toLowerCase().includes(searchTerm.toLowerCase()))
        filteredItems.push(element);
    });
    setElements(filteredItems);
  };

  function findElement() {
    if (query !== "") {
      searchElement(`${query}`);
      getSearchTerm(query);
      checkIfSearch(false);
    }
  }

  return (
    <div className="search-div">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={'What you looking for?'}
      />
      <Link to={'/'}><button onClick={findElement}>Szukaj</button></Link>
    </div>
  );
};
