import React from "react";
import { EmailBox } from "../../components";

type IndustryData = {
  title: string;
  description: string;
  imagePath: string;
  onClick?: () => void;
};
export const IndustryContent: React.FC = () => {
  const industryData: IndustryData[] = [
    {
      title: "Accommodation and Land",
      description:
        "The Hong Kong Government allows five specific non-industrial uses in existing industrial buildings (e.g., testing labs, R&D centers) without...",
      imagePath: "Accommodation_Land.png",
    },
    {
      title: "Funding Schemes",
      description:
        "In general, the testing and certification (T&C) sector provides variety types of funds - Testing, Inspection and Certification.",
      imagePath: "Funding_Schemes.png",
    },
    {
      title: "Entering into the Mainland market",
      description:
        "HKCTC sets up booths at major trade shows in Hong Kong, Mainland and overseas to promote Hong Kong's testing and certification (T&C) services...",
      imagePath: "Entering.png",
    },
    {
      title: "HKCTC Exhibition Programme",
      description:
        "HKCTC sets up booths at major trade shows in Hong Kong, Mainland and overseas to promote Hong Kong's testing and certification (T&C) services...",
      imagePath: "Exhibition.png",
    },
  ];

  const publicationData: Array<{
    title: string;
    imgUrl: string;
    onClick?: () => void;
  }> = [
    {
      title: "Corruption Prevention Guide for T&C Industry",
      imgUrl: "Corruption.png",
    },
    {
      title: "Newsletter",
      imgUrl: "Newsletter.png",
    },
    {
      title: "Reports",
      imgUrl: "Reports.png",
    },
  ];

  return (
    <div className="w-full grid grid-cols-[2fr,1fr] py-[48px] px-[24px] gap-[24px]">
      <div>
        <div className="flex flex-row gap-[12px] items-center">
          <div className="h-[15px] w-[15px] bg-newPrimary" />
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
                      process.env.PUBLIC_URL + "/assets/industry/" + imagePath
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
      </div>
      {/* Publications & Enquires */}
      <div className="flex flex-col">
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l">Publications</p>

          <div>
            {publicationData.map((item, index) => {
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

          <div className="pt-[24px]">
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/industry/20232014.png)`,
                display: "flex",
                backgroundSize: "100% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                position: "relative",
                height: "134px",
              }}
            />
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
