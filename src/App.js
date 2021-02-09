import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.js";
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="header-grid">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <ItemListContainer minStock={1} />
        </Route>
        <Route path="*" children={<div>Not found</div>}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
