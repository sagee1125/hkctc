import React from "react";
import { DirectorySidebar } from "../../../../../components";
import { displayBusinessAreas } from "../../ServicesDifferentBusinessAreas";

export type BusinessAreaTitle =
  | (typeof displayBusinessAreas)[number]["title"]
  | (typeof displayBusinessAreas)[number]["titleCN"];

type DifferentBusinessAreasDirectorySidebarProps = {
  businessAreaTitle: BusinessAreaTitle;
};

export const DifferentBusinessAreasDirectorySidebar: React.FC<
  DifferentBusinessAreasDirectorySidebarProps
> = ({ businessAreaTitle }) => {
  const directoryItems = displayBusinessAreas.map((area) => ({
    label: area.title,
    labelCN: area.titleCN,
    value: area.title,
  }));

  const handleNavToAreas = (area: string): void => {
    const targetUrl =
      displayBusinessAreas.find(
        (item) =>
          item.title === (area as BusinessAreaTitle) ||
          item.titleCN === (area as BusinessAreaTitle)
      )?.nav ?? "";
    if (targetUrl) window.open(targetUrl, "_self");
  };

  return (
    <DirectorySidebar
      directorySidebarItems={directoryItems}
      activatedItems={businessAreaTitle}
      setActivatedItems={handleNavToAreas}
    />
  );
};
