import React from "react";
import { BannerPhotoBox, Breadcrumb } from "../../components";
import { EventsLandingContent } from "./EventsLandingContent";
import {
  type NavData,
  type NavItems,
  type SubItems,
  NavigationBarConfiguration,
} from "../../const";

export const EventsLanding: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Events " },
  ];

  const eventItems: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === "Events & Promotions"
    )?.items.find((subNav: NavItems) => subNav.name === "Events")?.subItems ??
    [];

  return (
    <div className="w-full">
      <BannerPhotoBox src="eventsLanding/banner_bg.png" />
      <Breadcrumb items={breadcrumbItems} />
      <EventsLandingContent eventItems={eventItems} />
    </div>
  );
};
