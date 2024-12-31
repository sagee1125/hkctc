import * as React from "react";

export const ResearchDevelopmentCash: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <p className="text-heading-m">
        Research and Development Cash Rebate Scheme
      </p>
      <p className="text-body-m my-[16px]">
        The Scheme provides further financial incentives to encourage private
        enterprises to participate in R&D. Under the Scheme:
      </p>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
          alt={"money"}
        />
        <p className="text-body-m flex-grow min-w-0">
          Enterprises conducting applied R&D projects supported by ITF or in
          partnership with designated local public research institutions will
          enjoy a cash rebate equivalent to 40% of their investments.
        </p>
      </div>
    </div>
  );
};
