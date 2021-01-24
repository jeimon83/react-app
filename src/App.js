import React, { Component } from 'react';
import Logo from './components/logo/logo.js';
import Menu from './components/navbar/menu.js';
import Login from './components/navbar/login.js';
import Cart from './components/cart/cart.js';

class App extends Component {
  render() {
   return <div className="header-grid">
     <Logo/>
     <Menu/>
     <Login/>
     <Cart/>
   </div>
  }
}

export default App;
