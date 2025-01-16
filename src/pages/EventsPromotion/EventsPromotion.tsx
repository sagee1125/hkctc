import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AwardScheme, SeminarsWorkshops } from "./EventsLanding";
import { StudentCompetition } from "./EventsLanding/StudentCompetition/StudentCompetition";
import { Newsletter } from "./Publication";
import { BannerPhotoBox, Breadcrumb, MultipleSidebars } from "../../components";
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
  [navItemEnum.hkctc_newsletter]: {
    bannerImage: "eventsLanding/banner_bg.png",
    component: <Newsletter />,
  },
};

const sidebarKeys = [
  // events
  navItemEnum.award_scheme,
  navItemEnum.seminar_workshop,
  navItemEnum.student_competition,
  // publications
  navItemEnum.hkctc_newsletter,
  navItemEnum.pamphlets_booklets,
  navItemEnum.comics,
  navItemEnum.corruption_prevention,
  navItemEnum.useful_information,
];

export const EventsPromotion: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const sidebarActivated = searchParams.get("section") as navItemEnum;
  const initialParam: navItemEnum = sidebarKeys.includes(
    sidebarActivated as navItemEnum
  )
    ? (sidebarActivated as navItemEnum)
    : navItemEnum.award_scheme;

  const [activeItem, setActiveItem] = useState<navItemEnum>(initialParam);

  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Events" },
  ];

  const eventItems: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === "Events & Promotions"
    )?.items.find((subNav: NavItems) => subNav.name === "Events")?.subItems ??
    [];

  const publicationItem: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === "Events & Promotions"
    )?.items.find((subNav: NavItems) => subNav.name === "Publications")
      ?.subItems ?? [];

  const sidebarData = [
    {
      title: "Events",
      sidebarItems: eventItems,
    },
    {
      title: "Publications",
      sidebarItems: publicationItem,
    },
  ];

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

  return (
    <div className="w-full mb-[48px]">
      <BannerPhotoBox src={bannerImage} />
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
  );
};
