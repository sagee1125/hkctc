import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import CircularProgress from "@mui/material/CircularProgress";
import { MediaDialog } from "./MediaDialog";
import { MEDIA_TYPE } from "../../const";

type MediaTemplateWithDialogProps = {
  title: string;
  maskIcon?: string;
  date: string;
  mediaLink: string;
  mediaType: MEDIA_TYPE;
  mediaDomain?: "hkctc" | "youtube";
};

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

//   pls rewrite the pdfHyperlink without `https://www.hkctc.gov.hk`
export const MediaTemplateWithDialog: React.FC<
  MediaTemplateWithDialogProps
> = ({
  title,
  maskIcon = "PDF.png",
  date,
  mediaLink,
  mediaType,
  mediaDomain = "hkctc",
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isHoveringYTBVideo, setIsHoveringYTBVideo] = useState(false);

  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // ref for the canvas
  const imageRef = useRef<HTMLImageElement | null>(null); // ref for the image
  const videoRef = useRef<HTMLVideoElement | HTMLIFrameElement | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchAndRenderPdf = async () => {
      const pdfUrl = "/pdf-proxy" + mediaLink;
      setLoading(true);

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

      setLoading(false);
    };

    const fetchVideoPoster = () => {
      setLoading(true);
      const videoElement = document.createElement("video");
      videoElement.src = "/pdf-proxy" + mediaLink;
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
      setLoading(false);
    };

    const fetchYouTubePoster = () => {
      setLoading(true);
      const videoId = mediaLink.match(
        /(?:embed\/|v=|youtu\.be\/|watch\?v=|\/v\/|\/vi\/)([^"&?/\s]{11})/
      );

      if (videoId && videoId[1] && imageRef.current) {
        const resolutions = [
          "maxresdefault.jpg",
          "sddefault.jpg",
          "hqdefault.jpg",
          "mqdefault.jpg",
          "default.jpg",
        ];

        let found = false;

        resolutions.forEach((res) => {
          if (found) return;
          const img = new Image();
          img.src = `https://img.youtube.com/vi/${videoId[1]}/${res}`;

          img.onload = () => {
            if (!found) {
              imageRef.current!.src = img.src;
              found = true;
            }
          };

          img.onerror = () => {
            console.warn(`Failed to load: ${img.src}`);
          };
        });
      }
      setLoading(false);
    };

    if (mediaType === MEDIA_TYPE.PDF) {
      fetchAndRenderPdf();
    } else if (mediaType === MEDIA_TYPE.VIDEO) {
      if (mediaDomain === "hkctc") fetchVideoPoster();
      if (mediaDomain === "youtube") fetchYouTubePoster();
    }

    // 清理函數，當組件卸載時取消渲染
    return () => {
      isCancelled = true;
    };
  }, [mediaLink, mediaType, mediaDomain]);
  const handleMouseEnter = (): void => {
    if (mediaDomain === "youtube") setIsHoveringYTBVideo(true);
    if (videoRef.current) {
      if (videoRef.current instanceof HTMLVideoElement) {
        videoRef.current.muted = true;
        videoRef.current.currentTime = 0; // Start from the first frame
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });

        setTimeout(() => {
          if (
            videoRef?.current &&
            videoRef.current instanceof HTMLVideoElement
          ) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to first frame
          }
        }, 3000);
      }
      // else if (videoRef.current instanceof HTMLIFrameElement) {
      //   const iframe = videoRef.current as HTMLIFrameElement;
      //   const iframeSrc = iframe.src;

      //   if (iframeSrc.includes("youtube.com")) {
      //     const youtubePlayer = iframe.contentWindow;
      //     if (youtubePlayer) {
      //       youtubePlayer.postMessage(
      //         JSON.stringify({ event: "command", func: "playVideo" }),
      //         "*"
      //       );

      //       setTimeout(() => {
      //         youtubePlayer.postMessage(
      //           JSON.stringify({ event: "command", func: "pauseVideo" }),
      //           "*"
      //         );
      //       }, 3000);
      //     }
      //   }
      // }
    }
  };

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
          {loading ? (
            <div className="absolute flex items-center justify-center">
              <CircularProgress />
            </div>
          ) : (
            <>
              {mediaType === MEDIA_TYPE.PDF && canvasRef && (
                <canvas
                  key={mediaLink}
                  ref={canvasRef}
                  style={{
                    objectFit: "contain",
                  }}
                />
              )}

              {mediaType === MEDIA_TYPE.VIDEO && (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={() => {
                    if (mediaDomain === "youtube") {
                      setTimeout(() => {
                        setIsHoveringYTBVideo(false);
                      }, 3000);
                    }
                  }}
                >
                  {/*  video, play when mouse enter */}
                  {mediaDomain === "hkctc" && videoRef && (
                    <video
                      ref={videoRef as React.RefObject<HTMLVideoElement>}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                      }}
                    >
                      <source src={"/pdf-proxy" + mediaLink} type="video/mp4" />
                    </video>
                  )}
                  {mediaDomain === "youtube" && isHoveringYTBVideo && (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${mediaLink}?autoplay=1&mute=1&showinfo=0&iv_load_policy=3&rel=0&controls=0&modestbranding=1&fs=0&disablekb=1&cc_load_policy=0`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                    />
                  )}

                  <img
                    ref={imageRef}
                    alt="Video"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                      zIndex: 0,
                    }}
                  />
                </div>
              )}
              {/* 
              {mediaType === MEDIA_TYPE.VIDEO && (
                <div
                  key={mediaLink}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={() => {
                    if (videoRef.current) {
                      videoRef.current.pause();
                      videoRef.current.currentTime = 0;
                    }
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    ref={imageRef}
                    alt="Video"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              )} */}
            </>
          )}

          {/* Icon */}
          <img
            className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
            src={`${process.env.PUBLIC_URL}/assets/icons/${maskIcon}`}
            alt="PDF Icon"
            style={{
              zIndex: 3,
            }}
          />
        </div>
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
          mediaDomain={mediaDomain}
        />
      )}
    </>
  );
};
