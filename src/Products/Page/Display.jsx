import React, { useState, useRef } from "react";

export default function MobileDisplay() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [displayType, setDisplayType] = useState("Original");
  const [customDisplayType, setCustomDisplayType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Samsung");
  const [customBrand, setCustomBrand] = useState("");

  const products = [
    {
      id: 1,
      name: "Original Mobile Display",
      model: "AMOLED Full HD",
      quality: "High Resolution & Brightness",
      price: "₹2500",
      discountedPrice: "₹2200",
      images: [
        `${process.env.PUBLIC_URL}/image/Display/Original-Mobile-Display.jpg`,
      ],
      description: "Genuine AMOLED original display with vibrant colors and durability.",
    },
    {
      id: 2,
      name: "Premium LCD Display",
      model: "IPS LCD",
      quality: "Wide Viewing Angles & Good Brightness",
      price: "₹1800",
      discountedPrice: "₹1500",
      images: [
        `${process.env.PUBLIC_URL}/image/Display/Premium-LCD-Display.jpg`,
      ],
      description: "Premium IPS LCD display with excellent viewing angles.",
    },
    {
      id: 3,
      name: "Universal Display Panel",
      model: "Compatible with Multiple Models",
      quality: "Affordable Replacement",
      price: "₹1200",
      discountedPrice: "₹999",
      images: [
        `${process.env.PUBLIC_URL}/image/Display/Universal-Display-Panel.jpg`,
      ],
      description: "Compatible display panel for many popular mobile brands.",
    },
    {
      id: 4,
      name: "DIY Display Replacement Kit",
      model: "With Tools & Adhesives",
      quality: "Easy to Install",
      price: "₹900",
      discountedPrice: "₹750",
      images: [
        `${process.env.PUBLIC_URL}/image/Display/DIY-Display-Replacement-Kit.jpg`,
      ],
      description: "Complete DIY display replacement kit including necessary tools.",
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
    const finalDisplayType = displayType === "Other" ? customDisplayType || "Not specified" : displayType;
    const finalBrand = selectedBrand === "Other" ? customBrand || "Not specified" : selectedBrand;

    const message = `*Product Details:*
📱 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🖥️ Display Type: ${finalDisplayType}
🏷️ Mobile Brand: ${finalBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  // Ref for horizontal scroll container
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 Mobile Displays & Replacement Screens</h2>
      <p className="text-green-700 font-medium text-sm mb-4">
        High quality mobile displays for all brands and models.
      </p>

      <div className="flex gap-4 mb-6 flex-wrap">
        {/* Display Type Selector */}
        <div className="flex-1 min-w-[140px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">
            Select Display Type:
          </label>
          <select
            value={displayType}
            onChange={(e) => setDisplayType(e.target.value)}
            className="border px-2 py-1 rounded w-full text-sm"
          >
            <option value="">-- Choose Display Type --</option>
            <option value="Original">Original</option>
            <option value="Premium">Premium</option>
            <option value="Universal">Universal</option>
            <option value="DIY Kit">DIY Kit</option>
            <option value="Other">Other</option>
          </select>

          {displayType === "Other" && (
            <input
              type="text"
              placeholder="Enter custom display type"
              className="mt-2 border px-2 py-1 rounded w-full text-sm"
              value={customDisplayType}
              onChange={(e) => setCustomDisplayType(e.target.value)}
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

      {/* Horizontal Scroll Buttons */}
      <div className="flex items-center mb-2">
        <button
          onClick={scrollLeft}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-l"
          aria-label="Scroll Left"
        >
          ‹
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-3 scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Product Cards */}
          {products.map((product) => {
            const currentIndex = currentImages[product.id] || 0;

            return (
              <div
                key={product.id}
                className="flex-shrink-0 w-48 border rounded-xl shadow-md p-3 bg-white flex flex-col"
              >
                <div className="relative w-full pb-[100%] mb-3 overflow-hidden rounded bg-gray-100">
                  <img
                    src={product.images[currentIndex]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <button
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-1 py-0.5 rounded shadow"
                    onClick={() =>
                      handleImageChange(product.id, "prev", product.images.length)
                    }
                    aria-label="Previous Image"
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-1 py-0.5 rounded shadow"
                    onClick={() =>
                      handleImageChange(product.id, "next", product.images.length)
                    }
                    aria-label="Next Image"
                  >
                    ›
                  </button>
                </div>

                <h3 className="text-md font-semibold text-gray-800 truncate">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-1 truncate">{product.description}</p>

                <ul className="text-xs text-gray-700 mb-2 space-y-0.5">
                  <li><strong>Model:</strong> {product.model}</li>
                  <li><strong>Quality:</strong> {product.quality}</li>
                </ul>

                <div className="mb-2">
                  <span className="text-gray-500 line-through text-xs mr-1">{product.price}</span>
                  <span className="text-green-700 font-bold text-sm">{product.discountedPrice}</span>
                </div>

                <button
                  onClick={() => handleBuyNow(product)}
                  className="mt-auto bg-green-600 text-white py-1.5 rounded hover:bg-green-700 text-sm transition"
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={scrollRight}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r"
          aria-label="Scroll Right"
        >
          ›
        </button>
      </div>
    </div>
  );
}
