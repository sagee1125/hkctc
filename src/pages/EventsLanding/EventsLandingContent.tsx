import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { type SubItems } from "../../components/Navigator";

type BreadcrumbProps = {
  eventItems: SubItems[];
};

const buttonArray = [
  "Two Tiers of Awards",
  "Benefits",
  "Eligibility",
  "Assessment Criteria",
  "Selection Process",
];

const questionCategories = [
  "General",
  "Testing and Certification Manpower Development Corporate Award",
  "Excellent Testing and Certification Professional Award",
];

export const EventsLandingContent: React.FC<BreadcrumbProps> = ({
  eventItems,
}) => {
  const [activeEventItems, setActiveEventItems] = useState<string>(
    eventItems?.[0]?.subTitle ?? ""
  );

  const [activeButton, setActiveButton] = useState<number>(0);
  const [questionCategoriesArray, setQuestionCategoriesArray] =
    useState<number>(0);

  const pastSchemes: Array<{
    title: string;
    imgUrl: string;
  }> = [
    {
      title: "T&C Manpower Development Award Scheme 2023-2024",
      imgUrl: "2023-2024.png",
    },
    {
      title: "T&C Manpower Development Award Scheme 2021-2022",
      imgUrl: "2021-2022.png",
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
          <p className="text-heading-l">
            Testing & Certificate Manpower Development Award Scheme
          </p>
        </div>
        <p className="text-body-m mt-[24px]">
          With a view to encouraging the testing and certification (T&C) bodies
          to invest in talent training and development, while also commending
          those T&C practitioners who has striven for continuous learning and
          professional development, and/or contributed to service quality
          improvement.
          <br />
          <br />
          The Hong Kong Council for Testing and Certification (HKCTC) launched
          the first “Testing and Certification Manpower Development Award
          Scheme” in 2021. Having regard to the favourable feedback from the T&C
          sector, HKCTC organised in 2023 again the Award Scheme (the 2023 - 24
          Award Scheme).
        </p>
        <hr className="my-[24px]" />
        <p className="text-heading-l pb-[24px]">Past Schemes</p>
        <div>
          {pastSchemes.map((scheme, index) => {
            const { title, imgUrl } = scheme;
            return (
              <div
                key={index}
                className="flex flex-row items-center h-[90px] gap-[24px] mb-[24px]"
              >
                <img
                  className="w-[130px] h-full object-contain"
                  src={
                    process.env.PUBLIC_URL + "/assets/eventsLanding/" + imgUrl
                  }
                  alt={imgUrl}
                />
                <div className="text-highlight-m text-black py-[8px] pr-[16px]">
                  {title}
                </div>
                <Icon
                  icon="teenyicons:right-outline"
                  style={{ height: "16px", width: "16px", strokeWidth: "2px" }}
                />
              </div>
            );
          })}
        </div>
        <hr className="my-[24px]" />
        <p className="text-heading-l pb-[24px]">
          I. Testing and Certification Manpower Development Corporate Award
        </p>
        <p className="text-body-m">
          This Award recognises accredited T&C bodies’ achievements in manpower
          and professional development of T&C practitioners.
        </p>
        <div className="flex flex-row gap-[8px] my-[24px]">
          {buttonArray.map((btn, index) => {
            const isActivated = index === activeButton;
            return (
              <button
                key={index}
                className="p-2 transition-all duration-800 ease-in-out"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveButton(index);
                }}
              >
                <p className="px-[12px] text-highlight-xs">{btn}</p>
              </button>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-2 gap-[24px] h-[218px]">
          <div className="border-2 border-inherit flex flex-col justify-center p-[24px] gap-[8px]">
            <div className="text-heading-s flex flex-row items-center gap-[8px]">
              <Icon
                icon="bxs:trophy"
                style={{ height: "24px", width: "24px" }}
              />
              Platinum Award
            </div>
            <p className="text-body-m">
              Those who have fulfilled 19 or more of the 24 Assessment Criteria,
              inclusive of at least two Criteria under each Area
            </p>
          </div>
          <div className="border-2 border-inherit flex flex-col justify-center p-[24px] gap-[8px]">
            <div className="text-heading-s flex flex-row items-center gap-[8px]">
              <Icon
                icon="bxs:trophy"
                style={{ color: "#EE9C22", height: "24px", width: "24px" }}
              />
              Gold Award
            </div>
            <p className="text-body-m">
              Those who have fulfilled 10 or more of the 24 Assessment Criteria,
              inclusive of at least two Criteria under each Area
            </p>
          </div>
        </div>

        <p className="text-heading-l py-[24px]">
          II. Excellent Testing and Certification Professional Award
        </p>
        <p className="text-body-m">
          This Award commends individual T&C practitioners who have demonstrated
          excellence in various aspects, including but not limited to the
          followings:
          <br />
          <li>
            Pursuing continuous learning and professional development by
            acquiring new skills, capabilities as well as relevant academic and
            professional qualifications after joining the T&C sector;
          </li>
          <li>
            Making outstanding contribution s to improving service quality or
            productivity; etc
          </li>
        </p>

        <div className="flex flex-row gap-[8px] my-[24px]">
          {buttonArray.map((btn, index) => {
            const isActivated = index === activeButton;
            return (
              <button
                key={index}
                className="p-2 transition-all duration-800 ease-in-out"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveButton(index);
                }}
              >
                <p className="px-[12px] text-highlight-xs">{btn}</p>
              </button>
            );
          })}
        </div>

        <div className="w-full grid grid-cols-2 gap-[24px] h-[218px]">
          <div className="border-2 border-inherit flex flex-col justify-center p-[24px] gap-[8px]">
            <div className="text-heading-s flex flex-row items-center gap-[8px]">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/eventsLanding/Professional_Icon.svg"
                }
                style={{ height: "24px", width: "24px" }}
              />
              Junior Professional
            </div>
            <p className="text-body-m">
              Open to T&C practitioners who have 1 year up to less than 6 years
              of T&C services in aggregate
            </p>
          </div>
          <div className="border-2 border-inherit flex flex-col justify-center p-[24px] gap-[8px]">
            <div className="text-heading-s flex flex-row items-center gap-[8px]">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/eventsLanding/Professional_Icon_2.svg"
                }
                style={{ height: "24px", width: "24px" }}
              />
              Senior Professional
            </div>
            <p className="text-body-m">
              Open to T&C practitioners who have 6 years up to less than 20
              years of T&C services in aggregate
            </p>
          </div>
        </div>
        <hr className="my-[24px]" />
        <p className="text-heading-l">Frequently Asked Questions</p>
        <div className="flex flex-row gap-[8px] my-[24px]">
          {questionCategories.map((btn, index) => {
            const isActivated = index === questionCategoriesArray;
            return (
              <button
                key={index}
                className="p-2 transition-all duration-800 ease-in-out"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setQuestionCategoriesArray(index);
                }}
              >
                <p className="px-[12px] text-highlight-xs">{btn}</p>
              </button>
            );
          })}
        </div>

        <div className="w-full flex flex-col gap-[8px] pb-[48px]">
          <div className="w-full flex flex-row justify-between p-[24px] border-2 border-inherit">
            <p>
              1. Is there any submission or processing fee for the Award Scheme?
            </p>
            <Icon icon="icon-park-outline:down" className="h-[16px] w-[16px]" />
          </div>
          <div className="w-full flex flex-row justify-between p-[24px] border-2 border-inherit">
            <p>
              2. Can we submit applications for both Testing and Certification
              Manpower Development Corporate Award and Excellent Testing and
              Certification Professional Award?
            </p>
            <Icon icon="icon-park-outline:down" className="h-[16px] w-[16px]" />
          </div>
          <div className="w-full flex flex-row justify-between p-[24px] border-2 border-inherit">
            <p>3. Is there a fixed number of awardees?</p>
            <Icon icon="icon-park-outline:down" className="h-[16px] w-[16px]" />
          </div>
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