import { useEffect, useState } from "react";
import ItemList from "../components/itemlist/ItemList";
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase'

const ItemCategoryContainer = () => {

  const [FirebaseProducts, setFirebaseProducts] = useState([]);
  const { category } = useParams()

  useEffect(()=> {
    const database = getFirestore()
    const categoryProducts = database.collection('products').where('category', '==', category).limit(20)
    categoryProducts.get().then((querySnapshot) => {
      const FirebaseProducts = querySnapshot.docs.map(element => {
         return { ...element.data(), id: element.id } 
      })
      setFirebaseProducts(FirebaseProducts)
      console.log(FirebaseProducts)
    })
  }, [category]);

  return (
    <>
      <ItemList products={FirebaseProducts} />
    </>
  );
}

export default ItemCategoryContainer;