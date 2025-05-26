import React from "react";

const accessories = [
  {
    id: 1,
    name: "Memory Card 64GB",
    price: "₹450",
    image: "/images/accessories/memory-card.jpg",
  },
  {
    id: 2,
    name: "Pen Drive 32GB",
    price: "₹350",
    image: "/images/accessories/pen-drive.jpg",
  },
  {
    id: 3,
    name: "Mobile Stand",
    price: "₹120",
    image: "/images/accessories/mobile-stand.jpg",
  },
  {
    id: 4,
    name: "Mini Speaker Box",
    price: "₹550",
    image: "/images/accessories/speaker-box.jpg",
  },
  {
    id: 5,
    name: "Headphone",
    price: "₹250",
    image: "/images/accessories/headphone.jpg",
  },
  // Add more items as needed
];

const AccessoriesPage = () => {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#00292d]">
        Mobile Accessories & Gadgets
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-green-600 font-bold mb-2">{item.price}</p>
            <a
              href={`https://wa.me/917050266383?text=Hello,%20I%20want%20to%20buy%20${encodeURIComponent(
                item.name
              )}%20for%20${encodeURIComponent(item.price)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mt-2 text-sm"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
