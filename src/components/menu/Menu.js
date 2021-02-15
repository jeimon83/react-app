import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav >
      <ul className="li-menu">
        <li><Link to="/" className="link">Home</Link></li>
        <li><a className="link" href="#paddle">Paddles</a></li>
        <li><a className="link" href="#sneakers">Sneakers</a></li>
        <li><a className="link" href="#others">Others</a></li>
      </ul>
    </nav>
  );
}

export default Menu;

