import React from "react";
import { SquareTitle, MediaTemplateWithDialog } from "../../../../components";
import { corruptionGuideList, MEDIA_TYPE } from "../../../../const";
import { Language, useSettings } from "../../../../context";
const multilingual = {
  en: {
    title: "Corruption Prevention Guide for T&C Industry",
  },
  cn: {
    title: "檢測和認證業防貪指引",
  },
};

export const CorruptionGuide: React.FC = () => {
  const { isPC, language } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;
  const { title } = page_text;
  return (
    <div>
      <SquareTitle title={title} />
      <div className={`pt-[24px] flex flex-col ${isPC ? "" : "gap-[24px]"}`}>
        {corruptionGuideList.map((item, index) => {
          const {
            title,
            titleCN = "",
            mediaType,
            date,
            link,
            mediaDomain,
            thumbnail,
          } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              style={{
                marginTop: index === 0 ? "" : "24px",
              }}
              className={`flex flex-col gap-[24px] ${isPC ? "" : "pb-[24px]"}`}
            >
              <MediaTemplateWithDialog
                title={isEn ? title : titleCN}
                maskIcon={maskIcon}
                date={date as string}
                mediaLink={link}
                mediaType={mediaType}
                direction={isPC ? "full" : "column"}
                mediaDomain={mediaDomain}
                thumbnail={thumbnail}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
