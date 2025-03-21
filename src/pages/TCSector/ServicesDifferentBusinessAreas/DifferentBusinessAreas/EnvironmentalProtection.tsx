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
import { useSettings } from "../../../../context";

const timeLineData: string[] = [
  "Define the scope (i.e. activities, facilities, decisions, etc. covered), boundary (e.g. a process, a site, an entire organisation) and policy of an EnMS",
  "Identify applicable legal requirements and other requirements (e.g. public commitments of the organisation)",
  "Conduct energy review and identify areas of significant energy use (e.g. office equipment, lighting)",
  "Establish an energy baseline and identify energy performance indicators (e.g. energy consumption per time or per unit of production)",
  "Obtain management authorisation to implement the energy management action plans and operate the EnMS",
  "Monitor, review, maintain and improve the EnMS continuously",
];

const bSectionMap: Record<number, string> = {
  0: "ISO 14064-1 details the principles and requirements for designing, developing, managing and reporting an organisation-level GHG inventory. A GHG inventory refers to an organisation's physical units and processes that release and remove GHG into/from the atmosphere, and its GHG emissions and removals.",
  1: `ISO 14064-2 focuses on projects that aim to reduce GHG emissions and/or increase GHG removals ("GHG projects"). The standard includes principles and requirements for determining project baseline scenarios and for monitoring, quantifying and reporting project performance relative to the baseline scenarios.`,
  2: "ISO/TS 14067 specifies principles, requirements and guidelines for the quantification and communication of the carbon footprint of a product (CFP). CFP refers to the sum of GHG emissions and removals involved in the life cycle of a product.",
};

const cSectionMap: Record<
  number,
  { component: React.ReactNode; imgUrl: string }
> = {
  0: {
    component: (
      <p>
        For an organisation, "GHG verification" is to confirm a GHG inventory
        quantified and reported by that organisation.
      </p>
    ),

    imgUrl: "Environmental_c_1.png",
  },
  1: {
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

  2: {
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
};

const bSectionButtonArray = [
  "Organisational Level: ISO 14064-1",
  "Project Level: ISO 14064-2",
  "Product Carbon Footprint: ISO/TS 14067",
];

const cSectionButtonArray = [
  "organisation",
  "GHG project",
  "the carbon footprint of a product (CFP)",
];

export const EnvironmentalProtection: React.FC = () => {
  const businessAreaTitle = "Environmental Protection" as BusinessAreaTitle;
  const [activeBSectionButton, setActiveBSectionButton] = useState<number>(0);
  const [activeCSectionButton, setActiveCSectionButton] = useState<number>(0);
  const { isPC } = useSettings();

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
            {bSectionButtonArray.map((btn, index) => {
              const isActivated = index === activeBSectionButton;
              return (
                <button
                  key={index}
                  style={isActivated ? activatedButtonStyle : normalButtonStyle}
                  onClick={() => {
                    setActiveBSectionButton(index);
                  }}
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <div>{bSectionMap[activeBSectionButton]}</div>
        </>
      ),
    },
    {
      title: "What is GHG Validation & Verification?",
      content: (
        <>
          <div className="flex flex-wrap gap-[8px] mb-[16px]">
            {cSectionButtonArray.map((btn, index) => {
              const isActivated = index === activeCSectionButton;
              return (
                <button
                  key={index}
                  style={isActivated ? activatedButtonStyle : normalButtonStyle}
                  onClick={() => {
                    setActiveCSectionButton(index);
                  }}
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <div>{cSectionMap[activeCSectionButton].component}</div>
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
            <li>
              enhance the consistency, credibility and transparency of your GHG
              quantification, monitoring and reporting
            </li>
            <br />
            <li>
              help develop and implement your organisation's GHG management
              plans or GHG projects
            </li>
            <br />
            <li>
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
            <li>
              ascertain your current energy use status in order to devise
              corresponding measures to promote efficient energy use
            </li>
            <br />
            <li>
              formulate a clear framework to promote continual improvement in
              energy management
            </li>
            <br />

            <li>raise staff awareness on energy efficiency and conservation</li>
            <br />

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
              {timeLineData.map((item, index) => (
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
                  {index + 1 !== timeLineData.length && (
                    <div className="w-full flex justify-center items-center pt-[10px] pb-[16px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
              ))}
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
            <li>
              enhance the confidence of relevant stakeholders (e.g. clients,
              business partners) in the quality of your EnMS
            </li>
            <br />
            <li>
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
          title="Hong Kong's Testing and Certification Services on the Environmental Protection Front"
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/environmental_protection_pdf.png"
          mediaLink="https://www.youtube.com/embed/5ncIXAbe9mI"
          iconPath="VIDEO.png"
        />
      </div>
      <p className="text-heading-l mb-[24px]">
        Greenhouse Gas (GHG) Quantification, Validation and Verification
      </p>
      <FileTemplate
        title={
          "Greenhouse Gas (GHG) Quantification, Validation and Verification"
        }
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/Greenhouse.png"
        pdfHyperlink="/en/doc/2017_ITC_Leaflet_ISO14064.pdf"
      />

      <div className="w-full flex flex-col gap-[24px] my-[24px]">
        {environmentalProtection.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            defaultExpanded={false}
            details={<div className="text-body-m">{item.content}</div>}
          />
        ))}
      </div>

      <hr className="my-[24px]" />

      <p className="text-heading-l mb-[24px]">
        ISO 50001 Energy Management System Certification
      </p>
      <FileTemplate
        title={"ISO 50001 Energy Management System Certification"}
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/ISO50001.png"
      />

      <div className="w-full flex flex-col gap-[24px] my-[24px]">
        {EnMS.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            defaultExpanded={false}
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
          "tcSector/servicesDifferentBusinessAreas/EnvironmentalProtectionBanner.png"
        }
      />
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb
              items={handleReturnDifferentBusinessAreasBreadcrumb(
                businessAreaTitle
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
