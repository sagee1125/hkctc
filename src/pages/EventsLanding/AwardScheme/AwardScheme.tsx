import React from "react";
import {
  Breadcrumb,
  type NavData,
  navData,
  type NavItems,
  type SubItems,
} from "../../../components";
import { AwardSchemeContent } from "./AwardSchemeContent";
// import { EventsLandingContent } from "./EventsLandingContent";

export const AwardScheme: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Events", href: "/events-landing" },
    { label: "T&C Manpower Development Award Scheme 2023-2024" },
  ];

  const eventItems: SubItems[] =
    navData
      .find((nav: NavData) => nav.title === "Events & Promotions")
      ?.items.find((subNav: NavItems) => subNav.name === "Events")?.subItems ??
    [];

  return (
    <div className="w-full">
      <img
        className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        src={`${process.env.PUBLIC_URL}/assets/eventsLanding/awardScheme/banner_bg.png`}
        alt={"banner_bg.png"}
      />
      <Breadcrumb items={breadcrumbItems} />
      <AwardSchemeContent />
    </div>
  );
};
