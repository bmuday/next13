async function getData() {
  const productsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const products = await productsResponse.json();

  return products;
}

export default async function Home() {
  const products = await getData();

  return (
    <div>Next App</div>
  );
}
