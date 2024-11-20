import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Transition } from "@headlessui/react";

type NavData = {
  title: string;
  showSidebar: boolean;
  items: NavItems[];
};

type NavItems = {
  name: string;
  subItems: SubItems[];
};
type SubItems = {
  subTitle: string;
  imgUrl: string;
  navUrl?: string;
};

export const Navigator: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string>('');
  const navRef = useRef<HTMLDivElement | null>(null);


  const navData: NavData[] = [
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
              imgUrl: "nav_event_1_1.png",
              navUrl: "",
            },
            {
              subTitle: "Strengths of Hong Kong's T&C Sector",
              imgUrl: "nav_event_1_2.png",
              navUrl: "",
            },
            {
              subTitle: "Services Provided by T&C Sector",
              imgUrl: "nav_event_1_3.png",
              navUrl: "",
            },
            {
              subTitle: "Services for Different Business Areas",
              imgUrl: "nav_event_1_4.png",
              navUrl: "",
            },
            {
              subTitle: "Accreditation Services",
              imgUrl: "nav_event_1_5.png",
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
              subTitle: "Testing and Certification Sector Job Creation Scheme (TCJS)",
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
              navUrl: "",
            },
            {
              subTitle: "Seminars and Workshops",
              imgUrl: "nav_event_2.svg",
              navUrl: "",
            },
            {
              subTitle: "Student Competitions",
              imgUrl: "nav_event_3.svg",
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
          name: "Publications",
          subItems: [
            {
              subTitle: "HKCTC Newsletter",
              imgUrl: "nav_event_1.svg",
              navUrl: "",
            },
            {
              subTitle: "Pamphlets And Booklets",
              imgUrl: "nav_event_3.svg",
              navUrl: "",
            },
            {
              subTitle: "Comics",
              imgUrl: "nav_event_3.svg",
              navUrl: "",
            },
            {
              subTitle: "Corruption Prevention Guide for T&C Industry",
              imgUrl: "nav_event_3.svg",
              navUrl: "",
            },
            {
              subTitle: "Other Useful Information",
              imgUrl: "nav_event_3.svg",
              navUrl: "",
            },
          ],
        },
        {
          name: "Reports",
          subItems: [
            {
              subTitle: "HKCTC Reports",
              imgUrl: "nav_event_1.svg",
              navUrl: "",
            },
            {
              subTitle: "Legislative Council Papers ",
              imgUrl: "nav_event_3.svg",
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
              imgUrl: "nav_event_1.svg",
              navUrl: "",
            },
            {
              subTitle: "Advertorials",
              imgUrl: "nav_event_3.svg",
              navUrl: "",
            },
            {
              subTitle: "Videos",
              imgUrl: "nav_event_3.svg",
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
  const isHideDropdown = activeIndex === null ? true : !navItems.length;

  const sideItemRows = navItems?.length;
  console.log('sideItemRows', sideItemRows)
  console.log("navItems", navItems)
  return (
    <nav ref={navRef}>
      <div style={navStyle} >
        <div className="h-full flex items-center">
          <img src={process.env.PUBLIC_URL + "/assets/images/hkctc_logo.svg"} />
        </div>
        <div className="flex flex-row gap-8 ml-12 h-full">
          {navData.map((nav, index) => {
            const { title, items } = nav;
            const ifHideArrow: boolean = !items.length;
            return (
              <div
                key={index}
                className="flex flex-row items-center gap-2 cursor-pointer h-full"
                onClick={() => {
                  setActiveIndex(index)
                  setActiveSubItem(navData[index]?.items?.[0]?.name ?? '')
                }}
              >
                <p className={`text-sm ${activeIndex === index ? 'font-bold' : 'font-semibold'}`}>{title}</p>
                <Icon
                  icon="oui:arrow-down"
                  className="mt-1"
                  style={{
                    strokeWidth: 3,
                    display: ifHideArrow ? "none" : "block",
                  }}
                />
              </div>
            );
          })}
        </div>
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
          <div className="w-full mt-4">
            {navItems.map((sideItems, index) => {

              if (activeSubItem !== sideItems.name) return <></>;
              const { name: currentSideName, subItems } = sideItems;

              return (
                <div key={index} className="flex flex-row w-full gap-4">
                  {/* sidebar */}
                  {showSidebar && (
                    <div className="w-full h-full flex flex-col flex-[6]" >
                      {navItems.map((sideItem, index) => {
                        const { name: sideName } = sideItem;
                        const clicked = sideName === currentSideName;
                        return (
                          <div key={index}
                            className={`py-2 cursor-pointer transition-all duration-300 ease-in-out ${clicked ? 'bg-lightGrey font-bold px-4' : 'hover:bg-gray-100 px-1'
                              }`} onClick={() => {
                                setActiveSubItem(sideName)
                              }}>
                            {sideName}
                          </div>
                        )
                      })}
                    </div>
                  )}
                  {subItems.map((sub, index) => {
                    const { subTitle, imgUrl } = sub;

                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-2 flex-[5]"
                      >
                        <div className="flex justify-center items-center">
                          <img
                            className="w-full h-auto max-w-full"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/" +
                              imgUrl
                            }
                            alt={subTitle}
                          />
                        </div>
                        <div className="w-full text-left text-sm">
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
  );
};

const navStyle: React.CSSProperties = {
  background: "white",
  color: "black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "80px",
  borderBottom: "1px solid #E0E0E0",
  paddingLeft: "2rem",
};

const dropDownStyle: React.CSSProperties = {
  background: "#FFFFFF",
  color: "black",
  justifyContent: "center",
  alignItems: "center",
  height: "34vh",
  width: "96%",
  borderBottom: "1px solid #E0E0E0",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  zIndex: 10,
  borderRadius: "4px",
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  marginTop: "4px",
  marginLeft: "38px",
};
