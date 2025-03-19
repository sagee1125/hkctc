import React, { useState } from "react";
import {
  SquareTitle,
  Link,
  fullContainer,
  maxPCContainer,
  MediaDialog,
  maxMobileContainer,
} from "../../components";
import { WhatsNewConfiguration, hkctcNewsletterList } from "../../const";
import { useSettings } from "../../context";

export const WhatsNew: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(0);
  const currentReport = hkctcNewsletterList[activeReport];
  const { isPC } = useSettings();

  const leftContent = (
    <div className="w-full flex flex-col gap-[24px]">
      <SquareTitle title={"What’s New"} />
      {WhatsNewConfiguration.map((item, index) => {
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
      <div className="border-2 border-inherit p-[24px] flex flex-col gap-[24px]">
        <p className="text-heading-l">HKCTC Newsletters</p>
        {hkctcNewsletterList.slice(0, 6).map((item, index) => {
          const { title, link } = item;
          return (
            <div
              className="flex flex-row gap-[24px] cursor-pointer"
              key={index}
              onClick={() => {
                if (isPC) {
                  setActiveReport(index);
                  setIsPreviewOpen(true);
                } else {
                  window.open("https://www.hkctc.gov.hk" + link, "_blank");
                }
              }}
            >
              <img
                className="border-2 border-inherit w-[160px] h-full object-cover"
                src={`${process.env.PUBLIC_URL}/assets/whatsNew/Reports.png`}
                alt={"Report.png"}
              />
              <div className="text-highlight-m">{title}</div>
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
