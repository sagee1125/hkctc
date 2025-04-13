import React, { useEffect, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { MediaDialog } from "./MediaDialog";
import { MEDIA_TYPE } from "../../const";
import { useSettings } from "../../context";

export type ProxyDomain =
  | "hkctc"
  | "youtube"
  | "cpas-icac"
  | "hkbedc"
  | "takungpao"
  | "devb";

export type MediaTemplateWithDialogProps = {
  title: string;
  titleCN?: string;
  maskIcon?: string;
  date: string;
  imagePath?: string;
  mediaLink: string;
  mediaType: MEDIA_TYPE;
  mediaDomain?: ProxyDomain;
  direction?: "column" | "row" | "full";
  titleUnderline?: boolean;
  thumbnail?: string;
};
export const handleGetPDFUrl = (
  domain: ProxyDomain,
  mediaLink: string
): string => {
  switch (domain) {
    case "hkctc":
      return "/hkctc-proxy" + mediaLink;
    case "cpas-icac":
      return "/cpas-icac-proxy" + mediaLink;
    case "hkbedc":
      return "/hkbedc-proxy" + mediaLink;
    case "takungpao":
      return "/takungpao-proxy" + mediaLink;
    case "devb":
      return "/devb-proxy" + mediaLink;

    default:
      return "/hkctc-proxy" + mediaLink;
  }
};
//   pls rewrite the pdfHyperlink without `https://www.hkctc.gov.hk`
export const MediaTemplateWithDialog: React.FC<
  MediaTemplateWithDialogProps
> = ({
  title,
  maskIcon = "PDF.png",
  imagePath,
  date,
  mediaLink,
  mediaType,
  mediaDomain = "hkctc",
  direction = "column",
  titleUnderline = false,
  thumbnail = "",
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { isPC, pdfjsLib } = useSettings();
  const [loading, setLoading] = useState(false);
  const [isIMGLoaded, setIsIMGLoaded] = useState(false);

  const handleImageLoad = (): void => {
    setIsIMGLoaded(true);
  };
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // ref for the canvas
  const imageRef = useRef<HTMLImageElement | null>(null); // ref for the image
  const videoRef = useRef<HTMLVideoElement | HTMLIFrameElement | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchAndRenderPdf = async () => {
      const pdfUrl = handleGetPDFUrl(mediaDomain, mediaLink);
      setLoading(true);
      try {
        // Force to render file
        const response = await fetch(pdfUrl, { cache: "no-store" });
        const arrayBuffer = await response.arrayBuffer();

        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
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
      videoElement.src = "/hkctc-proxy" + mediaLink;
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
        setLoading(false);
      };
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

    if (mediaType === MEDIA_TYPE.PDF && !thumbnail) {
      fetchAndRenderPdf();
    } else if (mediaType === MEDIA_TYPE.VIDEO) {
      if (mediaDomain === "hkctc") fetchVideoPoster();
      if (mediaDomain === "youtube") fetchYouTubePoster();
    }

    return () => {
      isCancelled = true;
    };
  }, [mediaLink, mediaType, mediaDomain, pdfjsLib, direction, thumbnail]);

  const handleMouseEnter = (): void => {
    // if (mediaDomain === "youtube") setIsHoveringYTBVideo(true);
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
        }, 5000);
      }
    }
  };

  const handleOnClick = (): void => {
    if (mediaType === MEDIA_TYPE.NEW_PAGE) {
      window.open(mediaLink, "_blank", "noopener");
      return;
    }

    if (mediaType === MEDIA_TYPE.VIDEO) {
      setIsPreviewOpen(true);
      return;
    }

    if (mediaType === MEDIA_TYPE.PDF) {
      if (isPC) {
        // for mobile view, just open in a new page
        setIsPreviewOpen(true);
        return;
      }

      switch (mediaDomain) {
        case "hkctc":
          window.open(
            "https://www.hkctc.gov.hk" + mediaLink,
            "_blank",
            "noopener"
          );
          break;
        case "cpas-icac":
          window.open("https://cpas.icac.hk" + mediaLink, "_blank", "noopener");
          break;
        default:
          break;
      }
    }
  };
  return (
    <>
      {direction === "full" ? (
        <div
          className={`grid grid-cols-2 h-[278px] cursor-pointer justify-start group border-[2px] border-inherit gap-[24px]`}
          onClick={handleOnClick}
          tabIndex={0}
          role="button"
          aria-label={"open " + mediaLink}
        >
          <div
            className="overflow-hidden flex-shrink-0 relative border-r-[2px] border-inherit"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {loading && (
              <div
                className="absolute flex items-center justify-center bg-white"
                style={{
                  zIndex: "10",
                  width: "100%",
                  height: "100%",
                }}
              >
                <CircularProgress />
              </div>
            )}
            <>
              {mediaType === MEDIA_TYPE.PDF && (
                <>
                  {!!thumbnail ? (
                    <img
                      alt="img"
                      tabIndex={0}
                      src={`${process.env.PUBLIC_URL}/assets/${thumbnail}`}
                      style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        zIndex: 2,
                        aspectRatio: "auto",
                      }}
                    />
                  ) : (
                    <canvas
                      key={mediaLink}
                      ref={canvasRef}
                      tabIndex={0}
                      style={{
                        objectFit: "contain",
                        zIndex: 1,

                        maxWidth: "100%",
                        maxHeight: "100%",
                        aspectRatio: "auto",
                      }}
                    />
                  )}
                </>
              )}

              {mediaType === MEDIA_TYPE.VIDEO && (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    zIndex: 1,
                  }}
                  onMouseEnter={handleMouseEnter}
                >
                  {/*  video, play when mouse enter */}
                  {mediaDomain === "hkctc" && (
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
                      <source
                        src={"/hkctc-proxy" + mediaLink}
                        type="video/mp4"
                      />
                    </video>
                  )}

                  <img
                    ref={imageRef}
                    alt="Video"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                      zIndex: 0,
                      opacity: isIMGLoaded ? 1 : 0,
                    }}
                    onLoad={handleImageLoad}
                  />
                </div>
              )}

              {mediaType === MEDIA_TYPE.NEW_PAGE && (
                <>
                  {!!imagePath ? (
                    <img
                      alt="img"
                      src={`${process.env.PUBLIC_URL}/assets/${imagePath}`}
                      style={{
                        objectFit: "cover",

                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F4F4F4]" />
                  )}
                </>
              )}
            </>
          </div>
          <div className="flex flex-col justify-center py-[24px] pr-[24px] gap-[12px]">
            <div
              className={`text-heading-${
                isPC ? "m" : "xs"
              } text-start w-full group-hover:text-darkNavy group-hover:underline transition-all duration-300 ease-in-out`}
              tabIndex={0}
            >
              {title}
            </div>
            {date && (
              <div className="flex flex-row gap-[8px] items-center">
                <svg
                  aria-hidden="true"
                  xmlns="https://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g clipPath="url(#clip0_3271_24860)">
                    <path
                      d="M14.5 2.19281H12.5V0.859375H10.5V2.19281H6.5V0.859375H4.5V2.19281H2.5C1.39531 2.19281 0.5 3.08812 0.5 4.19281V16.8594H16.5V4.19281C16.5 3.08812 15.6047 2.19281 14.5 2.19281ZM2.5 14.8594V7.52594H14.5V14.8594H2.5Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3271_24860">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5 0.859375)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className={`text-body-${isPC ? "s" : "xs"} text-grey`}>
                  {date}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div
            className={`flex-shrink-0 relative 
          ${
            direction === "column" ? "w-full h-[190px]" : "w-[160px] h-[110px]"
          } 
          ${
            isPC ? "overflow-hidden" : "object-cover aspect-[390/278]"
          } cursor-pointer`}
            onClick={handleOnClick}
            tabIndex={0}
            role="button"
            aria-label={"open " + mediaLink}
          >
            <div
              style={{
                display: "flex",
                flexDirection: direction,
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                overflow: "hidden",
              }}
              className="border-[1px] border-inherit"
            >
              {loading && (
                <div
                  className="absolute flex flex-shrink-0 items-center justify-center bg-white border-2 border-inherit"
                  style={{ zIndex: "10", width: "100%", height: "100%" }}
                >
                  <CircularProgress />
                </div>
              )}
              <>
                {mediaType === MEDIA_TYPE.PDF && (
                  <>
                    {!!thumbnail ? (
                      <img
                        alt="img"
                        src={`${process.env.PUBLIC_URL}/assets/${thumbnail}`}
                        style={{
                          objectFit: "cover",

                          width: "100%",
                          height: "100%",
                          zIndex: 2,
                          aspectRatio: "auto",
                        }}
                      />
                    ) : (
                      <canvas
                        key={mediaLink}
                        ref={canvasRef}
                        tabIndex={0}
                        style={{
                          objectFit: "contain",
                          zIndex: 1,

                          maxWidth: "100%",
                          maxHeight: "100%",
                          aspectRatio: "auto",
                          ...(isPC
                            ? {}
                            : {
                                width: "100%",
                                height: "auto",
                              }),
                        }}
                      />
                    )}
                  </>
                )}

                {mediaType === MEDIA_TYPE.VIDEO && (
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                      zIndex: 1,
                    }}
                    onMouseEnter={handleMouseEnter}
                  >
                    {/*  video, play when mouse enter */}
                    {mediaDomain === "hkctc" && (
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
                        <source
                          src={"/hkctc-proxy" + mediaLink}
                          type="video/mp4"
                        />
                      </video>
                    )}

                    {/* {mediaDomain === "youtube" &&
                    isHoveringYTBVideo &&
                    videoRef && (
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
                    )} */}

                    <img
                      ref={imageRef}
                      alt="Video"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                        opacity: isIMGLoaded ? 1 : 0,
                      }}
                      onLoad={handleImageLoad}
                    />
                  </div>
                )}

                {mediaType === MEDIA_TYPE.NEW_PAGE && (
                  <>
                    {!!imagePath ? (
                      <img
                        alt="img"
                        src={`${process.env.PUBLIC_URL}/assets/${imagePath}`}
                        style={{
                          objectFit: "cover",

                          width: "100%",
                          height: "100%",
                          zIndex: 0,
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#F4F4F4]" />
                    )}
                  </>
                )}
              </>

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
          <div
            className={`flex flex-col items-start h-full w-full justify-${
              direction === "column" ? "center" : "start"
            } `}
            onClick={handleOnClick}
            tabIndex={0}
            role="button"
            style={{
              cursor: "pointer",
            }}
          >
            <div
              className={`flex flex-col items-start justify-${
                direction === "column" ? "between" : "center"
              } h-full w-full`}
            >
              <div
                className={`text-highlight-${isPC ? "l" : "xs"} ${
                  titleUnderline ? "underline" : ""
                }`}
              >
                {title}
              </div>

              {date ? (
                <div className="flex flex-row gap-[8px] mt-[8px] items-center">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    aria-hidden="true"
                  >
                    <g clipPath="url(#clip0_3271_24860)">
                      <path
                        d="M14.5 2.19281H12.5V0.859375H10.5V2.19281H6.5V0.859375H4.5V2.19281H2.5C1.39531 2.19281 0.5 3.08812 0.5 4.19281V16.8594H16.5V4.19281C16.5 3.08812 15.6047 2.19281 14.5 2.19281ZM2.5 14.8594V7.52594H14.5V14.8594H2.5Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3271_24860">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.5 0.859375)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className={`text-body-${isPC ? "s" : "xs"} text-grey`}>
                    {date}
                  </p>
                </div>
              ) : (
                direction === "column" && <div />
              )}
            </div>
          </div>
        </>
      )}

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
