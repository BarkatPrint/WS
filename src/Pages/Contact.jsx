import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8">
        Contact
      </h1>

      <hr className="border-t-2 border-gray-300 mb-8" />

      <div className="text-lg mb-6 text-center">
        <strong>Mobile No:</strong> 7050266383
      </div>

      <div className="text-base leading-relaxed space-y-2">
        <p><strong>Address 1:</strong> Iqbal Nagar, Gaya</p>
        <p><strong>Address 2:</strong> Ramshila More, Gaya</p>
        <p><strong>Address 3:</strong> Pirmansoor, GB Road, Gaya</p>
        <p><strong>Address 4:</strong> GB Road, Gaya</p>
      </div>

      {/* Images row */}
      <div className="flex justify-between gap-4 mt-10">
        <img
          src={`${process.env.PUBLIC_URL}/Shpoe1.jpg`}
          alt="Location 1"
          className="w-1/3 rounded-lg object-cover"
        />
        <img
          src={`${process.env.PUBLIC_URL}/Shpoe2.jpg`}
          alt="Location 2"
          className="w-1/3 rounded-lg object-cover"
        />
        <img
          src={`${process.env.PUBLIC_URL}/Shpoe3.jpg`}
          alt="Location 3"
          className="w-1/3 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ContactPage;
