import React, { useState } from "react";

const iphoneModels = [
  { id: 1, name: "iPhone 16 Pro Max", price: 139000, image: "https://via.placeholder.com/300x400?text=iPhone+16+Pro+Max" },
  { id: 2, name: "iPhone 16", price: 99000, image: "https://via.placeholder.com/300x400?text=iPhone+16" },
  { id: 3, name: "iPhone 15 Pro", price: 125000, image: "https://via.placeholder.com/300x400?text=iPhone+15+Pro" },
  { id: 4, name: "iPhone 15", price: 79999, image: "https://via.placeholder.com/300x400?text=iPhone+15" },
  { id: 5, name: "iPhone 14 Pro Max", price: 119000, image: "https://via.placeholder.com/300x400?text=iPhone+14+Pro+Max" },
  { id: 6, name: "iPhone 14", price: 72000, image: "https://via.placeholder.com/300x400?text=iPhone+14" },
  { id: 7, name: "iPhone 13", price: 60000, image: "https://via.placeholder.com/300x400?text=iPhone+13" },
  { id: 8, name: "iPhone SE (2022)", price: 45000, image: "https://via.placeholder.com/300x400?text=iPhone+SE+2022" },
  { id: 9, name: "iPhone 12", price: 40000, image: "https://via.placeholder.com/300x400?text=iPhone+12" },
  { id: 10, name: "iPhone 11", price: 35000, image: "https://via.placeholder.com/300x400?text=iPhone+11" },
  // Add more models if needed
];

const IPhones = () => {
  const [showAll, setShowAll] = useState(false);

  const handleBuyNow = (product) => {
    const message = `*Order Details:*\nModel: ${product.name}\nPrice: ₹${product.price}`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 iPhone Models</h2>

      {!showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 mb-4">
          {iphoneModels.slice(0, 8).map((phone) => (
            <div key={phone.id} className="border rounded-lg shadow p-2 flex flex-col items-center">
              <img src={phone.image} alt={phone.name} className="w-24 h-32 object-cover rounded-md mb-2" />
              <div className="text-sm font-semibold text-center">{phone.name}</div>
              <div className="text-xs text-gray-600">₹{phone.price}</div>
              <button
                onClick={() => handleBuyNow(phone)}
                className="mt-2 w-full bg-green-600 text-white py-1 rounded text-sm hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mb-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="underline text-blue-600 font-medium"
        >
          {showAll ? "Show Less" : "See All iPhone Models"}
        </button>
      </div>

      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {iphoneModels.map((phone, index) => (
            <div key={phone.id} className="border rounded-lg shadow p-3 flex flex-col items-center">
              <div className="text-xs text-gray-500 mb-1">#{index + 1}</div>
              <img src={phone.image} alt={phone.name} className="w-24 h-32 object-cover rounded-md mb-2" />
              <div className="font-semibold text-sm text-center">{phone.name}</div>
              <div className="text-xs text-gray-700 mb-2">₹{phone.price}</div>
              <button
                onClick={() => handleBuyNow(phone)}
                className="w-full bg-green-600 text-white py-1 rounded text-sm hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IPhones;
