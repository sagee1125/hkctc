import React from "react";
import {
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
      <img
        className="border-2 border-inherit w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        src={`${process.env.PUBLIC_URL}/assets/eventsLanding/banner_bg.png`}
        alt={"banner_bg.png"}
      />
      <Breadcrumb items={breadcrumbItems} />
      <EventsLandingContent eventItems={eventItems} />
    </div>
  );
};
