import * as React from "react";

export const TVP: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <p className="text-heading-m">Technology Voucher Programme (TVP)</p>
      <p className="text-body-m my-[16px]">
        To subsidise non-listed local enterprises/organisations in using
        technological services and solutions to improve productivity, or upgrade
        or transform their business processes.
      </p>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/rocket.svg`}
          alt={"rocket"}
        />
        <p className="text-body-m flex-grow min-w-0">
          The Government’s funding ratio in each approved project has been
          raised from{" "}
          <span className="text-newPrimary font-semibold">
            two thirds to three-quarters.
          </span>
        </p>
      </div>
      <div className="flex flex-row gap-[24px] items-center w-full my-[24px]">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/rocket.svg`}
          alt={"rocket"}
        />
        <p className="text-body-m flex-grow min-w-0">
          The funding ceiling per applicant has been increased from{" "}
          <span className="text-newPrimary font-semibold">
            $400,000 to $600,000.
          </span>
        </p>
      </div>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/rocket.svg`}
          alt={"rocket"}
        />
        <p className="text-body-m flex-grow min-w-0">
          The maximum number of approved projects has also been{" "}
          <span className="text-newPrimary font-semibold">
            increased from four to six.
          </span>
        </p>
      </div>
      <div className="text-italic-s italic mt-[16px]">
        *<span className="underline text-[#00E]">Click here</span> for
        information on funding support for the setting up of local medical face
        mask testing facilities.
      </div>
    </div>
  );
};