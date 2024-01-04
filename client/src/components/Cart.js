import React from "react";
import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleButton = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="font-bold py-1 px-2 rounded bg-blue-300 mb-4 background-"
        onClick={() => {
          handleButton();
        }}
      >
        clear cart
      </button>
      <ItemsList items={cartItems}></ItemsList>
    </div>
  );
};
export default Cart;
