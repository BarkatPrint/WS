import React from "react";

import MobilePartsAccessories from "./Page/MobilePartsAccessories"; // Corrected import
import Battery from "./Page/Battery";
import Chargers from "./Page/Charger";
import Headphone from "./Page/Headphone";
import AllMobile from "./Mobile/AllMobile";
import KeypadMobile from "./KeypadMobile/KeypadMobile";

import ChargingCable from "./Page/ChargingCable";
import MobileCovers from "./Page/MobileCovers";
import TemperedGlass from "./Page/TemperedGlass";
import Display from "./Page/Display";
import Touch from "./Page/Touch";
import ScreenCombo from "./Page/ScreenCombo";
import MobileBody from "./Page/MobileBody";

export default function AllProducts() {
  return (
    <>
      <MobilePartsAccessories />
      <AllMobile />
      <KeypadMobile />
      <Battery />
      <Chargers />
      <Headphone />
      <ChargingCable />
      <MobileCovers />
      <TemperedGlass />
      <Display />
      <Touch />
      <ScreenCombo />
      <MobileBody />
    </>
  );
}
