import React, { useState } from "react";
import { TC_SERVICE_PROVIDED_TEXT } from "../lang";
import {
  Accordion,
  SquareTitle,
  SummaryTable,
  Link,
} from "../../../components";
import { activatedButtonStyle, normalButtonStyle } from "../../../components";

const pageText = TC_SERVICE_PROVIDED_TEXT.EN;

const TestingService: React.FC = () => {
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
  return (
    <div className="w-full flex flex-col gap-[24px]">
      <div>
        Inspection may include the examination of materials, products,
        installations, plants, processes, work procedures or services and
        determination of their conformity with requirements and the subsequent
        reporting of results of these activities to clients and, when required,
        to authorities. Examples include:
      </div>

      <div className="border-2 py-[24px] flex flex-row items-center px-[36px]">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/Inspection.svg`}
          alt="testIcon"
        />
        <span className="text-body-m ml-4 semi-bold font-semibold ml-[16px]">
          Inspection of a batch of products at the factory before shipment to
          determine whether the products comply with the buyer's specification
        </span>
      </div>

      <div className="border-2 py-[24px] flex flex-row items-center px-[36px]">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/Inspection.svg`}
          alt="testIcon"
        />
        <span className="text-body-m ml-4 semi-bold font-semibold ml-[16px]">
          Inspection of structural welds to determine whether they meet the
          contractual and statutory requirements
        </span>
      </div>

      <div>
        On local demand, one example of inspection service is the inspection of
        indoor air quality at premises according to the Environmental Protection
        Department's "
        <Link linkColor="default" outerLink="https://www.iaq.gov.hk/en/home/">
          Indoor Air Quality Certification Scheme for Offices and Public Places
        </Link>
        "
      </div>

      <div>
        On external demand, the need for inspection arises from international
        trade. It is a common practice for overseas buyers to arrange inspection
        of goods at the factory by an independent inspection body to confirm the
        quality of goods before shipment.
      </div>
    </div>
  );
};

const CertificateService: React.FC = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div>
        Certification is a third-party attestation related to products,
        processes, systems or persons. Certification activities in Hong Kong can
        be broadly divided into three categories:
      </div>

      <div>
        <Accordion
          title="(i) Management system certification, e.g. certification of an organisation's quality management system to ISO 9001"
          details={
            <div className="flex flex-col gap-[24px] !text-body-m">
              <div>
                There are various international standards for management system
                certification. Organisations seek certification to prove that
                they comply with these international standards for different
                reasons: improvement of the management of their organisations,
                as a marketing tool.
              </div>
              <div>
                ISO 9001 is an international standard that specifies generic
                requirements for a quality management system. Certification
                against this standard is the most popular management system
                certification in Hong Kong. There is high demand for other types
                of certification, e.g. ISO 14001 environmental management system
                certification,&nbsp;
                <span
                  className="!text-highlight-s underline text-newPrimary cursor-pointer"
                  onClick={() => {
                    window.open(
                      "/tc-sector/environmental_protection",
                      "_blank"
                    );
                  }}
                >
                  ISO 50001 energy management system certification
                </span>
                &nbsp;and ISO 45001 occupational health and safety management
                systems certification.
              </div>
            </div>
          }
        />
      </div>

      <div>
        <Accordion
          title="(ii) Product certification, e.g. certification of a supplier's competence in producing a mobile phone to regulatory requirements"
          details={
            <div className="flex flex-col gap-[24px]">
              <div>
                Product certification can improve stakeholders' confidence in
                the products supplied by a certified supplier. It can bring
                benefits to manufacturers (better business opportunities),
                regulatory authorities (less monitoring effort) and end-users
                (more reliable products). Product certification schemes adopted
                by accredited certification bodies in Hong Kong are related to
                construction materials, consumer products and food.
              </div>
            </div>
          }
        />
      </div>

      <div>
        <Accordion
          title="(iii) Balidation and verification, e.g. validation and/or verification of greenhouse gas assertions to ISO 14064-1, ISO 14064-2 or ISO/TS 14067"
          details={
            <div className="flex flex-col gap-[24px]">
              <div>
                To tackle climate changes, many organisations around the world
                are implementing various initiatives to limit greenhouse gas
                (GHG) concentrations in the atmospheres. These initiatives rely
                on the quantification, monitoring, reporting, validation and
                verification of GHG emissions and/or removals.
              </div>
              <div>
                To enhance the consistency, credibility and transparency of GHG
                quantification, monitoring and reporting, organisations may
                validate and verify their GHG assertions based on ISO 14064-1
                (organisation level), ISO 14064-2 (project level) or ISO/TS
                14067 (product level).
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export const ServiceProvided: React.FC = () => {
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

  const servicesTableHead = [
    "Service",
    "Coverage",
    "Duration",
    "Resulting Product",
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

  return (
    <div className="w-full flex flex-col gap-[24px] text-justify">
      <div className="flex-1">
        <SquareTitle title={pageText.TITLE} />
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
          tableHeads={servicesTableHead}
          tableRows={servicesTableRowsData}
        />
      </div>
    </div>
  );
};
