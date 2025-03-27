import React from "react";
import { SquareTitle, MediaTemplateWithDialog } from "../../../../components";
import { otherInformationList, MEDIA_TYPE } from "../../../../const";
import { useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Other Useful Information",
  },
  cn: {
    title: "其他有用資料",
  },
};

export const OtherInformation: React.FC = () => {
  const { isPC, getPageText, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);
  const { title } = page_text;
  return (
    <div>
      <SquareTitle title={title as string} />
      <div className={`pt-[24px] flex flex-col ${isPC ? "" : "gap-[24px]"}`}>
        {otherInformationList.map((item, index) => {
          const { title, titleCN = "", mediaType, date, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <MediaTemplateWithDialog
              key={index}
              title={getSingleText(title, titleCN)}
              maskIcon={maskIcon}
              date={date as string}
              mediaLink={link}
              mediaType={mediaType}
              mediaDomain={"hkctc"}
              direction={isPC ? "full" : "column"}
            />
          );
        })}
      </div>
    </div>
  );
};
