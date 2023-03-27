import React from "react";
import "./shop.css";
import { ListOfCards } from "./listofcards";
import { HomePage } from "./home-page/home-page";
import { useContext } from "react";
import Context from "../../context/context";

export const Shop = () => {
  const { items, searchTerm, home } = useContext(Context);

  return (
    <div className="shop">
      <div className="container">
        {home ? (
          <div >
          <HomePage />
          <HomePage />
          <HomePage />
          <HomePage />
          <HomePage /></div >
        ) : (
          <>
            <div className="categories">
              <p>filtry</p>
            </div>

            <div className="search_results">
              <div className="search_results_text">
                <h2>Search results for "{searchTerm}" :</h2>
              <p>Found {items.length} result(s) for this term</p>
              </div>
              <ListOfCards elements={items} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
