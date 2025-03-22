import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `BUD Fund (Enterprise Support Programme)`,
    the_fund_aims_to: `The Fund aims to provide funding support to local enterprises and non-profit-distributing organisations to assist them in exploring and expanding the Mainland market through developing brands, upgrading and restructuring operations, and promoting domestic sales in the Mainland.`,
    to_capture: `To capture the economic opportunities arising from the fast-growing markets in Asia and some developing economies, since August 2018, the geographical scope of the BUD Fund was extended to cover the Southeast Asian Nations (ASEAN) markets, and some enhancement measures of the Fund were introduced.`,
    funding_support: `Funding support for individual Hong Kong enterprises in exploring and developing the Mainland (via "the Mainland Programme") and the ASEAN (via the "ASEAN Programme") markets. The Hong Kong Productivity Council acts as the Secretariat to assist in implementing the Programme.`,
    the_gov_launched: `The Government launched`,
    easy_BUD: `Easy BUD`,
    on_jun: `on 16 Jun 2023 to facilitate SMEs in preparing applications and implementing projects, which include undertaking testing and certification. The processing time of “Easy BUD” is shortened with simplified application and streamlined vetting arrangements. The funding amount per “Easy BUD” application is capped at HK$100,000.`,
  },
  cn: {
    title: `BUD Fund (Enterprise Support Programme)`,
    the_fund_aims_to: `The Fund aims to provide funding support to local enterprises and non-profit-distributing organisations to assist them in exploring and expanding the Mainland market through developing brands, upgrading and restructuring operations, and promoting domestic sales in the Mainland.`,
    to_capture: `To capture the economic opportunities arising from the fast-growing markets in Asia and some developing economies, since August 2018, the geographical scope of the BUD Fund was extended to cover the Southeast Asian Nations (ASEAN) markets, and some enhancement measures of the Fund were introduced.`,
    funding_support: `Funding support for individual Hong Kong enterprises in exploring and developing the Mainland (via "the Mainland Programme") and the ASEAN (via the "ASEAN Programme") markets. The Hong Kong Productivity Council acts as the Secretariat to assist in implementing the Programme.`,
    the_gov_launched: `The Government launched`,
    easy_BUD: `Easy BUD`,
    on_jun: `on 16 Jun 2023 to facilitate SMEs in preparing applications and implementing projects, which include undertaking testing and certification. The processing time of “Easy BUD” is shortened with simplified application and streamlined vetting arrangements. The funding amount per “Easy BUD” application is capped at HK$100,000.`,
  },
};

export const BUD: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  const {
    title,
    the_fund_aims_to,
    to_capture,
    funding_support,
    the_gov_launched,
    easy_BUD,
    on_jun,
  } = page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link
          outerLink="https://www.bud.hkpc.org/index.php/en"
          linkColor="#000"
        >
          {title}
        </Link>
      </div>

      <p className="text-body-m mt-[16px]">{the_fund_aims_to}</p>
      <br />
      <p className="text-body-m mb-[24px]">{to_capture}</p>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/tick.svg`}
          alt={"tick"}
        />
        <p className="text-body-m flex-grow min-w-0">{funding_support}</p>
      </div>
      <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/tick.svg`}
          alt={"tick"}
        />
        <p className="text-body-m flex-grow min-w-0">
          {the_gov_launched}&nbsp;“
          <a
            href="https://www.bud.hkpc.org/sites/default/files/download/EASY-leaflet_Chi_Eng_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E] underline-offset-[2px]"
          >
            {easy_BUD}
          </a>
          ”&nbsp;{on_jun}
        </p>
      </div>
    </div>
  );
};
