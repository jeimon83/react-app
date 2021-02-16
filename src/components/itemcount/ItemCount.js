import React, { useState } from 'react'
import './style.css'
import IconButton from '@material-ui/core/IconButton'
import AddIcon    from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const ItemCount = (props) => { 
  
  const [count, setCount] = useState(props.initial)

  const handleAdd = () => {
    if (count < props.stock) {
      setCount(count + 1)
    }
  };

  const handleSub = () => {
    if (count > props.initial) {
      setCount(count - 1)
    }
  };

  return (
    <>
      <IconButton aria-label='sub' onClick = {() => {
        handleSub()
      }} >
        <RemoveIcon className='remove' />
      </IconButton>
      <b style={{ fontSize: "20px" }}>{count}</b>
      <IconButton aria-label='add' onClick={() => {
        handleAdd()
      }} >
        <AddIcon className='add' />
      </IconButton>
    </>
  );
};

export default ItemCount