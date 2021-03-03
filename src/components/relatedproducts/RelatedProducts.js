import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/index.js'
import './style.css'

const RelatedProducts = () => {

  const [FirebaseProducts, setFirebaseProducts] = useState([]);
  const { category } = useParams()

  useEffect(() => {
    const database = getFirestore()
    const categoryProducts = database.collection('products').where('category', '==', category).limit(3)
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
      <h3 style={{ "textAlign": "center" }}>Related Products</h3>
      <div style={{ "width": "100%" }}>
        {FirebaseProducts.map( relatedItem => 
          <div key={relatedItem.id} style={{ "width" : "25%", "float" : "left" }}>
            <Card className="card">
              <Link to={{ pathname: `/${relatedItem.category}/${relatedItem.handle}`, state: relatedItem }}>
                <h4 className="title-related">{relatedItem.title}</h4>
                <h4 className="price-related">${relatedItem.price}</h4>
                <div>
                  <img alt="related product" src={`../${relatedItem.img}`} className="image" />
                </div>
              </Link>
            </Card>
          </div>
        )}
    </div>
    </>
  );
}

export default RelatedProducts;