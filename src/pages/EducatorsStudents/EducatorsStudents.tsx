import React from "react";
import {
  Breadcrumb,
  type BreadcrumbItem,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";
import { PhotoPanel } from "./PhotoPanel";
import { EducatorsStudentsContent } from "./EducatorsStudentsContent";
import { useSettings } from "../../context";

const multilingual = {
  en: {
    home: `Home`,
    educator_student: "Educators & Students",
    desc: "Know more about testing and certification in education, and how to become part of us.",
  },
  cn: {
    home: `主頁`,
    educator_student: "老師與學生",
    desc: "了解檢測與認證的教育，以及如何成爲我們的一員。",
  },
};

export const EducatorsStudents: React.FC = () => {
  const { isPC, getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const { home, educator_student, desc } = page_text;

  const breadcrumbItems = [
    { label: home, href: "/hkctc" },
    { label: educator_student },
  ];
  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title={educator_student as string}
        titleTheme="trustfulBlue"
        description={desc as string}
        isPC={isPC}
        barBackgroundImg="educatorsStudents/banner_bg.png"
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems as BreadcrumbItem[]} />
          </div>
        )}
        <PhotoPanel />
        <EducatorsStudentsContent />
      </div>
    </div>
  );
};
