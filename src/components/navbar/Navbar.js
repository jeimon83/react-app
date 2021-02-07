import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import Login from "../login/Login";
import Menu from "../menu/Menu";

const Navbar = () => {
  return (
    <>
      <Logo />
      <Menu />
      <Login />
      <Cart />
    </>
  );
}

export default Navbar;