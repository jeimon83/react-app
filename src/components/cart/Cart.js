import React from "react"
import { useCartContext } from "../../context/CartContext.js"
import productList from '../../mocks/productList'
import './style.css'

const Cart = () => {
  const { list } = useCartContext()
  const { 
    addOneitem,
    removeOneitem,
    removeItem, 
    totalPrice,
    totalItems
   } = useCartContext();
  
  const addOne = (id, count) => {
    const item = productList.find((item) => item.id === id)
    if (item.inventory === count) {

    }else{
      addOneitem({ item_id: id, item_count: count })
    }
  }
  const removeOne = (id, count) => removeOneitem({ item_id: id, item_count: count })
  const removeAll = (id) => removeItem({ item_id: id })

  const total_price = () => totalPrice()
  const total_items = () => totalItems()

  return (
    <>
      {list.map((item, key) => (
        <div key={key}>
          {item.count} x {item.title}: $ {item.price * item.count}
          <button onClick={() => addOne(item.id, item.count) }>+</button>
          <button onClick={() => removeOne(item.id, item.count) }>-</button>
          <button onClick={() => removeAll(item.id)}>x</button>
        </div>
      ))}
      <div>{total_items()} items - Total ${total_price()}</div>
    </>
  )
}
export default Cart