import React from "react";

export const BtnExpand = (props: { isHidden: boolean }): JSX.Element => (
  <div
    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors delay-[50ms] duration-500 md:h-11 md:w-11 ${props.isHidden ? "bg-black" : "border-2 border-black bg-transparent"}`}
  >
    <div className="relative">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className={`absolute inset-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-black transition-all delay-[50ms] duration-500 ${props.isHidden ? "opacity-0" : "opacity-100"}`}
        style={{ width: "20px", height: "20px" }}
      >
        <rect x="4" y="9" width="12" height="2" fill="currentColor"></rect>
      </svg>

      <svg
        viewBox="0 0 20 20"
        fill="none"
        className={`absolute inset-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-white transition-all delay-[50ms] duration-500 ${props.isHidden ? "opacity-100" : "opacity-0"}`}
        style={{ width: "20px", height: "20px" }}
      >
        <rect
          x="2"
          y="9"
          width="16"
          height="2"
          fill="currentColor"
          className={`origin-center transition-transform delay-[50ms] duration-500 ${props.isHidden ? "rotate-0" : "rotate-180"}`}
        ></rect>
        <rect
          x="9"
          y="2"
          width="2"
          height="16"
          fill="currentColor"
          className={`origin-center transition-transform delay-[50ms] duration-500 ${props.isHidden ? "rotate-0" : "rotate-90"}`}
        ></rect>
      </svg>
    </div>
  </div>
);
