import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { type SubItems } from "../../components/Navigator";

type BreadcrumbProps = {
  eventItems: SubItems[];
};

const topicArray = [
  "All",
  "CEPA & Mainland Opportunities",
  "Chinese medicines",
  "Construction materials",
  "Consumer Products",
  "Environmental protection",
  "Food",
  "General Support",
  "Information & Communication Technologies",
  "Inspection",

  "Integrity &Professional Development",
  "Jewellery",
  "Medical",
  "Metrology, Accreditation & Standards",
  "Quality Management",
];

const yearArray = [
  "All",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
];

export const SeminarsWorkshopsContent: React.FC<BreadcrumbProps> = ({
  eventItems,
}) => {
  const [activeEventItems, setActiveEventItems] = useState<string>(
    eventItems?.[1]?.subTitle ?? ""
  );

  const [activeTopicButton, setActiveTopicButton] = useState<number>(0);
  const [activeYearButton, setActiveYearButton] = useState<number>(0);

  const seminarData: Array<{
    title: string;
    date: string;
    imagePath: string;
  }> = [
    {
      title:
        "Seminar on Environmental, Social and Governance (ESG) and Sustainability",
      date: "11 April 2024",
      imagePath: "Environmental.png",
    },
    {
      title:
        "Seminar on Construction Testing: Towards Digitalisation and Automation in Construction Testing",
      date: "29 February 2024",
      imagePath: "Construction.png",
    },
    {
      title: "Metrology Symposium 2023",
      date: "24 October 2023",
      imagePath: "Metrology.png",
    },
    {
      title:
        "Seminar on Integrity and Professional Development in Testing and Certification Industry",
      date: "18 September 2023",
      imagePath: "Integrity.png",
    },
    {
      title: "World Accreditation Day Forum 2023",
      date: "16 June 2023",
      imagePath: "Accreditation.png",
    },
    {
      title:
        "Webinar on Application of Automation and Technology in Construction Materials Testing",
      date: "28 February 2023",
      imagePath: "Webinar.png",
    },

    {
      title:
        "“Professional Integrity and Corruption Prevention in Testing and Certification” Webinar 2022",
      date: "30 August 2022",
      imagePath: "Professional.png",
    },

    {
      title: "Metrology Symposium 2022",
      date: "31 Jul 2023",
      imagePath: "Metrology_Symposium.png",
    },
    {
      title:
        "Webinar on Environmental, Social and Governance (ESG) and sustainability",
      date: "19 July 2022",
      imagePath: "Governance.png",
    },
  ];

  return (
    <div className="w-full grid grid-cols-[1fr,2fr] pt-[48px] gap-[24px] pr-[24px]">
      <div className="px-[24px]">
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l">Events</p>
          <div className="w-full flex flex-col gap-[24px] py-[24px]">
            {eventItems.map((item, index) => {
              const { subTitle, imgUrl } = item;
              if (subTitle === "") return null;

              const isActivated = activeEventItems === subTitle;
              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ease-in-out ${
                    isActivated
                      ? "bg-[#F2F2EF] border-[8px] border-[#F2F2EF]"
                      : "bg-transparent border-[0px] border-transparent"
                  }`}
                  onClick={() => {
                    setActiveEventItems(subTitle);
                  }}
                >
                  <div className="flex flex-row flex-start h-[106px] gap-[24px]">
                    <img
                      className="w-auto h-full object-contain"
                      src={process.env.PUBLIC_URL + "/assets/images/" + imgUrl}
                      alt={imgUrl}
                    />
                    <div className="text-highlight-m text-black py-[8px] pr-[16px]">
                      {subTitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-[12px] items-center">
          <div className="h-[15px] w-[15px] bg-black" />
          <p className="text-heading-l">Seminars and Workshops</p>
        </div>

        <div className="flex flex-row pb-[10px] pt-[24px] gap-[8px]">
          <p className="text-highlight-m">Topics</p>
          <Icon icon="icon-park-outline:up" className="h-[12px] w-[12px]" />
        </div>

        <div className="w-full flex flex-wrap gap-[8px] mb-[24px]">
          {topicArray.map((btn, index) => {
            const isActivated = index === activeTopicButton;
            return (
              <button
                key={index}
                className="p-2 transition-all duration-800 ease-in-out"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveTopicButton(index);
                }}
              >
                <p className="px-[12px] text-highlight-xs">{btn}</p>
              </button>
            );
          })}
        </div>

        <div className="flex flex-row pb-[10px] gap-[8px]">
          <p className="text-highlight-m">Years</p>
          <Icon icon="icon-park-outline:up" className="h-[12px] w-[12px]" />
        </div>

        <div className="w-full flex flex-wrap gap-[8px] mb-[24px]">
          {yearArray.map((btn, index) => {
            const isActivated = index === activeYearButton;
            return (
              <button
                key={index}
                className="p-2 transition-all duration-800 ease-in-out"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveYearButton(index);
                }}
              >
                <p className="px-[12px] text-highlight-xs">{btn}</p>
              </button>
            );
          })}
        </div>

        <div>
          {seminarData.map((item, index) => {
            const { title, imagePath, date } = item;
            return (
              <div
                key={index}
                className="grid grid-cols-2 justify-start group border-2 border-inherit h-[278px] mt-[24px] gap-[24px]"
              >
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/seminarsWorkshops/" +
                      imagePath
                    }
                    alt={title}
                  />
                </div>
                <div className="flex flex-col justify-center py-[24px] pr-[24px] gap-[24px]">
                  <div
                    className="text-heading-m text-start w-full 
                group-hover:text-darkNavy group-hover:underline transition-all duration-300 ease-in-out"
                  >
                    {title}
                  </div>
                  <div className="flex flex-row w-full mt-4 gap-2">
                    <Icon icon="material-symbols:date-range-rounded" />
                    <h2 className="text-body-m text-grey">{date}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center flex-row items-center py-[48px] gap-[9px]">
          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-highlight-l h-[48px] w-[48px]">
            <Icon icon="fluent:arrow-left-12-filled" />
          </button>
          <button
            style={activatedButtonStyle}
            className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-highlight-l h-[48px] w-[48px]"
          >
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-highlight-l h-[48px] w-[48px]">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-highlight-l h-[48px] w-[48px]">
            3
          </button>
          <span className="px-4 py-2 text-gray-600">...</span>
          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-highlight-l h-[48px] w-[48px]">
            <Icon icon="fluent:arrow-right-12-filled" />
          </button>
        </div>
      </div>
    </div>
  );
};

const normalButtonStyle: React.CSSProperties = {
  background: "white",
  color: "black",
  border: "1px solid #666666",
};

const activatedButtonStyle: React.CSSProperties = {
  background: "black",
  color: "white",
  border: "1px solid white",
};
