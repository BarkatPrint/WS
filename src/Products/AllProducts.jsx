import React, { useEffect, useState } from "react";

// Page Components
import MobilePartsAccessories from "./Page/MobilePartsAccessories";
import Battery from "./Page/Battery";
import Chargers from "./Page/Charger";
import Headphone from "./Page/Headphone";
// import AllMobile from "./Mobile/AllMobile";
import KeypadMobile from "./KeypadMobile/KeypadMobile";
import ChargingCable from "./Page/ChargingCable";
import MobileCovers from "./Page/MobileCovers";
import TemperedGlass from "./Page/TemperedGlass";
import Display from "./Page/Display";
import Touch from "./Page/Touch";
import ScreenCombo from "./Page/ScreenCombo";
import MobileBody from "./Page/MobileBody";

export default function AllProducts() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // ✅ Change endpoint as per your backend
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        console.log("Fetched data from backend:", data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <>
      <MobilePartsAccessories />
      <ChargingCable />
      <Headphone />
      <Chargers />
      <KeypadMobile />
      <Battery />
      <TemperedGlass />
      <MobileBody />
      <ScreenCombo />
      <MobileCovers />
      <Display />
      <Touch />

      {/* Debug data output (optional) */}
      <div>
        <h3>Fetched Backend Data (Demo)</h3>
        <ul>
          {productData.map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
