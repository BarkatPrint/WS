import React, { useState, useEffect } from "react";

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
        `${process.env.PUBLIC_URL}/image/Touch/Original-Touch-Screen.jpg`,
        // Add more images here for slider effect
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
        `${process.env.PUBLIC_URL}/image/Touch/Premium-Touch-Screen.jpg`,
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
        `${process.env.PUBLIC_URL}/image/Touch/Universal-Touch-Panel.jpg`,
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
        `${process.env.PUBLIC_URL}/image/Touch/DIY-Touch-Digitizer.jpg`,
      ],
      description: "Touch digitizer replacement for DIY repair.",
    },
  ];

  // Automatic slider effect for each product
  useEffect(() => {
    const intervals = products.map((product) => {
      if (product.images.length <= 1) return null; // No slider needed

      return setInterval(() => {
        setCurrentImages((prev) => {
          const currentIndex = prev[product.id] || 0;
          const nextIndex = (currentIndex + 1) % product.images.length;
          return { ...prev, [product.id]: nextIndex };
        });
      }, 3000); // Change image every 3 seconds
    });

    // Cleanup intervals on unmount
    return () => {
      intervals.forEach((id) => {
        if (id) clearInterval(id);
      });
    };
  }, [products]);

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
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">📱 Touch Screens & Digitizers</h2>
      <p className="text-green-700 font-medium text-center mb-8">
        All types of touch screens available — Original, Premium, Universal & more!
      </p>

      {/* Selectors: Touch Type and Brand */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 min-w-[150px]">
          <label className="block mb-2 font-semibold text-gray-700">Select Touch Type:</label>
          <select
            value={touchType}
            onChange={(e) => setTouchType(e.target.value)}
            className="border px-3 py-2 rounded w-full text-base"
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
              className="mt-2 border px-3 py-2 rounded w-full text-base"
              value={customTouchType}
              onChange={(e) => setCustomTouchType(e.target.value)}
            />
          )}
        </div>

        <div className="flex-1 min-w-[150px]">
          <label className="block mb-2 font-semibold text-gray-700">Select Mobile Brand:</label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border px-3 py-2 rounded w-full text-base"
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
              className="mt-2 border px-3 py-2 rounded w-full text-base"
              value={customBrand}
              onChange={(e) => setCustomBrand(e.target.value)}
            />
          )}
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-10">
        <label className="block mb-3 font-semibold text-gray-700">Payment Method:</label>
        <div className="flex gap-8 flex-wrap">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="mr-2"
            />
            Cash on Delivery
          </label>
          <label className="inline-flex items-center cursor-pointer">
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

      {/* Products List */}
      <div className="space-y-10">
        {products.map((product) => {
          const currentIndex = currentImages[product.id] || 0;

          return (
            <div
              key={product.id}
              className="border rounded-xl shadow-md p-6 bg-white flex flex-col md:flex-row items-center gap-6"
            >
              {/* Image slider */}
              <div className="relative w-full max-w-[300px] aspect-square rounded overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={product.images[currentIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        handleImageChange(product.id, "prev", product.images.length)
                      }
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1 shadow hover:bg-opacity-100 transition"
                      aria-label="Previous Image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() =>
                        handleImageChange(product.id, "next", product.images.length)
                      }
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1 shadow hover:bg-opacity-100 transition"
                      aria-label="Next Image"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-1 mb-3">{product.description}</p>
                <ul className="text-gray-700 mb-4 space-y-1 text-base">
                  <li><strong>Model:</strong> {product.model}</li>
                  <li><strong>Quality:</strong> {product.quality}</li>
                </ul>
                <div className="mb-5">
                  <span className="line-through text-gray-500 mr-3">{product.price}</span>
                  <span className="text-green-700 font-bold text-xl">{product.discountedPrice}</span>
                </div>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="self-start bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
  