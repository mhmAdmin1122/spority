import React from "react";
import SectionHeader from "../SectionHeader";
import PricingCard from "../SectionsCards/PricingCard";

const Pricing = () => {
  return (
    <div className="border-b-[10px] border-[#ff4500] py-[60px] px-[40px]">
      <SectionHeader title="Enjoy ADS-Free Streaming" />
      <div className="py-[60px] flex flex-wrap gap-10 items-center justify-center">
        <PricingCard
          title="Basic"
          cardPrice="12"
          pricedesc="per user, per month"
          cardDescription="Esential Features for beginners. Get started with case."
          btnlink="/Live-Channels"
        />
        <PricingCard
          title="Professional"
          cardPrice="20"
          pricedesc="per user, per month"
          cardDescription="Esential Features for beginners. Get started with case."
          btnlink="/Live-Channels"
        />
        <PricingCard
          title="Heavy"
          cardPrice="25"
          pricedesc="per user, per month"
          cardDescription="Esential Features for beginners. Get started with case."
          btnlink="/Live-Channels"
        />
      </div>
    </div>
  );
};

export default Pricing;
