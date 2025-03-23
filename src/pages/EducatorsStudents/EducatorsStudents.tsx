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
import { Language, useSettings } from "../../context";

const multilingual = {
  en: {
    home: `Home`,
    educator_student: "Educators & Students",
    desc: "Know more about testing and certification in education, and how to become part of us.",
  },
  cn: {
    home: `主頁`,
    educator_student: "老師與學生",
    desc: "Know more about testing and certification in education, and how to become part of us.",
  },
};

export const EducatorsStudents: React.FC = () => {
  const { isPC, language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { home, educator_student, desc } = page_text;

  const breadcrumbItems = [
    { label: home, href: "/hkctc" },
    { label: educator_student },
  ];
  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title={educator_student}
        titleTheme="trustfulBlue"
        description={desc}
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
