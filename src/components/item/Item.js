import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext.js";
import './style.css'

const Item = ({product}) => {
  const count = 1
  const { productsAdd } = useCartContext();

  const onAdd = () => productsAdd(
    { 
      id: product.id, 
      title: product.title, 
      price: product.price, 
      img: product.img,
      stock: product.inventory,
      count 
    })

  return (
    <Card className="card">
      <Link to={{ pathname: `/${product.category}/${product.handle}`, state: product }}>
        <h4 className="title">{product.title}</h4>
        <h4 className="price">${product.price}</h4>
        <div>
          <img alt="product" src={product.img} className="image" />
        </div>
        <Button variant="contained" color="primary" disableElevation>
          Details
        </Button>
      </Link>
      <div className="add-cart">
        <Button variant="contained" color="secondary" disableElevation onClick={onAdd}>
          Add to Cart
        </Button>
      </div>
    </Card>
  )
}

export default Item;