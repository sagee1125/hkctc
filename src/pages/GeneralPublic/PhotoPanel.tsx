import React from "react";
import { useSettings } from "../../context";
import { useNavigate } from "react-router-dom";
import { navItemEnum } from "../../const";

export const PhotoPanel: React.FC = () => {
  const { isPC } = useSettings();
  const navigate = useNavigate();

  if (isPC)
    return (
      <div className={`w-full h-full grid grid-cols-2 gap-[24px] p-[24px]`}>
        <div className="grid grid-cols-2 gap-[24px]">
          <div
            className="col-span-2 cursor-pointer"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_1.png)`,
              ...imgBox,
            }}
            onClick={() => {
              navigate(`/about-us`);
            }}
          >
            <div style={overlayStyle} />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <p className={"text-heading-l-extra text-white z-20"}>
                About HKCTC
              </p>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate(`/tc-sector?section=${navItemEnum.profile_and_role}`);
            }}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_2.png)`,
              ...imgBox,
            }}
          >
            <div style={overlayStyle} />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <p className={"text-heading-l-extra text-white z-20"}>
                Profile & Role of T&C Industry
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_3.png)`,
              ...imgBox,
            }}
            className="cursor-pointer"
            onClick={() => {
              navigate(`/tc-sector?section=${navItemEnum.tc_sector_strengths}`);
            }}
          >
            <div style={overlayStyle} />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <p className={"text-heading-l-extra text-white z-10"}>
                Strengths of Hong Kong's T&C Industry
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
          className="cursor-pointer"
          onClick={() => {
            navigate(`/tc-sector?section=${navItemEnum.services_provided}`);
          }}
        >
          <div style={overlayStyle} />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              Services Provided by T&C Industry
            </p>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className={`w-full flex flex-col gap-[24px] p-[24px]`}>
        <div className="grid grid-cols-1 gap-[24px]">
          <div
            className="cursor-pointer"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_1.png)`,
              backgroundSize: "cover",
              paddingTop: "56.25%", // 16:9
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              position: "relative",
            }}
            onClick={() => {
              navigate("/about-us");
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "50%",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            <div className="flex items-end w-full h-full pl-[16px] pb-[16px]">
              <p className={"text-heading-l text-white z-20"}>About HKCTC</p>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate(`/tc-sector?section=${navItemEnum.profile_and_role}`);
            }}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_2.png)`,
              backgroundSize: "cover",
              paddingTop: "56.25%", // 16:9
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "50%",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <p className={"text-heading-l text-white z-20"}>
                Profile & Role of T&C Industry
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_3.png)`,
              backgroundSize: "cover",
              paddingTop: "56.25%", // 16:9
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              position: "relative",
            }}
            className="cursor-pointer"
            onClick={() => {
              navigate(`/tc-sector?section=${navItemEnum.tc_sector_strengths}`);
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "50%",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            <div className="flex items-end w-full h-full pl-[16px] pb-[16px]">
              <p className={"text-heading-l text-white z-10"}>
                Strengths of Hong Kong's T&C Industry
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/services_provide.png)`,
            backgroundSize: "cover",
            paddingTop: "56.25%", // 16:9
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            position: "relative",
          }}
          className="cursor-pointer"
          onClick={() => {
            navigate(`/tc-sector?section=${navItemEnum.services_provided}`);
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "50%",
              background:
                "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div className="flex items-end w-full h-full pl-[16px] pb-[16px]">
            <p className={"text-heading-l-extra text-white z-10"}>
              Services Provided by T&C Industry
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
