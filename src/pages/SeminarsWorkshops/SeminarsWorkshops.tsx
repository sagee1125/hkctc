import React from "react";
import {
  Breadcrumb,
  type NavData,
  navData,
  type NavItems,
  type SubItems,
} from "../../components";
import { SeminarsWorkshopsContent } from "./SeminarsWorkshopsContent";

export const SeminarsWorkshops: React.FC = () => {
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
        className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        src={`${process.env.PUBLIC_URL}/assets/seminarsWorkshops/banner_bg.png`}
        alt={"banner_bg.png"}
      />
      <Breadcrumb items={breadcrumbItems} />
      <SeminarsWorkshopsContent eventItems={eventItems} />
    </div>
  );
};
