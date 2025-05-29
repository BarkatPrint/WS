import React from "react";

const accessories = [
  {
    id: 1,
    name: "Memory Card (8GB)",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-8GB.jpg`,
    originalPrice: "₹200",
    price: "₹150",
  },
  {
    id: 2,
    name: "Memory Card (16GB)",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory.jpg`,
    originalPrice: "₹250",
    price: "₹200",
  },
  {
    id: 3,
    name: "Memory Card (4GB SanDisk)",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-4GB.jpg`,
    originalPrice: "₹150",
    price: "₹120",
  },
  {
    id: 4,
    name: "Samsung A06 Board",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/board.jpg`,
    originalPrice: "₹300",
    price: "₹250",
  },
  {
    id: 5,
    name: "Charging Pin Set",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/chargerpin.jpg`,
    originalPrice: "₹80",
    price: "₹50",
  },
  {
    id: 6,
    name: "Memory Card (128GB)",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/memory-128GB.jpg`,
    originalPrice: "₹600",
    price: "₹450",
  },
  {
    id: 7,
    name: "Mic Piece",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/mic.jpg`,
    originalPrice: "₹30",
    price: "₹20",
  },
  {
    id: 8,
    name: "Patta",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/patta.jpg`,
    originalPrice: "₹80",
    price: "₹60",
  },
  {
    id: 10,
    name: "Pendrive 16GB",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/pendrive.jpg`,
    originalPrice: "₹350",
    price: "₹250",
  },
  {
    id: 11,
    name: "SIM Tray",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/simtray.jpeg`,
    originalPrice: "₹50",
    price: "₹30",
  },
  {
    id: 12,
    name: "SIM Tray (Type 2)",
    image: `${process.env.PUBLIC_URL}/image/mobile-parts-&-accessories/simtray2.jpg`,
    originalPrice: "₹60",
    price: "₹35",
  },
];

const AccessoriesPage = () => {
  const handleBuyNow = (name, price) => {
    const message = `Hello, I want to buy ${name} for ${price}.`;
    const whatsappURL = `https://wa.me/917050266383?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00292d]">
        Mobile Accessories & Parts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden text-center p-2"
          >
            <div className="h-64 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2 flex items-center justify-between text-left">
              <div className="text-xs">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <div>
                  <span className="text-gray-500 line-through mr-1">{item.originalPrice}</span>
                  <span className="text-green-600 font-bold">{item.price}</span>
                </div>
              </div>
              <button
                onClick={() => handleBuyNow(item.name, item.price)}
                className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-xs"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-lg font-semibold text-gray-600 bg-yellow-100 inline-block px-6 py-3 rounded-lg shadow-sm">
          🚧 Other mobile parts are coming soon. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default AccessoriesPage;
