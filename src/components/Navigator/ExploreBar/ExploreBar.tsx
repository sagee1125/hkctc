import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

type ExploreBarData = {
  iconName: string;
  title: string;
  hoverColor: string;
  onClick: () => void;
};
const hideExploreBar = [
  "/events-landing",
  "/events-landing/award-scheme",
  "/resources-reports",
];

export const ExploreBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("currentPath", currentPath);
  const isReturnEmpty = hideExploreBar.includes(currentPath);
  if (isReturnEmpty) return <></>;
  const exploreBarData: ExploreBarData[] = [
    {
      title: "General Public",
      iconName: "entypo:globe",
      hoverColor:
        currentPath === "/general-public"
          ? "text-elegancePurple"
          : "group-hover:text-elegancePurple",
      onClick: () => {
        navigate("general-public");
      },
    },
    {
      title: "Educators & Students",
      iconName: "fa-solid:book-reader",
      hoverColor:
        currentPath === "/educators-students"
          ? "text-trustfulBlue"
          : "group-hover:text-trustfulBlue",
      onClick: () => {
        navigate("educators-students");
      },
    },
    {
      title: "T&C Bodies & Practitioners",
      iconName: "majesticons:test-tube-filled",
      hoverColor:
        currentPath === "/industry"
          ? "text-growthfulGreen"
          : "group-hover:text-growthfulGreen",
      onClick: () => {
        navigate("industry");
      },
    },
    {
      title: "T&C Service Users",
      iconName: "mdi:user",
      hoverColor:
        currentPath === "/service-users"
          ? "text-energeticOrange"
          : "group-hover:text-energeticOrange",
      onClick: () => {
        navigate("service-users");
      },
    },
  ];

  return (
    <nav>
      <div className="bg-primary h-[50px] flex flex-row px-[32px] items-center text-white">
        <p className="text-highlight-s">Explore as</p>
        <div className="flex flex-row px-8 gap-8">
          {exploreBarData.map((item, index) => {
            const { iconName, title, hoverColor, onClick } = item;
            return (
              <div
                key={index}
                className="group flex flex-row items-center gap-1 cursor-pointer text-highlight-s"
                onClick={onClick}
              >
                <Icon
                  icon={iconName}
                  width={20}
                  height={20}
                  className={hoverColor}
                />
                <p className={hoverColor}>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
