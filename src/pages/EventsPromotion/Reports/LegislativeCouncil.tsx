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
        className={`w-full mt-[24px] grid ${
          isPC
            ? "grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "grid-cols-1 gap-[24px]"
        }`}
      >
        {legislativeCouncilList.map((item, index) => {
          const { title, date, mediaType, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className={`w-full ${
                isPC ? "h-[290px]" : "h-auto"
              } flex flex-col gap-[14px]`}
            >
              <MediaTemplateWithDialog
                title={title.length > 53 ? title.slice(0, 53) + "..." : title}
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
