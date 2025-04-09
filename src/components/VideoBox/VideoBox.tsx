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
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrls = [
    "InnoCarnivalcut.mp4",
    "HKCTC_03_edit_016_sub_TC_ENG.mp4", // 求學篇
    "HKCTC_02_edit_014_sub_TC_ENG.mp4", // 工作篇
    "HKCTC_04_012_sub_TC_ENG.mp4", // 求真篇
    "HKCTC_ESG_edit_005_sub_TC_ENG.mp4",
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateProgress = () => {
        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent ?? 0);
      };

      video.addEventListener("timeupdate", updateProgress);
      return () => video.removeEventListener("timeupdate", updateProgress);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause(); // pause current video
      video.currentTime = 0;
      video.load();
      setProgress(0);

      const onCanPlayThrough = (): void => {
        video.play();
        video.removeEventListener("canplaythrough", onCanPlayThrough);
      };

      video.addEventListener("canplaythrough", onCanPlayThrough);

      return () => {
        video.removeEventListener("canplaythrough", onCanPlayThrough);
      };
    }
  }, [currentVideoIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause(); // pause current video
      video.currentTime = 0;
      setProgress(0);

      // play when finished loading
      video.load(); // load new
      video.onloadeddata = () => {
        video.play(); // play new
      };
    }
  }, [currentVideoIndex]);

  const handleSlide = (direction: "next" | "prev"): void => {
    if (isSliding) return;
    setIsSliding(true);

    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => {
        if (direction === "next") {
          return prevIndex === videoUrls.length - 1 ? 0 : prevIndex + 1;
        }
        return prevIndex === 0 ? videoUrls.length - 1 : prevIndex - 1;
      });
      setIsSliding(false);
    }, 500);
  };

  return (
    <div style={fullContainer}>
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
              ref={index === currentVideoIndex ? videoRef : null}
              src={process.env.PUBLIC_URL + "/assets/" + url}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              style={{
                ...videoStyle,
              }}
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
          tabIndex={0}
          className="absolute inset-0 w-full h-full"
        >
          <div className="flex flex-col justify-between h-full">
            {isPC && <div className="h-[50px] w-[50px] bg-newPrimary" />}
            <div
              className="flex flex-col items-center mt-auto w-full" // Added mt-auto for bottom alignment
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
                )}
                <div className="flex flex-row">
                  {videoUrls.length > 1 ? (
                    <>
                      <Icon
                        icon="icons8:left-squared"
                        aria-label={"arrow icon"}
                        className="text-white cursor-pointer"
                        tabIndex={0}
                        role="button"
                        style={{
                          width: "50px",
                          height: "50px",
                          strokeWidth: "1px",
                        }}
                        onClick={() => handleSlide("prev")}
                      />
                      <Icon
                        icon="icons8:right-squared"
                        aria-label={"arrow icon"}
                        className="text-white cursor-pointer"
                        tabIndex={0}
                        role="button"
                        style={{
                          width: "50px",
                          height: "50px",
                          strokeWidth: "1px",
                        }}
                        onClick={() => handleSlide("next")}
                      />
                    </>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isPC && currentVideoIndex === 0 && (
        <div className="bg-newPrimary p-[14px] w-full ">
          <p className="text-highlight-m text-white ">{welcome as string}</p>

          <p className="!text-body-xs pt-[16px] text-white">
            {innoCarnival as string}
          </p>
        </div>
      )}
      {/* progress*/}
      <div style={progressBarContainerStyle}>
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
