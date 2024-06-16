import React from "react";
import { partners } from "../data/pagesData";

const PartnerLogo = (props: {
  img: JSX.Element;
  index: number;
}): JSX.Element => (
  <li
    className={`w-full ${
      props.index === 8 ? "sm:col-start-2 lg:col-start-auto" : ""
    }`}
  >
    <div className="max-w-[210px]">
      <div className="h-full w-full">{props.img}</div>
    </div>
  </li>
);

export const PartnerLogos = (): JSX.Element => (
  <ul className="container grid grid-cols-[repeat(2,auto)] items-center justify-center gap-x-4 gap-y-8 border-y border-b-2 border-black/20 bg-col-mint-cream py-6 sm:grid-cols-[repeat(4,auto)] md:gap-x-6 md:gap-y-10 md:py-8 lg:grid-cols-[repeat(5,auto)]">
    {partners.map((partner, index) => (
      <PartnerLogo key={index} img={partner} index={index} />
    ))}
  </ul>
);
