import Cart from "../cart/cart";
import Logo from "../logo/logo";
import Login from "../login/login";
import Menu from "../menu/menu";

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