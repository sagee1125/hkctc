import React from "react";
import { SquareTitle, MediaTemplateWithDialog } from "../../../components";
import { legislativeCouncilList, MEDIA_TYPE } from "../../../const";
import { useSettings } from "../../../context";

export const LegislativeCouncil: React.FC = () => {
  const { isPC } = useSettings();

  return (
    <div>
      <SquareTitle title="Legislative Council Papers" />
      <div
        className={`w-full ${
          isPC
            ? "grid grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "flex flex-wrap gap-[24px]"
        }`}
      >
        {legislativeCouncilList.map((item, index) => {
          const { title, date, mediaType, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className={`${
                isPC ? "w-full" : "w-[252px]"
              } h-[282px] flex flex-col gap-[14px] mt-[24px]`}
            >
              <MediaTemplateWithDialog
                title={title}
                maskIcon={maskIcon}
                date={date as string}
                mediaLink={link}
                mediaType={mediaType}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
