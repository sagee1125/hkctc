import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { exploreOption } from "../Navigator";

type ExploreBarData = {
  iconName: string;
  title: string;
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
  const currentPath = location.pathname;
  const [selectedExploreOption, setSelectedExploreOption] = useState<
    string | null
  >(getCurrentTitle(currentPath));

  useEffect(() => {
    setSelectedExploreOption(getCurrentTitle(currentPath));
  }, [currentPath]);

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
        <>
          {!isHidePCExploreBar && (
            <>
              <div className="bg-newPrimary h-[56px] mx-[24px] justify-center items-center flex-row text-white z-900">
                <Menu
                  as="div"
                  className="text-left w-full relative py-[8px] px-[16px] h-full"
                >
                  {({ open }) => (
                    <>
                      <Menu.Button className="inline-flex w-full justify-between items-center bg-newPrimary text-body-m text-white h-full">
                        <p className="!text-body-s flex items-center justify-start">
                          {selectedExploreOption ?? "Explore as"}
                        </p>
                        <ChevronDownIcon
                          className={`h-[16px] w-[16px] text-[#666666] text-white transform transition-transform ${
                            open ? "rotate-180" : "rotate-0"
                          }`}
                          aria-hidden="true"
                        />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute z-50 mt-2 w-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none left-0">
                          {exploreOption.map((item, index) => (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    setSelectedExploreOption(item.title);
                                    navigate(item.nav);
                                  }}
                                  className={`block w-full text-left text-body-m px-4 py-3 text-sm bg-newPrimary text-white`}
                                >
                                  {item.title}
                                </button>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </>
          )}
        </>
      ) : (
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
      )}
    </nav>
  );
};
