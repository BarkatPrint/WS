import React from "react";

const keypadMobiles = [
  {
    id: 1,
    name: "Nokia 105",
    description: "Classic keypad mobile phone with long battery life.",
    price: "₹1,200",
    imageUrl: "https://example.com/nokia-105.jpg",
  },
  {
    id: 2,
    name: "Samsung Guru Music 2",
    description: "Feature phone with keypad and music player.",
    price: "₹1,500",
    imageUrl: "https://example.com/samsung-guru-music2.jpg",
  },
  {
    id: 3,
    name: "Micromax X741",
    description: "Affordable keypad phone with dual SIM support.",
    price: "₹1,100",
    imageUrl: "https://example.com/micromax-x741.jpg",
  },
  // Add more keypad mobiles as needed
];

const KeypadMobile = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Keypad Mobile Phones
      </h1>
      <p className="text-center text-gray-700 mb-10">
        Reliable and affordable keypad mobiles with easy-to-use interface and
        long battery life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {keypadMobiles.map((mobile) => (
          <div
            key={mobile.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <img
              src={mobile.imageUrl}
              alt={mobile.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{mobile.name}</h2>
            <p className="text-gray-600 mb-2">{mobile.description}</p>
            <p className="text-green-700 font-bold">{mobile.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeypadMobile;
