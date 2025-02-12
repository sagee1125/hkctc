import React, { useState } from "react";
import { SquareTitle, MediaDialog } from "../../../../components";
import { corruptionGuideList, MEDIA_TYPE } from "../../../../const";

export const CorruptionGuide: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(0);
  const currentReport = corruptionGuideList[activeReport];
  return (
    <div>
      <SquareTitle title="Corruption Prevention Guide for T&C Industry" />
      {corruptionGuideList.map((item, index) => {
        const { title, img, mediaType } = item;
        const isPDF = mediaType === MEDIA_TYPE.PDF;
        const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
        return (
          <div
            key={index}
            className="grid grid-cols-2 cursor-pointer justify-start group border-2 border-inherit h-[278px] mt-[24px] gap-[24px]"
            onClick={() => {
              setActiveReport(index);
              setIsPreviewOpen(true);
            }}
          >
            <div className="overflow-hidden flex-shrink-0 relative ">
              <img
                className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/publications/publications/corruptions/" +
                  img
                }
                alt={title}
              />
              {/* Icon */}
              <img
                className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
                src={`${process.env.PUBLIC_URL}/assets/icons/${maskIcon}`}
                alt="PDF Icon"
              />
            </div>
            <div className="flex flex-col justify-center py-[24px] pr-[24px] gap-[24px]">
              <div className="text-heading-m text-start w-full group-hover:text-darkNavy group-hover:underline transition-all duration-300 ease-in-out">
                {title}
              </div>
            </div>
          </div>
        );
      })}

      {isPreviewOpen && (
        <MediaDialog
          mediaDomain="others"
          mediaType={currentReport.mediaType}
          setIsPreviewOpen={setIsPreviewOpen}
          title={currentReport.title}
          link={currentReport.link}
        />
      )}
    </div>
  );
};
