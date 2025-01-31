import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AwardScheme, SeminarsWorkshops } from "./EventsLanding";
import { StudentCompetition } from "./EventsLanding/StudentCompetition/StudentCompetition";
import { Newsletter } from "./Publication/Newspaper/Newsletter";
import { Pamphlets } from "./Publication/Pamphlets/Pamphlets";
import { PressReleases } from "./News/PressReleases/PressReleases";
import { Comics } from "./Publication/Comics/Comics";
import { HKCTCReports } from "./Reports/HKCTCReports";
import { LegislativeCouncil } from "./Reports/LegislativeCouncil";
import {
  BannerPhotoBox,
  Breadcrumb,
  MultipleSidebars,
  fullContainer,
  maxContainer,
} from "../../components";
import {
  type NavData,
  type NavItems,
  type SubItems,
  NavigationBarConfiguration,
  navItemEnum,
} from "../../const";

const sidebarComponent: Partial<
  Record<
    navItemEnum,
    {
      bannerImage: string;
      component: React.ReactNode;
    }
  >
> = {
  // events
  [navItemEnum.award_scheme]: {
    bannerImage: "eventsLanding/banner_bg.png",
    component: <AwardScheme />,
  },
  [navItemEnum.seminar_workshop]: {
    bannerImage: "eventsLanding/banner_bg_2.png",
    component: <SeminarsWorkshops />,
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
    component: <></>,
  },
  [navItemEnum.useful_information]: {
    bannerImage: "",
    component: <></>,
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
};

const sidebarKeys = Object.keys(
  sidebarComponent
) as (keyof typeof sidebarComponent)[];

export const EventsPromotion: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const initialSection = queryParams.get("section") ?? "";

  const initialParam: navItemEnum = sidebarKeys.includes(
    initialSection as navItemEnum
  )
    ? (initialSection as navItemEnum)
    : navItemEnum.award_scheme;

  const [activeItem, setActiveItem] = useState<navItemEnum>(initialParam);

  useEffect(() => {
    if (initialParam !== activeItem) {
      navigate(`?section=${initialParam}`);

      setActiveItem(initialParam);
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

  const activeSidebarItemsLabel = sidebarData
    .map((section) =>
      section.sidebarItems.find((item) => item.enum === activeItem)
    )
    .find((matchedItem) => matchedItem !== undefined)?.subTitle;

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
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Events",
      href: `/events-promotion?section=${navItemEnum.award_scheme}`,
    },
    {
      label: activeSidebarItemsLabel ?? "",
    },
  ];
  return (
    <div style={fullContainer}>
      {bannerImage && <BannerPhotoBox src={bannerImage} />}
      <div style={maxContainer}>
        <div id="breadcrumb">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="w-full flex flex-row pt-[48px] pr-[24px]">
          <div className="px-[24px] min-w-[440px] w-1/3">
            <MultipleSidebars
              sidebars={sidebarData}
              activatedItems={activeItem}
              setActivatedItems={handleChangeSidebar}
            />
          </div>
          <div className="flex-1">{component}</div>
        </div>
      </div>
    </div>
  );
};
