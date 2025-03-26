import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfileAndRole } from "./ProfileAndRole";
import { Strength } from "./Strength";
import { ServiceProvided } from "./ServiceProvided";
import { AccreditationServices } from "./AccreditationServices/AccreditationServices";
import {
  BannerPhotoBox,
  Breadcrumb,
  Sidebar,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import {
  NavigationBarConfiguration,
  NavData,
  NavItems,
  navItemEnum,
  SubItems,
} from "../../const";
import { ServicesDifferentBusinessAreas } from "./ServicesDifferentBusinessAreas";
import { useSettings } from "../../context";

const returnComponent = (
  navItem: navItemEnum
): {
  topBanner: string;
  component: React.ReactNode | null;
} => {
  const rightComponentMap: Partial<
    Record<
      navItemEnum,
      {
        topBanner: string;
        component: React.ReactNode;
        directorySidebar?: React.ReactNode;
      }
    >
  > = {
    [navItemEnum.profile_and_role]: {
      topBanner: "tcSector/ProfileOfTheSector.png",
      component: <ProfileAndRole />,
    },
    [navItemEnum.tc_sector_strengths]: {
      topBanner: "tcSector/Strengths.png",
      component: <Strength />,
    },
    [navItemEnum.services_provided]: {
      topBanner: "tcSector/ServicesProvidedByTCSector.png",
      component: <ServiceProvided />,
    },
    [navItemEnum.accreditation_services]: {
      topBanner: "tcSector/AccreditationServices.png",
      component: <AccreditationServices />,
    },
    [navItemEnum.different_business_areas]: {
      topBanner: "tcSector/DifferentBusinessAreas.png",
      component: <ServicesDifferentBusinessAreas />,
    },
  };
  return {
    topBanner: rightComponentMap[navItem]?.topBanner ?? "support/support_1.png",
    component: rightComponentMap[navItem]?.component,
  };
};

const leftComponentMapKeys = [
  navItemEnum.profile_and_role,
  navItemEnum.tc_sector_strengths,
  navItemEnum.services_provided,
  navItemEnum.different_business_areas,
  navItemEnum.accreditation_services,
];

const multilingual = {
  en: {
    about_tc_sector: `About T&C Industry`,
    home: "Home",
  },

  cn: {
    about_tc_sector: `關於檢測認證業`,
    home: "主頁",
  },
};

export const TCSector: React.FC = () => {
  const { isPC, getPageText, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);
  const { about_tc_sector, home } = page_text;
  const eventItems: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === multilingual.en.about_tc_sector
    )?.items.find(
      (subNav: NavItems) =>
        subNav.name ===
        "Introducing the Testing and Certification industry, and what service we can provide"
    )?.subItems ?? [];

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialSection = queryParams.get("section") ?? "";
  const initialParam: navItemEnum = leftComponentMapKeys.includes(
    initialSection as navItemEnum
  )
    ? (initialSection as navItemEnum)
    : navItemEnum.profile_and_role;
  const initialHash = window.location.hash;
  const initialHashIndex = initialHash
    ? Number(initialHash.substring(1))
    : null;

  const [activeSidebarItems, setActiveSidebarItems] =
    useState<navItemEnum>(initialParam);

  const { subTitle, subTitleCN } =
    eventItems.find((item) => item.enum === activeSidebarItems) ?? {};

  const activeSidebarItemsLabel =
    getSingleText(subTitle ?? "", subTitleCN ?? "") ??
    navItemEnum.profile_and_role;

  const component = returnComponent(
    activeSidebarItems as navItemEnum
  )?.component;
  const bannerImage = returnComponent(
    activeSidebarItems as navItemEnum
  )?.topBanner;

  const handleChangeSidebar = (activatedItemEnum: string): void => {
    setActiveSidebarItems(activatedItemEnum as navItemEnum);
    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    navigate(`?section=${activatedItemEnum}`);
  };

  useEffect(() => {
    if (initialParam !== activeSidebarItems) {
      if (!initialHashIndex) navigate(`?section=${initialParam}`);
      else {
        navigate(`?section=${initialParam}#${initialHashIndex}`);
      }
      setActiveSidebarItems(initialParam);
    }
  }, [initialParam, initialHashIndex, activeSidebarItems, navigate]);

  const breadcrumbItems = [
    { label: home as string, href: "/" },
    {
      label: about_tc_sector as string,
      href: `/tc-sector?section=${navItemEnum.profile_and_role}`, // default to activate the first one
    },
    {
      label: activeSidebarItemsLabel,
    },
  ];

  const sidebar = (
    <div className="sticky top-[20px]">
      <Sidebar
        title={about_tc_sector as string}
        sidebarItems={eventItems}
        activatedItems={activeSidebarItems}
        setActivatedItems={handleChangeSidebar}
      />
    </div>
  );

  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={bannerImage} />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}

        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px] relative">
            <div className="px-[24px] min-w-[440px] w-1/3">{sidebar}</div>
            <div className="flex-1">{component}</div>
          </div>
        ) : (
          <div className="p-[24px] flex flex-col gap-[24px]">
            <div>{sidebar}</div>
            <div>{component}</div>
          </div>
        )}
      </div>
    </div>
  );
};
