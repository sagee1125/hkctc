import React from "react";
import { EmailBox } from "../../components";

type IndustryData = {
  title: string;
  description: string;
  imagePath: string;
  onClick?: () => void;
};
export const ServiceUsersContent: React.FC = () => {
  const industryData: IndustryData[] = [
    {
      title: "Services Provided by T&C Sector",
      description:
        "In general, the testing and certification (T&C) sector provides three types of services – Testing, Inspection and Certification.",
      imagePath: "Services_Provided_TC.png",
    },
    {
      title: "Services for Business Areas",
      description:
        "In general, the testing and certification (T&C) sector provides three types of services – Testing, Inspection and Certification.",
      imagePath: "Services_for_Business_Areas.png",
    },
    {
      title: "HKCTC Exhibition Programme",
      description:
        "HKCTC sets up booths at major trade shows in Hong Kong, Mainland and overseas to promote Hong Kong's testing and certification (T&C) services...",
      imagePath: "Exhibition_Programme.png",
    },
  ];

  const othersData: Array<{
    title: string;
    imgUrl: string;
    onClick?: () => void;
  }> = [
    {
      title: "Reports",
      imgUrl: "Reports.png",
    },
  ];

  const accreditationService: Array<{
    title: string;
    imagePath: string;
  }> = [
    {
      title: "Hong Kong Laboratory Accreditation Scheme (HOKLAS)",
      imagePath: "HOKLAS.png",
    },
    {
      title: "Hong Kong Certification Body Accreditation Scheme (HKCAS)",
      imagePath: "HKCAS.png",
    },
    {
      title: "Hong Kong Inspection Body Accreditation Scheme (HKIAS)",
      imagePath: "HKIAS.png",
    },
  ];

  return (
    <div className="w-full grid grid-cols-[2fr,1fr] py-[48px] px-[24px] gap-[24px]">
      <div>
        <div className="flex flex-row gap-[12px] items-center">
          <div className="h-[15px] w-[15px] bg-black" />
          <p className="text-heading-l">Our Support</p>
        </div>
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
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/serviceUsers/" +
                      imagePath
                    }
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
                    Continue Read
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-[12px] items-center pt-[48px]">
          <div className="h-[15px] w-[15px] bg-black" />
          <p className="text-heading-l">Accreditation Service</p>
        </div>
        <p className="py-[24px] text-body-m">
          Discover accredited laboratories, certification bodies, and inspection
          bodies under HKAS. Access information about HOKLAS, HKCAS, and HKIAS,
          as well as a full directory of accredited organizations.
        </p>
        <div className="w-full">
          {accreditationService.map((item, index) => {
            const { title, imagePath } = item;
            return (
              <div
                key={index}
                className="flex flex-row h-[90px] mt-[24px] gap-[24px]"
              >
                <div className="relative w-[130px] h-full">
                  <img
                    className="border-2 border-inherit w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={`${process.env.PUBLIC_URL}/assets/serviceUsers/${imagePath}`}
                    alt={imagePath}
                  />
                  {/* Icon */}
                  <img
                    className="absolute bottom-0 right-0 w-[32px] h-[32px]"
                    src={`${process.env.PUBLIC_URL}/assets/serviceUsers/PDF_Open.svg`}
                    alt="PDF Icon"
                  />
                </div>
                <div className="text-highlight-m text-black">{title}</div>
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
                className="absolute bottom-0 right-0 w-[32px] h-[32px]"
                src={`${process.env.PUBLIC_URL}/assets/serviceUsers/PDF.svg`}
                alt="PDF Icon"
              />
            </div>
            <div className="text-highlight-m text-black">
              Directory of Accredited Organisations (Full List)
            </div>
          </div>
        </div>
        <p className="text-italic-s mt-[24px]">
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