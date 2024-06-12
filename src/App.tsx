import React from "react";
import { TopBanner } from "./ui/TopBanner";
import { HeroSection } from "./ui/HeroSection";
import { FeatureHighlights } from "./ui/FeatureHighlights";
import { PartnerLogos } from "./ui/PartnerLogos";
import { TestimonialBadge } from "./ui/TestimonialBadge";
import { PromoBadge } from "./ui/PromoBadge";
import { FaqSection } from "./ui/FaqSection";
import { SiteFooter } from "./ui/SiteFooter";

export const App = (): JSX.Element => {
  return (
    <main className="bg-col-mint-cream">
      <TopBanner />
      <HeroSection />
      <FeatureHighlights />
      <PartnerLogos />
      <TestimonialBadge />
      <PromoBadge />
      <FaqSection />
      <SiteFooter />
    </main>
  );
};
