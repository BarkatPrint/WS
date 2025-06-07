import React, { useState } from "react";
import axios from "axios";

export default function UploadToCloudinary() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authMessage, setAuthMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    price: "",
    discount: "",
    description: "",
    image: null,
  });

  const [uploading, setUploading] = useState(false);
  const [uploadedProduct, setUploadedProduct] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const correctPassword = "admin123";

  const MAX_IMAGE_SIZE = 102400; // 100 KB in bytes

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthorized(true);
      setAuthMessage("");
    } else {
      setAuthMessage("❌ गलत पासवर्ड! कृपया सही पासवर्ड डालें।");
    }
  };

  const handleUpload = async () => {
    // Validate required fields
    if (!form.name.trim() || !form.price || !form.image) {
      setMessageType("error");
      setMessage("❌ कृपया सभी आवश्यक फ़ील्ड भरें (नाम, कीमत, और फोटो)।");
      return;
    }

    // Check image size limit
    if (form.image.size > MAX_IMAGE_SIZE) {
      setMessageType("error");
      setMessage(
        `❌ इमेज का आकार बहुत बड़ा है। कृपया 100KB से कम आकार की इमेज चुनें। (चयनित: ${(form.image.size / 1024).toFixed(2)} KB)`
      );
      return;
    }

    setUploading(true);
    setMessage("");
    setMessageType("");

    const formData = new FormData();
    formData.append("file", form.image);
    formData.append("upload_preset", "unsigned_preset"); // अपनी Cloudinary unsigned preset यहाँ डालें

    try {
      console.log("📤 Uploading to Cloudinary...", form.image);

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dmo7cymca/image/upload",
        formData,
        { timeout: 30000 } // 30 seconds timeout
      );

      const imageUrl = res.data.secure_url;
      console.log("✅ Cloudinary Upload Success:", imageUrl);

      // Parse price and discount as floats
      const priceNum = parseFloat(form.price);
      const discountNum = parseFloat(form.discount) || 0;

      // Calculate discount amount safely
      const discountAmount = priceNum - (priceNum * discountNum) / 100;

      try {
        const backendResponse = await axios.post(
          "https://ws-backend-r3in.onrender.com/api/products",
          {
            name: form.name.trim(),
            price: priceNum,
            discount: discountNum,
            discountAmount,
            description: form.description.trim(),
            imageUrl,
          }
        );

        setUploadedProduct({
          ...form,
          price: priceNum,
          discount: discountNum,
          imageUrl,
          discountAmount,
        });

        setMessageType("success");
        setMessage(
          "✅ Upload Successful! Backend Response: " + backendResponse.data.message
        );

        // Reset form
        setForm({
          name: "",
          price: "",
          discount: "",
          description: "",
          image: null,
        });
      } catch (backendErr) {
        console.error("❌ Backend Error:", backendErr);
        setMessageType("error");
        setMessage("❌ Backend Upload Failed: " + backendErr.message);
      }
    } catch (cloudErr) {
      console.error("❌ Cloudinary Upload Error:", cloudErr);
      setMessageType("error");
      setMessage("❌ Upload Failed: " + cloudErr.message);
    } finally {
      setUploading(false);
    }
  };

  // Password form (if not authorized)
  if (!isAuthorized) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          🔒 कृपया पासवर्ड डालें
        </h2>
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="पासवर्ड"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            disabled={uploading}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
            disabled={uploading}
          >
            Submit
          </button>
          {authMessage && (
            <p className="text-red-600 text-center mt-2">{authMessage}</p>
          )}
        </form>
      </div>
    );
  }

  // Upload form (if authorized)
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        📦 Upload Product to Cloudinary
      </h2>

      <div className="flex flex-col gap-4 mb-4">
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
          disabled={uploading}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
          min="0"
          step="0.01"
          disabled={uploading}
        />
        <input
          type="number"
          placeholder="Discount (%)"
          value={form.discount}
          onChange={(e) => setForm({ ...form, discount: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
          min="0"
          max="100"
          step="0.01"
          disabled={uploading}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
          rows={4}
          disabled={uploading}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          className="border border-gray-300 p-2 rounded w-full"
          disabled={uploading}
        />
        <button
          type="button"
          onClick={handleUpload}
          disabled={uploading}
          className={`p-2 rounded text-white ${
            uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {uploading ? "Uploading..." : "Upload Product"}
        </button>

        {message && (
          <p
            className={`text-center mt-2 ${
              messageType === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      {uploadedProduct && (
        <div className="border p-4 rounded shadow flex gap-4 items-start">
          <img
            src={uploadedProduct.imageUrl}
            alt={uploadedProduct.name}
            className="w-32 h-32 object-cover rounded"
          />
          <div>
            <h3 className="text-xl font-bold">{uploadedProduct.name}</h3>
            <p className="text-gray-700">Price: ₹{uploadedProduct.price}</p>
            <p className="text-green-600">
              Discount: {uploadedProduct.discount || 0}% (You Save ₹
              {(uploadedProduct.price - uploadedProduct.discountAmount).toFixed(
                2
              )}
              )
            </p>
            <p className="text-red-600 font-medium">
              Final Price: ₹{uploadedProduct.discountAmount.toFixed(2)}
            </p>
            <p className="text-gray-600 mt-2">{uploadedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
