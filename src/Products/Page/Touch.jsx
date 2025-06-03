import React, { useState, useEffect, useRef } from "react";

export default function Touch() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [touchType, setTouchType] = useState("Original");
  const [customTouchType, setCustomTouchType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Vivo");
  const [customBrand, setCustomBrand] = useState("");
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const sliderRef = useRef(null);
  const autoSlideInterval = useRef(null);

  const products = [
    {
      id: 1,
      name: "Original Touch Screen",
      model: "High Quality Glass",
      quality: "Responsive & Durable",
      price: "₹500",
      discountedPrice: "₹100",
      images: [`${process.env.PUBLIC_URL}/image/Touch/Original-Touch-Screen.jpg`],
      description: "Genuine original touch screen with perfect responsiveness.",
    },
    {
      id: 2,
      name: "Premium Touch Screen",
      model: "Tempered Glass",
      quality: "Scratch Resistant",
      price: "₹599",
      discountedPrice: "₹140",
      images: [`${process.env.PUBLIC_URL}/image/Touch/Premium-Touch-Screen.jpg`],
      description: "Tempered glass touch screen with high scratch resistance.",
    },
    {
      id: 3,
      name: "Universal Touch Panel",
      model: "Compatible with multiple models",
      quality: "Affordable & Reliable",
      price: "₹1500",
      discountedPrice: "₹800",
      images: [`${process.env.PUBLIC_URL}/image/Touch/Universal-Touch-Panel.jpg`],
      description: "Compatible touch panel for many brands and models.",
    },
  ];

  const calculateDiscountPercent = (price, discountedPrice) => {
    const p = Number(price.replace(/[₹,]/g, ""));
    const dp = Number(discountedPrice.replace(/[₹,]/g, ""));
    if (p && dp && p > dp) {
      return Math.round(((p - dp) / p) * 100);
    }
    return 0;
  };

  const handleBuyNow = (product) => {
    const finalTouchType =
      touchType === "Other" ? customTouchType || "Not specified" : touchType;
    const finalBrand =
      selectedBrand === "Other" ? customBrand || "Not specified" : selectedBrand;

    const message = `*Product Details:*
📱 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🧩 Touch Type: ${finalTouchType}
🏷️ Mobile Brand: ${finalBrand}
💳 Payment Method: ${
      paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"
    }`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const slide = (direction) => {
    if (!sliderRef.current) return;
    setIsAutoSliding(false);

    const scrollAmount = sliderRef.current.clientWidth / 2;
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    if (isAutoSliding) {
      autoSlideInterval.current = setInterval(() => {
        const maxScrollLeft =
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }, 3000);
    }

    return () => {
      if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    };
  }, [isAutoSliding]);

  useEffect(() => {
    if (!isAutoSliding) {
      const timeout = setTimeout(() => setIsAutoSliding(true), 5000);
      return () => clearTimeout(timeout);
    }
  }, [isAutoSliding]);

  return (
    <div className="p-6 max-w-6xl mx-auto relative">
      <h2 className="text-4xl font-bold mb-4 text-center">
        📱 Touch Screens & Digitizers
      </h2>
      <p className="text-green-700 font-medium text-center mb-8">
        All types of touch screens available — Original, Premium, Universal & more!
      </p>

      {/* Selectors */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <label className="block mb-2 font-semibold">Select Touch Type:</label>
          <select
            value={touchType}
            onChange={(e) => setTouchType(e.target.value)}
            className="border px-3 py-2 rounded w-full"
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
              className="mt-2 border px-3 py-2 rounded w-full"
              value={customTouchType}
              onChange={(e) => setCustomTouchType(e.target.value)}
            />
          )}
        </div>

        <div className="flex-1">
          <label className="block mb-2 font-semibold">Select Mobile Brand:</label>
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
      </div>

      {/* Payment Method */}
      <div className="mb-10">
        <label className="block mb-3 font-semibold">Payment Method:</label>
        <div className="flex gap-8 flex-wrap">
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

      {/* Slider Container with Centered Arrows */}
      <div className="relative">
        <button
          onClick={() => slide("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow"
          aria-label="Slide Left"
        >
          ‹
        </button>
        <button
          onClick={() => slide("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow"
          aria-label="Slide Right"
        >
          ›
        </button>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-8"
          onMouseEnter={() => setIsAutoSliding(false)}
          onMouseLeave={() => setIsAutoSliding(true)}
        >
          {products.map((product) => {
            const discountPercent = calculateDiscountPercent(
              product.price,
              product.discountedPrice
            );

            return (
              <div
                key={product.id}
                className="min-w-[280px] max-w-[280px] border rounded-xl shadow-md p-4 bg-white flex-shrink-0 flex flex-col"
              >
                <div className="aspect-square rounded overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-1 mb-2 text-sm">{product.description}</p>

                <ul className="text-gray-700 mb-3 space-y-1 text-sm">
                  <li><strong>Model:</strong> {product.model}</li>
                  <li><strong>Quality:</strong> {product.quality}</li>
                </ul>

                <div className="mb-4 flex items-center gap-2">
                  <span className="line-through text-gray-500">{product.price}</span>
                  <span className="text-green-700 font-bold text-lg">
                    {product.discountedPrice}
                  </span>
                  {discountPercent > 0 && (
                    <span className="text-red-600 font-semibold ml-1">
                      ({discountPercent}% off)
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleBuyNow(product)}
                  className="mt-auto px-4 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition"
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
