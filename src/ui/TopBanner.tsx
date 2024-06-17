import React, { useState } from "react";
import { BtnClose } from "../features/BtnClose";

export const TopBanner = (props: {
  showBanner: boolean;
  setShowBanner: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  const [removeBanner, setRemoveBanner] = useState(false);
  return (
    <div
      className={`gap-x-xl sticky top-0 z-20 flex-col items-center justify-center gap-x-8 gap-y-4 bg-white py-2 md:flex-row md:gap-x-10 md:gap-y-0 ${removeBanner ? "hidden" : props.showBanner ? "flex" : "hidden"}`}
    >
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
      <BtnClose
        className="right-[12px] top-[7.5px] md:top-[15.5px]"
        onClick={() => setRemoveBanner(true)}
      />
    </div>
  );
};
