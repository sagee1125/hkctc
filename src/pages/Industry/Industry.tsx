import React from "react";
import {
  Breadcrumb,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";

import { IndustryContent } from "./IndustryContent";
import { useSettings } from "../../context";

export const Industry: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "T&C Bodies & Practitioners" },
  ];
  const { isPC } = useSettings();

  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title="T&C Bodies & Practitioners"
        titleTheme="growthfulGreen"
        description="Discover resources and support to help testing and certification professionals thrive."
        barBackgroundImg="industry/banner_bg_2.png"
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        <IndustryContent />
      </div>
    </div>
  );
};
