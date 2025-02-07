import React, { useEffect, useRef, useState } from "react";
import { MediaDialog } from "./MediaDialog";
import { MEDIA_TYPE } from "../../const";
import * as pdfjsLib from "pdfjs-dist";

type MediaTemplateWithDialogProps = {
  title: string;
  maskIcon?: string;
  date: string;
  mediaLink: string;
  mediaType: MEDIA_TYPE;
};

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

//   pls rewrite the pdfHyperlink without `https://www.hkctc.gov.hk`
export const MediaTemplateWithDialog: React.FC<
  MediaTemplateWithDialogProps
> = ({ title, maskIcon = "PDF.png", date, mediaLink, mediaType }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // ref for the canvas
  const imageRef = useRef<HTMLImageElement | null>(null); // ref for the image

  useEffect(() => {
    let isCancelled = false;

    const fetchAndRenderPdf = async () => {
      const pdfUrl = "/pdf-proxy" + mediaLink;

      try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const rotation = page.rotate;
        const scale = 0.5;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        if (canvas && !isCancelled) {
          const context = canvas.getContext("2d");
          if (context) {
            // 清空之前的内容
            context.clearRect(0, 0, canvas.width, canvas.height);
            if (rotation === 90 || rotation === 270) {
              canvas.width = viewport.height;
              canvas.height = viewport.width;
            } else {
              canvas.width = viewport.width;
              canvas.height = viewport.height;
            }
            await page.render({
              canvasContext: context,
              viewport: viewport,
            }).promise;
          }
        }
      } catch (error) {
        console.error("PDF error:", error);
        // keep empty
        const canvas = canvasRef.current;
        if (canvas) {
          const context = canvas.getContext("2d");
          if (context) {
            // clear canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
          }
        }
      }
    };

    const fetchVideoPoster = () => {
      const videoElement = document.createElement("video");
      videoElement.src = mediaLink;
      videoElement.onloadeddata = () => {
        if (videoElement.poster && imageRef.current) {
          imageRef.current.src = videoElement.poster;
        } else {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          videoElement.currentTime = 0;
          videoElement.onseeked = () => {
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            if (context) {
              context.drawImage(
                videoElement,
                0,
                0,
                canvas.width,
                canvas.height
              );
              if (imageRef.current) {
                imageRef.current.src = canvas.toDataURL();
              }
            }
          };
        }
      };
    };

    if (mediaType === MEDIA_TYPE.PDF) {
      fetchAndRenderPdf();
    } else if (mediaType === MEDIA_TYPE.VIDEO) {
      fetchVideoPoster();
    }

    // 清理函數，當組件卸載時取消渲染
    return () => {
      isCancelled = true;
    };
  }, [mediaLink, mediaType]);
  return (
    <>
      <div
        className="flex-shrink-0 relative w-full h-[190px] overflow-hidden cursor-pointer"
        onClick={() => {
          setIsPreviewOpen(true);
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            overflow: "hidden",
          }}
          className="border-2 border-inherit"
        >
          {mediaType === MEDIA_TYPE.PDF && (
            <canvas
              key={mediaLink}
              ref={canvasRef}
              style={{
                objectFit: "contain",
              }}
            />
          )}

          {mediaType === MEDIA_TYPE.VIDEO && (
            <img
              key={mediaLink}
              ref={imageRef}
              alt="Video"
              style={{
                objectFit: "contain",
              }}
            />
          )}
        </div>

        {/* Icon */}
        <img
          className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
          src={`${process.env.PUBLIC_URL}/assets/icons/${maskIcon}`}
          alt="PDF Icon"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-highlight-l">{title}</p>

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

      {isPreviewOpen && (
        <MediaDialog
          mediaType={mediaType}
          setIsPreviewOpen={setIsPreviewOpen}
          title={title}
          link={mediaLink}
        />
      )}
    </>
  );
};
