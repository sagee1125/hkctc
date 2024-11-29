import React from "react";
import {
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
      <img
        className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        src={`${process.env.PUBLIC_URL}/assets/profileAndRole/banner_bg.png`}
        alt={"banner_bg.png"}
      />
      <Breadcrumb items={breadcrumbItems} />
      <ProfileAndRoleContent eventItems={eventItems} />
    </div>
  );
};
