import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AccessoriesPage = () => {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const pauseTimeout = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [zoomImages, setZoomImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("Nokia");
  const [customModel, setCustomModel] = useState("");

  const keypadBatteries = [
    {
      id: 1,
      name: "Nokia Keypad Battery",
      model: "BL-5C, BL-4C, BL-4U",
      quality: "Local Compatible",
      price: "₹200",
      discountedPrice: "₹150",
      brand: "Nokia BL-5C Battery",
      images: [
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Nokia/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Nokia/2.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Nokia/3.jpg`,
      ],
    },
    {
      id: 2,
      name: "Samsung Guru Battery",
      model: "AB463446BU, AB533640CU",
      quality: "Local Compatible",
      price: "₹200",
      discountedPrice: "₹150",
      brand: "Samsung Guru Battery (AB463446BU)",
      images: [
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Samsung/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Samsung/2.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Samsung/3.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Samsung/5.jpg`,
      ],
    },
    {
      id: 3,
      name: "Lava Keypad Battery",
      model: "BLV-18, BLV-45, BLV-59",
      quality: "Local Compatible",
      price: "₹200",
      discountedPrice: "₹150",
      brand: "Lava BLB-4 Battery",
      images: [
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Lava/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Lava/2.jpg`,
      ],
    },
    {
      id: 4,
      name: "Micromax Keypad Battery",
      model: "C115, X101, X328",
      quality: "Local Compatible",
      price: "₹200",
      discountedPrice: "₹150",
      brand: "Micromax X412 Battery",
      images: [
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Micromax/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Micromax/2.jpg`,
      ],
    },
    {
      id: 5,
      name: "Karbonn Keypad Battery",
      model: "K9, K22, K400",
      quality: "Local Compatible",
      price: "₹200",
      discountedPrice: "₹150",
      brand: "Karbonn K9 Battery",
      images: [
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Karbonn/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Karbonn/2.jpg`,
      ],
    },
    {
      id: 6,
      name: "Itel/Intex Keypad Battery",
      model: "BL-Series Compatible",
      quality: "Local Compatible",
      price: "₹200",
      discountedPrice: "₹150",
      brand: "Itel It5026 Battery",
      images: [
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Itel/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Itel/2.jpg`,
      ],
    },
    {
      id: 7,
      name: "Ticon Keypad Battery",
      model: "Compatible BL-Series",
      quality: "Local Compatible",
      price: "₹200",
      discountedPrice: "₹150",
      brand: "Ticon Keypad Battery",
      images: [
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Ticon/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Ticon/2.jpg`,
      ],
    },
    {
      id: 8,
      name: "Intex Keypad Battery",
      model: "BL-5C Compatible",
      quality: "Local Compatible",
      price: "₹200",
      discountedPrice: "₹150",
      brand: "Intex BL-5C Compatible Battery",
      images: [
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Intex/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Battery/Keypad/Intex/2.jpg`,
      ],
    },
  ];

  const brandMap = {
    Nokia: "Nokia BL-5C Battery",
    Samsung: "Samsung Guru Battery (AB463446BU)",
    Lava: "Lava BLB-4 Battery",
    Karbonn: "Karbonn K9 Battery",
    Micromax: "Micromax X412 Battery",
    "Itel/Intex": "Itel It5026 Battery",
    Ticon: "Ticon Keypad Battery",
    Intex: "Intex BL-5C Compatible Battery",
  };

  const handleBuyNow = (name, price) => {
    const message = `Hello, I want to buy ${name} for ${price}.\nSelected Brand: ${selectedBrand}`;
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

  const filteredBatteries =
    selectedBrand === "Other"
      ? []
      : keypadBatteries.filter((item) => item.brand === brandMap[selectedBrand]);

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00292d]">Keypad Battery</h2>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
        <div>
          <label className="font-medium mr-2">Select Mobile Brand:</label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option value="Nokia">Nokia</option>
            <option value="Samsung">Samsung</option>
            <option value="Lava">Lava</option>
            <option value="Karbonn">Karbonn</option>
            <option value="Micromax">Micromax</option>
            <option value="Itel/Intex">Itel/Intex</option>
            <option value="Ticon">Ticon</option>
            <option value="Intex">Intex</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

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

      {/* Product List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4 pb-4 snap-x snap-mandatory"
        onClick={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onMouseDown={handleUserInteraction}
      >
        {filteredBatteries.map((item) => {
          const discount = calculateDiscount(item.price, item.discountedPrice);
          return (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] sm:w-[200px] bg-white shadow rounded-xl snap-start relative"
            >
              <div
                className="w-full h-36 sm:h-40 overflow-hidden rounded-t-xl bg-gray-50 cursor-pointer"
                onClick={() => {
                  setZoomImages(item.images);
                  setCurrentImageIndex(0);
                }}
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex flex-col items-center text-center">
                <h3 className="font-semibold text-sm text-gray-800">{item.name}</h3>
                <div className="my-1 text-sm">
                  <span className="text-gray-500 line-through mr-1">{item.price}</span>
                  <span className="text-green-600 font-bold">{item.discountedPrice}</span>
                </div>
                <div className="text-xs font-semibold text-red-600">{discount}% OFF</div>
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

        {/* Other Brand */}
        {selectedBrand === "Other" && (
          <div className="flex-shrink-0 w-[180px] sm:w-[200px] bg-white shadow rounded-xl snap-start p-3 flex flex-col justify-between">
            <div className="text-center">
              <h3 className="font-semibold text-sm text-gray-800 mb-1">Can't Find Your Battery?</h3>
              <p className="text-xs text-gray-600 mb-2">
                Send your mobile name on WhatsApp to get the battery photo.
              </p>
              <input
                type="text"
                placeholder="Enter Mobile Name"
                value={customModel}
                onChange={(e) => setCustomModel(e.target.value)}
                className="w-full border text-xs px-2 py-1 mb-2 rounded"
              />
              <button
                onClick={() => {
                  const message = `Hello, I need a battery for my ${customModel}. Please send the battery photo.`;
                  const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, "_blank");
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-xs mt-1 w-full"
                disabled={!customModel}
              >
                Request Battery
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      {zoomImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => {
            setZoomImages([]);
            setCurrentImageIndex(0);
          }}
        >
          {currentImageIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => prev - 1);
              }}
              className="absolute left-4 text-white text-3xl bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              &#8592;
            </button>
          )}
          <img
            src={zoomImages[currentImageIndex]}
            alt="Zoom"
            className="max-h-[90%] max-w-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {currentImageIndex < zoomImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => prev + 1);
              }}
              className="absolute right-4 text-white text-3xl bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              &#8594;
            </button>
          )}
          <button
            className="absolute top-4 right-4 text-white bg-red-600 px-3 py-1 rounded"
            onClick={(e) => {
              e.stopPropagation();
              setZoomImages([]);
              setCurrentImageIndex(0);
            }}
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
