import React from "react";

const AboutPage = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#555", // Default grey text
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          fontWeight: "bold",
          color: "#000", // Important heading in black
          marginBottom: "20px",
        }}
      >
        About Us – AR Mobile
      </h1>

      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: "#ccc",
          marginBottom: "30px",
        }}
      />

      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        <strong style={{ color: "#000" }}>Welcome to AR Mobile</strong> – your trusted wholesale partner for mobile accessories & electronics.
        We are based in <strong style={{ color: "#000" }}>Gaya, Bihar</strong>, and we specialize in supplying high-quality mobile products at wholesale prices to retailers, repair shops, and resellers.
      </p>

      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        With a focus on customer satisfaction, we ensure timely delivery, genuine products, and unbeatable rates. Our inventory includes everything from phone parts to complete repair tool kits.
      </p>

      <h3 style={{ fontSize: "20px", marginTop: "30px", marginBottom: "10px", color: "#000" }}>
        🛠 What We Offer:
      </h3>
      <ul style={{ fontSize: "16px", marginLeft: "20px", marginBottom: "20px" }}>
        <li>Mobile Phones & Parts</li>
        <li>Displays & Combos</li>
        <li>Chargers, Power Banks & Cables</li>
        <li>Mobile Covers & Tempered Glass</li>
        <li>Headphones & Earphones</li>
        <li>Mobile Repair Tools & Accessories</li>
      </ul>

      <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#000" }}>
        📍 Our Locations:
      </h3>
      <ul style={{ fontSize: "16px", marginLeft: "20px", marginBottom: "20px" }}>
        <li>Iqbal Nagar, Gaya</li>
        <li>Ramshila More, Gaya</li>
        <li>Pirmansoor, GB Road, Gaya</li>
        <li>GB Road, Gaya</li>
      </ul>

      <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#000" }}>
        🙌 Why Choose AR Mobile?
      </h3>
      <ul style={{ fontSize: "16px", marginLeft: "20px", marginBottom: "30px" }}>
        <li>100% Genuine & Tested Products</li>
        <li>Competitive Wholesale Pricing</li>
        <li>Quick Dispatch & Free Delivery on Bulk Orders</li>
        <li>
          Friendly Customer Support –{" "}
          <strong style={{ color: "#000" }}>📞 7050266383</strong>
        </li>
      </ul>

      <p style={{ fontSize: "16px", textAlign: "center", fontWeight: "bold", color: "#000" }}>
        Thank you for trusting AR Mobile. We look forward to growing your business together.
      </p>
    </div>
  );
};

export default AboutPage;
