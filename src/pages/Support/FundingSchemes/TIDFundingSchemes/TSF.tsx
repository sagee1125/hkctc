import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `Trade and Industrial Organisation Support Fund (TSF)`,
    the_scheme_provides: `The scheme provides financial support to non-profit-distributing organisations to implement projects which aim at enhancing the competitiveness of non-listed Hong Kong enterprises in general or in specific sectors. It is a merger between the previous SME Development Fund and the BUD Fund (Organisation Support Programme).`,
    the_maximum_amount: (
      <p className="text-body-m flex-grow min-w-0">
        The maximum amount of funding support for each approved project is&nbsp;
        <span className="text-newPrimary font-semibold">
          HK$5 million, or 90% of the total approved project expenditure
        </span>
        , whichever is the less.
      </p>
    ),
    activities: `Activities under the projects which may be supported by TSF include seminars, workshops, conferences, exhibitions, research studies, award schemes, codes of best practices, databases, service centres, support facilities and technology demonstration, etc.`,
  },
  cn: {
    title: `工商機構支援基金`,
    the_scheme_provides: `基金旨在資助非分配利潤組織推行項目，以提升香港整體或個別行業的非上市企業的競爭力。基金由前「中小企業發展支援基金」及「BUD專項基金」(機構支援計劃)整合而成。`,

    the_maximum_amount: (
      <p className="text-body-m flex-grow min-w-0">
        每個獲批項目最高可獲基金資助
        <span className="text-newPrimary font-semibold">
          港幣500萬元或該項目總核准開支的90%
        </span>
        ，以金額較低者為準。
      </p>
    ),
    activities: `可獲基金資助的項目活動包括研討會、工作坊、會議、展覽會、調查研究、獎勵計劃、最佳營運守則、數據庫、服務中心、支援設施和科技應用示範等。`,
  },
};

export const TSF: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  const { title, the_scheme_provides, activities, the_maximum_amount } =
    page_text;
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <div className="text-heading-m ">
        <Link
          outerLink="https://www.smefund.tid.gov.hk/english/tsf/tsf_objective.html"
          linkColor="#000"
        >
          {title}
        </Link>
      </div>

      <p className="text-body-m mt-[16px] mb-[24px]">{the_scheme_provides}</p>

      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
          alt={"money"}
        />
        {the_maximum_amount}
      </div>
      <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/tick.svg`}
          alt={"tick"}
        />
        <p className="text-body-m flex-grow min-w-0">{activities}</p>
      </div>
    </div>
  );
};
