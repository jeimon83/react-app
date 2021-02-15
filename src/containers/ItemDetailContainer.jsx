import { useEffect, useState } from "react";
import productList from "../mocks/productList";
import ItemList from "../components/itemlist/ItemList";

const ItemDetailContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => resolve(productList));
    });

    myPromise.then((result) => setProducts(result));
  }, []);

  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemDetailContainer;