import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AwardScheme, SeminarsWorkshops } from "./EventsLanding";
import {
  seminarsAndWorkshopsList,
  seminarsAndWorkshopsList_CN,
} from "./EventsLanding/SeminarsWorkshops/SeminarArticlePage/seminarArticles";
import { StudentCompetition } from "./EventsLanding/StudentCompetition/StudentCompetition";
import { PressReleases } from "./News";
import { Advertorials } from "./News/Advertorials/Advertorials";
import { HKCTCReports } from "./Reports/HKCTCReports";
import { LegislativeCouncil } from "./Reports/LegislativeCouncil";
import {
  CorruptionGuide,
  OtherInformation,
  Comics,
  Pamphlets,
  Newsletter,
} from "./Publication";
import {
  BannerPhotoBox,
  Breadcrumb,
  DirectorySidebar,
  DirectorySidebarItems,
  MultipleSidebars,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import {
  type NavData,
  type NavItems,
  type SubItems,
  NavigationBarConfiguration,
  navItemEnum,
} from "../../const";
import { Videos } from "./News/Videos";
import { RegistrationBox } from "./EventsLanding/SeminarsWorkshops/RegistrationBox";
import { AwardScheme21to22Preview } from "./EventsLanding/AwardScheme/AwardScheme21to22Preview";
import { SeminarArticlePage } from "./EventsLanding/SeminarsWorkshops/SeminarArticlePage/SeminarArticlePage";
import { Language, useSettings } from "../../context";
import { AssessmentPanel2122 } from "./EventsLanding/AwardScheme/AssessmentPanel2122";
import { MediaCoverage2324 } from "./EventsLanding/AwardScheme/MediaCoverage2324";

const directoryItems: DirectorySidebarItems[] = [
  {
    label: "T&C Manpower Development Award Scheme 2023-2024",
    labelCN: `2023-24年度檢測認證人力發展嘉許計劃`,
    value: "2324",
  },
  {
    label: "T&C Manpower Development Award Scheme 2021-2022",
    labelCN: "2021-22年度檢測認證人力發展嘉許計劃",
    value: "2122",
  },
];

const multilingual = {
  en: {
    home: "Home",
    event_promotion: "Events & Promotions",
    seminar_workshop: "Seminars and Workshops",
    events: "Events",
    media_coverage: "Media Coverage",
  },
  cn: {
    home: "主頁",
    event_promotion: "活動與宣傳",
    seminar_workshop: "研討會與工作坊",
    events: "活動",
    media_coverage: "媒體報道",
  },
};

const validSideBarKeys: navItemEnum[] = [
  navItemEnum.award_scheme,
  navItemEnum.seminar_workshop,
  navItemEnum.student_competition,
  navItemEnum.hkctc_newsletter,
  navItemEnum.pamphlets_booklets,
  navItemEnum.comics,
  navItemEnum.corruption_prevention,
  navItemEnum.useful_information,
  navItemEnum.hkctc_reports,
  navItemEnum.council_papers,
  navItemEnum.press_releases,
  navItemEnum.advertorials,
  navItemEnum.videos,
  navItemEnum.seminar_article,
];

const getYear = (param: string): "2122" | "2324" | undefined => {
  switch (param) {
    case "2122":
    case "2324":
      return param;
    default:
      return undefined;
  }
};
export const EventsPromotion: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const { isPC, getPageText, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);
  const { home, event_promotion, seminar_workshop, events, media_coverage } =
    page_text;

  const initialSection = queryParams.get("section") ?? "";

  const initialParam: navItemEnum = validSideBarKeys.includes(
    initialSection as navItemEnum
  )
    ? (initialSection as navItemEnum)
    : navItemEnum.award_scheme;

  const [activeItem, setActiveItem] = useState<navItemEnum>(initialParam);

  const onYear = queryParams.get("year") ?? "";

  // 23-24 media coverage
  // 21-22 assessment panel
  const onDetail =
    !!onYear &&
    queryParams.get("on_detail") === "1" &&
    activeItem === navItemEnum.award_scheme;

  const [activatedDirectorySidebarItems, setActivatedDirectorySidebarItems] =
    useState<string>(getYear(onYear) ?? "2324");

  // const [onYearDetail, setOnYearDetail] =
  //   useState<boolean>(onDetail);

  useEffect(() => {
    const hashValue = window.location.hash.replace("#", "");
    if (initialParam !== activeItem) {
      setActiveItem(initialParam);
      if (hashValue) {
        navigate(`?section=${initialParam}#${hashValue}`);
      } else {
        navigate(`?section=${initialParam}`);
      }
    }
  }, [initialParam, activeItem, navigate]);

  const seminarArticleIndex = Number(window.location.hash.replace("#", ""));
  const seminarArticleTitle = getSingleText(
    seminarsAndWorkshopsList[seminarArticleIndex]?.title,
    seminarsAndWorkshopsList_CN[seminarArticleIndex]?.title
  );

  const handleChangeDirectorySidebarItems = (activatedItems: string): void => {
    setActivatedDirectorySidebarItems(activatedItems);
    navigate(`?section=${initialParam}&year=${activatedItems}`);

    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleOpenAssessmentPanel = (): void => {
    navigate(`?section=${navItemEnum.award_scheme}&year=2122&on_detail=1`);
    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const profileAndRoleRec: Record<
    string,
    { main: React.ReactNode; detail: React.ReactNode }
  > = {
    "2324": { main: <AwardScheme />, detail: <MediaCoverage2324 /> },
    "2122": {
      main: (
        <AwardScheme21to22Preview
          handleOpenAssessmentPanel={handleOpenAssessmentPanel}
        />
      ),
      detail: <AssessmentPanel2122 />,
    },
  };

  const sidebarComponent: Partial<
    Record<
      navItemEnum,
      {
        bannerImage: string;
        component: React.ReactNode;
        subComponent?: React.ReactNode;
        path?: any[];
      }
    >
  > = {
    // events
    [navItemEnum.award_scheme]: {
      bannerImage: "eventsLanding/banner_bg_1.png",
      component: profileAndRoleRec[activatedDirectorySidebarItems].main,
      subComponent: (
        <DirectorySidebar
          directorySidebarItems={directoryItems}
          activatedItems={activatedDirectorySidebarItems}
          setActivatedItems={handleChangeDirectorySidebarItems}
        />
      ),
    },
    [navItemEnum.seminar_workshop]: {
      bannerImage: "eventsLanding/banner_bg_2.png",
      component: <SeminarsWorkshops />,
      subComponent: isPC && <RegistrationBox />,
    },
    [navItemEnum.student_competition]: {
      bannerImage: "eventsLanding/banner_bg_3.png",
      component: <StudentCompetition />,
    },

    // publications
    [navItemEnum.hkctc_newsletter]: {
      bannerImage: "",
      component: <Newsletter />,
    },
    [navItemEnum.pamphlets_booklets]: {
      bannerImage: "",
      component: <Pamphlets />,
    },
    [navItemEnum.comics]: {
      bannerImage: "",
      component: <Comics />,
    },
    [navItemEnum.corruption_prevention]: {
      bannerImage: "",
      component: <CorruptionGuide />,
    },
    [navItemEnum.useful_information]: {
      bannerImage: "",
      component: <OtherInformation />,
    },

    // reports
    [navItemEnum.hkctc_reports]: {
      bannerImage: "",
      component: <HKCTCReports />,
    },
    [navItemEnum.council_papers]: {
      bannerImage: "",
      component: <LegislativeCouncil />,
    },

    // news
    [navItemEnum.press_releases]: {
      bannerImage: "",
      component: <PressReleases />,
    },
    [navItemEnum.advertorials]: {
      bannerImage: "",
      component: <Advertorials />,
    },
    [navItemEnum.videos]: {
      bannerImage: "",
      component: <Videos />,
    },

    // display seminar articles
    [navItemEnum.seminar_article]: {
      bannerImage: "",
      component: <SeminarArticlePage />,
      path: [
        {
          label: events,
          href: `/events-promotion?section=${navItemEnum.tc_sector_strengths}`,
        },
        {
          label: seminar_workshop,
          href: `/events-promotion?section=${navItemEnum.seminar_workshop}`,
        },
        {
          label: seminarArticleTitle,
        },
      ],
    },
  };

  const eventItems: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === "Events & Promotions"
    )
      ?.items.find((subNav: NavItems) => subNav.name === "Events")
      ?.subItems?.filter((item) => item.enum) ?? [];

  const publicationItem: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === "Events & Promotions"
    )
      ?.items.find((subNav: NavItems) => subNav.name === "Publications")
      ?.subItems?.filter((item) => item.enum) ?? [];

  const reports: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === "Events & Promotions"
    )
      ?.items.find((subNav: NavItems) => subNav.name === "Reports")
      ?.subItems?.filter((item) => item.enum) ?? [];

  const NewsVideos: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === "Events & Promotions"
    )
      ?.items.find((subNav: NavItems) => subNav.name === "News & Videos")
      ?.subItems?.filter((item) => item.enum) ?? [];

  const sidebarData = [
    {
      title: "Events",
      titleCN: "活動",
      sidebarItems: eventItems,
    },
    {
      title: "Publications",
      titleCN: "刊物",
      sidebarItems: publicationItem,
    },
    {
      title: "Reports",
      titleCN: "報告",
      sidebarItems: reports,
    },
    {
      title: "News & Videos",
      titleCN: "新聞和短片",
      sidebarItems: NewsVideos,
    },
  ];
  const findActiveSidebarItems = sidebarData.filter((section) => {
    return section.sidebarItems.find((item) => item.enum === activeItem);
  })?.[0];
  const activeSidebarItemsLabel = getSingleText(
    findActiveSidebarItems?.title ?? "",
    findActiveSidebarItems?.titleCN ?? ""
  );

  const firstActiveItem = sidebarData
    .map((section) =>
      section.sidebarItems.find((item) => item.enum === activeItem)
    )
    .find((matchedItem) => matchedItem !== undefined);

  const firstActiveItemEnum = firstActiveItem?.enum;
  const activeSidebarItemsSubLabel = getSingleText(
    firstActiveItem?.subTitle ?? " ",
    firstActiveItem?.subTitleCN ?? ""
  );

  const handleChangeSidebar = (item: string) => {
    setActiveItem(item as navItemEnum);
    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    navigate(`?section=${item}`);
  };

  const component = onDetail
    ? profileAndRoleRec[activatedDirectorySidebarItems].detail
    : sidebarComponent[activeItem]?.component;

  const bannerImage = sidebarComponent[activeItem]?.bannerImage ?? "";
  const subComponent = sidebarComponent[activeItem]?.subComponent;
  const otherPath = sidebarComponent[activeItem]?.path ?? []; // only used for seminars
  const breadcrumbItems = [
    { label: home, href: "/" },
    {
      label: event_promotion,
      href: `/events-promotion`,
    },

    ...(otherPath.length > 0
      ? otherPath
      : [
          {
            label: activeSidebarItemsLabel,
            href: `/events-promotion?section=${firstActiveItemEnum}`,
          },
          {
            label: activeSidebarItemsSubLabel ?? "",
            href:
              activeItem === navItemEnum.award_scheme
                ? `/events-promotion?section=${navItemEnum.award_scheme}`
                : undefined,
          },
        ]),
    ...(activeItem === navItemEnum.award_scheme
      ? [
          {
            label: getSingleText(
              directoryItems.find(
                (i) => i.value === activatedDirectorySidebarItems
              )?.label ?? "",
              directoryItems.find(
                (i) => i.value === activatedDirectorySidebarItems
              )?.labelCN ?? ""
            ),
            href:
              onDetail && activatedDirectorySidebarItems === "2324"
                ? `/events-promotion?section=${navItemEnum.award_scheme}`
                : undefined,
          },
          ...(onDetail && activatedDirectorySidebarItems === "2324"
            ? [{ label: media_coverage }]
            : []),
        ]
      : []),
  ];

  const multipleSidebars = !onDetail && (
    <MultipleSidebars
      sidebars={sidebarData}
      activatedItems={activeItem}
      setActivatedItems={handleChangeSidebar}
    />
  );
  return (
    <div style={fullContainer}>
      {bannerImage && <BannerPhotoBox src={bannerImage} />}
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}

        {isPC ? (
          <div className="w-full flex flex-row pt-[48px]">
            <div className="px-[24px] min-w-[440px] w-1/3">
              <div className="sticky top-[20px]">
                {subComponent && (
                  <div className="mb-[24px]">{subComponent}</div>
                )}
                {multipleSidebars}
              </div>
            </div>
            <div className="flex-1 pr-[24px]">{component}</div>
          </div>
        ) : (
          <div className="p-[24px] flex flex-col gap-[24px]">
            {subComponent && <div className="mb-[24px]">{subComponent}</div>}
            <div>{multipleSidebars}</div>
            <div>{component}</div>
          </div>
        )}
      </div>
    </div>
  );
};
