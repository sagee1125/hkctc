import React from "react";
import {
  BusinessAreaTitle,
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

const timeLineData: Array<{
  text: string;
  fontColor: string;
  bgColor?: string;
}> = [
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
];

export const InformationAndCommunicationsTechnologies: React.FC = () => {
  const businessAreaTitle =
    "Information and Communications Technologies" as BusinessAreaTitle;
  const { isPC, language } = useSettings();
  const isEn = language === Language.EN;
  const data: Array<{
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
            {timeLineData.map((item, index) => (
              <div key={index} className="flex flex-row gap-[24px]">
                <div className="relative flex flex-col items-center">
                  {/* ball */}
                  <div className="bg-newPrimary rounded-full h-[17px] w-[17px] relative" />
                  {/* line */}
                  <div
                    className={`${
                      timeLineData.length - 1 === index ? "h-[50px]" : "h-full"
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

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={businessAreaTitle}
    />
  );

  const content = (
    <>
      <SquareTitle title={businessAreaTitle} />

      <div className="my-[24px]">
        <MediaTemplate
          title="Understanding Information Security Management System (ISMS) Certification"
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
                businessAreaTitle,
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
