import React from "react";
import { MEDIA_TYPE } from "../../const";
import { useSettings } from "../../context";

type MediaDialogProps = {
  setIsPreviewOpen: (open: boolean) => void;
  title: string;
  link: string;
  mediaType: MEDIA_TYPE;
};

export const MediaDialog: React.FC<MediaDialogProps> = ({
  setIsPreviewOpen,
  title,
  link,
}: MediaDialogProps) => {
  const { withLoading } = useSettings();
  
  const handlePdfDownload = async () => {
    if (!link) return;
    await withLoading(async () => {
      try {
        const response = await fetch("/pdf-proxy" + link);
        const pdfBlob = await response.blob();
        const pdfHyperlink = document.createElement("a");

        pdfHyperlink.href = URL.createObjectURL(pdfBlob);
        const originalFileName =
          link.split("/").pop() || title.replaceAll(" ", "_") + ".pdf";
        pdfHyperlink.download = decodeURIComponent(originalFileName);
        document.body.appendChild(pdfHyperlink);
        pdfHyperlink.click();
        document.body.removeChild(pdfHyperlink);
        URL.revokeObjectURL(pdfHyperlink.href);
      } catch (error) {
        console.error("Error downloading PDF:", error);
      }
    });
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 w-[70vw] h-[80vh] relative">
          <button
            className="absolute top-2 right-2 px-2"
            onClick={() => setIsPreviewOpen(false)}
          >
            ✕
          </button>
          <iframe
            className="w-full h-full pt-[24px]"
            title={title}
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(
              `https://www.hkctc.gov.hk` + link
            )}&embedded=true&chrome=false`}
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              className="bg-newPrimary text-white px-4 py-2"
              onClick={handlePdfDownload}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
