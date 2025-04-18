import React, { Fragment, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { Collapse } from "@mui/material";
import { useSettings } from "../../context";
import { type SubItems } from "../../const";

type SidebarProps = {
  title: string;
  sidebarItems: SubItems[];
  activatedItems: string;
  setActivatedItems: (activatedItems: string) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({
  title,
  sidebarItems,
  activatedItems,
  setActivatedItems,
}) => {
  const { isPC, getSingleText } = useSettings();

  if (isPC)
    return (
      <div className="border-2 border-inherit p-[24px]">
        <p className="text-heading-l" role="heading" aria-level={10}>
          {title}
        </p>
        <div className="w-full flex flex-col gap-[24px] py-[24px]">
          <div className="w-full flex flex-col gap-[24px]">
            {sidebarItems.map((item, index) => {
              const { subTitle, subTitleCN, imgUrl, enum: navItemEnum } = item;
              if (subTitle === "") return null;

              const isActivated = activatedItems === navItemEnum;
              return (
                <div
                  key={index}
                  className={`transition-all duration-200 ease-in-out ${
                    isActivated
                      ? "bg-[#F2F2EF] border-[8px] border-[#F2F2EF]"
                      : "bg-transparent border-[0px] border-transparent"
                  }`}
                  onClick={() => {
                    setActivatedItems(navItemEnum);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setActivatedItems(navItemEnum);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={getSingleText(subTitle, subTitleCN)}
                >
                  <div className="flex flex-row gap-[24px] w-full">
                    <div className="w-[130px] h-[90px] overflow-hidden">
                      <img
                        className="min-w-[130px] min-h-[90px] object-cover object-center"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/" + imgUrl
                        }
                        alt={getSingleText(subTitle, subTitleCN)}
                      />
                    </div>
                    <div className="text-highlight-m text-black w-[252px]">
                      {getSingleText(subTitle, subTitleCN)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="w-full">
        <Menu as="div" className="relative inline-block text-left w-full">
          {({ open }) => (
            <>
              <Menu.Button className="inline-flex w-full justify-between items-center border border-[2px] border-newPrimary p-[16px]">
                <p className="!text-heading-xs w-full text-left">
                  {getSingleText(
                    sidebarItems.find((i) => i.enum === activatedItems)
                      ?.subTitle ?? "",
                    sidebarItems.find((i) => i.enum === activatedItems)
                      ?.subTitleCN ?? ""
                  )}
                </p>
                <ChevronDownIcon
                  className={`h-5 w-5 text-black transform transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                  aria-label="icon"
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
                <Menu.Items className="absolute z-10 mt-2 w-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {sidebarItems.map((item, index) => {
                    const { subTitle, subTitleCN, enum: navItemEnum } = item;
                    if (subTitle === "") return null;

                    return (
                      <Menu.Item key={index}>
                        {({ active }) => {
                          const buttonText = getSingleText(
                            subTitle,
                            subTitleCN
                          );
                          return (
                            <button
                              tabIndex={0}
                              aria-label={buttonText}
                              onClick={() => {
                                setActivatedItems(navItemEnum);
                              }}
                              className={`block w-full text-left text-body-m px-4 py-3 text-sm ${
                                active || navItemEnum === activatedItems
                                  ? "bg-[#F7F7F5] text-black"
                                  : "text-gray-700"
                              }`}
                            >
                              {buttonText}
                            </button>
                          );
                        }}
                      </Menu.Item>
                    );
                  })}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    );
};

type MultipleSidebarsProps = {
  sidebars: Array<{
    title: string;
    titleCN: string;
    sidebarItems: SubItems[];
  }>;
  activatedItems: string;
  setActivatedItems: (activatedItems: string) => void;
};

const findParentTitle = (
  activatedItems: string,
  sidebars: MultipleSidebarsProps["sidebars"]
) => {
  for (const sidebar of sidebars) {
    const found = sidebar.sidebarItems.find(
      (item) => item.enum === activatedItems
    );
    if (found) {
      return sidebar.title;
    }
  }
  return null;
};

export const MultipleSidebars: React.FC<MultipleSidebarsProps> = (
  props: MultipleSidebarsProps
) => {
  const { sidebars, activatedItems, setActivatedItems } = props;
  const { isPC, getSingleText } = useSettings();

  const activatedParentTitle = findParentTitle(activatedItems, sidebars);
  const [currentExpandMobile, setCurrentExpandMobile] = useState<string>(
    activatedParentTitle ?? ""
  );
  const [expandStates, setExpandStates] = useState<Record<string, boolean>>(
    () => {
      const initialExpandStates: Record<string, boolean> = sidebars.reduce(
        (acc, sidebar) => {
          acc[sidebar.title] = activatedParentTitle === sidebar.title;
          return acc;
        },
        {} as Record<string, boolean>
      );
      return initialExpandStates;
    }
  );

  const toggleExpand = (title: string): void => {
    setExpandStates((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };
  useEffect(() => {
    if (activatedParentTitle) {
      setExpandStates((prevState) => ({
        ...prevState,
        [activatedParentTitle]: true,
      }));
    }
  }, [activatedParentTitle]);
  if (isPC)
    return (
      <div className="border-2 border-inherit p-[24px]">
        {sidebars.map((sidebar, index) => {
          const { title, titleCN, sidebarItems } = sidebar;
          const expand = expandStates[title];

          return (
            <div key={index} className="flex flex-col gap-[24px] mb-[24px]">
              <div
                className="flex flex-row justify-between items-center cursor-pointer"
                onClick={() => {
                  toggleExpand(title);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    toggleExpand(title);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={getSingleText(title, titleCN)}
              >
                <p className="text-heading-l" role="heading" aria-level={10}>
                  {getSingleText(title, titleCN)}
                </p>
                <ExpandMoreIcon
                  sx={{
                    fontSize: "24",
                    color: "#666666",
                    transform: expand ? undefined : "rotate(180deg)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>
              <Collapse in={expand}>
                <div className="w-full flex flex-col gap-[24px]">
                  {sidebarItems.map((item, i) => {
                    const {
                      subTitle,
                      subTitleCN,
                      imgUrl,
                      enum: navItemEnum,
                    } = item;
                    const isActivated = activatedItems === navItemEnum;
                    return (
                      <div
                        key={i}
                        className={`transition-all duration-200 ease-in-out cursor-pointer ${
                          isActivated
                            ? "bg-[#F2F2EF] border-[8px] border-[#F2F2EF]"
                            : "bg-transparent border-[0px] border-transparent"
                        }`}
                        tabIndex={0}
                        role="button"
                        onClick={() => {
                          setActivatedItems(navItemEnum);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setActivatedItems(navItemEnum);
                          }
                        }}
                        aria-label={getSingleText(subTitle, subTitleCN)}
                      >
                        <div className="flex flex-row gap-[24px] w-full">
                          <div className="w-[130px] h-[90px] overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/" +
                                imgUrl
                              }
                              alt={getSingleText(subTitle, subTitleCN)}
                            />
                          </div>
                          <div className="text-highlight-m text-black py-[8px] pr-[16px] w-[202px]">
                            {getSingleText(subTitle, subTitleCN)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Collapse>
            </div>
          );
        })}
      </div>
    );
  else
    return (
      <div className="w-full z-50">
        <Menu as="div" className="relative inline-block text-left w-full">
          {({ open }) => (
            <>
              <Menu.Button className="inline-flex w-full justify-between items-center border border-[2px] border-newPrimary p-[16px]">
                <p className="!text-heading-s w-full text-left">
                  {getSingleText(
                    sidebars
                      .flatMap((item) => item.sidebarItems)
                      .find((subItem) => subItem.enum === activatedItems)
                      ?.subTitle ?? "",
                    sidebars
                      .flatMap((item) => item.sidebarItems)
                      .find((subItem) => subItem.enum === activatedItems)
                      ?.subTitleCN ?? ""
                  )}
                </p>
                <ChevronDownIcon
                  className={`h-5 w-5 text-black transform transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                  aria-label="icon"
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
                <Menu.Items className="absolute z-40 mt-2 pt-[8px] w-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {sidebars.map((item, index) => {
                    const { title, titleCN, sidebarItems } = item;
                    const expand = title === currentExpandMobile;

                    const activatedSub = sidebars
                      .flatMap((item) => item.sidebarItems)
                      .find(
                        (subItem) => subItem.enum === activatedItems
                      )?.subTitle;
                    return (
                      <div key={index}>
                        <div
                          className="flex flex-row justify-between items-center cursor-pointer px-[16px] py-[8px]"
                          onClick={() => {
                            setCurrentExpandMobile(expand ? "" : title);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setCurrentExpandMobile(expand ? "" : title);
                            }
                          }}
                          tabIndex={0}
                          role="button"
                          aria-label={getSingleText(title, titleCN)}
                        >
                          <p className="text-heading-m">
                            {getSingleText(title, titleCN)}
                          </p>
                          <ChevronDownIcon
                            className={`h-5 w-5 text-black transform transition-transform ${
                              expand ? "rotate-180" : "rotate-0"
                            }`}
                            aria-label="icon"
                          />
                        </div>
                        <Collapse in={expand}>
                          {sidebarItems.map((i, innerIndex) => {
                            const {
                              subTitle,
                              subTitleCN,
                              enum: navItemEnum,
                            } = i;
                            const buttonText = getSingleText(
                              subTitle,
                              subTitleCN
                            );
                            return (
                              <Menu.Item key={innerIndex}>
                                {({ active }) => (
                                  <button
                                    tabIndex={0}
                                    onClick={() => {
                                      setActivatedItems(navItemEnum);
                                    }}
                                    className={`block w-full text-left text-body-m px-4 py-3 text-sm ${
                                      active || subTitle === activatedSub
                                        ? "bg-[#F7F7F5] text-black"
                                        : "text-gray-700"
                                    }`}
                                    aria-label={buttonText}
                                  >
                                    {buttonText}
                                  </button>
                                )}
                              </Menu.Item>
                            );
                          })}
                        </Collapse>
                      </div>
                    );
                  })}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    );
};
