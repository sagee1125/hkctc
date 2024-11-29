import React from "react";


type BannerPhotoBoxProps = {
  src: string;
};

export const BannerPhotoBox: React.FC<BannerPhotoBoxProps> = ({
  src,
}) => {

  const bgStyle: React.CSSProperties = {
    ...barStyle,
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${src})`,

  };

  return (
    <div style={{
      width: '100%',
      height: '300px',
      overflow: "hidden",
    }}>
      <div style={bgStyle}>
        <div style={overlayStyle} />
        <div className="bg-white h-[80px] w-[80px]" />
      </div>
    </div>
  );
};


const barStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "end",
  justifyContent: "end",
  minHeight: "300px",
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
