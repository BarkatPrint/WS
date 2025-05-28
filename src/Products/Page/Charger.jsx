import React, { useState } from "react";



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
    discountedPrice: "₹45",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/1.5A/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/1.5A/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/1.5A/3.jpg`
    ],
    description: "Fast charging, durable build with premium gold plating."
  },
 

  {
  id: 2,
  name: "Fast Charger 10W",
  model: "FD-TYPEC, FAST CHARGER 10W, USB TO TYPE-C, QC 3.0",
  amp: "10W",
  quality: "Original Quality",
  price: "₹50",
  discountedPrice: "₹40",
  images: [
    `${process.env.PUBLIC_URL}/image/Charger/10W/1.jpg`,
    `${process.env.PUBLIC_URL}/image/Charger/10W/1.jpg`,
    `${process.env.PUBLIC_URL}/image/Charger/10W/1.jpg`,
  ],
  description: "Efficient 10W quick charge with USB Type-C support."
},
{
  id: 3,
  name: "Fast Charger 20W",
  model: "FD-TYPEC, FAST CHARGER 20W, USB TO TYPE-C, QC 3.0, VOOC",
  amp: "20W",
  quality: "Original Quality",
  price: "₹65",
  discountedPrice: "₹55",
  images: [
    `${process.env.PUBLIC_URL}/image/Charger/20W/1.jpg`,
    
  ],
  description: "Powerful 20W fast charging compatible with most devices."
},
{
  id: 4,
  name: "Fast Charger 33W",
  model: "FD-TYPEC, FAST CHARGER 33W, USB TO TYPE-C, QC 3.0, VOOC, PD",
  amp: "33W",
  quality: "Original Quality",
  price: "₹85",
  discountedPrice: "₹75",
  images: [
    `${process.env.PUBLIC_URL}/image/Charger/33W/1.jpg`,
    `${process.env.PUBLIC_URL}/image/Charger/33W/1.jpg`,
    `${process.env.PUBLIC_URL}/image/Charger/33W/1.jpg`
  ],
  description: "High-speed 33W charger with Power Delivery and VOOC support."
},
 {
    id: 2,
    name: "Fast Charger",
    model: "FD-TYPEC, SAMSUNG 40W, FAST CHARGER, 100% Charge 67, SUPER FAST POWER ADAPTER, USB TO TYPE-C, QC 3.0, VOOC, etc.",
    amp: "40W",
    quality: "Original Quality",
    price: "₹80",
    discountedPrice: "₹60",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/40W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/40W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/40W/3.jpg`
    ],
    description: "Quick charge with high-speed output and Samsung 40W support."
  },
{
  id: 5,
  name: "Fast Charger 44W",
  model: "FD-TYPEC, SAMSUNG 44W, FAST CHARGER, USB TO TYPE-C, QC 3.0, VOOC",
  amp: "44W",
  quality: "Original Quality",
  price: "₹120",
  discountedPrice: "₹100",
  images: [
    `${process.env.PUBLIC_URL}/image/Charger/44W/1.jpg`,
    `${process.env.PUBLIC_URL}/image/Charger/44W/2.jpg`,
    `${process.env.PUBLIC_URL}/image/Charger/44W/1.jpg`
  ],
  description: "Ultra-fast 44W Samsung charger with quick charge and VOOC technology."
},

  {
    id: 3,
    name: "Super Charger",
    model: "SC-USB, SuperVOOC, SUPERDART, Realme, OnePlus DASH, Samsung 25W/33W, etc.",
    amp: "45W",
    quality: "Premium Quality",
    price: "₹100",
    discountedPrice: "₹75",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/45W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/45W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/45W/3.jpg`
    ],
    description: "Durable with surge protection and super-fast charging support."
  },
  {
    id: 4,
    name: "Mini Charger",
    model: "MC-TYPEB, 65W VIVO SUPER CHARGING, Power Adapter, Type-C, VOOC, SUPERDART, USB to Type-C, Lightning, Realme, Oppo, Samsung 25W/40W, etc.",
    amp: "65W",
    quality: "Compact and Reliable",
    price: "₹50",
    discountedPrice: "₹35",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/65W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/65W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/65W/3.jpg`
    ],
    description: "Portable for daily use with support for multiple fast charging technologies."
  },
  {
    id: 5,
    name: "Multi-Brand Charger",
    model: "Type-C, Micro USB (V8), Lightning (iPhone), 65W VIVO, VOOC, SUPERDART, QC 3.0, DASH, USB to Type-C, Realme, Oppo, MI Turbo, Samsung 25W/40W, etc.",
    amp: "85W",
    quality: "Universal Compatibility",
    price: "₹120",
    discountedPrice: "₹90",
    images: [
      `${process.env.PUBLIC_URL}/image/Charger/85W/1.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/85W/2.jpg`,
      `${process.env.PUBLIC_URL}/image/Charger/85W/3.jpg`
    ],
    description: "Compatible with all major mobile brands and fast-charging technologies."
  
  
  },
  // New 5 products:
  
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

  const handleBuyNow = (product) => {
    const message = `*Product Details:*
🔌 Name: ${product.name}
📦 Model: ${product.model}
⚡ Power: ${product.amp}
✅ Quality: ${product.quality}
💸 Price: ${product.discountedPrice}
🧩 Charger Type: ${chargerType}
🏷️ Preferred Brand: ${selectedBrand}
💳 Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}`;

    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
  <h2 className="text-3xl font-bold mb-4">🔌 Chargers</h2>

  <div className="flex gap-4 mb-6">
    {/* Charger Type Selector */}
    <div className="flex-1 min-w-[140px]">
      <label className="block mb-1 font-semibold text-gray-700 text-sm">Select Charger Type:</label>
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
      <label className="block mb-1 font-semibold text-gray-700 text-sm">Select Mobile Brand:</label>
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
        <option value="OnePlus">OnePlus</option>
        <option value="Apple">Apple</option>
        <option value="Infinix">Infinix</option>
        <option value="Itel">Itel</option>
        <option value="Lenovo">Lenovo</option>
        <option value="Nokia">Nokia</option>
        <option value="Motorola">Motorola</option>
      </select>
    </div>
  </div>


      {/* Payment Method */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Payment Method:</label>
        <div className="flex gap-4">
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

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => {
          const currentIndex = currentImages[product.id] || 0;

          return (
            <div
              key={product.id}
              className="border rounded-xl shadow-lg p-4 bg-white flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full pb-[100%] mb-4 overflow-hidden rounded bg-gray-100">
                <img
                  src={product.images[currentIndex]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-1 rounded shadow"
                  onClick={() =>
                    handleImageChange(product.id, "prev", product.images.length)
                  }
                >
                  ‹
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-1 rounded shadow"
                  onClick={() =>
                    handleImageChange(product.id, "next", product.images.length)
                  }
                >
                  ›
                </button>
              </div>

              {/* Info */}
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <ul className="text-sm text-gray-700 mb-3 space-y-1">
                <li><strong>Model:</strong> {product.model}</li>
                <li><strong>Power:</strong> {product.amp}</li>
                <li><strong>Quality:</strong> {product.quality}</li>
              </ul>

              <div className="mb-3">
                <span className="text-gray-500 line-through text-sm mr-2">{product.price}</span>
                <span className="text-green-700 font-bold text-lg">{product.discountedPrice}</span>
              </div>

              {/* Buy Button */}
              <button
                onClick={() => handleBuyNow(product)}
                className="mt-auto bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
