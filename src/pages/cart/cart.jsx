import React from "react";
import Context from "../../context/context";
import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item/cart-item";
import "./cart.css";

export const Cart = () => {
  const { shopCart, getTotalPrice } = useContext(Context);
  const totalPrice = getTotalPrice();
  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>
      <div className="container">
        <div className="cart-items">
          {PRODUCTS.map((product) => {
            if (shopCart[product.id] !== 0) {
              return <CartItem data={product} key={product.id}/>;
            }
            return <></>;
          })}
            
        </div>
        {totalPrice !== "0,00" ? (
          <div className="paynment-panel">
            <div className="price">
              <h4>Subtotal price</h4>
              <h4>{totalPrice}</h4>
            </div>
            <button>Proceed to checkout</button>
          </div>
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>
    </div>
  );
};
