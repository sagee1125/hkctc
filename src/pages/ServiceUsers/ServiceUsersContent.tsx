import React from "react";
import { EmailBox, SquareTitle, Link } from "../../components";

type IndustryData = {
  title: string;
  description: string;
  imagePath: string;
  onClick?: () => void;
};

export const accreditationService: Array<{
  title: string;
  imagePath: string;
  link: string;
}> = [
  {
    title: "Hong Kong Laboratory Accreditation Scheme (HOKLAS)",
    imagePath: "assets/serviceUsers/HOKLAS_1.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html",
  },
  {
    title: "Hong Kong Certification Body Accreditation Scheme (HKCAS)",
    imagePath: "assets/serviceUsers/HOKLAS_2.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hkcas.html",
  },
  {
    title: "Hong Kong Inspection Body Accreditation Scheme (HKIAS)",
    imagePath: "assets/serviceUsers/HOKLAS_3.png",
    link: "https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hkias.html",
  },
];

export const ServiceUsersContent: React.FC = () => {
  const industryData: IndustryData[] = [
    {
      title: "Services Provided by T&C Sector",
      description:
        "In general, the testing and certification (T&C) sector provides three types of services – Testing, Inspection and Certification.",
      imagePath: "serviceUsers/Services_Provided_TC.png",
    },
    {
      title: "Services for Business Areas",
      description:
        "In general, the testing and certification (T&C) sector provides three types of services – Testing, Inspection and Certification.",
      imagePath: "serviceUsers/service_1.png",
    },
    {
      title: "HKCTC Exhibition Programme",
      description:
        "HKCTC sets up booths at major trade shows in Hong Kong, Mainland and overseas to promote Hong Kong's testing and certification (T&C) services...",
      imagePath: "industry/support_1.png",
    },
  ];

  const othersData: Array<{
    title: string;
    imgUrl: string;
    onClick?: () => void;
  }> = [
    {
      title: "HKCTC Reports",
      imgUrl: "Reports.png",
    },
  ];

  return (
    <div className="w-full grid grid-cols-[2fr,1fr] py-[48px] px-[24px] gap-[24px]">
      <div>
        <SquareTitle title="Our Support" />

        <div>
          {industryData.map((item, index) => {
            const { title, imagePath, description } = item;
            return (
              <div
                key={index}
                className="grid grid-cols-2 justify-start group border-2 border-inherit h-[278px] mt-[24px] gap-[24px]"
              >
                <div className="overflow-hidden">
                  <img
                    className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={process.env.PUBLIC_URL + "/assets/" + imagePath}
                    alt={title}
                  />
                </div>
                <div className="flex flex-col justify-center py-[24px] pr-[24px] gap-[24px]">
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
                <div className="relative w-[130px] h-full">
                  <img
                    className="border-2 border-inherit w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/${imagePath}`}
                    alt={imagePath}
                  />
                  {/* Icon */}
                  <img
                    className="absolute bottom-[4px] right-[4px] w-[32px] h-[32px]"
                    src={`${process.env.PUBLIC_URL}/assets/icons/PDF.png`}
                    alt="PDF Icon"
                  />
                </div>
                <span className="!text-highlight-m">
                  <Link outerLink={link} linkColor="ink" underline={false}>
                    {title}
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-heading-m py-[24px]">
          Full directory of accredited organizations
        </p>

        <div className="w-full">
          <div className="flex flex-row h-[90px] gap-[24px]">
            <div className="relative w-[130px] h-full">
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
            <div className="text-highlight-m text-black">
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
              const { title, imgUrl } = item;
              return (
                <div
                  key={index}
                  className="flex flex-row items-start mt-[24px] gap-[24px]"
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
              <div className="flex items-end w-full h-full pl-[24px] pb-[24px]">
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
