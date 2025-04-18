import React, { useState } from "react";
import {
  type BusinessAreaTitle,
  DifferentBusinessAreasDirectorySidebar,
  handleReturnDifferentBusinessAreasBreadcrumb,
} from "./utils";
import { navItemEnum } from "../../../../const";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  FileTemplate,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
  activatedButtonStyle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
  normalButtonStyle,
} from "../../../../components";
import { Language, useSettings } from "../../../../context";

const multilingual = {
  en: {
    title: "Environmental Protection",
    mediaTitle:
      "Hong Kong's Testing and Certification Services on the Environmental Protection Front",
    greenhouse:
      "Greenhouse Gas (GHG) Quantification, Validation and Verification",

    iso_energy: "ISO 50001 Energy Management System Certification",

    timeLineData: [
      "Define the scope (i.e. activities, facilities, decisions, etc. covered), boundary (e.g. a process, a site, an entire organisation) and policy of an EnMS",
      "Identify applicable legal requirements and other requirements (e.g. public commitments of the organisation)",
      "Conduct energy review and identify areas of significant energy use (e.g. office equipment, lighting)",
      "Establish an energy baseline and identify energy performance indicators (e.g. energy consumption per time or per unit of production)",
      "Obtain management authorisation to implement the energy management action plans and operate the EnMS",
      "Monitor, review, maintain and improve the EnMS continuously",
    ],

    bSectionMap: [
      "ISO 14064-1 details the principles and requirements for designing, developing, managing and reporting an organisation-level GHG inventory. A GHG inventory refers to an organisation's physical units and processes that release and remove GHG into/from the atmosphere, and its GHG emissions and removals.",
      `ISO 14064-2 focuses on projects that aim to reduce GHG emissions and/or increase GHG removals ("GHG projects"). The standard includes principles and requirements for determining project baseline scenarios and for monitoring, quantifying and reporting project performance relative to the baseline scenarios.`,
      "ISO/TS 14067 specifies principles, requirements and guidelines for the quantification and communication of the carbon footprint of a product (CFP). CFP refers to the sum of GHG emissions and removals involved in the life cycle of a product.",
    ],

    bSectionButtonArray: [
      "Organisational Level: ISO 14064-1",
      "Project Level: ISO 14064-2",
      "Product Carbon Footprint: ISO/TS 14067",
    ],

    cSectionButtonArray: [
      "organisation",
      "GHG project",
      "the carbon footprint of a product (CFP)",
    ],
  },
  cn: {
    title: "環保",
    mediaTitle: "香港在環保方面的檢測和認證服務",
    greenhouse: "溫室氣體量化、審定和核查",

    iso_energy: "ISO 50001能源管理體系認證",

    timeLineData: [
      "決定能源管理體系的範圍（即所涵蓋的活動、設施、決策等）、界限（如一套流程、一個地點、整個機構）和方針",
      "識別適用的法律規定及其他要求（如機構對公眾的承諾）",
      "進行能源檢討，識別重大能源使用的範疇（如辦公室設備、照明系統等）",
      "建立能源基線和能源表現指標（如一段時間內的或一個生產單位的能耗）",
      "獲得管理層批准執行能源管理工作計劃和實施能源管理體系",
      "持續監視、檢討、維護和改善能源管理體系",
    ],

    bSectionMap: [
      "ISO 14064-1說明為某機構設計、開發、管理和報告其溫室氣體清單的原則和要求。溫室氣體清單是指該機構內所有涉及排放溫室氣體到大氣中或從大氣中減除溫室氣體的單位和程序，以及該機構的溫室氣體排放量和移除量。",
      `ISO 14064-2著重討論旨在減少溫室氣體排放量及/或增加溫室氣體移除量的項目（「溫室氣體項目」）。本標準包括確定項目基線和相對於項目基線表現的監測、量化和報告項目表現的原則和要求。`,
      "ISO/TS 14067詳細指明產品碳足跡（CFP）量化和溝通的原則、要求和指引。CFP是指某產品在其生命週期中所涉及的溫室氣體排放量和移除量之總和。",
    ],

    bSectionButtonArray: [
      "機構層面：ISO 14064-1",
      "項目層面：ISO 14064-2",
      "產品碳足跡：ISO/TS 14067",
    ],

    cSectionButtonArray: ["機構", "溫室氣體項目", "產品碳足跡"],
  },
};

const cSectionMap_EN = [
  {
    component: (
      <p>
        For an organisation, "GHG verification" is to confirm a GHG inventory
        quantified and reported by that organisation.
      </p>
    ),

    imgUrl: "Environmental_c_1.png",
  },
  {
    component: (
      <p>
        <span className="!text-highlight-m">For a GHG project</span>, "GHG
        validation" is to evaluate the GHG project plan before implementing that
        project. "GHG verification" is to confirm the reported GHG emission
        reductions and/or GHG removal enhancements that occur as a result of the
        project.
      </p>
    ),

    imgUrl: "Environmental_c_2.png",
  },
  {
    component: (
      <p>
        <span className="!text-highlight-m">
          For the carbon footprint of a product (CFP)
        </span>
        , "CFP verification" is to confirm the CFP study report.
      </p>
    ),

    imgUrl: "Environmental_c_3.png",
  },
];
const cSectionMap_CN = [
  {
    component: (
      <p>
        <span className="!text-highlight-m">就機構而言，</span>
        「溫室氣體核查」旨在確定該機構所量化和報告的溫室氣體清單。
      </p>
    ),

    imgUrl: "Environmental_c_1.png",
  },
  {
    component: (
      <p>
        <span className="!text-highlight-m">就溫室氣體項目而言，</span>
        「溫室氣體審定」旨在於推行該項目前評估項目計劃，而「溫室氣體核查」則旨在確定該項目推行後所報告的溫室氣體減排量及/或增加溫室氣體移除量。
      </p>
    ),

    imgUrl: "Environmental_c_2.png",
  },
  {
    component: (
      <p>
        <span className="!text-highlight-m">就產品碳足跡而言，</span>｢
        產品碳足跡核查 ｣ 旨在確定產品碳足跡研究報告。
      </p>
    ),

    imgUrl: "Environmental_c_3.png",
  },
];
export const EnvironmentalProtection: React.FC = () => {
  const { isPC, language, getPageText, getSingleNode, processText } =
    useSettings();
  const page_text = getPageText(multilingual);
  const isSimpleCN = language === Language.ZH_CN;
  const cSectionMap =
    language === Language.EN ? cSectionMap_EN : cSectionMap_CN;
  const businessAreaTitle = page_text.title as BusinessAreaTitle;
  const [activeBSectionButton, setActiveBSectionButton] = useState<number>(0);
  const [activeCSectionButton, setActiveCSectionButton] = useState<number>(0);

  const environmentalProtection: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "What is Greenhouse Gas (GHG)?",
      content: (
        <p>
          GHG refers to the gaseous constituents of the atmosphere, both natural
          and anthropogenic, that absorb and emit infra-red radiation. To tackle
          climate change, many places around the world are implementing various
          initiatives to limit GHG concentrations in the atmosphere. These
          initiatives rely on the&nbsp;
          <span className="!text-highlight-m">
            quantification, monitoring, reporting, validation and verification
            of GHG emissions and/or removals
          </span>
          .
        </p>
      ),
    },
    {
      title:
        "International Standards/Technical Specification on GHG Quantification",
      content: (
        <>
          <div className="flex flex-wrap gap-[8px] mb-[16px]">
            {(page_text.bSectionButtonArray as string[]).map((btn, index) => {
              const isActivated = index === activeBSectionButton;
              return (
                <button
                  key={index}
                  style={isActivated ? activatedButtonStyle : normalButtonStyle}
                  onClick={() => {
                    setActiveBSectionButton(index);
                  }}
                  aria-label={btn}
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <div>
            {(page_text.bSectionMap as React.ReactNode[])[activeBSectionButton]}
          </div>
        </>
      ),
    },
    {
      title: "What is GHG Validation & Verification?",
      content: (
        <>
          <div className="flex flex-wrap gap-[8px] mb-[16px]">
            {(page_text.cSectionButtonArray as string[]).map((btn, index) => {
              const isActivated = index === activeCSectionButton;
              return (
                <button
                  tabIndex={0}
                  key={index}
                  style={isActivated ? activatedButtonStyle : normalButtonStyle}
                  onClick={() => {
                    setActiveCSectionButton(index);
                  }}
                  aria-label={btn}
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <div>
            {isSimpleCN
              ? getSingleNode(
                  cSectionMap[activeCSectionButton].component,
                  cSectionMap[activeCSectionButton].component
                )
              : cSectionMap[activeCSectionButton].component}
          </div>
          <div
            className={`overflow-hidden ${
              isPC ? "w-[500px]" : "w-full"
            } mt-[16px]`}
          >
            <img
              className="w-full h-auto object-contain"
              src={
                process.env.PUBLIC_URL +
                "/assets/tcSector/servicesDifferentBusinessAreas/" +
                cSectionMap[activeCSectionButton].imgUrl
              }
              alt={cSectionMap[activeCSectionButton].imgUrl}
              aria-hidden="true"
            />
          </div>
        </>
      ),
    },

    {
      title: "Why adopt GHG Validation and Verification?",
      content: (
        <>
          <p>GHG Validation and Verification can:</p>
          <br />
          <ul>
            <li className="mb-[1em]">
              enhance the consistency, credibility and transparency of your GHG
              quantification, monitoring and reporting
            </li>
            <li className="mb-[1em]">
              help develop and implement your organisation's GHG management
              plans or GHG projects
            </li>
            <li className="mb-[1em]">
              facilitate your tracking of the performance and progress in the
              reduction of GHG emissions and increase in GHG removals
            </li>
          </ul>
        </>
      ),
    },
    {
      title:
        "Validation/verification bodies accredited by HKAS for GHG Validation & Verification",
      content: (
        <>
          <p>
            The Hong Kong Accreditation Service (HKAS) offers accreditation
            service for GHG validation and verification for
            validation/verification bodies' voluntary application. Accredited
            validation/verification bodies' technical competence is rigorously
            assessed by HKAS, so that the reliability of their results can be
            assured.
          </p>
          <br />
          <p>
            For the list of HKAS-accredited validation/verification bodies,
            please visit&nbsp;
            <a
              aria-label="HKAS's website  – opens in a new tab"
              href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hkcas.html#t_services"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              HKAS's website
            </a>
            .
          </p>
        </>
      ),
    },
  ];

  const environmentalProtection_cn: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "什麼是溫室氣體？",
      content: (
        <p>
          溫室氣體是指大氣中天然存在和人類活動產生、能吸收和釋放紅外線輻射的氣體。為了應對氣候變化，世界各地正在推行各項措施，控制大氣中溫室氣體的含量。推行這些措施，有賴
          <span className="!text-highlight-m">
            對溫室氣體的排放及/或移除進行量化、監察、報告、審定和核查
          </span>
          。
        </p>
      ),
    },
    {
      title: "有關溫室氣體量化的國際標準",
      content: (
        <>
          <div className="flex flex-wrap gap-[8px] mb-[16px]">
            {(page_text.bSectionButtonArray as string[]).map((btn, index) => {
              const isActivated = index === activeBSectionButton;
              return (
                <button
                  key={index}
                  tabIndex={0}
                  style={isActivated ? activatedButtonStyle : normalButtonStyle}
                  onClick={() => {
                    setActiveBSectionButton(index);
                  }}
                  aria-label={btn}
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <div>
            {(page_text.bSectionMap as React.ReactNode[])[activeBSectionButton]}
          </div>
        </>
      ),
    },
    {
      title: "什麼是溫室氣體審定和核查？",
      content: (
        <>
          <div className="flex flex-wrap gap-[8px] mb-[16px]">
            {(page_text.cSectionButtonArray as string[]).map((btn, index) => {
              const isActivated = index === activeCSectionButton;
              const textButton = processText(btn);
              return (
                <button
                  key={index}
                  tabIndex={0}
                  style={isActivated ? activatedButtonStyle : normalButtonStyle}
                  onClick={() => {
                    setActiveCSectionButton(index);
                  }}
                  aria-label={textButton}
                >
                  {textButton}
                </button>
              );
            })}
          </div>
          <div>
            {isSimpleCN
              ? getSingleNode(
                  cSectionMap[activeCSectionButton].component,
                  cSectionMap[activeCSectionButton].component
                )
              : cSectionMap[activeCSectionButton].component}
          </div>
          <div
            className={`overflow-hidden ${
              isPC ? "w-[500px]" : "w-full"
            } mt-[16px]`}
          >
            <img
              className="w-full h-auto object-contain"
              src={
                process.env.PUBLIC_URL +
                "/assets/tcSector/servicesDifferentBusinessAreas/" +
                cSectionMap[activeCSectionButton].imgUrl
              }
              alt={cSectionMap[activeCSectionButton].imgUrl}
              aria-hidden="true"
            />
          </div>
        </>
      ),
    },
    {
      title: "為何採用溫室氣體審定和核查？",
      content: (
        <>
          <p>採用溫室氣體審定和核查可以：</p>
          <br />
          <ul>
            <li className="mb-[1em]">
              增加機構在溫室氣體量化、監察和報告方面的一致性、可信度和透明度
            </li>
            <li className="mb-[1em]">
              協助機構制訂和實施溫室氣體管理計劃或溫室氣體項目
            </li>
            <li className="mb-[1em]">
              協助機構追蹤溫室氣體減排及/或溫室氣體增加移除量方面的績效和進展
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "香港認可處認可的審定/核查機構",
      content: (
        <>
          <p>
            香港認可處提供ISO
            14064審定和核查認可服務，供審定/核查機構自願申請。獲認可審定/核查機構的技術能力由香港認可處進行嚴格評審，因此能確保其審定/核查結果更為可靠。
          </p>
          <br />
          <p>
            獲香港認可處認可的相關審定/核查機構名單，請瀏覽
            <a
              aria-label="香港認可處網頁"
              href={
                language === Language.ZH_TW
                  ? "https://www.itc.gov.hk/ch/quality/hkas/conformity_assessment_bodies/hkcas.html"
                  : "https://www.itc.gov.hk/gb/quality/hkas/conformity_assessment_bodies/hkcas.html"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              香港認可處網頁
            </a>
            。
          </p>
        </>
      ),
    },
  ];

  const EnMS_cn: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "什麼是能源管理體系認證？",
      content: (
        <p>
          「管理體系」是由多個互相關聯或互動組成部分（如組織架構、活動策劃、人員職責）所構成的體系，協助機構制訂政策及目標，並達到這些目標。
          <br />
          <br />
          「管理體系認證」是指由機構委託第三方（即「認證機構」），就管理體系提供保證。
          <br />
          <br />
          在環境保護方面，國際標準化組織於2011年推出ISO
          50001能源管理體系的國際標準，旨在支援機構有系統地提升其能源表現。認證機構可按此標準為這些機構提供認證服務。
        </p>
      ),
    },
    {
      title: "誰可採用ISO 50001來設立能源管理體系？",
      content: (
        <p>ISO 50001適用於任何機構，不論其規模、所屬行業或地理位置如何。</p>
      ),
    },
    {
      title: "實施ISO 50001能源管理體系的好處",
      content: (
        <>
          <p>實施ISO 50001能源管理體系可以協助機構：</p>
          <br />
          <ul>
            <li className="mb-[1em]">
              了解現行能源使用狀況，以制訂相應的善用能源措施
            </li>
            <li className="mb-[1em]">制訂清晰的框架以促進持續改善能源管理</li>
            <li className="mb-[1em]">提高員工對能源效益和節能的意識</li>

            <li>透過節省能源消耗和減低成本，從而增加財政資源</li>
          </ul>
        </>
      ),
    },

    {
      title: "如何設立及運作ISO 50001能源管理體系？",
      content: (
        <>
          <div className="mb-[16px]">
            <div className="w-full flex flex-col">
              {(page_text.timeLineData as React.ReactNode[]).map(
                (item, index) => (
                  <div key={index} className="flex flex-col">
                    <div
                      className={`text-highlight-s p-[16px] border-[1px] justify-start content-center w-full ${
                        index % 2 === 0
                          ? "border-[#E0E0E0]"
                          : "border-[#E0E0E0] bg-[#E0E0E0]"
                      }`}
                    >
                      <p>{item}</p>
                    </div>
                    {index + 1 !==
                      (page_text.timeLineData as React.ReactNode[]).length && (
                      <div className="w-full flex justify-center items-center pt-[10px] pb-[16px]">
                        <svg
                          aria-hidden="true"
                          xmlns="https://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_2939_67250)">
                            <path
                              d="M7.09323 0.826172H14.366V10.5231H20.2326L10.7296 20.0262L1.22656 10.5231H7.09323V0.826172Z"
                              fill="#233F55"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2939_67250">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.515625 0.523438)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </>
      ),
    },
    {
      title: "ISO 50001能源管理體系認證如何幫到你？",
      content: (
        <>
          <p>透過獲取ISO 50001能源管理體系認證，你的機構可以：</p>
          <br />
          <ul>
            <li className="mb-[1em]">
              加強相關持份者（如客戶、生意夥伴）對你的能源管理體系質素的信心
            </li>
            <li className="mb-[1em]">
              證明致力持續推行符合國際標準的能源管理體系，藉以提升聲譽
            </li>
          </ul>
        </>
      ),
    },

    {
      title: "如何取得ISO 50001能源管理體系認證？",
      content:
        "部分本地的認證機構現提供ISO 50001能源管理體系認證服務。機構可以委託某認證機構進行認證審核。如成功通過認證，機構須定期接受監察審核，並每隔三年接受重新認證審核。",
    },
    {
      title: "獲香港認可處認可的ISO 50001能源管理體系認證機構",
      content: (
        <>
          <p>
            香港認可處提供ISO
            50001認證認可服務，供認證機構自願申請。認證機構可透過認可就其能力獲得第三方肯定。獲認可認證機構的技術能力由香港認可處進行嚴格評審，因此能確保其認證結果更為可靠。
          </p>
          <br />
          <p>
            獲香港認可處認可的相關認證機構名單，請瀏覽
            <a
              aria-label="香港認可處網頁"
              href={
                language === Language.ZH_TW
                  ? "https://www.itc.gov.hk/ch/quality/hkas/conformity_assessment_bodies/hkcas.html"
                  : "https://www.itc.gov.hk/gb/quality/hkas/conformity_assessment_bodies/hkcas.html"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              香港認可處網頁
            </a>
            。
          </p>
        </>
      ),
    },
  ];

  const EnMS: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "What is Energy Management System Certification (EnMS)?",
      content: (
        <p>
          "Management system" is a set of inter-related or interacting elements
          (e.g. organisation structure, planning activities, staff
          responsibilities) to help your organisation establish policy and
          objectives and achieve these objectives.
          <br />
          <br />
          "Management system certification" is an attestation of the management
          system by a third party (i.e. "certification body") engaged by your
          organisation.
          <br />
          <br />
          On the environmental protection front, the International Organisation
          for Standardisation published the international standard ISO 50001 for
          EnMS in 2011 to support organisations to improve their energy
          performance through a systematic approach. Certification bodies can
          provide certification services based on this standard for these
          organisations.
        </p>
      ),
    },
    {
      title: "Who can adopt ISO 50001 to set up an EnMS?",
      content: (
        <p>
          ISO 50001 is applicable to any organisations - whatever their size,
          industry or geographical location.
        </p>
      ),
    },
    {
      title: "Benefits of Implementing an ISO 50001-based EnMS",
      content: (
        <>
          <p>
            Implementation of an ISO 50001-based EnMS can help your
            organisation:
          </p>
          <br />
          <ul>
            <li className="mb-[1em]">
              ascertain your current energy use status in order to devise
              corresponding measures to promote efficient energy use
            </li>
            <li className="mb-[1em]">
              formulate a clear framework to promote continual improvement in
              energy management
            </li>

            <li className="mb-[1em]">
              raise staff awareness on energy efficiency and conservation
            </li>

            <li>
              increase financial savings as a result of energy saving and cost
              reduction
            </li>
          </ul>
        </>
      ),
    },

    {
      title: "How to set up & run an ISO 50001-based EnMS?",
      content: (
        <>
          <div className="mb-[16px]">
            <div className="w-full flex flex-col">
              {(page_text.timeLineData as React.ReactNode[]).map(
                (item, index) => (
                  <div key={index} className="flex flex-col">
                    <div
                      className={`text-highlight-s p-[16px] border-[1px] justify-start content-center w-full ${
                        index % 2 === 0
                          ? "border-[#E0E0E0]"
                          : "border-[#E0E0E0] bg-[#E0E0E0]"
                      }`}
                    >
                      <p>{item}</p>
                    </div>
                    {index + 1 !==
                      (page_text.timeLineData as React.ReactNode[]).length && (
                      <div className="w-full flex justify-center items-center pt-[10px] pb-[16px]">
                        <svg
                          aria-hidden="true"
                          xmlns="https://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_2939_67250)">
                            <path
                              d="M7.09323 0.826172H14.366V10.5231H20.2326L10.7296 20.0262L1.22656 10.5231H7.09323V0.826172Z"
                              fill="#233F55"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2939_67250">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.515625 0.523438)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </>
      ),
    },
    {
      title: "How can ISO 50001 EnMS Certification help your Organisation?",
      content: (
        <>
          <p>
            Through obtaining ISO 50001 EnMS certification, your organisation
            can:
          </p>
          <br />
          <ul>
            <li className="mb-[1em]">
              enhance the confidence of relevant stakeholders (e.g. clients,
              business partners) in the quality of your EnMS
            </li>
            <li className="mb-[1em]">
              enhance reputation by demonstrating ongoing commitment to
              implementing an EnMS in compliance with international standard
            </li>
          </ul>
        </>
      ),
    },

    {
      title: "How to obtain ISO 50001 EnMS Certification?",
      content:
        "In Hong Kong, some certification bodies now provide ISO 50001 EnMS certification services. Your organisation can engage a certification body to conduct certification audits. Once successfully certified, your organisation has to undergo surveillance audits at periodic intervals and re-certification audits at three-year intervals.",
    },

    {
      title:
        "Certification bodies accredited by HKAS for ISO 50001 Certification",
      content: (
        <>
          <p>
            The Hong Kong Accreditation Service (HKAS) offers accreditation
            service for ISO 50001 certification for certification bodies'
            voluntary application. Accredited certification bodies' technical
            competence is rigorously assessed by HKAS, so that the reliability
            of their results can be assured.
          </p>
          <br />
          <p>
            For the list of HKAS-accredited certification bodies, please visit
            the&nbsp;
            <a
              aria-label="HKAS's website  – opens in a new tab"
              href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              HKAS's website
            </a>
            .
          </p>
        </>
      ),
    },
  ];

  const environmentalData =
    language === Language.EN
      ? environmentalProtection
      : environmentalProtection_cn;
  const EnMsData = language === Language.EN ? EnMS : EnMS_cn;

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={businessAreaTitle}
    />
  );

  const youtubeTemplateLink: Record<Language, string> = {
    [Language.EN]: "https://www.youtube.com/embed/5ncIXAbe9mI",
    [Language.ZH_TW]: "https://www.youtube.com/embed/OXaj7f9-ZOk",
    [Language.ZH_CN]: "https://www.youtube.com/embed/OXaj7f9-ZOk",
  };

  const content = (
    <>
      <SquareTitle title={businessAreaTitle} />

      <div className="my-[24px]">
        <MediaTemplate
          title={page_text.mediaTitle as string}
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/environmental_protection_pdf.png"
          mediaLink={youtubeTemplateLink[language]}
          iconPath="VIDEO.png"
        />
      </div>
      <div className="text-heading-l mb-[24px]">
        {page_text.greenhouse as React.ReactNode[]}
      </div>
      <FileTemplate
        title={page_text.greenhouse as string}
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/Greenhouse.png"
        pdfHyperlink="/en/doc/2017_ITC_Leaflet_ISO14064.pdf"
      />

      <div className="w-full flex flex-col gap-[24px] my-[24px]">
        {environmentalData.map((item, index) => (
          <Accordion
            key={index}
            title={processText(item.title)}
            defaultExpanded={false}
            details={
              <div className="text-body-m">
                {isSimpleCN
                  ? getSingleNode(item.content, item.content)
                  : item.content}
              </div>
            }
          />
        ))}
      </div>

      <hr className="my-[24px]" />

      <div className="text-heading-l mb-[24px]">
        {page_text.iso_energy as React.ReactNode[]}
      </div>
      <FileTemplate
        title={page_text.iso_energy as string}
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/ISO50001.png"
      />

      <div className="w-full flex flex-col gap-[24px] my-[24px]">
        {EnMsData.map((item, index) => (
          <Accordion
            key={index}
            title={processText(item.title)}
            defaultExpanded={false}
            details={
              <div className="text-body-m">
                {isSimpleCN
                  ? getSingleNode(item.content, item.content)
                  : item.content}
              </div>
            }
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
          "tcSector/servicesDifferentBusinessAreas/EnvironmentalProtectionBanner.png"
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
            <div className="flex-1">{content}</div>
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
