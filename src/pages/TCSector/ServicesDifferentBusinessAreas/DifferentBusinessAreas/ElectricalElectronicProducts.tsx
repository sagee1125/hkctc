import React, { useState } from "react";
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
import { navItemEnum } from "../../../../const";
import { displayBusinessAreas } from "../ServicesDifferentBusinessAreas";
import { handleReturnDifferentBusinessAreasBreadcrumb } from "./const";
import {
  activatedButtonStyle,
  normalButtonStyle,
} from "../../../EventsLanding/EventsLandingContent";

const buttonArray = ["Common safety tests", "Common performance tests"];
const testExamples_1: string[] = [
  "Electrical hazard tests",
  "Photobiological safety hazard tests",
  "Thermal tests - including excessive temperature and fire hazard risks",
  "Mechanical hazard tests",
  "Reliability tests for safety critical components, e.g. fuses, thermostats, etc.",
  "Electromagnetic energy exposure tests to determine whether the Specific Absorption Rate of radio frequencies (RF) is within international electromagnetic field exposure guidelines",
  "Chemical tests, such as leaching of dangerous chemicals, screening for harmful chemicals like Bisphenol A (BPA), formaldehydes, halogens and polycyclic aromatic hydrocarbons (PAHs)",
  "Noise and acoustic tests - especially for headphones and handsets",
  "Transit tests to assess shock, vibration, compression and atmospheric changes that may be incurred during the transportation of goods",
];

const testExamples_2: string[] = [
  "Electromagnetic compatibility (EMC) and radio frequency (RF) tests to determine performance reliability of an EEP when other EEPs operate in close proximity",
  "Energy-efficiency tests",
  "Durability tests, such as life tests of compact fluorescent lamps and LED lamps",
  "Functionality and usability tests",
];

export const ElectricalElectronicProducts: React.FC = () => {
  const directoryItems = displayBusinessAreas.map((area) => area.title);
  const [activeButton, setActiveButton] = useState<number>(0);

  const servicesForElectrical: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "Testing",
      content: (
        <>
          <p className="text-body-m">
            EEPs are commonly tested, in accordance with standardised technical
            procedures, to determine if the products conform to requirements set
            out by importing countries.
          </p>
          <div className="flex flex-wrap gap-[8px] my-[16px]">
            {buttonArray.map((btn, index) => {
              const isActivated = index === activeButton;
              return (
                <button
                  key={index}
                  className="p-0 transition-all duration-800 ease-in-out bg-newPrimary"
                  style={isActivated ? activatedButtonStyle : normalButtonStyle}
                  onClick={() => {
                    setActiveButton(index);
                  }}
                >
                  <p className="px-[12px] py-[6px] text-highlight-xs">{btn}</p>
                </button>
              );
            })}
          </div>
          <div className="mt-[16px]">
            {(activeButton === 0 ? testExamples_1 : testExamples_2).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </div>
        </>
      ),
    },
    {
      title: "Inspection",
      content:
        "Examples of EEP inspection services include inspection of manufacturing processes and pre-shipment inspections at the factory to determine whether a particular batch of EEPs complies with the relevant buyer's specifications.",
    },
    {
      title: "Certification",
      content:
        "Product certification is sometimes required for EEPs such as China Compulsory Certification (CCC).",
    },
  ];

  return (
    <div className="w-full pb-[48px]">
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/Textiles_Garment_banner.png"
        }
      />
      <div id="breadcrumb">
        <Breadcrumb
          items={handleReturnDifferentBusinessAreasBreadcrumb(
            "Electrical and Electronic Products"
          )}
        />
      </div>
      <div className="w-full flex flex-row pt-[48px] pr-[24px]">
        <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
          <DirectorySidebar
            disabled // TODO to be removed
            directorySidebarItems={directoryItems}
            activatedItems={directoryItems[2]} // Electrical and Electronic Products
            setActivatedItems={() => {}}
          />
        </div>
        <div className="flex-1">
          <SquareTitle title="Electrical and Electronic Products" />
          <div className="my-[24px]">
            <MediaTemplate
              iconPath="VIDEO.png"
              title="Hong Kong's Testing and Certification Services for Electrical and Electronic Products"
              imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ElectricalElectronicProducts_Video.png"
            />
          </div>
          <FileTemplate
            title={"Electrical and Electronic Products"}
            imagePath="assets/tcSector/servicesDifferentBusinessAreas/Electrical_PDF.png"
          />

          <p className="text-heading-l my-[24px]">
            Benefits of EEP Testing & Certification
          </p>
          <p className="text-body-m">
            Electrical and electronic products (EEPs) are widely used in almost
            all aspects of daily life including audio and video equipment,
            children's toys, communication devices, household appliances and
            lighting products. EEPs are also invaluable for essential medical
            and public utilities. Safety and performance of EEPs are thus of
            paramount concern. It is vital that all EEPs sold meet stringent and
            performance standards to ensure they are safe and suitable for their
            intended use.
            <br />
            <br />
            The EEP industry uses numerous third-party testing and certification
            services to ensure products comply with international/national
            standards or regulations specified by importing countries. Through
            testing and certification, the quality of EEPs can be enhanced. This
            helps manufacturers and traders to minimise the chance of recalls,
            returns and complaints, and to establish a good reputation as well
            as to enhance product sales.
          </p>
          <hr className="my-[24px]" />

          <p className="text-heading-l">EEP Testing & Certification Services</p>
          <p className="text-body-m my-[24px]">
            Accredited testing and certification organisations in Hong Kong can
            provide professional services in electrical and electronic product
            (EEP) testing, inspection and certification at different stages
            throughout the product supply chain.
          </p>
          <div className="w-full flex flex-col gap-[24px]">
            {servicesForElectrical.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                details={<div className="!text-body-m">{item.content}</div>}
              />
            ))}
          </div>
          <p className="text-heading-l my-[24px]">
            Laboratories Accredited by HKAS Providing Testing Services on EEPs
          </p>
          <p className="text-body-m">
            Details of the laboratories providing the public with accredited
            electrical and electronic product (EEP) testing services are
            available at&nbsp;
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
          <hr className="my-[24px]" />
          <InternalBackButton
            targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
          />
        </div>
      </div>
    </div>
  );
};
