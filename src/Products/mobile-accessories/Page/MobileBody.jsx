import React, { useState } from "react";

export default function MobileBody() {
  const [currentImages, setCurrentImages] = useState({});
  const [customBrandInputs, setCustomBrandInputs] = useState({});
  const [selectedBrands, setSelectedBrands] = useState({});
  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomIndex, setZoomIndex] = useState(0);
  const [zoomImages, setZoomImages] = useState([]);

  const openZoomModal = (images, index = 0) => {
    setZoomImages(images);
    setZoomIndex(index);
    setZoomedImage(images[index]);
  };

  const closeZoomModal = () => {
    setZoomedImage(null);
    setZoomIndex(0);
    setZoomImages([]);
  };

  const handleZoomNav = (direction) => {
    const newIndex =
      direction === "next"
        ? (zoomIndex + 1) % zoomImages.length
        : (zoomIndex - 1 + zoomImages.length) % zoomImages.length;
    setZoomIndex(newIndex);
    setZoomedImage(zoomImages[newIndex]);
  };

  const bigMobileBodies = [
    {
      id: "big1",
      name: "Vivo Mobile Body",
      model: "Original Back Panel",
      quality: "High Quality Plastic Body",
      price: "₹300",
      discountedPrice: "₹130",
      discountPercent: "57% OFF",
      images: [
        `${process.env.PUBLIC_URL}/image/MobileBody/Vivo-Mobile-Body.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileBody/Vivo-Mobile-Body2.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileBody/Vivo-Mobile-Body3.jpg`,
      ],
      description: "Durable and perfect fit Vivo mobile back body.",
    },
    {
      id: "big2",
      name: "Apple iPhone Body",
      model: "Original Frame",
      quality: "Metal Frame with Glass Back",
      price: "₹1000",
      discountedPrice: "₹200",
      discountPercent: "80% OFF",
      images: [
        `${process.env.PUBLIC_URL}/image/MobileBody/Apple-iPhone-Body.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileBody/Apple-iPhone-Body2.jpg`,
      ],
      description: "Premium iPhone frame and back body replacement.",
    },
    {
      id: "big3",
      name: "Realme Mobile Body",
      model: "OEM Plastic Back",
      quality: "Good Quality OEM Body",
      price: "₹350",
      discountedPrice: "₹150",
      discountPercent: "57% OFF",
      images: [
        `${process.env.PUBLIC_URL}/image/MobileBody/Realme-Mobile-Body.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileBody/Realme-Mobile-Body2.jpg`,
        `${process.env.PUBLIC_URL}/image/MobileBody/Realme-Mobile-Body3.jpg`,
      ],
      description: "Perfect fit Realme plastic mobile back panel.",
    },
  ];

  const keypadMobileBodies = [
    {
      id: "key1",
      name: "Nokia 105 Body",
      model: "Keypad Mobile Plastic Back",
      quality: "Strong & Durable Plastic",
      originalPrice: "₹250",
      discountedPrice: "₹150",
      discountPercent: "40% OFF",
      images: [`${process.env.PUBLIC_URL}/image/MobileBody/KeypadBody/Nokia-105-Body.jpg`],
      description: "Replacement plastic body for Nokia 105 keypad phone.",
    },
    {
      id: "key2",
      name: "Samsung Guru Body",
      model: "Keypad Phone Cover",
      quality: "Good Quality Plastic Body",
      originalPrice: "₹250",
      discountedPrice: "₹150",
      discountPercent: "40% OFF",
      images: [`${process.env.PUBLIC_URL}/image/MobileBody/KeypadBody/Samsung-Guru-Body.jpg`],
      description: "Samsung Guru keypad phone replacement back panel.",
    },
    {
      id: "key3",
      name: "Jio Keypad Body",
      model: "Basic Keypad Mobile Back",
      quality: "Strong Plastic Body",
      originalPrice: "₹250",
      discountedPrice: "₹150",
      discountPercent: "40% OFF",
      images: [`${process.env.PUBLIC_URL}/image/MobileBody/KeypadBody/Jio-Keypad-Body.jpg`],
      description: "Keypad mobile back body for Jio brand phones.",
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

  const handleBrandChange = (productId, value) => {
    setSelectedBrands((prev) => ({ ...prev, [productId]: value }));
  };

  const handleCustomBrandChange = (productId, value) => {
    setCustomBrandInputs((prev) => ({ ...prev, [productId]: value }));
  };

  const handleBuyNow = (product) => {
    const brandValue = selectedBrands[product.id] || "Not selected";
    const finalBrand =
      brandValue === "Other"
        ? customBrandInputs[product.id]?.trim() || "Not specified"
        : brandValue;

    const message = `*Mobile Body Order:*
📱 Product: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💰 Price: ${product.discountedPrice}
🏷️ Brand: ${finalBrand}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const renderCard = (product) => {
    const currentIndex = currentImages[product.id] || 0;

    return (
      <div key={product.id} className="border rounded-xl shadow-lg p-4 bg-white flex flex-col">
        <div className="relative cursor-pointer">
          <img
            src={product.images[currentIndex]}
            alt={product.name}
            onClick={() => openZoomModal(product.images, currentIndex)}
            className="rounded-lg mb-3 h-48 object-contain w-full"
          />
          {product.images.length > 1 && (
            <>
              <button
                onClick={() => handleImageChange(product.id, "prev", product.images.length)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
              >
                ‹
              </button>
              <button
                onClick={() => handleImageChange(product.id, "next", product.images.length)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
              >
                ›
              </button>
            </>
          )}
        </div>
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <p className="text-sm text-gray-600">{product.model}</p>
        <p className="text-sm text-gray-600">{product.quality}</p>
        <p className="text-sm mb-2">{product.description}</p>
        <p className="text-sm line-through text-gray-400">{product.price || product.originalPrice}</p>
        <p className="text-lg font-bold text-green-600">
          {product.discountedPrice}{" "}
          <span className="text-sm text-red-500">({product.discountPercent})</span>
        </p>

        <select
          value={selectedBrands[product.id] || "Samsung"}
          onChange={(e) => handleBrandChange(product.id, e.target.value)}
          className="mt-2 border px-2 py-1 rounded text-sm"
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

        {selectedBrands[product.id] === "Other" && (
          <input
            type="text"
            placeholder="Enter custom brand"
            value={customBrandInputs[product.id] || ""}
            onChange={(e) => handleCustomBrandChange(product.id, e.target.value)}
            className="mt-2 border px-2 py-1 rounded text-sm"
          />
        )}

        <button
          onClick={() => handleBuyNow(product)}
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Buy Now
        </button>
      </div>
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 Mobile Body</h2>
      <p className="text-green-700 font-medium mb-6">
        Sabhi mobile phones ke liye back body available hai – chahe smartphone ho ya keypad phone.
        Aapko jo bhi mobile ka body chahiye ho, direct WhatsApp par contact karein:{" "}
        <a
          href="https://wa.me/917050266383"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline font-semibold"
        >
          7050266383
        </a>
      </p>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Bada Mobile Bodies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {bigMobileBodies.map(renderCard)}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Keypad Mobile Bodies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {keypadMobileBodies.map(renderCard)}
        </div>
      </section>

      {zoomedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <button
            onClick={closeZoomModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ✖
          </button>
          <button
            onClick={() => handleZoomNav("prev")}
            className="absolute left-5 text-white text-4xl"
          >
            ‹
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="max-h-[90%] max-w-[90%] object-contain"
          />
          <button
            onClick={() => handleZoomNav("next")}
            className="absolute right-5 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
