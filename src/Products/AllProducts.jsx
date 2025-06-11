import React from "react";

// Page Components for different product categories
import MobilePartsAccessories from "./Page/MobilePartsAccessories";
import Battery from "./Page/Battery";
import BatteryKeypad from "./KeypadMobile/BatteryKeypad"

import Chargers from "./Page/Charger";
import Headphone from "./Page/Headphone";
import KeypadMobile from "./KeypadMobile/KeypadMobile";
import ChargingCable from "./Page/ChargingCable";
import MobileCovers from "./Page/MobileCovers";
import TemperedGlass from "./Page/TemperedGlass";
import Display from "./Page/Display";
import Touch from "./Page/Touch";
import ScreenCombo from "./Page/ScreenCombo";
import MobileBody from "./Page/MobileBody";
import CameraPage from "./Page/CameraPage";

export default function AllProducts() {
  return (
    <>
      <MobilePartsAccessories />
      <ChargingCable />
      <Headphone />
      <Chargers />
      <KeypadMobile />
      <Battery />
      <BatteryKeypad />
      <TemperedGlass />
      <MobileBody />
      <ScreenCombo />
      <MobileCovers />
      <Display />
      <Touch />
      <CameraPage />
    </>
  );
}
