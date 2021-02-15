import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useParams } from 'react-router-dom' 
import './style.css'

const Cart = () => {

  const { handle }  = useParams();
  return (
    <>
      <a href="#cart" className="cart"><ShoppingCartIcon/></a>
    </>
  );
}
export default Cart;