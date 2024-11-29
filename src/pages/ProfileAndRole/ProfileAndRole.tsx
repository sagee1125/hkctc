import React from "react";
import {
  BannerPhotoBox,
  Breadcrumb,
  type NavData,
  navData,
  type NavItems,
  type SubItems,
} from "../../components";
import { ProfileAndRoleContent } from "./ProfileAndRoleContent";

export const ProfileAndRole: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "T&C Sector " },
  ];

  const eventItems: SubItems[] =
    navData
      .find((nav: NavData) => nav.title === "T&C Sector")
      ?.items.find(
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
