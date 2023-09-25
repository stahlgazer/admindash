/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const StatusButton = ({ className, divClassName }) => {
  return (
    <div className={`cursor-pointer relative w-[78px] h-[28px] bg-polar-green-green-7 rounded-[3px] ${className}`}>
      <div
        className={`absolute w-[78px] top-[3px] left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-[normal]  ${divClassName}`}
      >
        Open
      </div>
    </div>
  );
};
