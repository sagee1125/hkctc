import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { exploreOption } from "../Navigator";
import { useSettings } from "../../../context";
import { maxMobileContainer, maxPCContainer } from "../../Container";

type ExploreBarData = {
  iconName: React.ReactNode;
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
  const location = useLocation();
  const { getPageText, isPC, getSingleText } = useSettings();
  const [testHover, setTestHover] = useState(false);
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
      iconName: (
        <Icon
          aria-hidden="true"
          icon={"entypo:globe"}
          className={`${
            currentPath === "/general-public"
              ? "text-elegancePurple"
              : "group-hover:text-elegancePurple"
          } ${isClicked ? "text-[#FFFFFF]" : ""} !w-[20px] !h-[20px]`}
        />
      ),
      hoverColor:
        currentPath === "/general-public"
          ? "text-elegancePurple"
          : `group-hover:text-elegancePurple ${
              isClicked ? "text-[#FFFFFF]" : ""
            }`,
      onClick: () => {
        window.open("general-public", "_self");
      },
    },
    {
      title: "Educators & Students",
      titleCN: "老師與學生",
      iconName: (
        <Icon
          icon={"fa-solid:book-reader"}
          aria-hidden="true"
          className={`${
            currentPath === "/educators-students"
              ? "text-trustfulBlue"
              : "group-hover:text-trustfulBlue"
          } ${isClicked ? "text-[#FFFFFF]" : ""} !w-[20px] !h-[20px]`}
        />
      ),
      hoverColor:
        currentPath === "/educators-students"
          ? "text-trustfulBlue"
          : `group-hover:text-trustfulBlue ${
              isClicked ? "text-[#FFFFFF]" : ""
            }`,
      onClick: () => {
        window.open("educators-students", "_self");
      },
    },
    {
      title: "T&C Service Users",
      titleCN: "檢測認證服務使用者",
      iconName: (
        <Icon
          icon={"fa-solid:user"}
          aria-hidden="true"
          className={`${
            currentPath === "/service-users"
              ? "text-energeticOrange"
              : "group-hover:text-energeticOrange"
          } ${isClicked ? "text-[#FFFFFF]" : ""} !w-[20px] !h-[20px]`}
        />
      ),
      hoverColor:
        currentPath === "/service-users"
          ? "text-energeticOrange"
          : `group-hover:text-energeticOrange ${
              isClicked ? "text-[#FFFFFF]" : ""
            }`,
      onClick: () => {
        window.open("service-users", "_self");
      },
    },
    {
      title: "T&C Bodies & Practitioners",
      titleCN: "檢測認證機構及從業員",
      iconName: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill={isClicked ? "#FFFFFF" : "none"}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g clip-path="url(#clip0_4013_21449)">
            <path
              d="M15 0V2H14V16C14 17.0609 13.5786 18.0783 12.8284 18.8284C12.0783 19.5786 11.0609 20 10 20C8.93913 20 7.92172 19.5786 7.17157 18.8284C6.42143 18.0783 6 17.0609 6 16V2H5V0H15ZM11 13C10.7348 13 10.4804 13.1054 10.2929 13.2929C10.1054 13.4804 10 13.7348 10 14C10 14.2652 10.1054 14.5196 10.2929 14.7071C10.4804 14.8946 10.7348 15 11 15C11.2652 15 11.5196 14.8946 11.7071 14.7071C11.8946 14.5196 12 14.2652 12 14C12 13.7348 11.8946 13.4804 11.7071 13.2929C11.5196 13.1054 11.2652 13 11 13ZM9 10C8.73478 10 8.48043 10.1054 8.29289 10.2929C8.10536 10.4804 8 10.7348 8 11C8 11.2652 8.10536 11.5196 8.29289 11.7071C8.48043 11.8946 8.73478 12 9 12C9.26522 12 9.51957 11.8946 9.70711 11.7071C9.89464 11.5196 10 11.2652 10 11C10 10.7348 9.89464 10.4804 9.70711 10.2929C9.51957 10.1054 9.26522 10 9 10ZM12 2H8V6H12V2Z"
              fill={
                currentPath === "/industry" || testHover
                  ? "#D1E39B"
                  : isClicked
                  ? "#FFFFFF"
                  : "white"
              }
            />
          </g>
          <defs>
            <clipPath id="clip0_4013_21449">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      hoverColor:
        currentPath === "/industry"
          ? "text-growthfulGreen"
          : `group-hover:text-growthfulGreen ${
              isClicked ? "text-[#FFFFFF]" : ""
            }`,
      onClick: () => {
        window.open("industry", "_self");
      },
    },
  ];

  if (!isMobileView && isHidePCExploreBar) return <></>;

  const { explore_as } = page_text;
  return (
    <nav>
      {!isMobileView && (
        <div className="bg-newPrimary h-[50px] flex flex-row px-[32px] items-center justify-center text-white">
          <div
            className="flex flex-row px-[32px] items-center text-white"
            style={isPC ? maxPCContainer : maxMobileContainer}
          >
            <p className="text-highlight-s">{explore_as as string}</p>
            <svg
              aria-hidden="true"
              xmlns="https://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="ml-[8px] mr-[16px]"
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
                    aria-label={getSingleText(title, titleCN)}
                    onMouseEnter={() => {
                      if (index === exploreBarData.length - 1) {
                        setTestHover(true);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        index === exploreBarData.length - 1
                      ) {
                        setTestHover(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (index === exploreBarData.length - 1) {
                        setTestHover(false);
                      }
                    }}
                  >
                    {iconName}
                    <p className={hoverColor}>
                      {getSingleText(title, titleCN)}
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
