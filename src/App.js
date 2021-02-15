import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar.js";
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemDetail from './components/itemdetail/ItemDetail';

const App = () => {

  return (
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
        <Route path="*" children={<div>Not found</div>} />
      </Switch>
      {/* <button onClick={mostrarEvento}>Evento</button> */}
      <footer></footer>
    </BrowserRouter>
  );
}

export default App
