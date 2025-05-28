import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KeypadBatteries from '../Page/KeypadBatteries'

export default function Batteries() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currentImages, setCurrentImages] = useState({});
  const [batteryType, setBatteryType] = useState("Li-ion");
  const [selectedBrand, setSelectedBrand] = useState("Vivo");

  const sliderRef = useRef(null);

  const batteries = [
  {
    id: 1,
    name: "Compatible iPhone Battery",
    model: "IP-COMP1000",
    capacity: "2000 mAh",
    quality: "Local Compatible",
    price: "₹1000",
    discountedPrice: "₹850",
    images: [
      "/image/Battery/iPhone/1.jpg",
      "/image/Battery/iPhone/2.jpg",
      "/image/Battery/iPhone/3.jpg",
    ],
    description: "Reliable replacement for iPhone models.",
  },
  {
    id: 2,
    name: "Compatible Samsung Battery",
    model: "SAM-COMP800",
    capacity: "3000 mAh",
    quality: "Local Compatible",
    price: "₹800",
    discountedPrice: "₹650",
    images: [
      "/image/Battery/Samsung/1.jpg",
      "/image/Battery/Samsung/2.jpg",
      "/image/Battery/Samsung/3.jpg",
    ],
    description: "Efficient and cost-effective Samsung backup.",
  },
  {
    id: 3,
    name: "Vivo/Oppo Compatible Battery",
    model: "VO-COMP600",
    capacity: "3200 mAh",
    quality: "Local Compatible",
    price: "₹600",
    discountedPrice: "₹500",
    images: [
      "/image/Battery/VivoOppo/1.jpg",
      "/image/Battery/VivoOppo/2.jpg",
      "/image/Battery/VivoOppo/3.jpg",
    ],
    description: "Good performance at an affordable price.",
  },
  {
    id: 4,
    name: "MI/Redmi Compatible Battery",
    model: "MI-COMP550",
    capacity: "4000 mAh",
    quality: "Local Compatible",
    price: "₹550",
    discountedPrice: "₹450",
    images: [
      "/image/Battery/MI/1.jpg",
      "/image/Battery/MI/2.jpg",
      "/image/Battery/MI/3.jpg",
    ],
    description: "Budget-friendly battery for MI and Redmi.",
  },
  {
    id: 5,
    name: "Realme Compatible Battery",
    model: "REAL-COMP580",
    capacity: "3900 mAh",
    quality: "Local Compatible",
    price: "₹580",
    discountedPrice: "₹480",
    images: [
      "/image/Battery/Realme/1.jpg",
      "/image/Battery/Realme/2.jpg",
      "/image/Battery/Realme/3.jpg",
    ],
    description: "Affordable battery for Realme phones.",
  },
  {
    id: 6,
    name: "Infinix/Tecno Compatible Battery",
    model: "INF-COMP450",
    capacity: "3500 mAh",
    quality: "Local Compatible",
    price: "₹450",
    discountedPrice: "₹350",
    images: [
      "/image/Battery/Infinix/1.jpg",
      "/image/Battery/Infinix/2.jpg",
      "/image/Battery/Infinix/3.jpg",
    ],
    description: "Low-cost battery for Infinix and Tecno.",
  },
];


  const handleImageChange = (productId, direction, totalImages) => {
    setCurrentImages((prev) => {
      const currentIndex = prev[productId] || 0;
      const newIndex = direction === "next" ? (currentIndex + 1) % totalImages : (currentIndex - 1 + totalImages) % totalImages;
      return { ...prev, [productId]: newIndex };
    });
  };

  const handleBuyNow = (product) => {
    const message = `*Product Details:*
🔋 Name: ${product.name}
📦 Model: ${product.model}
🔌 Capacity: ${product.capacity}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🧩 Battery Type: ${batteryType}
🏷️ Preferred Brand: ${selectedBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const CARD_WIDTH = 240;
  const SCROLL_AMOUNT = 3 * CARD_WIDTH;

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
   <div className="p-4">
  <h2 className="text-3xl font-bold mb-4">🔋 Battery</h2>

  {/* Battery Type & Brand - side by side */}
  <div className="flex flex-col md:flex-row gap-4 mb-4">
    {/* Battery Type */}
    <div className="w-full md:w-1/2">
      <label className="block font-semibold mb-1 text-sm">Battery Type</label>
      <select
        value={batteryType}
        onChange={(e) => setBatteryType(e.target.value)}
        className="w-full border px-3 py-1.5 text-sm rounded"
      >
        <option>Li-ion</option>
        <option>Li-Polymer</option>
        <option>Fast Charge</option>
        <option>Heavy Duty</option>
      </select>
    </div>

    {/* Brand */}
    <div className="w-full md:w-1/2">
      <label className="block font-semibold mb-1 text-sm">Brand</label>
      <select
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
        className="w-full border px-3 py-1.5 text-sm rounded"
      >
        <option value="None">None</option>
          <option value="Normal">Normal</option>
          <option value="Vivo">Vivo</option>
          <option value="MI">MI</option>
          <option value="Oppo">Oppo</option>
          <option value="Realme">Realme</option>
          <option value="Samsung">Samsung</option>
          <option value="Boat">Boat</option>
          <option value="JBL">JBL</option>
          <option value="Sony">Sony</option>
          <option value="Skullcandy">Skullcandy</option>
          <option value="Sennheiser">Sennheiser</option>
          <option value="Apple">Apple</option>
          <option value="Bose">Bose</option>
          <option value="Philips">Philips</option>
          <option value="Zebronics">Zebronics</option>
          <option value="Infinity">Infinity</option>
      </select>
    </div>
  </div>

  {/* Payment Method - inline & small */}
  <div className="mb-4">
    <label className="block font-semibold mb-1 text-sm">Payment Method</label>
    <div className="flex gap-4 text-sm">
      <label className="flex items-center gap-1">
        <input
          type="radio"
          checked={paymentMethod === "cod"}
          onChange={() => setPaymentMethod("cod")}
        />
        Cash on Delivery
      </label>
      <label className="flex items-center gap-1">
        <input
          type="radio"
          checked={paymentMethod === "online"}
          onChange={() => setPaymentMethod("online")}
        />
        Online Payment
      </label>
    </div>
  </div>



      {/* Slider */}
      <div className="relative">
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 rounded-full p-2 shadow">&#8592;</button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide px-8"
        >
          {batteries.map((product) => {
            const currentIndex = currentImages[product.id] || 0;
            return (
              <div key={product.id} className="min-w-[240px] flex-shrink-0 bg-white border rounded-xl shadow p-4">
                <div className="relative w-full pb-[100%] mb-4 overflow-hidden rounded bg-gray-100">
                  <img
                    src={product.images[currentIndex]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-1 py-0.5 rounded shadow"
                    onClick={() => handleImageChange(product.id, "prev", product.images.length)}
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-1 py-0.5 rounded shadow"
                    onClick={() => handleImageChange(product.id, "next", product.images.length)}
                  >
                    ›
                  </button>
                </div>

                <h3 className="font-bold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{product.description}</p>
                <ul className="text-sm mb-2">
                  <li><b>Model:</b> {product.model}</li>
                  <li><b>Capacity:</b> {product.capacity}</li>
                  <li><b>Quality:</b> {product.quality}</li>
                </ul>
                <div className="mb-2">
                  <span className="text-red-600 font-bold mr-2">{product.discountedPrice}</span>
                  <span className="line-through text-sm text-gray-500">{product.price}</span>
                </div>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-1.5 rounded"
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>

        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 hover:bg-gray-400 rounded-full p-2 shadow">&#8594;</button>
      </div>

      <div className="text-center mt-6">
        <button onClick={() => navigate("/products/battery")} className="text-blue-600 underline">
          See All Batteries
        </button>
      </div>
      <KeypadBatteries />
    </div>
  );
}
