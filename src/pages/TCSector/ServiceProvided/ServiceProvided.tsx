import React, { useState } from "react";
import {
  Accordion,
  SquareTitle,
  SummaryTable,
  Link,
} from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";
import { Language, useSettings } from "../../../context";

const TC_SERVICE_PROVIDED_TEXT = {
  EN: {
    TITLE: "Services Provided by T&C Industry",
    INTRO:
      "In general, the testing and certification (T&C) industry provides three types of services:",
    SERVICE_HEAD: ["Service", "Coverage", "Duration", "Resulting Product"],

    TESTING: {
      TITLE: "Testing",
      CONTENT_1:
        "Testing is the determination of one or more characteristics of an object according to a procedure. Examples include:",
      INCLUDE_LIST: [
        "Testing of a food product to determine its heavy metal contents",
        "Testing of blood to determine its red blood cell count",
      ],
      CONTENT_2:
        "Testing activities support a variety of business areas in meeting local needs, e.g. medical , construction materials, food, Chinese medicines, Jewellery, etc.",
      CONTENT_3:
        "On external demand, testing activities are mostly related to testing of consumer products for export, e.g. textiles, clothing and footwear, toys and games, electrical and electronic products, etc.",

      SUMMARY_TITLE:
        "Summary Table on Testing, Inspection and Certification Services",
    },
    INSPECTION: {
      TITLE: "Inspection",
      INSPECTION_MAY:
        "Inspection may include the examination of materials, products, installations, plants, processes, work procedures or services and determination of their conformity with requirements and the subsequent reporting of results of these activities to clients and, when required, to authorities. Examples include:",
      INSPECTION_OF_BATCH:
        "Inspection of a batch of products at the factory before shipment to determine whether the products comply with the buyer's specification",
      INSPECTION_OF_STRUCTURAL:
        "Inspection of structural welds to determine whether they meet the contractual and statutory requirements",
      ON_LOCAL: (
        <>
          On local demand, one example of inspection service is the inspection
          of indoor air quality at premises according to the Environmental
          Protection Department's "
          <a
            href="https://www.iaq.gov.hk/en/home/"
            className="underline text-[#00E]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indoor Air Quality Certification Scheme for Offices and Public
            Places
          </a>
          "
        </>
      ),
      ON_EXTERNAL:
        "On external demand, the need for inspection arises from international trade. It is a common practice for overseas buyers to arrange inspection of goods at the factory by an independent inspection body to confirm the quality of goods before shipment.",
    },
    CERTIFICATION: {
      TITLE: "Certification",
      INTRO:
        "Certification is a third-party attestation related to products, processes, systems or persons. Certification activities in Hong Kong can be broadly divided into three categories:",
    },
  },

  CN: {
    TITLE: "檢測認證業提供的服務",
    INTRO: "一般而言，檢測和認證業提供三種服務：",
    SERVICE_HEAD: ["服務", "對象", "適用時間", "	成品"],
    TESTING: {
      TITLE: "測試",
      CONTENT_1: "測試指按照程序測定物件的一項或多項特點，例子包括：",
      INCLUDE_LIST: ["測試食品的重金屬含量", "測試血液的紅血球數量。"],
      CONTENT_2:
        "測試活動為不同業務範疇如醫務化驗、建築材料、食品、中藥、珠寶等提供支援，以應付本地需求。",
      CONTENT_3:
        "在境外需求方面，測試活動大多與出口產品有關，如紡織品、衣服及鞋履、玩具和遊戲、電氣及電子產品等。",

      SUMMARY_TITLE: "測試、檢驗及認證服務總覽",
    },
    INSPECTION: {
      TITLE: "檢驗",
      INSPECTION_MAY:
        "檢驗包括對材料、產品、裝置、設備、過程、工作程序或服務進行審查，確定是否符合要求，以及隨後向客戶報告這些活動的結果，有需要時向官方機構報告。例子包括：",
      INSPECTION_OF_BATCH: `在產品付運前，於工廠檢驗整批產品，以確定是否符合買家的規格`,
      INSPECTION_OF_STRUCTURAL: `在檢驗結構焊接，以確定是否符合合約和法定的要求。`,
      ON_LOCAL: (
        <>
          在本地需求方面，其中一個檢驗工作例子，是根據環境保護署推行的自願
          <a
            href="https://www.iaq.gov.hk/en/home/"
            className="underline text-[#00E]"
            target="_blank"
            rel="noopener noreferrer"
          >
            「辦公室及公眾場所室內空氣質素檢定計劃」
          </a>
          在特定場所進行的室內空氣質素檢驗。
        </>
      ),
      ON_EXTERNAL:
        "在境外需求方面，國際貿易為貨品檢驗帶來需求。按照慣常做法，海外買家在貨品付運前會安排獨立檢驗機構在廠房現場驗收貨驗收貨品。",
    },
    CERTIFICATION: {
      TITLE: "認證",
      INTRO:
        "認證指由第三方就產品、過程、系統或人員提供保證。在香港，認證活動大概可分為三類：",
    },
  },
};

const TestingService: React.FC = () => {
  const { language } = useSettings();
  const pageText =
    language === Language.EN
      ? TC_SERVICE_PROVIDED_TEXT.EN
      : TC_SERVICE_PROVIDED_TEXT.CN;

  return (
    <div className="flex flex-col gap-[24px] text-body-m">
      <div>{pageText.TESTING.CONTENT_1}</div>
      {pageText.TESTING.INCLUDE_LIST.map((item, index) => {
        return (
          <div
            className="border-2 py-[24px] flex flex-row items-center px-[36px]"
            key={index}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/test.svg`}
              alt="testIcon"
            />
            <span className="text-body-m ml-4 semi-bold font-semibold ml-[16px]">
              {item}
            </span>
          </div>
        );
      })}

      <div>{pageText.TESTING.CONTENT_2}</div>
      <div>{pageText.TESTING.CONTENT_3}</div>
    </div>
  );
};

const InspectionService: React.FC = () => {
  const { language } = useSettings();
  const pageText =
    language === Language.EN
      ? TC_SERVICE_PROVIDED_TEXT.EN.INSPECTION
      : TC_SERVICE_PROVIDED_TEXT.CN.INSPECTION;
  const {
    INSPECTION_MAY,
    INSPECTION_OF_BATCH,
    INSPECTION_OF_STRUCTURAL,
    ON_LOCAL,
    ON_EXTERNAL,
  } = pageText;
  return (
    <div className="w-full flex flex-col gap-[24px]">
      <div className="text-body-m">{INSPECTION_MAY}</div>

      <div className="border-2 py-[24px] flex flex-row items-center px-[36px]">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/Inspection.svg`}
          alt="testIcon"
        />
        <span className="text-body-m ml-4 semi-bold font-semibold ml-[16px]">
          {INSPECTION_OF_BATCH}
        </span>
      </div>

      <div className="border-2 py-[24px] flex flex-row items-center px-[36px]">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/Inspection.svg`}
          alt="testIcon"
        />
        <span className="text-body-m ml-4 semi-bold font-semibold ml-[16px]">
          {INSPECTION_OF_STRUCTURAL}
        </span>
      </div>

      <div className="text-body-m">{ON_LOCAL}</div>

      <div className="text-body-m">{ON_EXTERNAL}</div>
    </div>
  );
};

const CertificateService: React.FC = () => {
  const { language } = useSettings();
  const isEN = language === Language.EN;
  const pageText = isEN
    ? TC_SERVICE_PROVIDED_TEXT.EN.CERTIFICATION
    : TC_SERVICE_PROVIDED_TEXT.CN.CERTIFICATION;
  const { INTRO } = pageText;

  const accordionMap = [
    {
      title: `(i) Management system certification, e.g. certification of an organisation's quality management system to ISO 9001`,
      titleCN: "(i)管理體系認證，例如符合ISO 9001要求的品質管理體系認證",
      content: (
        <div className="flex flex-col gap-[24px] !text-body-m">
          <div>
            There are various international standards for management system
            certification. Organisations seek certification to prove that they
            comply with these international standards for different reasons:
            improvement of the management of their organisations, as a marketing
            tool.
          </div>
          <div>
            ISO 9001 is an international standard that specifies generic
            requirements for a quality management system. Certification against
            this standard is the most popular management system certification in
            Hong Kong. There is high demand for other types of certification,
            e.g. ISO 14001 environmental management system certification,&nbsp;
            <span
              className="!text-highlight-s underline text-newPrimary cursor-pointer"
              onClick={() => {
                window.open("/tc-sector/environmental_protection", "_blank");
              }}
            >
              ISO 50001 energy management system certification
            </span>
            &nbsp;and ISO 45001 occupational health and safety management
            systems certification.
          </div>
        </div>
      ),
      contentCN: (
        <div className="flex flex-col gap-[24px] !text-body-m">
          <div>
            現時已有國際標準涵蓋各種管理體系認證。機構基於不同的原因申請符合各種國際標準的認證，包括改善機構管理、市場推廣。
          </div>
          <div>
            ISO 9001是一份列明品質管理體系一般規定的國際標準。ISO
            9001認證是香港最受歡迎的管理體系認證。此外，其他類別認證的需求甚殷，例如ISO
            14001環境管理體系認證、
            <span
              className="!text-highlight-s underline text-newPrimary cursor-pointer"
              onClick={() => {
                window.open("/tc-sector/environmental_protection", "_blank");
              }}
            >
              ISO 50001能源管理體系認證
            </span>
            以及ISO 45001職業健康安全管理體系認證。
          </div>
        </div>
      ),
    },
    {
      title: `(ii) Product certification, e.g. certification of a supplier's competence in producing a mobile phone to regulatory requirements`,
      titleCN:
        "(ii)產品認證，例如確保供應商提供符合法例要求的流動電話的產品認證",
      content: (
        <div className="!text-body-m">
          Product certification can improve stakeholders' confidence in the
          products supplied by a certified supplier. It can bring benefits to
          manufacturers (better business opportunities), regulatory authorities
          (less monitoring effort) and end-users (more reliable products).
          Product certification schemes adopted by accredited certification
          bodies in Hong Kong are related to construction materials, consumer
          products and food.
        </div>
      ),
      contentCN: (
        <div className="!text-body-m">
          產品認證可提高各界對獲認證供應商提供有關產品的信心。製造商可增加商機，監管機構可減少監管，用家可享用更可靠的產品，三方均有好處。香港的獲認可認證機構所採用的產品認證計劃主要與建築材料、消費品和食品有關。
        </div>
      ),
    },

    {
      title: `(iii) Balidation and verification, e.g. validation and/or verification of greenhouse gas assertions to ISO 14064-1, ISO 14064-2 or ISO/TS 14067`,
      titleCN:
        "(iii)審定及核查，例如符合ISO 14064-1, ISO 14064-2 or ISO/TS 14067要求的溫室氣體聲明書審定及/或核查",
      content: (
        <div className="flex flex-col gap-[24px] !text-body-m">
          <div>
            To tackle climate changes, many organisations around the world are
            implementing various initiatives to limit greenhouse gas (GHG)
            concentrations in the atmospheres. These initiatives rely on the
            quantification, monitoring, reporting, validation and verification
            of GHG emissions and/or removals.
          </div>
          <div>
            To enhance the consistency, credibility and transparency of GHG
            quantification, monitoring and reporting, organisations may validate
            and verify their GHG assertions based on ISO 14064-1 (organisation
            level), ISO 14064-2 (project level) or ISO/TS 14067 (product level).
          </div>
        </div>
      ),
      contentCN: (
        <div className="flex flex-col gap-[24px] !text-body-m">
          <div>
            為了應對氣候變化，全球多個機構正在推行各項措施，控制大氣中溫室氣體的含量。這些措施有賴對溫室氣體的排放及/或移除進行量化、監察、報告、審定和核查。
          </div>
          <div>
            為了增強在溫室氣體量化、監察、報告方面的一致性、可信度和透明度，各機構可以按照ISO
            14064-1（機構層面）、ISO 14064-2（項目層面）或ISO/TS
            14067（產品層面）對溫室氣體量聲明書進行審定和核查。
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="text-body-m">{INTRO}</div>

      {accordionMap.map((a, i) => (
        <Accordion
          key={i}
          title={isEN ? a.title : a.titleCN}
          details={isEN ? a.content : a.contentCN}
        />
      ))}
    </div>
  );
};

export const ServiceProvided: React.FC = () => {
  const { language } = useSettings();
  const isEn = language === Language.EN;
  const pageText = isEn
    ? TC_SERVICE_PROVIDED_TEXT.EN
    : TC_SERVICE_PROVIDED_TEXT.CN;
  const { TITLE, SERVICE_HEAD } = pageText;

  const [activeButton, setActiveButton] = useState<number>(0);
  const serviceProvidedInfo = [
    {
      label: pageText.TESTING.TITLE,
      component: <TestingService />,
    },
    {
      label: pageText.INSPECTION.TITLE,
      component: <InspectionService />,
    },
    {
      label: pageText.CERTIFICATION.TITLE,
      component: <CertificateService />,
    },
  ];

  const servicesTableRowsData = [
    [
      "Testing",
      "An object",
      "In general short term (applies only to the samples tested)",
      "Test report",
    ],
    [
      "Inspection",
      "Materials, Products; Installations; Plants; Processes; Work Procedures; Services",
      "In general short term (e.g. for a batch of products)",
      "Inspection report",
    ],
    [
      "Certification",
      "Management System; Products; Greenhouse Gas Assertions",
      "In general longer term (e.g. one-year)",
      "Certificate; Greenhouse gas validation and verification report",
    ],
  ];

  const servicesTableRowsData_CN = [
    [
      "測試",
      "一件物件",
      <>
        一般屬短期
        <br />
        （只適用於已測試的樣本）
      </>,
      "測試報告",
    ],
    [
      "檢驗",
      <>
        材料
        <br />
        產品
        <br />
        裝置
        <br />
        設備
        <br />
        過程
        <br />
        工作程序
        <br />
        服務
      </>,
      <>
        一般屬短期
        <br />
        （例如只適用於同一批產品）
      </>,
      "檢驗報告",
    ],
    [
      "認證",
      <>
        管理體系
        <br />
        產品
        <br />
        溫室氣體聲明書
      </>,
      <>
        一般屬較長期
        <br />
        （例如一年）
      </>,
      "認證證書；溫室氣體審定和核查報告",
    ],
  ];
  return (
    <div className="w-full flex flex-col gap-[24px] text-justify">
      <div className="flex-1">
        <SquareTitle title={TITLE} />
      </div>
      <p className="text-body-m">{pageText.INTRO}</p>

      <div className="flex flex-wrap gap-[8px]">
        {serviceProvidedInfo.map((service, index) => {
          const isActivated = index === activeButton;
          return (
            <button
              key={index}
              style={isActivated ? activatedButtonStyle : normalButtonStyle}
              onClick={() => {
                setActiveButton(index);
              }}
            >
              <p className="text-highlight-xs">{service.label}</p>
            </button>
          );
        })}
      </div>
      <div>{serviceProvidedInfo[activeButton].component}</div>
      <hr />
      <div className="text-heading-l">{pageText.TESTING.SUMMARY_TITLE}</div>
      <div className="mb-[48px]">
        <SummaryTable
          tableHeads={SERVICE_HEAD}
          tableRows={isEn ? servicesTableRowsData : servicesTableRowsData_CN}
        />
      </div>
    </div>
  );
};
