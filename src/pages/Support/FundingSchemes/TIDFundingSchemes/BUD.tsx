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
    title: `BUD 專項基金（企業支援計劃）`,
    the_fund_aims_to: `該基金旨在為本地企業及非分配利潤機構提供資助，協助它們透過品牌發展、升級轉型及拓展內銷市場以開拓及擴展內地市場。`,
    to_capture: `為協助企業把握亞洲及迅速發展的新興市場所帶來的機遇，自2018年8月起，「BUD專項基金」的資助地域範圍擴大至東盟市場，並推出多項優化措施。`,
    funding_support: `基金資助個別企業推行拓展內地市場項目（「內地計劃」）及東盟市場項目（「東盟計劃」）。計劃由香港生產力促進局擔任秘書處，協助進行計劃。`,
    the_gov_launched: `政府於`,
    easy_BUD: `「BUD 申請易」`,
    on_jun: `2023年6月16日推出「BUD專項基金」—申請易，以便利中小企業遞交申請及執行項目，包括進行檢測和認證。「BUD專項基金」—申請易進一步簡化申請及審批程序安排，縮短申請處理時間，每宗獲批項目的資助上限為10萬元。`,
  },
};

export const BUD: React.FC = () => {
  const { language, getPageText } = useSettings();
  const page_text = getPageText(multilingual);

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
          {title as string}
        </Link>
      </div>

      <p className="text-body-m mt-[16px]">{the_fund_aims_to as string}</p>
      <br />
      <p className="text-body-m mb-[24px]">{to_capture as string}</p>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/tick.svg`}
          alt={"tick"}
        />
        <p className="text-body-m flex-grow min-w-0">
          {funding_support as string}
        </p>
      </div>
      <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/tick.svg`}
          alt={"tick"}
        />
        <p className="text-body-m flex-grow min-w-0">
          {the_gov_launched as string}&nbsp;“
          <a
            aria-label={easy_BUD as string}
            href="https://www.bud.hkpc.org/sites/default/files/download/EASY-leaflet_Chi_Eng_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E] underline-offset-[2px]"
          >
            {easy_BUD as string}
          </a>
          ”&nbsp;{on_jun as string}
        </p>
      </div>
    </div>
  );
};
