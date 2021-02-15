import { Link } from 'react-router-dom';
import './style.css'

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="logo"
        src="/images/logo-padel-store.png"
        href="#home"
        alt="logo">
      </img>
    </Link>
  )
}

export default Logo;