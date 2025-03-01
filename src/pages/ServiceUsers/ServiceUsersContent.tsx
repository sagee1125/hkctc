import React from "react";
import { EmailBox, SquareTitle, Link } from "../../components";
import { useSettings } from "../../context";

type IndustryData = {
  title: string;
  description: string;
  imagePath: string;
  link: string;
  onClick?: () => void;
};

export const accreditationService: Array<{
  title: string;
  imagePath: string;
  link: string;
}> = [
  {
    title: "Hong Kong Laboratory Accreditation Scheme (HOKLAS)",
    imagePath: "serviceUsers/HOKLAS_1.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html",
  },
  {
    title: "Hong Kong Certification Body Accreditation Scheme (HKCAS)",
    imagePath: "serviceUsers/HOKLAS_2.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hkcas.html",
  },
  {
    title: "Hong Kong Inspection Body Accreditation Scheme (HKIAS)",
    imagePath: "serviceUsers/HOKLAS_3.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hkias.html",
  },
];

export const ServiceUsersContent: React.FC = () => {
  const { isPC } = useSettings();

  const industryData: IndustryData[] = [
    {
      title: "Services Provided by T&C Sector",
      description:
        "In general, the testing and certification (T&C) sector provides three types of services - Testing, Inspection and Certification.",
      imagePath: "serviceUsers/Services_Provided_TC.png",
      link: "/tc-sector?section=services_provided",
    },
    {
      title: "Services for Business Areas",
      description:
        "The testing and certification sector offers services covering a wide range of areas...",
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
      imgUrl: "Reports.png",
      link: "/events-promotion?section=hkctc_reports",
    },
  ];

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
                  window.open(link);
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
          <SquareTitle title="Accreditation Service" />
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
                    src={`${process.env.PUBLIC_URL}/assets/icons/PRESS.png`}
                    alt="Share"
                  />
                </div>
                <span className="!text-highlight-m">
                  <Link outerLink={link} linkColor="black">
                    {title}
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-heading-m py-[24px]">
          Full directory of accredited organisation
        </p>

        <div className="w-full">
          <div className="flex flex-row h-[90px] gap-[24px]">
            <div
              className="relative w-[130px] h-full cursor-pointer flex-shrink-0"
              onClick={() => {
                window.open(
                  "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/Scope_of_HOKLAS_Accredited_Organisation.pdf"
                );
              }}
            >
              <img
                className="border-2 border-inherit w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={`${process.env.PUBLIC_URL}/assets/serviceUsers/Full_List.png`}
                alt={"Full_List.png"}
              />
              {/* Icon */}
              <img
                className="absolute bottom-[4px] right-[4px] w-[32px] h-[32px]"
                src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                alt="PDF Icon"
              />
            </div>
            <div
              className="text-highlight-m text-black cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/Scope_of_HOKLAS_Accredited_Organisation.pdf"
                );
              }}
            >
              Directory of Accredited Organisations (Full List)
            </div>
          </div>
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

          <div>
            {othersData.map((item, index) => {
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
                    src={process.env.PUBLIC_URL + `/assets/industry/${imgUrl}`}
                    alt={title}
                  />
                  <p className="text-highlight-l">{title}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-[24px] pb-[32px]">
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/seminars_workshops.png)`,
                display: "flex",
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                position: "relative",
                height: "134px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0) 100%)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
              <div
                className="flex items-end w-full h-full pl-[24px] pb-[24px] cursor-pointer"
                onClick={() => {
                  window.open("/events-promotion?section=seminar_workshop");
                }}
              >
                <p className={"text-heading-l text-white z-10"}>
                  Seminars & Workshops
                </p>
              </div>
            </div>
          </div>
          <hr className="pb-[24px]" />
          <EmailBox />
        </div>
      </div>
    </div>
  );
};
