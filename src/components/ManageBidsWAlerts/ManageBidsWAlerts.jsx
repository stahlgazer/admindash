/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ManageBidsWAlerts = ({ className }) => {
  return (
    <div className={`w-[43px] h-[34px] ${className}`}>
      <div className="relative h-[34px]">
        <img
          className="cursor-pointer absolute w-[28px] h-[27px] top-0 left-0"
          alt="Icon sidebar"
          src="https://c.animaapp.com/U7DZF6MV/img/icon---sidebar---inactive---1--overview-1.svg"
        />
        <div className="absolute w-[26px] h-[26px] top-[8px] left-[17px] bg-closed-bids rounded-[13px]">
          <div className="absolute w-[19px] top-[4px] left-[4px] font-inter-bold-14px font-[number:var(--inter-bold-14px-font-weight)] text-white text-[length:var(--inter-bold-14px-font-size)] text-center tracking-[var(--inter-bold-14px-letter-spacing)] leading-[var(--inter-bold-14px-line-height)] whitespace-nowrap [font-style:var(--inter-bold-14px-font-style)]">
            21
          </div>
        </div>
      </div>
    </div>
  );
};
