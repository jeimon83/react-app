import {Container, Row, Col} from 'react-bootstrap'
import { useEffect, useState } from "react"
import { useParams, useLocation } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import AddIcon    from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import productList from '../../mocks/productList'
import RelatedProducts from '../relatedproducts/RelatedProducts'
import { useCartContext } from "../../context/CartContext.js";
import { Link } from 'react-router-dom'
import './style.css'

const ItemDetail = () => {
  const location = useLocation();
  const [item, setItem] = useState([])
  const { handle } = useParams()
  const [count, setCount] = useState(1)
  const { productsAdd } = useCartContext();
  const [enable, setEnable] = useState(false);

  const onAdd = () => {
    console.log("Se agregaron", count, "productos al carrito");
    productsAdd({ id: item.id, title: item.title, price: item.price, count });
  };
  
  const handleAdd = () => {
    if (count < item.inventory) {
      setCount(count + 1)
    }
  }
  
  const handleSub = () => { 
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const enableBuyButton = () => { 
    setEnable(true)
    onAdd()
  }

  useEffect(() => {
    const product = location.state;
    const myPromise = new Promise((resolve) => {
      const item = productList.find(element => element.handle === handle)
      if ( product.id === item.id) {
        resolve(item)
      }
    })
    myPromise.then((result) => setItem(result))
  }, [handle, location.state]);

  return (
    <>
      <Container fluid className="item-detail">
        <Row className="row-height" >
          <Col></Col>
          <Col className="col row-height">
          <img
              className='img-container'
              src={`../${item.img}`}
              alt="hola"
            />
          </Col>
          <Col className="title row-height">
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
            <Button variant="contained" color="secondary" disableElevation onClick={enableBuyButton} >
              Add to cart
            </Button>
            </p>
             { enable ?
              <Link to="/cart">
                <Button variant="contained" color="primary" disableElevation >
                  Finish Buy
                </Button>
              </Link>
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