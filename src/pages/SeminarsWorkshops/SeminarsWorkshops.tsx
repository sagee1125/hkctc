import React from "react";
import { SeminarsWorkshopsContent } from "./SeminarsWorkshopsContent";
import { BannerPhotoBox, Breadcrumb } from "../../components";
import {
  type NavData,
  type NavItems,
  type SubItems,
  NavigationBarConfiguration,
} from "../../const";

export const SeminarsWorkshops: React.FC = () => {
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
      <BannerPhotoBox src="seminarsWorkshops/banner_bg.png" />
      <Breadcrumb items={breadcrumbItems} />
      <SeminarsWorkshopsContent eventItems={eventItems} />
    </div>
  );
};
