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
  const { isPC, getPageText, getSingleText, language } = useSettings();
  const page_text = getPageText(multilingual);

  const { title } = page_text;
  return (
    <div>
      <SquareTitle title={title as string} />
      <div
        className={`pt-[24px] flex ${
          isPC ? "flex-col" : "flex-wrap gap-x-[24px]"
        }`}
      >
        {corruptionGuideList.map((item, index) => {
          const {
            title,
            titleCN = "",
            mediaType,
            date,
            link,
            mediaDomain,
            thumbnail,
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
                isPC ? "w-full h-[282px]" : "w-[252px] h-[282px]"
              } flex flex-col gap-[14px]`}
            >
              <MediaTemplateWithDialog
                title={getSingleText(title, titleCN)}
                maskIcon={maskIcon}
                date={date as string}
                mediaLink={displayLink}
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
