import React, { useState } from "react";
import { BannerPhotoBox, Breadcrumb, Sidebar } from "../../components";
import {
  type NavData,
  type SubItems,
  NavigationBarConfiguration,
  navItemEnum,
} from "../../const";
import { ExhibitionProgramme } from "./ExhibitionProgramme";
import { FundingSchemes } from "./FundingSchemes";

export const Support: React.FC = () => {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Support" }];

  const eventItems: SubItems[] =
    NavigationBarConfiguration.find((nav: NavData) => nav.title === "Support")
      ?.items?.[0].subItems ?? [];

  console.log("eventItems", eventItems);

  const [activeSidebarItems, setActiveSidebarItems] = useState<
    navItemEnum | ""
  >(navItemEnum.exhibition_programme);

  const handleChangeSidebar = (activatedItemEnum: string): void => {
    setActiveSidebarItems(activatedItemEnum as navItemEnum | "");
  };

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
      component: <div>3</div>,
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
