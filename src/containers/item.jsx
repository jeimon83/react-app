const Item = (product) => {
  console.log(JSON.stringify(product));
  console.log(product["description"]);
  let i = JSON.stringify(product);
  console.log(i.first);
  console.log(i.title);
  return (
    <>
      <p key={i.id}>
        {i["title"]} - {i.description} - {i.price} - {i.inventory} - {i.src}
      </p>      
    </>
  );
}