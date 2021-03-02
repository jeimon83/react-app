import React from "react"
import { useCartContext } from "../../context/CartContext.js"
import productList from '../../mocks/productList'
import Button from '@material-ui/core/Button';
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
        <div key={key} className="grid">
          <div></div>
          <div><img className="cart-image" src={item.img} /></div>
          <div className="details">
            {item.count} x {item.title}: $ {item.price * item.count}
          </div>
          <div className="btn-x" >
            <Button variant="outlined" color="primary" disableElevation onClick={() => addOne(item.id, item.count) }>+</Button>
          </div>
          <div className="btn-x" >
            <Button variant="outlined" color="secondary" disableElevation onClick={() => removeOne(item.id, item.count) }>-</Button>
          </div>
          <div className="btn-x" >
            <Button variant="outlined" disableElevation onClick={() => removeAll(item.id)}>x</Button>
          </div>
          <div></div>
        </div>
      ))}
      {(total_items() > 0) ?
        <div>{total_items()} items - Total ${total_price()}</div>
        :
        <div>The cart is empty</div>
      }
    </>
  )
}
export default Cart