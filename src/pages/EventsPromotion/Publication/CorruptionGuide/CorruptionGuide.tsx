import React from "react";
import { SquareTitle, MediaTemplateWithDialog } from "../../../../components";
import { corruptionGuideList, MEDIA_TYPE } from "../../../../const";
import { useSettings } from "../../../../context";

export const CorruptionGuide: React.FC = () => {
  const { isPC } = useSettings();

  return (
    <div>
      <SquareTitle title="Corruption Prevention Guide for T&C Industry" />
      <div className={`pt-[24px] flex flex-col ${isPC ? "" : "gap-[24px]"}`}>
        {corruptionGuideList.map((item, index) => {
          const { title, mediaType, date, link, mediaDomain } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              style={{
                marginTop: index === 0 ? "" : "-2px",
              }}
              className={`flex flex-col gap-[24px] ${isPC ? "" : "pb-[24px]"}`}
            >
              <MediaTemplateWithDialog
                title={title}
                maskIcon={maskIcon}
                date={date as string}
                mediaLink={link}
                mediaType={mediaType}
                direction={isPC ? "full" : "column"}
                mediaDomain={mediaDomain}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
