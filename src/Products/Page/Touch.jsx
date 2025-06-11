import React, { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

export default function Touch() {
  const [selectedBrandMap, setSelectedBrandMap] = useState({});
  const [customBrandMap, setCustomBrandMap] = useState({});
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [fullscreen, setFullscreen] = useState({ visible: false, images: [], index: 0 });

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

  const handleBrandChange = (id, value) => {
    setSelectedBrandMap((prev) => ({ ...prev, [id]: value }));
  };

  const handleCustomBrandChange = (id, value) => {
    setCustomBrandMap((prev) => ({ ...prev, [id]: value }));
  };

  const handleBuyNow = (product) => {
    const selectedBrand = selectedBrandMap[product.id] || "Vivo";
    const customBrand = customBrandMap[product.id] || "";
    const finalBrand = selectedBrand === "Other" ? customBrand || "Not specified" : selectedBrand;

    const message = `*Product Details:*
📱 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🏷️ Mobile Brand: ${finalBrand}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const slide = (direction) => {
    if (!sliderRef.current) return;
    setIsAutoSliding(false);
    const scrollAmount = sliderRef.current.clientWidth / 2;
    sliderRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  const openFullscreen = (images) => {
    setFullscreen({ visible: true, images, index: 0 });
  };

  const closeFullscreen = () => {
    setFullscreen({ visible: false, images: [], index: 0 });
  };

  const prevImage = () => {
    setFullscreen((prev) => ({
      ...prev,
      index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1,
    }));
  };

  const nextImage = () => {
    setFullscreen((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    if (isAutoSliding) {
      autoSlideInterval.current = setInterval(() => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
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

  const calculateDiscountPercent = (price, discountedPrice) => {
    const p = Number(price.replace(/[₹,]/g, ""));
    const dp = Number(discountedPrice.replace(/[₹,]/g, ""));
    return p && dp && p > dp ? Math.round(((p - dp) / p) * 100) : 0;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto relative">
      <h2 className="text-4xl font-bold mb-4 text-center">
        📱 Touch Screens & Digitizers
      </h2>
      <p className="text-green-700 font-medium text-center mb-8">
        All types of touch screens available — Original, Premium, Universal & more!
      </p>

      {/* Slider with arrows */}
      <div className="relative">
        <button onClick={() => slide("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow">
          ‹
        </button>
        <button onClick={() => slide("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow">
          ›
        </button>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-8"
          onMouseEnter={() => setIsAutoSliding(false)}
          onMouseLeave={() => setIsAutoSliding(true)}
        >
          {products.map((product) => {
            const discountPercent = calculateDiscountPercent(product.price, product.discountedPrice);
            const brandValue = selectedBrandMap[product.id] || "Vivo";

            return (
              <div key={product.id} className="min-w-[280px] max-w-[280px] border rounded-xl shadow-md p-4 bg-white flex-shrink-0 flex flex-col">
                <div className="aspect-square rounded overflow-hidden bg-gray-100 mb-4 cursor-pointer" onClick={() => openFullscreen(product.images)}>
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" draggable={false} />
                </div>

                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-1 mb-2 text-sm">{product.description}</p>

                <ul className="text-gray-700 mb-3 space-y-1 text-sm">
                  <li><strong>Model:</strong> {product.model}</li>
                  <li><strong>Quality:</strong> {product.quality}</li>
                </ul>

                <div className="mb-4 flex items-center gap-2">
                  <span className="line-through text-gray-500">{product.price}</span>
                  <span className="text-green-700 font-bold text-lg">{product.discountedPrice}</span>
                  {discountPercent > 0 && (
                    <span className="text-red-600 font-semibold ml-1">
                      ({discountPercent}% off)
                    </span>
                  )}
                </div>

                {/* Mobile Brand Selection */}
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-semibold">Select Mobile Brand:</label>
                  <select
                    value={brandValue}
                    onChange={(e) => handleBrandChange(product.id, e.target.value)}
                    className="border px-3 py-1 rounded w-full"
                  >
                    {["Vivo", "MI", "Oppo", "Realme", "Samsung", "OnePlus", "Apple", "Infinix", "Itel", "Lenovo", "Nokia", "Motorola", "Other"].map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                  {brandValue === "Other" && (
                    <input
                      type="text"
                      placeholder="Enter custom brand"
                      className="mt-2 border px-3 py-1 rounded w-full"
                      value={customBrandMap[product.id] || ""}
                      onChange={(e) => handleCustomBrandChange(product.id, e.target.value)}
                    />
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

      {/* Fullscreen Image Modal */}
      {fullscreen.visible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button onClick={closeFullscreen} className="absolute top-4 right-4 text-white text-3xl">
            <FaTimes />
          </button>
          <button onClick={prevImage} className="absolute left-4 text-white text-4xl">‹</button>
          <img src={fullscreen.images[fullscreen.index]} alt="Product" className="max-h-[80%] max-w-[90%] object-contain" />
          <button onClick={nextImage} className="absolute right-4 text-white text-4xl">›</button>
        </div>
      )}
    </div>
  );
}
