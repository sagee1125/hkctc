import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ExhibitionProgramme } from "./ExhibitionProgramme";
import { FundingSchemes } from "./FundingSchemes";
import { TCJS } from "./TCJS";
import { OtherSupport } from "./OtherSupport";
import {
  BannerPhotoBox,
  Breadcrumb,
  DirectorySidebar,
  Sidebar,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import {
  type NavData,
  type SubItems,
  NavigationBarConfiguration,
  navItemEnum,
} from "../../const";
import { NilWaiverFee, Relaxation } from "./AccommodationAndLand";
import {
  CEPAAgreements,
  GBA,
  OverviewIOnCEPA,
  SummaryOfCEPA,
} from "./EnteringIntoTheMainlandMarket";
import { useSettings } from "../../context";

export const directorySidebarItemsMap: Partial<
  Record<navItemEnum, Record<string, React.ReactNode>>
> = {
  [navItemEnum.accommodation_and_land]: {
    "Relaxation of Waiver Application for Existing Industrial Buildings": (
      <Relaxation />
    ),
    "“Nil Waiver Fee” for Testing Labs Operating in Industrial Buildings": (
      <NilWaiverFee />
    ),
  },
  [navItemEnum.entering_into_the_mainland_market]: {
    "Overview On CEPA": <OverviewIOnCEPA />,
    "CEPA Agreements": <CEPAAgreements />,
    "Summary of CEPA Clauses Relating to Testing and Certification": (
      <SummaryOfCEPA />
    ),
    "GBA Standard and Certification": <GBA />,
  },
};

const returnComponent = (
  navItem: navItemEnum,
  activatedDirectorySidebarItems: string
): {
  topBanner: string;
  directoryItems: string[];
  component: React.ReactNode | null;
} => {
  const directoryItems =
    Object.keys(directorySidebarItemsMap[navItem] ?? {}) ?? [];
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
    [navItemEnum.exhibition_programme]: {
      topBanner: "support/support_1.png",
      component: <ExhibitionProgramme />,
    },
    [navItemEnum.funding_schemes]: {
      topBanner: "support/funding_schemes_banner.png",
      component: <FundingSchemes />,
    },
    // Testing and Certification Sector Job Creation Scheme (TCJS)
    [navItemEnum.tcjs]: {
      topBanner: "support/support_3.png",
      component: <TCJS />,
    },
    [navItemEnum.accommodation_and_land]: {
      topBanner: "support/support_4.png",
      component:
        directorySidebarItemsMap[navItem]?.[activatedDirectorySidebarItems],
    },
    // Entering into the Mainland Market
    [navItemEnum.entering_into_the_mainland_market]: {
      topBanner: "support/support_5.png",
      component:
        directorySidebarItemsMap[navItem]?.[activatedDirectorySidebarItems],
    },
    // other Support
    [navItemEnum.other_support]: {
      topBanner: "support/support_6.png",
      component: <OtherSupport />,
    },
  };
  return {
    topBanner: rightComponentMap[navItem]?.topBanner ?? "support/support_1.png",
    component: rightComponentMap[navItem]?.component,
    directoryItems,
  };
};

const leftComponentMapKeys = [
  navItemEnum.exhibition_programme,
  navItemEnum.funding_schemes,
  navItemEnum.tcjs,
  navItemEnum.accommodation_and_land,
  navItemEnum.entering_into_the_mainland_market,
  navItemEnum.other_support,
];

export const Support: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isPC } = useSettings();

  const queryParams = new URLSearchParams(location.search);
  const initialSection = queryParams.get("section") ?? "";
  const initialParam: navItemEnum = leftComponentMapKeys.includes(
    initialSection as navItemEnum
  )
    ? (initialSection as navItemEnum)
    : navItemEnum.exhibition_programme;
  const initialHash = window.location.hash;
  const initialHashIndex = initialHash
    ? Number(initialHash.substring(1))
    : null; // remove `#`, get index

  const eventItems: SubItems[] =
    NavigationBarConfiguration.find((nav: NavData) => nav.title === "Support")
      ?.items?.[0].subItems ?? [];

  const [activeSidebarItems, setActiveSidebarItems] =
    useState<navItemEnum>(initialParam);
  const [activatedDirectorySidebarItems, setActivatedDirectorySidebarItems] =
    useState<string>("");

  const activeSidebarItemsLabel =
    eventItems.find((item) => item.enum === activeSidebarItems)?.subTitle ??
    navItemEnum.exhibition_programme;

  const dramaticComponent = returnComponent(
    activeSidebarItems as navItemEnum,
    activatedDirectorySidebarItems
  );
  const { directoryItems, topBanner, component } = dramaticComponent;

  useEffect(() => {
    if (initialParam !== activeSidebarItems) {
      if (!initialHashIndex) navigate(`?section=${initialParam}`);
      else {
        navigate(`?section=${initialParam}#${initialHashIndex}`);
        setActivatedDirectorySidebarItems(directoryItems[initialHashIndex]);
      }
      setActiveSidebarItems(initialParam);
    }
  }, [
    activeSidebarItems,
    initialHash,
    initialHashIndex,
    directoryItems,
    initialParam,
    navigate,
  ]);

  useEffect(() => {
    if (directoryItems.length !== 0) {
      setActivatedDirectorySidebarItems(directoryItems[initialHashIndex ?? 0]);
      window.location.hash = `${initialHashIndex ?? 0}`;
    }
  }, [activeSidebarItems, initialHash, initialHashIndex, directoryItems]);

  const handleChangeSidebar = (activatedItemEnum: string): void => {
    setActiveSidebarItems(activatedItemEnum as navItemEnum);
    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    navigate(`?section=${activatedItemEnum}`);
  };

  const handleChangeDirectorySidebarItems = (activatedItems: string): void => {
    const hashIndex = directoryItems.findIndex(
      (item) => item === activatedItems
    );
    setActivatedDirectorySidebarItems(activatedItems);

    window.location.hash = `${hashIndex}`;

    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Support",
      href: `/support?section=${navItemEnum.exhibition_programme}`, // default to activate the first one
    },
    {
      label: activeSidebarItemsLabel,
      ...(directoryItems.length === 0
        ? {}
        : {
            href: `/support?section=${activeSidebarItems}#0`,
          }),
    },
    ...(directoryItems.length === 0
      ? []
      : [{ label: activatedDirectorySidebarItems }]),
  ];

  const sidebar = (
    <>
      {directoryItems.length > 0 && (
        <DirectorySidebar
          directorySidebarItems={directoryItems}
          activatedItems={activatedDirectorySidebarItems}
          setActivatedItems={handleChangeDirectorySidebarItems}
        />
      )}
      <Sidebar
        title={"Support"}
        sidebarItems={eventItems}
        activatedItems={activeSidebarItems}
        setActivatedItems={handleChangeSidebar}
      />
    </>
  );

  return (
    <div style={fullContainer}>
      <BannerPhotoBox src={topBanner} />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}

        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px]">
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
