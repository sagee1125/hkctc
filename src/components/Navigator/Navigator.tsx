import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Transition } from "@headlessui/react";

type NavData = {
  title: string;
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
  //   const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const activeIndex = 1;
  const navData: NavData[] = [
    {
      title: "About Us",
      items: [],
    },
    {
      title: "T&C Sector",
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
      items: [
        {
          name: "Events",
          subItems: [
            {
              subTitle: "T&C Manpower Development Award Scheme",
              imgUrl: "nav_event_1.svg",
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
              imgUrl: "nav_event_2.svg",
              navUrl: "",
            },
            {
              subTitle: "Comics",
              imgUrl: "nav_event_3.svg",
              navUrl: "",
            },
            {
              subTitle: "Corruption Prevention Guide for T&C Industry",
              imgUrl: "nav_event_2.svg",
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
              subTitle: "Legislative Council Papers",
              imgUrl: "nav_event_2.svg",
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
              subTitle: "Videos",
              imgUrl: "nav_event_2.svg",
              navUrl: "",
            },
          ],
        },
      ],
    },
    {
      title: "Career & Education",
      items: [
        {
          name: "Events",
          subItems: [
            {
              subTitle: "T&C Manpower Development Award Scheme",
              imgUrl: "nav_event_1.svg",
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
              imgUrl: "nav_event_2.svg",
              navUrl: "",
            },
            {
              subTitle: "Comics",
              imgUrl: "nav_event_3.svg",
              navUrl: "",
            },
            {
              subTitle: "Corruption Prevention Guide for T&C Industry",
              imgUrl: "nav_event_2.svg",
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
              subTitle: "Legislative Council Papers",
              imgUrl: "nav_event_2.svg",
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
              subTitle: "Videos",
              imgUrl: "nav_event_2.svg",
              navUrl: "",
            },
          ],
        },
      ],
    },
    {
      title: "Events & Promotions",
      items: [
        {
          name: "Events",
          subItems: [
            {
              subTitle: "T&C Manpower Development Award Scheme",
              imgUrl: "nav_event_1.svg",
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
              subTitle: "Legislative Council Papers",
              imgUrl: "nav_event_2.svg",
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
              subTitle: "Videos",
              imgUrl: "nav_event_2.svg",
              navUrl: "",
            },
          ],
        },
      ],
    },
    {
      title: "What's new",
      items: [],
    },
  ];

  const navItems = navData[activeIndex]?.items;
  //   const isHideDropdown = activeIndex === null ? true : !navItems.length;

  const sideItemRows = navItems?.length;

  return (
    <nav>
      <div style={navStyle}>
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
                // onMouseEnter={() => !ifHideArrow && setActiveIndex(index)}
                // onMouseLeave={() => setActiveIndex(null)}
              >
                <p className="font-semibold text-sm">{title}</p>
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
        show={true}
        enter="transition-all duration-300 ease-out"
        enterFrom="opacity-0 transform scale-90"
        enterTo="opacity-100 transform scale-100"
        leave="transition-none"
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
              const { name, subItems } = sideItems;
              const needSideBarCol: number = sideItemRows > 1 ? 1 : 0;
              const totalCols = subItems.length + needSideBarCol;
              console.log("totalCols", totalCols); // 5
              return (
                <div key={index} className="flex flex-row w-full">
                  {subItems.map((sub, index) => {
                    const { subTitle, imgUrl } = sub;
                    const itemWidth = `${100 / totalCols}%`;

                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-2"
                        style={{ width: itemWidth }}
                      >
                        <div className="flex justify-center items-center">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/" +
                              imgUrl
                            }
                            alt={subTitle}
                          />
                        </div>
                        <div className="w-full text-center text-sm">
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "194px",
  width: "96%",
  overflow: "hidden",
  borderBottom: "1px solid #E0E0E0",
  paddingLeft: "2rem",
  zIndex: 10,
  borderRadius: "4px",
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  marginTop: "4px",
  marginLeft: "38px",
};
