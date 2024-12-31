import * as React from "react";
import { SummaryTable } from "./SummaryTable";

export const TCJS: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-[12px] items-center">
        <div className="h-[15px] w-[15px] bg-newPrimary" />
        <p className="text-heading-l">
          Testing and Certification Sector Job Creation Scheme (TCJS)
        </p>
      </div>{" "}
      <p className="text-body-m mt-[24px]">
        To relieve the unemployment situation due to the epidemic and as part of
        the anti-epidemic measures, the Anti-Epidemic Fund (AEF) 6.0 will
        allocate resources to create time-limited jobs in the private sector.
        The Testing and Certification Sector Job Creation Scheme (the Scheme) is
        launched under the AEF.
      </p>
      <br />
      <p className="text-body-m mb-[24px]">
        The Scheme aims to encourage private testing and certification (T&C)
        organisations to create more job opportunities, and attract people to
        join the T&C sector, so as to enrich Hong Kong’s T&C talent pool.
      </p>
      <div className="border py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[24px] h-[24px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/rocket.svg`}
            alt={"rocket"}
          />
          <p className="text-highlight-m flex-grow min-w-0">
            Local private T&C organizations with valid Hong Kong Accreditation
            Service status can apply for a monthly subsidy for up to five
            eligible positions
          </p>
        </div>
      </div>
      <div className="border py-[24px] px-[36px] my-[24px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[24px] h-[24px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
            alt={"money"}
          />
          <p className="text-highlight-m flex-grow min-w-0">
            For each approved position, the applicant employer will receive a
            monthly subsidy of HK$10,000 or 50% of the salary of the position,
            whichever is lower, for 12 months
          </p>
        </div>
      </div>
      <p className="text-heading-l">Application Period</p>
      <div className="mt-[24px]">
        <SummaryTable />
      </div>
      <hr className="text-[#E0E0E0] my-[24px]" />
      <p className="text-heading-l">Frequently Asked Questions</p>
    </div>
  );
};
