import React from "react";

const ContactPage = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ 
        textAlign: "center", 
        marginBottom: "20px", 
        fontSize: "3rem",     // bada heading
        fontWeight: "bold"
      }}>
        Contact
      </h1>

      <hr style={{ 
        border: "none", 
        height: "2px", 
        backgroundColor: "#ddd",   // halka grey line
        marginBottom: "30px"       // gap
      }} />

      <div style={{ fontSize: "18px", marginBottom: "20px", textAlign: "center" }}>
        <strong>Mobile No:</strong> 7050266383
      </div>

      <div style={{ lineHeight: "1.6", fontSize: "16px" }}>
        <p><strong>Address 1:</strong> Iqbal Nagar, Gaya</p>
        <p><strong>Address 2:</strong> Ramshila More, Gaya</p>
        <p><strong>Address 3:</strong> Pirmansoor, GB Road, Gaya</p>
        <p><strong>Address 4:</strong> GB Road, Gaya</p>
      </div>
    </div>
  );
};

export default ContactPage;
