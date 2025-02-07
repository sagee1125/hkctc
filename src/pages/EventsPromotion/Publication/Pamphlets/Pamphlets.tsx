import React, { useState } from "react";
import {
  SquareTitle,
  NormalAccordion,
  normalButtonStyle,
  activatedButtonStyle,
  MediaTemplateWithDialog,
} from "../../../../components";
import { pamphletsList, bookletsList, MEDIA_TYPE } from "../../../../const";

export const Pamphlets: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const filterButtons = ["All", "Pamphlets", "Booklets"];
  const filterList: Record<string, any[]> = {
    All: [...pamphletsList, ...bookletsList],
    Pamphlets: pamphletsList,
    Booklets: bookletsList,
  };

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
          const { title, mediaType, date, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className="w-full h-[282px] flex flex-col gap-[14px] mt-[24px]"
            >
              <MediaTemplateWithDialog
                title={title}
                maskIcon={maskIcon}
                date={date}
                mediaLink={link}
                mediaType={mediaType}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
