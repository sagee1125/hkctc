import * as React from "react";

export const PRP: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <p className="text-heading-m">Partnership Research Programme (PRP)</p>
      <p className="text-body-m my-[16px]">
        The Programme supports R&D projects undertaken by private companies in
        collaboration with local universities and public research institutions.
      </p>
      <div className="flex flex-row gap-[24px] items-center w-full">
        <img
          className="w-[24px] h-[24px] flex-shrink-0"
          src={`${process.env.PUBLIC_URL}/assets/icons/matching.svg`}
          alt={"matching"}
        />
        <p className="text-body-m flex-grow min-w-0">
          It provides matching funding support for approved projects. The
          maximum project duration is 3 years.
        </p>
      </div>
    </div>
  );
};
