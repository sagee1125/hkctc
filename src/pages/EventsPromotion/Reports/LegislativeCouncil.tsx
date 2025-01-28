import React, { useState } from "react";
import { SquareTitle, MediaDialog } from "../../../components";
import { legislativeCouncilList, MEDIA_TYPE } from "../../../const";

export const LegislativeCouncil: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(0);
  const currentReport = legislativeCouncilList[activeReport];

  return (
    <div>
      <SquareTitle title="Legislative Council Papers" />
      <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
        {legislativeCouncilList.map((item, index) => {
          const { title, date, mediaType } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className="w-full h-[282px] flex flex-col gap-[14px] mt-[24px]"
            >
              <div
                className="flex-shrink-0 relative w-full h-[190px] overflow-hidden cursor-pointer"
                onClick={() => {
                  setActiveReport(index);
                  setIsPreviewOpen(true);
                }}
              >
                {/* TODO: where the pdf should be put*/}
                <img
                  src={`${process.env.PUBLIC_URL}/assets/publications/reports/report_1.png`}
                  alt={"report" + index}
                />
                {/* Icon */}
                <img
                  className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
                  src={`${process.env.PUBLIC_URL}/assets/icons/${maskIcon}`}
                  alt="PDF Icon"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-highlight-l">{title}</p>

                <div className="flex flex-row gap-[8px] mt-[8px] items-center">
                  <img
                    className="w-[16px] h-[16px]"
                    src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                    alt={"calendar"}
                  />
                  <p className="text-body-s text-grey">{date}</p>
                </div>
              </div>
            </div>
          );
        })}
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
