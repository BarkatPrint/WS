import React from "react";


import Battery from "./Battery";
import Chargers from "./Charger";
import Headphone from "./Headphone";
import AllMobile from "./Mobile/AllMobile";


export default function AllProducts() {
  return (
   <>
  
    <AllMobile />
    <Battery />
    
    <Chargers />
    <Headphone />

    </>
    
  );
}
