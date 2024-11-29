import React from "react";
import {
  BannerPhotoBox,
  Breadcrumb,
  type NavData,
  navData,
  type NavItems,
  type SubItems,
} from "../../components";
import { StudentCompetitionsContent } from "./StudentCompetitionsContent";

export const StudentCompetitions: React.FC = () => {
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
      <BannerPhotoBox src="studentCompetitions/banner_bg.png" />
      <Breadcrumb items={breadcrumbItems} />
      <StudentCompetitionsContent eventItems={eventItems} />
    </div>
  );
};
