import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const brands = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 139900,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SX679_.jpg",
  },
  {
    id: 2,
    name: "Vivo V29e",
    price: 26999,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/71U+z0HnYzL._AC_SX679_.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy S21 FE",
    price: 49999,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/71w8Y9s0z2L._AC_SX679_.jpg",
  },
  {
    id: 4,
    name: "Redmi Note 13",
    price: 17999,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/71vNgTH5VFL._AC_SX679_.jpg",
  },
  {
    id: 5,
    name: "Realme Narzo 60",
    price: 17999,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_SX679_.jpg",
  },
  {
    id: 6,
    name: "Oppo Reno 10",
    price: 32999,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/71Zy7cG1GkL._AC_SX679_.jpg",
  },
  {
    id: 7,
    name: "Motorola G73",
    price: 18999,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/71w3xDk+H1L._AC_SX679_.jpg",
  },
  {
    id: 8,
    name: "OnePlus Nord 3",
    price: 33999,
    discount: 10,
    image: "https://m.media-amazon.com/images/I/61abLrCf3PL._AC_SX679_.jpg",
  },
];

const AllMobile = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const CARD_WIDTH = 192; // 48 * 4 px (w-48 in Tailwind)
  const SCROLL_AMOUNT = 2 * CARD_WIDTH; // 2 cards per slide

  const handleBuyNow = (brand) => {
    const discountedPrice = Math.round(
      brand.price - (brand.price * brand.discount) / 100
    );
    const message = `*Order Details:*\nMobile: ${brand.name}\nOriginal Price: ₹${brand.price}\nDiscount: ${brand.discount}%\nFinal Price: ₹${discountedPrice}`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    if (sliderRef.current.scrollLeft === 0) {
      // Jump to end if at start
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollWidth,
        behavior: "smooth",
      });
    } else {
      sliderRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    if (
      sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
      sliderRef.current.scrollWidth
    ) {
      // Jump to start if at end
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      if (
        sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
        sliderRef.current.scrollWidth
      ) {
        // Jump back to start
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 relative">
      <h2 className="text-3xl font-bold mb-4">📱 Popular Mobile Brands</h2>

      {/* Left button */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 shadow-md z-10 select-none"
        aria-label="Scroll Left"
      >
        &#8592;
      </button>

      {/* Right button */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 shadow-md z-10 select-none"
        aria-label="Scroll Right"
      >
        &#8594;
      </button>

      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-hidden scrollbar-hide scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {brands.map((brand) => {
          const discountedPrice = Math.round(
            brand.price - (brand.price * brand.discount) / 100
          );
          return (
            <div
              key={brand.id}
              className="flex-shrink-0 w-48 border rounded-lg shadow p-2 flex flex-col items-center scroll-snap-align-start"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-24 h-32 object-cover rounded-md mb-2"
              />
              <div className="text-sm font-semibold text-center mb-1">
                {brand.name}
              </div>

              <div className="flex justify-between w-full px-1 mb-1">
                <span className="font-bold text-gray-700 text-sm line-through">
                  ₹{brand.price}
                </span>
                <span className="font-bold text-red-600 text-sm">
                  {brand.discount}% OFF
                </span>
              </div>

              <div className="w-full text-left px-1">
                <span className="text-green-600 font-bold text-base">
                  ₹{discountedPrice}
                </span>
              </div>

              <button
                onClick={() => handleBuyNow(brand)}
                className="mt-3 w-full bg-green-600 text-white py-1 rounded text-sm hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/products/mobile-phones")}
          className="underline text-blue-600 font-medium"
        >
          See All Mobile Models
        </button>
      </div>
    </div>
  );
};

export default AllMobile;
