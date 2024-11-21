import { Icon } from "@iconify/react";
import React from "react";
import { ReactComponent as Logo } from "../../logo/hkctc_logo.svg";

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
          <div className="flex flex-col gap-6">
            <Logo style={{ filter: "brightness(0) invert(1)" }} />
            <div className="flex flex-row gap-2">
              <Icon icon="mage:camera-2" className="h-8 w-8 text-white" />
              <Icon
                icon="fa6-brands:facebook-f"
                className="h-7 w-7 text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-[50px] flex px-8 items-center">
        <p className="text-white text-sm">
          {`Copyright © 2024 Hong Kong Council for Testing and Certification. All
          Rights Reserved`}
        </p>
      </div>
    </footer>
  );
};
