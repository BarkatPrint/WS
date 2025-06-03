import React, { useState, useRef } from "react";

export default function Chargers() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [chargerType, setChargerType] = useState("Type-C");
  const [selectedBrand, setSelectedBrand] = useState("Vivo");

  const products = [
    {
      id: 1,
      name: "Travel Charger",
      model: "MD-TYPEC, Micro USB (V8), Lightning, Realme, Oppo, MI, etc.",
      amp: "1.5 Amp",
      quality: "100% Better Than Original Charger",
      price: "₹60",
      discountedPrice: "₹40",
      images: [
        `${process.env.PUBLIC_URL}/image/Charger/1.5A/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/1.5A/2.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/1.5A/3.jpg`,
      ],
      description: "Fast charging, durable build with premium gold plating.",
    },
    {
      id: 2,
      name: "Fast Charger 10W",
      model: "FD-TYPEC, FAST CHARGER 10W, USB TO TYPE-C, QC 3.0",
      amp: "10W",
      quality: "Original Quality",
      price: "₹80",
      discountedPrice: "₹50",
      images: [
        `${process.env.PUBLIC_URL}/image/Charger/10W/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/10W/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/10W/1.jpg`,
      ],
      description: "Efficient 10W quick charge with USB Type-C support.",
    },
    {
      id: 3,
      name: "Fast Charger 20W",
      model: "FD-TYPEC, FAST CHARGER 20W, USB TO TYPE-C, QC 3.0, VOOC",
      amp: "20W",
      quality: "Original Quality",
      price: "₹150",
      discountedPrice: "₹80",
      images: [`${process.env.PUBLIC_URL}/image/Charger/20W/1.jpg`],
      description: "Powerful 20W fast charging compatible with most devices.",
    },
    {
      id: 4,
      name: "Fast Charger 33W",
      model: "FD-TYPEC, FAST CHARGER 33W, USB TO TYPE-C, QC 3.0, VOOC, PD",
      amp: "33W",
      quality: "Original Quality",
      price: "₹200",
      discountedPrice: "₹150",
      images: [
        `${process.env.PUBLIC_URL}/image/Charger/33W/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/33W/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/33W/1.jpg`,
      ],
      description: "High-speed 33W charger with Power Delivery and VOOC support.",
    },
    {
      id: 5,
      name: "Fast Charger",
      model:
        "FD-TYPEC, SAMSUNG 40W, FAST CHARGER, 100% Charge 67, SUPER FAST POWER ADAPTER, USB TO TYPE-C, QC 3.0, VOOC, etc.",
      amp: "40W",
      quality: "Original Quality",
      price: "₹300",
      discountedPrice: "₹180",
      images: [
        `${process.env.PUBLIC_URL}/image/Charger/40W/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/40W/2.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/40W/3.jpg`,
      ],
      description: "Quick charge with high-speed output and Samsung 40W support.",
    },
    {
      id: 6,
      name: "Fast Charger 44W",
      model:
        "FD-TYPEC, SAMSUNG 44W, FAST CHARGER, USB TO TYPE-C, QC 3.0, VOOC",
      amp: "44W",
      quality: "Original Quality",
      price: "₹599",
      discountedPrice: "₹300",
      images: [
        `${process.env.PUBLIC_URL}/image/Charger/44W/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/44W/2.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/44W/1.jpg`,
      ],
      description: "Ultra-fast 44W Samsung charger with quick charge and VOOC technology.",
    },
    {
      id: 7,
      name: "Super Charger",
      model: "SC-USB, SuperVOOC, SUPERDART, Realme, OnePlus DASH, Samsung 25W/33W, etc.",
      amp: "45W",
      quality: "Premium Quality",
      price: "₹599",
      discountedPrice: "₹300",
      images: [
        `${process.env.PUBLIC_URL}/image/Charger/45W/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/45W/2.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/45W/3.jpg`,
      ],
      description: "Durable with surge protection and super-fast charging support.",
    },
    {
      id: 8,
      name: "Mini Charger",
      model:
        "MC-TYPEB, 65W VIVO SUPER CHARGING, Power Adapter, Type-C, VOOC, SUPERDART, USB to Type-C, Lightning, Realme, Oppo, Samsung 25W/40W, etc.",
      amp: "65W",
      quality: "Compact and Reliable",
      price: "₹650",
      discountedPrice: "₹350",
      images: [
        `${process.env.PUBLIC_URL}/image/Charger/65W/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/65W/2.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/65W/3.jpg`,
      ],
      description:
        "Portable for daily use with support for multiple fast charging technologies.",
    },
    {
      id: 9,
      name: "Multi-Brand Charger",
      model:
        "Type-C, Micro USB (V8), Lightning (iPhone), 65W VIVO, VOOC, SUPERDART, QC 3.0, DASH, USB to Type-C, Realme, Oppo, MI Turbo, Samsung 25W/40W, etc.",
      amp: "85W",
      quality: "Universal Compatibility",
      price: "₹800",
      discountedPrice: "₹450",
      images: [
        `${process.env.PUBLIC_URL}/image/Charger/85W/1.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/85W/2.jpg`,
        `${process.env.PUBLIC_URL}/image/Charger/85W/3.jpg`,
      ],
      description:
        "Compatible with all major mobile brands and fast-charging technologies.",
    },
  ];

  // Helper function to parse price string to number (₹60 -> 60)
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.replace(/[^0-9.-]+/g, ""));
  };

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
💳 Payment Method: ${
      paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"
    }`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // Ref for the slider container
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="p-4 max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-bold mb-4">🔌 Chargers</h2>

      <div className="flex gap-4 mb-6 flex-wrap">
        {/* Charger Type Selector */}
        <div className="flex-1 min-w-[140px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">
            Select Charger Type:
          </label>
          <select
            value={chargerType}
            onChange={(e) => setChargerType(e.target.value)}
            className="border px-2 py-1 rounded w-full text-sm"
          >
            <option value="Type-C">Type-C</option>
            <option value="Thin Pin">Thin Pin</option>
            <option value="Wide Pin">Wide Pin</option>
            <option value="Micro USB">Micro USB</option>
          </select>
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
            <option value="iPhone">iPhone</option>
          </select>
        </div>

        {/* Payment Method */}
        <div className="flex-1 min-w-[160px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">
            Select Payment Method:
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border px-2 py-1 rounded w-full text-sm"
          >
            <option value="cod">Cash on Delivery</option>
            <option value="online">Online Payment</option>
          </select>
        </div>
      </div>

      {/* Charger cards slider */}
      <div className="relative">
  <button
    onClick={slideLeft}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10 hover:bg-gray-400"
    aria-label="Scroll Left"
  >
    {/* Left Arrow SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button
    onClick={slideRight}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10 hover:bg-gray-400"
    aria-label="Scroll Right"
  >
    {/* Right Arrow SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>

  <div
    ref={sliderRef}
    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-6"
  >
    {products.map((product) => {
      const currentIndex = currentImages[product.id] || 0;
      const originalPrice = parsePrice(product.price);
      const discountedPrice = parsePrice(product.discountedPrice);
      const discountAmount = originalPrice - discountedPrice;

      return (
        <div
          key={product.id}
          className="min-w-[280px] border rounded-lg shadow-md flex flex-col bg-white"
        >
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <img
              src={product.images[currentIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    handleImageChange(
                      product.id,
                      "prev",
                      product.images.length
                    )
                  }
                  className="absolute left-1 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-80"
                  aria-label="Previous Image"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    handleImageChange(
                      product.id,
                      "next",
                      product.images.length
                    )
                  }
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-80"
                  aria-label="Next Image"
                >
                  ›
                </button>
              </>
            )}
          </div>

          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{product.model}</p>
            <p className="text-sm text-gray-600 mb-1">Power: {product.amp}</p>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>

            <p className="text-gray-500 line-through text-sm">{product.price}</p>
            <p className="font-semibold text-lg text-green-600 mb-1">
              {product.discountedPrice}
            </p>
            {discountAmount > 0 && (
              <p className="text-red-600 font-semibold text-sm">
                You save ₹{discountAmount}
              </p>
            )}

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
</div>

    </div>
  );
}
