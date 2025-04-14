import React from "react";
import classNames from "classnames";

type ExploreDetailBarProps = {
  title: string;
  titleTheme: string;
  description: string;
  barBackgroundImg: string;
  isPC: boolean;
  offset?: string;
};

export const ExploreDetailBar: React.FC<ExploreDetailBarProps> = ({
  title,
  titleTheme,
  description,
  barBackgroundImg,
  isPC,
  offset = "30%",
}) => {
  const dynamicBarStyle: React.CSSProperties = {
    ...barStyle,
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${barBackgroundImg})`, // 从 public 文件夹加载
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    width: "100%",
    backgroundPosition: isPC ? `center ${offset}` : "start",
  };

  return (
    <div style={dynamicBarStyle} role="banner">
      <div style={overlayStyle} />
      <div
        className="flex flex-col gap-[4px]"
        style={{
          marginLeft: "24px",
          zIndex: 10,
          width: "100%",
          alignItems: "center",
        }}
        aria-label={`${title} - ${description}`}
      >
        <div
          style={{
            zIndex: 10,
            maxWidth: isPC ? "1440px" : "1024px",
            width: "100%",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <p
            className={classNames("text-heading-xl", `text-${titleTheme}`)}
            role="heading"
            aria-level={10}
            aria-label={title}
          >
            {title}
          </p>
          <p className="text-white text-light" aria-label={description}>
            {description}
          </p>
        </div>
      </div>
      <div style={bottomRightSquareStyle} role="none" />
    </div>
  );
};

const barStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  height: "168px",
  position: "relative", // to include the overlay
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(90.05deg, rgba(19, 6, 29, 0.6) 0.04%, rgba(0, 0, 0, 0.45) 45.01%, rgba(255, 255, 255, 0) 99.96%)",
  pointerEvents: "none",
  zIndex: 1,
};

const bottomRightSquareStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "0px",
  right: "0px",
  width: "40px",
  height: "40px",
  backgroundColor: "white",
  zIndex: 20,
};
