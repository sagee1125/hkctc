import React from "react";
import { SquareTitle, MediaTemplateWithDialog } from "../../../../components";
import { corruptionGuideList, MEDIA_TYPE } from "../../../../const";

export const CorruptionGuide: React.FC = () => {
  return (
    <div>
      <SquareTitle title="Corruption Prevention Guide for T&C Industry" />
      <div className="pt-[24px]">
        {corruptionGuideList.map((item, index) => {
          const { title, mediaType, date, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <MediaTemplateWithDialog
              key={index}
              title={title}
              maskIcon={maskIcon}
              date={date as string}
              mediaLink={link}
              mediaType={mediaType}
              direction={"full"}
            />
          );
        })}
      </div>
    </div>
  );
};
