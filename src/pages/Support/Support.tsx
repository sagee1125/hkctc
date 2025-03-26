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
  type DirectorySidebarItems,
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
import { Language, useSettings } from "../../context";

export const directorySidebarItemsMap: Partial<
  Record<
    navItemEnum,
    Record<string, { label: string; labelCN: string; content: React.ReactNode }>
  >
> = {
  [navItemEnum.accommodation_and_land]: {
    relaxation: {
      label:
        "Relaxation of Waiver Application for Existing Industrial Buildings",
      labelCN: "放寬現有工業大廈地契豁免書申請",
      content: <Relaxation />,
    },
    nil: {
      label:
        "“Nil Waiver Fee” for Testing Labs Operating in Industrial Buildings",
      labelCN: "在工業大廈營運的測試實驗所「免繳豁免書費用」安排",
      content: <NilWaiverFee />,
    },
  },
  [navItemEnum.entering_into_the_mainland_market]: {
    overviewIOnCEPA: {
      label: "Overview On CEPA",
      labelCN: "CEPA概覽",
      content: <OverviewIOnCEPA />,
    },
    CEPAAgreements: {
      label: "CEPA Agreements",
      labelCN: "CEPA協議",
      content: <CEPAAgreements />,
    },
    summaryOfCEPA: {
      label: "Summary of CEPA Clauses Relating to Testing and Certification",
      labelCN: "CEPA下檢測認證相關條文摘要",
      content: <SummaryOfCEPA />,
    },
    GBA: {
      label: "GBA Standard and Certification",
      labelCN: "灣區標準及認證",
      content: <GBA />,
    },
  },
};

const returnComponent = (
  navItem: navItemEnum,
  activatedDirectorySidebarItems: string
): {
  topBanner: string;
  directoryItemsKeys: string[];
  component: React.ReactNode | null;
} => {
  const directoryItemsKeys =
    Object.keys(directorySidebarItemsMap[navItem] ?? {}) ?? [];

  const rightComponentMap: Partial<
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
      topBanner: "support/funding_schemes_banner.png",
      component: <FundingSchemes />,
    },
    // Testing and Certification Industry Job Creation Scheme (TCJS)
    [navItemEnum.tcjs]: {
      topBanner: "support/support_3.png",
      component: <TCJS />,
    },
    [navItemEnum.accommodation_and_land]: {
      topBanner: "support/support_4.png",
      component:
        directorySidebarItemsMap[navItem]?.[activatedDirectorySidebarItems]
          ?.content,
    },
    // Entering into the Mainland Market
    [navItemEnum.entering_into_the_mainland_market]: {
      topBanner: "support/support_5.png",
      component:
        directorySidebarItemsMap[navItem]?.[activatedDirectorySidebarItems]
          ?.content,
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
    directoryItemsKeys,
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

const multilingual = {
  en: {
    home: "Home",
    support: `Support`,
  },

  cn: {
    home: "主頁",
    support: `支援`,
  },
};

export const Support: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isPC, language } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;
  const { home, support } = page_text;
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

  const { subTitle, subTitleCN } =
    eventItems.find((item) => item.enum === activeSidebarItems) ?? {};
  const activeSidebarItemsLabel =
    (isEn ? subTitle : subTitleCN) ?? navItemEnum.exhibition_programme;

  const dramaticComponent = returnComponent(
    activeSidebarItems as navItemEnum,
    activatedDirectorySidebarItems
  );
  const { directoryItemsKeys, topBanner, component } = dramaticComponent;

  useEffect(() => {
    if (initialParam !== activeSidebarItems) {
      if (!initialHashIndex) navigate(`?section=${initialParam}`);
      else {
        navigate(`?section=${initialParam}#${initialHashIndex}`);
        setActivatedDirectorySidebarItems(directoryItemsKeys[initialHashIndex]);
      }
      setActiveSidebarItems(initialParam);
    }
  }, [
    activeSidebarItems,
    initialHash,
    initialHashIndex,
    directoryItemsKeys,
    initialParam,
    navigate,
  ]);

  useEffect(() => {
    if (directoryItemsKeys.length !== 0) {
      setActivatedDirectorySidebarItems(
        directoryItemsKeys[initialHashIndex ?? 0]
      );
      window.location.hash = `${initialHashIndex ?? 0}`;
    }
  }, [activeSidebarItems, initialHash, initialHashIndex, directoryItemsKeys]);

  const handleChangeSidebar = (activatedItemEnum: string): void => {
    setActiveSidebarItems(activatedItemEnum as navItemEnum);
    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    navigate(`?section=${activatedItemEnum}`);
  };

  const handleChangeDirectorySidebarItems = (activatedItems: string): void => {
    const hashIndex = directoryItemsKeys.findIndex(
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
    { label: home, href: "/" },
    {
      label: support,
      href: `/support?section=${navItemEnum.exhibition_programme}`, // default to activate the first one
    },
    {
      label: activeSidebarItemsLabel,
      ...(directoryItemsKeys.length === 0
        ? {}
        : {
            href: `/support?section=${activeSidebarItems}#0`,
          }),
    },
    ...(directoryItemsKeys.length === 0
      ? []
      : [
          {
            label:
              (isEn
                ? directorySidebarItemsMap[activeSidebarItems as navItemEnum]?.[
                    activatedDirectorySidebarItems
                  ]?.label
                : directorySidebarItemsMap[activeSidebarItems as navItemEnum]?.[
                    activatedDirectorySidebarItems
                  ]?.labelCN) ?? "",
          },
        ]),
  ];

  const processedDirectoryItemsKeys: DirectorySidebarItems[] =
    directoryItemsKeys.map((k) => ({
      label:
        directorySidebarItemsMap[activeSidebarItems as navItemEnum]?.[k]
          ?.label ?? "",
      labelCN:
        directorySidebarItemsMap[activeSidebarItems as navItemEnum]?.[k]
          ?.labelCN ?? "",
      value: k,
    }));
  const sidebar = (
    <>
      {directoryItemsKeys.length > 0 && (
        <DirectorySidebar
          directorySidebarItems={processedDirectoryItemsKeys}
          activatedItems={activatedDirectorySidebarItems}
          setActivatedItems={handleChangeDirectorySidebarItems}
        />
      )}
      <Sidebar
        title={support}
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
            <div className="px-[24px] min-w-[440px] w-1/3">
              <div className="sticky top-[20px] flex flex-col gap-[24px]">
                {sidebar}
              </div>
            </div>
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
