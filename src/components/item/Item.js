//import ItemCount from '../itemcount/ItemCount'
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import './style.css'
// cuando haces click acá tenés que ir a item detail, puede ser un botón comprar
// esta es la famosa card
// opcional podría haber un counter también para no entrar a los detalles

const Item = ({product}) => {
  const preventDefault = (event) => event.preventDefault();
  return (
    <Card className="card">
      <h4 className="title">{product.title}</h4>
      <h4 className="price">${product.price}</h4>
      <div><img alt="product" src={product.img} className="image"></img></div>
      {/* <ItemCount stock={product.inventory} initial={1} />    */}
      <Button variant="contained" color="secondary" disableElevation href="/${product.category}/${product.id}" onClick={preventDefault}>
        Ver más
      </Button>
    </Card>
  )
}

export default Item;