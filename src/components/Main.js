import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "../Redux/constant";
import { addToCard, emptyCart, removeToCart } from "../Redux/Action";

const Main = () => {
  const product = {
    name: "I phone",
    type: "mobile",
    price: 1000,
    color: "red",
  };
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addToCard(ADD_TO_CART))}>
        ADD_TO_CART
      </button>
      <button onClick={() => dispatch(removeToCart(REMOVE_TO_CART))}>
        REMOVE_TO_CART
      </button>
      <button onClick={() => dispatch(emptyCart(EMPTY_CART))}>
        EMPTY_CART
      </button>
    </div>
  );
};

export default Main;
