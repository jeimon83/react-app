import ItemCount from '../itemcount/ItemCount'
import './style.css'

const Item = ({product}) => {

  var style= {
    width: 200
  };

  return (
    <div className="card">
      <h3 className="title">{product.title}</h3>
      <h4 className="price">Precio: ${product.price}</h4>
      <div><img alt="product" src={product.img} style={style}></img></div>
      <ItemCount stock={product.inventory} initial={1} />      
    </div>
  )
}

export default Item;