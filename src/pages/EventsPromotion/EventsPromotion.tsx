import React, { useState } from "react";
import { AwardScheme } from "./EventsLanding";
import { Newsletter } from "./Publication";
import { BannerPhotoBox, Breadcrumb, MultipleSidebars } from "../../components";
import {
  type NavData,
  type NavItems,
  type SubItems,
  NavigationBarConfiguration,
  navItemEnum,
} from "../../const";

const sidebarComponent: Partial<Record<navItemEnum, React.ReactNode>> = {
  [navItemEnum.award_scheme]: <AwardScheme />,

  [navItemEnum.hkctc_newsletter]: <Newsletter />,
};

export const EventsPromotion: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Events" },
  ];

  const [activeItem, setActiveItem] = useState<navItemEnum>(
    navItemEnum.other_support
  );
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
  };

  const component = sidebarComponent[activeItem];
  return (
    <div className="w-full mb-[48px]">
      <BannerPhotoBox src="eventsLanding/banner_bg.png" />
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
