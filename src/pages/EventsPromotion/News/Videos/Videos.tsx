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

const multilingual = {
  en: {
    title: "Videos",
    types: "Types",
  },
  cn: {
    title: "短片",
    types: "類型",
  },
};

export const Videos: React.FC = () => {
  const { getPageText, isPC, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);

  const { title, types } = page_text;

  const [activeButton, setActiveButton] = useState<number>(0);
  const filterButtons: Record<string, string> = {
    All: "全部",
    "HKCTC Reports": "香港檢測和認證局報告",
    "T&C services": "香港檢測和認證服務",
    "Career development": "香港檢測和認證業職業發展",
  };

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
  };

  const filteredArticles = filterList[Object.keys(filterButtons)[activeButton]];

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
      <SquareTitle title={title as string} />
      <div>
        <NormalAccordion
          title={types as string}
          details={
            <div className="flex flex-wrap gap-[8px]">
              {Object.keys(filterButtons).map((name, index) => {
                const isActivated = activeButton === index;
                return (
                  <button
                    tabIndex={0}
                    role="button"
                    key={index}
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveButton(index);
                    }}
                  >
                    <p className="text-highlight-xs">
                      {getSingleText(name, filterButtons[name])}
                    </p>
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      <div
        className={`w-full pt-[24px] ${
          isPC
            ? "grid grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "flex flex-wrap gap-x-[24px]"
        }`}
      >
        {currentPageData.map((item, index) => {
          const { title, titleCN, link, domain } = item;
          const maskIcon = "VIDEO.png";
          return (
            <div
              key={index}
              className={`${
                isPC ? "w-full h-[282px]" : "w-[252px] h-[282px]"
              } flex flex-col gap-[14px]`}
            >
              <MediaTemplateWithDialog
                title={getSingleText(title, titleCN)}
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
