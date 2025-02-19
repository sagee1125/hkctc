import React from "react";
import { SquareTitle, MediaTemplateWithDialog } from "../../../components";
import { legislativeCouncilList, MEDIA_TYPE } from "../../../const";

export const LegislativeCouncil: React.FC = () => {
  return (
    <div>
      <SquareTitle title="Legislative Council Papers" />
      <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
        {legislativeCouncilList.map((item, index) => {
          const { title, date, mediaType, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className="w-full h-[282px] flex flex-col gap-[14px] mt-[24px]"
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
