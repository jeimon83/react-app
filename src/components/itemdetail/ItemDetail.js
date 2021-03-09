import {Container, Row, Col} from 'react-bootstrap'
import { useState } from "react"
import { useLocation } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import AddIcon    from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import RelatedProducts from '../relatedproducts/RelatedProducts'
import { useCartContext } from "../../context/CartContext.js";
import { Link } from 'react-router-dom'
import './style.css'

const ItemDetail = () => {
  const location = useLocation();
  const product = location.state
  const [count, setCount] = useState(1)
  const { productsAdd } = useCartContext();
  const [enableCart, setEnableCart] = useState(true);
  const [enable, setEnable] = useState(false);

  const onAdd = () => productsAdd(
    { 
      id:     product.id, 
      title:  product.title, 
      price:  product.price, 
      img:    product.img, 
      stock:  product.inventory, 
      count 
    })  
  const handleAdd = () => (count < product.inventory) ? setCount(count + 1) : null  
  const handleSub = () => (count > 1) ? setCount(count - 1) : null

  const enableBuyButton = () => {
    setEnableCart(false) 
    setEnable(true)
    onAdd()
  }
  
  return (
    <>
      <Container fluid className="item-detail">
        <Row className="row-height" >
          <Col></Col>
          <Col className="col row-height">
          <img
              className='img-container'
              src={`../${product.img}`}
              alt="hola"
            />
          </Col>
          <Col className="title row-height">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>$ {product.price}</p>
            <IconButton aria-label='sub' onClick = {() => { handleSub() }} >
              <RemoveIcon className='remove' />
            </IconButton>
            <b style={{ fontSize: "20px" }}>{count}</b>
            <IconButton aria-label='add' onClick={() => { handleAdd() }} >
              <AddIcon className='add' />
            </IconButton>
            { enableCart ?
              <p className="addcart">
              <Button variant="contained" color="secondary" disableElevation onClick={enableBuyButton} >
                Add to cart
              </Button>
              </p>
              :
              null
            }
             { enable ?
             <p className="addcart">
              <Link to="/cart">
                <Button variant="outlined" color="secondary">
                  Finish Buy
                </Button>
              </Link></p>
              :
              null
            }
          </Col>
          <Col></Col>
        </Row>
        <div className="related-products">
          <RelatedProducts />
        </div>
      </Container>
    </>
  )
}

export default ItemDetail