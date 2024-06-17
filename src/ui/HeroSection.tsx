import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";
import { InputForm } from "../features/InputForm";
import { LogoShopify } from "../features/LogoShopify";
import { TopBanner } from "./TopBanner";

export const HeroSection = (): JSX.Element => {
  const logoHolder = useRef<HTMLDivElement>(null);
  const [showBanner, setShowBanner] = useState<boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting ? setShowBanner(false) : setShowBanner(true);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      },
    );

    if (logoHolder.current) {
      observer.observe(logoHolder.current);
    }

    return () => {
      observer.unobserve(logoHolder.current!);
    };
  }, []);

  return (
    <>
      <TopBanner showBanner={showBanner} setShowBanner={setShowBanner} />
      <section className="bg-hero grid gap-y-8 pb-8 pt-4 md:gap-y-10 md:pb-10">
        <div>
          <LogoShopify rfr={logoHolder} />
        </div>

        <div>
          <div className="grid-container container">
            <div className="grid-item">
              <h1 className="big-heading">
                Bring your ideas to life for $1/month
                <span className="sr-only"> with Shopify</span>
              </h1>

              <p className="big-paragraph">
                The future of business is yours to shape. Sign up for a free
                trial and enjoy your first month for just&nbsp;$1.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-md px-4 pt-6">
            <InputForm />
          </div>

          <p className="small-paragraph mx-auto mt-4 max-w-xl px-2 md:mt-6">
            Try Shopify free for 3 days, no credit card&nbsp;required. By
            entering your email, you agree to receive marketing
            emails&nbsp;from&nbsp;Shopify.
          </p>
        </div>
      </section>
    </>
  );
};
