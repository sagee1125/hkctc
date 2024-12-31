import * as React from "react";

export const TSF: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <p className="text-heading-m">
        Trade and Industrial Organisation Support Fund (TSF)
      </p>
      <p className="text-body-m mt-[16px] mb-[24px]">
        The scheme provides financial support to non-profit-distributing
        organisations to implement projects which aim at enhancing the
        competitiveness of non-listed Hong Kong enterprises in general or in
        specific sectors. It is a merger between the previous SME Development
        Fund and the BUD Fund (Organisation Support Programme).
      </p>

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
        <p className="text-body-m flex-grow min-w-0">
          Activities under the projects which may be supported by TSF include
          seminars, workshops, conferences, exhibitions, research studies, award
          schemes, codes of best practices, databases, service centres, support
          facilities and technology demonstration, etc.
        </p>
      </div>
    </div>
  );
};
