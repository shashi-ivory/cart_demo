import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  // if (action.type === "ADD_TO_CART") {
  //   console.log("reducer called", action);
  //   return action.data;
  // } else {
  //   return;
  //   ("no acttion called");
  // }

  switch (action.type) {
    case ADD_TO_CART:
      // add to cart logic
      return [action.data, ...data];
      console.log("ADD_TO_CART", action);
    case REMOVE_TO_CART:
      data.length = data.length - 1;
      return [...data];
      console.warn("REMOVE_TO_CART", action);
    case EMPTY_CART:
      data = [];
      return [...data];
      console.warn("EMPTY_CART", action);
    default:
      return [];
  }
};
