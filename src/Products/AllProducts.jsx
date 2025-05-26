import React from "react";


import Battery from "./Page/Battery";
import Chargers from "./Page/Charger";
import Headphone from "./Page/Headphone";
import AllMobile from "./Mobile/AllMobile";
import KeypadMobile from "./Keypad Mobile/KeypadMobile";


export default function AllProducts() {
  return (
   <>
  
    <AllMobile />
    <KeypadMobile />
    <Battery />
    
    <Chargers />
    <Headphone />

    </>
    
  );
}
