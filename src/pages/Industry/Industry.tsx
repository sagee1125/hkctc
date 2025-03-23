import React from "react";
import {
  Breadcrumb,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";

import { IndustryContent } from "./IndustryContent";
import { Language, useSettings } from "../../context";

const multilingual = {
  en: {
    home: `Home`,
    industry: "T&C Bodies & Practitioners",
    desc: "Discover resources and support to help testing and certification professionals thrive.",
  },
  cn: {
    home: `主頁`,
    industry: "檢測認證機構及從業員",
    desc: "Discover resources and support to help testing and certification professionals thrive.",
  },
};

export const Industry: React.FC = () => {
  const { isPC, language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { home, industry, desc } = page_text;

  const breadcrumbItems = [{ label: home, href: "/" }, { label: industry }];
  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        title={industry}
        titleTheme="growthfulGreen"
        description={desc}
        barBackgroundImg="industry/banner_bg_2.png"
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        <IndustryContent />
      </div>
    </div>
  );
};
