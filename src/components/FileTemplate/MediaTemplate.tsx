import React from "react";
import { type FileTemplateProps } from "./types";
import { useSettings } from "../../context";

export const MediaTemplate: React.FC<
  FileTemplateProps & {
    mediaLink?: string;
  }
> = ({
  title,
  imagePath,
  iconPath = "PDF.png",
  date,
  direction = "horizontal",
  mediaLink,
}) => {
  const { isPC, isTablet } = useSettings();

  const componentMap: Record<"horizontal" | "vertical", React.ReactNode> = {
    horizontal: (
      <div
        className={`border-2 border-[#E0E0E0] w-full flex ${
          isPC || isTablet ? "flex-row h-[278px]" : "flex-col"
        } gap-[24px] cursor-pointer`}
        tabIndex={0}
        role="link"
        onClick={() => {
          mediaLink && window.open(mediaLink, "_blank", "noopener");
        }}
      >
        <div
          className={`flex-shrink-0 relative ${
            isPC || isTablet ? "h-[280px] w-[390px]" : "h-full w-auto"
          }`}
        >
          <img
            className="w-full h-full object-cover"
            src={process.env.PUBLIC_URL + imagePath}
            alt={imagePath}
          />
          {/* Icon */}
          <img
            className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
            src={`${process.env.PUBLIC_URL}/assets/icons/${iconPath}`}
            alt={"file icon"}
          />
        </div>

        <div
          className={`flex flex-col justify-center items-start pr-[24px] gap-[16px] ${
            isPC || isTablet ? "" : "px-[24px] pb-[24px]"
          }`}
        >
          <p className="text-heading-m">{title}</p>
          {date && (
            <div className="flex flex-row gap-[8px] items-center" tabIndex={0}>
              <img
                className="w-[16px] h-[16px]"
                src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                alt={"calendar"}
              />
              <p className="text-body-s text-grey">{date}</p>
            </div>
          )}
        </div>
      </div>
    ),

    vertical: (
      <div
        className={`w-full flex  flex-col h-auto gap-[24px] cursor-pointer`}
        tabIndex={0}
        role="link"
        onClick={() => {
          mediaLink && window.open(mediaLink, "_blank", "noopener");
        }}
      >
        <div
          className={`flex-shrink-0 relative ${
            isPC || isTablet ? "h-full w-auto" : "w-1/2 h-auto"
          }`}
        >
          <img
            className="w-full h-full object-cover"
            src={process.env.PUBLIC_URL + imagePath}
            alt={imagePath}
          />
          {/* Icon */}
          <img
            className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
            src={`${process.env.PUBLIC_URL}/assets/icons/${iconPath}`}
            alt={"file icon"}
          />
        </div>

        <p className="text-highlight-l">{title}</p>
      </div>
    ),
  };
  return <>{componentMap[direction]}</>;
};
