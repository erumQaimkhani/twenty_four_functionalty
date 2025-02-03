"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../sanity/lib/api";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/lib/client";
import Header from "./components/header";
import Image from "next/image";

const builder = imageUrlBuilder(client);

// Function to generate the image URL from Sanity
function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source).url(); // Generate and return the image URL
}

interface Product {
  _id: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  price: number;
  description: string;
  slug: {
    current: string;
  };
  inventory: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      console.log("Fetched Products:", data);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Trending Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          // Create a unique key. If product._id is missing, fallback to product.slug.current.
          const productKey = product._id || `product-${product.slug?.current}`;
          return (
            <div
              key={productKey}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl p-5"
            >
              <Image
                src={urlFor(product.productImage)}
                alt={product.description}
                className="w-full h-56 object-cover rounded-lg"
                width={500}
                height={350}
              />
              <div className="p-4">
                <p className="text-gray-700 text-lg font-medium mt-2">
                  ${product.price}
                </p>
                <p className="text-green-600 font-semibold mt-2">
                  Special Discount Available
                </p>
                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:opacity-90">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
