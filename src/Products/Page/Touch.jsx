import React, { useState } from "react";

export default function Touch() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [touchType, setTouchType] = useState("Original");
  const [customTouchType, setCustomTouchType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Vivo");
  const [customBrand, setCustomBrand] = useState("");

  const products = [
    {
      id: 1,
      name: "Original Touch Screen",
      model: "High Quality Glass",
      quality: "Responsive & Durable",
      price: "₹900",
      discountedPrice: "₹799",
      images: [
        `${process.env.PUBLIC_URL}/image/Touch/OriginalTouch/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Touch/OriginalTouch/2.jpg`,
        `${process.env.PUBLIC_URL}/image/Touch/OriginalTouch/3.jpg`,
      ],
      description: "Genuine original touch screen with perfect responsiveness.",
    },
    {
      id: 2,
      name: "Premium Touch Screen",
      model: "Tempered Glass",
      quality: "Scratch Resistant",
      price: "₹700",
      discountedPrice: "₹599",
      images: [
        `${process.env.PUBLIC_URL}/image/Touch/PremiumTouch/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Touch/PremiumTouch/2.jpg`,
      ],
      description: "Tempered glass touch screen with high scratch resistance.",
    },
    {
      id: 3,
      name: "Universal Touch Panel",
      model: "Compatible with multiple models",
      quality: "Affordable & Reliable",
      price: "₹500",
      discountedPrice: "₹399",
      images: [
        `${process.env.PUBLIC_URL}/image/Touch/UniversalTouch/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Touch/UniversalTouch/2.jpg`,
      ],
      description: "Compatible touch panel for many brands and models.",
    },
    {
      id: 4,
      name: "DIY Touch Digitizer",
      model: "Replacement part",
      quality: "Easy to install",
      price: "₹450",
      discountedPrice: "₹350",
      images: [
        `${process.env.PUBLIC_URL}/image/Touch/DIYTouch/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Touch/DIYTouch/2.jpg`,
      ],
      description: "Touch digitizer replacement for DIY repair.",
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
    const finalTouchType = touchType === "Other" ? customTouchType || "Not specified" : touchType;
    const finalBrand = selectedBrand === "Other" ? customBrand || "Not specified" : selectedBrand;

    const message = `*Product Details:*
📱 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🧩 Touch Type: ${finalTouchType}
🏷️ Mobile Brand: ${finalBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 Touch Screens & Digitizers</h2>
      <p className="text-green-700 font-medium text-sm mb-4">
        All types of touch screens available — Original, Premium, Universal & more!
      </p>

      <div className="flex gap-4 mb-6 flex-wrap">
        {/* Touch Type Selector */}
        <div className="flex-1 min-w-[140px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">
            Select Touch Type:
          </label>
          <select
            value={touchType}
            onChange={(e) => setTouchType(e.target.value)}
            className="border px-2 py-1 rounded w-full text-sm"
          >
            <option value="">-- Choose Touch Type --</option>
            <option value="Original">Original</option>
            <option value="Premium">Premium</option>
            <option value="Universal">Universal</option>
            <option value="DIY Digitizer">DIY Digitizer</option>
            <option value="Other">Other</option>
          </select>

          {touchType === "Other" && (
            <input
              type="text"
              placeholder="Enter custom touch type"
              className="mt-2 border px-2 py-1 rounded w-full text-sm"
              value={customTouchType}
              onChange={(e) => setCustomTouchType(e.target.value)}
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
