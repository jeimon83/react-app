import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.js";
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemDetail from './components/itemdetail/ItemDetail';

const App = () => {
/*   const mostrarEvento = (e) => {
    console.log(e);
  } */

  return (
    <BrowserRouter>
      <div className="header-grid">
        <Navbar />
      </div>
      <Switch>
        <Route exact path = "/" component = {ItemDetailContainer} />
        <Route exact path="/:category/:handle" component={ItemDetail} />
        <Route path="*" children={<div>Not found</div>} />
      </Switch>
      {/* <button onClick={mostrarEvento}>Evento</button> */}
      <footer></footer>
    </BrowserRouter>
  );
}

export default App
