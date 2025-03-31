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

const multilingual = {
  en: {
    comics: "Comics",
    tc_play_roles: `Testing and certification (T&C) play a crucial role in our daily life.
        For instance, they help ensuring toy safety, examining energy efficiency
        level and ascertaining the functionality of clothings. In Hong Kong, a
        number of accredited private T&C organisations are serving the community
        by upholding the quality and safety of a wide range of products and
        services.`,
    comic_series: `This comic series (in Chinese version only) showcase the importance of
        T&C in our daily life. Hope you enjoy reading these interesting stories!`,
  },
  cn: {
    comics: "漫畫",
    tc_play_roles: `檢測和認證服務與日常生活息息相關，例如玩具是否安全、電燈的耗電量多與少、衣物的透氣度如何等，都要透過進行檢測認證，以提供安全和品質保證。香港有不少獲認可的私營檢測認證機構，為各行各業的產品和服務質素把關。`,
    comic_series: `本漫畫系列透過查理家族一家的生活趣事，讓大家了解檢測認證與日常生活的關係。大家亦不妨多留意身邊的事物，認識檢測和認證的重要性！`,
  },
};

export const Comics: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    comicsList
  );
  const { getPageText, isPC, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);

  const { comics, tc_play_roles, comic_series } = page_text;

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title={comics as string} />
      <img
        className="w-full"
        src={`${process.env.PUBLIC_URL}/assets/publications/comics/comic_big.png`}
        alt="PDF Icon"
      />

      <div className="text-body-m">{tc_play_roles as string}</div>

      <div className="text-body-m">{comic_series as string}</div>
      <div
        className={`w-full grid ${
          isPC
            ? "grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "grid-cols-1 gap-[24px]"
        }`}
      >
        {currentPageData.map((item, index) => {
          const { title, mediaType, link, thumbnail } = item;
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
                title={getSingleText(title, title)}
                maskIcon={maskIcon}
                date={""}
                mediaDomain="hkctc"
                mediaLink={link}
                thumbnail={thumbnail}
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
