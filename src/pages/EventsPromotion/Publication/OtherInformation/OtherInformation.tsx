import React from "react";
import { SquareTitle, MediaTemplateWithDialog } from "../../../../components";
import { otherInformationList, MEDIA_TYPE } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Other Useful Information",
  },
  cn: {
    title: "其他有用資料",
  },
};

export const OtherInformation: React.FC = () => {
  const { isPC, getPageText, getSingleText, language } = useSettings();
  const page_text = getPageText(multilingual);
  const { title } = page_text;
  return (
    <div>
      <SquareTitle title={title as string} />
      <div
        className={`pt-[24px] flex ${
          isPC ? "flex-col" : "flex-wrap gap-[24px]"
        }`}
      >
        {otherInformationList.map((item, index) => {
          const {
            title,
            titleCN = "",
            mediaType,
            date,
            link,
            scLink,
            tcLink,
          } = item;
          const displayLink =
            (language === Language.EN
              ? link
              : language === Language.ZH_CN
              ? scLink ?? tcLink
              : tcLink) ?? link;

          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className={`${
                isPC ? "w-full h-[282px]" : "h-[282px]"
              } flex flex-col gap-[14px]`}
            >
              <MediaTemplateWithDialog
                key={index}
                title={getSingleText(title, titleCN)}
                maskIcon={maskIcon}
                date={date as string}
                mediaLink={displayLink}
                mediaType={mediaType}
                mediaDomain={"hkctc"}
                direction={isPC ? "full" : "column"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
