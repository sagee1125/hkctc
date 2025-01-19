import React from "react";
import { EmailBox } from "../../components";

type EducationData = {
  title: string;
  description: string;
  imagePath: string;
  onClick?: () => void;
};
export const EducatorsStudentsContent: React.FC = () => {
  const careerData: Array<{
    title: string;
    imgUrl: string;
    onClick?: () => void;
  }> = [
    {
      title: "Career Talks and Fairs",
      imgUrl: "Career_Talks.png",
    },
    {
      title: "Laboratory Visits",
      imgUrl: "Career_Laboratory.png",
    },
    {
      title: "Summer Internships",
      imgUrl: "Career_Internships.png",
    },
  ];

  const educationData: EducationData[] = [
    {
      title: "Strengths of Hong Kong's T&C Sector",
      description:
        "Hong Kong's sound legal system, low tax rate and simple tax system, good law and order, and good language skills in general help foreign...",
      imagePath: "tc_1.png",
    },
    {
      title: "Services Provided by T&C Sector",
      description:
        "In general, the testing and certification (T&C) sector provides three types of services - Testing, Inspection and Certification.",
      imagePath: "Services.png",
    },
    {
      title: "Career Development",
      description:
        "Testing and certification play a crucial role in our daily life. They provide assurance on the quality and safety of products and services...",
      imagePath: "career_1.png",
    },
    {
      title: "About HKCTC",
      description:
        "Testing and certification play a crucial role in our daily life. They provide assurance on the quality and safety of products and services...",
      imagePath: "career_2.png",
    },
  ];
  return (
    <div
      className="w-full grid grid-cols-[1fr,2fr] gap-[24px]"
      style={{ marginTop: "24px", paddingLeft: "24px", paddingRight: "24px" }}
    >
      {/* Career Opportunities & Enquires */}

      <div className="flex flex-col">
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l">Career Opportunities</p>
          <div>
            {careerData.map((item, index) => {
              const { title, imgUrl } = item;
              return (
                <div
                  key={index}
                  className="flex flex-row items-start mt-[24px] gap-[24px]"
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
          <div className="py-[24px]">
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
      <div className="grid grid-cols-2 gap-[24px] pb-[48px]">
        {educationData.map((item, index) => {
          const { title, imagePath, description } = item;
          return (
            <div
              key={index}
              className="flex flex-col justify-start group border-2 border-inherit h-auto"
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
    </div>
  );
};
