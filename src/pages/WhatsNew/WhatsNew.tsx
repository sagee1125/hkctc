import React, { useState } from "react";
import {
  SquareTitle,
  Link,
  fullContainer,
  maxContainer,
  MediaDialog,
} from "../../components";
import { WhatsNewConfiguration, hkctcNewsletterList } from "../../const";

export const WhatsNew: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(0);
  const currentReport = hkctcNewsletterList[activeReport];
  return (
    <div style={fullContainer}>
      <div style={maxContainer}>
        <div className="w-full px-[24px] mt-[48px] grid grid-cols-[2fr,1fr] gap-[24px]">
          <div className="w-full flex flex-col gap-[24px]">
            <SquareTitle title={"What’s New"} />
            {WhatsNewConfiguration.map((item, index) => {
              const { imagePath, title, date, redirectTo } = item;
              return (
                <div key={index} className="flex flex-row items-center w-full">
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
                    className="border-2 border-inherit w-[278px] h-full object-cover cursor-pointer"
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
          <div>
            <div className="border-2 border-inherit p-[24px] flex flex-col gap-[24px]">
              <p className="text-heading-l">HKCTC Newsletter</p>
              {hkctcNewsletterList.slice(0, 6).map((item, index) => {
                const { title, date } = item;
                return (
                  <div
                    className="flex flex-row gap-[24px] cursor-pointer"
                    key={index}
                    onClick={() => {
                      setActiveReport(index);
                      setIsPreviewOpen(true);
                    }}
                  >
                    <img
                      className="border-2 border-inherit w-[160px] h-full object-cover"
                      src={`${process.env.PUBLIC_URL}/assets/whatsNew/Reports.png`}
                      alt={"Report.png"}
                    />
                    <div className="flex flex-col">
                      <div className="text-highlight-m">{title}</div>
                      <div className="flex flex-row items-center">
                        <img
                          className="w-[16px] h-[16px]"
                          src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                          alt={"calendar"}
                        />
                        <span className="text-grey ml-[8px]">{date}</span>
                      </div>
                    </div>
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
        </div>
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
