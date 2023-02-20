import React from "react";
import "../Store/Toast.css";
import "./Cart.css";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddToCart, DeleteFromCart } from "../../Global/Actions/Index";
import { RemoveFromCart } from "../../Global/Actions/Index";
import Subtotal from "./Subtotal";
export const cartContext = createContext();
function Cart() {
  const Basket = useSelector((state) => state.controlBasket);
  const dispatch = useDispatch();
  if (Basket.length > 0) {
    return (
      <>
        <div className="cart_main">
          <p className="cart_heading">SHOPPING CART</p>
          {Basket.map((e) => (
            <div key={e.id} className="cart_product">
              <div className="cart_left">
                <div className="cart_image">
                  <Link to={`/Slider/${e.id}`}>
                    <img src={e.photo} alt="" />
                  </Link>
                </div>
                <p>{e.text}</p>
              </div>
              <div className="cart_alignment">
                <div className="cart_middle">
                  <div
                    className={
                      e.count === 1 ? "cart_custom_button" : "cart_btn"
                    }
                  >
                    <div
                      onClick={() => {
                        dispatch(DeleteFromCart(e.id));
                      }}
                      className={
                        e.count === 1
                          ? "custom_button"
                          : "cart_button cart_manuplators"
                      }
                    >
                      &#x2212;
                    </div>
                  </div>
                  <p className="count">{e.count}</p>
                  <div className="cart_btn">
                    <div
                      onClick={() => {
                        dispatch(
                          AddToCart(e.photo, e.price, e.text, e.id, e.price, 1)
                        );
                      }}
                      className="cart_button cart_manuplators"
                    >
                      &#x2B;
                    </div>
                  </div>
                </div>
                <div className="cart_right">
                  <p className="price">&#x20b9;{e.cartprice} </p>
                  <div className="cart_btn">
                    <div
                      className="cart_button"
                      onClick={() => {
                        dispatch(RemoveFromCart(e.id));
                      }}
                    >
                      &#10005;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="total">
            <Subtotal />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="cart_main">
        <div className="cart_column">
          <p
            style={{
              fontSize: "1.2rem",
              paddingBottom: "2rem",
              color: "rgb(168, 166, 161);",
            }}
          >
            YOU HAVE NOTHING IN YOUR SHOPPING CART.
          </p>
          <Link to="/Store">
            <button
              className="cart_checkout"
              style={{ width: "15rem", color: "white" }}
            >
              CONTINUE SHOPPING
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Cart;
