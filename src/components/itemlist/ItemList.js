import Item from "../item/Item";
import './style.css'

const ItemList = ({products}) => {
  return (
    <div className="products-grid">
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
    </div>
  );
};

export default ItemList;