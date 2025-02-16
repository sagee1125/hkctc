import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationForm } from "./RegistrationForm";
import { navItemEnum } from "../../../../../const";
import {
  fullContainer,
  maxPCContainer,
  Breadcrumb,
  DirectorySidebar,
} from "../../../../../components";

export const SeminarsRegistration: React.FC = () => {
  const navigate = useNavigate();
  const initialHash = window.location.hash;
  const initialHashIndex = initialHash
    ? Number(initialHash.substring(0))
    : null; // remove `#`, get index

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: "Events & Promotions",
      href: `/events-promotion?section=${navItemEnum.award_scheme}`,
    },
    {
      label: "Events",
      href: `/events-promotion?section=${navItemEnum.award_scheme}`,
    },
    {
      label: "Seminars and Workshops",
      href: `/events-promotion?section=${navItemEnum.seminar_workshop}`,
    },
    {
      label: "New Seminar (1)",
    },
  ];

  const [activeItem, setActiveItem] = useState<string>(
    "Register for New Seminars"
  );

  const sidebarItems: string[] = ["Register for New Seminars"];
  const sidebarContentMapping: Record<string, React.ReactNode> = {
    "Register for New Seminars": <RegistrationForm />,
  };

  const handleChangeDirectorySidebarItems = (activatedItems: string): void => {
    const hashIndex = sidebarItems.findIndex((item) => item === activatedItems);
    setActiveItem(activatedItems);

    window.location.hash = `${hashIndex}`;

    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!initialHashIndex) navigate(`/events-promotion/seminars-registration`);
    else {
      navigate(`/support/agreement-clause#${initialHashIndex}`);
      setActiveItem(sidebarItems[initialHashIndex]);
    }
  }, []);

  const currentComponent = sidebarContentMapping?.[activeItem];

  return (
    <div style={fullContainer}>
      <div style={maxPCContainer}>
        <div id="breadcrumb">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="w-full flex flex-row pt-[48px] pr-[24px]">
          <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
            <DirectorySidebar
              setActivatedItems={handleChangeDirectorySidebarItems}
              directorySidebarItems={sidebarItems}
              activatedItems={activeItem}
            />
          </div>
          <div className="flex-1">{currentComponent}</div>
        </div>
      </div>
    </div>
  );
};
