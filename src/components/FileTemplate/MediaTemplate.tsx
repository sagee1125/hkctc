import React from "react";
import { type FileTemplateProps } from "./types";

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
  const componentMap: Record<"horizontal" | "vertical", React.ReactNode> = {
    horizontal: (
      <div
        className="border-2 border-[#E0E0E0] w-full flex flex-row h-[278px] gap-[24px] cursor-pointer"
        onClick={() => {
          mediaLink && window.open(mediaLink);
        }}
      >
        <div className="flex-shrink-0 relative h-full w-auto">
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

        <div className="flex flex-col justify-center items-start pr-[24px] gap-[16px]">
          <p className="text-heading-m">{title}</p>
          {date && (
            <div className="flex flex-row gap-[8px] items-center">
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
        className="w-full flex flex-col h-auto gap-[24px] cursor-pointer"
        onClick={() => {
          mediaLink && window.open(mediaLink);
        }}
      >
        <div className="flex-shrink-0 relative h-full w-auto">
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
