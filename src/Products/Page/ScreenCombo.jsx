import React, { useState } from "react";

export default function ScreenCombo() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [comboType, setComboType] = useState("Touch + Display");
  const [customComboType, setCustomComboType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Samsung");
  const [customBrand, setCustomBrand] = useState("");

  const products = [
    {
      id: 1,
      name: "Touch + Display Combo",
      model: "High Quality Replacement",
      quality: "Original Touch + AMOLED Display",
      price: "₹3500",
      discountedPrice: "₹3200",
      images: [
        `${process.env.PUBLIC_URL}/image/ScreenCombo/TouchDisplay/1.jpg`,
        `${process.env.PUBLIC_URL}/image/ScreenCombo/TouchDisplay/2.jpg`,
        `${process.env.PUBLIC_URL}/image/ScreenCombo/TouchDisplay/3.jpg`,
      ],
      description:
        "Premium touch and AMOLED display combo for smooth touch response and vivid colors.",
    },
    {
      id: 2,
      name: "Touch + LCD Display Combo",
      model: "IPS LCD Replacement",
      quality: "Durable Touch + LCD Panel",
      price: "₹2500",
      discountedPrice: "₹2300",
      images: [
        `${process.env.PUBLIC_URL}/image/ScreenCombo/TouchLCD/1.jpg`,
        `${process.env.PUBLIC_URL}/image/ScreenCombo/TouchLCD/2.jpg`,
      ],
      description: "Affordable touch and LCD display combo for reliable replacements.",
    },
    {
      id: 3,
      name: "Touch + Display Repair Kit",
      model: "Complete DIY Kit",
      quality: "Tools + Touch + Display Combo",
      price: "₹1800",
      discountedPrice: "₹1600",
      images: [
        `${process.env.PUBLIC_URL}/image/ScreenCombo/DIYKit/1.jpg`,
        `${process.env.PUBLIC_URL}/image/ScreenCombo/DIYKit/2.jpg`,
      ],
      description:
        "DIY kit with tools, touch panel and display combo for easy repair at home.",
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
    const finalComboType =
      comboType === "Other" ? customComboType || "Not specified" : comboType;
    const finalBrand = selectedBrand === "Other" ? customBrand || "Not specified" : selectedBrand;

    const message = `*Product Details:*
📱 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🔧 Combo Type: ${finalComboType}
🏷️ Mobile Brand: ${finalBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 Screen Combo Replacement</h2>
      <p className="text-green-700 font-medium text-sm mb-4">
        Quality touch + display combos for mobile phones.
      </p>

      <div className="flex gap-4 mb-6 flex-wrap">
        {/* Combo Type Selector */}
        <div className="flex-1 min-w-[140px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">
            Select Combo Type:
          </label>
          <select
            value={comboType}
            onChange={(e) => setComboType(e.target.value)}
            className="border px-2 py-1 rounded w-full text-sm"
          >
            <option value="">-- Choose Combo Type --</option>
            <option value="Touch + Display">Touch + Display</option>
            <option value="Touch + LCD Display">Touch + LCD Display</option>
            <option value="Touch + Display Repair Kit">Touch + Display Repair Kit</option>
            <option value="Other">Other</option>
          </select>

          {comboType === "Other" && (
            <input
              type="text"
              placeholder="Enter custom combo type"
              className="mt-2 border px-2 py-1 rounded w-full text-sm"
              value={customComboType}
              onChange={(e) => setCustomComboType(e.target.value)}
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
            <option value="Samsung">Samsung</option>
            <option value="Vivo">Vivo</option>
            <option value="MI">MI</option>
            <option value="Oppo">Oppo</option>
            <option value="Realme">Realme</option>
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

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => {
          const currentIndex = currentImages[product.id] || 0;

          return (
            <div
              key={product.id}
              className="border rounded-xl shadow-lg p-4 bg-white flex flex-col"
            >
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
    </div>
  );
}
