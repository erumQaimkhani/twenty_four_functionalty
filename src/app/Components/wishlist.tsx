"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
interface WishlistItem {
  id: number;
  name: string;
  image: string;
  price: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const sampleProducts: WishlistItem[] = [
    {
      id: 1,
      name: "Product 1",
      image: "/images/product1.png",
      price: "$10.00",
    },
    {
      id: 2,
      name: "Product 2",
      image: "/images/product2.png",
      price: "$15.00",
    },
    {
      id: 3,
      name: "Product 3",
      image: "/images/product3.png",
      price: "$20.00",
    },{
        id: 4,
        name: "Product 4",
        image: "/images/product3.png",
        price: "$20.00",
      },
  ];

  const addToWishlist = (product: WishlistItem) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    } else {
      alert("This item is already in your wishlist!");
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Wishlist</h1>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 shadow-md"
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <Button
              onClick={() => addToWishlist(product)}
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Add to Wishlist
            </Button>
          </div>
        ))}
      </div>

      {/* Wishlist */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                <p className="text-gray-600">{item.price}</p>
                <Button
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-4 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                >
                  Remove from Wishlist
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
