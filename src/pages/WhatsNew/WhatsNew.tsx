import React from "react";
import {
  SquareTitle,
  Link,
  fullContainer,
  maxPCContainer,
  maxMobileContainer,
  MediaTemplateWithDialog,
} from "../../components";
import {
  MEDIA_TYPE,
  WhatsNewConfiguration,
  hkctcNewsletterList,
  WhatsNewConfiguration_cn,
} from "../../const";
import { Language, useSettings } from "../../context";

const multilingual = {
  en: {
    title: "What’s New",
    hkctc_newsletter: "HKCTC Newsletters",
    see_more: "See more",
  },
  cn: {
    title: "最新消息",
    hkctc_newsletter: "香港檢測和認證局通訊",
    see_more: "查看更多",
  },
};

export const WhatsNew: React.FC = () => {
  const { isPC, language, getPageText, getSingleText } = useSettings();
  const isEn = language === Language.EN;
  const page_text = getPageText(multilingual);
  const { title, hkctc_newsletter, see_more } = page_text;

  const whatsNewData = isEn ? WhatsNewConfiguration : WhatsNewConfiguration_cn;

  const leftContent = (
    <div className="w-full flex flex-col gap-[24px]">
      <SquareTitle title={title as string} />
      {whatsNewData.map((item, index) => {
        const { imagePath, title, date, redirectTo } = item;
        return (
          <div
            key={index}
            className={`flex ${
              isPC ? "flex-row-reverse" : "flex-col-reverse"
            } items-center w-full gap-[24px]`}
          >
            <div className="w-full">
              <div className="text-heading-m mb-[16px]">
                <Link
                  linkColor="darkInk"
                  innerLink={redirectTo}
                  outerLink={redirectTo}
                >
                  {getSingleText(title, title)}
                </Link>
              </div>
              <div className="flex flex-row items-center">
                <img
                  className="w-[16px] h-[16px]"
                  src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                  alt={"calendar"}
                />
                <span className="text-grey ml-[8px]">{date}</span>
              </div>
            </div>
            <img
              className={`${
                isPC
                  ? "w-[278px] h-full border-2 border-inherit"
                  : "w-full h-auto"
              } object-cover cursor-pointer`}
              tabIndex={0}
              role="button"
              aria-label={getSingleText(title, title)}
              onClick={() => {
                window.open(redirectTo, "_blank", "noopener");
              }}
              src={`${process.env.PUBLIC_URL}/assets/whatsNew/${imagePath}`}
              alt={imagePath}
            />
          </div>
        );
      })}
    </div>
  );
  const rightContent = (
    <div>
      <div className="border-2 border-inherit p-[24px] flex flex-col">
        <p className="text-heading-l" role="heading" aria-level={10}>
          {hkctc_newsletter as string}
        </p>
        {hkctcNewsletterList.slice(0, 6).map((item, index) => {
          const { title, titleCN = "", date = "", mediaType, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className={`w-full h-auto object-cover flex flex-row gap-[14px] mt-[24px]`}
            >
              <MediaTemplateWithDialog
                title={getSingleText(title, titleCN)}
                maskIcon={maskIcon}
                date={date}
                mediaLink={link}
                mediaType={mediaType}
                direction="row"
              />
            </div>
          );
        })}
        <div
          className="text-links underline text-right w-full cursor-pointer"
          tabIndex={0}
          role="button"
          onClick={() => {
            window.open("/events-promotion?section=hkctc_newsletter");
          }}
          aria-label={see_more as string}
        >
          {see_more as string}
        </div>
      </div>
    </div>
  );
  return (
    <div style={fullContainer}>
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC ? (
          <div className="w-full px-[24px] mt-[48px] mb-[24px] grid grid-cols-[2fr,1fr] gap-[24px]">
            {leftContent}
            {rightContent}
          </div>
        ) : (
          <div className="w-full px-[24px] flex flex-col gap-[24px]">
            <hr className="mb-[24px]" />
            {leftContent}
            {rightContent}
          </div>
        )}
      </div>
    </div>
  );
};
