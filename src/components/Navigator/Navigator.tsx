import React, { useState } from 'react';
import { Icon } from '@iconify/react';


export const Navigator: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const navData = [
        {
            title: "About Us",
            items: [],
        },
        {
            title: "T&C Sector",
            items: [
                {
                    name: "Events",
                    subItems: [
                        {
                            subTitle: "T&C Manpower Development Award Scheme",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Seminars and Workshops",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Student Competitions",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "Publications",
                    subItems: [
                        {
                            subTitle: "HKCTC Newsletter",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Pamphlets And Booklets",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Comics",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Corruption Prevention Guide for T&C Industry",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Other Useful Information",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "Reports",
                    subItems: [
                        {
                            subTitle: "HKCTC Reports",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Legislative Council Papers",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "News and Videos",
                    subItems: [
                        {
                            subTitle: "Press Releases",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Videos",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                    ]
                },

            ]
        },
        {
            title: "Support",
            items: [
                {
                    name: "Events",
                    subItems: [
                        {
                            subTitle: "T&C Manpower Development Award Scheme",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Seminars and Workshops",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Student Competitions",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "Publications",
                    subItems: [
                        {
                            subTitle: "HKCTC Newsletter",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Pamphlets And Booklets",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Comics",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Corruption Prevention Guide for T&C Industry",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Other Useful Information",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "Reports",
                    subItems: [
                        {
                            subTitle: "HKCTC Reports",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Legislative Council Papers",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "News and Videos",
                    subItems: [
                        {
                            subTitle: "Press Releases",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Videos",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                    ]
                },

            ]
        },
        {
            title: "Career & Education",
            items: [
                {
                    name: "Events",
                    subItems: [
                        {
                            subTitle: "T&C Manpower Development Award Scheme",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Seminars and Workshops",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Student Competitions",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "Publications",
                    subItems: [
                        {
                            subTitle: "HKCTC Newsletter",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Pamphlets And Booklets",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Comics",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Corruption Prevention Guide for T&C Industry",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Other Useful Information",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "Reports",
                    subItems: [
                        {
                            subTitle: "HKCTC Reports",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Legislative Council Papers",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "News and Videos",
                    subItems: [
                        {
                            subTitle: "Press Releases",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Videos",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                    ]
                },

            ]
        },
        {
            title: "Events & Promotions",
            items: [
                {
                    name: "Events",
                    subItems: [
                        {
                            subTitle: "T&C Manpower Development Award Scheme",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Seminars and Workshops",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Student Competitions",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "Publications",
                    subItems: [
                        {
                            subTitle: "HKCTC Newsletter",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Pamphlets And Booklets",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Comics",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Corruption Prevention Guide for T&C Industry",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Other Useful Information",
                            imgUrl: "/icons/nav_event_3.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "Reports",
                    subItems: [
                        {
                            subTitle: "HKCTC Reports",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Legislative Council Papers",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                    ]
                },
                {
                    name: "News and Videos",
                    subItems: [
                        {
                            subTitle: "Press Releases",
                            imgUrl: "/icons/nav_event_1.svg",
                            navUrl: ""
                        },
                        {
                            subTitle: "Videos",
                            imgUrl: "/icons/nav_event_2.svg",
                            navUrl: ""
                        },
                    ]
                },

            ]
        },
        {
            title: "What's new",
            items: []
        }
    ]

    const isHideDropdown = activeIndex === null ? true : !navData[activeIndex]?.items.length;


    return (
        <nav>
            <div style={navStyle}>
                <div style={logoTextStyle}>
                    <span className='text-innovativeGreen'>HK</span>
                    <span className='text-reliableBlue'>CTC</span>
                </div>
                <div className='flex flex-row gap-8 pl-12'>
                    {navData.map((nav, index) => {
                        const { title, items } = nav;
                        const ifHideArrow: boolean = !items.length;
                        return (
                            <div key={index} className='flex flex-row items-center gap-2 cursor-pointer'
                                onMouseEnter={() => !ifHideArrow && setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}>
                                <p className='font-semibold text-sm'>{title}</p>
                                <Icon icon="oui:arrow-down" className="mt-1"
                                    style={{ strokeWidth: 3, display: ifHideArrow ? "none" : "block" }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            {!isHideDropdown && (<div style={getDropDownStyle(isHideDropdown)}>

            </div>)}
        </nav>
    );
};







const navStyle: React.CSSProperties = {
    background: 'white',
    color: 'black',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: "center",
    height: '80px',
    borderBottom: '1px solid #E0E0E0',
    paddingLeft: '2rem'
};

const getDropDownStyle = (isHideDropdown: boolean): React.CSSProperties => ({
    background: '#FFFFFF',
    color: 'black',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '194px',
    borderBottom: '1px solid #E0E0E0',
    paddingLeft: '2rem',
    zIndex: 10,
    borderRadius: '4px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    margin: '-8px 32px 0',
    transition: 'opacity 0.3s ease, visibility 0s 0.3s',
    opacity: isHideDropdown ? 0 : 1,
    visibility: isHideDropdown ? 'hidden' : 'visible',
    pointerEvents: isHideDropdown ? 'none' : 'auto',
});



const logoTextStyle: React.CSSProperties = {
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "42px",
    lineHeight: "51px",
    letterSpacing: "2px",
};


