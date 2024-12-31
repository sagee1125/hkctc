import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ExhibitionProgramme } from "./ExhibitionProgramme";
import { FundingSchemes } from "./FundingSchemes";
import { TCJS } from "./TCJS";
import { BannerPhotoBox, Breadcrumb, Sidebar } from "../../components";
import {
  type NavData,
  type SubItems,
  NavigationBarConfiguration,
  navItemEnum,
} from "../../const";

const leftComponentMap: Partial<
  Record<
    navItemEnum,
    {
      topBanner: string;
      component: React.ReactNode;
    }
  >
> = {
  [navItemEnum.exhibition_programme]: {
    topBanner: "support/support_1.png",
    component: <ExhibitionProgramme />,
  },
  [navItemEnum.funding_schemes]: {
    topBanner: "support/support_2.png",
    component: <FundingSchemes />,
  },
  // Testing and Certification Sector Job Creation Scheme (TCJS)
  [navItemEnum.tcjs]: {
    topBanner: "support/support_3.png",
    component: <TCJS />,
  },
  [navItemEnum.accommodation_and_land]: {
    topBanner: "support/support_4.png",
    component: <div>4</div>,
  },
  // Entering into the Mainland Market
  [navItemEnum.entering_into_the_mainland_market]: {
    topBanner: "support/support_5.png",
    component: <div>5</div>,
  },
  // other Support
  [navItemEnum.other_professional_schemes]: {
    topBanner: "support/support_6.png",
    component: <div>6</div>,
  },
};
const leftComponentMapKeys = Object.keys(leftComponentMap);
export const Support: React.FC = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Support" }];
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialSection = queryParams.get("section") ?? "";
  const initialParam: navItemEnum = leftComponentMapKeys.includes(
    initialSection
  )
    ? (initialSection as navItemEnum)
    : navItemEnum.exhibition_programme;

  const eventItems: SubItems[] =
    NavigationBarConfiguration.find((nav: NavData) => nav.title === "Support")
      ?.items?.[0].subItems ?? [];

  const [activeSidebarItems, setActiveSidebarItems] =
    useState<navItemEnum>(initialParam);

  const handleChangeSidebar = (activatedItemEnum: string): void => {
    setActiveSidebarItems(activatedItemEnum as navItemEnum);
    navigate(`?section=${activatedItemEnum}`);
  };

  return (
    <div className="w-full">
      <BannerPhotoBox
        src={
          leftComponentMap[activeSidebarItems as navItemEnum]?.topBanner ??
          "support/support_1.png"
        }
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="w-full flex flex-row pt-[48px] pr-[24px]">
        <Sidebar
          title={"Support"}
          sidebarItems={eventItems}
          activatedItems={activeSidebarItems}
          setActivatedItems={handleChangeSidebar}
        />
        <div className="flex-1">
          {leftComponentMap[activeSidebarItems as navItemEnum]?.component}
        </div>
      </div>
    </div>
  );
};
