import React from "react";
import {
  Breadcrumb,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";
import { PhotoPanel } from "./PhotoPanel";
import { GeneralPublicContent } from "./GeneralPublicContent";
import { Language, useSettings } from "../../context";

const multilingual = {
  en: {
    home: `Home`,
    general_public: "General Public",
    desc: "Learn about us and explore our resources to ensure quality and safety across sectors.",
  },
  cn: {
    home: `主頁`,
    general_public: "公眾人士",
    desc: "了解我們並探索我們的資源如何確保各行各業的品質與安全。",
  },
};

export const GeneralPublic: React.FC = () => {
  const { isPC, language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { home, general_public, desc } = page_text;

  const breadcrumbItems = [
    { label: home, href: "/hkctc" },
    { label: general_public },
  ];

  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title={general_public}
        titleTheme="elegancePurple"
        description={desc}
        barBackgroundImg="generalPublic/banner_bg.png"
      />

      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        <PhotoPanel />
        <GeneralPublicContent />
      </div>
    </div>
  );
};
