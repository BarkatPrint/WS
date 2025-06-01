import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KeypadBatteries from "../Page/KeypadBatteries";

export default function Batteries() {
  const navigate = useNavigate();

  // States
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [batteryType, setBatteryType] = useState("Li-ion");
  const [selectedBrand, setSelectedBrand] = useState("Vivo");
  const [otherBrand, setOtherBrand] = useState(""); // ✅ ADD THIS
  const [currentImages, setCurrentImages] = useState({});
  const [paused, setPaused] = useState(false);

  const sliderRef = useRef(null);
  const autoSlideRef = useRef();

const batteries = [
  {
    id: 1,
    name: "Vivo V15 Battery",
    description: "Compatible Battery",
    images: [
      `${process.env.PUBLIC_URL}/image/Battery/Vivo-V15-Battery.jpg`,
      
    ],
    model: "BLP685",
    capacity: "3700 mAh",
    quality: "High Quality",
    price: "₹799",
    discountedPrice: "₹499",
  },
  {
    id: 2,
    name: "Samsung J7 Battery",
    description: "Compatible Battery",
    images: [
      `${process.env.PUBLIC_URL}/image/Battery/Samsung-J7.jpg`,
      
    ],
    model: "EB-BJ700CBE",
    capacity: "3000 mAh",
    quality: "High Quality",
    price: "₹699",
    discountedPrice: "₹449",
  },
  {
    id: 3,
    name: "Redmi Note 7 Battery",
    description: "Compatible Battery",
    images: [
      `${process.env.PUBLIC_URL}/image/Battery/Redmi-Note-7.jpg`,
      
    ],
    model: "BN46",
    capacity: "4000 mAh",
    quality: "High Quality",
    price: "₹849",
    discountedPrice: "₹549",
  },
  {
    id: 4,
    name: "Oppo A37 Battery",
    description: "Compatible Battery",
    images: [
      `${process.env.PUBLIC_URL}/image/Battery/Oppo-A37.jpg`,
     
    ],
    model: "BLP615",
    capacity: "2630 mAh",
    quality: "High Quality",
    price: "₹749",
    discountedPrice: "₹449",
  },
  {
    id: 5,
    name: "Realme C2 Battery",
    description: "Compatible Battery",
    images: [
      `${process.env.PUBLIC_URL}/image/Battery/Realme-C2.jpg`,
      
    ],
    model: "BLPB051",
    capacity: "4000 mAh",
    quality: "High Quality",
    price: "₹899",
    discountedPrice: "₹599",
  },
];



  // Auto-slide effect
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      if (!paused) {
        setCurrentImages((prev) => {
          const updated = { ...prev };
          batteries.forEach((product) => {
            const currentIndex = prev[product.id] || 0;
            updated[product.id] = (currentIndex + 1) % product.images.length;
          });
          return updated;
        });
      }
    }, 3000);

    return () => clearInterval(autoSlideRef.current);
  }, [paused]);

  const handleImageChange = (productId, direction, totalImages) => {
    setPaused(true);
    setTimeout(() => setPaused(false), 5000); // resume auto-slide after 5 sec

    setCurrentImages((prev) => {
      const currentIndex = prev[productId] || 0;
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;
      return { ...prev, [productId]: newIndex };
    });
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -720, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 720, behavior: "smooth" });
  };

  const handleBuyNow = (product) => {
    const message = `📱 *Battery Order* \n\n🔋 *${product.name}*\n💥 ${product.discountedPrice} (was ${product.price})\n⚡ ${product.capacity}, ${product.quality}\n💰 Payment: ${paymentMethod}\n\nPlease confirm the order.`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">🔋 Battery</h2>

      {/* Dropdowns */}
      <div className="flex flex-wrap gap-4 mb-4">
      {/* Battery Type */}
      <select
        value={batteryType}
        onChange={(e) => setBatteryType(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="Li-ion">Li-ion</option>
        <option value="Li-Poly">Li-Poly</option>
      </select>

      {/* Brand Selection */}
      <select
        value={selectedBrand}
        onChange={(e) => {
          setSelectedBrand(e.target.value);
          if (e.target.value !== "Other") {
            setOtherBrand(""); // Clear manual input if not 'Other'
          }
        }}
        className="border rounded px-3 py-2"
      >
        <option value="Vivo">Vivo</option>
        <option value="Samsung">Samsung</option>
        <option value="MI">MI</option>
        <option value="Oppo">Oppo</option>
        <option value="Realme">Realme</option>
        <option value="Lava">Lava</option>
        <option value="Nokia">Nokia</option>
        <option value="Other">Other</option>
      </select>

      {/* Show text input if Other is selected */}
      {selectedBrand === "Other" && (
        <input
          type="text"
          value={otherBrand}
          onChange={(e) => setOtherBrand(e.target.value)}
          placeholder="Enter brand name"
          className="border rounded px-3 py-2"
        />
      )}

      {/* Payment Method */}
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="cod">Cash on Delivery</option>
        <option value="prepaid">Prepaid</option>
      </select>
    </div>







      {/* Carousel section */}
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 rounded-full p-2 shadow"
        >
          &#8592;
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide px-8"
        >
          {batteries.map((product) => {
            const currentIndex = currentImages[product.id] || 0;
            return (
              <div
                key={product.id}
                className="min-w-[240px] flex-shrink-0 bg-white border rounded-xl shadow p-4"
              >
                <div className="relative w-full aspect-square mb-4 overflow-hidden rounded bg-gray-100">
                  <img
                    src={product.images[currentIndex]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain md:object-cover"
                  />
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-1 py-0.5 rounded shadow"
                    onClick={() =>
                      handleImageChange(
                        product.id,
                        "prev",
                        product.images.length
                      )
                    }
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-1 py-0.5 rounded shadow"
                    onClick={() =>
                      handleImageChange(
                        product.id,
                        "next",
                        product.images.length
                      )
                    }
                  >
                    ›
                  </button>
                </div>
                <h3 className="font-bold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  {product.description}
                </p>
                <ul className="text-sm mb-2">
                  <li>
                    <b>Model:</b> {product.model}
                  </li>
                  <li>
                    <b>Capacity:</b> {product.capacity}
                  </li>
                  <li>
                    <b>Quality:</b> {product.quality}
                  </li>
                </ul>
                <div className="mb-2">
                  <span className="text-red-600 font-bold mr-2">
                    {product.discountedPrice}
                  </span>
                  <span className="line-through text-sm text-gray-500">
                    {product.price}
                  </span>
                </div>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-1.5 rounded"
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 rounded-full p-2 shadow"
        >
          &#8594;
        </button>
      </div>

      {/* See all button */}
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/products/battery")}
          className="text-blue-600 underline"
        >
          See All Batteries
        </button>
      </div>

      {/* Keypad batteries section */}
      <KeypadBatteries />
    </div>
  );
}
