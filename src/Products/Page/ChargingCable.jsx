
import React, { useRef, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function DataCable() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [cableType, setCableType] = useState("Type-C");
  const [customCableType, setCustomCableType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Vivo");
  const [customBrand, setCustomBrand] = useState("");
  const [cart, setCart] = useState([]);

  const scrollRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "USB Data Cable",
      model: "Type-C, Micro USB, iPhone Lightning",
      quality: "Fast Charging Support",
      price: "₹60",
      discountedPrice: "₹45",
      images: [
        `${process.env.PUBLIC_URL}/image/DataCable/1.jpeg`,
        `${process.env.PUBLIC_URL}/image/DataCable/2.jpeg`,
        `${process.env.PUBLIC_URL}/image/DataCable/3.jpeg`,
      ],
      description: "Durable cable with high-speed charging and data sync.",
    },
    {
      id: 2,
      name: "Premium Data Cable",
      model: "VOOC, DASH, Turbo, Super Charge",
      quality: "Premium Quality",
      price: "₹80",
      discountedPrice: "₹60",
      images: [
         `${process.env.PUBLIC_URL}/image/DataCable/4.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/5.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/7.jpg`,
      ],
      description: "Supports all fast charging protocols and stable data transfer.",
    },
    {
      id: 3,
      name: "Super Fast Data Cable",
      model: "Type-C, VOOC, QC 3.0",
      quality: "High-Speed Charging & Data Transfer",
      price: "₹90",
      discountedPrice: "₹65",
      images: [
        `${process.env.PUBLIC_URL}/image/DataCable/8.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/9.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/10.jpg`,
      ],
      description: "Best for all fast charging Android phones like Realme, OnePlus, and Samsung.",
    },
    {
      id: 4,
      name: "iPhone Cable",
      model: "Original Connector",
      quality: "iPhone Compatible Fast Charging",
      price: "₹120",
      discountedPrice: "₹90",
      images: [
        `${process.env.PUBLIC_URL}/image/DataCable/iPhoneCable.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/iPhoneCable.jpg`,
        `${process.env.PUBLIC_URL}/image/DataCable/iPhoneCable.jpg`,

      ],
      description: "Supports iPhone 5 to iPhone 14 models for charge & sync.",
    },
  ];

  const [currentImages, setCurrentImages] = useState(() =>
    products.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const nextImage = (productId) => {
    setCurrentImages((prev) => {
      const currentIndex = prev[productId];
      const totalImages = products.find((p) => p.id === productId)?.images.length || 1;
      return {
        ...prev,
        [productId]: (currentIndex + 1) % totalImages,
      };
    });
  };

  const prevImage = (productId) => {
    setCurrentImages((prev) => {
      const currentIndex = prev[productId];
      const totalImages = products.find((p) => p.id === productId)?.images.length || 1;
      return {
        ...prev,
        [productId]: (currentIndex - 1 + totalImages) % totalImages,
      };
    });
  };

  const handleBuyNow = (product) => {
    const finalCableType = cableType === "Other" ? customCableType || "Not specified" : cableType;
    const finalBrand = selectedBrand === "Other" ? customBrand || "Not specified" : selectedBrand;

    const message = `*Product Details:*
🔌 Name: ${product.name}
📦 Model: ${product.model}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🔌 Cable Type: ${finalCableType}
🏷️ Preferred Brand: ${finalBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1 }]);
      alert(`${product.name} added to cart.`);
    } else {
      alert(`${product.name} is already in cart.`);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-3">🔌 Data Cables</h2>

      {/* Selectors */}
      <div className="flex gap-3 mb-5 flex-wrap">
        <div className="flex-1 min-w-[130px]">
          <label className="block mb-1 font-semibold text-gray-700 text-xs">Select Cable Type:</label>
          <select
            value={cableType}
            onChange={(e) => setCableType(e.target.value)}
            className="border px-2 py-1 rounded w-full text-xs"
          >
            <option value="Type-C">Type-C</option>
            <option value="Thin Pin">Thin Pin</option>
            <option value="Wide Pin">Wide Pin</option>
            <option value="Micro USB">Micro USB</option>
            <option value="Lightning">Lightning (iPhone)</option>
            <option value="Other">Other</option>
          </select>
          {cableType === "Other" && (
            <input
              type="text"
              placeholder="Enter custom cable type"
              className="mt-1 border px-2 py-1 rounded w-full text-xs"
              value={customCableType}
              onChange={(e) => setCustomCableType(e.target.value)}
            />
          )}
        </div>

        <div className="flex-1 min-w-[130px]">
          <label className="block mb-1 font-semibold text-gray-700 text-xs">Select Mobile Brand:</label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border px-2 py-1 rounded w-full text-xs"
          >
            <option value="None">None</option>
            <option value="Normal">Normal</option>
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
              className="mt-1 border px-2 py-1 rounded w-full text-xs"
              value={customBrand}
              onChange={(e) => setCustomBrand(e.target.value)}
            />
          )}
        </div>
      </div>

      {/* Payment */}
      <div className="mb-5">
        <label className="block mb-1 font-semibold text-gray-700 text-sm">Payment Method:</label>
        <div className="flex gap-3 text-sm">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="mr-2 w-4 h-4"
            />
            Cash on Delivery
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
              className="mr-2 w-4 h-4"
            />
            Online Payment
          </label>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="relative flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          style={{ top: "45%", transform: "translateY(-50%)" }}
        >
          <MdArrowBackIos size={18} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-3 scroll-smooth scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => {
            const currentIndex = currentImages[product.id] || 0;
            const currentImage = product.images[currentIndex];

            return (
              <div
                key={product.id}
                className="flex-shrink-0 w-[180px] border rounded-lg shadow-md p-3 bg-white flex flex-col scroll-snap-align-start"
              >
                <div className="relative w-full h-28 mb-3 overflow-hidden rounded bg-gray-100 flex items-center justify-center">
                  <button
                    onClick={() => prevImage(product.id)}
                    className="absolute left-1 z-20 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-90"
                  >
                    <MdArrowBackIos size={16} />
                  </button>

                  <img
                    src={currentImage}
                    alt={`${product.name} image ${currentIndex + 1}`}
                    className="w-full h-full object-cover rounded"
                  />

                  <button
                    onClick={() => nextImage(product.id)}
                    className="absolute right-1 z-20 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-90"
                  >
                    <MdArrowForwardIos size={16} />
                  </button>
                </div>

                <h2 className="text-md font-semibold text-gray-800 truncate">{product.name}</h2>
                <p className="text-xs text-gray-600 mb-1 truncate" title={product.description}>
                  {product.description}
                </p>
                <ul className="text-xs text-gray-700 mb-2 space-y-0.5">
                  <li>
                    <strong>Model:</strong> {product.model}
                  </li>
                  <li>
                    <strong>Quality:</strong> {product.quality}
                  </li>
                </ul>

                <div className="mb-2">
                  <span className="text-gray-400 line-through text-xs mr-1">{product.price}</span>
                  <span className="text-green-700 font-semibold text-sm">{product.discountedPrice}</span>
                </div>

                <div className="flex flex-col gap-1 mt-auto">
                
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="bg-green-600 text-white py-1.5 text-sm rounded hover:bg-green-700 transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          style={{ top: "45%", transform: "translateY(-50%)" }}
        >
          <MdArrowForwardIos size={18} />
        </button>
      </div>
    </div>
  );
}
