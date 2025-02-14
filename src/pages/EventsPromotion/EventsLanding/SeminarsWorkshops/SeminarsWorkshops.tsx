import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { seminarsData } from "./seminarData";
import {
  activatedButtonStyle,
  normalButtonStyle,
  Link,
  SquareTitle,
  NormalAccordion,
} from "../../../../components";

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

export const SeminarsWorkshops: React.FC = () => {
  const [activeTopicButton, setActiveTopicButton] = useState<number>(0);
  const [activeYearButton, setActiveYearButton] = useState<number>(0);

  const displaySeminars = seminarsData.filter((item) => {
    const activeYear = yearArray[activeYearButton];
    const activeTopic = topicArray[activeTopicButton];

    // Check if the item matches the active year
    const yearMatch = activeYear === "All" || String(item.year) === activeYear;

    // Check if the item matches the active topic
    const topicMatch = activeTopic === "All" || item.tag === activeTopic;

    // Return true if both conditions are met
    return yearMatch && topicMatch;
  });

  return (
    <div className="w-full flex flex-col gap-[24px]">
      <SquareTitle title="Seminars and Workshops" />
      <div>
        <NormalAccordion
          title="Topics"
          details={
            <div className="flex flex-row flex-wrap gap-[8px]">
              {topicArray.map((btn, index) => {
                const isActivated = index === activeTopicButton;
                return (
                  <button
                    key={index}
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveTopicButton(index);
                    }}
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      <div>
        <NormalAccordion
          title="Years"
          details={
            <div className="w-full flex flex-wrap gap-[8px]">
              {yearArray.map((btn, index) => {
                const isActivated = index === activeYearButton;
                return (
                  <button
                    key={index}
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveYearButton(index);
                    }}
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      <div className="flex flex-col gap-[24px]">
        {displaySeminars.map((item) => {
          const { title, id, date, img } = item;
          return (
            <div key={id} className="flex flex-row w-full">
              <div className="flex flex-col w-full justify-center">
                <div className="text-heading-m underline-offset-4 mb-[16px]">
                  <Link
                    linkColor="#203136"
                    innerLink="/events-promotion?section=seminar_article"
                  >
                    {title}
                  </Link>
                </div>
                <div className="flex flex-row items-center">
                  <img
                    className="w-[16px] h-[16px] mr-[8px]"
                    src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                    alt={date}
                  />
                  <span>{date}</span>
                </div>
              </div>
              {img && (
                <img
                  className="h-[198px] w-auto object-fit"
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/eventsLanding/seminarsWorkshops/${img}`
                  }
                  alt="Role1"
                />
              )}
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
  );
};
