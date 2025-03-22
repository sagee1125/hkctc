import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `Partnership Research Programme (PRP)`,
    the_programme_supports: `The Programme supports R&D projects undertaken by private companies in collaboration with local universities and public research institutions.`,
    it_provides: `It provides matching funding support for approved projects. The maximum project duration is 3 years`,
  },
  cn: {
    title: `Partnership Research Programme (PRP)`,
    the_programme_supports: `The Programme supports R&D projects undertaken by private companies in collaboration with local universities and public research institutions.`,
    it_provides: `It provides matching funding support for approved projects. The maximum project duration is 3 years`,
  },
};

export const PRP: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { title, the_programme_supports, it_provides } = page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px] text-justify">
      <div className="text-heading-m ">
        <Link outerLink="https://www.itf.gov.hk/l-eng/PRP.asp" linkColor="#000">
          {title}
        </Link>
      </div>

      <p className="text-body-m my-[16px] text-justify">
        {the_programme_supports}
      </p>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/matching.svg`}
          alt={"matching"}
        />
        <p className="text-body-m flex-grow min-w-0 text-justify">
          {it_provides}
        </p>
      </div>
    </div>
  );
};
