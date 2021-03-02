import { useEffect, useState } from "react"
import productList from "../mocks/productList"
import ItemList from "../components/itemlist/ItemList"
import { getFirestore } from '../firebase'

const ItemDetailContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    const database = getFirestore()
    const productCollection = database.collection('products')
    productCollection.get().then((value) => {
      value.docs.map(element => {console.log(element.data)})
    })
  },[])

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