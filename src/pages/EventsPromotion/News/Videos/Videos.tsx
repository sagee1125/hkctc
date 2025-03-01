import React, { useState, useEffect } from "react";
import {
  activatedButtonStyle,
  MediaTemplateWithDialog,
  NormalAccordion,
  normalButtonStyle,
  SquareTitle,
  Paginator,
  handleGetPaginatorProp,
} from "../../../../components";
import {
  VIDEO_TYPE,
  videoList,
  type VideoListData,
} from "../../../../const/VideoList";
import { MEDIA_TYPE } from "../../../../const";
import { useSettings } from "../../../../context";

const itemsPerPage = 9;
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

  const filteredArticles = filterList[filterButtons[activeButton]];
  const { isPC } = useSettings();

  const [currentPage, setCurrentPage] = useState<number>(0);
  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    filteredArticles
  );

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="Videos" />
      <div>
        <NormalAccordion
          title="Types"
          details={
            <div className="flex flex-wrap gap-[8px]">
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

      <div
        className={`w-full grid ${
          isPC
            ? "grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "grid-cols-1 gap-[24px]"
        }`}
      >
        {currentPageData.map((item, index) => {
          const { title, link, domain } = item;
          const maskIcon = "VIDEO.png";
          return (
            <div
              key={index}
              className={`w-full ${
                isPC ? "h-[282px]" : "h-auto"
              } flex flex-col gap-[14px]`}
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

      <Paginator
        dataSet={filteredArticles}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </div>
  );
};
