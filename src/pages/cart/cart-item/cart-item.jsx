import React from "react";
import { useContext } from "react";
import Context from "../../../context/context";
import { Trash } from "phosphor-react";
import "./cart-item.css";
export const CartItem = (props) => {
  const {
    id,
    name,
    price,
    count,
    type,
    software,
    processor,
    RAM,
    graphicsCard,
    productImage,
  } = props.data;
  const { addToCart, shopCart, removeFromCart, deleteFromCart, formatPrice } =
    useContext(Context);
  return (
    <div className="card">
      <div className="product-image">
        <img src={productImage} alt={name} />
      </div>
      <div className="product-info">
      <h4><span className="product_name">{name}</span></h4>
        <p>{formatPrice(price)} PLN</p>
      </div>
      <div className="product-handler-btns">
        <button onClick={() => addToCart(id)} disabled={shopCart[id]>count-1?true:false}>+</button>
        <input value={shopCart[id]} disabled />
        <button onClick={() => removeFromCart(id)} disabled={shopCart[id]<2?true:false}>-</button>
        <button onClick={() => deleteFromCart(id)} className='del-but'><Trash size={20} /></button>
      </div>
    </div>
  );
};
