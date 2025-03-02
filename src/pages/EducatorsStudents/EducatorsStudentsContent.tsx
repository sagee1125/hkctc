import React from "react";
import { EmailBox } from "../../components";
import { useSettings } from "../../context";

type EducationData = {
  title: string;
  description: string;
  imagePath: string;
  link: string;
  onClick?: () => void;
};
export const EducatorsStudentsContent: React.FC = () => {
  const { isPC } = useSettings();

  const careerData: Array<{
    title: string;
    imgUrl: string;
    link: string;
    onClick?: () => void;
  }> = [
    {
      title: "Career Talks and Fairs",
      imgUrl: "Career_Talks.png",
      link: "/career_and_education?section=career_opportunities",
    },
    {
      title: "Laboratory Visits",
      imgUrl: "Career_Laboratory.png",
      link: "/career_and_education?section=career_opportunities",
    },
    {
      title: "Summer Internships",
      imgUrl: "Career_Internships.png",
      link: "/career_and_education?section=career_opportunities",
    },
  ];

  const educationData: EducationData[] = [
    {
      title: "Strengths of Hong Kong's T&C Industry",
      description:
        "Hong Kong's sound legal system, low tax rate and simple tax system, good law and order, and good language skills in general help foreign...",
      imagePath: "tc_1.png",
      link: "/tc-sector?section=tc_sector_strengths",
    },
    {
      title: "Services Provided by T&C Industry",
      description:
        "In general, the testing and certification (T&C) industry provides three types of services - Testing, Inspection and Certification.",
      imagePath: "Services.png",
      link: "/tc-sector?section=services_provided",
    },
    {
      title: "Career Development",
      description:
        "Testing and certification play a crucial role in our daily life. They provide assurance on the quality and safety of products and services...",
      imagePath: "career_1.png",
      link: "/career_and_education?section=career_development",
    },
    {
      title: "About HKCTC",
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
                  Continue to Read
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Career Opportunities & Enquires */}

      <div className="flex flex-col">
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l">Career Opportunities</p>
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
