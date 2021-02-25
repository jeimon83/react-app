import Logo  from  "../logo/Logo";
import Login from  "../login/Login";
import Menu  from  "../menu/Menu";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 

const Navbar = () => {
  return (
    <>
      <Logo />
      <Menu />
      <Login />
      <Link to="/cart">
      <p className="cart"><ShoppingCartIcon/></p>
      </Link>
    </>
  );
}

export default Navbar;