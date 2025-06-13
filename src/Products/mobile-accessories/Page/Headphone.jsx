import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

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
      `${process.env.PUBLIC_URL}/image/Headphone/Local/4.jpg`,
    ],
    description: "Comfortable in-ear design with mic for calls and music.",
    backupTime: "Not applicable (Wired)"
  },
  {
    id: 2,
    name: "Stereo Wired Earphones",
    model: "SWE-2025-Pro",
    type: "Wired",
    quality: "Enhanced sound for bass lovers",
    price: "₹120",
    discountedPrice: "₹100",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/Local100/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Local100/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Local100/3.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Local100/4.jpg`,
    ],
    description: "Budget-friendly wired earphones with mic.",
    backupTime: "Not applicable (Wired)"
  },
  {
    id: 3,
    name: "Stereo Wired Earphones Premium",
    model: "SWE-2025-Max",
    type: "Wired",
    quality: "Deep bass with premium mic",
    price: "₹180",
    discountedPrice: "₹150",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/Local150/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Local150/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Local150/3.jpg`,
    ],
    description: "Premium sound quality for music and calls.",
    backupTime: "Not applicable (Wired)"
  },
  {
    id: 4,
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
    backupTime: "8–10 hours"
  },
  {
    id: 5,
    name: "Wireless Bluetooth Neckband",
    model: "WBH-A10",
    type: "Wireless",
    quality: "Heavy bass with voice assistant",
    price: "₹650",
    discountedPrice: "₹350",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/Neckband1/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Neckband1/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Neckband1/3.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Neckband1/4.jpg`,
    ],
    description: "Deep bass Bluetooth neckband with vibration alert.",
    backupTime: "10–12 hours"
  },
  {
    id: 6,
    name: "Magnetic Bluetooth Neckband",
    model: "WBH-MagX",
    type: "Wireless",
    quality: "Magnetic buds, clear vocals",
    price: "₹700",
    discountedPrice: "₹399",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/Neckband2/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Neckband2/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Neckband2/3.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Neckband2/4.jpg`,
    ],
    description: "Stylish and durable magnetic neckband.",
    backupTime: "12 hours"
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    model: "GH-500",
    type: "Wireless",
    quality: "High performance for gaming",
    price: "₹800",
    discountedPrice: "₹500",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/Ear Bluetooth/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Ear Bluetooth/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Ear Bluetooth/3.jpg`,
    ],
    description: "Crystal-clear sound with mic for gaming.",
    backupTime: "15–18 hours with case"
  },
  {
    id: 8,
    name: "Airdopes Wireless Earbuds",
    model: "Airdopes 131",
    type: "Wireless",
    quality: "Bass boosted sound with touch controls",
    price: "₹900",
    discountedPrice: "₹600",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/Airdopes/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Airdopes/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/Airdopes/3.jpg`,
    ],
    description: "Airdopes with smooth connectivity, voice assistant support, and quick charging.",
    backupTime: "18–20 hours with charging case"
  },
  {
    id: 9,
    name: "Airdopes TWS Earbuds",
    model: "TWS-Pro310",
    type: "Wireless",
    quality: "Dual mic with rich bass & touch control",
    price: "₹1100",
    discountedPrice: "₹700",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/TWS1/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/TWS1/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/TWS1/3.jpg`,
    ],
    description: "Perfect fit earbuds for gaming and music with long battery life.",
    backupTime: "22 hours with charging case"
  },
  {
    id: 10,
    name: "Airdopes BassX Earbuds",
    model: "BassX100",
    type: "Wireless",
    quality: "Heavy bass with soft-touch controls",
    price: "₹1300",
    discountedPrice: "₹750",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/TWS2/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/TWS2/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/TWS2/3.jpg`,
    ],
    description: "Deep bass earbuds, secure fit, and fast charging support.",
    backupTime: "20–22 hours with case"
  },
  {
    id: 11,
    name: "Airdopes Lite Edition",
    model: "LitePods-2024",
    type: "Wireless",
    quality: "Affordable gaming-ready earbuds",
    price: "₹1000",
    discountedPrice: "₹599",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/TWS3/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/TWS3/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/TWS3/3.jpg`,
    ],
    description: "Best budget earbuds with smooth Bluetooth 5.1 connectivity.",
    backupTime: "16–18 hours"
  },
  {
    id: 12,
    name: "Wireless Earbuds",
    model: "GH-500",
    type: "Wireless",
    quality: "High performance for gaming",
    price: "₹2500",
    discountedPrice: "₹1200",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/new/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/new/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/new/3.jpg`,
    ],
    description: "*BOAT / REALME / ONEPLUS AIRBUDS 310 AVAILABLE ₹500 *",
    backupTime: "20 hours with charging case"
  },
  {
    id: 13,
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
    description: "Premium neckband with magnetic earbuds, deep bass, voice assistant support, and 20-hour battery life.",
    backupTime: "20 hours"
  },
  {
    id: 14,
    name: "Pro Wireless Earbuds",
    model: "GH-ProBudsX",
    type: "Wireless",
    quality: "ENC mic with low-latency and rich bass",
    price: "₹2500",
    discountedPrice: "₹1599",
    images: [
      `${process.env.PUBLIC_URL}/image/Headphone/ProWirelessEarbuds/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/ProWirelessEarbuds/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Headphone/ProWirelessEarbuds/3.jpg`,
    ],
    description: "True wireless earbuds with touch control, fast charging, IPX5 water resistance, and up to 30 hours playtime.",
    backupTime: "30 hours with case"
  }
];



const AccessoriesPage = () => {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const pauseTimeout = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [zoomImages, setZoomImages] = useState([]);
  const [currentZoomIndex, setCurrentZoomIndex] = useState(0);

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
    setCurrentZoomIndex(index);
  };

  const nextImage = () => {
    setCurrentZoomIndex((prev) => (prev + 1) % zoomImages.length);
  };

  const prevImage = () => {
    setCurrentZoomIndex((prev) =>
      prev === 0 ? zoomImages.length - 1 : prev - 1
    );
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
              {isOriginal && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-[2px] rounded-full shadow">
                  6 MONTH WARRANTY
                </div>
              )}

              {/* Product Image */}
              <div
                className="w-full h-36 sm:h-40 overflow-hidden rounded-t-xl bg-gray-50 cursor-pointer"
                onClick={() => openZoomModal(item.images, 0)}
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

      {/* Zoom Modal with navigation */}
      {zoomImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <div className="relative w-full max-w-4xl flex items-center justify-center">
            <button
              onClick={prevImage}
              className="absolute left-4 text-white text-3xl z-10"
            >
              <FaChevronLeft />
            </button>
            <img
              src={zoomImages[currentZoomIndex]}
              alt="Zoomed"
              className="max-h-[90vh] object-contain"
            />
            <button
              onClick={nextImage}
              className="absolute right-4 text-white text-3xl z-10"
            >
              <FaChevronRight />
            </button>
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-white bg-opacity-30 rounded-full p-1"
              onClick={() => setZoomImages([])}
            >
              <IoMdClose />
            </button>
          </div>
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
