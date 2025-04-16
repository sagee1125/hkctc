import React from "react";
import { useSettings } from "../../context";
import { navItemEnum } from "../../const";
const multilingual = {
  en: {
    about: "About HKCTC",
    profile_and_role: (
      <>
        Profile and Role of
        <br />
        T&C Sector
      </>
    ),
    tc_sector_strengths: <>Strengths of Hong Kong's T&C Industry</>,
    services_provided: (
      <>
        Services Provided by
        <br />
        T&C Industry
      </>
    ),
  },
  cn: {
    about: "關於我們",
    profile_and_role: (
      <>
        檢測認證業的概況
        <br />
        及角色
      </>
    ),
    tc_sector_strengths: "香港檢測認證業的優勢",
    services_provided: "檢測認證業提供的服務",
  },
};

export const PhotoPanel: React.FC = () => {
  const { isPC, getPageText } = useSettings();
  const page_text = getPageText(multilingual);

  const { about, profile_and_role, tc_sector_strengths, services_provided } =
    page_text;

  if (isPC)
    return (
      <div className={`w-full h-full grid grid-cols-2 gap-[24px] p-[24px]`}>
        <div className="grid grid-cols-2 gap-[24px]">
          <a
            className="col-span-2"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_1.png)`,
              ...imgBox,
            }}
            aria-label={about as string}
            href="/about-us"
          >
            <div style={overlayStyle} role="none" />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <p className={"text-heading-l-extra text-white z-20"}>
                {about as string}
              </p>
            </div>
          </a>
          <a
            href={`/tc-sector?section=${navItemEnum.profile_and_role}`}
            aria-label="redirect to profile & role in T&C sector section"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_2.png)`,
              ...imgBox,
            }}
          >
            <div style={overlayStyle} role="none" />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <div className={"text-heading-l-extra text-white z-20"}>
                {profile_and_role as React.ReactNode}
              </div>
            </div>
          </a>

          <a
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_3.png)`,
              ...imgBox,
            }}
            aria-label="redirect to T&C sector strengths in T&C sector section"
            href={`/tc-sector?section=${navItemEnum.tc_sector_strengths}`}
          >
            <div style={overlayStyle} role="none" />
            <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
              <div className={"text-heading-l-extra text-white z-10"}>
                {tc_sector_strengths as React.ReactNode}
              </div>
            </div>
          </a>
        </div>
        <a
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/services_provide.png)`,
            minHeight: "537px",
            ...imgBox,
          }}
          aria-label="redirect to services provided in T&C sector section"
          href={`/tc-sector?section=${navItemEnum.services_provided}`}
        >
          <div style={overlayStyle} role="none" />
          <div className="flex items-end w-full h-full pl-[24px] pb-[34px]">
            <div className={"text-heading-l-extra text-white z-10"}>
              {services_provided as React.ReactNode}
            </div>
          </div>
        </a>
      </div>
    );
  else
    return (
      <div className={`w-full flex flex-col gap-[24px] p-[24px]`}>
        <div className="grid grid-cols-1 gap-[24px]">
          <a
            href="/about-us"
            aria-label="redirect to about us"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_1.png)`,
              backgroundSize: "cover",
              paddingTop: "56.25%", // 16:9
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              position: "relative",
            }}
          >
            <div
              role="none"
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
              <p className={"text-heading-l text-white z-20"}>
                {about as string}
              </p>
            </div>
          </a>
          <a
            href={`/tc-sector?section=${navItemEnum.profile_and_role}`}
            aria-label="redirect to profile & role in T&C sector section"
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
              role="none"
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
                {profile_and_role as string}
              </p>
            </div>
          </a>

          <a
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/banner_3.png)`,
              backgroundSize: "cover",
              paddingTop: "56.25%", // 16:9
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              position: "relative",
            }}
            aria-label="redirect to T&C sector strengths in T&C sector section"
            href={`/tc-sector?section=${navItemEnum.tc_sector_strengths}`}
          >
            <div
              role="none"
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
                {tc_sector_strengths as string}
              </p>
            </div>
          </a>
        </div>
        <a
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/services_provide.png)`,
            backgroundSize: "cover",
            paddingTop: "56.25%", // 16:9
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            position: "relative",
          }}
          aria-label="redirect to service provided in T&C sector section"
          href={`/tc-sector?section=${navItemEnum.services_provided}`}
        >
          <div
            role="none"
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
              {services_provided as string}
            </p>
          </div>
        </a>
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
