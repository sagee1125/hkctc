import React from "react";
import {
  Breadcrumb,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";
import { PhotoPanel } from "./PhotoPanel";
import { EducatorsStudentsContent } from "./EducatorsStudentsContent";
import { useSettings } from "../../context";

export const EducatorsStudents: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Educators & Students" },
  ];
  const { isPC } = useSettings();

  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title="Educators & Students"
        titleTheme="trustfulBlue"
        description="Know more about testing and certification in education, and how to become part of us."
        barBackgroundImg="educatorsStudents/banner_bg.png"
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        <PhotoPanel />
        <EducatorsStudentsContent />
      </div>
    </div>
  );
};
