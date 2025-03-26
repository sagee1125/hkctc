import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { exploreOption } from "../Navigator";
import { Language, useSettings } from "../../../context";

type ExploreBarData = {
  iconName: string;
  title: string;
  titleCN: string;
  hoverColor: string;
  onClick: () => void;
};

type ExploreBarProps = {
  isMobileView: boolean;
  isHidePCExploreBar: boolean;
};

export const getCurrentTitle = (currentPath: string): string | null => {
  const findTitle = exploreOption.find(
    (op) => "/" + op.nav === currentPath
  )?.title;
  return !findTitle ? null : findTitle;
};
export const ExploreBar: React.FC<ExploreBarProps> = ({
  isMobileView,
  isHidePCExploreBar,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useSettings();
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
      titleCN: "公眾人士",
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
      titleCN: "老師與學生",
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
      titleCN: "檢測認證服務使用者",
      iconName: "mdi:user",
      hoverColor:
        currentPath === "/service-users"
          ? "text-energeticOrange"
          : `group-hover:text-energeticOrange ${
              isClicked ? "text-[#7C7F83]" : ""
            }`,
      onClick: () => {
        navigate("service-users");
      },
    },
    {
      title: "T&C Bodies & Practitioners",
      titleCN: "檢測認證機構及從業員",
      iconName: "majesticons:test-tube-filled",
      hoverColor:
        currentPath === "/industry"
          ? "text-growthfulGreen"
          : `group-hover:text-growthfulGreen ${
              isClicked ? "text-[#7C7F83]" : ""
            }`,
      onClick: () => {
        navigate("industry");
      },
    },
  ];

  if (!isMobileView && isHidePCExploreBar) return <></>;

  return (
    <nav>
      {isMobileView ? (
        <></>
      ) : (
        <div className="bg-newPrimary h-[50px] flex flex-row px-[32px] items-center text-white">
          <p className="text-highlight-s"></p>
          <img
            className="w-[12px] h-[12px] ml-[8px] mr-[16px]"
            src={process.env.PUBLIC_URL + "/assets/icons/arrow_right.svg"}
            alt="arrow_right"
          />
          <div className="flex flex-row gap-[24px]">
            {exploreBarData.map((item, index) => {
              const { iconName, title, titleCN, hoverColor, onClick } = item;
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
                  <p className={hoverColor}>
                    {language === Language.EN ? title : titleCN}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
