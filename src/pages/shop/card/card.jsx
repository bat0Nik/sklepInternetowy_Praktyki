import React from "react";
import { useContext } from "react";
import Context from "../../../context/context";
import "./card.css";

export const Card = (props) => {
  const {
    id,
    name,
    price,
    count,
    // type,
    // software,
    processor,
    RAM,
    graphicsCard,
    productImage,
    sensor,
    buttonsNumber,
    resolution,
  } = props.data;
  const { addToCart, shopCart, formatPrice } = useContext(Context);
  const cartItemCount = shopCart[id];
  let saled = false;
  if (count - cartItemCount< 1) {
    saled = !saled;
  }

  return (
    <div className="productCard">
      <div className="productImage">
        {saled ? <span className="item_saled">Saled</span> : <></>}
        <img src={productImage} alt={name} />
      </div>
      <div className="productInfo">
        <div className="product">
          <h4>
            <span className="product_name">{name}</span>
          </h4>
          {processor && <p>Processor: {processor}</p>}
          {graphicsCard && <p>Graphics Card: {graphicsCard}</p>}
          {RAM && <p>RAM: {RAM}</p>}
          {sensor && <p>Sensor: {sensor}</p>}
          {buttonsNumber && <p>Number of buttons: {buttonsNumber}</p>}
          {resolution && <p>Resolution: {resolution}</p>}
        </div>
        <div className="product_price_add_btn">
          <span>{formatPrice(price)} PLN</span>
          <button
            className="addToCartBtn"
            onClick={() => addToCart(id)}
            disabled={saled ? true : false}
          >
            Add to cart{cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
