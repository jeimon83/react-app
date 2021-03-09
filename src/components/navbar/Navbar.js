import Logo  from  "../logo/Logo";
import Login from  "../login/Login";
import Menu  from  "../menu/Menu";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import { useCartContext } from "../../context/CartContext.js"
import './style.css'

const Navbar = () => {
  const { list } = useCartContext()
  
  const itemsQuantity = () => { return list.reduce((total, obj) => obj.count + total,0) }

  return (
    <>
      <Logo />
      <Menu />
      <Login />
      <Link to="/cart">
      <p className="cart"><ShoppingCartIcon/>Cart ({itemsQuantity()})</p>
      </Link>
    </>
  );
}

export default Navbar;