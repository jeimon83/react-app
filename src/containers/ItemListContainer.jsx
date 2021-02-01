import React, { useState } from 'react';
import { ItemCount } from '../components/itemcount/itemcount.js';

const ItemListContainer = (props) => {
  const [count, setCount] = useState(1); // seteamos el contador en 1
  let minStock = props.minStock
  const handleAdd = (stock)  => { if (count < stock) { setCount(count + 1); }}
  const handleSub = () => { if (count > minStock ) { setCount(count - 1); }}

  return (
    <>
      <ItemCount stock={4} count={count} handleAdd={handleAdd} handleSub={handleSub} />
    </>
  );
}

export default ItemListContainer;