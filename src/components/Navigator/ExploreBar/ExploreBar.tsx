import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

type ExploreBarData = {
  iconName: string;
  title: string;
  hoverColor: string;
  onClick: () => void;
};

export const ExploreBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const paths: string[] = [
    "/general-public",
    "/educators-students",
    "/industry",
    "/service-users",
  ];
  const isClicked = paths.includes(currentPath);
  const exploreBarData: ExploreBarData[] = [
    {
      title: "General Public",
      iconName: "entypo:globe",
      hoverColor:
        currentPath === "/general-public"
          ? "text-elegancePurple"
          : `group-hover:text-elegancePurple ${
              isClicked ? "text-[#7C7F83]" : ""
            }`,
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
          : `group-hover:text-trustfulBlue ${
              isClicked ? "text-[#7C7F83]" : ""
            }`,
      onClick: () => {
        navigate("educators-students");
      },
    },
    {
      title: "T&C Service Users",
      iconName: "mdi:user",
      hoverColor:
        currentPath === "/service-users"
          ? "text-growthfulGreen"
          : `group-hover:text-growthfulGreen ${
              isClicked ? "text-[#7C7F83]" : ""
            }`,
      onClick: () => {
        navigate("service-users");
      },
    },
    {
      title: "T&C Bodies & Practitioners",
      iconName: "majesticons:test-tube-filled",
      hoverColor:
        currentPath === "/industry"
          ? "text-energeticOrange"
          : `group-hover:text-energeticOrange ${
              isClicked ? "text-[#7C7F83]" : ""
            }`,
      onClick: () => {
        navigate("industry");
      },
    },
  ];

  return (
    <nav>
      <div className="bg-newPrimary h-[50px] flex flex-row px-[32px] items-center text-white">
        <p className="text-highlight-s">Explore as</p>
        <img
          className="w-[12px] h-[12px] ml-[8px] mr-[16px]"
          src={process.env.PUBLIC_URL + "/assets/icons/arrow_right.svg"}
          alt="arrow_right"
        />
        <div className="flex flex-row gap-[24px]">
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
