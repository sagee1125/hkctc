import React from "react";
import { EmailBox, SquareTitle } from "../../components";
import { useSettings } from "../../context";

type IndustryData = {
  title: string;
  description: string;
  imagePath: string;
  link: string;
  onClick?: () => void;
};
export const IndustryContent: React.FC = () => {
  const { isPC } = useSettings();

  const industryData: IndustryData[] = [
    {
      title: "Accommodation and Land",
      description:
        "According to the revitalisation scheme for industrial buildings (“IBs”), one of the measures is to relax the waiver application policy to permit uses for a ...",
      imagePath: "industry/Accommodation_Land.png",
      link: "/support?section=accommodation_and_land",
    },
    {
      title: "Funding Schemes",
      description:
        "ITF is established by the Government with the aim of increasing the added value, productivity and competitiveness of Hong Kong's economic...",
      imagePath: "generalPublic/whatsnew_4.png",
      link: "/support?section=funding_schemes",
    },
    {
      title: "Entering into the Mainland market",
      description:
        "Since the signing of Supplement VII to the Mainland and Hong Kong Closer Economic Partnership Arrangement (CEPA), the Mainland has been...",
      imagePath: "industry/Entering.png",
      link: "/support?section=entering_into_the_mainland_market",
    },
    {
      title: "HKCTC Exhibition Programme",
      description:
        "HKCTC sets up booths at major trade shows in Hong Kong, Mainland and overseas to promote Hong Kong's testing and certification (T&C) services...",
      imagePath: "industry/support_1.png",
      link: "/support?section=exhibition_programme",
    },
  ];

  const publicationData: Array<{
    title: string;
    imgUrl: string;
    link: string;
    onClick?: () => void;
  }> = [
    {
      title: "Corruption Prevention Guide for T&C Industry",
      imgUrl: "industry/Corruption.png",
      link: "/events-promotion?section=corruption_prevention",
    },
    {
      title: "HKCTC Newsletters",
      imgUrl: "generalPublic/material_2.png",
      link: "/events-promotion?section=hkctc_newsletter",
    },
    {
      title: "HKCTC Reports",
      imgUrl: "generalPublic/material_1.png",
      link: "/events-promotion?section=hkctc_reports",
    },
  ];

  return (
    <div
      className={`w-full ${
        isPC ? "grid grid-cols-[2fr,1fr]" : "flex flex-col"
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
      </div>
      {/* Publications & Enquires */}
      <div className="flex flex-col">
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l">Publications</p>

          <div>
            {publicationData.map((item, index) => {
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
                    src={process.env.PUBLIC_URL + `/assets/${imgUrl}`}
                    alt={title}
                  />
                  <p className="text-highlight-l">{title}</p>
                </div>
              );
            })}
          </div>

          <div
            className="pt-[24px] cursor-pointer"
            onClick={() => {
              window.open("/events-promotion?section=award_scheme");
            }}
          >
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
          <div
            className="pt-[24px] pb-[32px] cursor-pointer"
            onClick={() => {
              window.open("/events-promotion?section=seminar_workshop");
            }}
          >
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/generalPublic/workshop_1.png)`,
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
