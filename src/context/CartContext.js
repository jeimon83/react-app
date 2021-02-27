import React from "react";
export const CartContext = React.createContext();
export const useCartContext = () => React.useContext(CartContext);

export const CartProvider = props => {
  const [list, setList] = React.useState(() => JSON.parse(window.sessionStorage.getItem("cart")) || [])

  const productsAdd = item_to_add => {
    if (list.find(item => item.id === item_to_add.id)) {
      const newCartItem = list.map(item => {
        if (item.id === item_to_add.id) {
          return { ...item, count: item_to_add.count + item.count };
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

  return (
    <CartContext.Provider 
    value={{ 
      list, 
      productsAdd 
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
