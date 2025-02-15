import React, { useState, useEffect } from "react";
import {
  SquareTitle,
  MediaTemplateWithDialog,
  Paginator,
  handleGetPaginatorProp,
} from "../../../../components";
import { hkctcNewsletterList, MEDIA_TYPE } from "../../../../const";

const itemsPerPage = 9;
export const Newsletter: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    hkctcNewsletterList
  );

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div>
      <SquareTitle title="HKCTC Newsletter" />

      <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
        {currentPageData.map((item, index) => {
          const { title, date, mediaType, link } = item;
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
