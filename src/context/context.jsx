import React, { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";

const Context = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  if (JSON.parse(localStorage.getItem("shopping-cart")) === null) {
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
  }else{
    cart = JSON.parse(localStorage.getItem("shopping-cart"))
  }
  return cart;
};

export const ContextProvider = (props) => {
  const [shopCart, setShopCart] = useState(getDefaultCart());
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(shopCart));
  }, [shopCart]);
  const [items, setItems] = useState([]);
  const formatPrice = (price) => {
    return price.toLocaleString("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  const getItems = (elemenets) => {
    setItems(elemenets);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const getSearchTerm = (query) => {
    setSearchTerm(query);
  };
  const [home, setHome] = useState(true);
  const checkIfSearch = (e) => {
    setHome(e);
  };
  const addToCart = (itemId) => {
    setShopCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const addToCartFromPPage = (itemId, amount) => {
    setShopCart((prev) => ({ ...prev, [itemId]: prev[itemId] + amount }));
  };
  const removeFromCart = (itemId) => {
    setShopCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const deleteFromCart = (itemId) => {
    setShopCart((prev) => ({ ...prev, [itemId]: 0 }));
  };
  const getTotalPrice = () => {
    let totalAmount = 0;

    for (const item in shopCart) {
      if (shopCart[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === String(item));
        totalAmount += shopCart[item] * Number(itemInfo.price);
      }
    }
    const formatedTotalAmount = formatPrice(totalAmount);
    return formatedTotalAmount;
  };

  const cartCount = () => {
    let count = 0;
    for (const item in shopCart) {
      if (shopCart[item] > 0) {
        count += shopCart[item];
      }
    }
    return count;
  };

  const contextValue = {
    shopCart,
    addToCart,
    addToCartFromPPage,
    removeFromCart,
    deleteFromCart,
    getItems,
    items,
    getTotalPrice,
    getSearchTerm,
    searchTerm,
    checkIfSearch,
    home,
    formatPrice,
    cartCount,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default Context;
