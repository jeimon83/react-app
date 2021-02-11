import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.js";
import ItemDetailContainer from './containers/ItemDetailContainer';

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
        <Route exact path="/">
          <ItemDetailContainer />
        </Route>
        <Route path="*" children={<div>Not found</div>}></Route>
      </Switch>
      {/* <button onClick={mostrarEvento}>Evento</button> */}
    </BrowserRouter>
  );
}

export default App;
