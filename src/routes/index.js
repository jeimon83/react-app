import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./../components/navbar/Navbar.js"
import ItemCategoryContainer from './../containers/ItemCategoryContainer'
import ItemDetailContainer from './../containers/ItemDetailContainer'
import ItemDetail from './../components/itemdetail/ItemDetail'
import Cart from './../components/cart/Cart'
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Router>
      <div className="header-grid">
        <Navbar />
      </div>
      <Switch>
        <Route       path = "/cart"               component={Cart} />
        <Route exact path = "/"                   component={ItemDetailContainer} />
        <Route exact path = "/:category/:handle"  component={ItemDetail} />
        <Route exact path = "/:category"          component={ItemCategoryContainer} />
        <Route       path = "*"                   component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;