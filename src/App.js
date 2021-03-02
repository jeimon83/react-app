import React from 'react'
import Routes from './routes/index.js'
import { CartProvider } from "./context/CartContext"

const App = () => {

  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}

export default App
