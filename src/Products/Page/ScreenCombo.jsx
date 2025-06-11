import React, { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ScreenCombo() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [defaultComboType, setDefaultComboType] = useState("Touch + Display");
  const [customDefaultComboType, setCustomDefaultComboType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Samsung");
  const [customBrand, setCustomBrand] = useState("");

  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [fullScreenIndex, setFullScreenIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Touch + Display Combo (Original)",
      model: "Model-wise rate applicable",
      quality: "Original AMOLED",
      price: "₹3200",
      discountedPrice: "₹2250",
      images: [`${process.env.PUBLIC_URL}/image/ScreenCombo/Combo-(Original).jpg`],
      description:
        "Price varies as per phone model. Send your model name on WhatsApp for exact pricing. All parts are provided at wholesale rates.",
    },
    {
      id: 2,
      name: "Touch + Display Combo (Compatible)",
      model: "IPS LCD Replacement",
      quality: "Durable Compatible Touch + LCD Panel",
      price: "₹2200",
      discountedPrice: "₹630",
      images: [`${process.env.PUBLIC_URL}/image/ScreenCombo/Combo-(Compatible).jpg`],
      description:
        "Compatible touch and display combo at budget price for smooth and stable performance.",
    },
    {
      id: 3,
      name: "Touch + Display Combo (Normal Copy)",
      model: "DIY Repair Kit",
      quality: "Copy Panel + Tools Kit",
      price: "₹1200",
      discountedPrice: "₹630",
      images: [`${process.env.PUBLIC_URL}/image/ScreenCombo/Combo-(Normal-Copy).jpg`],
      description:
        "Affordable combo with tools included for basic mobile repair at home. Suitable for older models.",
    },
    {
      id: 5,
      name: "iPhone Touch + Display Combo (Original)",
      model: "iPhone Series Replacement",
      quality: "Original Retina Display + Touch Panel",
      price: "₹8000",
      discountedPrice: "₹1000",
      images: [`${process.env.PUBLIC_URL}/image/ScreenCombo/iPhone-Combo-(Original).jpg`],
      description:
        "Premium quality original iPhone touch and display combo. Retina display with multi-touch support, ideal for iPhone 6 to iPhone 12 models. Contact us for your specific model.",
    }
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

  const handleImageClick = (images, index) => {
    setFullScreenImage(images);
    setFullScreenIndex(index);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
    setFullScreenIndex(0);
  };

  const navigateFullScreen = (direction) => {
    if (!fullScreenImage) return;
    const total = fullScreenImage.length;
    const newIndex =
      direction === "next"
        ? (fullScreenIndex + 1) % total
        : (fullScreenIndex - 1 + total) % total;
    setFullScreenIndex(newIndex);
  };

  const calculateDiscount = (original, discounted) => {
    const clean = (s) => parseInt(s.replace(/[₹,]/g, ""), 10);
    const orig = clean(original);
    const disc = clean(discounted);
    return `${Math.round(((orig - disc) / orig) * 100)}% off`;
  };

  const handleBuyNow = (product) => {
    const comboType =
      defaultComboType === "Other"
        ? customDefaultComboType || "Not specified"
        : defaultComboType;

    const finalBrand =
      selectedBrand === "Other" ? customBrand || "Not specified" : selectedBrand;

    const message = `*Product Details:*
📱 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🔧 Combo Type: ${comboType}
🏷️ Mobile Brand: ${finalBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 Screen Combo Replacement</h2>
      <p className="text-green-700 font-medium text-sm mb-4">
        High-Quality Touch + Display Combos Available for All Mobile Brands.
      </p>

      <div className="flex gap-4 mb-6 flex-wrap">
        {/* Combo Type */}
        <div className="flex-1 min-w-[140px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">Default Combo Type:</label>
          <select
            value={defaultComboType}
            onChange={(e) => setDefaultComboType(e.target.value)}
            className="border px-2 py-1 rounded w-full text-sm"
          >
            <option value="">-- Choose Combo Type --</option>
            <option value="Touch + Display">Touch + Display</option>
            <option value="Touch + LCD Display">Touch + LCD Display</option>
            <option value="Touch + Display Repair Kit">Touch + Display Repair Kit</option>
            <option value="Other">Other</option>
          </select>
          {defaultComboType === "Other" && (
            <input
              type="text"
              placeholder="Enter custom combo type"
              className="mt-2 border px-2 py-1 rounded w-full text-sm"
              value={customDefaultComboType}
              onChange={(e) => setCustomDefaultComboType(e.target.value)}
            />
          )}
        </div>

        {/* Mobile Brand */}
        <div className="flex-1 min-w-[140px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">Select Mobile Brand:</label>
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => {
          const currentIndex = currentImages[product.id] || 0;
          const discountText = calculateDiscount(product.price, product.discountedPrice);

          return (
            <div key={product.id} className="border rounded-xl shadow-lg p-4 bg-white flex flex-col">
              <div
                className="relative w-full pb-[100%] mb-4 overflow-hidden rounded bg-gray-100 cursor-pointer"
                onClick={() => handleImageClick(product.images, currentIndex)}
              >
                <img
                  src={product.images[currentIndex]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
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
                <span className="text-sm text-red-600 ml-2">({discountText})</span>
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

      {/* Full Screen Image Viewer */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeFullScreen}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={() => navigateFullScreen("prev")}
          >
            <FaChevronLeft />
          </button>
          <img
            src={fullScreenImage[fullScreenIndex]}
            alt="Full Screen"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={() => navigateFullScreen("next")}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
