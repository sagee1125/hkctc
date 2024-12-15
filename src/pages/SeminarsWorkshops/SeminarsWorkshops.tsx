import React from "react";
import {
  BannerPhotoBox,
  Breadcrumb,
  type NavData,
  type NavItems,
  type SubItems,
} from "../../components";
import { SeminarsWorkshopsContent } from "./SeminarsWorkshopsContent";
import { navData } from "../../const/const";

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
      <BannerPhotoBox src="seminarsWorkshops/banner_bg.png" />
      <Breadcrumb items={breadcrumbItems} />
      <SeminarsWorkshopsContent eventItems={eventItems} />
    </div>
  );
};
