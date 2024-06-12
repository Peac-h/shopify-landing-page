import React from "react";

export const BtnClose = (props: { className?: string }): JSX.Element => {
  return (
    <button
      type="button"
      className={`absolute transition-opacity hover:opacity-70 ${props.className}`}
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        height="25"
        width="25"
        aria-hidden="true"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
          d="m10 10 16.97 16.97M27 10 10.03 26.97"
        ></path>
      </svg>
    </button>
  );
};
