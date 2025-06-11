import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const AccessoriesPage = () => {
  const scrollRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const pauseTimeout = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("Vivo");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [customModel, setCustomModel] = useState("");

  const batteries = [
    {
      id: 1,
      name: "Vivo V15 Battery",
      description: "Compatible Battery",
      images: [`${process.env.PUBLIC_URL}/image/Battery/Vivo-V15-Battery.jpg`],
      model: "BLP685",
      capacity: "3700 mAh",
      quality: "High Quality",
      price: "₹1650",
      discountedPrice: "₹850",
      brand: "Vivo",
    },
    {
      id: 2,
      name: "Samsung J7 Battery",
      description: "Compatible Battery",
      images: [`${process.env.PUBLIC_URL}/image/Battery/Samsung-J7.jpg`],
      model: "EB-BJ700CBE",
      capacity: "3000 mAh",
      quality: "High Quality",
      price: "₹650",
      discountedPrice: "₹350",
      brand: "Samsung",
    },
    {
      id: 3,
      name: "Redmi Note 7 Battery",
      description: "Compatible Battery",
      images: [`${process.env.PUBLIC_URL}/image/Battery/Redmi-Note-7.jpg`],
      model: "BN46",
      capacity: "4000 mAh",
      quality: "High Quality",
      price: "₹850",
      discountedPrice: "₹450",
      brand: "Redmi",
    },
    {
      id: 4,
      name: "Oppo A37 Battery",
      description: "Compatible Battery",
      images: [`${process.env.PUBLIC_URL}/image/Battery/Oppo-A37.jpg`],
      model: "BLP615",
      capacity: "2630 mAh",
      quality: "High Quality",
      price: "₹650",
      discountedPrice: "₹350",
      brand: "Oppo",
    },
    {
      id: 5,
      name: "Realme C2 Battery",
      description: "Compatible Battery",
      images: [`${process.env.PUBLIC_URL}/image/Battery/Realme-C2.jpg`],
      model: "BLPB051",
      capacity: "4000 mAh",
      quality: "High Quality",
      price: "₹650",
      discountedPrice: "₹350",
      brand: "Realme",
    },
  ];

  const handleBuyNow = (name, price) => {
    const message = `Hello, I want to buy ${name} for ${price}.\nSelected Brand: ${selectedBrand}\nPayment Method: ${paymentMethod}`;
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
      : batteries.filter((item) => item.brand === selectedBrand);

  return (
    <>
      <div className="px-4 py-10 max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#00292d]">Battery</h2>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
          <div>
            <label className="font-medium mr-2">Select Mobile Brand:</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option value="Vivo">Vivo</option>
              <option value="Oppo">Oppo</option>
              <option value="Realme">Realme</option>
              <option value="Redmi">Redmi</option>
              <option value="Samsung">Samsung</option>
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
                    className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-xs mt-2"
                  >
                    Buy
                  </button>
                </div>
              </div>
            );
          })}

          {/* Only show custom model input when "Other" is selected */}
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
                    const message = `Hello, I need a battery for my ${customModel} (${selectedBrand}). My payment method is ${paymentMethod}. Please send the battery photo.`;
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

        {/* Zoom Image Modal */}
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

        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>

 
    </>
  );
};

export default AccessoriesPage;
