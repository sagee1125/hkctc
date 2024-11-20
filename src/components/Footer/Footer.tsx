import { Icon } from "@iconify/react";
import React from "react";

type FooterData = {
  title: string;
  subs: Array<{
    label: string;
    link: string;
  }>;
};

export const Footer: React.FC = () => {
  const footerData: FooterData[] = [
    {
      title: "About This Site",
      subs: [
        {
          label: "Important Notices",
          link: "",
        },
        {
          label: "Accessibility",
          link: "",
        },
        {
          label: "Privacy Policy",
          link: "",
        },
        {
          label: "Contact Us",
          link: "",
        },
      ],
    },
    {
      title: "Sitemap",
      subs: [
        {
          label: "About Us",
          link: "",
        },
        {
          label: "Our Sector",
          link: "",
        },
        {
          label: "Support",
          link: "",
        },
        {
          label: "Career & Education",
          link: "",
        },
        {
          label: "Events & Publications",
          link: "",
        },
        {
          label: `What's new`,
          link: "",
        },
      ],
    },
    {
      title: "Related site",
      subs: [
        {
          label: "Government",
          link: "",
        },
        {
          label: "Public Organisations",
          link: "",
        },
        {
          label: "Trade Associations / Professional Bodies",
          link: "",
        },
        {
          label: "Mainland Organisations",
          link: "",
        },
      ],
    },
  ];

  return (
    <footer>
      <div className="bg-primary h-[360px] text-white p-8">
        <div className="grid grid-cols-[3fr,3fr,5fr,5fr] gap-4">
          {footerData.map((col, index) => (
            <div key={index} className="flex flex-col">
              <b className="text-2xl text-bold ml-1">{col.title}</b>
              <hr className="bg-white w-[77px] h-[4px] my-4 ml-1" />
              {col.subs.map((sub, index) => (
                <div
                  key={index}
                  className="py-1 flex flex-row items-center text-base"
                >
                  <Icon
                    icon="weui:arrow-outlined"
                    className="h-5 w-5 mr-2 text-white"
                  />
                  {sub.label}
                </div>
              ))}
            </div>
          ))}
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/hkctc_logo.svg"}
              alt="Footer Logo"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        </div>
      </div>
      <div className="bg-black h-[50px] flex px-8 items-center">
        <p className="text-white text-sm">
          Copyright © 2024 Hong Kong Council for Testing and Certification. All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};
