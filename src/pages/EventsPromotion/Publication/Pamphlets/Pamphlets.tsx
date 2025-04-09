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
import { Language, useSettings } from "../../../../context";

const itemsPerPage = 9;

const multilingual = {
  en: {
    pamphlets: "Pamphlets And Booklets",
    types: "Types",
    filterButtons: ["All", "Pamphlets", "Booklets"],
  },
  cn: {
    pamphlets: "宣傳單張及小冊子",
    types: "類型",
    filterButtons: ["全部", "宣傳單張", "小冊子"],
  },
};

export const Pamphlets: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const filterList: Record<number, any[]> = {
    0: [...pamphletsList, ...bookletsList], // all
    1: pamphletsList, // Pamphlets
    2: bookletsList, // Booklets
  };
  const { getSingleText, isPC, getPageText, language } = useSettings();
  const page_text = getPageText(multilingual);
  const { pamphlets, types, filterButtons } = page_text;

  const filteredArticles = filterList[activeButton];
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
      <SquareTitle title={pamphlets as string} />
      <div>
        <NormalAccordion
          title={types as string}
          details={
            <div className="flex flex-row gap-[8px]">
              {(filterButtons as string[]).map((name, index) => {
                const isActivated = activeButton === index;
                return (
                  // eslint-disable-next-line jsx-a11y/no-redundant-roles
                  <button
                    tabIndex={0}
                    role="button"
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
        {currentPageData?.map((item, index) => {
          const {
            title,
            titleCN,
            mediaType,
            date,
            link,
            thumbnail,
            scLink,
            tcLink,
          } = item;

          const displayLink =
            (language === Language.EN
              ? link
              : language === Language.ZH_CN
              ? scLink ?? tcLink
              : tcLink) ?? link;

          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          const cover = !!thumbnail ? "pamphlets/" + thumbnail : "";
          return (
            <div
              key={index}
              className={`w-full ${
                isPC ? "h-[282px]" : "h-auto"
              } flex flex-col gap-[14px]`}
            >
              <MediaTemplateWithDialog
                title={getSingleText(title, titleCN)}
                maskIcon={maskIcon}
                date={date}
                mediaLink={displayLink}
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
