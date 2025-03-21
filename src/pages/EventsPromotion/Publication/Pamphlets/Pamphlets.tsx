import React, { useState, useEffect } from "react";
import {
  SquareTitle,
  NormalAccordion,
  normalButtonStyle,
  activatedButtonStyle,
  MediaTemplateWithDialog,
  Paginator,
  handleGetPaginatorProp,
} from "../../../../components";
import { pamphletsList, bookletsList, MEDIA_TYPE } from "../../../../const";
import { useSettings } from "../../../../context";

const itemsPerPage = 9;
export const Pamphlets: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const filterButtons = ["All", "Pamphlets", "Booklets"];
  const filterList: Record<string, any[]> = {
    All: [...pamphletsList, ...bookletsList],
    Pamphlets: pamphletsList,
    Booklets: bookletsList,
  };
  const { isPC } = useSettings();

  const filteredArticles = filterList[filterButtons[activeButton]];
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
      <SquareTitle title="Pamphlets And Booklets" />
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
                      setCurrentPage(0);
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
        } `}
      >
        {currentPageData.map((item, index) => {
          const { title, mediaType, date, link, thumbnail } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          console.log("thumbnail", thumbnail);
          const cover = !!thumbnail ? "pamphlets/" + thumbnail : "";
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
                date={date}
                mediaLink={link}
                mediaType={mediaType}
                thumbnail={cover}
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
