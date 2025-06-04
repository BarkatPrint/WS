import React from "react";

export default function SellerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Welcome to Become a Seller on <span className="text-green-600">Wholesale Bazaar</span>
      </h1>

      {/* Mobile Accessories */}
      <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">
        Mobile Accessories - Available Now
      </h2>
      <p className="text-gray-700 text-center mb-10">
        Apna business grow karein <strong>Wholesale Bazaar</strong> ke sath.  
        Agar aap bechte hain <strong>mobile accessories</strong>, toh humein contact karein!  
        Apna samaan <strong>bilkul free me bech sakte hain, koi charge nahi lagega</strong>.  
        Humara mission hai chhote business ko bada business banane mein madad karna.  
        Apna samaan poore India mein online bechein, bina kisi jhanjhat ke.  
        Aur agar aapka samaan achhi tarah bikta hai, toh Wholesale Bazaar ki taraf se aapko special inaam bhi mil sakta hai!
      </p>

      {/* Electronic Products */}
      <h2 className="text-2xl font-semibold text-center text-blue-700 mb-4">
        Electronic Products & Appliances - Available Now
      </h2>
      <p className="text-gray-700 text-center mb-10">
        Hum aapka swagat karte hain agar aap bechte hain <strong>computer accessories</strong>, <strong>solar products</strong>, <strong>electrical equipment</strong> jaise <strong>AC</strong>, <strong>freeze</strong>, <strong>cooler</strong>, <strong>washing machine</strong> aur aise hi anya electrical appliances ke parts.  
        Apna samaan <strong>bilkul free me bech sakte hain, koi charge nahi lagega</strong>.  
        Hum chhote business ko badhawa dene ke liye yahan hain.  
        Apna samaan poore Bharat mein online bechein bina kisi pareshani ke.
      </p>

      {/* Coming Soon Section */}
      <h2 className="text-2xl font-semibold text-center text-yellow-700 mb-4">
        Other Categories - Coming Soon
      </h2>
      <p className="text-gray-700 text-center mb-10">
        Fashion clothing, kitchenware, toys, grocery, footwear, beauty products, stationery, home decor, fitness equipment, automobile parts, agriculture tools, musical instruments, books, pet supplies, health products, personal care items, aur bahut kuch jaldi aapke liye available hoga.  
        Agar aap abhi in categories mein bechna chahte hain, toh humein contact karein — hum aapke liye ye option chalu kar denge!  
        Tab tak bane rahiye humare sath!
      </p>

      {/* Form */}
      <form className="bg-white shadow-md rounded px-8 py-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Mobile Number</label>
          <input
            type="tel"
            placeholder="WhatsApp Number"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Type</label>
          <input
            type="text"
            placeholder="e.g. Mobile Covers, Batteries"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            placeholder="Write about your products"
            rows={4}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <a
          href="https://wa.me/917050266383?text=Main%20Wholesale%20Bazaar%20par%20seller%20ban-na%20chahta%20hoon.%20Meri%20details%20ye%20hain%3A%0AName%3A%20%0AMobile%3A%20%0AProduct%3A%20%0AMessage%3A%20"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition duration-200"
        >
          WhatsApp Pe Submit Karein
        </a>
      </form>
    </div>
  );
}
