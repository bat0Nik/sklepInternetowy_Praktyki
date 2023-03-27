import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { useContext } from "react";
import Context from "../../context/context";
import "./pages.css";

export const HpVictus = () => {
  const { shopCart, formatPrice, addToCartFromPPage } = useContext(Context);
  const [inputValue, setInputValue] = useState(1);
  return (
    <div className="product-page">
      <div className="product_card">
        <div className="product_images">
          <div className="product_image">
            <img src={PRODUCTS[1].productImage} alt="" />
          </div>

          <div className="product_slider"></div>
        </div>
        <div className="product_info">
          <div className="product_info-header">
            <h1>{PRODUCTS[1].name}</h1>
          </div>
          <div className="product_info-handler">
            <div className="product_info-left">
              <div className="product_specification">
                <p>Processor: {PRODUCTS[1].processor}</p>
                <p>Graphics Card: {PRODUCTS[1].graphicsCard}</p>
                <p>Software: {PRODUCTS[1].software}</p>
                <p>RAM: {PRODUCTS[1].RAM}</p>
              </div>
            </div>
            <div className="product_info-right">
              <div className="product_count">
                <div className="product_handler-btns">
                  <button
                    onClick={() => setInputValue((prev) => prev + 1)}
                    disabled={
                      inputValue >= PRODUCTS[1].count - shopCart[2]
                        ? true
                        : false
                    }
                  >
                    +
                  </button>
                  <input value={inputValue} disabled />
                  <button
                    onClick={() => setInputValue((prev) => prev - 1)}
                    disabled={inputValue < 2 ? true : false}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="produnt_payment">
               <div className="product_total-price"><h4> Total price </h4>{inputValue>0?(<p>{formatPrice((PRODUCTS[1].price)*inputValue)} PLN</p>):(<p>{formatPrice(PRODUCTS[1].price)} PLN</p>)}
                </div>
                <button
                  className="product_addtocartbtn"
                  onClick={() => {
                    addToCartFromPPage(PRODUCTS[1].id, inputValue);
                    setInputValue(0);
                  }}
                  disabled={inputValue === 0 ? true : false}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
