import React, { useState } from "react";

const redmiModels = [
  { id: 1, name: "Redmi Note 13 Pro+", price: 32000, image: "https://via.placeholder.com/300x400?text=Redmi+Note+13+Pro+" },
  { id: 2, name: "Redmi Note 13 Pro", price: 28000, image: "https://via.placeholder.com/300x400?text=Redmi+Note+13+Pro" },
  { id: 3, name: "Redmi Note 13", price: 20000, image: "https://via.placeholder.com/300x400?text=Redmi+Note+13" },
  { id: 4, name: "Redmi Note 12 Pro+", price: 30000, image: "https://via.placeholder.com/300x400?text=Redmi+Note+12+Pro+" },
  { id: 5, name: "Redmi Note 12 Pro", price: 27000, image: "https://via.placeholder.com/300x400?text=Redmi+Note+12+Pro" },
  { id: 6, name: "Redmi Note 12", price: 18000, image: "https://via.placeholder.com/300x400?text=Redmi+Note+12" },
  { id: 7, name: "Redmi 12 5G", price: 14000, image: "https://via.placeholder.com/300x400?text=Redmi+12+5G" },
  { id: 8, name: "Redmi 11 Prime", price: 11000, image: "https://via.placeholder.com/300x400?text=Redmi+11+Prime" },
  { id: 9, name: "Redmi 10A", price: 9500, image: "https://via.placeholder.com/300x400?text=Redmi+10A" },
  { id: 10, name: "Redmi 9i", price: 8000, image: "https://via.placeholder.com/300x400?text=Redmi+9i" },
];

const RedmiPhones = () => {
  const [showAll, setShowAll] = useState(false);

  const handleBuyNow = (product) => {
    const message = `*Order Details:*\nModel: ${product.name}\nPrice: ₹${product.price}`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 Redmi Models</h2>

      {!showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 mb-4">
          {redmiModels.slice(0, 8).map((phone) => (
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
          {showAll ? "Show Less" : "See All Redmi Models"}
        </button>
      </div>

      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {redmiModels.map((phone, index) => (
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

export default RedmiPhones;
