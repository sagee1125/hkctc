import React from "react";

export const PhotoPanel: React.FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-[24px] p-[24px]">
      <div className="grid grid-cols-2 gap-[24px]">
        <div
          className="col-span-2"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/strengths.png)`,
            ...imgBox,
          }}
        >
          <div style={overlayStyle} />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              Strengths of Hong Kong's T&C Sector
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/career_development.png)`,
            ...imgBox,
          }}
        >
          <div style={overlayStyle} />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              Career Development
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/about.png)`,
            ...imgBox,
          }}
        >
          <div style={overlayStyle} />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              About HKCTC
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/services_provide.png)`,
          minHeight: "537px",
          ...imgBox,
        }}
      >
        <div style={overlayStyle} />
        <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
          <p className={"text-heading-l-extra text-white z-10"}>
            Services Provided by T&C Sector
          </p>
        </div>
      </div>
    </div>
  );
};

export const overlayStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "140px",
  background:
    "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
  pointerEvents: "none",
  zIndex: 1,
};

export const imgBox: React.CSSProperties = {
  display: "flex",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center top",
  position: "relative",
};