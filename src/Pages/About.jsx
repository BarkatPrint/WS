import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-700 font-sans">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        About Us – WS Bazaar
      </h1>

      <hr className="border-t-2 border-gray-300 mb-8" />

      <p className="text-base mb-5">
        <strong className="text-black">Welcome to WS Bazaar</strong> – your trusted wholesale partner for mobile accessories & electronics.
        We are based in <strong className="text-black">Gaya, Bihar</strong>, and we specialize in supplying high-quality mobile products at wholesale prices to retailers, repair shops, and resellers.
      </p>

      <p className="text-base mb-5">
        With a focus on customer satisfaction, we ensure timely delivery, genuine products, and unbeatable rates. Our inventory includes everything from phone parts to complete repair tool kits.
      </p>

      <h3 className="text-xl font-semibold text-black mt-8 mb-3">🛠 What We Offer:</h3>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Mobile Phones & Parts</li>
        <li>Displays & Combos</li>
        <li>Chargers, Power Banks & Cables</li>
        <li>Mobile Covers & Tempered Glass</li>
        <li>Headphones & Earphones</li>
        <li>Mobile Repair Tools & Accessories</li>
      </ul>

      <h3 className="text-xl font-semibold text-black mb-3">⛳ Our Locations:</h3>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>⛳ Iqbal Nagar, Gaya</li>
        <li>⛳ Ramshila More, Gaya</li>
        <li>⛳ Pirmansoor, GB Road, Gaya</li>
        <li>⛳ GB Road, Gaya</li>
      </ul>

      <h3 className="text-xl font-semibold text-black mb-3">🙌 Why Choose WS Bazaar?</h3>
      <ul className="list-disc list-inside space-y-1 mb-8">
        <li>100% Genuine & Tested Products</li>
        <li>Competitive Wholesale Pricing</li>
        <li>Quick Dispatch & Free Delivery on Bulk Orders</li>
        <li>
          Friendly Customer Support –{" "}
          <strong className="text-black">📞 7050266383</strong>
        </li>
      </ul>

      <p className="text-center font-bold text-black">
        Thank you for trusting WS Bazaar. We look forward to growing your business together.
      </p>
    </div>
  );
};

export default AboutPage;
