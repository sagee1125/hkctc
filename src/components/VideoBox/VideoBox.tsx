import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { fullContainer } from "../Container";
import { useSettings } from "../../context";

export const VideoBox: React.FC = () => {
  const { device } = useSettings();
  const isMobile: boolean = device === "mobile";

  const [progress, setProgress] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrls = [
    process.env.PUBLIC_URL + "/assets/InnoCarnivalcut.mp4",
    // "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    // "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    // "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
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
              src={url}
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
          className="absolute inset-0 w-full h-full"
        >
          <div className="flex flex-col jusity-between h-full">
            {!isMobile && <div className="h-[50px] w-[50px] bg-newPrimary" />}
            <div
              className="flex justify-between items-end py-10 px-[24px] mt-auto" // Added mt-auto for bottom alignment
              style={{
                ...(isMobile
                  ? {}
                  : {
                      background:
                        "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
                    }),
              }}
            >
              {!isMobile && (
                <div className="text-white pr-[26em]">
                  <p className="text-heading-xl">
                    Welcome to the InnoCarnival 2024
                  </p>

                  <p className="!text-body-m py-[24px]">
                    {`The InnoCarnival 2024 (IC 2024) was held from October 26 to
                November 3 at the Hong Kong Science Park with the theme of
                "Let's Sail with Innovation and Technology".`}
                  </p>
                </div>
              )}
              <div className="flex flex-row">
                {videoUrls.length > 1 ? (
                  <>
                    <Icon
                      icon="icons8:left-squared"
                      className="text-white cursor-pointer"
                      style={{
                        width: "50px",
                        height: "50px",
                        strokeWidth: "1px",
                      }}
                      onClick={() => handleSlide("prev")}
                    />
                    <Icon
                      icon="icons8:right-squared"
                      className="text-white cursor-pointer"
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

      {isMobile && (
        <div className="text-white bg-newPrimary p-[14px]">
          <p className="text-highlight-m">Welcome to the InnoCarnival 2024</p>

          <p className="!text-body-xs pt-[16px]">
            {`The InnoCarnival 2024 (IC 2024) was held from October 26 to
                November 3 at the Hong Kong Science Park with the theme of
                "Let's Sail with Innovation and Technology".`}
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

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  cursor: "pointer",
  border: "none",
};
