import React, { useState, useEffect, useRef } from "react";

const keypadBatteries = [
  {
    id: 1,
    name: "Nokia Keypad Battery",
    model: "BL-5C, BL-4C, BL-4U",
    quality: "Local Compatible",
    price: "₹200",
    discountedPrice: "₹150",
    brand: "Nokia",
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
    brand: "Samsung",
    images: [
      `${process.env.PUBLIC_URL}/image/Battery/Keypad/Samsung/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Battery/Keypad/Samsung/2.jpg`,
    ],
  },
  {
    id: 3,
    name: "Lava Keypad Battery",
    model: "BLV-18, BLV-45, BLV-59",
    quality: "Local Compatible",
    price: "₹200",
    discountedPrice: "₹150",
    brand: "Lava",
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
    brand: "Micromax",
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
    brand: "Karbonn",
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
    brand: "Itel/Intex",
    images: [
      `${process.env.PUBLIC_URL}/image/Battery/Keypad/Intex/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Battery/Keypad/Intex/2.jpg`,
    ],
  },
  {
    id: 7,
    name: "Ticon Keypad Battery",
    model: "BL-Ticon Compatible",
    quality: "Local Compatible",
    price: "₹200",
    discountedPrice: "₹150",
    brand: "Ticon",
    images: [
      `${process.env.PUBLIC_URL}/image/Battery/Keypad/Ticon/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Battery/Keypad/Ticon/2.jpg`,
    ],
  },
];

const KeypadBatteries = () => {
  const [showAll, setShowAll] = useState(false);
  const [imageIndexes, setImageIndexes] = useState(
    keypadBatteries.reduce((acc, battery) => {
      acc[battery.id] = 0;
      return acc;
    }, {})
  );
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const scrollStep = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused || showAll) return;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (scrollContainer.scrollLeft >= maxScroll) {
      scrollContainer.scrollLeft = 0;
    } else {
      scrollContainer.scrollLeft += 180;
    }
  };

  useEffect(() => {
    if (!showAll) {
      intervalRef.current = setInterval(scrollStep, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, showAll]);

  const handleWhatsAppOrder = (battery) => {
    const message = `🔋 Battery Order\n\nBrand: ${battery.brand}\nModel: ${battery.model}\nPrice: ${battery.discountedPrice}\n\nInterested in purchasing this battery.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917050266383?text=${encodedMessage}`, "_blank");
  };

  const handlePrevImage = (batteryId, totalImages) => {
    setImageIndexes((prev) => ({
      ...prev,
      [batteryId]: (prev[batteryId] - 1 + totalImages) % totalImages,
    }));
  };

  const handleNextImage = (batteryId, totalImages) => {
    setImageIndexes((prev) => ({
      ...prev,
      [batteryId]: (prev[batteryId] + 1) % totalImages,
    }));
  };

  const visibleBatteries = showAll
    ? keypadBatteries
    : keypadBatteries.slice(0, 6);

  const getDiscountPercentage = (price, discountedPrice) => {
    const p = parseInt(price.replace("₹", ""));
    const d = parseInt(discountedPrice.replace("₹", ""));
    return Math.round(((p - d) / p) * 100);
  };

  const manualScroll = (direction) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    const scrollAmount = 180;
    let newScrollLeft =
      direction === "left"
        ? scrollContainer.scrollLeft - scrollAmount
        : scrollContainer.scrollLeft + scrollAmount;
    scrollContainer.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-1">🔋 Keypad Mobile Batteries</h2>
      <p className="text-green-700 font-semibold text-sm mb-4">
        All keypad mobile batteries available – Every model in stock!
      </p>

      {!showAll && (
        <div className="relative mb-2 flex items-center">
          <button
            onClick={() => {
              setIsPaused(true);
              manualScroll("left");
            }}
            className="absolute left-0 z-10 bg-white bg-opacity-90 rounded-full p-2 shadow hover:bg-green-100"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden whitespace-nowrap w-full cursor-pointer rounded-xl"
            onClick={() => setIsPaused((prev) => !prev)}
            title="Click to pause/resume sliding"
            style={{ scrollBehavior: "smooth" }}
          >
            {visibleBatteries.map((battery) => {
              const currentImageIndex = imageIndexes[battery.id];
              const discount = getDiscountPercentage(
                battery.price,
                battery.discountedPrice
              );
              return (
                <div
                  key={battery.id}
                  className="inline-block border rounded-2xl shadow p-3 flex-shrink-0 min-w-[180px] max-w-[220px] bg-white"
                >
                  <div className="relative w-full h-40 mb-3">
                    <img
                      src={battery.images[currentImageIndex]}
                      alt={battery.name}
                      className="rounded-xl w-full h-full object-contain"
                    />
                    {battery.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage(battery.id, battery.images.length);
                          }}
                          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-xl px-2 rounded-full"
                        >
                          ‹
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage(battery.id, battery.images.length);
                          }}
                          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-xl px-2 rounded-full"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{battery.name}</h3>
                  <p className="text-sm text-gray-600">{battery.model}</p>
                  <p className="text-sm line-through text-gray-400">
                    {battery.price}
                  </p>
                  <p className="text-green-600 font-bold mb-1">
                    {battery.discountedPrice}
                  </p>
                  <p className="text-red-600 text-xs font-semibold mb-2">
                    Save {discount}%
                  </p>
                  <button
                    onClick={() => handleWhatsAppOrder(battery)}
                    className="w-full bg-green-500 text-white rounded-xl py-2 text-sm hover:bg-green-600 transition"
                  >
                    Buy Now
                  </button>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => {
              setIsPaused(true);
              manualScroll("right");
            }}
            className="absolute right-0 z-10 bg-white bg-opacity-90 rounded-full p-2 shadow hover:bg-green-100"
          >
            ›
          </button>
        </div>
      )}

      {showAll && (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {visibleBatteries.map((battery) => {
            const currentImageIndex = imageIndexes[battery.id];
            const discount = getDiscountPercentage(
              battery.price,
              battery.discountedPrice
            );
            return (
              <div
                key={battery.id}
                className="border rounded-2xl shadow p-3 bg-white"
              >
                <div className="relative w-full h-40 mb-3">
                  <img
                    src={battery.images[currentImageIndex]}
                    alt={battery.name}
                    className="rounded-xl w-full h-full object-contain"
                  />
                  {battery.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevImage(battery.id, battery.images.length);
                        }}
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-xl px-2 rounded-full"
                      >
                        ‹
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextImage(battery.id, battery.images.length);
                        }}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-xl px-2 rounded-full"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-semibold">{battery.name}</h3>
                <p className="text-sm text-gray-600">{battery.model}</p>
                <p className="text-sm line-through text-gray-400">
                  {battery.price}
                </p>
                <p className="text-green-600 font-bold mb-1">
                  {battery.discountedPrice}
                </p>
                <p className="text-red-600 text-xs font-semibold mb-2">
                  Save {discount}%
                </p>
                <button
                  onClick={() => handleWhatsAppOrder(battery)}
                  className="w-full bg-green-500 text-white rounded-xl py-2 text-sm hover:bg-green-600 transition"
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>
      )}

      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 underline"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>
    </div>
  );
};

export default KeypadBatteries;
