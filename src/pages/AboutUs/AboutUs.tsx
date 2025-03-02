import React, { useState } from "react";
import { AboutHKCTC } from "./AboutHKCTC";
import { PanelManpowerDevelopment } from "./PanelManpowerDevelopment";
import {
  BannerPhotoBox,
  Breadcrumb,
  DirectorySidebar,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
  Sidebar,
} from "../../components";
import { useSettings } from "../../context";
import { navItemEnum, SubItems } from "../../const";

const rightComponentMap: Record<string, React.ReactNode> = {
  "About HKCTC": <AboutHKCTC />,
  "Panel on Manpower Development": <PanelManpowerDevelopment />,
};

const rightMobileComponentMap: Record<string, React.ReactNode> = {
  [navItemEnum.about_HKCTC]: <AboutHKCTC />,
  [navItemEnum.panel_on_manpower_development]: <PanelManpowerDevelopment />,
};

export const AboutUs: React.FC = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About HKCTC" }];
  const [activatedItems, setActivatedItems] = useState<string>(
    Object.keys(rightComponentMap)[0]
  );
  const [activatedMBItems, setActivatedMBItems] = useState<string>(
    Object.keys(rightMobileComponentMap)[0]
  );
  const { isPC } = useSettings();
  const mbSidebarItems: SubItems[] = [
    { enum: navItemEnum.about_HKCTC, subTitle: "About HKCTC", imgUrl: "" },
    {
      enum: navItemEnum.panel_on_manpower_development,
      subTitle: "Panel on Manpower Development",
      imgUrl: "",
    },
  ];
  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={"about/banner_bg.png"} />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}

        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] px-[24px] gap-[24px]">
            <div className="min-w-[440px] w-1/3">
              <div className="sticky top-[20px]">
                <DirectorySidebar
                  activatedItems={activatedItems}
                  directorySidebarItems={Object.keys(rightComponentMap)}
                  setActivatedItems={setActivatedItems}
                />
              </div>
            </div>

            <div className="flex-1">{rightComponentMap[activatedItems]}</div>
          </div>
        ) : (
          <div className="p-[24px] flex flex-col gap-[24px]">
            <div>
              <Sidebar
                title={""}
                activatedItems={activatedMBItems}
                sidebarItems={mbSidebarItems}
                setActivatedItems={setActivatedMBItems}
              />
            </div>
            <div>{rightMobileComponentMap[activatedMBItems]}</div>
          </div>
        )}
      </div>
    </div>
  );
};
