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
  const { isPC, getSingleText, getPageText, language } = useSettings();
  const page_text = getPageText(multilingual);

  const { title } = page_text;
  return (
    <div>
      <SquareTitle title={title as string} />
      <div
        className={`w-full pt-[24px] ${
          isPC
            ? "grid grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "flex flex-wrap gap-x-[24px]"
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
          const displayTitle = getSingleText(title, titleCN);
          return (
            <div
              key={index}
              className={`${
                isPC ? "w-full h-[282px]" : "w-[252px] h-[282px]"
              } flex flex-col gap-[14px]`}
            >
              <MediaTemplateWithDialog
                title={
                  displayTitle.length > 53
                    ? displayTitle.slice(0, 53) + "..."
                    : displayTitle
                }
                maskIcon={maskIcon}
                date={getSingleText(date, dateCN)}
                mediaLink={displayLink}
                mediaType={mediaType}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
