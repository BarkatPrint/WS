import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Micro USB Cable",
    model: "Micro USB",
    quality: "Compatible | Fast Charging",
    price: "₹60",
    discountedPrice: "₹40",
    images: [`${process.env.PUBLIC_URL}/image/DataCable/1.jpeg`],
    description: "Good quality micro USB cable.",
  },
  {
    id: 2,
    name: "Type-C Cable",
    model: "Type-C",
    quality: "Compatible | Fast Charging",
    price: "₹70",
    discountedPrice: "₹50",
    images: [`${process.env.PUBLIC_URL}/image/DataCable/4.jpg`],
    description: "Durable Type-C fast charging cable.",
  },
  {
    id: 3,
    name: "iPhone Cable",
    model: "iPhone Lightning",
    quality: "Compatible | Fast Charging",
    price: "₹100",
    discountedPrice: "₹70",
    images: [`${process.env.PUBLIC_URL}/image/DataCable/iPhoneCable.jpg`],
    description: "Reliable iPhone lightning cable with fast charging support.",
  },
  {
    id: 4,
    name: "Original Micro USB Cable",
    model: "Micro USB",
    quality: "Original | 6 Month Warranty",
    price: "₹150",
    discountedPrice: "₹100",
    images: [`${process.env.PUBLIC_URL}/image/DataCable/Original-MicroUSB.jpg`],
    description: "Original micro USB cable with 6-month warranty.",
  },
  {
    id: 5,
    name: "Original Type-C Cable",
    model: "Type-C",
    quality: "Original | 6 Month Warranty",
    price: "₹180",
    discountedPrice: "₹120",
    images: [`${process.env.PUBLIC_URL}/image/DataCable/5.jpg`],
    description: "Original Type-C cable with fast charging and 6-month warranty.",
  },
  {
    id: 6,
    name: "Original iPhone Cable",
    model: "iPhone Lightning",
    quality: "Original | 6 Month Warranty",
    price: "₹250",
    discountedPrice: "₹150",
    images: [`${process.env.PUBLIC_URL}/image/DataCable/Orignal-iPhoneCable.jpg`],
    description: "Original iPhone lightning cable with 6-month warranty.",
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
        Mobile Data Cable
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
