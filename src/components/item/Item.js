import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import { Link } from 'react-router-dom';
import './style.css'

const Item = ({product}) => {

  return (
    <Card className="card">
      <Link to={`/${product.category}/${product.handle}`} >
        <h4 className="title">{product.title}</h4>
        <h4 className="price">${product.price}</h4>
        <div>
          <img alt="product" src={product.img} className="image" />
        </div>
        <Button variant="contained" color="secondary" disableElevation>
          Buy
        </Button>
      </Link>
    </Card>
  )
}

export default Item;