import React from "react";
import {
  Breadcrumb,
  type BreadcrumbItem,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import { ExploreDetailBar } from "../../components/Navigator";

import { IndustryContent } from "./IndustryContent";
import { useSettings } from "../../context";

const multilingual = {
  en: {
    home: `Home`,
    industry: "T&C Bodies & Practitioners",
    desc: "Discover resources and support to help testing and certification professionals thrive.",
  },
  cn: {
    home: `主頁`,
    industry: "檢測認證機構及從業員",
    desc: "探索資源與支援，助檢測與認證專業人士蓬勃發展。",
  },
};

export const Industry: React.FC = () => {
  const { isPC, getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const { home, industry, desc } = page_text;

  const breadcrumbItems = [{ label: home, href: "/" }, { label: industry }];
  return (
    <div style={fullContainer}>
      <ExploreDetailBar
        isPC={isPC}
        title={industry as string}
        titleTheme="growthfulGreen"
        description={desc as string}
        barBackgroundImg={
          isPC ? "industry/banner_bg_1.png" : "industry/banner_bg_2.png"
        }
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems as BreadcrumbItem[]} />
          </div>
        )}
        <IndustryContent />
      </div>
    </div>
  );
};
