import React, { useState } from "react";

const vivoModels = [
  { id: 1, name: "Vivo X100 Pro+", price: 55000, image: "https://via.placeholder.com/300x400?text=Vivo+X100+Pro+" },
  { id: 2, name: "Vivo V30 Pro", price: 40000, image: "https://via.placeholder.com/300x400?text=Vivo+V30+Pro" },
  { id: 3, name: "Vivo Y200e", price: 18000, image: "https://via.placeholder.com/300x400?text=Vivo+Y200e" },
  { id: 4, name: "Vivo V27", price: 32000, image: "https://via.placeholder.com/300x400?text=Vivo+V27" },
  { id: 5, name: "Vivo Y100", price: 21000, image: "https://via.placeholder.com/300x400?text=Vivo+Y100" },
  { id: 6, name: "Vivo T2", price: 17000, image: "https://via.placeholder.com/300x400?text=Vivo+T2" },
  { id: 7, name: "Vivo X90 Pro", price: 60000, image: "https://via.placeholder.com/300x400?text=Vivo+X90+Pro" },
  { id: 8, name: "Vivo V29e", price: 25000, image: "https://via.placeholder.com/300x400?text=Vivo+V29e" },
  { id: 9, name: "Vivo Y56", price: 16000, image: "https://via.placeholder.com/300x400?text=Vivo+Y56" },
  { id: 10, name: "Vivo T2x", price: 14000, image: "https://via.placeholder.com/300x400?text=Vivo+T2x" },
];

const VivoPhones = () => {
  const [showAll, setShowAll] = useState(false);

  const handleBuyNow = (product) => {
    const message = `*Order Details:*\nModel: ${product.name}\nPrice: ₹${product.price}`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 Vivo Models</h2>

      {!showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 mb-4">
          {vivoModels.slice(0, 8).map((phone) => (
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
          {showAll ? "Show Less" : "See All Vivo Models"}
        </button>
      </div>

      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {vivoModels.map((phone, index) => (
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

export default VivoPhones;
