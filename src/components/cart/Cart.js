import React from "react";
import { useCartContext } from "../../context/CartContext.js";
import './style.css'

const Cart = () => {
  const { list } = useCartContext();
  console.log(list)
  return (
    <>
      {list.map((item, key) => (
        <div key={key}>
          {item.count} Producto:{item.name}
        </div>
      ))}
    </>
  );
}
export default Cart;