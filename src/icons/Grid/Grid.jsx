/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Grid = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 5H5V12H12V5Z" stroke="#9A99A2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M23 5H16V12H23V5Z" stroke="#9A99A2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M23 16H16V23H23V16Z" stroke="#9A99A2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 16H5V23H12V16Z" stroke="#9A99A2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};
