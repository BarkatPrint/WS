import React, { useEffect, useRef, useState } from "react";

export default function MobileCovers() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [coverType, setCoverType] = useState("Back Cover");
  const [customCoverType, setCustomCoverType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Vivo");
  const [customBrand, setCustomBrand] = useState("");
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const products = [
    {
      id: 1,
      name: "Silicone Back Cover",
      model: "Soft, Matte Finish",
      quality: "Shockproof, Slim Fit",
      price: "₹150",
      discountedPrice: "₹99",
      images: [
        `${process.env.PUBLIC_URL}/image/MobileCovers/SiliconeBackCover/1.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/SiliconeBackCover/2.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/SiliconeBackCover/3.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/SiliconeBackCover/4.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/SiliconeBackCover/5.jpg`,
      ],
      description: "Flexible silicone case with anti-slip grip.",
    },
    {
      id: 2,
      name: "Transparent Cover",
      model: "Clear TPU",
      quality: "Slim and Flexible",
      price: "₹120",
      discountedPrice: "₹85",
      images: [
        `${process.env.PUBLIC_URL}/image/MobileCovers/TransparentCover/1.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/TransparentCover/2.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/TransparentCover/3.jpg`,
      ],
      description: "Crystal-clear protection with flexible edges.",
    },
    {
      id: 3,
      name: "Girls Mobile Cover",
      model: "Printed Soft Cover",
      quality: "Trendy, Flexible Grip",
      price: "₹180",
      discountedPrice: "₹129",
      images: [
        `${process.env.PUBLIC_URL}/image/MobileCovers/GirlsMobileCover/1.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/GirlsMobileCover/2.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/GirlsMobileCover/3.jpg`,
      ],
      description: "Colorful and stylish cover designed for girls.",
    },
    {
      id: 4,
      name: "iPhone Cover",
      model: "Premium Polycarbonate",
      quality: "Rigid & Stylish",
      price: "₹250",
      discountedPrice: "₹180",
      images: [
        `${process.env.PUBLIC_URL}/image/MobileCovers/iPhoneCover/1.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/iPhoneCover/2.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/iPhoneCover/3.jpg`,
      ],
      description: "Premium hard shell cover designed exclusively for iPhones.",
    },
    {
      id: 5,
      name: "Leather Flip Cover",
      model: "Magnetic Closure",
      quality: "Premium PU Leather, Card Slots",
      price: "₹300",
      discountedPrice: "₹199",
      images: [
        `${process.env.PUBLIC_URL}/image/MobileCovers/LeatherFlipCover/1.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/LeatherFlipCover/2.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/LeatherFlipCover/3.jpg`,
      ],
      description: "Elegant leather flip cover with magnetic lock and storage for cards.",
    },
  ];

  // Handle next/prev image carousel logic per product
  const handleImageChange = (productId, direction, totalImages) => {
    setCurrentImages((prev) => {
      const currentIndex = prev[productId] || 0;
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;
      return { ...prev, [productId]: newIndex };
    });
    setIsPaused(true); // Pause auto-scroll on manual nav
  };

  // Buy Now button triggers WhatsApp with product + custom options + payment method
  const handleBuyNow = (product) => {
    const finalCoverType = coverType === "Other" ? customCoverType.trim() || "Not specified" : coverType;
    const finalBrand = selectedBrand === "Other" ? customBrand.trim() || "Not specified" : selectedBrand;

    const message = `*Product Details:*
📱 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🧢 Cover Type: ${finalCoverType}
🏷️ Mobile Brand: ${finalBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setIsPaused(true);
  };

  // Auto-scroll carousel every 3 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const scrollStep = 260; // approx width of a card + gap
        const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;

        if (scrollContainerRef.current.scrollLeft + scrollStep >= maxScrollLeft) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Pause auto-scroll on hover and clicks
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleClickInside = () => setIsPaused(true);

  return (
    <div className="p-4 max-w-[1100px] mx-auto">
      <h2 className="text-3xl font-bold mb-4">📱 Mobile Covers</h2>
      <p className="text-green-700 font-medium text-sm mb-6">
        All types of mobile covers available — Back, Flip, Transparent, iPhone, Girls Covers & more!
      </p>

      {/* Cover Type & Brand Selectors */}
      <div className="flex gap-6 flex-wrap mb-8">
        <div className="flex-1 min-w-[140px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">Select Cover Type:</label>
          <select
            value={coverType}
            onChange={(e) => setCoverType(e.target.value)}
            className="border px-2 py-1 rounded w-full text-sm"
          >
            <option value="">-- Choose Cover Type --</option>
            <option value="Back Cover">Back Cover</option>
            <option value="Flip Cover">Flip Cover</option>
            <option value="Transparent">Transparent</option>
            <option value="Hard Cover">Hard Cover</option>
            <option value="Girls Mobile Cover">Girls Mobile Cover</option>
            <option value="iPhone Cover">iPhone Cover</option>
            <option value="Leather Flip Cover">Leather Flip Cover</option>
            <option value="Silicone Cover">Silicone Cover</option>
            <option value="Designer Cover">Designer Cover</option>
            <option value="Other">Other</option>
          </select>
          {coverType === "Other" && (
            <input
              type="text"
              placeholder="Enter custom cover type"
              className="mt-2 border px-2 py-1 rounded w-full text-sm"
              value={customCoverType}
              onChange={(e) => setCustomCoverType(e.target.value)}
            />
          )}
        </div>

        <div className="flex-1 min-w-[140px]">
          <label className="block mb-1 font-semibold text-gray-700 text-sm">Select Mobile Brand:</label>
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

      {/* Carousel container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickInside}
        className="flex overflow-x-auto gap-4 pb-4 no-scrollbar cursor-pointer"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((product) => {
          const currentIndex = currentImages[product.id] || 0;
          return (
            <div
              key={product.id}
              className="min-w-[250px] max-w-[250px] border rounded shadow hover:shadow-lg flex-shrink-0 bg-white scroll-snap-align-start"
              style={{ cursor: "pointer" }}
              onClick={() => setIsPaused(true)} // pause on card click
            >
              {/* Image section with navigation buttons */}
              <div className="relative h-44 w-full overflow-hidden rounded-t">
                <img
                  src={product.images[currentIndex]}
                  alt={`${product.name} - Image ${currentIndex + 1}`}
                  className="object-contain w-full h-full transition-transform duration-300"
                  draggable={false}
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageChange(product.id, "prev", product.images.length);
                      }}
                      aria-label="Previous image"
                      className="absolute left-1 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-1 rounded-full"
                    >
                      &#10094;
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageChange(product.id, "next", product.images.length);
                      }}
                      aria-label="Next image"
                      className="absolute right-1 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-1 rounded-full"
                    >
                      &#10095;
                    </button>
                  </>
                )}
              </div>

              {/* Product details */}
              <div className="p-3">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-1">{product.description}</p>
                <p className="text-sm text-gray-700">
                  Model: <span className="font-medium">{product.model}</span>
                </p>
                <p className="text-sm text-gray-700">
                  Quality: <span className="font-medium">{product.quality}</span>
                </p>
                <p className="text-sm text-red-600 font-bold my-2">
                  ₹{product.discountedPrice}
                  <span className="line-through text-gray-400 ml-2">{product.price}</span>
                </p>

                {/* Payment method selector */}
                <div className="mb-3">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Payment Method:
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="border rounded px-2 py-1 w-full text-sm"
                  >
                    <option value="cod">Cash on Delivery</option>
                    <option value="online">Online Payment</option>
                  </select>
                </div>

                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded transition"
                >
                  Buy Now via WhatsApp
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
