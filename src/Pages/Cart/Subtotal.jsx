import React from "react";
import "./Subtotal.css";
import { useSelector } from "react-redux";
import { getbaskettotal, getbasketSize } from "../../Global/Reducers/Cart";

function Subtotal() {
  const Basket = useSelector((state) => state.controlBasket);
  var value = getbaskettotal(Basket);
  var basketsize = getbasketSize(Basket);

  return (
    <div className="subtotal">
      <div className="cart_subtotal_column">
        <p>Subtotal ({parseInt(basketsize)})</p>
       <p>&#x20b9;{parseInt(value)}</p>
      </div>

      <button className="cart_checkout">CHECKOUT</button>
    </div>
  );
}

export default Subtotal;
