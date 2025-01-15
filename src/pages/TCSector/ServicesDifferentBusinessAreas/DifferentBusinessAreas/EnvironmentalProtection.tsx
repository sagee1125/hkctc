import React from "react";
import { handleReturnDifferentBusinessAreasBreadcrumb } from "./const";
import { displayBusinessAreas } from "../ServicesDifferentBusinessAreas";
import { navItemEnum } from "../../../../const";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  DirectorySidebar,
  FileTemplate,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
} from "../../../../components";
const timeLineData: string[] = [
  "Define the scope (i.e. activities, facilities, decisions, etc. covered), boundary (e.g. a process, a site, an entire organisation) and policy of an EnMS",
  "Identify applicable legal requirements and other requirements (e.g. public commitments of the organisation)",
  "Conduct energy review and identify areas of significant energy use (e.g. office equipment, lighting)",
  "Establish an energy baseline and identify energy performance indicators (e.g. energy consumption per time or per unit of production)",
  "Obtain management authorisation to implement the energy management action plans and operate the EnMS",
  "Monitor, review, maintain and improve the EnMS continuously",
];

export const EnvironmentalProtection: React.FC = () => {
  const directoryItems = displayBusinessAreas.map((area) => area.title);

  const environmentalProtection: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "a. What is Greenhouse Gas (GHG)?",
      content: "",
    },
    {
      title:
        "b. International Standards/Technical Specification on GHG Quantification",
      content: "",
    },
    {
      title: "c. What is GHG Validation & Verification?",
      content: "",
    },

    {
      title: "d. Why adopt GHG Validation and Verification?",
      content: "",
    },
    {
      title:
        "e. Validation/verification bodies accredited by HKAS for GHG Validation & Verification",
      content: "",
    },
  ];

  const EnMS: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "a. What is Energy Management System Certification (EnMS)?",
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
      title: "b. Who can adopt ISO 50001 to set up an EnMS?",
      content: (
        <p>
          ISO 50001 is applicable to any organisations - whatever their size,
          sector or geographical location.
        </p>
      ),
    },
    {
      title: "c. Benefits of Implementing an ISO 50001-based EnMS",
      content: (
        <>
          <p>
            Implementation of an ISO 50001-based EnMS can help your organisation
            :
          </p>
          <br />
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
        </>
      ),
    },

    {
      title: "d. How to set up & run an ISO 50001-based EnMS?",
      content: (
        <>
          <div>
            <div className="w-full flex flex-col">
              {timeLineData.map((item, index) => (
                <div key={index} className="flex flex-row gap-[24px]">
                  <div className="relative flex flex-col items-center">
                    {/* ball */}
                    <div className="bg-newPrimary rounded-full h-[17px] w-[17px] relative" />
                    {/* line */}
                    <div
                      className={`${
                        timeLineData.length - 1 === index
                          ? "h-[50px]"
                          : "h-full"
                      } w-[2px] bg-newPrimary absolute top-[17px]`}
                    />
                  </div>
                  <div
                    className={`text-highlight-s p-[16px] border-[1px] justify-start content-center mb-[16px] w-full ${
                      index === 0
                        ? "border-newPrimary text-white bg-newPrimary"
                        : "border-[#E0E0E0]"
                    }`}
                  >
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      title: "e. How can ISO 50001 EnMS Certification help your Organisation?",
      content: (
        <>
          <p>
            Through obtaining ISO 50001 EnMS certification, your organisation
            can:
          </p>
          <br />
          <li>
            enhance the confidence of relevant stakeholders (e.g. clients,
            business partners) in the quality of your EnMS
          </li>
          <br />
          <li>
            enhance reputation by demonstrating ongoing commitment to
            implementing an EnMS in compliance with international standard
          </li>
        </>
      ),
    },

    {
      title: "f. How to obtain ISO 50001 EnMS Certification?",
      content:
        "In Hong Kong, some certification bodies now provide ISO 50001 EnMS certification services. Your organisation can engage a certification body to conduct certification audits. Once successfully certified, your organisation has to undergo surveillance audits at periodic intervals and re-certification audits at three-year intervals.",
    },

    {
      title:
        "g. Certification bodies accredited by HKAS for ISO 50001 Certification",
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
              href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html#t_services"
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
  return (
    <div className="w-full pb-[48px]">
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/EnvironmentalProtectionBanner.png"
        }
      />
      <div id="breadcrumb">
        <Breadcrumb
          items={handleReturnDifferentBusinessAreasBreadcrumb(
            "Environmental Protection"
          )}
        />
      </div>
      <div className="w-full flex flex-row pt-[48px] pr-[24px]">
        <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
          <DirectorySidebar
            disabled // TODO to be removed
            directorySidebarItems={directoryItems}
            activatedItems={directoryItems[8]} // Environmental Protection
            setActivatedItems={() => {}}
          />
        </div>
        <div className="flex-1">
          <SquareTitle title="Environmental Protection" />

          <div className="my-[24px]">
            <MediaTemplate
              title="Hong Kong's Testing and Certification Services on the Environmental Protection Front"
              imagePath="/assets/tcSector/servicesDifferentBusinessAreas/environmental_protection_pdf.png"
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
          />

          <div className="w-full flex flex-col gap-[24px] my-[24px]">
            {environmentalProtection.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
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
                details={<div className="text-body-m">{item.content}</div>}
              />
            ))}
          </div>
          <hr className="my-[24px]" />

          <InternalBackButton
            targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
          />
        </div>
      </div>
    </div>
  );
};
