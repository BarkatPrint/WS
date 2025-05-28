import React, { useState } from "react";

export default function TemperedGlass() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [selectedBrand, setSelectedBrand] = useState("Vivo");
  const [customBrand, setCustomBrand] = useState("");

  const products = [
    {
      id: 1,
      name: "Full Glue Tempered Glass",
      model: "9H Hardness",
      quality: "Edge to Edge, Bubble-Free",
      price: "₹100",
      discountedPrice: "₹60",
      images: [
        `${process.env.PUBLIC_URL}/image/TemperedGlass/1.jpg`,
        `${process.env.PUBLIC_URL}/image/TemperedGlass/2.jpg`,
        `${process.env.PUBLIC_URL}/image/TemperedGlass/3.jpg`,
      ],
      description: "Scratch resistant tempered glass with full glue.",
    },
    {
      id: 2,
      name: "Privacy Tempered Glass",
      model: "Anti-Spy",
      quality: "Screen Visible Only to You",
      price: "₹150",
      discountedPrice: "₹99",
      images: [
        `${process.env.PUBLIC_URL}/image/TemperedGlass/4.jpg`,
        `${process.env.PUBLIC_URL}/image/TemperedGlass/5.jpg`,
        `${process.env.PUBLIC_URL}/image/TemperedGlass/6.jpg`,
      ],
      description: "Protects screen and your privacy from side views.",
    },
    {
      id: 3,
      name: "Edge Black Tempered Glass",
      model: "3D Curved",
      quality: "Full Coverage, Strong Edge",
      price: "₹120",
      discountedPrice: "₹80",
      images: [
        `${process.env.PUBLIC_URL}/image/TemperedGlass/7.jpg`,
        `${process.env.PUBLIC_URL}/image/TemperedGlass/8.jpg`,
        `${process.env.PUBLIC_URL}/image/TemperedGlass/9.jpg`,
      ],
      description: "Curved edge black glass for stylish protection.",
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
    const finalBrand = selectedBrand === "Other" ? customBrand || "Not specified" : selectedBrand;

    const message = `*Product Details:*
📱 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🏷️ Mobile Brand: ${finalBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">🛡️ Tempered Glass</h2>

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
            className="mt-2 border px-3 py-2 rounded w-full"
            value={customBrand}
            onChange={(e) => setCustomBrand(e.target.value)}
          />
        )}
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
