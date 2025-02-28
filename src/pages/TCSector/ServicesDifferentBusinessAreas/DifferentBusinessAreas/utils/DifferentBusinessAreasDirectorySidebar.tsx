import React from "react";
import { useNavigate } from "react-router-dom";
import { DirectorySidebar } from "../../../../../components";
import { displayBusinessAreas } from "../../ServicesDifferentBusinessAreas";

export type BusinessAreaTitle = (typeof displayBusinessAreas)[number]["title"];

type DifferentBusinessAreasDirectorySidebarProps = {
  businessAreaTitle: BusinessAreaTitle;
};

export const DifferentBusinessAreasDirectorySidebar: React.FC<
  DifferentBusinessAreasDirectorySidebarProps
> = ({ businessAreaTitle }) => {
  const directoryItems = displayBusinessAreas.map((area) => area.title);
  const navigate = useNavigate();

  const handleNavToAreas = (area: string): void => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    const targetUrl =
      displayBusinessAreas.find(
        (item) => item.title === (area as BusinessAreaTitle)
      )?.nav ?? "";
    if (targetUrl) navigate(targetUrl);
  };

  return (
    <DirectorySidebar
      directorySidebarItems={directoryItems}
      activatedItems={businessAreaTitle}
      setActivatedItems={handleNavToAreas}
    />
  );
};
