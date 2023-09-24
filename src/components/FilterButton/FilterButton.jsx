/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const FilterButton = ({ className, icon = "https://c.animaapp.com/U7DZF6MV/img/icon-1.svg" }) => {
  return (
    <div
      className={`inline-flex items-center gap-[10px] px-[19px] py-[8px] relative bg-primary-cta-background rounded-[4px] ${className}`}
    >
      <div className="relative w-fit mt-[-1.50px] font-inter-bold-16px font-[number:var(--inter-bold-16px-font-weight)] text-primary-cta-text text-[length:var(--inter-bold-16px-font-size)] text-center tracking-[var(--inter-bold-16px-letter-spacing)] leading-[var(--inter-bold-16px-line-height)] whitespace-nowrap [font-style:var(--inter-bold-16px-font-style)]">
        Create new study
      </div>
      <img className="relative w-[16.67px] h-[16.67px]" alt="Icon" src={icon} />
    </div>
  );
};
