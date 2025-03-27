import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { seminarsData } from "./seminarData";
import { seminarsAndWorkshopsList_CN } from "./SeminarArticlePage/seminarArticles";
import {
  activatedButtonStyle,
  normalButtonStyle,
  Link,
  SquareTitle,
  NormalAccordion,
  Paginator,
  handleGetPaginatorProp,
} from "../../../../components";
import { Language, useSettings } from "../../../../context";
import { RegistrationBox } from "./RegistrationBox";

const multilingual = {
  en: {
    title: "Seminars and Workshops",
    topics: "Topics",
    years: "Years",
    yearArray: [
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
    ],
  },
  cn: {
    title: "研討會與工作坊",
    topics: "主題類別",
    years: "年份",
    yearArray: [
      "全部",
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
    ],
  },
};

const itemsPerPage = 9;

const topicArray: Record<string, string> = {
  All: "全部",
  "CEPA & Mainland Opportunities": "CEPA 及在內地的發展機遇",
  "Chinese medicines": "中藥",
  "Construction materials": "建築材料",
  "Consumer Products": "消費品",
  "Environmental protection": "環保",
  Food: "食品",
  "General Support": "一般支援",
  "Information & Communication Technologies": "資訊及通訊科技",
  Inspection: "檢驗",
  "Integrity &Professional Development": "誠信及專業發展",
  Jewellery: "珠寶",
  Medical: "醫務化驗",
  "Metrology, Accreditation & Standards": "計量學、認可服務及標準",
  "Quality Management": "品質管理",
};

export const SeminarsWorkshops: React.FC = () => {
  const [activeTopicButton, setActiveTopicButton] = useState<number>(0);
  const [activeYearButton, setActiveYearButton] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { language, isPC, getPageText, getSingleText } = useSettings();
  const isEn = language === Language.EN;
  const page_text = getPageText(multilingual);

  const navigate = useNavigate();
  const { yearArray, title, topics, years } = page_text;
  const seminarsData_cn = seminarsData.map((item, i) => ({
    ...item,
    title: seminarsAndWorkshopsList_CN[i].title,
    date: seminarsAndWorkshopsList_CN[i].date,
  }));

  const seminarsProcessData = isEn ? seminarsData : seminarsData_cn;
  const displaySeminars = seminarsProcessData.filter((item) => {
    const activeYear = Object.values(yearArray as string[])[activeYearButton];
    const activeTopic = Object.keys(topicArray)[activeTopicButton];

    // Check if the item matches the active year
    const yearMatch =
      activeYear === (yearArray as string[])[0] ||
      String(item.year) === activeYear;

    // Check if the item matches the active topic
    const topicMatch = activeTopic === "All" || item.tag === activeTopic;

    console.log(activeTopic, item.tag, topicMatch);
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
      <SquareTitle title={title as string} />
      {!isPC && <RegistrationBox />}
      <div>
        <NormalAccordion
          title={topics as string}
          details={
            <div className="flex flex-wrap gap-[8px]">
              {Object.keys(topicArray).map((btn, index) => {
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
                    {getSingleText(btn, topicArray[btn])}
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      <div>
        <NormalAccordion
          title={years as string}
          details={
            <div className="w-full flex flex-wrap gap-[8px]">
              {(yearArray as string[]).map((btn, index) => {
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
                    {getSingleText(btn, btn)}
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
                    {getSingleText(title, title)}
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
