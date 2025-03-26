import React, { useState } from "react";
import { AboutHKCTC } from "./AboutHKCTC";
import { PanelManpowerDevelopment } from "./PanelManpowerDevelopment";
import {
  BannerPhotoBox,
  Breadcrumb,
  type BreadcrumbItem,
  DirectorySidebar,
  DirectorySidebarItems,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
  Sidebar,
} from "../../components";
import { Language, useSettings } from "../../context";
import { navItemEnum, SubItems } from "../../const";

const rightMobileComponentMap: Record<string, React.ReactNode> = {
  [navItemEnum.about_HKCTC]: <AboutHKCTC />,
  [navItemEnum.panel_on_manpower_development]: <PanelManpowerDevelopment />,
};

const multilingual = {
  en: {
    home: "Home",
    about_hkctc: "About HKCTC",
    panel: "Panel on Manpower Development",
  },
  cn: {
    home: "主頁",
    about_hkctc: "關於我們",
    panel: "人力發展小組",
  },
};

export const AboutUs: React.FC = () => {
  const { getPageText, isPC } = useSettings();
  const page_text = getPageText(multilingual);

  const { home, about_hkctc, panel } = page_text;
  const breadcrumbItems = [{ label: home, href: "/" }, { label: about_hkctc }];

  const rightComponentMap: Record<string, React.ReactNode> = {
    [navItemEnum.about_HKCTC]: <AboutHKCTC />,
    [navItemEnum.panel_on_manpower_development]: <PanelManpowerDevelopment />,
  };

  const directorySidebarItems: DirectorySidebarItems[] = [
    {
      label: about_hkctc as string,
      labelCN: about_hkctc as string,
      value: navItemEnum.about_HKCTC,
    },
    {
      label: panel as string,
      labelCN: panel as string,
      value: navItemEnum.panel_on_manpower_development,
    },
  ];
  const [activatedItems, setActivatedItems] = useState<string>(
    Object.keys(rightComponentMap)[0]
  );
  const [activatedMBItems, setActivatedMBItems] = useState<string>(
    Object.keys(rightMobileComponentMap)[0]
  );

  const mbSidebarItems: SubItems[] = [
    {
      enum: navItemEnum.about_HKCTC,
      subTitle: about_hkctc as string,
      subTitleCN: about_hkctc as string,
      imgUrl: "",
    },
    {
      enum: navItemEnum.panel_on_manpower_development,
      subTitle: panel as string,
      subTitleCN: panel as string,
      imgUrl: "",
    },
  ];

  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={"about/banner_bg.png"} />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems as BreadcrumbItem[]} />
          </div>
        )}

        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] px-[24px] gap-[24px]">
            <div className="min-w-[440px] w-1/3">
              <div className="sticky top-[20px]">
                <DirectorySidebar
                  activatedItems={activatedItems}
                  directorySidebarItems={directorySidebarItems}
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
