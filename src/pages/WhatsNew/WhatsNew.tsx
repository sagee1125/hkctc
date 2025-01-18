import React from "react";
import {
  SquareTitle,
  Link,
  fullContainer,
  maxContainer,
} from "../../components";

export const WhatsNew: React.FC = () => {
  const whatsNewList = [
    {
      title:
        "Further liberalisation measures for testing and certification under CEPA",
      date: "9 Oct 2024",
      img: "whatsnew_1.png",
    },
    {
      title:
        "Report of the Hong Kong Council for Testing and Certification 2023-24 has been uploaded",
      date: "6 Aug 2024",
      img: "whatsnew_2.png",
    },
    {
      title: 'The eleventh "HKCTC Newsletter" has been issued',
      date: "29 May 2024",
      img: "whatsnew_3.png",
    },
    {
      title:
        "Statistics of the testing and certification activities in Hong Kong in 2022 have been uploaded",
      date: "16 Apr 2024",
      img: "whatsnew_4.png",
    },
    {
      title:
        "Recruit雜誌封面故事：檢測認證　衣食住行　專業把關 (Chinese version only)",
      date: "15 Mar 2024",
      img: "whatsnew_5.png",
    },
    {
      title: "“The BUD Fund - Easy BUD” has been launched",
      date: "16 Jun 2023",
      img: "whatsnew_6.png",
    },
  ];

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
    {
      title: "No.6",
      date: "11 April 2024",
    },
    {
      title: "No.5",
      date: "11 April 2024",
    },
  ];

  return (
    <div style={fullContainer}>
      <div style={maxContainer}>
        {" "}
        <div className="w-full px-[24px] mt-[48px] grid grid-cols-[2fr,1fr] gap-[24px]">
          <div className="w-full flex flex-col gap-[24px]">
            <SquareTitle title={"What’s New"} />
            {whatsNewList.map((item, index) => {
              const { img, title, date } = item;
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
                    src={`${process.env.PUBLIC_URL}/assets/whatsNewSection/${img}`}
                    alt={img}
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
                      src={`${process.env.PUBLIC_URL}/assets/whatsNewSection/Reports.png`}
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
