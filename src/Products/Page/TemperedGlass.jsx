import React, { useState, useRef, useEffect } from "react";

export default function TemperedGlass() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [selectedBrand, setSelectedBrand] = useState("Vivo");
  const [customBrand, setCustomBrand] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  const [zoomedProduct, setZoomedProduct] = useState(null);
  const [zoomedIndex, setZoomedIndex] = useState(0);

  const scrollRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Full Glue Tempered Glass",
      model: "9H Hardness",
      quality: "Edge to Edge, Bubble-Free",
      price: "₹250",
      discountedPrice: "₹89",
      images: [`${process.env.PUBLIC_URL}/image/TemperedGlass/Full-Glue Tempered-Glass.jpg`],
      description: "Scratch resistant tempered glass with full glue.",
    },
    {
      id: 2,
      name: "Privacy Tempered Glass",
      model: "Anti-Spy",
      quality: "Screen Visible Only to You",
      price: "₹300",
      discountedPrice: "₹99",
      images: [`${process.env.PUBLIC_URL}/image/TemperedGlass/Privacy-Tempered-Glass.jpg`],
      description: "Protects screen and your privacy from side views.",
    },
    {
      id: 3,
      name: "Edge Black Tempered Glass",
      model: "3D Curved",
      quality: "Full Coverage, Strong Edge",
      price: "₹50",
      discountedPrice: "₹30",
      images: [`${process.env.PUBLIC_URL}/image/TemperedGlass/Edge-Black-Tempered-Glass.jpg`],
      description: "Curved edge black glass for stylish protection.",
    },
    {
      id: 4,
      name: "Matte Tempered Glass",
      model: "Anti-Glare",
      quality: "Smooth Touch, No Fingerprints",
      price: "₹300",
      discountedPrice: "₹99",
      images: [`${process.env.PUBLIC_URL}/image/TemperedGlass/Matte-Tempered-Glass.jpg`],
      description: "Matte finish to reduce glare and fingerprints.",
    },
    {
      id: 5,
      name: "Camera Lens Tempered Glass",
      model: "Scratch Proof",
      quality: "Crystal Clear, Strong Protection",
      price: "₹250",
      discountedPrice: "₹150",
      images: [`${process.env.PUBLIC_URL}/image/TemperedGlass/Camera-Lens-Tempered-Glass.jpg`],
      description: "Protects your camera lens from scratches and dust.",
    },
    {
      id: 6,
      name: "Full Body Tempered Glass",
      model: "360° Coverage",
      quality: "Front + Back Protection",
      price: "₹50",
      discountedPrice: "₹30",
      images: [`${process.env.PUBLIC_URL}/image/TemperedGlass/Full-Body-Tempered-Glass.jpg`],
      description: "Covers both front and back for all-around safety.",
    },
    {
      id: 7,
      name: "UV Tempered Glass",
      model: "UV Glue Based",
      quality: "Ultra Strong Bonding, Bubble-Free",
      price: "₹300",
      discountedPrice: "₹89",
      images: [`${process.env.PUBLIC_URL}/image/TemperedGlass/UV-Tempered-Glass.jpg`],
      description: "Uses UV light to cure the glue for a perfect fit.",
    },
  ];

  const calculateDiscount = (original, discounted) => {
    const originalPrice = parseFloat(original.replace(/[₹,]/g, ""));
    const discountedPrice = parseFloat(discounted.replace(/[₹,]/g, ""));
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
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
    pauseAutoScroll();
  };

  const handleBuyNow = (product) => {
    pauseAutoScroll();
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

  const pauseAutoScroll = () => {
    if (!isPaused) {
      setIsPaused(true);
      clearInterval(scrollIntervalRef.current);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
        }
      }, 3000);
    }
    return () => clearInterval(scrollIntervalRef.current);
  }, [isPaused]);

  useEffect(() => {
    const handleGlobalClick = () => pauseAutoScroll();
    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, [isPaused]);

  const scrollLeft = () => {
    pauseAutoScroll();
    scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    pauseAutoScroll();
    scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  const openZoom = (product, index) => {
    setZoomedProduct(product);
    setZoomedIndex(index);
  };

  const closeZoom = () => {
    setZoomedProduct(null);
    setZoomedIndex(0);
  };

  const handleZoomNav = (direction) => {
    const images = zoomedProduct.images;
    const newIndex =
      direction === "next"
        ? (zoomedIndex + 1) % images.length
        : (zoomedIndex - 1 + images.length) % images.length;
    setZoomedIndex(newIndex);
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
          <option value="Oppo">Oppo</option>
          <option value="Samsung">Samsung</option>
          <option value="Realme">Realme</option>
          <option value="iPhone">iPhone</option>
          <option value="MI">MI</option>
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
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            Cash on Delivery
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
            />
            Online Payment
          </label>
        </div>
      </div>

      {/* Product Cards */}
      <div className="relative">
        <h2 className="text-3xl font-bold mb-4">📱 Mobile Products</h2>

        <div className="relative flex items-center">
          <button onClick={scrollLeft} className="absolute z-10 left-0 bg-white border shadow p-2 rounded-full hover:bg-gray-200">‹</button>

          <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 px-8 snap-x snap-mandatory">
            {products.map((product) => {
              const currentIndex = currentImages[product.id] || 0;
              const discount = calculateDiscount(product.price, product.discountedPrice);
              return (
                <div key={product.id} className="min-w-[220px] max-w-[220px] snap-start border rounded-xl shadow-lg p-4 bg-white flex flex-col">
                  <div className="relative w-full pb-[100%] mb-4 overflow-hidden rounded bg-gray-100">
                    <img
                      src={product.images[currentIndex]}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                      onClick={() => openZoom(product, currentIndex)}
                    />
                    <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-1 rounded shadow"
                      onClick={(e) => { e.stopPropagation(); handleImageChange(product.id, "prev", product.images.length); }}>‹</button>
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-1 rounded shadow"
                      onClick={(e) => { e.stopPropagation(); handleImageChange(product.id, "next", product.images.length); }}>›</button>
                  </div>
                  <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <ul className="text-sm text-gray-700 mb-3 space-y-1">
                    <li><strong>Model:</strong> {product.model}</li>
                    <li><strong>Quality:</strong> {product.quality}</li>
                  </ul>
                  <div className="mb-2">
                    <span className="text-gray-500 line-through text-sm mr-2">{product.price}</span>
                    <span className="text-green-700 font-bold text-lg">{product.discountedPrice}</span>
                  </div>
                  <div className="text-red-600 text-sm mb-3 font-semibold">{discount}% OFF</div>
                  <button onClick={(e) => { e.stopPropagation(); handleBuyNow(product); }}
                    className="mt-auto bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                    Buy Now
                  </button>
                </div>
              );
            })}
          </div>

          <button onClick={scrollRight} className="absolute z-10 right-0 bg-white border shadow p-2 rounded-full hover:bg-gray-200">›</button>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <button className="absolute top-4 right-4 text-white text-3xl font-bold" onClick={closeZoom}>×</button>
          <button className="absolute left-4 text-white text-4xl" onClick={() => handleZoomNav("prev")}>‹</button>
          <img
            src={zoomedProduct.images[zoomedIndex]}
            alt="Zoomed"
            className="max-w-full max-h-full object-contain"
          />
          <button className="absolute right-4 text-white text-4xl" onClick={() => handleZoomNav("next")}>›</button>
        </div>
      )}
    </div>
  );
}
