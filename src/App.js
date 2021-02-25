import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar.js";
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemCategoryContainer from './containers/ItemCategoryContainer';
import ItemDetail from './components/itemdetail/ItemDetail';
import { CartProvider } from "./context/CartContext";
import Cart from './components/cart/Cart';

const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="header-grid">
          <Navbar />
        </div>
        <Switch>
          <Route exact path = "/" >
            <ItemDetailContainer />
          </Route>
          <Route exact path = "/:category/:handle" >
            <ItemDetail />
          </Route>
          <Route exact path = "/:category" >
            <ItemCategoryContainer />
          </Route>
          <Route exact path = "/cart" >
            <Cart />
          </Route>
          <Route path="*" children={<div>Not found</div>} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
