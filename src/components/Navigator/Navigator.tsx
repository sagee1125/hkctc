import React, { Fragment, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Transition, Menu } from "@headlessui/react";
import { ReactComponent as Logo } from "../../logo/hkctc_logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { ExploreBar } from "./ExploreBar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NavigationBarConfiguration } from "../../const/";
import { useSettings } from "../../context";
import { HeaderSocialMedia } from "../Header";

const hideExploreBar = [
  "/events-landing",
  "/events-landing/award-scheme",
  "/resources-reports",
  "/profile-and-role",
  "/seminars-workshops",
  "/student-competitions",
  "/support",
  "/tc-sector",
  "/events-promotion",
  "/about-us",
  "/about-the-site",
  "/career_and_education",
  "/*",
];

export const exploreOption: Array<{ title: string; nav: string }> = [
  {
    title: "General Public",
    nav: "general-public",
  },
  {
    title: "Educators & Students",
    nav: "educators-students",
  },
  {
    title: "T&C Bodies & Practitioners",
    nav: "industry",
  },
  {
    title: "T&C Service Users",
    nav: "service-users",
  },
];
export const Navigator: React.FC = () => {
  const { device } = useSettings();
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // nav
  const [activeSubItem, setActiveSubItem] = useState<string>("");
  const [selectedExploreOption, setSelectedExploreOption] = useState<
    string | null
  >(null);
  console.log("activeIndex", activeIndex);
  const [openMobileDropDown, setOpenMobileDropDown] = useState<boolean>(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const isHideExploreBar = hideExploreBar.some((path) =>
    currentPath.startsWith(path)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = activeIndex
    ? NavigationBarConfiguration[activeIndex]?.items
    : []; // sidebar in dropdown nav

  const showSidebar = activeIndex
    ? NavigationBarConfiguration[activeIndex]?.showSidebar
    : false;
  const customizedSidebar = activeIndex
    ? NavigationBarConfiguration[activeIndex]?.items?.length === 1
    : false;
  const isHideDropdown = activeIndex === null ? true : !navItems.length;

  const isMobile: boolean = device === "mobile";
  return (
    <div style={isMobile ? { paddingBottom: "24px" } : {}}>
      <nav
        ref={navRef}
        style={{
          ...(isMobile
            ? { marginTop: "48px" }
            : { borderBottom: "1px solid #E0E0E0" }),
        }}
        onMouseLeave={() => {
          setActiveIndex(null);
        }}
      >
        <div className="flex flex-row w-full justify-between items-center">
          <div
            style={{
              ...navStyle,
              justifyContent: isMobile ? "space-between" : "flex-start",
            }}
          >
            <div className={`flex items-center h-[54px] w-[141px]`}>
              <Logo
                className="h-[54px] w-[141px] cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            {isMobile ? (
              <div className="flex flex-row gap-[24px] justify-center items-center">
                <Icon
                  icon="ri:search-line"
                  className="h-[24px] w-[24px] text-[#333333]"
                />
                <div
                  className="cursor-pointer h-[24px] w-[24px]"
                  onClick={() => {
                    setActiveIndex(null);
                    setOpenMobileDropDown(!openMobileDropDown);
                  }}
                >
                  {!openMobileDropDown ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[24px] w-[24px]"
                      viewBox="0 0 24 20"
                      fill="none"
                    >
                      <path
                        d="M0 2H24"
                        stroke="#4B4746"
                        stroke-width="2"
                        stroke-linecap="square"
                      />
                      <path
                        d="M0 10H24"
                        stroke="#4B4746"
                        stroke-width="2"
                        stroke-linecap="square"
                      />
                      <path
                        d="M0 18H24"
                        stroke="#4B4746"
                        stroke-width="2"
                        stroke-linecap="square"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[22px] w-[22px]"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M22 22L12 12M12 12L2 2M12 12L22 2M12 12L2 22"
                        stroke="#4B4746"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ) : (
              <div className="pl-[32px]">
                <div className="flex flex-row gap-[26px] h-full">
                  {NavigationBarConfiguration.map((nav, index) => {
                    const { title, items, navUrl } = nav;
                    const ifHideArrow: boolean = !items.length;
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center gap-[6px] cursor-pointer h-full"
                        onMouseEnter={() => {
                          setActiveIndex(index);
                          setActiveSubItem(
                            NavigationBarConfiguration[index]?.items?.[0]
                              ?.name ?? ""
                          );
                        }}
                        onClick={() => {
                          if (navUrl) navigate(navUrl);
                        }}
                      >
                        <p
                          className="text-highlight-s"
                          style={{
                            color:
                              activeIndex === index || activeIndex === null
                                ? "black"
                                : "#AAAAAA",
                          }}
                        >
                          {title}
                        </p>
                        <Icon
                          icon="oui:arrow-down"
                          style={{
                            display: ifHideArrow ? "none" : "block",
                            color:
                              activeIndex === index || activeIndex === null
                                ? "black"
                                : "#AAAAAA",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          {isHideExploreBar && !isMobile && (
            <div className="flex flex-row items-center gap-[8px] pr-[24px]">
              <div className="min-w-[200px]">
                <Menu
                  as="div"
                  className="relative inline-block text-left w-full"
                >
                  {({ open }) => (
                    <>
                      <Menu.Button className="inline-flex w-full justify-between items-center border border-gray-300 py-[8px] px-[16px] bg-newPrimary text-body-m text-white">
                        <p className="!text-body-s">
                          {selectedExploreOption ?? "Explore as"}
                        </p>
                        <ChevronDownIcon
                          className={`h-5 w-5 text-[#666666] text-white transform transition-transform ${
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
                        <Menu.Items className="absolute z-10 mt-2 w-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {exploreOption.map((item, index) => (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    setSelectedExploreOption(item.title);
                                    navigate(item.nav);
                                  }}
                                  className={`block w-full text-left text-body-m px-4 py-3 text-sm ${
                                    active
                                      ? "bg-newPrimary text-white"
                                      : "text-gray-700"
                                  }`}
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
            </div>
          )}
        </div>
        <Transition
          show={!isHideDropdown && !isMobile}
          enter="transition-all duration-500 ease-out"
          enterFrom="opacity-0 transform scale-90"
          enterTo="opacity-100 transform scale-100"
          leave="transition-all duration-200 ease-in"
          leaveFrom="opacity-100 transform scale-100"
          leaveTo="opacity-0 transform scale-90"
        >
          <div
            style={{
              ...dropDownStyle,
              position: "absolute", // on the top
              zIndex: 1000,
            }}
          >
            <div className="w-full">
              {navItems.map((sideItems, index) => {
                if (activeSubItem !== sideItems.name) return <></>;
                const { name: currentSideName, subItems } = sideItems;

                return (
                  <div key={index} className="flex flex-row w-full gap-[24px]">
                    {/* sidebar */}
                    {/* customizedSidebar */}
                    {showSidebar && (
                      <>
                        <div className="w-full h-full flex flex-col flex-[6]">
                          {customizedSidebar === true ? (
                            <div className="flex flex-row cursor-pointer">
                              <div
                                className="bg-[#EEEEEA]"
                                style={{
                                  width: "16px",
                                  marginRight: "8px",
                                }}
                              />
                              <div className="text-highlight-s">
                                {navItems[0].name}
                              </div>
                            </div>
                          ) : (
                            <>
                              {navItems.map((sideItem, index) => {
                                const { name: sideName } = sideItem;
                                const clicked = sideName === currentSideName;
                                return (
                                  <div
                                    key={index}
                                    className={`text-highlight-s py-2 cursor-pointer transition-all duration-300 ease-in-out ${
                                      clicked
                                        ? "bg-lightGrey px-4"
                                        : "hover:bg-gray-100 px-1"
                                    }`}
                                    onClick={() => {
                                      setActiveSubItem(sideName);
                                    }}
                                  >
                                    {sideName}
                                  </div>
                                );
                              })}
                            </>
                          )}
                        </div>
                      </>
                    )}
                    {subItems.map((sub, index) => {
                      const { subTitle, imgUrl, navUrl } = sub;
                      return (
                        <div
                          key={index}
                          className={`flex flex-col gap-2 flex-[5] ${
                            subTitle === "" ? "" : "cursor-pointer"
                          }`}
                          onClick={() => {
                            if (navUrl) navigate(navUrl);
                          }}
                        >
                          {imgUrl && (
                            <div className="flex justify-center items-center">
                              <img
                                className="w-full aspect-[180/106] overflow-hidden"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/" +
                                  imgUrl
                                }
                                alt={subTitle}
                              />
                            </div>
                          )}
                          <div className="w-full text-left text-body-s">
                            {subTitle}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </Transition>

        <Transition show={openMobileDropDown}>
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              color: "black",
              minHeight: "428px",
              zIndex: 100,
              borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
              position: "absolute",
            }}
          >
            <div className="w-full px-[24px] py-[32px]">
              {activeIndex === null ? (
                <div className="flex flex-col gap-[24px]">
                  {NavigationBarConfiguration.map((nav, index) => {
                    const { title, items, navUrl } = nav;
                    const ifHideArrow: boolean = !items.length;
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-between items-center gap-[6px] cursor-pointer h-full"
                        onClick={() => {
                          // means has subitems
                          if (!ifHideArrow) {
                            setActiveIndex(index);
                            setActiveSubItem(
                              NavigationBarConfiguration[index]?.items?.[0]
                                ?.name ?? ""
                            );
                          }
                          if (navUrl) {
                            setOpenMobileDropDown(false);
                            setActiveIndex(null);
                            navigate(navUrl);
                          }
                        }}
                      >
                        <p
                          style={{
                            fontSize: "18px",
                            fontWeight: 600,
                          }}
                        >
                          {title}
                        </p>
                        <Icon
                          icon="icon-park-outline:right"
                          style={{
                            display: ifHideArrow ? "none" : "block",
                            color: "black",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col">
                  {/* allow to back */}
                  <div
                    className="flex flex-row gap-[16px] items-center cursor-pointer"
                    onClick={() => {
                      setActiveIndex(null);
                    }}
                  >
                    <Icon
                      icon="icon-park-outline:left"
                      className="h-[20px] w-[20px] text-[#333333] cursor-pointer"
                    />
                    <p className="text-highlight-extra">
                      {NavigationBarConfiguration[activeIndex].title}
                    </p>
                  </div>
                  {navItems.map((sideItems, index) => {
                    if (activeSubItem !== sideItems.name) return <></>;
                    const { name: currentSideName, subItems } = sideItems;
                    console.log("sideItems", sideItems);
                    return (
                      <div key={index}>
                        {/* sidebar */}
                        {/* customizedSidebar */}
                        {showSidebar ? (
                          <>
                            <div className="w-full h-full flex flex-col mt-[16px]">
                              {customizedSidebar === true ? (
                                <>
                                  <div className="flex flex-row mb-[24px]">
                                    <div
                                      className="bg-[#EEEEEA]"
                                      style={{
                                        width: "16px",
                                        marginRight: "8px",
                                      }}
                                    />
                                    <div
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                      }}
                                    >
                                      {navItems[0].name}
                                    </div>
                                  </div>

                                  <div className="mt-[16px]">
                                    <div className="flex flex-col gap-[24px]">
                                      {subItems.map((sub, index) => {
                                        const { subTitle, navUrl } = sub;

                                        if (!subTitle) return null;
                                        return (
                                          <div
                                            key={index}
                                            onClick={() => {
                                              setOpenMobileDropDown(false);
                                              setActiveIndex(null);
                                              if (navUrl) navigate(navUrl);
                                            }}
                                          >
                                            <div className="text-body-m">
                                              {subTitle}
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {navItems.map((sideItem, index) => {
                                    const { name: sideName } = sideItem;
                                    const clicked =
                                      sideName === currentSideName;
                                    return (
                                      <div key={index}>
                                        <div
                                          key={index}
                                          className={`flex flex-row justify-between px-[10px] py-[8px] cursor-pointer transition-all duration-300 ease-in-out ${
                                            clicked ? "bg-lightGrey" : ""
                                          }`}
                                          onClick={() => {
                                            setActiveSubItem(sideName);
                                          }}
                                        >
                                          <p
                                            style={{
                                              fontSize: "16px",
                                              fontWeight: 600,
                                            }}
                                          >
                                            {sideName}
                                          </p>

                                          <Icon
                                            icon="icon-park-outline:down"
                                            style={{
                                              transition: "transform 0.3s ease",
                                              transform: clicked
                                                ? "rotate(-180deg)"
                                                : "rotate(0deg)",
                                              color: "black",
                                            }}
                                          />
                                        </div>
                                        {clicked && (
                                          <div className="pl-[24px] mt-[16px] mb-[24px]">
                                            <div className="flex flex-col gap-[24px]">
                                              {subItems.map((sub, index) => {
                                                const { subTitle, navUrl } =
                                                  sub;

                                                if (!subTitle) return null;
                                                return (
                                                  <div
                                                    key={index}
                                                    onClick={() => {
                                                      setOpenMobileDropDown(
                                                        false
                                                      );
                                                      setActiveIndex(null);
                                                      if (navUrl)
                                                        navigate(navUrl);
                                                    }}
                                                  >
                                                    <div className="text-body-m">
                                                      {subTitle}
                                                    </div>
                                                  </div>
                                                );
                                              })}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mt-[16px] mb-[24px]">
                              <div className="flex flex-col gap-[24px]">
                                {subItems.map((sub, index) => {
                                  const { subTitle, navUrl } = sub;

                                  if (!subTitle) return null;
                                  return (
                                    <div
                                      key={index}
                                      onClick={() => {
                                        setOpenMobileDropDown(false);
                                        setActiveIndex(null);
                                        if (navUrl) navigate(navUrl);
                                      }}
                                    >
                                      <div className="text-body-m">
                                        {subTitle}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              <hr className="text-[#E0E0E0] my-[24px]" />
              <div className="flex flex-row gap-[24px] items-center">
                <HeaderSocialMedia />
              </div>
            </div>
          </div>
        </Transition>
      </nav>
      <ExploreBar
        isMobileView={isMobile}
        isHidePCExploreBar={isHideExploreBar}
      />
    </div>
  );
};

const navStyle: React.CSSProperties = {
  background: "white",
  color: "black",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "90px",
  paddingLeft: "24px",
  paddingRight: "24px",
  width: "100%",
};

const dropDownStyle: React.CSSProperties = {
  background: "#FFFFFF",
  color: "black",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "202px",
  width: "96%",
  borderBottom: "1px solid #E0E0E0",
  padding: "16px",
  zIndex: 10,
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  marginLeft: "38px",
};
