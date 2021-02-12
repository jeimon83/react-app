import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import { Link } from 'react-router-dom';

import './style.css'
// cuando haces click acá tenés que ir a item detail, puede ser un botón comprar
// esta es la famosa card
// opcional podría haber un counter también para no entrar a los detalles

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

//import ItemCount from '../itemcount/ItemCount'
//<ItemCount stock={product.inventory} initial={1} />