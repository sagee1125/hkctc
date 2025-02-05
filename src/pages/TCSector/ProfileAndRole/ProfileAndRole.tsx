import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { SquareTitle, AreaChart, MediaDialog } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";
import { MEDIA_TYPE } from "../../../const";

export const ProfileAndRole: React.FC = () => {
  const [activeTopicButton, setActiveTopicButton] = useState<number>(0);
  const chartsArray = [
    {
      label: "Institutions and employees engagement",
      charts: [
        {
          title: (
            <p className="text-heading-m pt-[24px] ml-[24px]">
              Number of institutions engaged in testing and certification
              activities
              <br />
              from 2009 to 2022
            </p>
          ),
          elementId: "institutions",
          xAxisData: [
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
          ],
          seriesData: [
            690, 705, 700, 705, 715, 715, 740, 770, 820, 830, 870, 905, 925,
            950,
          ],
          seriesBackgroundColor: "#D9B6F6",
          seriesItemColor: "#BD78FC",
        },
        {
          title: (
            <p className="text-heading-m pt-[24px] ml-[24px]">
              Number of employees engaged in testing and certification
              activities
              <br />
              from 2009 to 2022
            </p>
          ),
          elementId: "employees",
          xAxisData: [
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
          ],
          seriesData: [
            16250, 16190, 16970, 16680, 17010, 17510, 17560, 18000, 18280,
            18690, 19040, 19560, 19970, 19730,
          ],
          yAxisStartValue: 15000,
          seriesBackgroundColor: "#D1E39B",
          seriesItemColor: "rgba(20, 123, 62, 0.60)",
        },
      ],
    },
    {
      label: "Number of Establishments",
      charts: [
        {
          title: (
            <p className="text-heading-m pt-[24px] ml-[24px]">
              Total Number of Establishments (Category A, B and C)
              <br />
            </p>
          ),
          elementId: "establishments",
          xAxisData: ["2019", "2020", "2021", "2022"],
          seriesData: [870, 905, 920, 950],
          yAxisStartValue: 800,
          seriesBackgroundColor: "#BBC9E7",
          seriesItemColor: "#4673B0",
        },
      ],
    },
    {
      label: "Number of Persons Engaged",
      charts: [
        {
          title: (
            <p className="text-heading-m pt-[24px] ml-[24px]">
              Total Number of Persons Engaged (Category A, B and C)
              <br />
            </p>
          ),
          elementId: "personsEngaged",
          xAxisData: ["2019", "2020", "2021", "2022"],
          seriesData: [19040, 19560, 19970, 19730],
          yAxisStartValue: 19000,
          seriesBackgroundColor: "#F47B5A",
          seriesItemColor: "#A72D0C",
        },
      ],
    },
    {
      label: "Business Receipts",
      charts: [
        {
          title: (
            <p className="text-heading-m pt-[24px] ml-[24px]">
              Business Receipts (HK$ million) of Category A Establishments
              <br />
            </p>
          ),
          elementId: "businessReceipts",
          xAxisData: ["2019", "2020", "2021", "2022"],
          seriesData: [14970, 14925, 20030, 24899],
          yAxisStartValue: 14000,
          seriesBackgroundColor: "#D9B6F6",
          seriesItemColor: "#BD78FC",
        },
      ],
    },
    {
      label: "Industry Value Added",
      charts: [
        {
          title: (
            <p className="text-heading-m pt-[24px] ml-[24px]">
              Industry value added (HK$ million) of Category A Establishments
              <br />
            </p>
          ),
          elementId: "industryValueAdded",
          xAxisData: ["2019", "2020", "2021", "2022"],
          seriesData: [7338, 6714, 9285, 10887],
          yAxisStartValue: 6000,
          seriesBackgroundColor: "#D1E39B",
          seriesItemColor: "#147B3E",
        },
      ],
    },
  ];

  const displayCharts = chartsArray[activeTopicButton].charts ?? [];

  const listOfData: Array<{
    title: string;
    imagePath: string;
    date?: string;
    link: string;
  }> = [
    {
      title: "Statistics of Testing and Certification Activities in Hong Kong",
      imagePath: "Statistics.png",
      date: "May 2024",
      link: "/en/doc/HKCTC_StatPresentation_English.pdf",
    },
    {
      title: "Key Data available from 2009 - 2022",
      imagePath: "KeyData.png",
      link: "/en/doc/Statistics_2009to2022_eng.pdf",
    },
  ];
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(0);
  const currentReport = listOfData[activeReport];

  return (
    <div className="w-full flex flex-row gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title="Profile of the Sector" />

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
        <p className="text-body-m mb-[24px]">
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
        <div className="flex flex-wrap gap-[8px] mb-[24px]">
          {chartsArray.map((chartInfo, index) => {
            const isActivated = index === activeTopicButton;
            return (
              <button
                key={index}
                className="p-2 transition-all duration-800 ease-in-out whitespace-nowrap bg-newPrimary"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveTopicButton(index);
                }}
              >
                <p className="px-[12px] text-highlight-xs">{chartInfo.label}</p>
              </button>
            );
          })}
        </div>

        {displayCharts.map((chart, index) => {
          return (
            <>
              <div className="w-full flex flex-col gap-[24px] mb-[24px]">
                <div
                  style={{
                    width: "100%",
                    border: "2px solid #E0E0E0",
                    boxSizing: "border-box",
                  }}
                >
                  <AreaChart key={index} {...chart} />
                </div>
              </div>
            </>
          );
        })}

        {/* <p
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
        </p> */}
        <hr className="my-[24px]" />

        <SquareTitle title="Role of the Sector" />

        <p className="text-body-m my-[24px]">
          In additional to its direct economic contribution, the sector also
          supports the manufacturing, export and supply chain.
        </p>
        <div className="grid grid-flow-col auto-cols-auto gap-[24px] my-[24px] w-full">
          <img
            className="h-[340px] w-auto object-fit"
            src={process.env.PUBLIC_URL + "/assets/tcSector/Role1.png"}
            alt="Role1"
          />
          <img
            className="h-[340px] w-auto object-contain"
            src={process.env.PUBLIC_URL + "/assets/tcSector/Role2.png"}
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
                <div
                  className="relative w-[130px] h-full cursor-pointer"
                  onClick={() => {
                    setActiveReport(index);
                    setIsPreviewOpen(true);
                  }}
                >
                  <img
                    className="border-2 border-inherit w-auto h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/assets/tcSector/${imagePath}`}
                    alt={imagePath}
                  />
                  {/* Icon */}
                  <img
                    className="absolute bottom-0 right-0 w-[32px] h-[32px]"
                    src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                    alt="PDF Icon"
                  />
                </div>
                <div>
                  <div
                    className="text-highlight-m text-black cursor-pointer"
                    onClick={() => {
                      setActiveReport(index);
                      setIsPreviewOpen(true);
                    }}
                  >
                    {title}
                  </div>
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
      {isPreviewOpen && (
        <MediaDialog
          mediaType={MEDIA_TYPE.PDF}
          setIsPreviewOpen={setIsPreviewOpen}
          title={currentReport.title}
          link={currentReport.link}
        />
      )}
    </div>
  );
};
