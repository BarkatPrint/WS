import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const accessories = [
  {
    id: 1,
    name: "Memory Card (8GB)",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-8GB.jpg`,
    originalPrice: "₹200",
    price: "₹150",
  },
  {
    id: 2,
    name: "Memory Card (16GB)",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-16GB.jpg`,
    originalPrice: "₹250",
    price: "₹200",
  },
  {
    id: 3,
    name: "Memory Card (4GB SanDisk)",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-4GB.jpg`,
    originalPrice: "₹150",
    price: "₹120",
  },
  {
    id: 4,
    name: "Samsung A06 Board",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/board.jpg`,
    originalPrice: "₹300",
    price: "₹250",
  },
  {
    id: 5,
    name: "Charging Pin Set",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/chargerpin.jpg`,
    originalPrice: "₹80",
    price: "₹50",
  },
  {
    id: 6,
    name: "Memory Card (128GB)",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-128GB.jpg`,
    originalPrice: "₹600",
    price: "₹450",
  },
  {
    id: 7,
    name: "Mic Piece",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/mic.jpg`,
    originalPrice: "₹30",
    price: "₹20",
  },
  {
    id: 8,
    name: "Patta",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/patta.jpg`,
    originalPrice: "₹80",
    price: "₹60",
  },
  {
    id: 10,
    name: "Pendrive 16GB",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/pendrive.jpg`,
    originalPrice: "₹350",
    price: "₹250",
  },
  {
    id: 11,
    name: "SIM Tray",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/simtray.jpg`,
    originalPrice: "₹50",
    price: "₹30",
  },
  {
    id: 12,
    name: "SIM Tray (Type 2)",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/simtray2.jpg`,
    originalPrice: "₹60",
    price: "₹35",
  },
  {
  id: 13,
  name: "Charging Board",
  image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/chargingboard.jpg`,
  originalPrice: "₹150",
  price: "₹100",
},
];

const AccessoriesPage = () => {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const pauseTimeout = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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
    }, 10000); // resume after 10 seconds
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

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00292d]">
        Mobile Accessories & Parts
      </h2>

      {/* Scroll Buttons */}
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
        {accessories.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] sm:w-[200px] bg-white shadow rounded-xl snap-start"
          >
            <div className="w-full h-36 sm:h-40 overflow-hidden rounded-t-xl bg-gray-50">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 flex flex-col items-center text-center">
              <h3 className="font-semibold text-sm text-gray-800">
                {item.name}
              </h3>
              <div className="my-1 text-sm">
                <span className="text-gray-500 line-through mr-1">
                  {item.originalPrice}
                </span>
                <span className="text-green-600 font-bold">{item.price}</span>
              </div>
              <button
                onClick={() => handleBuyNow(item.name, item.price)}
                className="mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded text-sm"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-lg font-semibold text-gray-600 bg-yellow-100 inline-block px-6 py-3 rounded-lg shadow-sm">
          🚧 Other mobile parts are coming soon. Stay tuned!
        </p>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AccessoriesPage;
