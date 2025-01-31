import React, { useState } from "react";
import {
  SquareTitle,
  NormalAccordion,
  normalButtonStyle,
  activatedButtonStyle,
  MediaDialog,
} from "../../../../components";
import { pamphletsList, bookletsList } from "../../../../const";

export const Pamphlets: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const filterButtons = ["All", "Pamphlets", "Booklets"];
  const filterList: Record<string, any[]> = {
    All: [...pamphletsList, ...bookletsList],
    Pamphlets: pamphletsList,
    Booklets: bookletsList,
  };

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(0);
  const currentReport = filterList[filterButtons[activeButton]][activeReport];
  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="Pamphlets And Booklets" />
      <div>
        <NormalAccordion
          title="Type"
          details={
            <div className="flex flex-row gap-[8px]">
              {filterButtons.map((name, index) => {
                const isActivated = activeButton === index;
                return (
                  <button
                    key={index}
                    className="p-2 transition-all duration-800 ease-in-out"
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveButton(index);
                    }}
                  >
                    <p className="px-[12px] text-highlight-xs">{name}</p>
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
        {filterList[filterButtons[activeButton]].map((item, index) => {
          const { img, title } = item;
          return (
            <div
              key={index}
              className="w-full h-[282px] flex flex-col gap-[14px]"
            >
              <div
                className="flex-shrink-0 relative w-full h-[190px] cursor-pointer"
                onClick={() => {
                  setActiveReport(index);
                  setIsPreviewOpen(true);
                }}
              >
                <img
                  className="border-2 border-inherit w-full h-full object-cover"
                  src={`${process.env.PUBLIC_URL}/assets/publications/pamphlets/${img}`}
                  alt={img}
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
