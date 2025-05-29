import React, { useState } from "react";

export default function DataCable() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [cableType, setCableType] = useState("Type-C");
  const [customCableType, setCustomCableType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Vivo");
  const [customBrand, setCustomBrand] = useState("");

  const products = [
    {
      id: 1,
      name: "USB Data Cable",
      model: "Type-C, Micro USB, iPhone Lightning",
      quality: "Fast Charging Support",
      price: "₹60",
      discountedPrice: "₹45",
      images: [
        `${process.env.PUBLIC_URL}/image/DataCable/1.jpeg`,
        `${process.env.PUBLIC_URL}/image/DataCable/2.jpeg`,
        `${process.env.PUBLIC_URL}/image/DataCable/3.jpeg`,
      ],
      description: "Durable cable with high-speed charging and data sync.",
    },
    {
      id: 2,
      name: "Premium Data Cable",
      model: "VOOC, DASH, Turbo, Super Charge",
      quality: "Premium Quality",
      price: "₹80",
      discountedPrice: "₹60",
      images: [
        `${process.env.PUBLIC_URL}/image/DataCable/4.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/5.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/7.jpg`,
      ],
      description: "Supports all fast charging protocols and stable data transfer.",
    },
    {
      id: 3,
      name: "Super Fast Data Cable",
      model: "Type-C, VOOC, QC 3.0",
      quality: "High-Speed Charging & Data Transfer",
      price: "₹90",
      discountedPrice: "₹65",
      images: [
        `${process.env.PUBLIC_URL}/image/DataCable/8.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/9.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/10.jpg`,
      ],
      description: "Best for all fast charging Android phones like Realme, OnePlus, and Samsung.",
    },
    {
      id: 4,
      name: "iPhone Cable",
      model: "Original Connector",
      quality: "iPhone Compatible Fast Charging",
      price: "₹120",
      discountedPrice: "₹90",
      images: [
        `${process.env.PUBLIC_URL}/image/DataCable/11.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/12.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/13.jpg`,
      ],
      description: "Supports iPhone 5 to iPhone 14 models for charge & sync.",
    },
  ];

  const handleBuyNow = (product) => {
    const finalCableType = cableType === "Other" ? customCableType || "Not specified" : cableType;
    const finalBrand = selectedBrand === "Other" ? customBrand || "Not specified" : selectedBrand;

    const message = `*Product Details:*
🔌 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🔌 Cable Type: ${finalCableType}
🏷️ Preferred Brand: ${finalBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">🔌 Data Cables</h2>

      <div className="flex gap-4 mb-6 flex-wrap">
        {/* Cable Type Selector */}
        <div className="flex-1 min-w-[140px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">
            Select Cable Type:
          </label>
          <select
            value={cableType}
            onChange={(e) => setCableType(e.target.value)}
            className="border px-2 py-1 rounded w-full text-sm"
          >
            <option value="Type-C">Type-C</option>
            <option value="Thin Pin">Thin Pin</option>
            <option value="Wide Pin">Wide Pin</option>
            <option value="Micro USB">Micro USB</option>
            <option value="Lightning">Lightning (iPhone)</option>
            <option value="Other">Other</option>
          </select>

          {cableType === "Other" && (
            <input
              type="text"
              placeholder="Enter custom cable type"
              className="mt-2 border px-2 py-1 rounded w-full text-sm"
              value={customCableType}
              onChange={(e) => setCustomCableType(e.target.value)}
            />
          )}
        </div>

        {/* Brand Selector */}
        <div className="flex-1 min-w-[140px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">
            Select Mobile Brand:
          </label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border px-2 py-1 rounded w-full text-sm"
          >
            <option value="None">None</option>
            <option value="Normal">Normal</option>
            <option value="Vivo">Vivo</option>
            <option value="MI">MI</option>
            <option value="Oppo">Oppo</option>
            <option value="Realme">Realme</option>
            <option value="Samsung">Samsung</option>
            <option value="OnePlus">OnePlus</option>
            <option value="Apple">Apple</option>
            <option value="Infinix">Infinix</option>
            <option value="Itel">Itel</option>
            <option value="Lenovo">Lenovo</option>
            <option value="Nokia">Nokia</option>
            <option value="Motorola">Motorola</option>
            <option value="Other">Other</option>
          </select>

          {selectedBrand === "Other" && (
            <input
              type="text"
              placeholder="Enter custom brand name"
              className="mt-2 border px-2 py-1 rounded w-full text-sm"
              value={customBrand}
              onChange={(e) => setCustomBrand(e.target.value)}
            />
          )}
        </div>
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

      {/* Horizontal scroll product list */}
      <div
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[250px] md:w-[220px] lg:w-[200px] border rounded-xl shadow-lg p-4 bg-white flex flex-col scroll-snap-align-start"
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded bg-gray-100">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <ul className="text-sm text-gray-700 mb-3 space-y-1">
              <li><strong>Model:</strong> {product.model}</li>
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
        ))}
      </div>
    </div>
  );
}
