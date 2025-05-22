import React, { useState } from "react";

const oppoModels = [
  { id: 1, name: "Oppo Reno 9 Pro+", price: 40000, image: "https://via.placeholder.com/300x400?text=Oppo+Reno+9+Pro+" },
  { id: 2, name: "Oppo Reno 9 Pro", price: 35000, image: "https://via.placeholder.com/300x400?text=Oppo+Reno+9+Pro" },
  { id: 3, name: "Oppo Reno 8T", price: 28000, image: "https://via.placeholder.com/300x400?text=Oppo+Reno+8T" },
  { id: 4, name: "Oppo A77 5G", price: 18000, image: "https://via.placeholder.com/300x400?text=Oppo+A77+5G" },
  { id: 5, name: "Oppo A57 5G", price: 15000, image: "https://via.placeholder.com/300x400?text=Oppo+A57+5G" },
  { id: 6, name: "Oppo F21 Pro", price: 22000, image: "https://via.placeholder.com/300x400?text=Oppo+F21+Pro" },
  { id: 7, name: "Oppo A17", price: 12000, image: "https://via.placeholder.com/300x400?text=Oppo+A17" },
  { id: 8, name: "Oppo A16", price: 11000, image: "https://via.placeholder.com/300x400?text=Oppo+A16" },
  { id: 9, name: "Oppo A31", price: 9000, image: "https://via.placeholder.com/300x400?text=Oppo+A31" },
  { id: 10, name: "Oppo Find X6 Pro", price: 100000, image: "https://via.placeholder.com/300x400?text=Oppo+Find+X6+Pro" },
];

const OppoPhones = () => {
  const [showAll, setShowAll] = useState(false);

  const handleBuyNow = (product) => {
    const message = `*Order Details:*\nModel: ${product.name}\nPrice: ₹${product.price}`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 Oppo Models</h2>

      {!showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 mb-4">
          {oppoModels.slice(0, 8).map((phone) => (
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
          {showAll ? "Show Less" : "See All Oppo Models"}
        </button>
      </div>

      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {oppoModels.map((phone, index) => (
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

export default OppoPhones;
