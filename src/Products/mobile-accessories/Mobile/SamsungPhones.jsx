import React, { useState } from "react";

const samsungModels = [
  { id: 1, name: "Samsung Galaxy S23 Ultra", price: 90000, image: "https://via.placeholder.com/300x400?text=Samsung+S23+Ultra" },
  { id: 2, name: "Samsung Galaxy S23+", price: 70000, image: "https://via.placeholder.com/300x400?text=Samsung+S23+" },
  { id: 3, name: "Samsung Galaxy S23", price: 60000, image: "https://via.placeholder.com/300x400?text=Samsung+S23" },
  { id: 4, name: "Samsung Galaxy A54", price: 32000, image: "https://via.placeholder.com/300x400?text=Samsung+A54" },
  { id: 5, name: "Samsung Galaxy A14", price: 14000, image: "https://via.placeholder.com/300x400?text=Samsung+A14" },
  { id: 6, name: "Samsung Galaxy M14", price: 13000, image: "https://via.placeholder.com/300x400?text=Samsung+M14" },
  { id: 7, name: "Samsung Galaxy M13", price: 12000, image: "https://via.placeholder.com/300x400?text=Samsung+M13" },
  { id: 8, name: "Samsung Galaxy Z Flip 5", price: 95000, image: "https://via.placeholder.com/300x400?text=Samsung+Z+Flip+5" },
  { id: 9, name: "Samsung Galaxy Z Fold 5", price: 165000, image: "https://via.placeholder.com/300x400?text=Samsung+Z+Fold+5" },
  { id: 10, name: "Samsung Galaxy Note 20", price: 45000, image: "https://via.placeholder.com/300x400?text=Samsung+Note+20" },
];

const SamsungPhones = () => {
  const [showAll, setShowAll] = useState(false);

  const handleBuyNow = (product) => {
    const message = `*Order Details:*\nModel: ${product.name}\nPrice: ₹${product.price}`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 Samsung Models</h2>

      {!showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 mb-4">
          {samsungModels.slice(0, 8).map((phone) => (
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
          {showAll ? "Show Less" : "See All Samsung Models"}
        </button>
      </div>

      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {samsungModels.map((phone, index) => (
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

export default SamsungPhones;
