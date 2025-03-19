import React from "react";
import { EmailBox, SquareTitle, Link } from "../../components";
import { useSettings } from "../../context";
import { navItemEnum } from "../../const";
import { useNavigate } from "react-router-dom";

type IndustryData = {
  title: string;
  description: string;
  imagePath: string;
  link: string;
  onClick?: () => void;
};

export const accreditationService: Array<{
  title: string;
  titleCN: string;
  imagePath: string;
  link: string;
}> = [
  {
    title: "Hong Kong Laboratory Accreditation Scheme (HOKLAS)",
    titleCN: "香港實驗所認可計劃",
    imagePath: "serviceUsers/HOKLAS_1.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html",
  },
  {
    title: "Hong Kong Certification Body Accreditation Scheme (HKCAS)",
    titleCN: "香港認證機構認可計劃",
    imagePath: "serviceUsers/HOKLAS_2.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hkcas.html",
  },
  {
    title: "Hong Kong Inspection Body Accreditation Scheme (HKIAS)",
    titleCN: "香港檢驗機構認可計劃",
    imagePath: "serviceUsers/HOKLAS_3.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hkias.html",
  },
];

export const ServiceUsersContent: React.FC = () => {
  const { isPC } = useSettings();

  const industryData: IndustryData[] = [
    {
      title: "Services Provided by T&C Industry",
      description:
        "In general, the testing and certification (T&C) industry provides three types of services - Testing, Inspection and Certification.",
      imagePath: "serviceUsers/Services_Provided_TC.png",
      link: "/tc-sector?section=services_provided",
    },
    {
      title: "Services for Business Areas",
      description:
        "The testing and certification industry offers services covering a wide range of areas...",
      imagePath: "serviceUsers/service_1.png",
      link: "/tc-sector?section=different_business_areas",
    },
    {
      title: "HKCTC Exhibition Programme",
      description:
        "HKCTC sets up booths at major trade shows in Hong Kong, Mainland and overseas to promote Hong Kong's testing and certification (T&C) services...",
      imagePath: "industry/support_1.png",
      link: "/support?section=exhibition_programme",
    },
  ];

  const othersData: Array<{
    title: string;
    imgUrl: string;
    link: string;
    onClick?: () => void;
  }> = [
    {
      title: "HKCTC Reports",
      imgUrl: "industry/Reports.png",
      link: `/events-promotion?section=${navItemEnum.hkctc_reports}`,
    },
    {
      title: "Seminars & Workshops",
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
        <SquareTitle title="Our Support" />

        <div>
          {industryData.map((item, index) => {
            const { title, imagePath, description, link } = item;
            return (
              <div
                key={index}
                className={`grid grid-cols-${
                  isPC ? "2 h-[278px]" : "1"
                } justify-start group border-2 border-inherit  mt-[24px] gap-[24px] cursor-pointer`}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                  navigate(link);
                }}
              >
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={process.env.PUBLIC_URL + "/assets/" + imagePath}
                    alt={title}
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
                    {title}
                  </div>
                  <div className="text-body0m">{description}</div>
                  <div className="text-highlight-m text-[#A7AAAD] text-start">
                    Continue to Read
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pt-[48px]">
          <SquareTitle title="Accreditation Services" />
        </div>
        <p className="py-[24px] text-body-m">
          Discover accredited laboratories, certification bodies, and inspection
          bodies under HKAS. Access information about HOKLAS, HKCAS, and HKIAS,
          as well as a full directory of accredited organizations.
        </p>
        <div className="w-full">
          {accreditationService.map((item, index) => {
            const { title, imagePath, link } = item;
            return (
              <div
                key={index}
                className="flex flex-row h-[90px] mt-[24px] gap-[24px]"
              >
                <div
                  className="relative w-[130px] h-full cursor-pointer flex-shrink-0"
                  onClick={() => {
                    window.open(link);
                  }}
                >
                  <img
                    className="border-2 border-inherit w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/assets/${imagePath}`}
                    alt={imagePath}
                  />
                  {/* Icon */}
                  <img
                    className="absolute bottom-[4px] right-[4px] w-[32px] h-[32px]"
                    src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                    alt="Share"
                  />
                </div>
                <span className="!text-highlight-m h-full flex items-center">
                  <Link outerLink={link} linkColor="black">
                    {title}
                  </Link>
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-italic-s italic mt-[24px]">
          *This full list is for the purpose of searching specific conformity
          assessment activity and will only be updated weekly. For most
          up-to-date scope of accreditation, please search by "Organisations",
          "Registration No." or "Services"
        </p>
      </div>
      {/* Others & Enquires */}
      <div className="flex flex-col">
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l">Others</p>

          <div className="mb-[32px]">
            {othersData.map((item, index) => {
              const { title, imgUrl, link } = item;
              return (
                <div
                  key={index}
                  className="flex flex-row items-start mt-[24px] gap-[24px] cursor-pointer"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate(link);
                  }}
                >
                  <img
                    className="w-[130px] h-auto"
                    src={process.env.PUBLIC_URL + `/assets/${imgUrl}`}
                    alt={title}
                  />
                  <p className="text-highlight-l">{title}</p>
                </div>
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
