import React from "react";
import { Breadcrumb, fullContainer, maxContainer } from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";
import { PhotoPanel } from "./PhotoPanel";
import { EducatorsStudentsContent } from "./EducatorsStudentsContent";

export const EducatorsStudents: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Educators & Students" },
  ];

  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title="Educators & Students"
        titleTheme="trustfulBlue"
        description="Know more about certificate & testing in education, and how to become part of us."
        barBackgroundImg="educatorsStudents/banner_bg.png"
      />
      <div style={maxContainer}>
        <Breadcrumb items={breadcrumbItems} />
        <PhotoPanel />
        <EducatorsStudentsContent />
      </div>
    </div>
  );
};
