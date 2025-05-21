import React, { useState } from "react";

export default function Chargers() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [chargerType, setChargerType] = useState("Type-C");
  const [selectedBrand, setSelectedBrand] = useState("Vivo");

  const products = [
    {
      id: 1,
      name: "Travel Charger",
      model: "MD-TYPEC",
      amp: "1.5 Amp",
      quality: "100% Better Than Original Charger",
      price: "₹60",
      discountedPrice: "₹45",
      images: [
        "/image/Charger/1.5A/1.jpg",
        "/image/Charger/1.5A/2.jpg",
        "/image/Charger/1.5A/3.jpg",
      ],
      description: "Fast charging, durable build with premium gold plating.",
    },
    {
      id: 2,
      name: "Fast Charger",
      model: "FD-TYPEC",
      amp: "2.0 Amp",
      quality: "Original Quality",
      price: "₹80",
      discountedPrice: "₹60",
      images: [
        "/image/Charger/Fast/1.jpg",
        "/image/Charger/Fast/2.jpg",
        "/image/Charger/Fast/3.jpg",
      ],
      description: "Quick charge with high-speed output.",
    },
    {
      id: 3,
      name: "Super Charger",
      model: "SC-USB",
      amp: "2.4 Amp",
      quality: "Premium Quality",
      price: "₹100",
      discountedPrice: "₹75",
      images: [
        "/image/Charger/Super/1.jpg",
        "/image/Charger/Super/2.jpg",
        "/image/Charger/Super/3.jpg",
      ],
      description: "Durable with surge protection.",
    },
    {
      id: 4,
      name: "Mini Charger",
      model: "MC-TYPEB",
      amp: "65W Amp",
      quality: "Compact and Reliable",
      price: "₹50",
      discountedPrice: "₹35",
      images: [
        "/image/Charger/65W/1.jpg",
        "/image/Charger/65W/2.jpg",
        "/image/Charger/65W/3.jpg",
      ],
      description: "Portable for daily use.",
    },
    {
      id: 5,
      name: "Heavy Charger",
      model: "HC-PRO",
      amp: "85 Amp",
      quality: "High performance and safe",
      price: "₹150",
      discountedPrice: "₹110",
      images: [
        "/image/Charger/85W/1.jpg",
        "/image/Charger/85W/2.jpg",
        "/image/Charger/85W/3.jpg",
      ],
      description: "Ideal for power-hungry devices.",
    },
  ];

  const handleImageChange = (productId, direction, totalImages) => {
    setCurrentImages((prev) => {
      const currentIndex = prev[productId] || 0;
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;
      return { ...prev, [productId]: newIndex };
    });
  };

  const handleBuyNow = (product) => {
    const message = `*Product Details:*
🔌 Name: ${product.name}
📦 Model: ${product.model}
⚡ Power: ${product.amp}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🧩 Charger Type: ${chargerType}
🏷️ Preferred Brand: ${selectedBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      {/* Charger Type Selector */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-700">Select Charger Type:</label>
        <select
          value={chargerType}
          onChange={(e) => setChargerType(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        >
          <option value="Type-C">Type-C</option>
          <option value="Thin Pin">Thin Pin</option>
          <option value="Wide Pin">Wide Pin</option>
          <option value="Micro USB">Micro USB</option>
        </select>
      </div>

      {/* Brand Selector */}
      <div className="mb-6">
        <label className="block mb-1 font-semibold text-gray-700">Select Mobile Brand:</label>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        >
          <option value="Vivo">Vivo</option>
          <option value="MI">MI</option>
          <option value="Oppo">Oppo</option>
          <option value="Realme">Realme</option>
          <option value="Samsung">Samsung</option>
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

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => {
          const currentIndex = currentImages[product.id] || 0;

          return (
            <div
              key={product.id}
              className="border rounded-xl shadow-lg p-4 bg-white flex flex-col"
            >
              {/* Image */}
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

              {/* Info */}
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <ul className="text-sm text-gray-700 mb-3 space-y-1">
                <li><strong>Model:</strong> {product.model}</li>
                <li><strong>Power:</strong> {product.amp}</li>
                <li><strong>Quality:</strong> {product.quality}</li>
              </ul>

              <div className="mb-3">
                <span className="text-gray-500 line-through text-sm mr-2">{product.price}</span>
                <span className="text-green-700 font-bold text-lg">{product.discountedPrice}</span>
              </div>

              {/* Buy Button */}
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
    </div>
  );
}
