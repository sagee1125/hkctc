import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

type ExploreBarData = {
  iconName: string;
  title: string;
  hoverColor: string;
  onClick: () => void;
};
const hideExploreBar = ["/hkctc/events-landing"];

export const ExploreBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const isReturnEmpty = hideExploreBar.includes(currentPath);
  if (isReturnEmpty) return <></>;
  const exploreBarData: ExploreBarData[] = [
    {
      title: "General Public",
      iconName: "entypo:globe",
      hoverColor:
        currentPath === "/hkctc/general-public"
          ? "text-elegancePurple"
          : "group-hover:text-elegancePurple",
      onClick: () => {
        navigate("/hkctc/general-public");
      },
    },
    {
      title: "Educators & Students",
      iconName: "fa-solid:book-reader",
      hoverColor:
        currentPath === "/hkctc/educators-students"
          ? "text-trustfulBlue"
          : "group-hover:text-trustfulBlue",
      onClick: () => {
        navigate("/hkctc/educators-students");
      },
    },
    {
      title: "T&C Bodies & Practitioners",
      iconName: "majesticons:test-tube-filled",
      hoverColor:
        currentPath === "/hkctc/industry"
          ? "text-growthfulGreen"
          : "group-hover:text-growthfulGreen",
      onClick: () => {
        navigate("/hkctc/industry");
      },
    },
    {
      title: "T&C Service Users",
      iconName: "mdi:user",
      hoverColor:
        currentPath === "/hkctc/service-users"
          ? "text-energeticOrange"
          : "group-hover:text-energeticOrange",
      onClick: () => {
        navigate("/hkctc/service-users");
      },
    },
  ];

  return (
    <nav>
      <div className="bg-primary h-[50px] flex flex-row px-[32px] items-center text-white">
        <p className="font-bold text-md">Explore as</p>
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
