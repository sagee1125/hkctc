import React from "react";
import { Breadcrumb, ExploreDetailBar } from "../../components";
import { PhotoPanel } from "./PhotoPanel";
import { GeneralPublicContent } from "./GeneralPublicContent";

export const GeneralPublic: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "General Public" },
  ];

  return (
    <div>
      <ExploreDetailBar
        title="General"
        titleTheme="elegancePurple"
        description="Learn about us and explore our resources to ensure quality and safety across sectors."
        barBackgroundImg="generalPublic/banner_bg.png"
      />
      <Breadcrumb items={breadcrumbItems} />
      <PhotoPanel />
      <GeneralPublicContent />
    </div>
  );
};
