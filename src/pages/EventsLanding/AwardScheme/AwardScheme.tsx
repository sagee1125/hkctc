import React from "react";
import { Breadcrumb } from "../../../components";
import { AwardSchemeContent } from "./AwardSchemeContent";

export const AwardScheme: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/hkctc" },
    { label: "Events", href: "/hkctc#/events-landing" },
    { label: "T&C Manpower Development Award Scheme 2023-2024" },
  ];

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
