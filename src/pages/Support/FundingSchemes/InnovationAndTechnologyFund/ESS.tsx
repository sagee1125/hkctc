import * as React from "react";

export const ESS: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <p className="text-heading-m">Enterprise Support Scheme (ESS)</p>
      <p className="text-body-m my-[16px]">
        To subsidise non-listed local enterprises/organisations in using
        technological services and solutions to improve productivity, or upgrade
        or transform their business processes.
      </p>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/money.svg`}
          alt={"money"}
        />
        <p className="text-body-m flex-grow min-w-0">
          Funding of up to $10 million to each approved project on a
          dollar-for-dollar matching basis
        </p>
      </div>
      <div className="flex flex-row gap-[24px] items-center w-full my-[24px]">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/tick.svg`}
          alt={"tick"}
        />
        <p className="text-body-m flex-grow min-w-0">
          The recipient organisation will own all intellectual property rights
          arising from the project.
        </p>
      </div>
    </div>
  );
};
