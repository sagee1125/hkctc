import React from "react";
import { type FileTemplateProps } from "./types";
import { useSettings } from "../../context";

//   pls rewrite the pdfHyperlink without `https://www.hkctc.gov.hk`
export const FileTemplate: React.FC<FileTemplateProps> = ({
  title,
  titleHyperlink,
  imagePath,
  iconPath = "PDF.png",
  date,
  pdfHyperlink,
}) => {
  const enablePdfDownload = pdfHyperlink !== undefined;
  const { withLoading } = useSettings();
  const handlePdfDownload = async () => {
    if (!pdfHyperlink) return;
    await withLoading(async () => {
      try {
        const response = await fetch("/pdf-proxy" + pdfHyperlink);
        const pdfBlob = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(pdfBlob);
        link.download = title.replaceAll(" ", "_") + ".pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      } catch (error) {
        console.error("Error downloading PDF:", error);
      }
    });
  };

  return (
    <div className="flex flex-row h-[90px] gap-[24px] w-full">
      <div className="flex-shrink-0 relative w-[130px] h-[90px]">
        <img
          className="border-[1px] border-[#E0E0E0] w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/${imagePath}`}
          alt={imagePath}
          style={{
            cursor: enablePdfDownload ? "pointer" : "default",
          }}
          onClick={enablePdfDownload ? handlePdfDownload : undefined}
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
      <div
        className="flex-grow flex-col flex overflow-hidden text-ellipsis"
        style={{
          cursor: enablePdfDownload ? "pointer" : "default",
        }}
        onClick={enablePdfDownload ? handlePdfDownload : undefined}
      >
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
