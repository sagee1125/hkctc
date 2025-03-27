import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationForm } from "./RegistrationForm";
import { navItemEnum } from "../../../../../const";
import {
  fullContainer,
  maxPCContainer,
  Breadcrumb,
  DirectorySidebar,
  maxMobileContainer,
  type DirectorySidebarItems,
  type BreadcrumbItem,
} from "../../../../../components";
import { useSettings } from "../../../../../context";
const multilingual = {
  en: {
    home: "Home",
    event_promotion: "Events & Promotions",
    events: "Events",
    seminar_workshop: "Seminars and Workshops",
  },
  cn: {
    home: "主頁",
    event_promotion: "活動與宣傳",
    events: "活動",
    seminar_workshop: "研討會與工作坊",
  },
};
export const SeminarsRegistration: React.FC = () => {
  const navigate = useNavigate();
  const initialHash = window.location.hash;
  const initialHashIndex = initialHash
    ? Number(initialHash.substring(0))
    : null; // remove `#`, get index
  const { isPC, getPageText } = useSettings();
  const page_text = getPageText(multilingual);
  const { home, event_promotion, events, seminar_workshop } = page_text;
  const breadcrumbItems = [
    { label: home, href: "/" },
    {
      label: event_promotion as string,
      href: `/events-promotion?section=${navItemEnum.award_scheme}`,
    },
    {
      label: events as string,
      href: `/events-promotion?section=${navItemEnum.award_scheme}`,
    },
    {
      label: seminar_workshop as string,
      href: `/events-promotion?section=${navItemEnum.seminar_workshop}`,
    },
    {
      label: "New Seminar (1)",
    },
  ];

  const [activeItem, setActiveItem] = useState<string>(
    "Register for New Seminars"
  );

  const sidebarItems: DirectorySidebarItems[] = [
    {
      label: "Register for New Seminars",
      value: "Register for New Seminars",
      labelCN: "注冊參加研討會",
    },
  ];
  const sidebarContentMapping: Record<string, React.ReactNode> = {
    "Register for New Seminars": <RegistrationForm />,
  };

  const handleChangeDirectorySidebarItems = (activatedItems: string): void => {
    const hashIndex = sidebarItems.findIndex(
      (item) => item.value === activatedItems
    );
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
      setActiveItem(sidebarItems[initialHashIndex].value);
    }
  }, []);

  const currentComponent = sidebarContentMapping?.[activeItem];
  const sidebar = (
    <DirectorySidebar
      setActivatedItems={handleChangeDirectorySidebarItems}
      directorySidebarItems={sidebarItems}
      activatedItems={activeItem}
    />
  );
  return (
    <div style={fullContainer}>
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems as BreadcrumbItem[]} />
          </div>
        )}
        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px]">
            <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
              {sidebar}
            </div>
            <div className="flex-1">{currentComponent}</div>
          </div>
        ) : (
          <div className="w-full flex flex-col px-[24px]">
            <hr className="mb-[48px]" />
            {sidebar}
            <div className="flex-1">{currentComponent}</div>
          </div>
        )}
      </div>
    </div>
  );
};
