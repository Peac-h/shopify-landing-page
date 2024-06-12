import React from "react";
import { BtnClose } from "../features/BtnClose";

export const TopBanner = (): JSX.Element => (
  <div className="gap-x-xl top-0 flex flex-col items-center justify-center gap-x-8 gap-y-4 py-2 md:flex-row md:gap-x-10 md:gap-y-0">
    <div className="text-center">
      <h2 className="bold-text">Start your free-trial today</h2>
    </div>
    <div>
      <div className="flex flex-wrap justify-start gap-x-2">
        <a href="/" className="button button-dark px-5 py-2">
          Get started
        </a>
        <a href="/" className="button button-transparent px-5 py-2">
          Learn more
        </a>
      </div>
    </div>
    <BtnClose className="right-[12px] top-[7.5px] md:top-[15.5px]" />
  </div>
);
