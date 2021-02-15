import {Container, Row, Col} from 'react-bootstrap'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import AddIcon    from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import productList from '../../mocks/productList'
import AddtoCartBtn from '../addtocartbtn/AddtoCartBtn'
import CheckoutBtn from '../checkoutbtn/CheckoutBtn'
import './style.css'

const ItemDetail = () => {
  const [item, setItem] = useState([])
  const { handle } = useParams()
  const [count, setCount] = useState(1)
  const [buyButton, setbuyButton] = useState(true);
  
  const handleAdd = () => {
    if (count < item.inventory) {
      setCount(count + 1);
    }
  };

  const handleSub = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const but = (count) => {
    if (count === item.inventory){
      setbuyButton(false)
    }else{
      setbuyButton(true)
    }
  }

  useEffect(() => { but(count) })

  useEffect(() => {
    const myPromise = new Promise((resolve) => {
      const item = productList.find(element => element.handle === handle)
      if (item) {
        resolve(item)
      }
    })
    myPromise.then((result) => setItem(result))
  }, [handle]);

  return (
    <>
      <Container>
        <Row>
          <Col sm={4} className="col">
          <img
              className='img-container'
              src={`../${item.img}`}
              alt="hola"
            />
          </Col>
          <Col sm={8} className="title">
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
            <IconButton aria-label='sub' onClick = {() => { handleSub() }} >
              <RemoveIcon className='remove' />
            </IconButton>
            <b style={{ fontSize: "20px" }}>{count}</b>
            <IconButton aria-label='add' onClick={() => { handleAdd() }} >
              <AddIcon className='add' />
            </IconButton>
            <p className="addcart">
              { buyButton ? <AddtoCartBtn /> : <CheckoutBtn /> }
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ItemDetail