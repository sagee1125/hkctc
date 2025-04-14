import React, { useState } from "react";
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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePdfDownload = async () => {
    if (!pdfHyperlink) return;
    await withLoading(async () => {
      try {
        const response = await fetch("/hkctc-proxy" + pdfHyperlink);
        const pdfBlob = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(pdfBlob);
        const originalFileName =
          pdfHyperlink.split("/").pop() || title.replaceAll(" ", "_") + ".pdf";
        link.download = decodeURIComponent(originalFileName);
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
    <>
      <div className="flex flex-row h-[90px] gap-[24px] w-full">
        <div
          className="flex-shrink-0 relative w-[130px] h-[90px]"
          style={{
            cursor: enablePdfDownload ? "pointer" : "default",
          }}
          role="button"
          tabIndex={0}
          aria-label={"open modal"}
          onClick={() => setIsPreviewOpen(true)}
        >
          <img
            className="border-[1px] border-[#E0E0E0] w-full h-full object-cover"
            src={`${process.env.PUBLIC_URL}/${imagePath}`}
            alt={title}
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
          role="button"
          tabIndex={0}
          onClick={() => setIsPreviewOpen(true)}
          aria-label="open modal"
        >
          {titleHyperlink ? (
            <a
              aria-label={`navigate back to ${title}`}
              href={titleHyperlink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-highlight-m cursor-pointer"
              tabIndex={0}
            >
              {title}
            </a>
          ) : (
            <p className="text-highlight-m" tabIndex={0}>
              {title}
            </p>
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

      {isPreviewOpen && pdfHyperlink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 w-[70vw] h-[80vh] relative">
            <button
              tabIndex={0}
              className="absolute top-2 right-2 px-2"
              onClick={() => setIsPreviewOpen(false)}
              aria-label="close modal"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full pt-[24px]"
              title={title}
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                `https://www.hkctc.gov.hk` + pdfHyperlink
              )}&embedded=true&chrome=false`}
            />
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                tabIndex={0}
                className="bg-newPrimary text-white px-4 py-2"
                onClick={handlePdfDownload}
                aria-label="Download"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const FileTemplateTitleCenter: React.FC<FileTemplateProps> = ({
  title,
  imagePath,
  iconPath = "PDF.png",
}) => {
  return (
    <>
      <div className="flex flex-row h-[90px] gap-[24px] w-full">
        <div
          className="flex-shrink-0 relative w-[160px] h-[90px]"
          style={{
            cursor: "pointer",
          }}
        >
          <img
            className="border-[1px] border-[#E0E0E0] w-full h-full object-cover"
            src={`${process.env.PUBLIC_URL}/${imagePath}`}
            alt={title}
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
          className="flex-grow flex items-center justify-start"
          style={{
            cursor: "pointer",
          }}
        >
          <p className="text-highlight-m">{title}</p>
        </div>
      </div>
    </>
  );
};
