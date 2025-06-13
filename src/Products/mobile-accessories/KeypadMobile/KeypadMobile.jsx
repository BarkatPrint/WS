import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const keypadMobiles = [
  {
    id: 1,
    name: "Nokia 105",
    price: 1499,
    discount: 10,
    image: `${process.env.PUBLIC_URL}/image/Mobile/KeypadMobile/Nokia-105.jpg`,
  },
  {
    id: 2,
    name: "Lava A1",
    price: 1399,
    discount: 15,
    image: `${process.env.PUBLIC_URL}/image/Mobile/KeypadMobile/Lava-A1.jpg`,
  },
  {
    id: 3,
    name: "Micromax X412",
    price: 1299,
    discount: 20,
    image: `${process.env.PUBLIC_URL}/image/Mobile/KeypadMobile/Micromax-X412.jpg`,
  },
  {
    id: 4,
    name: "Itel It5026",
    price: 1199,
    discount: 10,
    image: `${process.env.PUBLIC_URL}/image/Mobile/KeypadMobile/Itel-It5026.jpg`,
  },
  {
    id: 5,
    name: "Samsung Guru Music 2",
    price: 1890,
    discount: 5,
    image: `${process.env.PUBLIC_URL}/image/Mobile/KeypadMobile/Samsung-Guru-Music-2.jpg`,
  },
  {
    id: 6,
    name: "Karbonn K9",
    price: 1290,
    discount: 15,
    image: `${process.env.PUBLIC_URL}/image/Mobile/KeypadMobile/Karbonn-K9.jpg`,
  },
];

const KeypadMobile = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const CARD_WIDTH = 192;
  const SCROLL_AMOUNT = 2 * CARD_WIDTH;

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
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      if (
        sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
        sliderRef.current.scrollWidth
      ) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 relative">
      <h2 className="text-3xl font-bold mb-4">📞 Popular Keypad Mobiles</h2>

      {/* ⬅️ Scroll Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 shadow-md z-10"
        aria-label="Scroll Left"
      >
        &#8592;
      </button>

      {/* ➡️ Scroll Right Button */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 shadow-md z-10"
        aria-label="Scroll Right"
      >
        &#8594;
      </button>

      {/* 🖼️ Product Slider */}
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-hidden scrollbar-hide scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {keypadMobiles.map((brand, index) => {
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
                className="w-24 h-32 object-cover rounded-md mb-2 cursor-pointer"
                onClick={() => setZoomedIndex(index)}
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

      {/* 🖼️ Fullscreen Zoom Modal with Close and Navigation */}
      {zoomedIndex !== null && (
        <div
          onClick={() => setZoomedIndex(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          {/* ❌ Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomedIndex(null);
            }}
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-red-600 rounded-full px-3 py-1 hover:bg-red-700 shadow-lg"
            aria-label="Close"
          >
            ×
          </button>

          {/* ← Left Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomedIndex((prev) =>
                prev > 0 ? prev - 1 : keypadMobiles.length - 1
              );
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
          >
            ‹
          </button>

          {/* Zoomed Image */}
          <img
            src={keypadMobiles[zoomedIndex].image}
            alt="Zoomed"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
          />

          {/* → Right Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomedIndex((prev) =>
                prev < keypadMobiles.length - 1 ? prev + 1 : 0
              );
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default KeypadMobile;
