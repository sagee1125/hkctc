import React, { useState, useEffect } from "react";
import {
  SquareTitle,
  MediaTemplateWithDialog,
  Paginator,
  handleGetPaginatorProp,
} from "../../../../components";
import { hkctcNewsletterList, MEDIA_TYPE } from "../../../../const";
import { useSettings } from "../../../../context";

const itemsPerPage = 9;

const multilingual = {
  en: {
    title: "HKCTC Newsletters",
  },
  cn: {
    title: "香港檢測和認證局通訊",
  },
};
export const Newsletter: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    hkctcNewsletterList
  );
  const { isPC, getPageText, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);

  const { title } = page_text;
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div>
      <SquareTitle title={title as string} />
      <div
        className={`w-full pt-[24px] ${
          isPC
            ? "grid grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "flex flex-wrap gap-x-[24px]"
        }`}
      >
        {currentPageData.map((item, index) => {
          const { title, titleCN, date, mediaType, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
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
                date={date}
                mediaLink={link}
                mediaType={mediaType}
              />
            </div>
          );
        })}
      </div>

      <Paginator
        dataSet={hkctcNewsletterList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </div>
  );
};
