import React, { Fragment, RefObject, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Transition, Menu } from "@headlessui/react";
import { ReactComponent as Logo } from "../../logo/hkctc_logo.svg";
import { useLocation } from "react-router-dom";
import { ExploreBar, getCurrentTitle } from "./ExploreBar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NavigationBarConfiguration } from "../../const/";
import { useSettings } from "../../context";
import { HeaderSocialMedia } from "../Header";
import { TextField } from "../TextField";
import { useFormik } from "formik";
import { object, string } from "yup";
import {
  ClickAwayListener,
  Collapse,
  IconButton,
  InputAdornment,
  Paper,
  Popper,
} from "@mui/material";
import LanguageSelect from "../languageSelection";
import { maxMobileContainer, maxPCContainer } from "../Container";

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
  "/whats-new",
  "/*",
];

const showMobileExploreBarOutsideLink = [
  "/*",
  "/hkctc",
  "/general-public",
  "/educators-students",
  "/industry",
  "/service-users",
];
export const exploreOption: Array<{
  title: string;
  titleCN: string;
  nav: string;
}> = [
  {
    title: "General Public",
    titleCN: "公眾人士",
    nav: "/general-public",
  },
  {
    title: "Educators & Students",
    titleCN: "老師與學生",
    nav: "/educators-students",
  },
  {
    title: "T&C Bodies & Practitioners",
    titleCN: "檢測認證機構及從業員",
    nav: "/industry",
  },
  {
    title: "T&C Service Users",
    titleCN: "檢測認證服務使用者",
    nav: "/service-users",
  },
];

const multilingual = {
  en: {
    explore_as: "Explore as",
  },
  cn: {
    explore_as: "探索為",
  },
};

export const Navigator: React.FC = () => {
  const { isPC, getPageText, getSingleText } = useSettings();
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // nav
  const [activeSubItem, setActiveSubItem] = useState<string>("");
  const [selectedExploreOption, setSelectedExploreOption] = useState<
    string | null
  >(getCurrentTitle(currentPath));
  const [openExploreBar, setOpenExploreBar] = useState<boolean>(false);

  const currentOption = getSingleText(
    selectedExploreOption === null ? "" : selectedExploreOption,
    exploreOption.find((op) => "/" + op.nav === currentPath)?.titleCN ?? ""
  );
  const page_text = getPageText(multilingual);
  const { explore_as } = page_text;
  const [openMobileDropDown, setOpenMobileDropDown] = useState<boolean>(false);
  const [openSearchInput, setOpenSearchInput] = useState<boolean>(false);
  const anchorRef = useRef(null); // mobile drop drown icon

  const navRef = useRef<HTMLDivElement | null>(null);

  const isHideExploreBar = hideExploreBar.some((path) =>
    currentPath.startsWith(path)
  );

  const isShowMobileExploreBarOutside =
    (showMobileExploreBarOutsideLink.some((path) =>
      currentPath.startsWith(path)
    ) ||
      currentPath === "/") &&
    !isPC;

  const containerRef: RefObject<HTMLDivElement> = useRef(null);

  // 焦點追蹤邏輯
  useEffect(() => {
    if (!isPC) return;
    const handleFocusChange = (e: FocusEvent) => {
      const target = e.target as Node;

      // 檢查焦點是否在 container 之外
      if (!containerRef.current?.contains(target)) {
        setActiveIndex(null);
      }
    };

    // 使用 focusin 事件（支援冒泡）
    document.addEventListener("focusin", handleFocusChange);

    return () => {
      document.removeEventListener("focusin", handleFocusChange);
    };
  }, [isPC]);

  useEffect(() => {
    if (isPC) setOpenMobileDropDown(false);
  }, [isPC]);

  useEffect(() => {
    setSelectedExploreOption(getCurrentTitle(currentPath));
  }, [currentPath]);

  const formik = useFormik<{ search: string }>({
    initialValues: {
      search: "",
    },
    validationSchema: object({
      search: string(),
    }),
    onSubmit: (value) => {
      const { search } = value;
      if (search) {
        const preLink = `https://www.search.gov.hk/result?tpl_id=stdsearch&gp0=hkctc_home&ui_charset=utf-8&web=this&ui_lang=en&query=`;
        window.open(preLink + search, "_blank", "noopener");
      }
    },
  });

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
  const isTouchDevice = "ontouchstart" in window;

  const exploreContent = (
    <div className="bg-newPrimary h-[56px] mx-[24px] justify-center items-center flex-row text-white z-900">
      <Menu
        as="div"
        className="text-left w-full relative py-[8px] px-[16px] h-full"
      >
        {({ open }) => (
          <>
            <Menu.Button className="inline-flex w-full justify-between items-center bg-newPrimary text-body-m text-white h-full">
              <p className="!text-body-s flex items-center justify-start">
                {!currentOption ? (explore_as as string) : currentOption}
              </p>
              <ChevronDownIcon
                className={`h-[16px] w-[16px] text-[#666666] text-white transform transition-transform ${
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
              <Menu.Items className="absolute z-50 mt-2 w-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none left-0">
                {exploreOption.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => {
                      const buttonText = getSingleText(
                        item.title,
                        item.titleCN
                      );
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedExploreOption(item.title);
                            setOpenMobileDropDown(false);
                            window.open(item.nav, "_self");
                          }}
                          aria-label={buttonText}
                          tabIndex={0}
                          className={`block w-full text-left text-body-m px-4 py-3 text-sm bg-newPrimary text-white`}
                        >
                          {buttonText}
                        </button>
                      );
                    }}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
  return (
    <ClickAwayListener onClickAway={() => setOpenMobileDropDown(false)}>
      <div
        ref={containerRef}
        tabIndex={-1}
        onMouseLeave={() => {
          setActiveIndex(null);
        }}
      >
        <div
          style={{
            ...(isShowMobileExploreBarOutside ? { paddingBottom: "24px" } : {}),
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <nav
              ref={navRef}
              style={{
                ...(!isPC
                  ? { marginTop: "48px", ...maxMobileContainer }
                  : { borderBottom: "1px solid #E0E0E0", ...maxPCContainer }),
              }}
            >
              <div className="flex flex-row w-full justify-between items-center">
                <div
                  style={{
                    ...navStyle,
                    justifyContent: !isPC ? "space-between" : "flex-start",
                  }}
                >
                  <a
                    href="/"
                    className={`flex items-center cursor-pointer`}
                    role="button"
                    aria-label="go to homepage"
                  >
                    <Logo
                      className={`${
                        isPC ? "h-[54px] w-[141px]" : ""
                      } aspect-[141/54]`}
                      aria-hidden="false"
                    />
                  </a>
                  {isPC ? (
                    <div className="pl-[32px]">
                      <div className="flex flex-row gap-[26px] h-full">
                        {NavigationBarConfiguration.map((nav, ncIndex) => {
                          const { title, titleCN, items, navUrl } = nav;
                          const ifHideArrow: boolean = !items.length;
                          const displayTitle = getSingleText(title, titleCN);
                          const onClick = (): void => {
                            if (navUrl) window.open(navUrl, "_self");
                            else {
                              setActiveIndex(ncIndex);
                              setActiveSubItem(
                                NavigationBarConfiguration[ncIndex]?.items?.[0]
                                  ?.name ?? ""
                              );
                            }
                          };
                          return (
                            <div
                              key={ncIndex}
                              className="flex flex-row items-center gap-[6px] cursor-pointer h-full"
                              tabIndex={0}
                              role="button"
                              onMouseEnter={() => {
                                setActiveIndex(ncIndex);
                                setActiveSubItem(
                                  NavigationBarConfiguration[ncIndex]
                                    ?.items?.[0]?.name ?? ""
                                );
                              }}
                              onClick={onClick}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  onClick();
                                }
                              }}
                              aria-label={displayTitle}
                            >
                              <p
                                className="text-highlight-s"
                                style={{
                                  color:
                                    activeIndex === ncIndex ||
                                    activeIndex === null
                                      ? "black"
                                      : "#767676",
                                }}
                              >
                                {displayTitle}
                              </p>
                              <Icon
                                aria-hidden="true"
                                icon="oui:arrow-down"
                                style={{
                                  display: ifHideArrow ? "none" : "block",
                                  color:
                                    activeIndex === ncIndex ||
                                    activeIndex === null
                                      ? "black"
                                      : "#767676",
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-row gap-[8px] justify-center items-center">
                      {openMobileDropDown && (
                        <>
                          <div
                            className="cursor-pointer"
                            tabIndex={0}
                            role="button"
                            aria-label={"go searching"}
                            onClick={() => {
                              setOpenSearchInput(!openSearchInput);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                setOpenSearchInput(!openSearchInput);
                              }
                            }}
                          >
                            <Icon
                              aria-hidden="true"
                              icon="ri:search-line"
                              className="h-[32px] w-[32px] text-[#333333]"
                              aria-label={"search icon"}
                            />
                          </div>

                          {openSearchInput && (
                            <form onSubmit={formik.handleSubmit} noValidate>
                              <TextField
                                name="search"
                                value={formik.values.search}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                size="small"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        size="small"
                                        className="!text-button-xs"
                                        disabled={!formik.values.search}
                                        color="primary"
                                        type="submit"
                                        tabIndex={0}
                                      >
                                        GO
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </form>
                          )}

                          <LanguageSelect />
                        </>
                      )}

                      <div
                        ref={anchorRef}
                        className="cursor-pointer"
                        tabIndex={0}
                        role="button"
                        aria-label="toggle the dropdown selection"
                        onClick={
                          isTouchDevice
                            ? undefined
                            : (e) => {
                                e.preventDefault();
                                setActiveIndex(null);
                                setOpenMobileDropDown(!openMobileDropDown);
                              }
                        }
                        onKeyDown={
                          isTouchDevice
                            ? undefined
                            : (e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  setActiveIndex(null);
                                  setOpenMobileDropDown(!openMobileDropDown);
                                }
                              }
                        }
                        onTouchEnd={
                          isTouchDevice
                            ? (e) => {
                                e.preventDefault();
                                setActiveIndex(null);
                                setOpenMobileDropDown(!openMobileDropDown);
                              }
                            : undefined
                        }
                      >
                        {openMobileDropDown ? (
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            className="h-[22px] w-[22px]"
                            viewBox="0 0 22 22"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M22 22L12 12M12 12L2 2M12 12L22 2M12 12L2 22"
                              stroke="#4B4746"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="https://www.w3.org/2000/svg"
                            className="h-[32px] w-[32px]"
                            viewBox="0 0 24 20"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M0 2H24"
                              stroke="#4B4746"
                              strokeWidth="2"
                              strokeLinecap="square"
                            />
                            <path
                              d="M0 10H24"
                              stroke="#4B4746"
                              strokeWidth="2"
                              strokeLinecap="square"
                            />
                            <path
                              d="M0 18H24"
                              stroke="#4B4746"
                              strokeWidth="2"
                              strokeLinecap="square"
                            />
                          </svg>
                        )}
                      </div>

                      {/* this is mobile version dropdown */}
                      <Popper
                        open={openMobileDropDown}
                        anchorEl={anchorRef.current}
                        placement="bottom-start"
                        modifiers={[
                          {
                            name: "preventOverflow",
                            options: { boundary: "window" },
                          },
                          {
                            name: "offset",
                            options: {
                              offset: [0, 30],
                            },
                          },
                        ]}
                        style={{ width: "100%", left: 0, zIndex: 1000 }}
                      >
                        <Paper elevation={0} sx={{ width: "100%" }}>
                          <div
                            style={{
                              width: "100%",
                              backgroundColor: "white",
                              color: "black",
                              minHeight: "428px",
                              zIndex: 100,
                              borderTop: "none",
                              boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            {!isShowMobileExploreBarOutside && (
                              <>{exploreContent}</>
                            )}

                            <div className="w-full px-[24px] py-[32px]">
                              {activeIndex === null ? (
                                <div className="flex flex-col gap-[24px]">
                                  {NavigationBarConfiguration.map(
                                    (nav, index) => {
                                      const { title, titleCN, items, navUrl } =
                                        nav;
                                      const ifHideArrow: boolean =
                                        !items.length;
                                      const displayTitle = getSingleText(
                                        title,
                                        titleCN
                                      );
                                      const onClick = (): void => {
                                        // means has subitems
                                        if (!ifHideArrow) {
                                          setActiveIndex(index);
                                          setActiveSubItem(
                                            NavigationBarConfiguration[index]
                                              ?.items?.[0]?.name ?? ""
                                          );
                                        }
                                        if (navUrl) {
                                          setOpenMobileDropDown(false);
                                          setActiveIndex(null);
                                          window.open(navUrl, "_self");
                                        }
                                      };
                                      return (
                                        <div
                                          key={index}
                                          className="flex flex-row justify-between items-center gap-[6px] cursor-pointer h-full"
                                          tabIndex={0}
                                          role="button"
                                          aria-label={displayTitle}
                                          onClick={onClick}
                                          onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                              onClick();
                                            }
                                          }}
                                        >
                                          <p
                                            style={{
                                              fontSize: "18px",
                                              fontWeight: 600,
                                            }}
                                          >
                                            {displayTitle}
                                          </p>
                                          <Icon
                                            aria-hidden={true}
                                            icon="icon-park-outline:right"
                                            style={{
                                              display: ifHideArrow
                                                ? "none"
                                                : "block",
                                              color: "black",
                                            }}
                                          />
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              ) : (
                                <div className="flex flex-col">
                                  {/* allow to back */}
                                  <div
                                    className="flex flex-row gap-[16px] items-center cursor-pointer"
                                    tabIndex={0}
                                    role="button"
                                    onClick={() => {
                                      setActiveIndex(null);
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") {
                                        setActiveIndex(null);
                                      }
                                    }}
                                    aria-label={getSingleText(
                                      NavigationBarConfiguration[activeIndex]
                                        .title,
                                      NavigationBarConfiguration[activeIndex]
                                        .titleCN
                                    )}
                                  >
                                    <Icon
                                      icon="icon-park-outline:left"
                                      aria-hidden={"true"}
                                      className="h-[20px] w-[20px] text-[#333333]"
                                    />
                                    <p className="text-highlight-extra">
                                      {getSingleText(
                                        NavigationBarConfiguration[activeIndex]
                                          .title,
                                        NavigationBarConfiguration[activeIndex]
                                          .titleCN
                                      )}
                                    </p>
                                  </div>
                                  {navItems.map((sideItems, index) => {
                                    if (activeSubItem !== sideItems.name)
                                      return <></>;
                                    const { subItems } = sideItems;

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
                                                      aria-label={getSingleText(
                                                        navItems[0].name,
                                                        navItems[0].nameCN
                                                      )}
                                                    >
                                                      {getSingleText(
                                                        navItems[0].name,
                                                        navItems[0].nameCN
                                                      )}
                                                    </div>
                                                  </div>

                                                  <div className="mt-[16px]">
                                                    <div className="flex flex-col gap-[24px]">
                                                      {subItems.map(
                                                        (sub, index) => {
                                                          const {
                                                            subTitle,
                                                            navUrl,
                                                          } = sub;

                                                          if (!subTitle)
                                                            return null;
                                                          const display =
                                                            getSingleText(
                                                              subTitle,
                                                              sub.subTitleCN
                                                            );
                                                          const onClick =
                                                            (): void => {
                                                              setOpenMobileDropDown(
                                                                false
                                                              );
                                                              if (navUrl)
                                                                window.open(
                                                                  navUrl,
                                                                  "_self"
                                                                );
                                                            };
                                                          return (
                                                            <div
                                                              key={index}
                                                              onClick={onClick}
                                                              onKeyDown={(
                                                                e
                                                              ) => {
                                                                if (
                                                                  e.key ===
                                                                  "Enter"
                                                                ) {
                                                                  onClick();
                                                                }
                                                              }}
                                                              role="button"
                                                              tabIndex={0}
                                                              aria-label={
                                                                display
                                                              }
                                                            >
                                                              <div className="text-body-m">
                                                                {display}
                                                              </div>
                                                            </div>
                                                          );
                                                        }
                                                      )}
                                                    </div>
                                                  </div>
                                                </>
                                              ) : (
                                                <>
                                                  {navItems.map(
                                                    (sideItem, idx) => {
                                                      const { name: sideName } =
                                                        sideItem;
                                                      const clicked =
                                                        sideName ===
                                                        sideItems.name;

                                                      return (
                                                        <div key={idx}>
                                                          <div
                                                            className={`flex flex-row justify-between px-[10px] py-[8px] cursor-pointer transition-all duration-300 ease-in-out ${
                                                              clicked
                                                                ? "bg-lightGrey"
                                                                : ""
                                                            }`}
                                                            tabIndex={0}
                                                            aria-label={getSingleText(
                                                              sideName,
                                                              sideItem.nameCN
                                                            )}
                                                            role="button"
                                                            onClick={() => {
                                                              setActiveSubItem(
                                                                sideName
                                                              );
                                                            }}
                                                            onKeyDown={(e) => {
                                                              if (
                                                                e.key ===
                                                                "Enter"
                                                              ) {
                                                                setActiveSubItem(
                                                                  sideName
                                                                );
                                                              }
                                                            }}
                                                          >
                                                            <p
                                                              style={{
                                                                fontSize:
                                                                  "16px",
                                                                fontWeight: 600,
                                                              }}
                                                            >
                                                              {getSingleText(
                                                                sideName,
                                                                sideItem.nameCN
                                                              )}
                                                            </p>

                                                            <ChevronDownIcon
                                                              className={`h-5 w-5 text-black transform transition-transform ${
                                                                clicked
                                                                  ? "rotate-180"
                                                                  : "rotate-0"
                                                              }`}
                                                              aria-label="icon"
                                                            />
                                                          </div>

                                                          <Collapse
                                                            in={clicked}
                                                          >
                                                            <div className="pl-[24px] mt-[16px] mb-[24px]">
                                                              <div className="flex flex-col gap-[24px]">
                                                                {subItems.map(
                                                                  (
                                                                    sub,
                                                                    subIdx
                                                                  ) => {
                                                                    const {
                                                                      subTitle,
                                                                      navUrl,
                                                                    } = sub;

                                                                    if (
                                                                      !subTitle
                                                                    )
                                                                      return null;
                                                                    const display =
                                                                      getSingleText(
                                                                        subTitle,
                                                                        sub.subTitleCN
                                                                      );
                                                                    const onClick =
                                                                      (): void => {
                                                                        setOpenMobileDropDown(
                                                                          false
                                                                        );
                                                                        setActiveIndex(
                                                                          null
                                                                        );
                                                                        if (
                                                                          navUrl
                                                                        )
                                                                          window.open(
                                                                            navUrl,
                                                                            "_self"
                                                                          );
                                                                      };
                                                                    return (
                                                                      <div
                                                                        key={
                                                                          subIdx
                                                                        }
                                                                        role="button"
                                                                        tabIndex={
                                                                          0
                                                                        }
                                                                        aria-label={
                                                                          display
                                                                        }
                                                                        onClick={
                                                                          onClick
                                                                        }
                                                                        onKeyDown={(
                                                                          e
                                                                        ) => {
                                                                          if (
                                                                            e.key ===
                                                                            "Enter"
                                                                          ) {
                                                                            onClick();
                                                                          }
                                                                        }}
                                                                      >
                                                                        <div className="text-body-m">
                                                                          {
                                                                            display
                                                                          }
                                                                        </div>
                                                                      </div>
                                                                    );
                                                                  }
                                                                )}
                                                              </div>
                                                            </div>
                                                          </Collapse>
                                                        </div>
                                                      );
                                                    }
                                                  )}
                                                </>
                                              )}
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <div className="mt-[16px] mb-[24px]">
                                              <div className="flex flex-col gap-[24px]">
                                                {subItems.map(
                                                  (sub, subItemsIndex) => {
                                                    const { subTitle, navUrl } =
                                                      sub;
                                                    if (!subTitle) return null;
                                                    const display =
                                                      getSingleText(
                                                        subTitle,
                                                        sub.subTitleCN
                                                      );

                                                    const onClc = (): void => {
                                                      if (navUrl)
                                                        window.open(
                                                          navUrl,
                                                          "_self"
                                                        );
                                                      setOpenMobileDropDown(
                                                        false
                                                      );
                                                    };

                                                    return (
                                                      <div
                                                        key={subItemsIndex}
                                                        onClick={onClc}
                                                        onKeyDown={(e) => {
                                                          if (
                                                            e.key === "Enter"
                                                          ) {
                                                            onClc();
                                                          }
                                                        }}
                                                        role="button"
                                                        tabIndex={0}
                                                        aria-label={display}
                                                      >
                                                        <div className="text-body-m">
                                                          {display}
                                                        </div>
                                                      </div>
                                                    );
                                                  }
                                                )}
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
                        </Paper>
                      </Popper>
                    </div>
                  )}
                </div>
                {isHideExploreBar && isPC && (
                  <div className="flex flex-row items-center gap-[8px] pr-[24px]">
                    <div className="min-w-[200px]">
                      <div
                        className="relative inline-block text-left w-full"
                        tabIndex={0}
                        role="button"
                        aria-label={"open explore dropdown selection"}
                        onMouseEnter={() => setOpenExploreBar(true)}
                        onMouseLeave={() => setOpenExploreBar(false)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setOpenExploreBar(true);
                          }
                        }}
                      >
                        <div className="inline-flex w-full justify-between items-center border border-gray-300 py-[8px] px-[16px] bg-newPrimary text-body-m text-white">
                          <p className="!text-body-s">
                            {selectedExploreOption ?? (explore_as as string)}
                          </p>
                          <ChevronDownIcon
                            className={`h-5 w-5 text-[#666666] text-white transform transition-transform ${
                              openExploreBar ? "rotate-180" : "rotate-0"
                            }`}
                            aria-label="icon"
                          />
                        </div>
                        <Transition
                          as={Fragment}
                          show={openExploreBar}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <div className="absolute z-10 mt-2 w-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {exploreOption.map((item, eoIndex) => {
                              const buttonText = getSingleText(
                                item.title,
                                item.titleCN
                              );

                              return (
                                <div key={eoIndex} className="group">
                                  <button
                                    key={eoIndex}
                                    aria-label={buttonText}
                                    onClick={() => {
                                      setSelectedExploreOption(item.title);
                                      window.open(item.nav, "_self");
                                    }}
                                    className="block w-full text-left text-body-m px-4 py-3 text-sm text-gray-700 group-hover:bg-newPrimary group-hover:text-white hover:bg-newPrimary hover:text-white"
                                  >
                                    {buttonText}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </Transition>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
        <Transition
          show={!isHideDropdown && isPC}
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
            onMouseLeave={() => {
              if (isPC) setActiveIndex(null);
            }}
          >
            <div className="w-full">
              {navItems.map((sideItems, nvIndex) => {
                if (activeSubItem !== sideItems.name) return <></>;
                const { subItems } = sideItems;
                return (
                  <div
                    key={nvIndex}
                    className="flex flex-row w-full gap-[24px]"
                  >
                    {/* sidebar */}
                    {/* customizedSidebar */}
                    {showSidebar && (
                      <>
                        <div className="w-full h-full flex flex-col flex-[6]">
                          {customizedSidebar === true ? (
                            <div
                              className="flex flex-row"
                              aria-label={getSingleText(
                                navItems[0].name,
                                navItems[0].nameCN
                              )}
                            >
                              <div
                                className="bg-[#EEEEEA]"
                                style={{
                                  width: "16px",
                                  marginRight: "8px",
                                }}
                              />
                              <div className="text-highlight-s">
                                {getSingleText(
                                  navItems[0].name,
                                  navItems[0].nameCN
                                )}
                              </div>
                            </div>
                          ) : (
                            <>
                              {navItems.map((sideItem, i) => {
                                const { name: sideName, nameCN } = sideItem;
                                const clicked = sideName === sideItems.name;
                                const display = getSingleText(sideName, nameCN);
                                return (
                                  <div
                                    key={i}
                                    className={`text-highlight-s py-2 cursor-pointer transition-all duration-300 ease-in-out ${
                                      clicked
                                        ? "bg-lightGrey px-4"
                                        : "hover:bg-gray-100 px-1"
                                    }`}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={display}
                                    onMouseEnter={() => {
                                      setActiveSubItem(sideName);
                                    }}
                                    onClick={() => {
                                      setActiveSubItem(sideName);
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") {
                                        setActiveSubItem(sideName);
                                      }
                                    }}
                                  >
                                    {display}
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
                      const onClick = (): void => {
                        if (navUrl) window.open(navUrl, "_self");
                      };
                      return (
                        <div
                          key={index}
                          className={`flex flex-col gap-2 flex-[5] ${
                            subTitle === "" ? "" : "cursor-pointer"
                          }`}
                          tabIndex={!navUrl ? undefined : 0}
                          role="button"
                          aria-label={getSingleText(subTitle, sub.subTitleCN)}
                          aria-disabled={subTitle === "" || !navUrl}
                          onClick={!navUrl ? undefined : onClick}
                          onKeyDown={
                            !navUrl
                              ? undefined
                              : (e) => {
                                  if (e.key === "Enter") {
                                    onClick();
                                  }
                                }
                          }
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
                                alt={getSingleText(subTitle, sub.subTitleCN)}
                              />
                            </div>
                          )}
                          <div className="w-full text-left text-body-s">
                            {getSingleText(subTitle, sub.subTitleCN)}
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
        <ExploreBar
          isMobileView={!isPC}
          isHidePCExploreBar={isHideExploreBar}
        />
        {isShowMobileExploreBarOutside && (
          <div className="mb-[24px]">{exploreContent}</div>
        )}
      </div>
    </ClickAwayListener>
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
