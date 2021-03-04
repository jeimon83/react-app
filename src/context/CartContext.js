import React from "react";
export const CartContext = React.createContext();
export const useCartContext = () => React.useContext(CartContext);

export const CartProvider = props => {
  const [list, setList] = React.useState(() => JSON.parse(window.sessionStorage.getItem("cart")) || [])

  const productsAdd = item_to_add => {
    const found = list.find(item => item.id === item_to_add.id)
    console.log(found)
    if (found) {
      const newCartItem = list.map(item => {
        if (item.id === item_to_add.id) {
          const total = item_to_add.count + item.count
          if(item.stock >= total) { return { ...item, count: total } }
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

  const addOneitem = item => {
    const newCart = list.map(element => {
      if (element.id === item.id) { return { ...element, count: item.count + 1 }}
      return element;
    });
    setList(newCart);
    window.sessionStorage.setItem("cart", JSON.stringify(newCart))
  }

  const removeOneitem = item => {
    if(item.count - 1 === 0) {
      return removeItem(item)
    }
    else{
      const newCart = list.map(element => {
        if (element.id === item.id) {
          return { ...element, count: item.count - 1 };
        }
        return element;
      });
      setList(newCart);
      window.sessionStorage.setItem("cart", JSON.stringify(newCart))
    }
  }


  const removeItem = item => {
    const newCart = list.filter(element => element.id !== item.id)
    setList(newCart);
    window.sessionStorage.setItem("cart", JSON.stringify(newCart))
  }

  const totalPrice = () => {
    let total = list.reduce((total, item) => total + item.price * item.count, 0).toFixed(2)
    return total
  }

  const totalItems = () => {
    let total = list.reduce((total, item) => total + item.count, 0)
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
