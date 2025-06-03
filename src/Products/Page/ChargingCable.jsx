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
      price: "₹80",
      discountedPrice: "₹40",
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
      price: "₹120",
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
      price: "₹200",
      discountedPrice: "₹80",
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
      price: "₹250",
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

  // Helper to calculate discount percent
  const getDiscountPercent = (priceStr, discountedPriceStr) => {
    const price = Number(priceStr.replace(/[₹,]/g, ""));
    const discountedPrice = Number(discountedPriceStr.replace(/[₹,]/g, ""));
    if (!price || !discountedPrice) return 0;
    const discount = ((price - discountedPrice) / price) * 100;
    return Math.round(discount);
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
            const discountPercent = getDiscountPercent(product.price, product.discountedPrice);

            return (
              <div
                key={product.id}
                className="flex-shrink-0 w-[180px] border rounded-md p-3 bg-white shadow-sm relative scroll-snap-align-start"
              >
                <div className="relative">
                  <img
                    src={currentImage}
                    alt={product.name}
                    className="w-full h-36 object-contain rounded-md"
                    loading="lazy"
                  />
                  <button
                    onClick={() => prevImage(product.id)}
                    className="absolute top-1/2 left-1 bg-white rounded-full p-1 shadow-md -translate-y-1/2"
                    aria-label="Previous Image"
                  >
                    <MdArrowBackIos size={16} />
                  </button>
                  <button
                    onClick={() => nextImage(product.id)}
                    className="absolute top-1/2 right-1 bg-white rounded-full p-1 shadow-md -translate-y-1/2"
                    aria-label="Next Image"
                  >
                    <MdArrowForwardIos size={16} />
                  </button>
                </div>
                <h3 className="font-semibold text-sm mt-2">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-1">{product.model}</p>
                <p className="text-xs text-gray-500 mb-1">{product.quality}</p>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold">{product.discountedPrice}</span>
                  <span className="text-xs line-through text-gray-400">{product.price}</span>
                  {discountPercent > 0 && (
                    <span className="text-xs font-semibold text-green-600">({discountPercent}% OFF)</span>
                  )}
                </div>
                
                <button
                  onClick={() => handleBuyNow(product)}
                  className="w-full bg-green-600 text-white py-1 rounded hover:bg-green-700 text-xs"
                >
                  Buy Now
                </button>
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

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold text-lg mb-2">Cart Items</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-1 text-sm">
                <span>{item.name} (x{item.quantity})</span>
                <span>{item.discountedPrice}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
