import ItemCount from '../components/itemcount/ItemCount';

const ItemListContainer = () => {  

  return (
    <>
      <ItemCount stock={4} initial={1} />
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