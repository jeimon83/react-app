import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router-dom";
import productList from "../../mocks/productList";

import './style.css'

const ItemDetail = () => {

  const {handle} = useParams();

  const found = productList.find(element => element.handle === handle);
  console.log(found)

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            className='img-container'
            image={`../${found.img}`}
            title={handle}
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default ItemDetail;

// aca va el detalle del item
// acá adentro debería ir el counter
// el más y el menos mandan eventos al padre "quiero restar/sumar uno" y se lo manda como prop
// el nro/stock que aparece al principio viene del padre, variable "initial" --> sería useState(initial)
// el total del stock viene del padre, variable "stock"
// counter es el hijo
// el padre sería toda la ventana
// el botón agregar al carrito es un hijo

// el botón agregar carrito tiene que cambiar a terminar compra 
// si llega al máximo de stock con el botón más

// {isBottonAdd ? <div>Agregar carrito</div : <h2>Terminar compra</h2>
// el botón terminar compra te debería llevar al checkout
// {seAgregoProducto ? <TerminarCompra/> : <AgregarAlCarrito/>} 

// el counter no hace nada, la lógica está en el padre
// initial empieza en uno y se lo manda al componente
// el onClick del menos y mas llama a setInitial

// el state del counter hay que mandárselo al padre.
// el padre va a manejar todos los states

// <ItemDetail setInitial=[setCounter] />