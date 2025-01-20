import React from "react";
import {
  SquareTitle,
  Link,
  fullContainer,
  maxContainer,
} from "../../components";
import { WhatsNewConfiguration } from "../../const";

export const WhatsNew: React.FC = () => {
  const newsletterList = [
    {
      title: "No.12",
      date: "Dec 2024",
      // img: "Reports.png",
    },
    {
      title: "No.11",
      date: "May 2024",
    },
    {
      title: "No.10",
      date: "6 Aug 2024",
    },
    {
      title: "No.9",
      date: "11 April 2024",
    },
    {
      title: "No.8",
      date: "11 April 2024",
    },
    {
      title: "No.7",
      date: "6 Aug 2024",
    },
  ];

  return (
    <div style={fullContainer}>
      <div style={maxContainer}>
        {" "}
        <div className="w-full px-[24px] mt-[48px] grid grid-cols-[2fr,1fr] gap-[24px]">
          <div className="w-full flex flex-col gap-[24px]">
            <SquareTitle title={"What’s New"} />
            {WhatsNewConfiguration.map((item, index) => {
              const { imagePath, title, date } = item;
              return (
                <div key={index} className="flex flex-row items-center w-full">
                  <div className="w-full">
                    <div className="text-heading-m mb-[16px]">
                      <Link linkColor="darkInk">{title}</Link>
                    </div>
                    <div className="flex flex-row items-center">
                      <img
                        className="w-[16px] h-[16px]"
                        src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                        alt={"calendar"}
                      />
                      <span className="text-grey ml-[8px]">{date}</span>
                    </div>
                  </div>
                  <img
                    className="border-2 border-inherit w-[278px] h-full object-cover"
                    src={`${process.env.PUBLIC_URL}/assets/whatsNew/${imagePath}`}
                    alt={imagePath}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <div className="border-2 border-inherit p-[24px] flex flex-col gap-[24px]">
              <p className="text-heading-l">Newsletter</p>
              {newsletterList.map((item, index) => {
                const { title, date } = item;
                return (
                  <div className="flex flex-row gap-[24px]" key={index}>
                    <img
                      className="border-2 border-inherit w-[160px] h-full object-cover"
                      src={`${process.env.PUBLIC_URL}/assets/whatsNew/Reports.png`}
                      alt={"Report.png"}
                    />
                    <div className="flex flex-col">
                      <div className="text-highlight-m">{title}</div>
                      <div className="flex flex-row items-center">
                        <img
                          className="w-[16px] h-[16px]"
                          src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                          alt={"calendar"}
                        />
                        <span className="text-grey ml-[8px]">{date}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="text-links underline text-right w-full cursor-pointer">
                See more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
