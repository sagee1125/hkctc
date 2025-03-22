import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `Innovation and Technology Support Programme (ITSP)`,
    ITSP_supports: `ITSP supports R&D projects undertaken mainly by designated public research institutes and R&D Centres. It focuses on supporting two types of projects:`,
    platform_projects: `Platform Projects: Applied R&D projects which are industry-oriented and have potential for commercialization.`,
    seed_projects: `Seed Projects: Projects which are exploratory and forward-looking in nature.`,
  },
  cn: {
    title: `Innovation and Technology Support Programme (ITSP)`,
    ITSP_supports: `ITSP supports R&D projects undertaken mainly by designated public research institutes and R&D Centres. It focuses on supporting two types of projects:`,
    platform_projects: `Platform Projects: Applied R&D projects which are industry-oriented and have potential for commercialization.`,
    seed_projects: `Seed Projects: Projects which are exploratory and forward-looking in nature.`,
  },
};

export const ITSP: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { title, ITSP_supports } = page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px] text-justify">
      <div className="text-heading-m text-justify">
        <Link
          outerLink="https://www.itf.gov.hk/l-eng/ITSP.asp"
          linkColor="#000"
        >
          {title}
        </Link>
      </div>

      <p className="text-body-m my-[16px]">{ITSP_supports}</p>
      <p className="gap-[24px] items-center w-full text-newPrimary">
        <span className="text-highlight-m"> • Platform Projects:&nbsp;</span>

        <span className="text-body-m">
          Applied R&D projects which are industry-oriented and have potential
          for commercialization.
        </span>
      </p>

      <p className="gap-[24px] items-center w-full text-newPrimary mt-[24px]">
        <span className="text-highlight-m"> • Seed Projects:&nbsp;</span>
        <span className="text-body-m">
          Projects which are exploratory and forward-looking in nature.
        </span>
      </p>
    </div>
  );
};
