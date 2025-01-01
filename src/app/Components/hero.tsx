

// import Image from "next/image";

// export default function Hero() {
//   return (
//     <div className="container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white">

//       <div className="relative h-[500px] md:h-[716px]">
//         <Image
//           src="/images/hero.png"
//           alt="Hero Background"
//           layout="fill"
//           objectFit="cover"
//           className="absolute top-0 left-0 z-0"
//         />

//         <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center text-white md:flex-row md:text-left md:px-12 md:pt-28">

//           <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start">
//             <span className="text-sm font-bold tracking-wide uppercase md:text-base text-gray-200">
//               Summer 2020
//             </span>
//             <h1 className="text-4xl font-bold leading-tight md:text-6xl">
//               New Collection
//             </h1>
//             <p className="max-w-md text-sm leading-6 text-gray-100 md:text-base">
//               We know how large objects will act, <br /> but things on a small scale.
//             </p>
//             <button className="px-8 py-3 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300">
//               Shop Now
//             </button>
//           </div>



//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function Hero() {
//   const [cart, setCart] = useState<number>(0); // State to track cart items

//   const handleAddToCart = () => {
//     setCart(cart + 1); // Increment cart count
//     alert("Item added to cart!"); // Notify the user (you can replace this with a modal or toast)
//   };

//   return (
//     <div className="container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white">
//       <div className="relative h-[500px] md:h-[716px]">
//         <Image
//           src="/images/hero.png"
//           alt="Hero Background"
//           layout="fill"
//           objectFit="cover"
//           className="absolute top-0 left-0 z-0"
//         />

//         <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center text-white md:flex-row md:text-left md:px-12 md:pt-28">
//           <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start">
//             <span className="text-sm font-bold tracking-wide uppercase md:text-base text-gray-200">
//               Summer 2020
//             </span>
//             <h1 className="text-4xl font-bold leading-tight md:text-6xl">
//               New Collection
//             </h1>
//             <p className="max-w-md text-sm leading-6 text-gray-100 md:text-base">
//               We know how large objects will act, <br /> but things on a small scale.
//             </p>
//             <button
//               onClick={handleAddToCart} // Add click event
//               className="px-8 py-3 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
//             >
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 text-center text-gray-700">
//         Items in Cart: <span className="font-bold">{cart}</span>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function Hero() {
//   const [cart, setCart] = useState<number>(0); // State to track cart items

//   const handleAddToCart = () => {
//     setCart(cart + 1); // Increment cart count
//     alert("Item added to cart!"); // Notify the user (you can replace this with a modal or toast)
//   };

//   return (
//     <div className="container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white">
//       <div className="relative h-[500px] md:h-[716px]">
//         <Image
//           src="/images/hero.png"
//           alt="Hero Background"
//           layout="fill"
//           objectFit="cover"
//           className="absolute top-0 left-0 z-0"
//         />

//         <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center text-white md:flex-row md:text-left md:px-12 md:pt-28">
//           <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start">
//             <span className="text-sm font-bold tracking-wide uppercase md:text-base text-gray-200">
//               Summer 2020
//             </span>
//             <h1 className="text-4xl font-bold leading-tight md:text-6xl">
//               New Collection
//             </h1>
//             <p className="max-w-md text-sm leading-6 text-gray-100 md:text-base">
//               We know how large objects will act, <br /> but things on a small scale.
//             </p>
//             <Button
//               onClick={handleAddToCart} 
//               className="px-8 py-3 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 text-center text-gray-700">
//         Items in Cart: <span className="font-bold">{cart}</span>
//       </div>
//     </div>
//   );
// }
"use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function Hero() {
//   const [cart, setCart] = useState<number>(0); // State to track cart items
//   const [wishlist, setWishlist] = useState<number>(0); // State to track wishlist items

//   const handleAddToCart = (e: React.FormEvent) => {
//     e.preventDefault();
//     setCart(cart + 1);
//     alert("Item added to cart!");
//   };

//   const handleAddToWishlist = (e: React.FormEvent) => {
//     e.preventDefault();
//     setWishlist(wishlist + 1);
//     alert("Item added to wishlist!");
//   };

//   return (
//     <div className="container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white overflow-hidden">
//       <div className="relative h-[500px] md:h-[716px] overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full animation-slide">
//           <Image
//             src="/images/hero.png"
//             alt="Hero Background"
//             layout="fill"
//             objectFit="cover"
//             className="absolute"
//           />
//         </div>

//         <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center text-white md:flex-row md:text-left md:px-12 md:pt-28">
//           <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start">
//             <span className="text-sm font-bold tracking-wide uppercase md:text-base text-gray-200">
//               Summer 2020
//             </span>
//             <h1 className="text-4xl font-bold leading-tight md:text-6xl">
//               New Collection
//             </h1>
//             <p className="max-w-md text-sm leading-6 text-gray-100 md:text-base">
//               We know how large objects will act, <br /> but things on a small scale.
//             </p>

//             {/* Add to Cart Form */}
//             <form onSubmit={handleAddToCart} className="flex flex-col gap-4">
//               <button
//                 type="submit"
//                 className="px-8 py-3 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
//               >
//                 Add to Cart
//               </button>
//             </form>

//             {/* Add to Wishlist Form */}
//             <form onSubmit={handleAddToWishlist} className="flex flex-col gap-4">
//               <button
//                 type="submit"
//                 className="px-8 py-3 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
//               >
//                 Add to Wishlist
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Cart and Wishlist Summary */}
//       <div className="p-4 text-center text-gray-700">
//         <div>
//           Items in Cart: <span className="font-bold">{cart}</span>
//         </div>
//         <div>
//           Items in Wishlist: <span className="font-bold">{wishlist}</span>
//         </div>
//       </div>

//       {/* Add styles */}
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(-100%);
//           }
//           50% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//         .animation-slide {
//           animation: slide 10s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }
// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// export default function Hero() {
//   const images = ["/images/hero1.png", "/images/OIP.jpeg", "/images/purple.avif" ];"container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white overflow-hidden"]; // Add multiple image URLs

//   return (
//     <div className="container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white overflow-hidden">
//       <div className="relative h-[500px] md:h-[716px] overflow-hidden">
//         <div className="absolute top-0 left-0 flex w-[300%] h-full animation-slide">
//           {images.map((src, index) => (
//             <div
//               key={index}
//               className="w-full h-full flex-shrink-0 relative"
//               style={{ flexBasis: "100%" }}
//             >
//               <Image
//                 src={src}
//                 alt={`Hero Image ${index + 1}`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center text-white md:flex-row md:text-left md:px-12 md:pt-28">
//           <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start">
//             <span className="text-sm font-bold tracking-wide uppercase md:text-base text-gray-200">
//               Summer 2020
//             </span>
//             <h1 className="text-4xl font-bold leading-tight md:text-6xl">
//               New Collection
//             </h1>
//             <p className="max-w-md text-sm leading-6 text-gray-100 md:text-base">
//               We know how large objects will act, <br /> but things on a small scale.
//             </p>
//             <Button className="px-8 py-3 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300">
//               Shop Now
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Add styles */}
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0%);
//           }
//           33% {
//             transform: translateX(-100%);
//           }
//           66% {
//             transform: translateX(-200%);
//           }
//           100% {
//             transform: translateX(-300%);
//           }
//         }
//         .animation-slide {
//           animation: slide 12s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }
// 
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function Hero() {
//   const images = [
//     "/images/hero.png",
//     "/images/OIP.jpeg",
//     "/images/purple.avif",
//   ]; // Correct image URLs array

//   return (
//     <div className="container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white overflow-hidden">
//       <div className="relative h-[500px] md:h-[716px] overflow-hidden">
//         <div className="absolute top-0 left-0 flex w-[300%] h-full animation-slide">
//           {images.map((src, index) => (
//             <div
//               key={index}
//               className="w-full h-full flex-shrink-0 relative"
//               style={{ flexBasis: "100%" }}
//             >
//               <Image
//                 src={src}
//                 alt={`Hero Image ${index + 1}`}

//                 className="absolute object-cover "height={300} width={1500}
//               />
//             </div>
//           ))}
//         </div>

//         <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center text-white md:flex-row md:text-left md:px-12 md:pt-28">
//           <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start">
//             <span className="text-sm font-bold tracking-wide uppercase md:text-base text-gray-200">
//               Summer 2020
//             </span>
//             <h1 className="text-4xl font-bold leading-tight md:text-6xl text-gray-800">
//               New Collection
//             </h1>
//             <p className="max-w-md text-sm leading-6 text-gray-800 md:text-base">
//               We know how large objects will act, <br /> but things on a small scale.
//             </p>
//             <Button className="px-8 py-3 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300">
//               Shop Now
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Add styles */}
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0%);
//           }
//           33% {
//             transform: translateX(-100%);
//           }
//           66% {
//             transform: translateX(-200%);
//           }

//       `}</style>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function Hero() {
//   const images = [
//     "/images/hero.png",
//     "/images/OIP.jpeg",
//     "/images/purple.avif",
//   ]; // Correct image URLs array

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleAddToWishlist = () => {
//     alert("Added to Wishlist!");
//   };

//   return (
//     <div className="container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white overflow-hidden">
//       <div className="relative h-[500px] md:h-[716px] overflow-hidden">
//         <div className="absolute top-0 left-0 flex w-full h-full transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {images.map((src, index) => (
//             <div
//               key={index}
//               className="w-full h-full flex-shrink-0 relative"
//               style={{ flexBasis: "100%" }}
//             >
//               <Image
//                 src={src}
//                 alt={`Hero Image ${index + 1}`}
//                 className="absolute object-cover "
//                 height={300}
//                 width={1500}
//               />
//             </div>
//           ))}
//         </div>

//         <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center text-white md:flex-row md:text-left md:px-12 md:pt-28">
//           <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start">
//             <span className="text-sm font-bold tracking-wide uppercase md:text-base text-gray-200">
//               Summer 2020
//             </span>
//             <h1 className="text-4xl font-bold leading-tight md:text-6xl text-gray-800">
//               New Collection
//             </h1>
//             <p className="max-w-md text-sm leading-6 text-gray-800 md:text-base">
//               We know how large objects will act, <br /> but things on a small scale.
//             </p>
//             <Button onClick={handleAddToShoppingCart} className="px-8 py-3 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300">
//               Shop Now
//             </Button>
//             <Button onClick={handleAddToWishlist} className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300">
//               Add to Wishlist
//             </Button>
//           </div>
//         </div>

//         <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
//           <Button onClick={handlePrev} className="px-4 py-2 bg-gray-700 text-white rounded">
//             Previous
//           </Button>
//           <Button onClick={handleNext} className="px-4 py-2 bg-gray-700 text-white rounded">
//             Next
//           </Button>
//         </div>
//       </div>

//       {/* Add styles */}
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0%);
//           }
//           33% {
//             transform: translateX(-100%);
//           }
//           66% {
//             transform: translateX(-200%);
//       /div>
//   );    }
//         }
//       `}</style>
//     <
// }
"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const images = [
    "/images/hero.png",
    "/images/OIP.jpeg",
    "/images/purple.avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleAddToWishlist = () => {
    alert("Added to Wishlist!");
  };

  return (
    <div className="container mx-auto my-8 max-w-[1440px] rounded-md border border-gray-300 bg-white overflow-hidden">
      <div className="relative h-[500px] md:h-[716px] overflow-hidden">
        {/* Image Slider */}
        <div
          className="absolute top-0 left-0 flex w-full h-full transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
              style={{ flexBasis: "100%" }}
            >
              <Image
                src={src}
                alt={`Hero Image ${index + 1}`}
                className="absolute object-cover"
                height={300}
                width={1500}
                priority={index === 0} // Lazy load subsequent images
              />
            </div>
          ))}
        </div>

        {/* Text and Buttons */}
        <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center text-gray-800 md:flex-row md:text-left md:px-12 md:pt-28">
          <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start">
            <span className="text-sm font-bold tracking-wide uppercase md:text-base text-gray-500">
              Summer 2020
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              New Collection
            </h1>
            <p className="max-w-md text-sm leading-6 md:text-base">
              We know how large objects will act, <br /> but things on a small scale.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => alert("Added to Cart!")}
                className="px-8 py-3 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                aria-label="Shop Now"
              >
                Shop Now
              </Button>
              <Button
                onClick={handleAddToWishlist}
                className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                aria-label="Add to Wishlist"
              >
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
          <Button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-700 text-white rounded"
            aria-label="Previous Slide"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-700 text-white rounded"
            aria-label="Next Slide"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
