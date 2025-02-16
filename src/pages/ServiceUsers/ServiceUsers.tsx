import React from "react";
import { Breadcrumb, fullContainer, maxPCContainer } from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";
import { ServiceUsersContent } from "./ServiceUsersContent";

export const ServiceUsers: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "T&C Service Users" },
  ];

  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title="T&C Service Users"
        titleTheme="energeticOrange"
        description="Learn how testing and certification services support businesses and build trust."
        barBackgroundImg="serviceUsers/Service_Users_banner_bg.png"
      />
      <div style={maxPCContainer}>
        <Breadcrumb items={breadcrumbItems} />
        <ServiceUsersContent />
      </div>
    </div>
  );
};
