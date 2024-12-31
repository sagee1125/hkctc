import * as React from "react";

export const BUD: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <p className="text-heading-m">BUD Fund (Enterprise Support Programme)</p>
      <p className="text-body-m mt-[16px]">
        The Fund aims to provide funding support to local enterprises and
        non-profit-distributing organisations to assist them in exploring and
        expanding the Mainland market through developing brands, upgrading and
        restructuring operations, and promoting domestic sales in the Mainland.
      </p>
      <br />
      <p className="text-body-m mb-[24px]">
        To capture the economic opportunities arising from the fast-growing
        markets in Asia and some developing economies, since August 2018, the
        geographical scope of the BUD Fund was extended to cover the Southeast
        Asian Nations (ASEAN) markets, and some enhancement measures of the Fund
        were introduced.
      </p>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/tick.svg`}
          alt={"tick"}
        />
        <p className="text-body-m flex-grow min-w-0">
          Funding support for individual Hong Kong enterprises in exploring and
          developing the Mainland (via "the Mainland Programme") and the ASEAN
          (via the "ASEAN Programme") markets. The Hong Kong Productivity
          Council acts as the Secretariat to assist in implementing the
          Programme.
        </p>
      </div>
      <div className="flex flex-row gap-[24px] items-center w-full mt-[24px]">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/tick.svg`}
          alt={"tick"}
        />
        <p className="text-body-m flex-grow min-w-0">
          The Government launched “Easy BUD” on 16 Jun 2023 to facilitate SMEs
          in preparing applications and implementing projects, which include
          undertaking testing and certification. The processing time of “Easy
          BUD” is shortened with simplified application and streamlined vetting
          arrangements. The funding amount per “Easy BUD” application is capped
          at HK$100,000.
        </p>
      </div>
    </div>
  );
};
