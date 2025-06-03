import React, { useState, useRef } from "react";

export default function Headphones() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [selectedBrand, setSelectedBrand] = useState("Vivo");

  const sliderRef = useRef(null);

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
      ],
      description: "Comfortable in-ear design with mic for calls and music.",
    },
    {
      id: 2,
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
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      model: "GH-500",
      type: "Wireless",
      quality: "High performance for gaming",
      price: "₹500",
      discountedPrice: "₹300",
      images: [
        `${process.env.PUBLIC_URL}/image/Headphone/Ear Bluetooth/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Headphone/Ear Bluetooth/2.jpg`,
        `${process.env.PUBLIC_URL}/image/Headphone/Ear Bluetooth/3.jpg`,
      ],
      description: "Crystal-clear sound with mic for gaming.",
    },
    {
      id: 4,
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
      description: "Premium neckband with magnetic earbuds, deep bass, voice assistant support, and 20-hour battery life."
    },
    {
      id: 5,
      name: "Pro Wireless Earbuds",
      model: "GH-ProBudsX",
      type: "Wireless",
      quality: "ENC mic with low-latency and rich bass",
      price: "₹2500",
      discountedPrice: "₹1599",
      images: [
        `${process.env.PUBLIC_URL}/image/Headphone/ProWirelessEarbuds/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Headphone/ProWirelessEarbuds/2.jpg`,
      ],
      description: "True wireless earbuds with touch control, fast charging, IPX5 water resistance, and up to 30 hours playtime."
    },
  ];

  const handleImageChange = (productId, direction, totalImages) => {
    setCurrentImages((prev) => {
      const currentIndex = prev[productId] ?? 0;
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;
      return { ...prev, [productId]: newIndex };
    });
  };

  const handleBuyNow = (product) => {
    const message = `*Product Details:*
🎧 Name: ${product.name}
📦 Model: ${product.model}
🔌 Type: ${product.type}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🏷️ Preferred Brand: ${selectedBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">🎧 Headphones</h2>

      <div className="mb-4 max-w-xs">
        <label className="block mb-1 font-semibold text-gray-700">Select Mobile Brand:</label>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        >
          {[
            "None", "Normal", "Vivo", "MI", "Oppo", "Realme", "Samsung",
            "Boat", "JBL", "Sony", "Skullcandy", "Sennheiser", "Apple", "Bose", "Philips", "Zebronics", "Infinity"
          ].map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      <div className="mb-6 max-w-xs">
        <label className="block mb-2 font-semibold text-gray-700">Payment Method:</label>
        <div className="flex gap-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="mr-2"
            />
            Cash on Delivery
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
              className="mr-2"
            />
            Online Payment
          </label>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={slideLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 shadow-md hover:bg-gray-900 z-10"
        >
          ‹
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 py-2 px-8 scrollbar-hide"
        >
          {products.map((product) => {
            const currentIndex = currentImages[product.id] || 0;
            const original = parseFloat(product.price.replace("₹", ""));
            const discounted = parseFloat(product.discountedPrice.replace("₹", ""));
            const discountPercent = Math.round(((original - discounted) / original) * 100);

            return (
              <div
                key={product.id}
                className="snap-center flex-shrink-0 w-[280px] border rounded-xl shadow-md bg-white flex flex-col"
              >
                <div className="relative w-full pt-[100%] overflow-hidden rounded-t-xl bg-gray-100">
                  <img
                    src={product.images[currentIndex]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleImageChange(product.id, "prev", product.images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-2 py-1 rounded shadow hover:bg-gray-200"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => handleImageChange(product.id, "next", product.images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-2 py-1 rounded shadow hover:bg-gray-200"
                  >
                    ›
                  </button>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{product.description}</p>
                  <p className="text-sm text-gray-600 mb-1"><strong>Model:</strong> {product.model}</p>
                  <p className="text-sm text-gray-600 mb-1"><strong>Type:</strong> {product.type}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>Quality:</strong> {product.quality}</p>

                  <p className="text-gray-500 line-through text-sm">{product.price}</p>
                  <p className="font-semibold text-lg text-green-600">{product.discountedPrice}</p>
                  <p className="text-sm text-red-600 font-semibold mb-2">Save {discountPercent}%</p>

                  <button
                    onClick={() => handleBuyNow(product)}
                    className="mt-auto bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 shadow-md hover:bg-gray-900 z-10"
        >
          ›
        </button>
      </div>
    </div>
  );
}
