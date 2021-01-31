import React, { useState } from 'react';
import { ItemCount } from '../components/ItemCount';

const ItemListContainer = (minStock) => {
  const [count, setCount] = useState(1);

  const handleAdd = (stock)  => { if (count < stock)    { setCount(count + 1); } };
  const handleSubstract = () => { if (count > minStock) { setCount(count - 1); } };

  return (
    <>
      <ItemCount stock={12} count={count} handleAdd={handleAdd} handleSubstract={handleSubstract} />
    </>
  );
}

export default ItemListContainer;