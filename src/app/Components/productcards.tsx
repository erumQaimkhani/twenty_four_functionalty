
import Image from "next/image";

type Card = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  originalPrice: string;
  discountedPrice: string;
};

const ProductCards: React.FC = () => {
  const cards: Card[] = [
    {
      id: 1,
      image: "/images/product1.png",
      title: "Graphic Design",
      subtitle: "Department 1",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 2,
      image: "/images/product2.png",
      title: "Graphic Design",
      subtitle: "Department 1",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 3,
      image: "/images/product3.png",
      title: "Graphic Design",
      subtitle: "Department 1",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 4,
      image: "/images/product4.png",
      title: "Graphic Design",
      subtitle: "Department 1",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 5,
      image: "/images/product5.png",
      title: "Graphic Design",
      subtitle: "Department 1",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cards.slice(0, 4).map((card) => (
        <div
          key={card.id}
          className="relative flex flex-col items-center p-3 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          {/* Image with hover effect */}
          <div className="relative group w-full h-96 overflow-hidden rounded-md">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 1100vw, 1000vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-lg">Open</span>
            </div>
          </div>

          {/* Product Title */}
          <span className="text-center font-bold text-lg mt-3">{card.title}</span>

          {/* Product Subtitle */}
          <span className="text-center text-sm text-gray-500">{card.subtitle}</span>

          {/* Pricing */}
          <div className="flex justify-center gap-2 mt-2">
            <span className="text-xs line-through text-gray-500">
              {card.originalPrice}
            </span>
            <span className="text-xs text-green-600">{card.discountedPrice}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
