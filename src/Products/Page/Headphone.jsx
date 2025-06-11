
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Stereo Wired Earphones",
    model: "SWE-2025",
    type: "Wired",
    quality: "Clear vocals with balanced bass",
    price: "₹60",
    discountedPrice: "₹40",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/Local/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Local/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Local/3.jpg`,
    ],
    description: "Comfortable in-ear design with mic for calls and music.",
  },
  {
    id: 2,
    name: "Wireless/Neckband Bluetooth",
    model: "WBH-A7",
    type: "Wireless",
    quality: "Bluetooth 5.0 with clear sound",
    price: "₹500",
    discountedPrice: "₹250",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/Bluetooth Hadphone/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Bluetooth Hadphone/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Bluetooth Hadphone/3.jpg`,
    ],
    description: "Wireless freedom with powerful audio.",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    model: "GH-500",
    type: "Wireless",
    quality: "High performance for gaming",
    price: "₹500",
    discountedPrice: "₹300",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/Ear Bluetooth/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Ear Bluetooth/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Ear Bluetooth/3.jpg`,
    ],
    description: "Crystal-clear sound with mic for gaming.",
  },
  {
    id: 4,
    name: "Advanced Wireless Neckband Bluetooth",
    model: "WBH-ProX9",
    type: "Wireless",
    quality: "HD stereo sound with noise cancellation",
    price: "₹2200",
    discountedPrice: "₹1550",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/AdvancedWirelessNeckbandBluetooth/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/AdvancedWirelessNeckbandBluetooth/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/AdvancedWirelessNeckbandBluetooth/3.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/AdvancedWirelessNeckbandBluetooth/4.jpg`,
    ],
    description: "Premium neckband with magnetic earbuds, deep bass, voice assistant support, and 20-hour battery life."
  },
  {
    id: 5,
    name: "Pro Wireless Earbuds",
    model: "GH-ProBudsX",
    type: "Wireless",
    quality: "ENC mic with low-latency and rich bass",
    price: "₹2500",
    discountedPrice: "₹1599",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/ProWirelessEarbuds/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/ProWirelessEarbuds/2.jpg`,
    ],
    description: "True wireless earbuds with touch control, fast charging, IPX5 water resistance, and up to 30 hours playtime."
  },
];
const AccessoriesPage = () => {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const pauseTimeout = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);

  const handleBuyNow = (name, price) => {
    const message = `Hello, I want to buy ${name} for ${price}.`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      if (scrollRef.current && !isPaused) {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [isPaused]);

  const handleUserInteraction = () => {
    setIsPaused(true);
    stopAutoScroll();
    clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      handleUserInteraction();
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      handleUserInteraction();
    }
  };

  const calculateDiscount = (originalPrice, price) => {
    const original = parseInt(originalPrice.replace("₹", ""));
    const current = parseInt(price.replace("₹", ""));
    const discount = Math.round(((original - current) / original) * 100);
    return discount;
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00292d]">
        HeadPhone
      </h2>

      {/* Arrows */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
        onClick={handleScrollLeft}
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
        onClick={handleScrollRight}
      >
        <FaChevronRight size={20} />
      </button>

      {/* Scrollable Product List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4 pb-4 snap-x snap-mandatory"
        onClick={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onMouseDown={handleUserInteraction}
      >
        {products.map((item) => {
          const discount = calculateDiscount(item.price, item.discountedPrice);
          const isOriginal = item.quality?.toLowerCase().includes("original");

          return (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] sm:w-[200px] bg-white shadow rounded-xl snap-start relative"
            >
              {/* Original Badge */}
              {isOriginal && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-[2px] rounded-full shadow">
                  6 MONTH WARRANTY
                </div>
              )}

              {/* Product Image */}
              <div
                className="w-full h-36 sm:h-40 overflow-hidden rounded-t-xl bg-gray-50 cursor-pointer"
                onClick={() => setZoomImage(item.images[0])}
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 flex flex-col items-center text-center">
                <h3 className="font-semibold text-sm text-gray-800">{item.name}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
                <div className="my-1 text-sm">
                  <span className="text-gray-500 line-through mr-1">{item.price}</span>
                  <span className="text-green-600 font-bold">{item.discountedPrice}</span>
                </div>
                <div className="text-xs font-semibold text-red-600">{discount}% OFF</div>
                <button
                  onClick={() => handleBuyNow(item.name, item.discountedPrice)}
                  className="mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded text-sm"
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoomed"
            className="max-h-[90%] max-w-[90%] object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white bg-red-600 px-3 py-1 rounded"
            onClick={() => setZoomImage(null)}
          >
            Close
          </button>
        </div>
      )}

      {/* Hide Scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default AccessoriesPage;
