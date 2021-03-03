import React from "react"
import { useCartContext } from "../../context/CartContext.js"
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
  
  const addOne = item => {
    if (item.stock === item.count) {

    }else{
      addOneitem(item)
    }
  }
  const removeOne = item => removeOneitem(item)
  const removeAll = item => removeItem(item)

  const total_price = () => totalPrice()
  const total_items = () => totalItems()

  return (
    <>
      {list.map((item, key) => (
        <div key={key} className="grid">
          <div></div>
          <div><img className="cart-image" src={item.img} alt="."/></div>
          <div className="details">
            {item.count} x {item.title}: $ {item.price * item.count}
          </div>
          <div className="btn-x" >
            <Button variant="outlined" color="primary" disableElevation onClick={() => addOne(item) }>+</Button>
          </div>
          <div className="btn-x" >
            <Button variant="outlined" color="secondary" disableElevation onClick={() => removeOne(item) }>-</Button>
          </div>
          <div className="btn-x" >
            <Button variant="outlined" disableElevation onClick={() => removeAll(item)}>x</Button>
          </div>
          <div></div>
        </div>
      ))}
      <div className="info">
        {(total_items() > 0) ?
          <div>Total ${total_price()}</div>
          :
          <div>The cart is empty</div>
        }
      </div>
    </>
  )
}
export default Cart