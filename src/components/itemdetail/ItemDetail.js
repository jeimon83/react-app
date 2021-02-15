import {Container, Row, Col} from 'react-bootstrap'
import { useState } from "react"
import { useParams } from "react-router-dom"
import productList from "../../mocks/productList"
import IconButton from '@material-ui/core/IconButton'
import AddIcon    from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Button from '@material-ui/core/Button';

import './style.css'

const ItemDetail = () => {

  const {handle} = useParams()

  const [count, setCount] = useState(1)

  const handleAdd = () => {
    if (count < item.inventory) {
      setCount(count + 1);
    }
  };

  const handleSub = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const item = productList.find(element => element.handle === handle)

  return (
    <>
      <Container>
        <Row>
          <Col sm={4} className="col">
          <img
              className='img-container'
              src={`../${item.img}`}
              alt={handle}
            />
          </Col>
          <Col sm={8} className="title">
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
            <IconButton aria-label='sub' onClick={handleSub} >
              <RemoveIcon className='remove' />
            </IconButton>
            <b style={{ fontSize: "20px" }}>{count}</b>
            <IconButton aria-label='add' onClick={handleAdd} >
              <AddIcon className='add' />
            </IconButton>
            <p>
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