import React, { useState } from "react";

const keypadBatteries = [
  {
    id: 1,
    name: "Nokia Keypad Battery",
    model: "BL-5C, BL-4C, BL-4U",
    quality: "Local Compatible",
    price: "₹250",
    discountedPrice: "₹120",
    images: [
      "/image/Battery/Keypad/Nokia/1.jpg",
      "/image/Battery/Keypad/Nokia/2.jpg",
    ],
    description: "Compatible battery for Nokia basic models.",
  },
  {
    id: 2,
    name: "Samsung Guru Battery",
    model: "AB463446BU, AB533640CU",
    quality: "Local Compatible",
    price: "₹200",
    discountedPrice: "₹100",
    images: [
      "/image/Battery/Keypad/Samsung/1.jpg",
      "/image/Battery/Keypad/Samsung/2.jpg",
    ],
    description: "Reliable battery for Samsung Guru series.",
  },
  {
    id: 3,
    name: "Lava Keypad Battery",
    model: "BLV-18, BLV-45, BLV-59",
    quality: "Local Compatible",
    price: "₹200",
    discountedPrice: "₹100",
    images: [
      "/image/Battery/Keypad/Lava/1.jpg",
      "/image/Battery/Keypad/Lava/2.jpg",
    ],
    description: "Affordable Lava phone battery replacements.",
  },
  {
    id: 4,
    name: "Micromax Keypad Battery",
    model: "C115, X101, X328",
    quality: "Local Compatible",
    price: "₹180",
    discountedPrice: "₹90",
    images: [
      "/image/Battery/Keypad/Micromax/1.jpg",
      "/image/Battery/Keypad/Micromax/2.jpg",
    ],
    description: "Budget batteries for Micromax basic models.",
  },
  {
    id: 5,
    name: "Karbonn Keypad Battery",
    model: "K9, K22, K400",
    quality: "Local Compatible",
    price: "₹170",
    discountedPrice: "₹80",
    images: [
      "/image/Battery/Keypad/Karbonn/1.jpg",
      "/image/Battery/Keypad/Karbonn/2.jpg",
    ],
    description: "Compatible with most Karbonn keypad phones.",
  },
  {
    id: 6,
    name: "Itel/Intex Keypad Battery",
    model: "BL-Series Compatible",
    quality: "Local Compatible",
    price: "₹170",
    discountedPrice: "₹80",
    images: [
      "/image/Battery/Keypad/Intex/1.jpg",
      "/image/Battery/Keypad/Intex/2.jpg",
    ],
    description: "Local battery for Itel and Intex models.",
  },
];

const KeypadBatteries = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleBatteries = showAll ? keypadBatteries : keypadBatteries.slice(0, 4);

  const handleWhatsAppOrder = (battery) => {
    const message = `🔋 Battery Order\n\nBrand: ${battery.name}\nModel: ${battery.model}\nPrice: ${battery.discountedPrice}\n\nInterested in purchasing this battery.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Keypad Mobile Batteries</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {visibleBatteries.map((battery) => (
          <div
            key={battery.id}
            className="border rounded-2xl shadow p-2 flex flex-col"
          >
            <img
              src={battery.images[0]}
              alt={battery.name}
              className="rounded-xl w-full h-28 object-contain"
            />
            <h3 className="text-lg font-semibold mt-2">{battery.name}</h3>
            <p className="text-sm text-gray-600">{battery.model}</p>
            <p className="text-sm line-through text-gray-400">{battery.price}</p>
            <p className="text-green-600 font-bold">{battery.discountedPrice}</p>
            <button
              onClick={() => handleWhatsAppOrder(battery)}
              className="mt-auto bg-green-500 text-white rounded-xl py-1 px-2 text-sm"
            >
              Buy on WhatsApp
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 underline"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>
    </div>
  );
};

export default KeypadBatteries;
