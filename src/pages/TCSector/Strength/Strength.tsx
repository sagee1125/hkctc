import React from "react";
import { TC_SECTOR_STRENGTH_TEXT } from "../lang";
import { SquareTitle } from "../../../components";

const pageText = TC_SECTOR_STRENGTH_TEXT.EN;
export const Strength: React.FC = () => {
  return (
    <div className="w-full flex flex-row gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title={pageText.TITLE} />
      </div>
    </div>
  );
};
