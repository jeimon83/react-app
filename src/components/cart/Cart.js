import React, { useState } from "react"
import { useCartContext } from "../../context/CartContext.js"
import Button from '@material-ui/core/Button';
import { getFirestore } from '../../firebase'
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

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
  
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

  const finishBuy = () => {

    let newDate = new Date()
    let newOrder = { 
      buyer: {
        name: name,
        email: email,
        phone: phone
      },
      items: 
        [...list],
        date: newDate,
        total: total_price()
    }

    const fsDB = getFirestore()
    const orderCollection = fsDB.collection('orders')
    orderCollection.add(newOrder).then((value) => {
      console.log(value.id) 
    })
  }

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
      <div>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="info">
      {(total_items() > 0) ?
          <button onClick={() => finishBuy()}>Finish Buy</button>
          :
          null
        }
      </div>
    </>
  )
}
export default Cart