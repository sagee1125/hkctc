import React from "react";
import {
  Breadcrumb,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";
import { ServiceUsersContent } from "./ServiceUsersContent";
import { useSettings } from "../../context";

export const ServiceUsers: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "T&C Service Users" },
  ];
  const { isPC } = useSettings();

  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title="T&C Service Users"
        titleTheme="energeticOrange"
        description="Learn how testing and certification services support businesses and build trust."
        barBackgroundImg="serviceUsers/Service_Users_banner_bg.png"
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        <ServiceUsersContent />
      </div>
    </div>
  );
};
