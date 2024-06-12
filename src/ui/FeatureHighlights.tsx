import React from "react";
import { IllustrationShopify } from "../features/IllustrationShopify";
import { features } from "../data/pagesData";

const FeatureCard = (props: {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  paragraph: string;
}) => (
  <div className="rounded-2xl border-black p-0 ring-0 ring-black/20">
    <div>
      <picture>
        <img alt={props.imgAlt} className="mb-4 md:mb-6" src={props.imgSrc} />
      </picture>
    </div>
    <div>
      <div className="grid gap-y-2 md:gap-y-4">
        <h2 className="regular-heading">{props.heading}</h2>
        <p className="regular-paragraph">{props.paragraph}</p>
      </div>
    </div>
  </div>
);

export const FeatureHighlights = (): JSX.Element => (
  <section className="grid gap-y-10 pb-10 md:gap-y-16 md:pb-16">
    <div>
      <IllustrationShopify />
    </div>

    <div className="container grid grid-cols-1 gap-x-4 gap-y-8 bg-col-mint-cream sm:grid-cols-2 md:gap-y-10 lg:grid-cols-3 lg:gap-x-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          imgSrc={feature.imgSrc}
          imgAlt={feature.imgAlt}
          heading={feature.heading}
          paragraph={feature.paragraph}
        />
      ))}
    </div>
  </section>
);
