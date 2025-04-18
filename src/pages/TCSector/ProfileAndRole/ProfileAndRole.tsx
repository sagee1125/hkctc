import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { SquareTitle, AreaChart, MediaDialog } from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";
import { MEDIA_TYPE } from "../../../const";
import {
  Language,
  type LanguageResources,
  useSettings,
} from "../../../context";

const multilingual = {
  en: {
    profile_of_the_Sector: "Profile of the Industry",
    the_total:
      "The total business receipts of the private independent establishments in the testing and certification (T&C) industry were $24.9 billion.",
    the_total_italic:
      "(according to the latest statistics provided by the Census and Statistics Department for 2022)",

    the_economic:
      "The economic contribution to Hong Kong's GDP was $10.9 billion. As for employment, the total number of persons engaged in these private independent establishments was about 15 060.",
    in_the_same_year:
      "In the same year, there were about 850 private independent establishments in the T&C industry. The vast majority (around 94% or 800 establishments) of these were small and medium enterprises engaging less than 50 persons. They accounted for 37% of the total persons engaged and 30% of the total business receipts in the sector.",
    tabs: [
      "Establishment and persons engaged",
      "Number of Establishments",
      "Number of Persons Engaged",
      "Business Receipts",
      "Industry Value Added",
    ],
    establishment_engaged_chart: {
      title:
        "Number of Establishment engaged in testing and certification activities",
      years: "from 2009 to 2022#",
    },
    number_of_persons_engaged_chart: {
      title:
        "Number of persons engaged in testing and certification activities",
      years: "from 2009 to 2022",
      bottom_text:
        "#Including private independent establishments, in-house laboratories in large manufacturers and exporters, and laboratories in Government departments / public organisations.",
    },
    number_of_establishment_chart: {
      title: "Total Number of Establishments (Category A, B and C)",
    },
    total_number_of_persons_engaged_chart: {
      title: "Total Number of Persons Engaged (Category A, B and C)",
    },
    business_receipts_chart: {
      title: "Business Receipts (HK$ million) of Category A Establishments",
    },
    industry_value_added_chart: {
      title: "Industry value added (HK$ million) of Category A Establishments",
    },

    role_of_the_sector: "Role of the Industry",
    in_additional_to:
      "In additional to its direct economic contribution, the industry also supports the manufacturing, export and supply chain.",
    locally:
      "Locally, the T&C industry plays an important role in daily life of the Hong Kong community. For example, medical laboratories provide essential support to medical industry in the diagnosis of illnesses. Private laboratories have been playing an increasing role in supporting the food industry for quality assurance and the Government in testing of food. The construction materials laboratories and inspection bodies also contribute to ensuring the building safety.",
    in_support_of:
      "In support of Hong Kong's external trade, the industry has been providing high volume of testing and inspection services for consumer products manufactured in Hong Kong and the Pearl River Delta Region, in particular toys, electrical and electronic goods, textiles and garments and footwear. The industry also provides quality management system certification service for businesses. Through providing assurance to overseas buyers on the quality and safety of products, the industry has played an important part in the economic development of Hong Kong as well as Pearl River Delta Region.",
    from_wider_perspective:
      "From a wider perspective, the T&C industry has also contributed to the development of Hong Kong as a business services centre. Coupled with other advantages including a sound legal system, a business-friendly environment and world class infrastructure, the availability of credible T&C services has enhanced attraction for multinational companies to set up buying offices and even regional headquarters in Hong Kong.",
    statistics_data: "Statistics & Data",
    data: [
      "Latest Statistics of Testing and Certification Activities in Hong Kong",
      "Key Data available for 2009 - 2022",
    ],
  },
  cn: {
    profile_of_the_Sector: "行業概況",
    the_total: "在2022年，檢測和認證業中私營獨立機構的業務收益總額逹249億元。",
    the_total_italic: "(根據2022年最新的政府統計處數據)",

    the_economic:
      "香港本地生產總值（GDP）帶來的貢獻為109億元。就業方面，在這些私營獨立機構內的總就業人數約為15 060人。",
    in_the_same_year:
      "同年，檢測和認證業內約有850家私營獨立機構，大部份為人數不足50人的中小型企業（約為94%，即800間）。這些機構聘用的人手佔總就業人數約37%，它們取得的業務收益佔總額約30%。",
    tabs: [
      "機構單位就業人數",
      "機構單位的數目",
      "就業人數",
      "業務收益",
      "行業增加價值",
    ],
    establishment_engaged_chart: {
      title: "從事檢測及認證活動機構單位的數目",
      years: "2009年至2022年#",
    },
    number_of_persons_engaged_chart: {
      title: "從事檢測及認證活動的就業人數",
      years: "2009年至2022年#",
      bottom_text:
        "#包括私營獨立機構，大型製造商及出口商內部實驗所及政府部門／公共機構內的實驗所。",
    },
    number_of_establishment_chart: {
      title: "機構單位數目 (類別 A, B 及 C)",
    },
    total_number_of_persons_engaged_chart: {
      title: "就業人數 (類別 A, B 及 C)",
    },
    business_receipts_chart: {
      title: "類別A機構單位的業務收益(百萬港元)",
    },
    industry_value_added_chart: {
      title: "類別A機構單位的行業增加價值(百萬港元)",
    },

    role_of_the_sector: "行業角色",
    in_additional_to:
      "除了直接經濟貢獻外，檢測和認證業亦支援了製造業、出口業和其他服務業，是整個供應鏈不可或缺的一環。",
    locally:
      "檢測和認證業在香港社會的日常生活中擔當重要角色，例如，醫務化驗所在診斷病症方面，為醫學界提供了重要的支援。在支援食品業的品質保證和為政府測試食品方面，私營實驗所扮演的角色也日趨重要；而建築材料實驗所和檢驗機構，亦對確保樓宇安全作出貢獻。",
    in_support_of:
      "在支援對外貿易方面，本地的檢測和認證業為香港和珠江三角洲地區製造的消費品，提供了大量測試和檢驗服務，特別是玩具、電氣和電子貨品、紡織、成衣和鞋履。檢測和認證業亦為業務機構提供品質管理系統認證服務。透過為海外買家提供產品／服務的品質和安全保證，行業對本港以至珠江三角洲地區的經濟發展作出了重要貢獻。",
    from_wider_perspective:
      "從宏觀角度分析，檢測和認證業對香港發展為商業服務中心亦發揮了支持作用。香港具備各種優勢，例如健全的法制、有利營商的環境和世界級的基建，加上可靠的檢測和認證服務，令香港更能吸引跨國公司前來設立採購辦事處以至地區總部。",
    statistics_data: "統計數據",
    data: ["香港檢測及認證活動統計數字", "2009 - 2022年主要數據"],
  },
};
export const ProfileAndRole: React.FC = () => {
  const [activeTopicButton, setActiveTopicButton] = useState<number>(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(0);
  const { getPageText, isPC, language } = useSettings();
  const page_text = getPageText(multilingual);

  const {
    profile_of_the_Sector,
    the_total,
    the_total_italic,
    the_economic,
    in_the_same_year,
    tabs,
    establishment_engaged_chart,
    number_of_persons_engaged_chart,
    number_of_establishment_chart,
    total_number_of_persons_engaged_chart,
    business_receipts_chart,
    industry_value_added_chart,
    role_of_the_sector,
    in_additional_to,
    locally,
    in_support_of,
    from_wider_perspective,
    statistics_data,
    data,
  } = page_text;
  const chartsArray = [
    {
      label: (tabs as string[])[0],

      charts: [
        {
          title: (
            <p
              className={`text-heading-${
                isPC ? "m" : "xs"
              } pt-[24px] ml-[24px]`}
            >
              {
                (establishment_engaged_chart as LanguageResources)
                  ?.title as string
              }
              <br />
              {
                (establishment_engaged_chart as LanguageResources)
                  ?.years as string
              }
            </p>
          ),

          desc: `${(tabs as string[])[0]} - ${
            (establishment_engaged_chart as LanguageResources)?.title as string
          } ${
            (establishment_engaged_chart as LanguageResources)?.years as string
          }`,
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
          desc: `${(tabs as string[])[0]} - ${
            (number_of_persons_engaged_chart as LanguageResources)
              ?.title as string
          } ${
            (number_of_persons_engaged_chart as LanguageResources)
              ?.years as string
          }`,
          title: (
            <p
              className={`text-heading-${
                isPC ? "m" : "xs"
              } pt-[24px] ml-[24px]`}
            >
              {
                (number_of_persons_engaged_chart as LanguageResources)
                  ?.title as string
              }
              <br />
              {
                (number_of_persons_engaged_chart as LanguageResources)
                  ?.years as string
              }
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
      otherInfo: (number_of_persons_engaged_chart as LanguageResources)
        ?.bottom_text,
    },
    {
      label: (tabs as string[])[1],

      charts: [
        {
          desc: `${(tabs as string[])[1]} - ${
            (number_of_establishment_chart as LanguageResources)
              ?.title as string
          }`,
          title: (
            <p
              className={`text-heading-${
                isPC ? "m" : "xs"
              } pt-[24px] ml-[24px]`}
            >
              {
                (number_of_establishment_chart as LanguageResources)
                  ?.title as string
              }
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
      label: (tabs as string[])[2],

      charts: [
        {
          desc: `${(tabs as string[])[2]} - ${
            (total_number_of_persons_engaged_chart as LanguageResources)
              ?.title as string
          }`,
          title: (
            <p
              className={`text-heading-${
                isPC ? "m" : "xs"
              } pt-[24px] ml-[24px]`}
            >
              {
                (total_number_of_persons_engaged_chart as LanguageResources)
                  ?.title as string
              }
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
      label: (tabs as string[])[3],

      charts: [
        {
          desc: `${(tabs as string[])[3]} - ${
            (business_receipts_chart as LanguageResources)?.title as string
          }`,
          title: (
            <p
              className={`text-heading-${
                isPC ? "m" : "xs"
              } pt-[24px] ml-[24px]`}
            >
              {(business_receipts_chart as LanguageResources)?.title as string}
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
      label: (tabs as string[])[4],

      charts: [
        {
          desc: `${(tabs as string[])[4]} - ${
            (industry_value_added_chart as LanguageResources)?.title as string
          }`,

          title: (
            <p
              className={`text-heading-${
                isPC ? "m" : "xs"
              } pt-[24px] ml-[24px]`}
            >
              {
                (industry_value_added_chart as LanguageResources)
                  ?.title as string
              }
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
  const displayChartsNote = chartsArray[activeTopicButton].otherInfo ?? "";

  const listOfData: Array<{
    title: string;
    imagePath: string;
    date?: string;
    link: string;
    tcLink: String;
  }> = [
    {
      title: (data as string[])[0],
      imagePath: "Statistics.png",
      link: "/en/doc/HKCTC_StatPresentation_English.pdf",
      tcLink: "/tc/doc/HKCTC_StatPresentation_Chinese.pdf",
    },
    {
      title: (data as string[])[1],
      imagePath: "KeyData.png",
      link: "/en/doc/Statistics_2009to2022_eng.pdf",
      tcLink: "/tc/doc/Statistics_2009to2022_chi.pdf",
    },
  ];

  const currentReport = listOfData[activeReport];

  return (
    <div className="w-full flex">
      <div className="flex-1 text-justify">
        <SquareTitle title={profile_of_the_Sector as string} />

        <div className="bg-[#EEEEEA] my-[24px]">
          <div className="px-[42px] py-[36px]">
            <p className="text-body-m">{the_total as string}</p>
            <p
              className="italic mt-[16px]"
              style={{
                lineHeight: "20px",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              {the_total_italic as string}
            </p>
          </div>
        </div>
        <p className="text-body-m mb-[24px]">
          {the_economic as string}
          <br />
          <br />
          {in_the_same_year as string}
        </p>
        <div className="flex flex-wrap gap-[8px] mb-[24px]">
          {chartsArray.map((chartInfo, index) => {
            const isActivated = index === activeTopicButton;
            return (
              <button
                key={index}
                className="whitespace-nowrap bg-newPrimary"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveTopicButton(index);
                }}
                aria-label={chartInfo.label}
              >
                <p className="text-highlight-xs">{chartInfo.label}</p>
              </button>
            );
          })}
        </div>

        {displayCharts.map((chart, index) => {
          return (
            <>
              <div className="w-full mb-[24px]">
                <div
                  style={{
                    width: "100%",
                    border: "2px solid #E0E0E0",
                  }}
                >
                  <AreaChart key={index} {...chart} />
                </div>
              </div>
            </>
          );
        })}
        {displayChartsNote && (
          <p className="text-italic-s italic">{displayChartsNote as string}</p>
        )}
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
          received by the industry in 2022.
        </p> */}
        <hr className="my-[24px]" />

        <SquareTitle title={role_of_the_sector as string} />

        <p className="text-body-m my-[24px]">{in_additional_to as string}</p>
        <div
          className={`grid grid-flow-col auto-cols-auto gap-[24px] my-[24px] w-full`}
        >
          <img
            className={`${
              isPC ? "h-[340px]" : "h-[160px]"
            } w-full object-cover`}
            src={process.env.PUBLIC_URL + "/assets/tcSector/Role1.png"}
            alt="Role1"
            aria-hidden="true"
          />
          <img
            className={`${
              isPC ? "h-[340px]" : "h-[160px]"
            } w-full object-cover`}
            src={process.env.PUBLIC_URL + "/assets/tcSector/Role2.png"}
            alt="Role2"
            aria-hidden="true"
          />
        </div>

        <p className="text-body-m">
          {locally as string}
          <br />
          <br />
          {in_support_of as string}
          <br />
          <br />
          {from_wider_perspective as string}
        </p>
        <hr className="my-[24px]" />
        <p className="text-heading-l mb-[24px]" role="heading" aria-level={10}>
          {statistics_data as string}
        </p>
        <div className="w-full mb-[28px]">
          {listOfData.map((item, index) => {
            const { title, imagePath, date, link } = item;
            const handleClick = (): void => {
              if (isPC) {
                setActiveReport(index);
                setIsPreviewOpen(true);
              } else {
                window.open(
                  "https://www.hkctc.gov.hk" + link,
                  "_blank",
                  "noopener"
                );
              }
            };
            return (
              <div
                key={index}
                className="flex flex-row h-[90px] mt-[24px] gap-[24px] w-full"
              >
                <div
                  className="relative w-[130px] h-full cursor-pointer border-2 border-inherit"
                  tabIndex={0}
                  role="button"
                  aria-label={title}
                  onClick={handleClick}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleClick();
                    }
                  }}
                  style={{ flexShrink: 0 }}
                >
                  <img
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/assets/tcSector/${imagePath}`}
                    alt={title}
                  />
                  {/* Icon */}
                  <img
                    className="absolute bottom-0 right-0 w-[32px] h-[32px]"
                    src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                    alt="PDF Icon"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div
                    className={`text-highlight-${
                      isPC ? "m" : "s"
                    } text-black cursor-pointer`}
                    tabIndex={0}
                    role="button"
                    onClick={() => {
                      setActiveReport(index);
                      setIsPreviewOpen(true);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setActiveReport(index);
                        setIsPreviewOpen(true);
                      }
                    }}
                    aria-label={title}
                  >
                    {title}
                  </div>
                  {date && (
                    <div className="flex flex-row w-full mt-[8px] gap-2">
                      <Icon
                        icon="material-symbols:date-range-rounded"
                        aria-hidden={true}
                      />
                      <div
                        className={`text-body-${isPC ? "m" : "s"} text-[#666]`}
                      >
                        {date}
                      </div>
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
          link={
            language === Language.EN
              ? currentReport.link
              : (currentReport.tcLink as string)
          }
        />
      )}
    </div>
  );
};
