import Logo from './components/logo/logo.js';
import Menu from './components/navbar/menu.js';
import Cart from './components/cart/cart.js';
import Login from './components/navbar/login.js';
import ItemListContainer from './containers/ItemListContainer.jsx';

const App = () => {
  return (
    <div>
    <div className="header-grid">
      <Logo />
      <Menu />
      <Login />
      <Cart />
    </div>
    <div>
      <ItemListContainer greeting={'Bienvenido'} />
    </div>
    </div>
  );
}

export default App;
