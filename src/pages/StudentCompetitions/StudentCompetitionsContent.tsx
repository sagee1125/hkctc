import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Sidebar } from "../../components";
import { type SubItems } from "../../const";

type BreadcrumbProps = {
  eventItems: SubItems[];
};

export const StudentCompetitionsContent: React.FC<BreadcrumbProps> = ({
  eventItems,
}) => {
  const [activeEventItems, setActiveEventItems] = useState<string>(
    eventItems?.[2]?.subTitle ?? ""
  );

  const [activeTopicButton, setActiveTopicButton] = useState<number>(0);
  const [activeYearButton, setActiveYearButton] = useState<number>(0);

  const listOfAwardees: Array<{
    title: string;
    imagePath: string;
    date: string;
  }> = [
    {
      title: "Testing Science - Sustainability in Daily Life",
      imagePath: "Sustainability.png",
      date: "2023-24",
    },
    {
      title: "Food Testing in Daily Life",
      imagePath: "Food.png",
      date: "2022-23",
    },
    {
      title: "Materials Testing Science in Daily Life",
      imagePath: "Materials.png",
      date: "2021-22",
    },
    {
      title: "Testing Science in Daily Life - Healthcare and Hygiene",
      imagePath: "Healthcare.png",
      date: "2020-21",
    },
    {
      title: "Testing Science for Green Living",
      imagePath: "Green.png",
      date: "2018-19",
    },
    {
      title: "Testing Science for Improving the Quality of Life",
      imagePath: "Quality.png",
      date: "2017-18",
    },
    {
      title: "Scientific Testing in Everyday Life",
      imagePath: "Scientific.png",
      date: "2016-17",
    },
  ];

  return (
    <div className="w-full flex flex-row pt-[48px] gap-[24px] pr-[24px]">
      <div className="px-[24px] min-w-[440px] w-1/3">
        <Sidebar
          title={"Events"}
          sidebarItems={eventItems}
          activatedItems={activeEventItems}
          setActivatedItems={setActiveEventItems}
        />
      </div>
      <div>
        <div className="flex flex-row gap-[12px] items-center">
          <div className="h-[15px] w-[15px] bg-newPrimary" />
          <p className="text-heading-l">Student Competitions</p>
        </div>

        <p className="text-heading-m py-[24px]">
          "Digi-Science" Video Production Competition for Hong Kong Secondary
          Schools
        </p>
        <p className="text-body-m">
          To raise students' awareness of the importance of testing and
          certification service, HKCTC and Hong Kong Association for Science and
          Mathematics Education (HKASME) have been co-organising the
          "Digi-Science" Video Production Competition for Hong Kong Secondary
          Schools since 2016.
          <br />
          <br />
          Participating students need to produce a 2-minute video and a report
          on the experimental ideas relevant to the theme of the year.
        </p>
        <hr className="my-[24px]" />
        <p className="text-heading-l">List of awardees</p>
        <div className="w-full">
          {listOfAwardees.map((item, index) => {
            const { title, imagePath, date } = item;
            return (
              <div
                key={index}
                className="flex flex-row h-[90px] mt-[24px] gap-[24px]"
              >
                <div className="relative w-[130px] h-full">
                  <img
                    className="border-2 border-inherit w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/assets/studentCompetitions/${imagePath}`}
                    alt={imagePath}
                  />
                  {/* Icon */}
                  <img
                    className="absolute bottom-[4px] right-[4px] w-[32px] h-[32px]"
                    src={`${process.env.PUBLIC_URL}/assets/icons/PRESS.png`}
                    alt="PDF Icon"
                  />
                </div>
                <div>
                  <div className="text-highlight-m text-black">{title}</div>
                  <div className="flex flex-row w-full mt-[8px] gap-2">
                    <Icon icon="material-symbols:date-range-rounded" />
                    <h2 className="text-body-m text-grey">{date}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="my-[24px]" />
        <p className="text-heading-l">
          Hong Kong Youth Science and Technology Competition
        </p>
        <div className="w-full grid grid-cols-2 gap-[24px] my-[24px]">
          <img
            className="w-full h-auto"
            src={
              process.env.PUBLIC_URL +
              "/assets/studentCompetitions/Competition_1.png"
            }
            alt={"Publication Head"}
          />
          <img
            className="w-full h-auto"
            src={
              process.env.PUBLIC_URL +
              "/assets/studentCompetitions/Competition_2.png"
            }
            alt={"Publication Head"}
          />
        </div>
        <p className="text-body-m mb-[24px]">
          Since 2016, HKCTC has collaborated with the Hong Kong New Generation
          Cultural Association (HKNGCA) to offer the "HKCTC Special Award for
          Outstanding Project in Testing" in the Hong Kong Youth Science and
          Technology Competition for the best entries relevant to testing. The
          list of awardees can be accessed at the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stic.newgen.org.hk/"
            className="text-[#0000EE] underline"
          >
            website of HKNGCA
          </a>
          .
        </p>
        <hr className="mt-[24px]" />
        <div className="flex flex-row gap-[8px] my-[48px]">
          <Icon
            icon="tdesign:share"
            className="h-[20px] w-[20px] text-newPrimary"
          />
          <p className="text-highlight-m text-newPrimary">Share</p>
        </div>
      </div>
    </div>
  );
};
