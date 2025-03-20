import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { seminarsData } from "./seminarData";
import {
  activatedButtonStyle,
  normalButtonStyle,
  Link,
  SquareTitle,
  NormalAccordion,
  Paginator,
  handleGetPaginatorProp,
} from "../../../../components";
import { useSettings } from "../../../../context";
import { RegistrationBox } from "./RegistrationBox";

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

const itemsPerPage = 9;
export const SeminarsWorkshops: React.FC = () => {
  const [activeTopicButton, setActiveTopicButton] = useState<number>(0);
  const [activeYearButton, setActiveYearButton] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { isPC } = useSettings();

  const navigate = useNavigate();

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

  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    displaySeminars
  );

  return (
    <div className="w-full flex flex-col gap-[24px]">
      <SquareTitle title="Seminars and Workshops" />
      {!isPC && <RegistrationBox />}
      <div>
        <NormalAccordion
          title="Topics"
          details={
            <div className="flex flex-wrap gap-[8px]">
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
                      setCurrentPage(0);
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
                      setCurrentPage(0);
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
        {currentPageData.map((item) => {
          const { title, id, date, img } = item;
          return (
            <div
              key={id}
              className={`flex ${
                isPC ? "flex-row " : "flex-col-reverse"
              } w-full cursor-pointer gap-[24px] items-center`}
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                navigate(`/events-promotion?section=seminar_article#${id}`, {
                  replace: false,
                });
              }}
            >
              <div className="flex flex-col w-full justify-center">
                <div className="text-heading-m underline-offset-4 mb-[16px]">
                  <Link linkColor="#203136" breakAll={false}>
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
                  className={`${
                    isPC ? "h-[198px] w-auto" : "w-full h-auto"
                  } object-cover cursor-pointer`}
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

      <Paginator
        dataSet={displaySeminars}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </div>
  );
};
