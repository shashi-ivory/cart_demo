import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

export const addToCard = (data) => {
  console.log("action called===>", data);
  return {
    type: "ADD_TO_CART",
    data,
  };
};
export const removeToCart = (data) => {
  return {
    type: "REMOVE_TO_CART",
    data,
  };
};
export const emptyCart = (data) => {
  return {
    type: "EMPTY_CART",
    data,
  };
};
// export const INCREMENT = () => {
//   console.log("Increment");
//   return {
//     type: "INCREMENT",
//   };
// };
// export const DECREMENT = () => {
//   console.log("dcrement");
//   return {
//     type: "DECREMENT",
//   };
// };
