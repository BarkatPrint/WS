

import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AccessoriesPage = () => {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const pauseTimeout = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [cart, setCart] = useState([]);
  const [zoomItem, setZoomItem] = useState(null);
  const [zoomImageIndex, setZoomImageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

   const chargerProducts = [
  {
    id: 1,
    name: "1.5A Regular Charger",
    price: "₹60",
    discountedPrice: "₹40",
    brand: "Generic",
    quality: "Compatible",
    word: "1.5A",
    description: "Standard 1.5A charger suitable for basic mobile phones and low-power devices. Economical and reliable.",
    
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/1.5A/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/1.5A/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/1.5A/3.jpg`,
    ],
  },
  {
    id: 2,
    name: "10W USB Charger",
    price: "₹120",
    discountedPrice: "₹80",
    brand: "Samsung",
    quality: "Original Compatible",
    word: "10W",
    description: "Reliable 10W USB charger compatible with Samsung and other Android devices. Safe charging experience.",
    warranty: "6 MONTH WARRANTY",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/10W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/10W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/10W/3.jpg`,
    ],
  },
  {
    id: 3,
    name: "20W Fast Charger",
    price: "₹350",
    discountedPrice: "₹249",
    brand: "Apple",
    quality: "Original Compatible",
    word: "20W",
    description: "20W PD charger for fast-charging Apple iPhones and other Type-C enabled devices. Compact and efficient.",
    warranty: "6 MONTH WARRANTY",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/20W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/20W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/20W/3.jpg`,
    ],
  },
  {
    id: 4,
    name: "33W Dart Charger",
    price: "₹500",
    discountedPrice: "₹329",
    brand: "Realme",
    quality: "Original Compatible",
    word: "33W",
    description: "Realme Dart 33W charger with VOOC flash charge support for ultra-fast, safe charging.",
    warranty: "6 MONTH WARRANTY",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/33W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/33W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/33W/3.jpg`,
    ],
  },
  {
    id: 5,
    name: "44W Flash Charger",
    price: "₹700",
    discountedPrice: "₹499",
    brand: "Vivo",
    quality: "Original Compatible",
    word: "44W",
    description: "High-speed Vivo 44W charger designed for smartphones that support flash charging. Includes Type-C support.",
    warranty: "6 MONTH WARRANTY",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/44W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/44W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/44W/3.jpg`,
    ],
  },
  {
    id: 6,
    name: "45W Type-C PD Charger",
    price: "₹850",
    discountedPrice: "₹599",
    brand: "Samsung",
    quality: "Original Compatible",
    word: "45W",
    description: "Samsung 45W USB-C Super Fast Charging adapter for supported smartphones, tablets, and laptops.",
    warranty: "6 MONTH WARRANTY",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/45W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/45W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/45W/3.jpg`,
    ],
  },
  {
    id: 7,
    name: "65W SuperVooc Charger",
    price: "₹999",
    discountedPrice: "₹699",
    brand: "Oppo",
    quality: "Original Compatible",
    word: "65W",
    description: "Oppo 65W SuperVooc charger delivers rapid charge support for VOOC/Flash-enabled smartphones.",
    warranty: "6 MONTH WARRANTY",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/65W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/65W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/65W/3.jpg`,
    ],
  },
  {
    id: 8,
    name: "85W Type-C Laptop Charger",
    price: "₹1400",
    discountedPrice: "₹1099",
    brand: "Apple",
    quality: "Original Compatible",
    word: "85W",
    description: "Powerful 85W Type-C charger suitable for MacBooks and USB-C laptops. Compact design with high safety.",
    warranty: "6 MONTH WARRANTY",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/85W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/85W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/85W/3.jpg`,
    ],
  },
];


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

  const calculateDiscount = (originalPrice, price) => {
    const original = parseInt(originalPrice.replace("₹", ""));
    const current = parseInt(price.replace("₹", ""));
    return Math.round(((original - current) / original) * 100);
  };

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    handleUserInteraction();
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    handleUserInteraction();
  };

  const handleImageChange = (id, direction) => {
    setCurrentImageIndex((prev) => {
      const current = prev[id] || 0;
      const total = chargerProducts.find((p) => p.id === id).images.length;
      const nextIndex = direction === "left" ? (current - 1 + total) % total : (current + 1) % total;
      return { ...prev, [id]: nextIndex };
    });
  };

  const openZoom = (product) => {
    setZoomItem(product);
    setZoomImageIndex(0);
  };

  const navigateZoom = (direction) => {
    if (!zoomItem) return;
    const total = zoomItem.images.length;
    const newIndex = direction === "left"
      ? (zoomImageIndex - 1 + total) % total
      : (zoomImageIndex + 1) % total;
    setZoomImageIndex(newIndex);
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00292d]">Mobile Charger</h2>

      <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200" onClick={handleScrollLeft}>
        <FaChevronLeft size={20} />
      </button>
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200" onClick={handleScrollRight}>
        <FaChevronRight size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4 pb-4 snap-x snap-mandatory"
        onClick={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onMouseDown={handleUserInteraction}
      >
        {chargerProducts.map((item) => {
          const discount = calculateDiscount(item.price, item.discountedPrice);
          const imageIndex = currentImageIndex[item.id] || 0;

          return (
            <div key={item.id} className="flex-shrink-0 w-[180px] sm:w-[200px] bg-white shadow rounded-xl snap-start relative">
              <div className="relative w-full h-36 sm:h-40 overflow-hidden rounded-t-xl bg-gray-50">
                <img
                  src={item.images[imageIndex]}
                  alt={item.name}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openZoom(item)}
                />
                {item.images.length > 1 && (
                  <>
                    <button className="absolute left-1 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-1 text-xs" onClick={() => handleImageChange(item.id, "left")}>
                      <FaChevronLeft />
                    </button>
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-1 text-xs" onClick={() => handleImageChange(item.id, "right")}>
                      <FaChevronRight />
                    </button>
                  </>
                )}
               {item.warranty && (
  <span className="absolute top-1 left-1 bg-red-600 text-white text-[10px] px-2 py-[2px] rounded-full shadow">
    {item.warranty}
  </span>
)}
              </div>

              <div className="p-3 flex flex-col items-center text-center">
                <h3 className="font-semibold text-sm text-gray-800">{item.name}</h3>
                <div className="my-1 text-sm">
                  <span className="text-gray-500 line-through mr-1">{item.price}</span>
                  <span className="text-green-600 font-bold">{item.discountedPrice}</span>
                </div>
                <div className="text-xs font-semibold text-red-600">{discount}% OFF</div>
                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                <button
                  onClick={() => handleBuyNow(item.name, item.discountedPrice)}
                  className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-xs mt-2"
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Zoom Modal */}
      {zoomItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            onClick={() => navigateZoom("left")}
          >
            <FaChevronLeft />
          </button>
          <img
            src={zoomItem.images[zoomImageIndex]}
            alt="Zoomed"
            className="max-h-[90%] max-w-[90%] object-contain"
          />
          <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            onClick={() => navigateZoom("right")}
          >
            <FaChevronRight />
          </button>
          <button
            className="absolute top-5 right-5 bg-red-600 text-white px-3 py-1 rounded"
            onClick={() => setZoomItem(null)}
          >
            Close
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

export default AccessoriesPage;
