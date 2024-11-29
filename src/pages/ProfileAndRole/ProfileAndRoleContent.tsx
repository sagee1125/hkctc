import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { type SubItems } from "../../components/Navigator";
import {
  activatedButtonStyle,
  normalButtonStyle,
} from "../EventsLanding/EventsLandingContent";

type BreadcrumbProps = {
  eventItems: SubItems[];
};

export const ProfileAndRoleContent: React.FC<BreadcrumbProps> = ({
  eventItems,
}) => {
  const [activeEventItems, setActiveEventItems] = useState<string>(
    eventItems?.[0]?.subTitle ?? ""
  );

  const [activeTopicButton, setActiveTopicButton] = useState<number>(0);

  const buttonArray = [
    "institutions and employees engagement",
    "independent institutional units",
    "Business income of private independent institution",
    "Business Statistics",
  ];

  const listOfData: Array<{
    title: string;
    imagePath: string;
    date?: string;
  }> = [
    {
      title: "Statistics of Testing and Certification Activities in Hong Kong",
      imagePath: "Statistics.png",
      date: "May 2024",
    },
    {
      title: "Key Data available from 2009 - 2022",
      imagePath: "KeyData.png",
    },
  ];

  return (
    <div className="w-full grid grid-cols-[1fr,2fr] pt-[48px] gap-[24px] pr-[24px]">
      <div className="px-[24px]">
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l">T&C Sector</p>
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
          <p className="text-heading-l">Profile of the Sector</p>
        </div>
        <div className="bg-[#EEEEEA] my-[24px]">
          <div className="px-[42px] py-[36px]">
            <p className="text-body-m">
              The total business receipts of the private independent
              establishments in the testing and certification (T&C) sector were
              $24.9 billion.
            </p>
            <p
              className="italic mt-[16px]"
              style={{
                lineHeight: "20px",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              - Statistics provided by the Census and Statistics Department,
              2022
            </p>
          </div>
        </div>
        <p className="text-body-m py-[24px]">
          The economic contribution to Hong Kong's GDP was $10.9 billion. As for
          employment, the total number of persons engaged in these private
          independent establishments was about 15 060.
          <br />
          <br />
          In the same year, there were about 850 private independent
          establishments in the T&C sector. The vast majority (around 94% or 800
          establishments) of these were small and medium enterprises engaging
          less than 50 persons. They accounted for 37% of the total persons
          engaged and 30% of the total business receipts in the sector.
        </p>
        <div className="flex flex-wrap gap-[8px]">
          {buttonArray.map((btn, index) => {
            const isActivated = index === activeTopicButton;
            return (
              <button
                key={index}
                className="p-2 transition-all duration-800 ease-in-out whitespace-nowrap"
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
        <hr className="my-[24px]" />

        <div className="w-full flex flex-col gap-[24px] mb-[24px]">
          <img
            className="object-fit"
            src={process.env.PUBLIC_URL + "/assets/profileAndRole/chart1.png"}
            alt="chart1"
          />
          <img
            className="object-fit"
            src={process.env.PUBLIC_URL + "/assets/profileAndRole/chart2.png"}
            alt="chart2"
          />
        </div>

        <p
          className="italic"
          style={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        >
          Note: Number of institutions and number of employees engaged in
          testing and certification activities from 2009 to 2022 #The figure
          includes the amount of subsidy in relation to anti-epidemic measures
          received by the sector in 2022.
        </p>
        <hr className="my-[24px]" />
        <div className="flex flex-row gap-[12px] items-center">
          <div className="h-[15px] w-[15px] bg-black" />
          <p className="text-heading-l">Role of the Sector</p>
        </div>
        <p className="text-body-m my-[24px]">
          In additional to its direct economic contribution, the sector also
          supports the manufacturing, export and supply chain.
        </p>
        <div className="grid grid-flow-col auto-cols-auto gap-[24px] my-[24px] w-full">
          <img
            className="h-[340px] w-auto object-fit"
            src={process.env.PUBLIC_URL + "/assets/profileAndRole/Role1.png"}
            alt="Role1"
          />
          <img
            className="h-[340px] w-auto object-contain"
            src={process.env.PUBLIC_URL + "/assets/profileAndRole/Role2.png"}
            alt="Role2"
          />
        </div>

        <p className="text-body-m">
          Locally, the T&C sector plays an important role in daily life of the
          Hong Kong community. For example, medical laboratories provide
          essential support to medical sector in the diagnosis of illnesses.
          Private laboratories have been playing an increasing role in
          supporting the food industry for quality assurance and the Government
          in testing of food. The construction materials laboratories and
          inspection bodies also contribute to ensuring the building safety.
          <br />
          <br />
          In support of Hong Kong's external trade, the sector has been
          providing high volume of testing and inspection services for consumer
          products manufactured in Hong Kong and the Pearl River Delta Region,
          in particular toys, electrical and electronic goods, textiles and
          garments and footwear. The sector also provides quality management
          system certification service for businesses. Through providing
          assurance to overseas buyers on the quality and safety of products,
          the sector has played an important part in the economic development of
          Hong Kong as well as Pearl River Delta Region.
          <br />
          <br />
          From a wider perspective, the T&C sector has also contributed to the
          development of Hong Kong as a business services centre. Coupled with
          other advantages including a sound legal system, a business-friendly
          environment and world class infrastructure, the availability of
          credible T&C services has enhanced attraction for multinational
          companies to set up buying offices and even regional headquarters in
          Hong Kong.
        </p>
        <hr className="my-[24px]" />
        <p className="text-heading-l mb-[24px]">Statics & Data</p>
        <div className="w-full mb-[28px]">
          {listOfData.map((item, index) => {
            const { title, imagePath, date } = item;
            return (
              <div
                key={index}
                className="flex flex-row h-[90px] mt-[24px] gap-[24px]"
              >
                <div className="relative w-[130px] h-full">
                  <img
                    className="border-2 border-inherit w-auto h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/assets/profileAndRole/${imagePath}`}
                    alt={imagePath}
                  />
                  {/* Icon */}
                  <img
                    className="absolute bottom-0 right-0 w-[32px] h-[32px]"
                    src={`${process.env.PUBLIC_URL}/assets/serviceUsers/PDF_Open.svg`}
                    alt="PDF Icon"
                  />
                </div>
                <div>
                  <div className="text-highlight-m text-black">{title}</div>
                  {date && (
                    <div className="flex flex-row w-full mt-[8px] gap-2">
                      <Icon icon="material-symbols:date-range-rounded" />
                      <h2 className="text-body-m text-grey">{date}</h2>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
