import React from "react";
import { Icon } from "@iconify/react";
import { activatedPagingButtonStyle, normalPagingButtonStyle } from "../Button";

type PaginatorProps = {
  dataSet: any[];
  currentPage: number;
  itemsPerPage: number;
  startIndex: number;
  endIndex: number;
  setCurrentPage: (pageNumber: number) => void;
};

export const handleGetPaginatorProp = (
  currentPage: number,
  itemsPerPage: number,
  dataSet: any[]
): { currentPageData: any[]; startIndex: number; endIndex: number } => {
  // Calculate the indices for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Slice the data array based on the current page
  const currentPageData = dataSet?.slice(startIndex, endIndex);

  return {
    currentPageData,
    startIndex,
    endIndex,
  };
};
export const Paginator: React.FC<PaginatorProps> = ({
  dataSet,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  startIndex,
  endIndex,
}) => {
  // Maximum number of pages (0-based index)
  const maxPage = Math.ceil(dataSet?.length / itemsPerPage) - 1;

  return (
    <div className="flex justify-center gap-[9px] my-[24px] !text-highlight-l">
      {/* Previous Button */}
      <button
        tabIndex={0}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
        style={{
          ...normalPagingButtonStyle,
          cursor: currentPage === 0 ? "not-allowed" : "pointer",
          color: currentPage === 0 ? "#767676" : "black",
        }}
        aria-label="Previous Button"
      >
        <Icon
          tabIndex={0}
          icon="mingcute:arrow-left-fill"
          width="24"
          height="24"
          aria-hidden="true"
          aria-label={"arrow icon"}
        />
      </button>

      {Array.from({ length: maxPage + 1 }, (_, pageIndex) => (
        <button
          tabIndex={0}
          key={pageIndex}
          onClick={() => setCurrentPage(pageIndex)}
          style={
            currentPage === pageIndex
              ? activatedPagingButtonStyle
              : normalPagingButtonStyle
          }
          aria-label={`Jump to Page ${pageIndex + 1}`}
        >
          {pageIndex + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        tabIndex={0}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === maxPage}
        style={{
          ...normalPagingButtonStyle,
          cursor: currentPage === maxPage ? "not-allowed" : "pointer",
          color: currentPage === maxPage ? "#767676" : "black",
        }}
        aria-label="Next Button"
      >
        <Icon
          tabIndex={0}
          icon="mingcute:arrow-right-fill"
          width="24"
          height="24"
          aria-hidden="true"
          aria-label={"arrow icon"}
        />
      </button>
    </div>
  );
};
