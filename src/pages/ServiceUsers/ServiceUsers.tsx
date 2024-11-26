import React from "react";
import { Breadcrumb, ExploreDetailBar } from "../../components";
import { ServiceUsersContent } from "./ServiceUsersContent";

export const ServiceUsers: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "T&C Service Users" },
  ];

  return (
    <div>
      <ExploreDetailBar
        title="T&C Service Users"
        titleTheme="energeticOrange"
        description="Learn how we can help you with business and acknowledgements"
        barBackgroundImg="serviceUsers/banner_bg.png"
      />
      <Breadcrumb items={breadcrumbItems} />
      <ServiceUsersContent />
    </div>
  );
};
