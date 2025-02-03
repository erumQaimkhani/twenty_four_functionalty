import { client } from "./client";

export async function getProducts() {
  const query = `*[_type == "product"]{
    productImage,
    price,
    description,
    slug,
    inventory
  }`;
  const products = await client.fetch(query);
  return products;
}