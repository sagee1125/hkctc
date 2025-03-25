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
    businessAreaTitle: "资讯及通讯科技",
    timeLineData: [
      {
        text: "确定ISMS的范围、边界和方针",
        fontColor: "[#000000]",
      },
      {
        text: "确定机构的风险评估方法",
        fontColor: "[#000000]",
        bgColor: "[#EAEAE5]",
      },
      {
        text: "识别和评估风险及其处理方法的方案",
        fontColor: "[#000000]",
      },
      {
        text: "S为处理风险选择合适的控制目标和控制措施",
        fontColor: "[#000000]",
        bgColor: "[#EAEAE5]",
      },

      {
        text: "获得管理层批准建议的残余风险",
        fontColor: "[#000000]",
      },
      {
        text: "获得管理层授权实施和运行ISMS",
        fontColor: "[#000000]",
        bgColor: "[#EAEAE5]",
      },

      {
        text: "不断地监视、评审、保持和改进ISMS",
        fontColor: "[#000000]",
      },
    ],
    mediaTitle: "认识资讯安全管理系统认证",
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
      title: "什么是资讯安全管理系统（ISMS）?",
      content: (
        <ul>
          <li>
            近年来，资讯保安持续备受广泛关注。资讯保安措施欠佳或不足的机构，往往客易受到黑客攻击或入侵，因而打击客户及普罗大众对他们的信心。
          </li>
          <br />
          <li>
            资讯安全管理系统（Information Security Management
            System，简称ISMS），作为整体管理系统的一部分，是一种系统性的方法，用以建立、实施、运行、监控、审查、维护和改进信息安全。
          </li>
          <br />
          <li>
            ISO/IEC
            27001是由国际标准化组织(ISO)和国际电工委员会(IEC)联合出版的国际标准，为ISMS的开发与运作提供规范性的要求。
          </li>
          <br />
          <li>
            实施资讯安全管理系统的目的，在于协助机构透过风险评估，因应其风险接受程度有效地应对及管理资讯保安风险，从而达到业务目标，例如提升工作效率、提高声誉，或吸引更多投资者及客户。
          </li>
        </ul>
      ),
    },
    {
      title: "谁应实施ISMS?",
      content:
        "ISMS适用于各行各业、不同规模的机构。对于需要储存或处理个人敏感资讯、敏感及具价值的商业资讯（如产品设计）、或关键性业务资讯（即需要保证其准确性和完整性的资讯）的机构而言，实施ISMS尤其有用。",
    },
    {
      title: "建立和实施ISO/IEC 27001 ISMS有什么主要步骤 ?",
      content: (
        <>
          <p>ISO/IEC 27001提供了建立、实施、保持和持续改进ISMS的模式：</p>

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
      title: "获得ISMS认证有何好处?",
      content: (
        <ul>
          <li>
            认证是通过一个正式的合格评定程序，由第三方发出证明，表示已满足某些特定的要求（如ISO/IEC
            27001）。
          </li>
          <br />
          <li>
            机构获取ISO/IEC
            27001认证后，在内部方面，不但加强了内部组织架构，亦能改善公司的资讯保安管理和减低风险承担，从而减少发生事故的机会，亦相应减少用于保安事故应变的时间及金钱。
          </li>
          <br />
          <li>
            对外方面，获得ISO/IEC 27001
            ISMS认证，可让机构更能确保本身的资讯资产受到充分保护，免受资讯保安风险影响，从而为业务伙伴、规管当局及其他相关人士带来信心。
          </li>
        </ul>
      ),
    },
    {
      title: "我在哪里可以取得ISMS认证服务?",
      content: (
        <ul>
          <li>部分本地认证机构已开展ISO/IEC 27001 ISMS认证服务。</li>
          <br />
          <li>
            香港认可处提供ISO/IEC
            27001认证的认可服务，供认证机构自愿申请相关的认可资格。认可程序使相关的认证机构发出的证书符合国际标准的要求，确认这些机构进行ISO/IEC
            27001认证工作的能力，令客户可安心使用其服务。
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
