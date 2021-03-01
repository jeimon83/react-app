import React from "react";
import productList from './../mocks/productList'
export const CartContext = React.createContext();
export const useCartContext = () => React.useContext(CartContext);

export const CartProvider = props => {
  const [list, setList] = React.useState(() => JSON.parse(window.sessionStorage.getItem("cart")) || [])

  const productsAdd = item_to_add => {
    const found = list.find(item => item.id === item_to_add.id)
    const product = productList.find(item => item.id === item_to_add.id)
    if (found) {
      const newCartItem = list.map(item => {
        if (item.id === item_to_add.id) {
          const total = item_to_add.count + item.count
          if(product.inventory >= total) { return { ...item, count: total } }
        }
        return item;
      });
      setList(newCartItem);
    } else {
      const aux = [...list, item_to_add]
      setList(aux);
      window.sessionStorage.setItem("cart", JSON.stringify(aux))
    }
  }

  const addOneitem = ({item_id, item_count}) => {
    const newCart = list.map(item => {
      if (item.id === item_id) { return { ...item, count: item_count + 1 }}
      return item;
    });
    setList(newCart);
    window.sessionStorage.setItem("cart", JSON.stringify(newCart))
  }


  const removeOneitem = ({item_id, item_count}) => {
    if(item_count -1 === 0) {
      return removeItem({ item_id: item_id })
    }
    else{
      const newCart = list.map(item => {
        if (item.id === item_id) {
          return { ...item, count: item_count - 1 };
        }
        return item;
      });
      setList(newCart);
      window.sessionStorage.setItem("cart", JSON.stringify(newCart))
    }
  }


  const removeItem = ({item_id}) => {
    const newCart = list.filter(item=> item.id !== item_id)
    setList(newCart);
    window.sessionStorage.setItem("cart", JSON.stringify(newCart))
  }

  const totalPrice = () => {
    let total = list.reduce((total, product) => total + product.price * product.count, 0).toFixed(2)
    return total
  }

  const totalItems = () => {
    let total = list.reduce((total, product) => total + product.count, 0)
    return total
  }

  return (
    <CartContext.Provider 
    value={{ 
      list, 
      productsAdd,
      addOneitem,
      removeOneitem,
      removeItem,
      totalPrice,
      totalItems
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
