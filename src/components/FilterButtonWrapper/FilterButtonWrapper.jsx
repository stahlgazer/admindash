/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const FilterButtonWrapper = ({ className }) => {
  return (
    <button
      className={`cursor-pointer relative w-[97px] h-[40px] bg-grey-grey-1 rounded-[4px] border-[1.5px] border-solid border-primary-cta-background all-[unset] box-border ${className}`}
    >
      <div className="absolute w-[45px] h-[24px] top-[6px] left-[14px] font-inter-bold-16px font-[number:var(--inter-bold-16px-font-weight)] text-primary-cta-background text-[length:var(--inter-bold-16px-font-size)] text-center tracking-[var(--inter-bold-16px-letter-spacing)] leading-[var(--inter-bold-16px-line-height)] [font-style:var(--inter-bold-16px-font-style)]">
        Filter
      </div>
      <img
        className="absolute w-[19px] h-[18px] top-[10px] left-[65px]"
        alt="Filtr icon"
        src="https://c.animaapp.com/U7DZF6MV/img/filtr-icon-1.svg"
      />
    </button>
  );
};
