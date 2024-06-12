import React from "react";
import "./PromoBadge.css";
import { InputForm } from "../features/InputForm";
import { SVGBadgeLower, SVGBadgeUpper } from "../features/SVGBadge";

export const PromoBadge = (): JSX.Element => (
  <section className="bg-position-[top_20%_left] relative grid gap-y-10 bg-no-repeat pb-28 pt-20 [background:#054a49_radial-gradient(circle_at_-68%_100%,_#d0f224aa_24%,_#054a49_55%)] md:gap-y-16 md:pt-32 md:[background:#054a49_radial-gradient(circle_at_-48%_130%,_#d0f224aa_24%,_#054a49_45%)]">
    <SVGBadgeUpper />

    <div className="grid-container container">
      <div className="grid-item text-white">
        <h2 className="big-heading">Build your dream business for $1/month</h2>
        <p className="big-paragraph">
          Sign up for a free trial and enjoy your first month for just $1
        </p>
      </div>
    </div>

    <div>
      <div className="mx-auto mb-2 max-w-md px-4 md:mb-6">
        <InputForm />
      </div>

      <div className="small-paragraph h-14 px-6 pt-[2.5px] leading-[1rem] text-white sm:h-6 sm:pb-0 md:h-8">
        <span className="bg-col-violet-light rounded px-1 py-0.5 align-middle">
          Get 3 days free then 1 month for $1.
        </span>
        <p className="mt-[1.5px] box-decoration-clone px-1 py-0.5">
          By entering your email, you agree to receive marketing
          emails&nbsp;from&nbsp;Shopify.
        </p>
      </div>
    </div>

    <SVGBadgeLower />
  </section>
);
