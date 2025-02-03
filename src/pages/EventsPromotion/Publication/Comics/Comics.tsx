import React, { useState } from "react";
import { SquareTitle, MediaDialog } from "../../../../components";
import { comicsList } from "../../../../const";

export const Comics: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(0);
  const currentReport = comicsList[activeReport];
  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="Comics" />
      <img
        className="w-full"
        src={`${process.env.PUBLIC_URL}/assets/publications/comics/comic_big.png`}
        alt="PDF Icon"
      />

      <div>
        Testing and certification (T&C) play a crucial role in our daily life.
        For instance, they help ensuring toy safety, examining energy efficiency
        level and ascertaining the functionality of clothings. In Hong Kong, a
        number of accredited private T&C organisations are serving the community
        by upholding the quality and safety of a wide range of products and
        services.
      </div>

      <div>
        This comic series showcase the importance of T&C in our daily life. Hope
        you enjoy reading these interesting stories!
      </div>
      <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
        {comicsList.map((item, index) => {
          const { title } = item;
          return (
            <div key={index} className="w-full flex flex-col gap-[14px]">
              <div
                className="flex-shrink-0 relative w-full h-[190px] cursor-pointer"
                onClick={() => {
                  setActiveReport(index);
                  setIsPreviewOpen(true);
                }}
              >
                <img
                  className="border-2 border-inherit w-full h-full object-cover"
                  src={`${process.env.PUBLIC_URL}/assets/publications/pamphlets/p_1.png`}
                  alt={"comics"}
                />
                {/* Icon */}
                <img
                  className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
                  src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                  alt="PDF Icon"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-highlight-l">{title}</p>
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
