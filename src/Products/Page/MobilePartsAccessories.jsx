import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const accessories = [
  {
    id: 1,
    name: "Memory Card (8GB)",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-8GB.jpg`,
    ],
    originalPrice: "₹250",
    price: "₹180",
  },
  {
    id: 2,
    name: "Memory Card (16GB)",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-16GB.jpg`,
    ],
    originalPrice: "₹300",
    price: "₹220",
  },
  {
    id: 3,
    name: "Memory Card (4GB SanDisk)",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-4GB.jpg`,
    ],
    originalPrice: "₹200",
    price: "₹150",
  },
  {
    id: 4,
    name: "Memory Card (128GB)",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-128GB.jpg`,
    ],
    originalPrice: "₹600",
    price: "₹450",
  },
  {
    id: 5,
    name: "Pendrive 16GB",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/pendrive.jpg`,
    ],
    originalPrice: "₹500",
    price: "₹250",
  },
  {
    id: 6,
    name: "SIM Tray",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/simtray.jpg`,
    ],
    originalPrice: "₹120",
    price: "₹80",
  },
  {
    id: 7,
    name: "SIM Tray (Type 2)",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/simtray2.jpg`,
    ],
    originalPrice: "₹150",
    price: "₹100",
  },
  {
    id: 8,
    name: "Micro USB Data Cable",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/new/micro-usb-cable.jpg`,
    ],
    originalPrice: "₹80",
    price: "₹50",
  },
  {
    id: 9,
    name: "8K HDMI Male to Male Adapter",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/new/hdmi-8k-adapter.jpg`,
    ],
    originalPrice: "₹150",
    price: "₹100",
  },
  {
    id: 10,
    name: "A.M.R Gold OTG Cloth Wire (10pcs Pack)",
    model: "Imported Metal OTG",
    quality: "Cloth wire | Metal build | Pata packing",
    variants: [
      { type: "V8", price: "₹30" },
      { type: "Type-C", price: "₹40" }
    ],
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/new/amr-gold-otg.jpg`,
    ],
    description: "Imported A.M.R Gold OTG with strong cloth wire and durable metal connector. 10pcs pata packing.",
  },
  {
    id: 11,
    name: "Mic Piece",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/mic.jpg`,
    ],
    originalPrice: "₹80",
    price: "₹50",
  },
  {
    id: 12,
    name: "Patta",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/patta.jpg`,
    ],
    originalPrice: "₹200",
    price: "₹150",
  },
  {
    id: 13,
    name: "Charging Board",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/chargingboard.jpg`,
    ],
    originalPrice: "₹350",
    price: "₹250",
  },
  {
    id: 14,
    name: "Samsung A06 Board",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/board.jpg`,
    ],
    originalPrice: "₹500",
    price: "₹350",
  },
  {
    id: 15,
    name: "Charging Pin Set",
    images: [
      `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/chargerpin.jpg`,
    ],
    originalPrice: "₹50",
    price: "₹10",
  },
];


const AccessoriesPage = () => {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const pauseTimeout = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (images) => {
    setActiveImages(images);
    setCurrentImageIndex(0);
    setModalOpen(true);
    setIsPaused(true);
    stopAutoScroll();
  };

  const closeImageModal = () => {
    setModalOpen(false);
    setActiveImages([]);
    setIsPaused(false);
    startAutoScroll();
  };

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
  }, []);

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

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === activeImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00292d]">
        Mobile Accessories & Parts
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
        {accessories.map((item) => {
          const discount = calculateDiscount(item.originalPrice, item.price);
          return (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] sm:w-[200px] bg-white shadow rounded-xl snap-start"
            >
              <div
                className="w-full h-36 sm:h-40 overflow-hidden rounded-t-xl bg-gray-50 cursor-pointer"
                onClick={() => openImageModal(item.images)}
              >
                <img
                  src={item.images[0]}
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
                <div className="text-xs font-semibold text-red-600">
                  {discount}% OFF
                </div>
                <button
                  onClick={() => handleBuyNow(item.name, item.price)}
                  className="mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded text-sm"
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="text-lg font-semibold text-gray-600 bg-yellow-100 inline-block px-6 py-3 rounded-lg shadow-sm">
          🚧 Other mobile parts are coming soon. Stay tuned!
        </p>
      </div>

      {/* Full Screen Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FaTimes />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-4 text-white text-3xl"
          >
            <FaChevronLeft />
          </button>

          <img
            src={activeImages[currentImageIndex]}
            alt="Zoom"
            className="max-h-[80vh] max-w-full object-contain rounded"
          />

          <button
            onClick={handleNextImage}
            className="absolute right-4 text-white text-3xl"
          >
            <FaChevronRight />
          </button>
        </div>
      )}

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
