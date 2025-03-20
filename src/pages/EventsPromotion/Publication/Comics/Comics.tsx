import React, { useState, useEffect } from "react";
import {
  SquareTitle,
  MediaTemplateWithDialog,
  Paginator,
  handleGetPaginatorProp,
} from "../../../../components";
import { comicsList, MEDIA_TYPE } from "../../../../const";
import { useSettings } from "../../../../context";

const itemsPerPage = 9;
export const Comics: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    comicsList
  );
  const { isPC } = useSettings();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="Comics" />
      <img
        className="w-full"
        src={`${process.env.PUBLIC_URL}/assets/publications/comics/comic_big.png`}
        alt="PDF Icon"
      />

      <div className="text-body-m">
        Testing and certification (T&C) play a crucial role in our daily life.
        For instance, they help ensuring toy safety, examining energy efficiency
        level and ascertaining the functionality of clothings. In Hong Kong, a
        number of accredited private T&C organisations are serving the community
        by upholding the quality and safety of a wide range of products and
        services.
      </div>

      <div className="text-body-m">
        This comic series (in Chinese version only) showcase the importance of
        T&C in our daily life. Hope you enjoy reading these interesting stories!
      </div>
      <div
        className={`w-full grid ${
          isPC
            ? "grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "grid-cols-1 gap-[24px]"
        }`}
      >
        {currentPageData.map((item, index) => {
          const { title, mediaType, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className={`${
                isPC ? "w-full h-[282px]" : ""
              } flex flex-col gap-[14px] mt-[24px]`}
            >
              <MediaTemplateWithDialog
                title={title}
                maskIcon={maskIcon}
                date={""}
                mediaDomain="hkctc"
                mediaLink={link}
                mediaType={mediaType}
              />
            </div>
          );
        })}
      </div>

      <Paginator
        dataSet={comicsList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </div>
  );
};
