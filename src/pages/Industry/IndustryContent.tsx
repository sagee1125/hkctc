import React from "react";
import { EmailBox, SquareTitle } from "../../components";
import { Language, useSettings } from "../../context";

const multilingual = {
  en: {
    accommodation_and_land: "Accommodation and Land",
    funding_schemes: "Funding Schemes",
    our_support: "Our Support",
    entering_into_the_mainland_market: "Entering into the Mainland Market",
    corruption_prevention: "Corruption Prevention Guide for T&C Industry",
    exhibition_programme: "HKCTC Exhibition Programme",
    hkctc_newsletter: "HKCTC Newsletters",
    hkctc_reports: "HKCTC Reports",
    continue_read: "Continue to Read",
    publications: "Publications",
    seminar_workshop: "Seminars & Workshops",
  },
  cn: {
    accommodation_and_land: "工作地方及土地",
    funding_schemes: "資助計劃",
    our_support: "我們的支援",
    entering_into_the_mainland_market: "進入內地市場",
    corruption_prevention: "檢測和認證業防貪指引",
    exhibition_programme: "香港檢測和認證局展覽計劃",
    hkctc_newsletter: "香港檢測和認證局通訊",
    hkctc_reports: "香港檢測和認證局報告",
    continue_read: "查看更多",
    publications: "刊物",
    seminar_workshop: "研討會與工作坊",
  },
};

export const IndustryContent: React.FC = () => {
  const { language, isPC } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;
  const {
    accommodation_and_land,
    funding_schemes,
    our_support,
    corruption_prevention,
    entering_into_the_mainland_market,
    exhibition_programme,
    hkctc_newsletter,
    hkctc_reports,
    continue_read,
    publications,
    seminar_workshop,
  } = page_text;

  const industryData = [
    {
      title: accommodation_and_land,
      description:
        "According to the revitalisation scheme for industrial buildings (“IBs”), one of the measures is to relax the waiver application policy to permit uses for a ...",
      descriptionCN: `根據活化工業大廈（工廈）計劃，其中一項措施是放寛豁免書申請安排，以准許現有工廈用作若干用途。測試實驗所可受惠於此措施。`,

      imagePath: "industry/Accommodation_Land.png",
      link: "/support?section=accommodation_and_land",
    },
    {
      title: funding_schemes,
      description:
        "ITF is established by the Government with the aim of increasing the added value, productivity and competitiveness of Hong Kong's economic...",
      descriptionCN:
        "政府設立創新及科技基金，旨在提升本地經濟活動的增值力、生產力及競爭力。",
      imagePath: "generalPublic/whatsnew_4.png",
      link: "/support?section=funding_schemes",
    },
    {
      title: entering_into_the_mainland_market,
      description:
        "Since the signing of Supplement VII to the Mainland and Hong Kong Closer Economic Partnership Arrangement (CEPA), the Mainland has been...",
      descriptionCN: `自簽署《內地與香港關於建立更緊密經貿關係的安排（CEPA）補充協議七》起，中國內地逐步向香港開放其檢測和認證市場。`,

      imagePath: "industry/Entering.png",
      link: "/support?section=entering_into_the_mainland_market",
    },
    {
      title: exhibition_programme,
      description:
        "HKCTC sets up booths at major trade shows in Hong Kong, Mainland and overseas to promote Hong Kong's testing and certification (T&C) services...",
      descriptionCN:
        "香港檢測和認證局在本港、內地及海外的主要貿易展覽會設置攤位，向全球的買家、供應商和貿易商推廣香港檢測認證服務的優勢。",
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
      title: corruption_prevention,
      imgUrl: "industry/Corruption.png",
      link: "/events-promotion?section=corruption_prevention",
    },
    {
      title: hkctc_newsletter,
      imgUrl: "generalPublic/material_2.png",
      link: "/events-promotion?section=hkctc_newsletter",
    },
    {
      title: hkctc_reports,
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
        <SquareTitle title={our_support} />

        <div>
          {industryData.map((item, index) => {
            const { title, imagePath, description, descriptionCN, link } = item;
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
                  <div className="text-body0m">
                    {isEn ? description : descriptionCN}
                  </div>
                  <div className="text-highlight-m text-[#A7AAAD] text-start">
                    {continue_read}
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
          <p className="text-heading-l">{publications}</p>

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
                  {seminar_workshop}
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
