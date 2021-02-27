import React from "react"
import { useCartContext } from "../../context/CartContext.js"
import './style.css'

const Cart = () => {
  const { list } = useCartContext()
  
  return (
    <>
      {list.map((item, key) => (
        <div key={key}>
          {item.count} x {item.title}: $ {item.price}
        </div>
      ))}
    </>
  )
}
export default Cart