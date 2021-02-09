import ItemCount from '../itemcount/ItemCount'
import './style.css'

const Item = ({product}) => {
  return (
    <div className="card">
      <h3 className="title">{product.title}</h3>
      <h4 className="price">Precio: ${product.price}</h4>
      <img alt="product" src={product.img}></img>
      <ItemCount stock={product.inventory} initial={1} />      
    </div>
  )
}

export default Item;