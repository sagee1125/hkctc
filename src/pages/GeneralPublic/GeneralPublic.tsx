import React from "react";
import { Breadcrumb, fullContainer, maxContainer } from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";
import { PhotoPanel } from "./PhotoPanel";
import { GeneralPublicContent } from "./GeneralPublicContent";

export const GeneralPublic: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "General Public" },
  ];

  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title="General Public"
        titleTheme="elegancePurple"
        description="Learn about us and explore our resources to ensure quality and safety across sectors."
        barBackgroundImg="generalPublic/banner_bg.png"
      />

      <div style={maxContainer}>
        <Breadcrumb items={breadcrumbItems} />
        <PhotoPanel />
        <GeneralPublicContent />
      </div>
    </div>
  );
};
