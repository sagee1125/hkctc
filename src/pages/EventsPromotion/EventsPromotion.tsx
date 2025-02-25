import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AwardScheme, SeminarsWorkshops } from "./EventsLanding";
import { seminarsAndWorkshopsList } from "./EventsLanding/SeminarsWorkshops/SeminarArticlePage/seminarArticles";
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
  Link,
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
import { SeminarArticlePage } from "./EventsLanding/SeminarsWorkshops/SeminarArticlePage/SeminarArticlePage";
import { useSettings } from "../../context";

export const EventsPromotion: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const { isPC } = useSettings();

  const seminarArticleIndex = Number(window.location.hash.replace("#", ""));
  const seminarArticleTitle =
    seminarsAndWorkshopsList[seminarArticleIndex].title;

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
      component: <AwardScheme />,
    },
    [navItemEnum.seminar_workshop]: {
      bannerImage: "eventsLanding/banner_bg_2.png",
      component: <SeminarsWorkshops />,
      subComponent: (
        <div className="flex flex-row w-full border-2 border-[#E0E0E0]">
          <div className="w-[60%] h-[134px] p-[20px] flex flex-row justify-center items-center">
            <img
              width={"71px"}
              height={"68px"}
              src={process.env.PUBLIC_URL + `/assets/icons/registration.png`}
              alt="registration"
            />
          </div>
          <div className="bg-[#203136] text-[#FFF] px-[19px] py-[15.5px]">
            <p>
              Seminar on Environmental, Social and Governance (ESG) and
              Sustainability
            </p>
            <Link
              linkColor="#FFF"
              innerLink="/events-promotion/seminars-registration"
            >
              Register Now
            </Link>
          </div>
        </div>
      ),
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
          label: "Seminars and Workshops",
          href: `/events-promotion?section=${navItemEnum.seminar_workshop}`,
        },
        {
          label: seminarArticleTitle,
        },
      ],
    },
  };

  const sidebarKeys = Object.keys(
    sidebarComponent
  ) as (keyof typeof sidebarComponent)[];

  const initialSection = queryParams.get("section") ?? "";

  const initialParam: navItemEnum = sidebarKeys.includes(
    initialSection as navItemEnum
  )
    ? (initialSection as navItemEnum)
    : navItemEnum.award_scheme;

  const [activeItem, setActiveItem] = useState<navItemEnum>(initialParam);

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
      sidebarItems: eventItems,
    },
    {
      title: "Publications",
      sidebarItems: publicationItem,
    },
    {
      title: "Reports",
      sidebarItems: reports,
    },
    {
      title: "News & Videos",
      sidebarItems: NewsVideos,
    },
  ];

  const activeSidebarItemsLabel = sidebarData.filter((section) =>
    section.sidebarItems.find((item) => item.enum === activeItem)
  )?.[0].title;
  const firstActiveItem = sidebarData
    .map((section) =>
      section.sidebarItems.find((item) => item.enum === activeItem)
    )
    .find((matchedItem) => matchedItem !== undefined);

  const firstActiveItemEnum = firstActiveItem?.enum;
  const activeSidebarItemsSubLabel = firstActiveItem?.subTitle;

  const handleChangeSidebar = (item: string) => {
    setActiveItem(item as navItemEnum);
    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    navigate(`?section=${item}`);
  };

  const component = sidebarComponent[activeItem]?.component;
  const bannerImage = sidebarComponent[activeItem]?.bannerImage ?? "";
  const subComponent = sidebarComponent[activeItem]?.subComponent;
  const otherPath = sidebarComponent[activeItem]?.path ?? []; // only used for seminars
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Events & Promotions",
      href: `/events-promotion`,
    },
    {
      label: activeSidebarItemsLabel,
      href: `/events-promotion?section=${firstActiveItemEnum}`,
    },
    ...(otherPath.length > 0
      ? otherPath
      : [
          {
            label: activeSidebarItemsSubLabel ?? "",
          },
        ]),
  ];

  const multipleSidebars = (
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
              {subComponent && <div className="mb-[24px]">{subComponent}</div>}
              {multipleSidebars}
            </div>
            <div className="flex-1 pr-[24px]">{component}</div>
          </div>
        ) : (
          <div className="p-[24px] flex flex-col gap-[24px]">
            <div>{multipleSidebars}</div>
            <div>{component}</div>
          </div>
        )}
      </div>
    </div>
  );
};
