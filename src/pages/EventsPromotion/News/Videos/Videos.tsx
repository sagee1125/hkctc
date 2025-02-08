import React, { useState } from "react";
import {
  activatedButtonStyle,
  MediaTemplateWithDialog,
  NormalAccordion,
  normalButtonStyle,
  SquareTitle,
} from "../../../../components";
import {
  VIDEO_TYPE,
  videoList,
  type VideoListData,
} from "../../../../const/VideoList";
import { MEDIA_TYPE } from "../../../../const";

export const Videos: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const filterButtons = [
    "All",
    "HKCTC Reports",
    "T&C services",
    "Career development",
    "Manpower Development Award Scheme",
  ];

  const filterList: Record<string, VideoListData[]> = {
    All: videoList,
    "HKCTC Reports": videoList.filter((v) =>
      v.category.includes(VIDEO_TYPE.HKCTC_REPORT)
    ),
    "T&C services": videoList.filter((v) =>
      v.category.includes(VIDEO_TYPE.TC_SERVICES)
    ),
    "Career development": videoList.filter((v) =>
      v.category.includes(VIDEO_TYPE.CAREER_DEVELOPMENT)
    ),
    "Manpower Development Award Scheme": videoList.filter((v) =>
      v.category.includes(VIDEO_TYPE.MANPOWER_DEVELOPMENT)
    ),
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="Videos" />
      <div>
        <NormalAccordion
          title="Types"
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
                    <p className="text-highlight-xs">{name}</p>
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
        {filterList[filterButtons[activeButton]].map((item, index) => {
          const { title, link, domain } = item;
          const maskIcon = "VIDEO.png";
          return (
            <div
              key={index}
              className="w-full h-[282px] flex flex-col gap-[14px] mt-[24px]"
            >
              <MediaTemplateWithDialog
                title={title}
                maskIcon={maskIcon}
                date={""}
                mediaLink={link}
                mediaType={MEDIA_TYPE.VIDEO}
                mediaDomain={domain}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
