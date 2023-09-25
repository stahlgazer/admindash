/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const AlertsIcon = ({ className, alertsIcon = "https://c.animaapp.com/U7DZF6MV/img/alerts-icon-1.svg" }) => {
  return <img className={`cursor-pointer absolute w-[45px] h-[39px] top-0 left-0 ${className}`} alt="Alerts icon" src={alertsIcon} />;
};
