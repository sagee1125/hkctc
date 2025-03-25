import React from "react";
import {
  DifferentBusinessAreasDirectorySidebar,
  handleReturnDifferentBusinessAreasBreadcrumb,
} from "./utils";
import { navItemEnum } from "../../../../const";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    businessAreaTitle: "Information and Communications Technologies",
    timeLineData: [
      {
        text: "Define the scope, boundary and policy of ISMS",
        fontColor: "[#000000]",
      },
      {
        text: "Define the risk assessment approcah of the organisation",
        fontColor: "[#000000]",
        bgColor: "[#EAEAE5]",
      },
      {
        text: "Identify and evaluate risk and options for the relevant treatment",
        fontColor: "[#000000]",
      },
      {
        text: "Select appropriate control objectives and controls for the treatment for risks",
        fontColor: "[#000000]",
        bgColor: "[#EAEAE5]",
      },

      {
        text: "Obtain management approval of the proposed residual risks",
        fontColor: "[#000000]",
      },
      {
        text: "Obtain management authorisation to implement and operate the ISMS",
        fontColor: "[#000000]",
        bgColor: "[#EAEAE5]",
      },

      {
        text: "Monitor, review, maintain and improve the ISMS continuously",
        fontColor: "[#000000]",
      },
    ],
    mediaTitle:
      "Understanding Information Security Management System (ISMS) Certification",
  },
  cn: {
    businessAreaTitle: "資訊及通訊科技",
    timeLineData: [
      {
        text: "確定ISMS的範圍、邊界和方針",
        fontColor: "[#000000]",
      },
      {
        text: "確定機構的風險評估方法",
        fontColor: "[#000000]",
        bgColor: "[#EAEAE5]",
      },
      {
        text: "識別和評估風險及其處理方法的方案",
        fontColor: "[#000000]",
      },
      {
        text: "為處理風險選擇合適的控制目標和控制措施",
        fontColor: "[#000000]",
        bgColor: "[#EAEAE5]",
      },

      {
        text: "獲得管理層批准建議的殘餘風險",
        fontColor: "[#000000]",
      },
      {
        text: "獲得管理層授權實施和運行ISMS",
        fontColor: "[#000000]",
        bgColor: "[#EAEAE5]",
      },

      {
        text: "不斷地監視、評審、保持和改進ISMS",
        fontColor: "[#000000]",
      },
    ],
    mediaTitle: "認識資訊安全管理系統認證",
  },
};

export const InformationAndCommunicationsTechnologies: React.FC = () => {
  const { isPC, language } = useSettings();
  const page_text =
    language === Language.EN ? multilingual.en : multilingual.cn;

  const data_en: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "What is Information Security Management System (ISMS)?",
      content: (
        <ul>
          <li>
            Information security continues to be a big concern territory-wide
            nowadays. Organisations with poor or inadequate information security
            measures are often prone to unauthorised attacks and intrusion,
            thereby undermining the confidence of their clients and the public
            at large.
          </li>
          <br />
          <li>
            Information Security Management System (ISMS) is a systematic
            approach, as a part of the overall management system, for
            establishing, implementing, operating, monitoring, reviewing,
            maintaining and improving an organisation's information security.
          </li>
          <br />
          <li>
            ISO/IEC 27001 is an international standard jointly published by the
            International Organisation for Standardisation (ISO) and the
            International Electrotechnical Commission (IEC) to specify the
            normative requirements for the development and operation of ISMS.
          </li>
          <br />
          <li>
            The purpose of implementing ISMS is to assist an organisation to
            achieve its business objectives, such as to raise productivity, to
            enhance reputation, or to attract more investors and clients,
            through treating and managing information security risks against its
            risk acceptance levels through a risk assessment.
          </li>
        </ul>
      ),
    },
    {
      title: "Who should Implement ISMS?",
      content:
        "Information Security Management System (ISMS) is applicable to organisations of all sizes and in all business sectors. In particular, organisations storing and/or handling information that is personally sensitive, or information that is of a commercially sensitive nature and value (e.g. product design) or information that is business critical (i.e. information that needs to be accurate and its integrity assured). The processing of such information will benefit from implementing ISMS.",
    },
    {
      title:
        "What are the Major Steps of Establishing and Implementing ISMS to ISO/IEC 27001?",
      content: (
        <>
          <p>
            ISO/IEC 27001 provides a model for establishing, implementing,
            maintaining and continually improving an ISMS:
          </p>

          <div className="w-full flex flex-col mt-[16px]">
            {page_text.timeLineData.map((item, index) => (
              <div key={index} className="flex flex-row gap-[24px]">
                <div className="relative flex flex-col items-center">
                  {/* ball */}
                  <div className="bg-newPrimary rounded-full h-[17px] w-[17px] relative" />
                  {/* line */}
                  <div
                    className={`${
                      page_text.timeLineData.length - 1 === index
                        ? "h-[50px]"
                        : "h-full"
                    } w-[2px] bg-newPrimary absolute top-[17px]`}
                  />
                </div>
                <div
                  className={`text-highlight-s p-[16px] border-[1px] justify-start content-center mb-[16px] w-full border-[#E0E0E0] text-${
                    item.fontColor
                  } bg-${item.bgColor ?? "white"}`}
                >
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ),
    },

    {
      title: "What are the Benefits of Getting ISMS Certification?",
      content: (
        <ul>
          <li>
            Certification is an attestation issued by a third-party body,
            through a formal conformity assessment process, that specified
            requirements (e.g. ISO/IEC 27001) are fulfilled.
          </li>
          <br />
          <li>
            Internally, by adopting ISO/IEC 27001, it helps not only
            strengthening an organisation's security structure, but also better
            managing the organisation's information security and lowering risk
            exposure. With less chance of incidents being realised, it would
            reduce the time and resources spent on resolving issues that may
            arise.
          </li>
          <br />
          <li>
            Externally, certification of ISMS to ISO/IEC 27001 allows an
            organisation to demonstrate that its information assets are
            adequately protected against information security risks. It gives
            greater confidence to its business partners, authorities, clients
            and other interested parties.
          </li>
        </ul>
      ),
    },
    {
      title: "Where can I Obtain ISMS Certification Services?",
      content: (
        <ul>
          <li>
            Some local certification bodies have already been providing ISO/IEC
            27001-based ISMS certification services.
          </li>
          <br />
          <li>
            The Hong Kong Accreditation Service (HKAS) offers accreditation
            service for ISO/IEC 27001 certification. Certification bodies can
            apply for accreditation on a voluntary basis. Accreditation ensures
            that the certificates issued by the certification bodies concerned
            comply with international standards and give clients peace of mind
            that they are competent to carry out ISO/IEC 27001 certification.
          </li>
        </ul>
      ),
    },
  ];

  const data_cn: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "什麼是資訊安全管理系統（ISMS）?",
      content: (
        <ul>
          <li>
            近年來，資訊保安持續備受廣泛關注。資訊保安措施欠佳或不足的機構，往往客易受到黑客攻擊或入侵，因而打擊客戶及普羅大眾對他們的信心。
          </li>
          <br />
          <li>
            資訊安全管理系統（Information Security Management
            System，簡稱ISMS），作為整體管理系統的一部分，是一種系統性的方法，用以建立、實施、運行、監控、審查、維護和改進信息安全。
          </li>
          <br />
          <li>
            ISO/IEC
            27001是由國際標準化組織(ISO)和國際電工委員會(IEC)聯合出版的國際標準，為ISMS的開發與運作提供規範性的要求。
          </li>
          <br />
          <li>
            實施資訊安全管理系統的目的，在於協助機構透過風險評估，因應其風險接受程度有效地應對及管理資訊保安風險，從而達到業務目標，例如提升工作效率、提高聲譽，或吸引更多投資者及客戶。
          </li>
        </ul>
      ),
    },
    {
      title: "誰應實施ISMS?",
      content:
        "ISMS適用於各行各業、不同規模的機構。對於需要儲存或處理個人敏感資訊、敏感及具價值的商業資訊（如產品設計）、或關鍵性業務資訊（即需要保證其準確性和完整性的資訊）的機構而言，實施ISMS尤其有用。",
    },
    {
      title: "建立和實施ISO/IEC 27001 ISMS有什麽主要步驟?",
      content: (
        <>
          <p>ISO/IEC 27001提供了建立、實施、保持和持續改進ISMS的模式：</p>

          <div className="w-full flex flex-col mt-[16px]">
            {page_text.timeLineData.map((item, index) => (
              <div key={index} className="flex flex-row gap-[24px]">
                <div className="relative flex flex-col items-center">
                  {/* ball */}
                  <div className="bg-newPrimary rounded-full h-[17px] w-[17px] relative" />
                  {/* line */}
                  <div
                    className={`${
                      page_text.timeLineData.length - 1 === index
                        ? "h-[50px]"
                        : "h-full"
                    } w-[2px] bg-newPrimary absolute top-[17px]`}
                  />
                </div>
                <div
                  className={`text-highlight-s p-[16px] border-[1px] justify-start content-center mb-[16px] w-full border-[#E0E0E0] text-${
                    item.fontColor
                  } bg-${item.bgColor ?? "white"}`}
                >
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ),
    },

    {
      title: "獲得ISMS認證有何好處 ?",
      content: (
        <ul>
          <li>
            認證是通過一個正式的合格評定程序，由第三方發出證明，表示已滿足某些特定的要求（如ISO/IEC
            27001）。
          </li>
          <br />
          <li>
            機構獲取ISO/IEC
            27001認證後，在內部方面，不但加強了內部組織架構，亦能改善公司的資訊保安管理和減低風險承擔，從而減少發生事故的機會，亦相應減少用於保安事故應變的時間及金錢。
          </li>
          <br />
          <li>
            對外方面，獲得ISO/IEC 27001
            ISMS認證，可讓機構更能確保本身的資訊資產受到充分保護，免受資訊保安風險影響，從而為業務夥伴、規管當局及其他相關人士帶來信心。
          </li>
        </ul>
      ),
    },
    {
      title: "我在哪裡可以取得ISMS認證服務 ?",
      content: (
        <ul>
          <li>部分本地認證機構已開展ISO/IEC 27001 ISMS認證服務。</li>
          <br />
          <li>
            香港認可處提供ISO/IEC
            27001認證的認可服務，供認證機構自願申請相關的認可資格。認可程序使相關的認證機構發出的證書符合國際標準的要求，確認這些機構進行ISO/IEC
            27001認證工作的能力，令客戶可安心使用其服務。
          </li>
        </ul>
      ),
    },
  ];

  const data = language === Language.EN ? data_en : data_cn;

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={page_text.businessAreaTitle}
    />
  );

  const content = (
    <>
      <SquareTitle title={page_text.businessAreaTitle} />

      <div className="my-[24px]">
        <MediaTemplate
          title={page_text.mediaTitle}
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ISMS_PDF.png"
          mediaLink="https://www.hkctc.gov.hk/en/doc/ISMS_Flyer_Communications_5.pdf"
        />
      </div>

      <div className="w-full flex flex-col gap-[24px] mb-[24px]">
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            details={<div className="text-body-m">{item.content}</div>}
          />
        ))}
      </div>

      <hr className="my-[24px]" />

      <InternalBackButton
        targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/InformationAndCommunicationsTechnologiesBanner.png"
        }
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb
              items={handleReturnDifferentBusinessAreasBreadcrumb(
                page_text.businessAreaTitle,
                language
              )}
            />
          </div>
        )}
        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px]">
            <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
              <div className="sticky top-[20px]">{sidebar}</div>
            </div>
            <div className="flex-1 text-justify">{content}</div>
          </div>
        ) : (
          <div className="px-[24px] pb-[24px] flex flex-col gap-[24px]">
            <div>{sidebar}</div>
            <div>{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};
