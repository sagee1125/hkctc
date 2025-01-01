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
} from "../../components";
import {
  type NavData,
  type SubItems,
  NavigationBarConfiguration,
  navItemEnum,
} from "../../const";

const returnComponent = (
  navItem: navItemEnum,
  activatedDirectorySidebarItems: string
): {
  topBanner: string;
  directoryItems: string[];
  component: React.ReactNode | null;
} => {
  const directorySidebarItemsMap: Partial<
    Record<navItemEnum, Record<string, React.ReactNode>>
  > = {
    [navItemEnum.accommodation_and_land]: {
      "Relaxation of Waiver Application for Existing Industrial Buildings": (
        <div>1</div>
      ),
      "“Nil Waiver Fee” for Testing Labs Operating in Industrial Buildings": (
        <div>2</div>
      ),
    },
    [navItemEnum.entering_into_the_mainland_market]: {
      "Overview On CEPA": <div>3</div>,
      "CEPA Agreements": <div>4</div>,
      "Summary of CEPA Clauses Relating to Testing and Certification": (
        <div>1</div>
      ),
      "GBA Standard and Certification": <div>1</div>,
    },
  };

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
      component:
        directorySidebarItemsMap[navItem]?.[activatedDirectorySidebarItems],
    },
    // Entering into the Mainland Market
    [navItemEnum.entering_into_the_mainland_market]: {
      topBanner: "support/support_5.png",
      component: <div>5</div>,
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
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Support" }];
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialSection = queryParams.get("section") ?? "";
  const initialParam: navItemEnum = leftComponentMapKeys.includes(
    initialSection as navItemEnum
  )
    ? (initialSection as navItemEnum)
    : navItemEnum.exhibition_programme;

  const eventItems: SubItems[] =
    NavigationBarConfiguration.find((nav: NavData) => nav.title === "Support")
      ?.items?.[0].subItems ?? [];

  const [activeSidebarItems, setActiveSidebarItems] =
    useState<navItemEnum>(initialParam);
  const [activatedDirectorySidebarItems, setActivatedDirectorySidebarItems] =
    useState<string>("");

  const dramaticComponent = returnComponent(
    activeSidebarItems as navItemEnum,
    activatedDirectorySidebarItems
  );
  const { directoryItems, topBanner, component } = dramaticComponent;

  useEffect(() => {
    if (initialParam !== activeSidebarItems) {
      navigate(`?section=${initialParam}`);
      setActiveSidebarItems(initialParam);
    }
  }, [initialParam]);

  useEffect(() => {
    if (directoryItems.length !== 0) {
      setActivatedDirectorySidebarItems(directoryItems[0]);
    }
  }, [activeSidebarItems]);

  const handleChangeSidebar = (activatedItemEnum: string): void => {
    setActiveSidebarItems(activatedItemEnum as navItemEnum);
    navigate(`?section=${activatedItemEnum}`);
  };

  return (
    <div className="w-full pb-[48px]">
      <BannerPhotoBox src={topBanner} />
      <Breadcrumb items={breadcrumbItems} />
      <div className="w-full flex flex-row pt-[48px] pr-[24px]">
        <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
          {directoryItems.length > 0 && (
            <DirectorySidebar
              directorySidebarItems={directoryItems}
              activatedItems={activatedDirectorySidebarItems}
              setActivatedItems={setActivatedDirectorySidebarItems}
            />
          )}
          <Sidebar
            title={"Support"}
            sidebarItems={eventItems}
            activatedItems={activeSidebarItems}
            setActivatedItems={handleChangeSidebar}
          />
        </div>
        <div className="flex-1">{component}</div>
      </div>
    </div>
  );
};
