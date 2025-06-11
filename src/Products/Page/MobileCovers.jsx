import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function MobileCovers() {
  const [coverType, setCoverType] = useState("Back Cover");
  const [customCoverType, setCustomCoverType] = useState("");
  const [customBrand, setCustomBrand] = useState("");
  const [selectedBrandById, setSelectedBrandById] = useState({});
  const [currentImages, setCurrentImages] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const [zoomImageData, setZoomImageData] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const products = [
    {
      id: 1,
      name: "Silicone Back Cover",
      model: "Soft, Matte Finish",
      quality: "Shockproof, Slim Fit",
      price: "₹150",
      discountedPrice: "₹99",
      coverType: "Back Cover",
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
      coverType: "Transparent",
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
      coverType: "Girls Mobile Cover",
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
      coverType: "iPhone Cover",
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
      coverType: "Leather Flip Cover",
      images: [
        `${process.env.PUBLIC_URL}/image/MobileCovers/LeatherFlipCover/1.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/LeatherFlipCover/2.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileCovers/LeatherFlipCover/3.jpg`,
      ],
      description: "Elegant leather flip cover with magnetic lock and storage for cards.",
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
    setIsPaused(true);
  };

  const handleBuyNow = (product) => {
    const finalCoverType = coverType === "Other" ? customCoverType.trim() || "Not specified" : coverType;
    const brand = selectedBrandById[product.id] || "Not specified";
    const message = `*Product Details:*
📱 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🧢 Cover Type: ${finalCoverType}
🏷️ Mobile Brand: ${brand}`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setIsPaused(true);
  };

  const handleImageZoom = (images, index) => {
    setZoomImageData({ isOpen: true, images, currentIndex: index });
  };

  const filteredProducts = products.filter((p) => {
    const selected = coverType === "Other" ? customCoverType.trim() : coverType;
    return p.coverType.toLowerCase().includes(selected?.toLowerCase());
  });

  return (
    <div className="p-4 max-w-[1100px] mx-auto">
      <h2 className="text-3xl font-bold mb-4">📱 Mobile Covers</h2>
      <p className="text-green-700 font-medium text-sm mb-6">
        All types of mobile covers available — Back, Flip, Transparent, iPhone, Girls Covers & more!
      </p>

      {/* Cover Type Selector */}
      <div className="mb-6">
        <label className="block mb-1 font-semibold text-gray-700 text-sm">Select Cover Type:</label>
        <select
          value={coverType}
          onChange={(e) => setCoverType(e.target.value)}
          className="border px-2 py-1 rounded w-full max-w-xs text-sm"
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
            className="mt-2 border px-2 py-1 rounded w-full max-w-xs text-sm"
            value={customCoverType}
            onChange={(e) => setCustomCoverType(e.target.value)}
          />
        )}
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap gap-4 justify-start">
        {filteredProducts.map((product) => {
          const currentIndex = currentImages[product.id] || 0;
          return (
            <div
              key={product.id}
              className="w-[250px] border rounded shadow hover:shadow-lg bg-white flex flex-col"
            >
              <div className="relative h-44 w-full overflow-hidden rounded-t">
                <img
                  src={product.images[currentIndex]}
                  alt={`${product.name} - ${currentIndex + 1}`}
                  className="object-contain w-full h-full cursor-zoom-in"
                  onClick={() => handleImageZoom(product.images, currentIndex)}
                  draggable={false}
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => handleImageChange(product.id, "prev", product.images.length)}
                      className="absolute left-1 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-1 rounded-full"
                    >
                      &#10094;
                    </button>
                    <button
                      onClick={() => handleImageChange(product.id, "next", product.images.length)}
                      className="absolute right-1 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-1 rounded-full"
                    >
                      &#10095;
                    </button>
                  </>
                )}
              </div>
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

                {/* Brand Selector inside Card */}
                <label className="block text-sm font-medium mb-1 text-gray-700">Select Mobile Brand:</label>
                <select
                  value={selectedBrandById[product.id] || ""}
                  onChange={(e) =>
                    setSelectedBrandById((prev) => ({ ...prev, [product.id]: e.target.value }))
                  }
                  className="border px-2 py-1 rounded w-full text-sm mb-2"
                >
                  <option value="">-- Select Brand --</option>
                  <option value="Vivo">Vivo</option>
                  <option value="MI">MI</option>
                  <option value="Oppo">Oppo</option>
                  <option value="Realme">Realme</option>
                  <option value="Samsung">Samsung</option>
                  <option value="OnePlus">OnePlus</option>
                  <option value="Apple">Apple</option>
                  <option value="Other">Other</option>
                </select>

                {selectedBrandById[product.id] === "Other" && (
                  <input
                    type="text"
                    placeholder="Enter custom brand"
                    value={customBrand}
                    onChange={(e) => setCustomBrand(e.target.value)}
                    className="border px-2 py-1 rounded w-full text-sm mb-2"
                  />
                )}

                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
                >
                  Buy Now via WhatsApp
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Screen Zoom Modal */}
      {zoomImageData.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setZoomImageData({ isOpen: false, images: [], currentIndex: 0 })}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={() =>
              setZoomImageData((prev) => ({
                ...prev,
                currentIndex:
                  (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
              }))
            }
          >
            &#10094;
          </button>
          <img
            src={zoomImageData.images[zoomImageData.currentIndex]}
            alt="Zoomed Cover"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={() =>
              setZoomImageData((prev) => ({
                ...prev,
                currentIndex: (prev.currentIndex + 1) % prev.images.length,
              }))
            }
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
