import {Container, Row, Col} from 'react-bootstrap'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import productList from "../../mocks/productList"
import Button from '@material-ui/core/Button';
import './style.css'
import ItemCount from '../itemcount/ItemCount'


const ItemDetail = () => {
  const [item, setItem] = useState([])
  const { handle } = useParams()

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
            <ItemCount stock={item.inventory} initial={1} />
            <p className="addcart">
              <Button variant="contained" color="secondary" disableElevation>
                Add to cart
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ItemDetail