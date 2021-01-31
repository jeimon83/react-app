import './style.css'

export const ItemCount = ({ stock, count, handleAdd, handleSubstract }) => (
  <>
    <button onClick={() => { handleSubstract(); } }>-</button>
    <b>{count}</b>
    <button onClick={() => { handleAdd(stock);  } }>+</button>
    <div><button>Agregar al carrito</button></div>
  </>
)