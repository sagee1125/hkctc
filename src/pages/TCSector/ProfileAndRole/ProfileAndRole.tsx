import React from "react";
import { ProfileAndRoleContent } from "./ProfileAndRoleContent";
import { BannerPhotoBox, Breadcrumb } from "../../../components";
import {
  type NavData,
  type NavItems,
  type SubItems,
  NavigationBarConfiguration,
} from "../../../const";

export const ProfileAndRole: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "T&C Sector " },
  ];

  const eventItems: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === "T&C Sector"
    )?.items.find(
      (subNav: NavItems) =>
        subNav.name ===
        "Introducing the Testing and Certificate sector, and what service we can provide"
    )?.subItems ?? [];

  return (
    <div className="w-full">
      <BannerPhotoBox src="profileAndRole/banner_bg.png" />
      <Breadcrumb items={breadcrumbItems} />
      <ProfileAndRoleContent eventItems={eventItems} />
    </div>
  );
};
