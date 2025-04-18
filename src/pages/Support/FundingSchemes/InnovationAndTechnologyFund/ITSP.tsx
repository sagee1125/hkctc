import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `Innovation and Technology Support Programme (ITSP)`,
    ITSP_supports: `ITSP supports R&D projects undertaken mainly by designated public research institutes and R&D Centres. It focuses on supporting two types of projects:`,
    pp: ` • Platform Projects:`,
    platform_projects: `Applied R&D projects which are industry-oriented and have potential for commercialization.`,
    sp: ` • Seed Projects:`,
    seed_projects: `Seed Projects: Projects which are exploratory and forward-looking in nature.`,
  },
  cn: {
    title: `創新及科技支援計劃`,
    ITSP_supports: `創新及科技支援計劃支援由指定本地公營科研機構及研發中心所進行的研發項目。計劃主要資助兩類項目：`,
    pp: ` • 平台項目`,
    platform_projects: `以產業為本，並具商品化潛力的應用研發項目。`,
    sp: " • 種子項目：",
    seed_projects: `具探索性和前瞻性的項目。`,
  },
};

export const ITSP: React.FC = () => {
  const { language, getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const { title, ITSP_supports, pp, platform_projects, sp, seed_projects } =
    page_text;

  const linkMapping: Record<Language, string> = {
    [Language.EN]: "https://www.itf.gov.hk/l-eng/ITSP.asp",
    [Language.ZH_TW]:
      "https://www.itf.gov.hk/tc/funding-programmes/supporting-research/itsp/itsp-platform-seed/index.html",
    [Language.ZH_CN]:
      "https://www.itf.gov.hk/sc/funding-programmes/supporting-research/itsp/itsp-platform-seed/index.html",
  };

  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px] text-justify">
      <div className="text-heading-m text-justify">
        <Link outerLink={linkMapping[language]} linkColor="#000">
          {title as string}
        </Link>
      </div>

      <p className="text-body-m my-[16px]">{ITSP_supports as string}</p>
      <p className="gap-[24px] items-center w-full text-newPrimary">
        <span className="text-highlight-m">{pp as string}&nbsp;</span>

        <span className="text-body-m">{platform_projects as string}</span>
      </p>

      <p className="gap-[24px] items-center w-full text-newPrimary mt-[24px]">
        <span className="text-highlight-m">{sp as string}&nbsp;</span>
        <span className="text-body-m">{seed_projects as string}</span>
      </p>
    </div>
  );
};
