import React from 'react';
import './style.css'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemCount = ({ stock, initial }) => { 

  const [count, setCount] = React.useState(initial); // seteamos el contador en 1

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSub = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <IconButton aria-label='sub'>
        <RemoveIcon className='remove' onClick={handleSub} />
      </IconButton>
      <b style={{ fontSize: "20px" }}>{count}</b>
      <IconButton aria-label='add'>
        <AddIcon className='add' onClick={handleAdd} />
      </IconButton>
    </>
  );
};

export default ItemCount;