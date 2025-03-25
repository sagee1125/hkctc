import React from "react";
import { SquareTitle, MediaTemplateWithDialog } from "../../../components";
import { legislativeCouncilList, MEDIA_TYPE } from "../../../const";
import { Language, useSettings } from "../../../context";

const multilingual = {
  en: {
    title: "Legislative Council Papers",
  },
  cn: {
    title: "立法會文件",
  },
};

export const LegislativeCouncil: React.FC = () => {
  const { language, isPC } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;
  const { title } = page_text;
  return (
    <div>
      <SquareTitle title={title} />
      <div
        className={`w-full mt-[24px] grid ${
          isPC
            ? "grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "grid-cols-1 gap-[24px]"
        }`}
      >
        {legislativeCouncilList.map((item, index) => {
          const {
            title,
            titleCN = "",
            date = "",
            dateCN = "",
            mediaType,
            link,
          } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          const displayTitle = isEn ? title : titleCN;
          return (
            <div
              key={index}
              className={`w-full ${
                isPC ? "h-[290px]" : "h-auto"
              } flex flex-col gap-[14px]`}
            >
              <MediaTemplateWithDialog
                title={
                  displayTitle.length > 53
                    ? displayTitle.slice(0, 53) + "..."
                    : displayTitle
                }
                maskIcon={maskIcon}
                date={isEn ? date : dateCN}
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
