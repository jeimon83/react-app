import React from "react";
export const CartContext = React.createContext();
export const useCartContext = () => React.useContext(CartContext);

export const CartProvider = props => {
  const [list, setList] = React.useState([]);

  const productsAdd = itemCount => {
    if (list.find(item => item.id === itemCount.id)) {
      const newCartItem = list.map(item => {
        if (item.id === itemCount.id) {
          return { ...item, count: itemCount.count + item.count };
        }
        return item;
      });
      setList(newCartItem);
    } else {
      setList(state => {
        return [...state, itemCount];
      });
    }
  };

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
