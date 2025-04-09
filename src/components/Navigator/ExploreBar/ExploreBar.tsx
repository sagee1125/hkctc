import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { exploreOption } from "../Navigator";
import { Language, useSettings } from "../../../context";
import { t2s } from "chinese-s2t";
import { maxMobileContainer, maxPCContainer } from "../../Container";

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

const multilingual = {
  en: {
    explore_as: "Explore as",
  },
  cn: {
    explore_as: "探索為",
  },
};

export const ExploreBar: React.FC<ExploreBarProps> = ({
  isMobileView,
  isHidePCExploreBar,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, getPageText, isPC } = useSettings();
  const page_text = getPageText(multilingual);

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

  const { explore_as } = page_text;
  return (
    <nav>
      {isMobileView ? (
        <></>
      ) : (
        <div className="bg-newPrimary h-[50px] flex flex-row px-[32px] items-center justify-center text-white">
          <div
            className="flex flex-row px-[32px] items-center text-white"
            style={isPC ? maxPCContainer : maxMobileContainer}
          >
            <p className="text-highlight-s">{explore_as as string}</p>
            <svg
              role="none"
              xmlns="https://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="ml-[8px] mr-[16px]"
              aria-label="icon"
            >
              <path
                d="M3.94336 1L8.94336 6L3.94336 11L3.05586 10.1125L7.16836 6L3.05586 1.8875L3.94336 1Z"
                fill="white"
              />
            </svg>
            <div className="flex flex-row gap-[24px]">
              {exploreBarData.map((item, index) => {
                const { iconName, title, titleCN, hoverColor, onClick } = item;
                return (
                  <div
                    key={index}
                    className="group flex flex-row items-center gap-1 cursor-pointer text-highlight-s"
                    onClick={onClick}
                    tabIndex={0}
                    role="button"
                  >
                    <Icon
                      tabIndex={0}
                      icon={iconName}
                      width={20}
                      aria-label={iconName}
                      height={20}
                      className={hoverColor}
                    />
                    <p className={hoverColor}>
                      {language === Language.EN
                        ? title
                        : language === Language.ZH_CN
                        ? t2s(titleCN)
                        : titleCN}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
