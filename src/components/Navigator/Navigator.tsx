import React, { Fragment, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Transition, Menu } from "@headlessui/react";
import { ReactComponent as Logo } from "../../logo/hkctc_logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { ExploreBar } from "./ExploreBar";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export type NavData = {
  title: string;
  showSidebar: boolean;
  onClick?: () => void;
  items: NavItems[];
};

export type NavItems = {
  name: string;
  subItems: SubItems[];
};
export type SubItems = {
  subTitle: string;
  imgUrl: string;
  navUrl?: string;
};

export const navData: NavData[] = [
  {
    title: "About Us",
    showSidebar: false,
    items: [],
  },
  {
    title: "T&C Sector",
    showSidebar: true,
    items: [
      {
        name: "Introducing the Testing and Certificate sector, and what service we can provide",
        subItems: [
          {
            subTitle: "Profile and Role of T&C Sector",
            imgUrl: "Profile_and_Role.png",
            navUrl: "profile-and-role",
          },
          {
            subTitle: "Strengths of Hong Kong's T&C Sector",
            imgUrl: "Strengths.png",
            navUrl: "",
          },
          {
            subTitle: "Services Provided by T&C Sector",
            imgUrl: "Services_Provided.png",
            navUrl: "",
          },
          {
            subTitle: "Services for Different Business Areas",
            imgUrl: "Business_Areas.png",
            navUrl: "",
          },
          {
            subTitle: "Accreditation Services",
            imgUrl: "Accreditation_Services.png",
            navUrl: "",
          },
        ],
      },
    ],
  },
  {
    title: "Support",
    showSidebar: false,
    items: [
      {
        name: "Events",
        subItems: [
          {
            subTitle: "HKCTC Exhibition Programme",
            imgUrl: "nav_event_2_1.png",
            navUrl: "",
          },
          {
            subTitle: "Funding Schemes",
            imgUrl: "nav_event_2_2.png",
            navUrl: "",
          },
          {
            subTitle:
              "Testing and Certification Sector Job Creation Scheme (TCJS)",
            imgUrl: "nav_event_2_3.png",
            navUrl: "",
          },
          {
            subTitle: "Accommodation and Land",
            imgUrl: "nav_event_2_4.png",
            navUrl: "",
          },
          {
            subTitle: "Entering into the Mainland Market",
            imgUrl: "nav_event_2_5.png",
            navUrl: "",
          },
          {
            subTitle: "Other Support",
            imgUrl: "nav_event_2_6.png",
            navUrl: "",
          },
        ],
      },
    ],
  },
  {
    title: "Career & Education",
    showSidebar: true,
    items: [
      {
        name: "Careers",
        subItems: [
          {
            subTitle: "Career Development",
            imgUrl: "Career_Development.png",
            navUrl: "",
          },
          {
            subTitle: "Career Opportunities",
            imgUrl: "Career_Opportunities.png",
            navUrl: "",
          },
          {
            subTitle: "Other Professional Schemes",
            imgUrl: "Other_Professional_Schemes.png",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
        ],
      },
      {
        name: "Education & Training",
        subItems: [
          {
            subTitle: "Programmes and Courses",
            imgUrl: "Programmes_and_Courses.png",
            navUrl: "",
          },
          {
            subTitle: "Learning and Teaching Resources",
            imgUrl: "Learning_and_Teaching_Resources.png",
            navUrl: "",
          },
          {
            subTitle: "Qualifications Framework",
            imgUrl: "Qualifications_Framework.png",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
        ],
      },
    ],
  },
  {
    title: "Events & Promotions",
    showSidebar: true,
    items: [
      {
        name: "Events",
        subItems: [
          {
            subTitle: "T&C Manpower Development Award Scheme",
            imgUrl: "Manpower_Development.png",
            navUrl: "events-landing",
          },
          {
            subTitle: "Seminars and Workshops",
            imgUrl: "Seminars_Workshops.png",
            navUrl: "seminars-workshops",
          },
          {
            subTitle: "Student Competitions",
            imgUrl: "Student_Competitions.png",
            navUrl: "student-competitions",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
        ],
      },
      {
        name: "Publications",
        subItems: [
          {
            subTitle: "HKCTC Newsletter",
            imgUrl: "HKCTC_Newsletter.png",
            navUrl: "",
          },
          {
            subTitle: "Pamphlets And Booklets",
            imgUrl: "Pamphlets_And_Booklets.png",
            navUrl: "",
          },
          {
            subTitle: "Comics",
            imgUrl: "Comics.png",
            navUrl: "",
          },
          {
            subTitle: "Corruption Prevention Guide for T&C Industry",
            imgUrl: "Corruption_Prevention.png",
            navUrl: "",
          },
          {
            subTitle: "Other Useful Information",
            imgUrl: "Other_Useful.png",
            navUrl: "",
          },
        ],
      },
      {
        name: "Reports",
        subItems: [
          {
            subTitle: "HKCTC Reports",
            imgUrl: "HKCTC_Reports.png",
            navUrl: "",
          },
          {
            subTitle: "Legislative Council Papers ",
            imgUrl: "Legislative_Council_Papers.png",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
        ],
      },
      {
        name: "News and Videos",
        subItems: [
          {
            subTitle: "Press Releases",
            imgUrl: "Press_Releases.png",
            navUrl: "",
          },
          {
            subTitle: "Advertorials",
            imgUrl: "Advertorials.png",
            navUrl: "",
          },
          {
            subTitle: "Videos",
            imgUrl: "video.png",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
        ],
      },
    ],
  },
  {
    title: "What's new",
    showSidebar: false,
    items: [],
  },
];

const hideExploreBar = [
  "/events-landing",
  "/events-landing/award-scheme",
  "/resources-reports",
  "/profile-and-role",
  "/seminars-workshops",
  "/student-competitions",
];
export const Navigator: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // nav
  const [activeSubItem, setActiveSubItem] = useState<string>("");
  const [selectedExploreOption, setSelectedExploreOption] =
    useState<string>("");

  const navRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const isHideExploreBar = hideExploreBar.includes(currentPath);

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

  const navItems = activeIndex ? navData[activeIndex]?.items : []; // sidebar in dropdown nav

  const showSidebar = activeIndex ? navData[activeIndex]?.showSidebar : false;
  const customizedSidebar = activeIndex
    ? navData[activeIndex]?.items?.length === 1
    : false;
  const isHideDropdown = activeIndex === null ? true : !navItems.length;
  const sideItemRows = navItems?.length;
  console.log("sideItemRows", sideItemRows);
  console.log("navItems", navItems);

  const exploreOption: Array<{ title: string; onClick: () => void }> = [
    {
      title: "General Public",
      onClick: () => {
        navigate("general-public");
      },
    },
    {
      title: "Educators & Students",
      onClick: () => {
        navigate("educators-students");
      },
    },
    {
      title: "T&C Bodies & Practitioners",
      onClick: () => {
        navigate("industry");
      },
    },
    {
      title: "T&C Service Users",
      onClick: () => {
        navigate("service-users");
      },
    },
  ];
  return (
    <>
      <nav
        ref={navRef}
        style={{
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <div className="flex flex-row w-full justify-between items-center">
          <div style={navStyle}>
            <div className="flex items-center h-[54px] w-[141px]">
              <Logo
                className="h-[54px] w-[141px] cursor-pointer"
                onClick={() => {
                  window.location.href = "/hkctc";
                }}
              />
            </div>
            <div className="pl-[32px]">
              <div className="flex flex-row gap-[26px] h-full">
                {navData.map((nav, index) => {
                  const { title, items } = nav;
                  const ifHideArrow: boolean = !items.length;
                  return (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-[6px] cursor-pointer h-full"
                      onClick={() => {
                        setActiveIndex(index);
                        setActiveSubItem(
                          navData[index]?.items?.[0]?.name ?? ""
                        );
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
          </div>
          {isHideExploreBar && (
            <div className="flex flex-row items-center gap-[8px] pr-[24px]">
              <p className="text-highlight-s">Explore as</p>
              <div className="min-w-[200px]">
                <Menu
                  as="div"
                  className="relative inline-block text-left w-full"
                >
                  {({ open }) => (
                    <>
                      <Menu.Button className="inline-flex w-full justify-between items-center border border-gray-300 py-[8px] px-[16px] bg-newPrimary text-body-m text-white">
                        <p>{selectedExploreOption}</p>
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
                                    item.onClick();
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
          show={!isHideDropdown}
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
      </nav>
      {!isHideExploreBar && <ExploreBar />}
    </>
  );
};

const navStyle: React.CSSProperties = {
  background: "white",
  color: "black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "90px",
  paddingLeft: "2rem",
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
