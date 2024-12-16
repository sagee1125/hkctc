import React from "react";
import { BannerPhotoBox, Breadcrumb } from "../../components";
import { StudentCompetitionsContent } from "./StudentCompetitionsContent";
import {
  NavigationBarConfiguration,
  type NavData,
  type NavItems,
  type SubItems,
} from "../../const";

export const StudentCompetitions: React.FC = () => {
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
      <BannerPhotoBox src="studentCompetitions/banner_bg.png" />
      <Breadcrumb items={breadcrumbItems} />
      <StudentCompetitionsContent eventItems={eventItems} />
    </div>
  );
};
