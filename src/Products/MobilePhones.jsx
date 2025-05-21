import React from "react";

const iphoneModels = [
  { id: 1, name: "iPhone 16e (2025)", price: 50000, image: "https://via.placeholder.com/300x400?text=iPhone+16e" },
  { id: 2, name: "iPhone 16 Pro Max (2024)", price: 95000, image: "https://via.placeholder.com/300x400?text=iPhone+16+Pro+Max" },
  { id: 3, name: "iPhone 16 Pro (2024)", price: 90000, image: "https://via.placeholder.com/300x400?text=iPhone+16+Pro" },
  { id: 4, name: "iPhone 16 Plus (2024)", price: 75000, image: "https://via.placeholder.com/300x400?text=iPhone+16+Plus" },
  { id: 5, name: "iPhone 16 (2024)", price: 70000, image: "https://via.placeholder.com/300x400?text=iPhone+16" },
  { id: 6, name: "iPhone 15 Pro Max (2023)", price: 90000, image: "https://via.placeholder.com/300x400?text=iPhone+15+Pro+Max" },
  { id: 7, name: "iPhone 15 Pro (2023)", price: 85000, image: "https://via.placeholder.com/300x400?text=iPhone+15+Pro" },
  { id: 8, name: "iPhone 15 Plus (2023)", price: 70000, image: "https://via.placeholder.com/300x400?text=iPhone+15+Plus" },
  { id: 9, name: "iPhone 15 (2023)", price: 65000, image: "https://via.placeholder.com/300x400?text=iPhone+15" },
  { id: 10, name: "iPhone 14 Pro Max (2022)", price: 85000, image: "https://via.placeholder.com/300x400?text=iPhone+14+Pro+Max" },
  { id: 11, name: "iPhone 14 Pro (2022)", price: 80000, image: "https://via.placeholder.com/300x400?text=iPhone+14+Pro" },
  { id: 12, name: "iPhone 14 Plus (2022)", price: 65000, image: "https://via.placeholder.com/300x400?text=iPhone+14+Plus" },
  { id: 13, name: "iPhone 14 (2022)", price: 60000, image: "https://via.placeholder.com/300x400?text=iPhone+14" },
  { id: 14, name: "iPhone SE (3rd gen, 2022)", price: 35000, image: "https://via.placeholder.com/300x400?text=iPhone+SE+3rd+Gen" },
  { id: 15, name: "iPhone 13 Pro Max (2021)", price: 80000, image: "https://via.placeholder.com/300x400?text=iPhone+13+Pro+Max" },
  { id: 16, name: "iPhone 13 Pro (2021)", price: 75000, image: "https://via.placeholder.com/300x400?text=iPhone+13+Pro" },
  { id: 17, name: "iPhone 13 (2021)", price: 65000, image: "https://via.placeholder.com/300x400?text=iPhone+13" },
  { id: 18, name: "iPhone 13 mini (2021)", price: 55000, image: "https://via.placeholder.com/300x400?text=iPhone+13+mini" },
  { id: 19, name: "iPhone 12 Pro Max (2020)", price: 70000, image: "https://via.placeholder.com/300x400?text=iPhone+12+Pro+Max" },
  { id: 20, name: "iPhone 12 Pro (2020)", price: 65000, image: "https://via.placeholder.com/300x400?text=iPhone+12+Pro" },
  { id: 21, name: "iPhone 12 (2020)", price: 60000, image: "https://via.placeholder.com/300x400?text=iPhone+12" },
  { id: 22, name: "iPhone 12 mini (2020)", price: 50000, image: "https://via.placeholder.com/300x400?text=iPhone+12+mini" },
  { id: 23, name: "iPhone SE (2nd gen, 2020)", price: 35000, image: "https://via.placeholder.com/300x400?text=iPhone+SE+2nd+Gen" },
  { id: 24, name: "iPhone 11 Pro Max (2019)", price: 70000, image: "https://via.placeholder.com/300x400?text=iPhone+11+Pro+Max" },
  { id: 25, name: "iPhone 11 Pro (2019)", price: 65000, image: "https://via.placeholder.com/300x400?text=iPhone+11+Pro" },
  { id: 26, name: "iPhone 11 (2019)", price: 55000, image: "https://via.placeholder.com/300x400?text=iPhone+11" },
  { id: 27, name: "iPhone XS Max (2018)", price: 60000, image: "https://via.placeholder.com/300x400?text=iPhone+XS+Max" },
  { id: 28, name: "iPhone XS (2018)", price: 55000, image: "https://via.placeholder.com/300x400?text=iPhone+XS" },
  { id: 29, name: "iPhone XR (2018)", price: 45000, image: "https://via.placeholder.com/300x400?text=iPhone+XR" },
  { id: 30, name: "iPhone X (2017)", price: 50000, image: "https://via.placeholder.com/300x400?text=iPhone+X" },
  { id: 31, name: "iPhone 8 Plus (2017)", price: 40000, image: "https://via.placeholder.com/300x400?text=iPhone+8+Plus" },
  { id: 32, name: "iPhone 8 (2017)", price: 35000, image: "https://via.placeholder.com/300x400?text=iPhone+8" },
  { id: 33, name: "iPhone 7 Plus (2016)", price: 30000, image: "https://via.placeholder.com/300x400?text=iPhone+7+Plus" },
  { id: 34, name: "iPhone 7 (2016)", price: 25000, image: "https://via.placeholder.com/300x400?text=iPhone+7" },
  { id: 35, name: "iPhone SE (1st gen, 2016)", price: 20000, image: "https://via.placeholder.com/300x400?text=iPhone+SE+1st+Gen" },
  { id: 36, name: "iPhone 6S Plus (2015)", price: 20000, image: "https://via.placeholder.com/300x400?text=iPhone+6S+Plus" },
  { id: 37, name: "iPhone 6S (2015)", price: 18000, image: "https://via.placeholder.com/300x400?text=iPhone+6S" },
  { id: 38, name: "iPhone 6 Plus (2014)", price: 16000, image: "https://via.placeholder.com/300x400?text=iPhone+6+Plus" },
  { id: 39, name: "iPhone 6 (2014)", price: 15000, image: "https://via.placeholder.com/300x400?text=iPhone+6" },
  { id: 40, name: "iPhone 5S (2013)", price: 12000, image: "https://via.placeholder.com/300x400?text=iPhone+5S" },
  { id: 41, name: "iPhone 5C (2013)", price: 10000, image: "https://via.placeholder.com/300x400?text=iPhone+5C" },
  { id: 42, name: "iPhone 5 (2012)", price: 9000, image: "https://via.placeholder.com/300x400?text=iPhone+5" },
  { id: 43, name: "iPhone 4S (2011)", price: 8000, image: "https://via.placeholder.com/300x400?text=iPhone+4S" },
  { id: 44, name: "iPhone 4 (2010)", price: 7000, image: "https://via.placeholder.com/300x400?text=iPhone+4" },
  { id: 45, name: "iPhone 3GS (2009)", price: 6000, image: "https://via.placeholder.com/300x400?text=iPhone+3GS" },
  { id: 46, name: "iPhone 3G (2008)", price: 5000, image: "https://via.placeholder.com/300x400?text=iPhone+3G" },
  { id: 47, name: "iPhone (2007)", price: 4000, image: "https://via.placeholder.com/300x400?text=iPhone" },
];

const MobilePhones = () => {
  const handleBuyNow = (product) => {
    const message = `*Order Details:*\nModel: ${product.name}\nPrice: ₹${product.price}`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">📱 iPhone Models</h2>

      {/* Horizontal scroll of a few models */}
      <div className="flex overflow-x-auto space-x-4 mb-4">
        {iphoneModels.slice(0, 5).map((phone) => (
          <div
            key={phone.id}
            className="min-w-[160px] border rounded-lg shadow p-2 flex-shrink-0"
          >
            <img
              src={phone.image}
              alt={phone.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <div className="font-semibold">{phone.name}</div>
            <div className="text-sm text-gray-600">₹{phone.price}</div>
            <button
              onClick={() => handleBuyNow(phone)}
              className="mt-2 w-full bg-green-600 text-white py-1 rounded hover:bg-green-700"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* See All button */}
      <button
        onClick={() => {
          // Scroll to full list or toggle view (simplified here: alert)
          alert("Show all iPhone models below");
        }}
        className="mb-4 underline text-blue-600"
      >
        See All iPhone Models
      </button>

      {/* Full list in reverse order */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[...iphoneModels]
          .reverse()
          .map((phone, index) => (
            <div
              key={phone.id}
              className="border rounded-lg shadow p-3 flex flex-col items-center"
            >
              <div className="text-sm text-gray-500 mb-1">#{index + 1}</div>
              <img
                src={phone.image}
                alt={phone.name}
                className="w-28 h-36 object-cover rounded-md mb-2"
              />
              <div className="font-semibold text-center">{phone.name}</div>
              <div className="text-sm text-gray-700 mb-2">₹{phone.price}</div>
              <button
                onClick={() => handleBuyNow(phone)}
                className="w-full bg-green-600 text-white py-1 rounded hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          ))}
      </div>

      {/* 
        // Add other brands here as separate sections, e.g.:
        // ----------------------------
        // <h2 className="text-3xl font-bold mt-10 mb-4">📱 Vivo Models</h2>
        // ...horizontal scroll and full list similar to iPhone above
        // ----------------------------
        // <h2 className="text-3xl font-bold mt-10 mb-4">📱 MI Models</h2>
        // ... etc.
      */}
    </div>
  );
};

export default MobilePhones;
