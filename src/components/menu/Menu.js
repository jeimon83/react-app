import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav >
      <ul className="li-menu">
        <li><Link to="/"         className="link">Home     </Link></li>
        <li><Link to="/paddles"  className="link">Paddles  </Link></li>
        <li><Link to="/sneakers" className="link">Sneakers </Link></li>
        <li><Link to="/others"   className="link">Others   </Link></li>
      </ul>
    </nav>
  );
}

export default Menu;

