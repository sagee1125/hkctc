import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";

export const VideoBox: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrls = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
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

      const onCanPlayThrough = () => {
        video.play();
        video.removeEventListener("canplaythrough", onCanPlayThrough);
      };

      video.addEventListener("canplaythrough", onCanPlayThrough);
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
    <div>
      <div
        style={videoBoxStyle}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              style={{
                ...videoStyle,
                transform:
                  index === currentVideoIndex && isHovered
                    ? "scale(1.1)" // Zoom in
                    : "scale(1)", // Default scale
                transition: "transform 0.3s ease-in-out",
              }}
            />
          ))}
        </div>

        {/* mask */}
        {isHovered && (
          <div
            style={overlayStyle}
            className="absolute inset-0 flex justify-between items-end py-10 px-16"
          >
            <div className="text-white pr-[26em]">
              <h2 className="text-heading-xl">
                {`Welcome to the InnoCarnival 2024`}
              </h2>

              <h2 className="text-body-m py-6">
                {`The InnoCarnival 2024 (IC 2024) was held from October 26 to
                November 3 at the Hong Kong Science Park with the theme of
                "Let's Sail with Innovation and Technology".`}
              </h2>
              <div className="py-2">
                <button style={buttonStyle}>SEE MORE</button>
              </div>
            </div>
            <div className="flex flex-row">
              <Icon
                icon="icons8:left-squared"
                className="text-white"
                style={{ width: "50px", height: "50px", strokeWidth: "1px" }}
                onClick={() => handleSlide("prev")}
              />
              <Icon
                icon="icons8:right-squared"
                className="text-white"
                style={{ width: "50px", height: "50px", strokeWidth: "1px" }}
                onClick={() => handleSlide("next")}
              />
            </div>
          </div>
        )}
      </div>

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

const videoBoxStyle: React.CSSProperties = {
  width: "100%",
  height: "calc(100vw * 9 / 16)",
  maxHeight: "600px",
  position: "relative",
  overflow: "hidden",
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

const overlayStyle: React.CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 10,
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  borderRadius: "2px",
  cursor: "pointer",
  border: "none",
};
