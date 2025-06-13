import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "9W LED Bulb",
    quality: "High Brightness | Long Life",
    price: "₹100",
    discountedPrice: "₹60",
    images: [
      `${process.env.PUBLIC_URL}/image/LedBulb/9W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/LedBulb/9W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/LedBulb/9W/3.jpg`,
    ],
    description: "Energy efficient 9W LED bulb for home use.",
  },
  {
    id: 2,
    name: "12W LED Bulb",
    quality: "High Brightness | Long Life",
    price: "₹130",
    discountedPrice: "₹80",
    images: [
      `${process.env.PUBLIC_URL}/image/LedBulb/12W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/LedBulb/12W/2.jpg`,
    ],
    description: "Bright and reliable 12W LED bulb.",
  },
  {
    id: 3,
    name: "Rechargeable LED Bulb",
    quality: "With Battery Backup | Emergency Light",
    price: "₹200",
    discountedPrice: "₹150",
    images: [
      `${process.env.PUBLIC_URL}/image/LedBulb/Rechargeable/1.jpg`,
      `${process.env.PUBLIC_URL}/image/LedBulb/Rechargeable/2.jpg`,
    ],
    description: "Works during power cuts, includes backup battery.",
  },
];

const LedBulbPage = () => {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const pauseTimeout = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomImages, setZoomImages] = useState([]);
  const [zoomIndex, setZoomIndex] = useState(0);

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

  const stopAutoScroll = () => clearInterval(autoScrollInterval.current);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [isPaused]);

  const handleUserInteraction = () => {
    setIsPaused(true);
    stopAutoScroll();
    clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setIsPaused(false), 10000);
  };

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    handleUserInteraction();
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    handleUserInteraction();
  };

  const calculateDiscount = (originalPrice, price) => {
    const original = parseInt(originalPrice.replace("₹", ""));
    const current = parseInt(price.replace("₹", ""));
    return Math.round(((original - current) / original) * 100);
  };

  const openZoomModal = (images, index) => {
    setZoomImages(images);
    setZoomIndex(index);
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00292d]">
        LED Bulbs
      </h2>

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

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4 pb-4 snap-x snap-mandatory"
        onClick={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onMouseDown={handleUserInteraction}
      >
        {products.map((item) => {
          const discount = calculateDiscount(item.price, item.discountedPrice);

          return (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] sm:w-[200px] bg-white shadow rounded-xl snap-start relative"
            >
              <div className="w-full h-36 sm:h-40 overflow-hidden rounded-t-xl bg-gray-50 flex">
                {item.images.slice(0, 3).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => openZoomModal(item.images, i)}
                    alt={item.name}
                    className="w-full object-cover cursor-pointer"
                  />
                ))}
              </div>

              <div className="p-3 flex flex-col items-center text-center">
                <h3 className="font-semibold text-sm text-gray-800">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600">{item.description}</p>
                <div className="my-1 text-sm">
                  <span className="text-gray-500 line-through mr-1">
                    {item.price}
                  </span>
                  <span className="text-green-600 font-bold">
                    {item.discountedPrice}
                  </span>
                </div>
                <div className="text-xs font-semibold text-red-600">
                  {discount}% OFF
                </div>
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
      {zoomImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setZoomImages([])}
            className="absolute top-4 right-4 text-white bg-red-600 px-3 py-1 rounded"
          >
            Close
          </button>
          <button
            onClick={() =>
              setZoomIndex((prev) => (prev - 1 + zoomImages.length) % zoomImages.length)
            }
            className="absolute left-5 text-white text-2xl"
          >
            ‹
          </button>
          <img
            src={zoomImages[zoomIndex]}
            alt="Zoomed"
            className="max-h-[90%] max-w-[90%] object-contain"
          />
          <button
            onClick={() => setZoomIndex((prev) => (prev + 1) % zoomImages.length)}
            className="absolute right-5 text-white text-2xl"
          >
            ›
          </button>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default LedBulbPage;
