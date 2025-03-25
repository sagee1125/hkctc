import React, { useState } from "react";
import {
  SquareTitle,
  Link,
  fullContainer,
  maxPCContainer,
  MediaDialog,
  maxMobileContainer,
  MediaTemplateWithDialog,
} from "../../components";
import {
  MEDIA_TYPE,
  WhatsNewConfiguration,
  hkctcNewsletterList,
  WhatsNewConfiguration_cn
} from "../../const";
import { Language, useSettings } from "../../context";

const multilingual = {
  en: {
    title: "What’s New",
  },
  cn: {
    title: "最新消息",
  },
};

export const WhatsNew: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(0);
  const currentReport = hkctcNewsletterList[activeReport];
  const { isPC, language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const { title } = page_text;

    const whatsNewData =
      language === Language.EN ? WhatsNewConfiguration : WhatsNewConfiguration_cn;

  const leftContent = (
    <div className="w-full flex flex-col gap-[24px]">
      <SquareTitle title={title} />
      {whatsNewData.map((item, index) => {
        const { imagePath, title, date, redirectTo } = item;
        return (
          <div
            key={index}
            className={`flex ${
              isPC ? "flex-row " : "flex-col-reverse"
            } items-center w-full gap-[24px]`}
          >
            <div className="w-full">
              <div className="text-heading-m mb-[16px]">
                <Link
                  linkColor="darkInk"
                  innerLink={redirectTo}
                  outerLink={redirectTo}
                >
                  {title}
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
              onClick={() => {
                window.open(redirectTo);
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
        <p className="text-heading-l">HKCTC Newsletters</p>
        {hkctcNewsletterList.slice(0, 6).map((item, index) => {
          const { title, date = "", mediaType, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className={`w-full h-auto object-cover flex flex-row gap-[14px] mt-[24px]`}
            >
              <MediaTemplateWithDialog
                title={title}
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
          onClick={() => {
            window.open("/events-promotion?section=hkctc_newsletter");
          }}
        >
          See more
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
      {isPreviewOpen && (
        <MediaDialog
          mediaType={currentReport.mediaType}
          setIsPreviewOpen={setIsPreviewOpen}
          title={currentReport.title}
          link={currentReport.link}
        />
      )}
    </div>
  );
};
