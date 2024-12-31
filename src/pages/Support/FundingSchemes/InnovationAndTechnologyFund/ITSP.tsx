import * as React from "react";

export const ITSP: React.FC = () => {
  return (
    <div className="bg-[#F7F7F5] px-[42px] py-[36px]">
      <p className="text-heading-m">
        Innovation and Technology Support Programme (ITSP)
      </p>
      <p className="text-body-m my-[16px]">
        ITSP supports R&D projects undertaken mainly by designated public
        research institutes and R&D Centres. It focuses on supporting two types
        of projects:
      </p>
      <p className="gap-[24px] items-center w-full text-newPrimary">
        <span className="text-highlight-m"> • Platform Projects:&nbsp;</span>

        <span className="text-body-m">
          Applied R&D projects which are industry-oriented and have potential
          for commercialization.
        </span>
      </p>

      <p className="gap-[24px] items-center w-full text-newPrimary mt-[24px]">
        <span className="text-highlight-m"> • Seed Projects:&nbsp;</span>
        <span className="text-body-m">
          Projects which are exploratory and forward-looking in nature.
        </span>
      </p>
    </div>
  );
};
