import React from "react";


import Battery from "./Page/Battery";
import Chargers from "./Page/Charger";
import Headphone from "./Page/Headphone";
import AllMobile from "./Mobile/AllMobile";
import KeypadMobile from "./KeypadMobile/KeypadMobile";


export default function AllProducts() {
  return (
   <>
  
    
    <KeypadMobile />
    <Battery />
    
    <Chargers />
    <Headphone />

    </>
    
  );
}
