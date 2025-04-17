import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { fullContainer } from "../Container";
import { useSettings } from "../../context";

const multilingual = {
  en: {
    welcome: "Welcome to the InnoCarnival 2024",
    innoCarnival: `The InnoCarnival 2024 (IC 2024) was held from October 26 to November 3 at the Hong Kong Science Park with the theme of "Let's Sail with Innovation and Technology".`,
  },
  cn: {
    welcome: "歡迎來到「創新科技嘉年華2024」",
    innoCarnival: ` 「創新科技嘉年華2024」於十月二十六日至十一月三日在香港科學園舉行。活動以「科技引路　創新啟航」為主題。`,
  },
};

export const VideoBox: React.FC = () => {
  const { isPC, getPageText } = useSettings();
  const page_text = getPageText(multilingual);
  const { welcome, innoCarnival } = page_text;

  const [progress, setProgress] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // 使用 ref 数组存储所有视频引用
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout>();
  const progressRef = useRef<number>();

  const videoUrls = [
    "InnoCarnivalcut.mp4",
    "HKCTC_03_edit_016_sub_TC_ENG.mp4",
    // "HKCTC_02_edit_014_sub_TC_ENG.mp4", // move it in 17/04/2025
    "HKCTC_04_012_sub_TC_ENG.mp4",
    "HKCTC_ESG_edit_005_sub_TC_ENG.mp4",
  ];

  // 初始化 ref 数组
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videoUrls.length);
  }, [videoUrls.length]);

  const playNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoUrls.length);
  };

  const resetVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const setupCurrentVideo = () => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (!currentVideo) return;

    // 强制重置播放器状态
    currentVideo.currentTime = 0;
    setProgress(0); // 双保险重置

    const startPlayback = async () => {
      try {
        await currentVideo.play();

        // 严格5秒切换（即使视频未播放完）
        timerRef.current = setTimeout(() => {
          playNextVideo();
        }, 5000);

        // 使用性能更高的进度更新
        let lastUpdate = 0;
        const updateProgress = (timestamp: number) => {
          if (timestamp - lastUpdate > 50) {
            // 50ms更新间隔
            const percent = Math.min((currentVideo.currentTime / 5) * 100, 100);
            setProgress(percent);
            lastUpdate = timestamp;
          }
          progressRef.current = requestAnimationFrame(updateProgress);
        };
        progressRef.current = requestAnimationFrame(updateProgress);
      } catch (e) {
        setIsSliding(false);
      }
    };
    //  确保事件监听器只添加一次
    currentVideo.addEventListener("canplaythrough", startPlayback, {
      once: true,
    });

    //  如果视频已可播放，立即启动
    if (currentVideo.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
      startPlayback();
    }

    return () => {
      currentVideo.removeEventListener("canplaythrough", startPlayback);
    };
  };

  useEffect(() => {
    const cleanup = setupCurrentVideo();
    return () => {
      cleanup?.();
      clearTimeout(timerRef.current);
      if (progressRef.current !== undefined) {
        cancelAnimationFrame(progressRef.current);
        progressRef.current = undefined;
      }
      setIsSliding(false);
    };
  }, [currentVideoIndex]);

  const handleSlide = (direction: "next" | "prev") => {
    if (isSliding) return;
    setIsSliding(true);

    if (progressRef.current) {
      cancelAnimationFrame(progressRef.current);
      progressRef.current = undefined;
    }
    if (timerRef.current) clearTimeout(timerRef.current);

    setProgress(0);

    setCurrentVideoIndex((prev) => {
      const newIndex =
        direction === "next"
          ? (prev + 1) % videoUrls.length
          : (prev - 1 + videoUrls.length) % videoUrls.length;
      return newIndex;
    });

    setIsSliding(false);
  };

  const videoSwitching = (
    <div className="flex flex-row">
      {videoUrls.length > 1 && (
        <>
          <div
            className="cursor-pointer"
            tabIndex={0}
            role="button"
            aria-label="previous video"
            onClick={() => handleSlide("prev")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSlide("prev");
              }
            }}
          >
            <Icon
              icon="icons8:left-squared"
              className="text-white"
              style={{
                width: "50px",
                height: "50px",
                strokeWidth: "1px",
              }}
              aria-hidden="true"
            />
          </div>
          <div
            className="cursor-pointer"
            tabIndex={0}
            role="button"
            aria-label="next video"
            onClick={() => handleSlide("next")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSlide("next");
              }
            }}
          >
            <Icon
              icon="icons8:right-squared"
              className="text-white"
              style={{
                width: "50px",
                height: "50px",
                strokeWidth: "1px",
              }}
              aria-hidden="true"
            />
          </div>
        </>
      )}
    </div>
  );

  return (
    <div style={fullContainer} role="region" aria-label="Video playback area">
      <div
        style={{
          width: "100%",
          height: "calc(100vw * 9 / 16)",
          maxHeight: "720px",
          position: "relative",
          overflow: "hidden",
        }}
        className="relative overflow-hidden"
      >
        {/* banner */}
        <div
          style={{
            ...sliderStyle,
            transform: `translateX(${-currentVideoIndex * 100}%)`,
          }}
        >
          {videoUrls.map((url, index) => (
            <video
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              src={process.env.PUBLIC_URL + "/assets/" + url}
              className="w-full h-full object-cover"
              aria-label={welcome as string}
              muted
              playsInline
              loop={false}
              preload="auto"
              style={videoStyle}
            />
          ))}
        </div>

        {/* mask */}
        <div
          style={{
            zIndex: 10,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="flex flex-col justify-between h-full">
            {isPC && <div className="h-[50px] w-[50px] bg-newPrimary" />}
            <div
              className="flex flex-col items-center mt-auto w-full"
              style={{
                ...(!isPC
                  ? {}
                  : {
                      background:
                        "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
                    }),
              }}
            >
              <div className="flex justify-between items-end py-10 px-[24px] mt-auto w-full max-w-[1440px]">
                {isPC && (
                  <>
                    <div className="text-white pr-[26em]">
                      {currentVideoIndex === 0 && (
                        <>
                          <p
                            className="text-heading-xl"
                            role="heading"
                            aria-level={10}
                          >
                            {welcome as string}
                          </p>

                          <p className="!text-body-m py-[24px]">
                            {innoCarnival as string}
                          </p>
                        </>
                      )}
                    </div>
                    {videoSwitching}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isPC && (
        <div className="bg-newPrimary p-[14px] w-full">
          {currentVideoIndex === 0 && (
            <div>
              <p className="text-highlight-m text-white ">
                {welcome as string}
              </p>
              <p className="!text-body-xs pt-[16px] text-white">
                {innoCarnival as string}
              </p>
            </div>
          )}
          <div className="pt-[8px]">{videoSwitching}</div>
        </div>
      )}
      {/* progress */}
      <div
        style={progressBarContainerStyle}
        role="progressbar"
        aria-valuenow={progress}
        aria-label="progressbar"
      >
        <div
          style={{
            ...progressBarStyle,
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

const sliderStyle: React.CSSProperties = {
  display: "flex",
  transition: "transform 0.3s ease-in-out",
  width: "100%",
};

const videoStyle: React.CSSProperties = {
  objectFit: "cover",
  flexShrink: 0,
  width: "100%",
  height: "100%",
};

const progressBarContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "16px",
  background: "#E0E0E0",
};

const progressBarStyle: React.CSSProperties = {
  height: "100%",
  background: "#D1E39B",
  transition: "width 0.1s ease-out",
};
