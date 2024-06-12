import React from "react";

export const BtnExpand = (): JSX.Element => {
  return (
    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black transition-colors delay-[50ms] duration-500 md:h-11 md:w-11">
      <div className="relative">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="absolute inset-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 transition-all delay-[50ms] duration-500"
          style={{ width: "20px", height: "20px" }}
        >
          <rect x="4" y="9" width="12" height="2" fill="currentColor"></rect>
        </svg>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="absolute inset-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-white opacity-100 transition-all delay-[50ms] duration-500"
          style={{ width: "20px", height: "20px" }}
        >
          <rect
            x="2"
            y="9"
            width="16"
            height="2"
            fill="currentColor"
            className="origin-center rotate-0 transition-transform delay-[50ms] duration-500"
          ></rect>
          <rect
            x="9"
            y="2"
            width="2"
            height="16"
            fill="currentColor"
            className="origin-center rotate-0 transition-transform delay-[50ms] duration-500"
          ></rect>
        </svg>
      </div>
    </div>
  );
};
