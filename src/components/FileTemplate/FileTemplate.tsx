import React from "react";
import { type FileTemplateProps } from "./types";

export const FileTemplate: React.FC<FileTemplateProps> = ({
  title,
  titleHyperlink,
  imagePath,
  iconPath = "PDF.png",
  date,
}) => {
  return (
    <div className="flex flex-row h-[90px] gap-[24px] w-full">
      <div className="flex-shrink-0 relative w-[130px] h-[90px]">
        <img
          className="border-2 border-inherit w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/${imagePath}`}
          alt={imagePath}
        />
        {/* Icon */}
        {iconPath && (
          <img
            className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
            src={`${process.env.PUBLIC_URL}/assets/icons/${iconPath}`}
            alt={"file icon"}
          />
        )}
      </div>
      <div className="flex-grow flex-col flex overflow-hidden text-ellipsis">
        {titleHyperlink ? (
          <a
            href={titleHyperlink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight-m cursor-pointer"
          >
            {title}
          </a>
        ) : (
          <p className="text-highlight-m">{title}</p>
        )}

        {date && (
          <div className="flex flex-row gap-[8px] mt-[8px] items-center">
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
  );
};
