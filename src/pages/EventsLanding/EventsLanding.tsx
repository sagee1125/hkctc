import React from "react";
import {
  BannerPhotoBox,
  Breadcrumb,
  type NavData,
  navData,
  type NavItems,
  type SubItems,
} from "../../components";
import { EventsLandingContent } from "./EventsLandingContent";

export const EventsLanding: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Events " },
  ];

  const eventItems: SubItems[] =
    navData
      .find((nav: NavData) => nav.title === "Events & Promotions")
      ?.items.find((subNav: NavItems) => subNav.name === "Events")?.subItems ??
    [];

  return (
    <div className="w-full">
      <BannerPhotoBox src="eventsLanding/banner_bg.png" />
      <Breadcrumb items={breadcrumbItems} />
      <EventsLandingContent eventItems={eventItems} />
    </div>
  );
};
