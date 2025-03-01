import React from "react";
import { SquareTitle, MediaTemplateWithDialog } from "../../../../components";
import { otherInformationList, MEDIA_TYPE } from "../../../../const";
import { useSettings } from "../../../../context";

export const OtherInformation: React.FC = () => {
  const { isPC } = useSettings();

  return (
    <div>
      <SquareTitle title="Other Useful Information" />
      <div className={`pt-[24px] flex flex-col ${isPC ? "" : "gap-[24px]"}`}>
        {otherInformationList.map((item, index) => {
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
              direction={isPC ? "full" : "column"}
            />
          );
        })}
      </div>
    </div>
  );
};
