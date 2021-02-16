import { useEffect, useState } from "react";
import productList from "../mocks/productList";
import ItemList from "../components/itemlist/ItemList";
import { useParams } from 'react-router-dom'

const ItemCategoryContainer = () => {

  const [products, setProducts] = useState([]);
  const { category } = useParams()

  useEffect(() => {
    const myPromise = new Promise((resolve) => {
      const items = productList.filter(element => element.category === category)
      setTimeout(() => resolve(items));
    });

    myPromise.then((result) => setProducts(result));
  }, [category]);

  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemCategoryContainer;