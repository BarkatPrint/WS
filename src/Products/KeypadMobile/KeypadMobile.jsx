import React, { useRef, useEffect } from "react";
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

      <button
        onClick={scrollLeft}
        className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 shadow-md z-10"
        aria-label="Scroll Left"
      >
        &#8592;
      </button>

      <button
        onClick={scrollRight}
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 shadow-md z-10"
        aria-label="Scroll Right"
      >
        &#8594;
      </button>

      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-hidden scrollbar-hide scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {keypadMobiles.map((brand) => {
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
          onClick={() => navigate("/products/keypad-phones")}
          className="underline text-blue-600 font-medium"
        >
          See All Keypad Models
        </button>
      </div>
    </div>
  );
};

export default KeypadMobile;
