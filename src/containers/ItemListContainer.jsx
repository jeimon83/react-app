import * as React from "react";
import productList from "../mocks/productList";
import ItemList from "../components/itemlist/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => resolve(productList), 2000);
    });

    myPromise.then((result) => setProducts(result));
  }, []);

  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;



// EJEMPLO DE MAP
/*   const array = ["jaime","fran","toto"];
  return (
    <>
    {array.map((element, index) => {
      return (<p key={index}>{index}: {element}</p>)
    })}
    </>
  ) */


  //  EJEMPLO DE FETCH MERCADOLIBRE
/*   useEffect(() => {

    fetch('https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung')
    .then(result => {
      return result.json()
    }).then(value => {
      //Guardamos en un state
      setData(value);
      console.log(value);
      console.log(data);
    }).catch(error => {
      console.log(error);
    })

    return () => {}
  },[]) */