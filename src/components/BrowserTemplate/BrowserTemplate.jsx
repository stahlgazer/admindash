/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const BrowserTemplate = ({ className, overlapGroupClassName }) => {
  return (
    <div className={`relative w-[1024px] h-[53px] bg-[#ededed] ${className}`}>
      <div className={`absolute w-[914px] h-[27px] top-[13px] left-[97px] bg-white ${overlapGroupClassName}`}>
        <div className="absolute w-[284px] top-[4px] left-[10px] [font-family:'Roboto',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
          http://website.url
        </div>
      </div>
      <div className="absolute w-[60px] h-[16px] top-[19px] left-[19px]">
        <div className="left-0 absolute w-[16px] h-[16px] top-0 bg-[#c4c4c4] rounded-[7.88px]" />
        <div className="left-[22px] absolute w-[16px] h-[16px] top-0 bg-[#c4c4c4] rounded-[7.88px]" />
        <div className="left-[44px] absolute w-[16px] h-[16px] top-0 bg-[#c4c4c4] rounded-[7.88px]" />
      </div>
    </div>
  );
};
