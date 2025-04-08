import React, { useEffect, useState } from "react";
import { Accordion, SquareTitle, VideoPlayer } from "../../../components";
import { Language, useSettings } from "../../../context";

const multilingual = {
  en: {
    title: "Learning and Teaching Resources",
    intro:
      "HKCTC attaches importance to promoting testing and certification to youngsters and students, and enhancing their awareness of the value created by testing and certification. To this end, HKCTC has produced different learning and teaching materials to help youngsters to acquire the knowledge of testing and certification and arouse their interest to the industry.",
    STEM_Teaching_Kit:
      "STEM Teaching Kit on Testing and Certification for Junior Secondary Students",
    innovation_and_technology:
      "The Innovation and Technology Commission and HKCTC have commissioned Hong Kong Baptist University to develop a STEM teaching kit for junior secondary students. The kit consists of six experiments, introducing some basic scientific knowledge and concepts about product testing and analysis. Through providing students with more practical opportunities, the kit aims to arouse students’ interest in STEM subjects while raising their awareness of the importance of testing to ensure the safety and quality of products commonly used in daily life. Schools are welcome to make use of the kit in class or extra-curricular activities.",
    experiment_intro: "Experiment Introduction Video",
    teaching_kit:
      "Teaching Kit on Chemical Testing for Senior Secondary Curriculum",
    teaching_kit_intro: `The Innovation and Technology Commission and HKCTC have commissioned Hong Kong Baptist University to develop a teaching kit for use by senior secondary Chemistry teachers. The kit consists of a total of six experiments, which introduces the basic chemical testing concepts. Through providing students with more practical opportunities, the kit aims to apprise students of the importance of testing and how it can help ensure the safety and quality of products commonly used in our daily life. Schools are welcome to make use of the kit in class or extra-curriculum activities.`,
    passing: `Passing Through the Maze: Learning Testing and Certification in Daily Life`,
    passing_intro: `Passing Through the Maze : Learning Testing and Certification in Daily Life is a Chinese comic book that tells the adventure of two young challengers, Samantha and Joe, who try to prove themselves by getting out of a maze unscathed. Through asking tough questions on testing and certification, the maze is not as harmless as it first appears...`,
    bottom: (
      <>
        If you want to come along and find out how fast you can beat the maze,
        click on the picture of the comic book.&nbsp;Or read the text version
        &nbsp;
        <a
          aria-label="link"
          href="https://www.hkctc.gov.hk/tc/doc/PassingThroughTheMaze_TextOnly.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          here
        </a>
        .
      </>
    ),
  },
  cn: {
    title: "學習及教學資源",
    intro:
      "香港檢測和認證局十分重視向年青人及學生推廣檢測認證，令他們了解到檢測認證的價值和重要性。為此，香港檢測和認證局特別製作了不同的學習及教學材料，以協助年青人掌握檢測和認證相關的知識，並提升他們對行業的興趣。",
    STEM_Teaching_Kit: "初中檢測認證STEM教學組件",
    innovation_and_technology:
      "創新科技署及香港檢測和認證局委託香港浸會大學，為初中學生開發了一套STEM教學組件。該教學組件一共有六個實驗，介紹一些關於產品測試和分析的基礎科學知識和概念。我們希望教學組件可提升學生對STEM學科的興趣，並透過提供更多實踐的機會，讓他們認識測試在確保生活中常用產品的安全及品質方面的重要性。我們歡迎學校於課堂及課外活動中採用教學組件。",
    experiment_intro: "實驗介紹影片",
    teaching_kit: "高中課程化學測試教學組件",
    teaching_kit_intro: `創新科技署及香港檢測和認證局委託香港浸會大學開發了一套教材套，供教授高中化學科的老師使用。該教材套包含一共六個實驗，目的介紹化學測試的基本概念。我們希望透過提供更多實踐的機會，向學生展示測試的重要性，讓他們明暸測試如何能協助確保為生活中常用產品的安全及品質。我們歡迎學校於課堂及課外活動中採用教材套。`,
    passing: `衝出迷宮：生活中的檢測認證`,
    passing_intro:
      "《衝出迷宮：生活中的檢測認證》是一本中文漫畫書，講述Samantha和阿祖兩位少年勇者如何安全闖出迷宮的成長歷險故事。迷宮提出檢測和認證範疇的問題，不易回答，安全過關並不是想像中的輕易...",
    bottom: (
      <>
        如果你也想來走一躺，並考驗你衝出迷宮的能力，請點選一下漫畫書封面。或點擊
        <a
          aria-label="link"
          href="https://www.hkctc.gov.hk/tc/doc/PassingThroughTheMaze_TextOnly.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          此處
        </a>
        閲讀文字版本。
      </>
    ),
  },
};

export const LearningTeachingResources: React.FC = () => {
  const [playVideoOneIndex, setPlayVideoOneIndex] = useState<number>(0);
  const [playVideoTwoIndex, setPlayVideoTwoIndex] = useState<number>(0);

  const scrollId = new URLSearchParams(window.location.search).get("scroll_id");

  const { getPageText, isPC, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);
  const {
    title,
    intro,
    STEM_Teaching_Kit,
    innovation_and_technology,
    experiment_intro,
    teaching_kit,
    teaching_kit_intro,
    passing,
    passing_intro,
    bottom,
  } = page_text;

  useEffect(() => {
    const element = document.getElementById(scrollId as string);

    if (scrollId && element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollId]);

  const downloadDataOne = [
    {
      title: "Download Teacher's Guide",
      titleCN: "下載教師指引",
      link: "https://www.hkctc.gov.hk/en/doc/STEM_Teaching_Kit_Teachers_Guide_Eng.pdf",
    },
    {
      title: "Download Student Laboratory Manual",
      titleCN: "下載學生實驗手冊",
      link: "https://www.hkctc.gov.hk/en/doc/STEM_Teaching_Kit_Student_Manual_Eng.pdf",
    },
  ];
  const downloadDataTwo = [
    {
      title: "Download Teachers' Guide",
      titleCN: "下載教師指引",
      link: "https://www.hkctc.gov.hk/en/doc/Teaching_Kit_Teachers_Guide_Eng.pdf",
    },
    {
      title: "Download Student Laboratory Manual",
      titleCN: "下載學生實驗手冊",
      link: "https://www.hkctc.gov.hk/en/doc/Teaching_Kit_Student_Manual_Eng.pdf",
    },
  ];

  const videoDataOne = [
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_1_Eng.mp4",
      urlCN: "https://www.hkctc.gov.hk/videos/tc/STEM_Module_1_Chi.mp4",
      thumbnail: "video1",
      title: "Analysis of Colorants in Food and Personal-Care Products",
      titleCN: "食品和個人護理產品中的著色劑分析",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_2_Eng.mp4",
      urlCN: "https://www.hkctc.gov.hk/videos/tc/STEM_Module_2_Chi.mp4",
      thumbnail: "video2",
      title: "Screening Test for Plastic Type of Plastic Products",
      titleCN: "塑料產品類型的篩選測試",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_3_Eng.mp4",
      urlCN: "https://www.hkctc.gov.hk/videos/tc/STEM_Module_3_Chi.mp4",
      thumbnail: "video3",
      title: "Analysis of Bacteria in Environmental Samples",
      titleCN: "環境樣品中的細菌分析",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_4_Eng.mp4",
      urlCN: "https://www.hkctc.gov.hk/videos/tc/STEM_Module_4_Chi.mp4",
      thumbnail: "video4",
      title: "Wine-Making and Analysis of Alcohol in Beverage",
      titleCN: "釀酒與飲料中酒精的分析",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_5_Eng.mp4",
      urlCN: "https://www.hkctc.gov.hk/videos/tc/STEM_Module_5_Chi.mp4",
      thumbnail: "video5",
      title: "Slime-Making and Analysis of Borax in Slime",
      titleCN: "「鬼口水」的製作和「鬼口水」中硼砂成份的分析",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/STEM_Module_6_Eng.mp4",
      urlCN: "https://www.hkctc.gov.hk/videos/tc/STEM_Module_6_Chi.mp4",
      thumbnail: "video6",
      title: "Solar Cell Fabrication and Testing on its Electrical Properties",
      titleCN: "太陽能電池的製造和電性能測試",
    },
  ];

  const videoDataTwo = [
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp01.mp4",
      urlCN:
        "https://www.hkctc.gov.hk/videos/tc/chemistryhkbueduhkitcDemo-Chtm_Exp01.mp4",
      thumbnail: "video11",
      title: "Determination of NO2 in Air: Air Pollutant Analysis",
      titleCN: "空氣中二氧化氮的測試",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp02.mp4",
      urlCN:
        "https://www.hkctc.gov.hk/videos/tc/chemistryhkbueduhkitcDemo-Chtm_Exp02.mp4",
      thumbnail: "video12",
      title: "Analysis of Copper in Wastewater",
      titleCN: "分析廢水的含銅量",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp03.mp4",
      urlCN:
        "https://www.hkctc.gov.hk/videos/tc/chemistryhkbueduhkitcDemo-Chtm_Exp03.mp4",
      thumbnail: "video13",
      title:
        "Determination of SO2 in Dried Food Using Optimized Monier-Williams Method",
      titleCN: "以優化「莫尼—威廉」法測試乾糧中的二氧化硫含量",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp04.mp4",
      urlCN:
        "https://www.hkctc.gov.hk/videos/tc/chemistryhkbueduhkitcDemo-Chtm_Exp04.mp4",
      thumbnail: "video14",
      title:
        "Is the Dairy Product Safe? Gold Nanoparticles as a Visual Detection Tool of Melamine",
      titleCN: "這乳製品安全嗎？使用金鈉米粒子「比色探針法」檢測三聚氰胺",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp05.mp4",
      urlCN:
        "https://www.hkctc.gov.hk/videos/tc/chemistryhkbueduhkitcDemo-Chtm_Exp05.mp4",
      thumbnail: "video15",
      title:
        "Differentiation of Chinese Herb Danshen from Other Similar Herbs Using Facile Test-Tube Scale Chemical Test Method",
      titleCN: "使用快速試管化學測試法分辨中國草藥丹參與其他類似的草藥",
    },
    {
      url: "https://www.hkctc.gov.hk/videos/en/chemistryhkbueduhkitcDemo-Ehtm_Exp06.mp4",
      urlCN:
        "https://www.hkctc.gov.hk/videos/tc/chemistryhkbueduhkitcDemo-Chtm_Exp06.mp4",
      thumbnail: "video16",
      title:
        "Determination of Vitamin C in Commercial Sample and Fresh Fruit Juice by Iodometric Titration",
      titleCN: "以碘滴定法測試維他命商品和鮮榨果汁的維他命C含量",
    },
  ];
  return (
    <div className="w-full">
      <SquareTitle title={title as string} />

      <p className="text-body-m my-[24px] text-justify">{intro as string}</p>

      <div id="STEM_Teaching_Kit" className="mb-[24px]">
        <Accordion
          title={STEM_Teaching_Kit as string}
          details={
            <div>
              <p className="text-body-m">
                {innovation_and_technology as string}
              </p>
              <div
                className={`grid grid-cols-${
                  isPC ? "3 gap-[24px]" : "1"
                }  py-[24px]`}
              >
                {downloadDataOne.map((down, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-[10px] py-[22px] px-[11px] cursor-pointer"
                    onClick={() => {
                      window.open(down.link, "_blank", "noopener");
                    }}
                    tabIndex={0}
                    role="button"
                  >
                    <img
                      className="w-[64px] h-[64px]"
                      src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                      alt={"file icon"}
                    />
                    <p className="text-highlight-l text-left">
                      {getSingleText(down.title, down.titleCN)}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-heading-l mb-[24px]">
                {experiment_intro as string}
              </p>
              {/* <img
            className="w-full h-auto"
            alt="Analysis of Colorants"
            src={`${process.env.PUBLIC_URL}/assets/careerEducation/Analysis_of_Colorants.png`}
          /> */}
              <div key={videoDataOne[playVideoOneIndex].thumbnail}>
                <VideoPlayer
                  videoLink={getSingleText(
                    videoDataOne[playVideoOneIndex].url,
                    videoDataOne[playVideoOneIndex].urlCN
                  )}
                  thumbnail={videoDataOne[playVideoOneIndex].thumbnail}
                />
              </div>
              <div
                className={`grid grid-cols-${
                  isPC ? "2" : "1"
                } gap-[22px] mt-[24px]`}
              >
                {videoDataOne.map((video, index) => {
                  const displayTitle = getSingleText(
                    video.title,
                    video.titleCN
                  );
                  return (
                    <div
                      key={index}
                      className={`w-full h-full flex flex-row items-start !text-body-s cursor-pointer ${
                        playVideoOneIndex === index
                          ? "bg-newPrimary text-white"
                          : "bg-whiteGrey text-black"
                      }`}
                      tabIndex={0}
                      role="button"
                      onClick={() => {
                        setPlayVideoOneIndex(index);
                      }}
                    >
                      <div className="w-[37px] text-center p-[10px]">{`0${
                        index + 1
                      }`}</div>
                      <img
                        className="w-[130px] h-full"
                        alt={video.thumbnail}
                        src={`${process.env.PUBLIC_URL}/assets/careerEducation/${video.thumbnail}.png`}
                      />
                      <div className="flex flex-grow p-[10px]">
                        {displayTitle.length > 48 && !isPC
                          ? displayTitle.slice(0, 48) + "..."
                          : displayTitle}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          }
        />
      </div>
      <div id="Teaching_Kit" className="mb-[24px]">
        <Accordion
          title={teaching_kit as string}
          details={
            <div>
              <p className="text-body-m">{teaching_kit_intro as string}</p>
              <div
                className={`grid grid-cols-${
                  isPC ? "3 gap-[24px]" : "1"
                }  py-[24px]`}
              >
                {downloadDataTwo.map((down, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-[10px] py-[22px] px-[11px] cursor-pointer"
                    onClick={() => {
                      window.open(down.link, "_blank", "noopener");
                    }}
                    tabIndex={0}
                    role="button"
                  >
                    <img
                      className="w-[64px] h-[64px]"
                      src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                      alt={"file icon"}
                    />
                    <p className="text-highlight-l text-left">
                      {getSingleText(down.title, down.titleCN)}
                    </p>
                  </div>
                ))}
              </div>
              {/* <img
            className="w-full h-auto"
            alt="Teaching Kit"
            src={`${process.env.PUBLIC_URL}/assets/careerEducation/Teaching_Ki.png`}
          /> */}
              <div key={videoDataTwo[playVideoTwoIndex].thumbnail}>
                <VideoPlayer
                  videoLink={getSingleText(
                    videoDataTwo[playVideoTwoIndex].url,
                    videoDataTwo[playVideoTwoIndex].urlCN
                  )}
                  thumbnail={videoDataTwo[playVideoTwoIndex].thumbnail}
                />
              </div>
              <div
                className={`grid grid-cols-${
                  isPC ? "2" : "1"
                } gap-[22px] mt-[24px]`}
              >
                {videoDataTwo.map((video, index) => {
                  const displayTitle = getSingleText(
                    video.title,
                    video.titleCN
                  );
                  return (
                    <div
                      key={index}
                      className={`w-full h-full flex flex-row items-start !text-body-s cursor-pointer ${
                        playVideoTwoIndex === index
                          ? "bg-newPrimary text-white"
                          : "bg-whiteGrey text-black"
                      }`}
                      onClick={() => {
                        setPlayVideoTwoIndex(index);
                      }}
                      tabIndex={0}
                      role="button"
                    >
                      <div className="w-[37px] text-center p-[10px]">{`0${
                        index + 1
                      }`}</div>
                      <img
                        className="w-[130px] h-full"
                        alt={video.thumbnail}
                        src={`${process.env.PUBLIC_URL}/assets/careerEducation/${video.thumbnail}.png`}
                      />
                      <div className="flex flex-grow p-[10px]">
                        {displayTitle.length > 46 && !isPC
                          ? displayTitle.slice(0, 46) + "..."
                          : displayTitle}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          }
        />
      </div>

      <div className="mb-[24px]">
        <Accordion
          title={passing as string}
          details={
            <div>
              <p className="text-body-m mb-[24px]">{passing_intro as string}</p>
              <img
                className="w-full h-auto cursor-pointer"
                alt="Maze"
                src={`${process.env.PUBLIC_URL}/assets/careerEducation/Maze.png`}
                onClick={() => {
                  window.open(
                    "https://www.hkctc.gov.hk/tc/doc/PassingThroughTheMaze.pdf",
                    "_blank",
                    "noopener"
                  );
                }}
                tabIndex={0}
                role="button"
              />
              <p className="text-body-m mt-[24px] text-justify">
                {bottom as React.ReactNode}
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};
