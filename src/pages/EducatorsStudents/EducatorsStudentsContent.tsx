import React from "react";
import { EmailBox } from "../../components";
import { Language, useSettings } from "../../context";
import { navItemEnum } from "../../const";

type EducationData = {
  title: string;
  description: string;
  imagePath: string;
  link: string;
  onClick?: () => void;
};

const multilingual = {
  en: {
    career_opportunities: "Career Opportunities",
    career_fairs: "Career Talks and Fairs",
    laboratory_visits: "Laboratory Visits",
    summer_internship: "Summer Internships",
    tc_sector_strengths: "Strengths of Hong Kong's T&C Industry",
    services_provided: "Services Provided by T&C Industry",
    career_development: "Career Development",
    about: "About HKCTC",
    continue_read: "Continue to Read",
  },
  cn: {
    career_opportunities: "就業機會",
    career_fairs: "職業講座和展覽",
    laboratory_visits: "實驗所參觀",
    summer_internship: "暑期實習",
    tc_sector_strengths: "香港檢測認證業的優勢",
    services_provided: "檢測認證業提供的服務",
    career_development: "職業發展",
    about: "關於我們",
    continue_read: "Continue to Read",
  },
};

export const EducatorsStudentsContent: React.FC = () => {
  const { language, isPC } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;
  const {
    career_opportunities,
    career_fairs,
    laboratory_visits,
    summer_internship,
    tc_sector_strengths,
    services_provided,
    career_development,
    about,
    continue_read,
  } = page_text;

  const careerData: Array<{
    title: string;
    imgUrl: string;
    link: string;
    onClick?: () => void;
  }> = [
    {
      title: career_fairs,
      imgUrl: "Career_Talks.png",
      link: "/career_and_education?section=career_opportunities",
    },
    {
      title: laboratory_visits,
      imgUrl: "Career_Laboratory.png",
      link: "/career_and_education?section=career_opportunities",
    },
    {
      title: summer_internship,
      imgUrl: "Career_Internships.png",
      link: "/career_and_education?section=career_opportunities",
    },
  ];

  const educationData: EducationData[] = [
    {
      title: tc_sector_strengths,
      description:
        "Hong Kong's sound legal system, low tax rate and simple tax system, good law and order, and good language skills in general help foreign...",
      imagePath: "tc_1.png",
      link: `/tc-sector?section=${navItemEnum.tc_sector_strengths}`,
    },
    {
      title: services_provided,
      description:
        "In general, the testing and certification (T&C) industry provides three types of services - Testing, Inspection and Certification.",
      imagePath: "Services.png",
      link: `/tc-sector?section=${navItemEnum.services_provided}`,
    },
    {
      title: career_development,
      description:
        "Testing and certification play a crucial role in our daily life. They provide assurance on the quality and safety of products and services...",
      imagePath: "career_1.png",
      link: `/career_and_education?section=${navItemEnum.career_development}`,
    },
    {
      title: about,
      description:
        "The Hong Kong Council for Testing and Certification (HKCTC) was established in September 2009 to advise the Government on...",
      imagePath: "career_2.png",
      link: "/about-us",
    },
  ];
  return (
    <div
      className={`w-full ${
        isPC ? "grid grid-cols-[2fr,1fr]" : "flex flex-col-reverse"
      } gap-[24px] pb-[48px]`}
      style={{ marginTop: "24px", paddingLeft: "24px", paddingRight: "24px" }}
    >
      <div className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px] `}>
        {educationData.map((item, index) => {
          const { title, imagePath, description, link } = item;
          return (
            <div
              key={index}
              className="flex flex-col justify-start group border-2 border-inherit h-auto cursor-pointer"
              onClick={() => {
                window.open(link);
              }}
            >
              <div className="relative flex justify-start items-center w-full h-[295px] overflow-hidden">
                <img
                  className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/educatorsStudents/" +
                    imagePath
                  }
                  alt={title}
                />
              </div>
              <div className="flex flex-col justify-center py-[24px] px-[16px] gap-[24px]">
                <div
                  className="text-heading-m text-center w-full 
                group-hover:text-darkNavy group-hover:underline transition-all duration-300 ease-in-out"
                >
                  {title}
                </div>
                <hr />
                <div
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "22px",
                    textAlign: "center",
                    paddingBottom: "24px",
                  }}
                >
                  {description}
                </div>
                <div className="text-highlight-m text-[#A7AAAD] text-center">
                  {continue_read}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Career Opportunities & Enquires */}

      <div className="flex flex-col">
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l">{career_opportunities}</p>
          <div>
            {careerData.map((item, index) => {
              const { title, imgUrl, link } = item;
              return (
                <div
                  key={index}
                  className="flex flex-row items-start mt-[24px] gap-[24px] cursor-pointer"
                  onClick={() => {
                    window.open(link);
                  }}
                >
                  <img
                    className="w-[130px] h-auto"
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/educatorsStudents/${imgUrl}`
                    }
                    alt={title}
                  />
                  <p className="text-highlight-l">{title}</p>
                </div>
              );
            })}
          </div>
          <div
            className="py-[24px] cursor-pointer"
            onClick={() => {
              window.open("/events-promotion?section=comics");
            }}
          >
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/educatorsStudents/Career_Charlie.png)`,
                display: "flex",
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                position: "relative",
                height: "134px",
              }}
            />
          </div>
          <hr className="pb-[24px]" />
          <EmailBox />
        </div>
      </div>
    </div>
  );
};
