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

  const correctPassword = "admin123";

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
    if (!form.name || !form.price || !form.image) {
      setMessage("❌ सभी आवश्यक फ़ील्ड भरें");
      return;
    }

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", form.image);
    formData.append("upload_preset", "unsigned_preset"); // ✅ Replace with your Cloudinary unsigned preset

    try {
      console.log("📤 Uploading to Cloudinary...", form.image);

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dmo7cymca/image/upload",
        formData,
        { timeout: 20000 } // ⏱️ 20 seconds timeout
      );

      const imageUrl = res.data.secure_url;
      console.log("✅ Cloudinary Upload Success:", imageUrl);

      const discountAmount =
        form.price - (form.price * form.discount) / 100;

      try {
        const backendResponse = await axios.post(
          "http://localhost:5000/api/products", // ✅ Your backend endpoint
          {
            name: form.name,
            price: form.price,
            discount: form.discount,
            discountAmount,
            description: form.description,
            imageUrl,
          }
        );

        setUploadedProduct({
          ...form,
          imageUrl,
          discountAmount,
        });

        setMessage(
          "✅ Upload Successful! Backend Response: " +
            backendResponse.data.message
        );

        setForm({
          name: "",
          price: "",
          discount: "",
          description: "",
          image: null,
        });
      } catch (err) {
        console.error("❌ Backend Error:", err);
        setMessage("❌ Backend Upload Failed: " + err.message);
      }
    } catch (err) {
      console.error("❌ Cloudinary Upload Error:", err);
      setMessage("❌ Upload Failed: " + err.message);
    }

    setUploading(false);
  };

  // 🔐 Password Input
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
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
          >
            Submit
          </button>
          {authMessage && (
            <p className="text-red-600 text-center">{authMessage}</p>
          )}
        </form>
      </div>
    );
  }

  // 📦 Upload Form
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
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Discount (%)"
          value={form.discount}
          onChange={(e) => setForm({ ...form, discount: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setForm({ ...form, image: e.target.files[0] })
          }
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          {uploading ? "Uploading..." : "Upload Product"}
        </button>
        {message && <p className="text-center mt-2">{message}</p>}
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
            <p className="text-gray-600 mt-2">
              {uploadedProduct.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
