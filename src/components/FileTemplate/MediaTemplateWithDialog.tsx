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
    const fetchAndRenderPdf = async () => {
      const pdfUrl = "/pdf-proxy" + mediaLink;

      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const scale = 0.5;
      const viewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext("2d");
        if (context) {
          // 清空之前的内容
          context.clearRect(0, 0, canvas.width, canvas.height);

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          page.render({
            canvasContext: context,
            viewport: viewport,
          });
        }
      }
    };

    const fetchVideoPoster = () => {
      const videoElement = document.createElement("video");
      videoElement.src = mediaLink;
      videoElement.onloadeddata = () => {
        if (videoElement.poster) {
          // 如果视频有封面，直接显示封面
          if (imageRef.current) {
            imageRef.current.src = videoElement.poster;
          }
        } else {
          // 如果没有封面，则抓取第一帧
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          videoElement.currentTime = 0; // 跳到第一帧
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
                imageRef.current.src = canvas.toDataURL(); // 设置第一帧为封面
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
  }, []);
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
        >
          {mediaType === MEDIA_TYPE.PDF && (
            <canvas
              ref={canvasRef}
              style={{
                display: "block",
                maxWidth: "100%",
              }}
            />
          )}

          {mediaType === MEDIA_TYPE.VIDEO && (
            <img
              ref={imageRef}
              alt="Video"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
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

        <div className="flex flex-row gap-[8px] mt-[8px] items-center">
          <img
            className="w-[16px] h-[16px]"
            src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
            alt={"calendar"}
          />
          <p className="text-body-s text-grey">{date}</p>
        </div>
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
