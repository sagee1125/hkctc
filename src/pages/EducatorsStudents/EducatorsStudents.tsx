import React from "react";
import { Breadcrumb, ExploreDetailBar } from "../../components";
import { PhotoPanel } from "./PhotoPanel";
import { EducatorsStudentsContent } from "./EducatorsStudentsContent";

export const EducatorsStudents: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Educators & Students" },
  ];

  return (
    <div>
      <ExploreDetailBar
        title="Educators & Students"
        titleTheme="trustfulBlue"
        description="Know more about certificate & testing in education, and how to become part of us"
        barBackgroundImg="educatorsStudents/banner_bg.png"
      />
      <Breadcrumb items={breadcrumbItems} />
      <PhotoPanel />
      <EducatorsStudentsContent />
    </div>
  );
};
