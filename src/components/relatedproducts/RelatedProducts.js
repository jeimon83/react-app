import { useEffect, useState } from "react";
import productList from "../../mocks/productList";
import Card from "@material-ui/core/Card";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import './style.css'

const RelatedProducts = () => {

  const [relatedItems, setRelatedItems] = useState([]);
  const { category } = useParams()

  useEffect(() => {
    const myPromise = new Promise((resolve) => {
      const categoryItems = productList.filter(element => element.category === category)
      setTimeout(() => resolve(categoryItems.slice(0,4)));
    });

    myPromise.then((result) => setRelatedItems(result));
  }, [category]);

  return (
    <>
      <h3 style={{ "textAlign": "center" }}>Related Products</h3>
      <div style={{ "width": "100%" }}>
        {relatedItems.map( relatedItem => 
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