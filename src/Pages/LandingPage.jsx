import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Welcome to WS Bazaar
      </h1>
      <p className="text-lg mb-10 text-gray-700">
        Please select your role to continue
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => navigate("/home")}
          className="bg-green-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-600 transition"
        >
          I am a Buyer
        </button>
        <button
          onClick={() => navigate("/seller")}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-600 transition"
        >
          I am a Seller
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
