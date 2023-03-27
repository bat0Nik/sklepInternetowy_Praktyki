import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Search } from "./search";
import { useContext } from "react";
import Context from "../context/context";
import './navbar.css'

export const Navbar = () => {
  const { checkIfSearch, cartCount } = useContext(Context);

  const cartProductsCount = cartCount()

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={() => checkIfSearch(true)}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pepsi_logo_2008.svg/1280px-Pepsi_logo_2008.svg.png" alt="" />
          </Link>
        </div>
        <Search />
        <div className="links">
            <div >{cartProductsCount>0?(<div className="cart_products-count">{cartProductsCount}</div>):(<></>)}</div>
          <Link to="/cart">
            <ShoppingCart size={25} />
          </Link>
        </div>
      </nav>
    </div>
  );
};
