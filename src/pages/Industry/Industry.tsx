import React from "react";
import { Breadcrumb, fullContainer, maxContainer } from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";

import { IndustryContent } from "./IndustryContent";

export const Industry: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "T&C Bodies & Practitioners" },
  ];

  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title="T&C Bodies & Practitioners"
        titleTheme="growthfulGreen"
        description="Discover resources and support to help testing and certification professionals thrive."
        barBackgroundImg="industry/banner_bg_2.png"
      />
      <div style={maxContainer}>
        <Breadcrumb items={breadcrumbItems} />
        <IndustryContent />
      </div>
    </div>
  );
};
