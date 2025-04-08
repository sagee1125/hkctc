import React from "react";
import { useSettings } from "../../context";

type BannerPhotoBoxProps = {
  src: string;
};

export const BannerPhotoBox: React.FC<BannerPhotoBoxProps> = ({ src }) => {
  const { isPC } = useSettings();

  const bgStyle: React.CSSProperties = {
    ...barStyle,
    minHeight: isPC ? "300px" : "173px",
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${src})`,
  };
  const squareSize = isPC ? 80 : 40;
  return (
    <div
      style={{
        width: "100%",
        height: isPC ? "300px" : "173px",
        overflow: "hidden",
      }}
    >
      <div style={bgStyle} role="img">
        <div style={overlayStyle} />
        <div className={`bg-white h-[${squareSize}px] w-[${squareSize}px]`} />
      </div>
    </div>
  );
};

const barStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "end",
  justifyContent: "end",
  position: "relative", // to include the overlay
  backgroundSize: "cover", // Ensures the image covers the container while maintaining aspect ratio
  backgroundPosition: "center", // Centers the image
  backgroundRepeat: "no-repeat",
  overflow: "hidden", // Hides anything that overflows the container
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: 1,
};
