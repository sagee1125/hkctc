import * as React from "react";
import { Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: `Trade and Industrial Organisation Support Fund (TSF)`,
    the_scheme_provides: `The scheme provides financial support to non-profit-distributing organisations to implement projects which aim at enhancing the competitiveness of non-listed Hong Kong enterprises in general or in specific sectors. It is a merger between the previous SME Development Fund and the BUD Fund (Organisation Support Programme).`,
    the_maximum_amount: `The maximum amount of funding support for each approved project is HK$5 million, or 90% of the total approved project expenditure, whichever is the less.`,
    activities: `Activities under the projects which may be supported by TSF include seminars, workshops, conferences, exhibitions, research studies, award schemes, codes of best practices, databases, service centres, support facilities and technology demonstration, etc.`,
  },
  cn: {
    title: `Trade and Industrial Organisation Support Fund (TSF)`,
    the_scheme_provides: `The scheme provides financial support to non-profit-distributing organisations to implement projects which aim at enhancing the competitiveness of non-listed Hong Kong enterprises in general or in specific sectors. It is a merger between the previous SME Development Fund and the BUD Fund (Organisation Support Programme).`,
    the_maximum_amount: `The maximum amount of funding support for each approved project is HK$5 million, or 90% of the total approved project expenditure, whichever is the less.`,
    activities: `Activities under the projects which may be supported by TSF include seminars, workshops, conferences, exhibitions, research studies, award schemes, codes of best practices, databases, service centres, support facilities and technology demonstration, etc.`,
  },
};

export const TSF: React.FC = () => {
  const { language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  const { title, the_scheme_provides, activities } = page_text;
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
        <p className="text-body-m flex-grow min-w-0">
          The maximum amount of funding support for each approved project
          is&nbsp;
          <span className="text-newPrimary font-semibold">
            HK$5 million, or 90% of the total approved project expenditure
          </span>
          , whichever is the less.
        </p>
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
