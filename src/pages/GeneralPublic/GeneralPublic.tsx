import React from "react";
import { Breadcrumb, ExploreDetailBar } from "../../components";

export const GeneralPublic: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "General Public" },
  ];

  return (
    <div>
      <ExploreDetailBar
        title="General"
        titleTheme="elegancePurple"
        description="Learn about us and explore our resources to ensure quality and safety across sectors."
        barBackgroundImg="banner_bg.png"
      />
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};
