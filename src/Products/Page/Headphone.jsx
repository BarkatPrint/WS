import React, { useState } from "react";

export default function Headphones() {
  const [showAll, setShowAll] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [selectedBrand, setSelectedBrand] = useState("Vivo");

  const products = [
    {
      id: 1,
      name: "Stereo Wired Earphones",
      model: "SWE-2025",
      type: "Wired",
      quality: "Clear vocals with balanced bass",
      price: "₹60",
      discountedPrice: "₹50",
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
      price: "₹350",
      discountedPrice: "₹300",
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
      price: "₹300",
      discountedPrice: "₹250",
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
      price: "₹650",
      discountedPrice: "₹549",
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
      price: "₹899",
      discountedPrice: "₹749",
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

  const displayedProducts = showAll ? products : products.slice(0, 5);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">🎧 Headphones</h2>

      {/* Brand Selector */}
      <div className="mb-4">
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

      {/* Payment Method */}
      <div className="mb-6">
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

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {displayedProducts.map((product) => {
          const currentIndex = currentImages[product.id] || 0;
          return (
            <div key={product.id} className="border rounded-xl shadow-lg p-4 bg-white flex flex-col">
              <div className="relative w-full pb-[100%] mb-4 overflow-hidden rounded bg-gray-100">
                <img
                  src={product.images[currentIndex]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-1 rounded shadow"
                  onClick={() =>
                    handleImageChange(product.id, "prev", product.images.length)
                  }
                >
                  ‹
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-1 rounded shadow"
                  onClick={() =>
                    handleImageChange(product.id, "next", product.images.length)
                  }
                >
                  ›
                </button>
              </div>
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <ul className="text-sm text-gray-700 mb-3 space-y-1">
                <li><strong>Model:</strong> {product.model}</li>
                <li><strong>Type:</strong> {product.type}</li>
                <li><strong>Quality:</strong> {product.quality}</li>
              </ul>
              <div className="mb-3">
                <span className="text-gray-500 line-through text-sm mr-2">{product.price}</span>
                <span className="text-green-700 font-bold text-lg">{product.discountedPrice}</span>
              </div>
              <button
                onClick={() => handleBuyNow(product)}
                className="mt-auto bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Buy Now
              </button>
            </div>
          );
        })}
      </div>

      {/* Toggle Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>
    </div>
  );
}
