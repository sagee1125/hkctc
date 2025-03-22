import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `Research and Development Cash Rebate Scheme`,
    the_programme_provides: `The Scheme provides further financial incentives to encourage private enterprises to participate in R&D. Under the Scheme:`,
    enterprises: `Enterprises conducting applied R&D projects supported by ITF or in partnership with designated local public research institutions will enjoy a cash rebate equivalent to 40% of their investments.`,
  },
  cn: {
    title: `Research and Development Cash Rebate Scheme`,
    the_programme_provides: `The Scheme provides further financial incentives to encourage private enterprises to participate in R&D. Under the Scheme:`,
    enterprises: `Enterprises conducting applied R&D projects supported by ITF or in partnership with designated local public research institutions will enjoy a cash rebate equivalent to 40% of their investments.`,
  },
};

export const ResearchDevelopmentCash: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { title, the_programme_provides, enterprises } = page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px] text-justify">
      <div className="text-heading-m ">
        <Link outerLink="https://www.itf.gov.hk/l-eng/crs.asp" linkColor="#000">
          {title}
        </Link>
      </div>

      <p className="text-body-m my-[16px]">{the_programme_provides}</p>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
          alt={"money"}
        />
        <p className="text-body-m flex-grow min-w-0">{enterprises}</p>
      </div>
    </div>
  );
};
