import React, { useState } from "react";
import { AboutHKCTC } from "./AboutHKCTC";
import { PanelManpowerDevelopment } from "./PanelManpowerDevelopment";
import {
  BannerPhotoBox,
  Breadcrumb,
  DirectorySidebar,
  fullContainer,
  maxContainer,
} from "../../components";

const rightComponentMap: Record<string, React.ReactNode> = {
  "About HKCTC": <AboutHKCTC />,
  "Panel on Manpower Development": <PanelManpowerDevelopment />,
};

export const AboutUs: React.FC = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About Us" }];
  const [activatedItems, setActivatedItems] = useState<string>(
    Object.keys(rightComponentMap)[0]
  );

  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={"about/banner_bg.png"} />
      <div style={maxContainer}>
        <Breadcrumb items={breadcrumbItems} />
        <div className="w-full flex flex-row pt-[48px] px-[24px] gap-[24px]">
          <div className="min-w-[440px] w-1/3">
            <DirectorySidebar
              activatedItems={activatedItems}
              directorySidebarItems={Object.keys(rightComponentMap)}
              setActivatedItems={setActivatedItems}
            />
          </div>

          <div className="flex-1">{rightComponentMap[activatedItems]}</div>
        </div>
      </div>
    </div>
  );
};
