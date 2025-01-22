import React from "react";
import { SquareTitle, PDFThumbnail } from "../../../components";
import { hktctReportsList, MEDIA_TYPE } from "../../../const";

export const HKCTCReports: React.FC = () => {
  return (
    <div>
      <SquareTitle title="HKCTC Reports" />
      <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
        {hktctReportsList.map((item, index) => {
          const { title, date, link, mediaType } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className="w-full h-[282px] flex flex-col gap-[14px] mt-[24px] mb-[48px]"
            >
              <div className="flex-shrink-0 relative w-full h-[190px] overflow-hidden">
                {/* TODO: where the pdf should be put*/}
                {isPDF ? (
                  <PDFThumbnail
                    pdfUrl={`${process.env.PUBLIC_URL}/assets/pdf/${link}`}
                  />
                ) : (
                  <></>
                )}
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
    </div>
  );
};
