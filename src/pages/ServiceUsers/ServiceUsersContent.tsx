import React from "react";
import { EmailBox, SquareTitle, Link } from "../../components";
import { useSettings } from "../../context";
import { navItemEnum } from "../../const";
import { useNavigate } from "react-router-dom";

const multilingual = {
  en: {
    tc_sector_strengths: "Strengths of Hong Kong's T&C Industry",
    exhibition_programme: "HKCTC Exhibition Programme",
    different_business_areas: "Services for Different Business Areas",
    accreditation_services: "Accreditation Services",
    our_support: "Our Support",
    accreditation_is_open:
      "Accreditation is open and voluntary in Hong Kong. It is currently provided by Hong Kong Accreditation Service (HKAS) under Innovation and Technology Commission in Hong Kong. HKAS operates three accreditation schemes:",
    others: "Others",
    continue_read: "Continue to Read",
    hkctc_reports: "HKCTC Reports",
    seminar_workshop: "Seminars & Workshops",
    full_list: (
      <>
        *This full list is for the purpose of searching specific conformity
        assessment activity and will only be updated weekly. For most up-to-date
        scope of accreditation, please visit&nbsp;
        <a
          aria-label="HKAS's website - opens in a new tab"
          href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          HKAS’s website
        </a>
      </>
    ),
  },
  cn: {
    tc_sector_strengths: "香港檢測認證業的優勢",
    different_business_areas: "為不同業務範疇提供的服務",
    exhibition_programme: "香港檢測和認證局展覽計劃",
    accreditation_services: "認可服務",
    our_support: "我們的支援",

    continue_read: "查看更多",
    hkctc_reports: "香港檢測和認證局報告",
    seminar_workshop: "研討會與工作坊",
    accreditation_is_open:
      "在香港，申請認可資格是公開和自願性質的，目前由創新科技署轄下的香港認可處提供認可資格。該處負責推行三個認可計劃，包括：",
    others: "其他",
    full_list: (
      <>
        此完整清單僅用於搜尋特定的合格評定活動，並且每週更新一次。如欲了解最新的認可範圍，請造訪
        <a
          aria-label="香港認可處網站"
          href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#00E]"
        >
          香港認可處網站
        </a>
        。
      </>
    ),
  },
};

export const accreditationService: Array<{
  title: string;
  titleCN: string;
  imagePath: string;
  link: string;
  tcLink?: string;
  scLink?: string;
}> = [
  {
    title: "Hong Kong Laboratory Accreditation Scheme (HOKLAS)",
    titleCN: "香港實驗所認可計劃",
    imagePath: "serviceUsers/HOKLAS_1.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/Scope_of_HOKLAS_Accredited_Organisation.pdf",
    tcLink:
      "https://www.itc.gov.hk/ch/quality/hkas/conformity_assessment_bodies/hoklas.html",
    scLink:
      "https://www.itc.gov.hk/gb/quality/hkas/conformity_assessment_bodies/hoklas.html",
  },
  {
    title: "Hong Kong Certification Body Accreditation Scheme (HKCAS)",
    titleCN: "香港認證機構認可計劃",
    imagePath: "serviceUsers/HOKLAS_2.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/Scope_of_HKCAS_Accredited_Organisation.pdf",
    tcLink:
      "https://www.itc.gov.hk/ch/quality/hkas/conformity_assessment_bodies/hkcas.html",
    scLink:
      "https://www.itc.gov.hk/gb/quality/hkas/conformity_assessment_bodies/hkcas.html",
  },
  {
    title: "Hong Kong Inspection Body Accreditation Scheme (HKIAS)",
    titleCN: "香港檢驗機構認可計劃",
    imagePath: "serviceUsers/HOKLAS_3.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/Scope_of_HKIAS_Accredited_Organisation.pdf",
    tcLink: "",
    scLink: "",
  },
];

export const ServiceUsersContent: React.FC = () => {
  const { getPageText, isPC, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);
  const {
    tc_sector_strengths,
    exhibition_programme,
    different_business_areas,
    accreditation_services,
    accreditation_is_open,
    others,
    continue_read,
    hkctc_reports,
    seminar_workshop,
    full_list,
    our_support,
  } = page_text;
  const industryData = [
    {
      title: tc_sector_strengths,
      description:
        "In general, the testing and certification (T&C) industry provides three types of services - Testing, Inspection and Certification.",
      descriptionCN: "一般而言，檢測和認證業提供三種服務：測試、檢驗、認證。",
      imagePath: "serviceUsers/Services_Provided_TC.png",
      link: `/tc-sector?section=${navItemEnum.services_provided}`,
    },
    {
      title: different_business_areas,
      description:
        "The testing and certification industry offers services covering a wide range of areas...",
      descriptionCN: "檢測和認證業為多個範疇提供服務，主要包括以下各項...",
      imagePath: "serviceUsers/service_1.png",
      link: `/tc-sector?section=${navItemEnum.different_business_areas}`,
    },
    {
      title: exhibition_programme,
      description:
        "HKCTC sets up booths at major trade shows in Hong Kong, Mainland and overseas to promote Hong Kong's testing and certification (T&C) services...",
      descriptionCN:
        "香港檢測和認證局在本港、內地及海外的主要貿易展覽會設置攤位，向全球的買家、供應商和貿易商推廣香港檢測認證服務的優勢。",
      imagePath: "industry/support_1.png",
      link: `/tc-sector?section=${navItemEnum.exhibition_programme}`,
    },
  ];

  const othersData: Array<{
    title: string;
    imgUrl: string;
    link: string;
    onClick?: () => void;
  }> = [
    {
      title: hkctc_reports as string,
      imgUrl: "industry/Reports.png",
      link: `/events-promotion?section=${navItemEnum.hkctc_reports}`,
    },
    {
      title: seminar_workshop as string,
      imgUrl: "images/Seminars_Workshops.png",
      link: `/events-promotion?section=${navItemEnum.seminar_workshop}`,
    },
  ];
  const navigate = useNavigate();

  return (
    <div
      className={`w-full grid grid-cols-${
        isPC ? "[2fr,1fr]" : "1"
      } py-[48px] px-[24px] gap-[24px]`}
    >
      <div>
        <SquareTitle title={our_support as string} />

        <div>
          {industryData.map((item, index) => {
            const { title, imagePath, description, descriptionCN, link } = item;
            return (
              <a
                key={index}
                className={`grid grid-cols-${
                  isPC ? "2 h-[278px]" : "1"
                } justify-start group border-2 border-inherit  mt-[24px] gap-[24px] cursor-pointer`}
                href={link}
                aria-label={title as string}
              >
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={process.env.PUBLIC_URL + "/assets/" + imagePath}
                    alt={title as string}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center ${
                    isPC
                      ? "pr-[24px] py-[24px]"
                      : "px-[24px] pt-[8px] pb-[24px]"
                  } gap-[24px]`}
                >
                  <div
                    className="text-heading-m text-start w-full 
                group-hover:text-darkNavy group-hover:underline transition-all duration-300 ease-in-out"
                  >
                    {title as string}
                  </div>
                  <div className="text-body0m">
                    {getSingleText(description, descriptionCN)}
                  </div>
                  <div className="text-highlight-m text-[#A7AAAD] text-start">
                    {continue_read as string}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div className="pt-[48px]">
          <SquareTitle title={accreditation_services as string} />
        </div>
        <p className="pt-[24px] text-body-m text-justify">
          {accreditation_is_open as string}
        </p>
        <div className="w-full">
          {accreditationService.map((item, index) => {
            const { title, titleCN, imagePath, link } = item;
            return (
              <div
                key={index}
                className="flex flex-row h-[90px] mt-[24px] gap-[24px]"
              >
                <a
                  href={link}
                  className="relative w-[130px] h-full flex-shrink-0"
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={getSingleText(title, titleCN)}
                >
                  <img
                    className="border-2 border-inherit w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/assets/${imagePath}`}
                    alt={getSingleText(title, titleCN)}
                    aria-hidden="true"
                  />
                  {/* Icon */}
                  <img
                    className="absolute bottom-[4px] right-[4px] w-[32px] h-[32px]"
                    src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                    alt="Share"
                    aria-hidden="true"
                  />
                </a>
                <span className="!text-highlight-m h-full flex items-center">
                  <a
                    className="underline"
                    href={link}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    {getSingleText(title, titleCN)}
                  </a>
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-italic-s italic mt-[24px] text-justify">
          {full_list as string}
        </p>
      </div>
      {/* Others & Enquires */}
      <div className="flex flex-col">
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l" role="heading" aria-level={10}>
            {others as string}
          </p>

          <div className="mb-[32px]">
            {othersData.map((item, index) => {
              const { title, imgUrl, link } = item;
              return (
                <a
                  key={index}
                  href={link}
                  className="flex flex-row items-start mt-[24px] gap-[24px]"
                  aria-label={title}
                >
                  <img
                    className="w-[130px] h-auto"
                    src={process.env.PUBLIC_URL + `/assets/${imgUrl}`}
                    alt={title}
                    aria-hidden="true"
                  />
                  <p className="text-highlight-l">{title}</p>
                </a>
              );
            })}
          </div>

          <hr className="pb-[24px]" />
          <EmailBox />
        </div>
      </div>
    </div>
  );
};
