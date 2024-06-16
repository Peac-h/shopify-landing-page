import React from "react";
import VideoMd from "../assets/videoMd.mov";
import VideoSm from "../assets/videoSm.mov";

export const IllustrationShopify = (): JSX.Element => {
  return (
    <div>
      <div className="mx-auto aspect-square w-3/4 max-w-[464px] -translate-y-5 md:hidden md:w-1/3">
        <video src={VideoSm} autoPlay loop className="h-full w-full" />
      </div>

      <div className="mx-auto hidden aspect-square w-3/4 max-w-[464px] -translate-y-7 md:block md:w-1/3">
        <video src={VideoMd} autoPlay loop className="h-full w-full" />
      </div>
    </div>
  );
};
