import React from "react";
import { Breadcrumb } from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";

import { IndustryContent } from "./IndustryContent";

export const Industry: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "T&C Bodies & Practitioners" },
  ];

  return (
    <div>
      <ExploreDetailBar
        title="T&C Bodies & Practitioners"
        titleTheme="growthfulGreen"
        description="Learn how we can help you with business and acknowledgements"
        barBackgroundImg="industry/banner_bg.png"
      />
      <Breadcrumb items={breadcrumbItems} />
      <IndustryContent />
    </div>
  );
};
