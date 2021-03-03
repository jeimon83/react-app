import { useEffect, useState } from "react"
import ItemList from "../components/itemlist/ItemList"
import { getFirestore } from '../firebase'

const ItemDetailContainer = () => {
  const [FirebaseProducts, setFirebaseProducts] = useState([]);

  useEffect(()=> {
    const database = getFirestore()
    const productCollection = database.collection('products')
    productCollection.get().then((value) => {
      const FirebaseProducts = value.docs.map(element => {
         return { ...element.data(), id: element.id } 
      })
      setFirebaseProducts(FirebaseProducts)
    })
  },[])

  return (
    <>
      <ItemList products={FirebaseProducts} />
    </>
  );
}

export default ItemDetailContainer;