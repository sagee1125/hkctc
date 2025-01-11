import React from "react";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  DirectorySidebar,
  FileTemplate,
  InternalBackButton,
  SquareTitle,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { displayBusinessAreas } from "../ServicesDifferentBusinessAreas";
import { handleReturnDifferentBusinessAreasBreadcrumb } from "./const";

export const ToysChildrenProducts: React.FC = () => {
  const directoryItems = displayBusinessAreas.map((area) => area.title);

  const servicesForToys: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "Testing",
      content: (
        <>
          <p>Common testing for toys includes:</p>
          <br />
          <li>
            Testing for the bio-availability of toxic elements such as lead
            (Pb), mercury (Hg), cadmium (Cd) and the amount of hazardous
            chemicals such as phthalates
          </li>
          <li>Electrical testing, such as electrical strength test</li>
          <li>
            Testing for electromagnetic compatibility, such as radiated
            disturbance, electrostatic discharge
          </li>
          <li>Micro-biological examination</li>
          <li>Flammability testing</li>
          <li>
            Mechanical testing such as load stresses like torsion, traction and
            compression
          </li>
          <li>
            Physical testing such as presence of sharp points or hard edges
          </li>
          <li>
            Performance testing such as durability and resistance to wear and
            tear
          </li>
        </>
      ),
    },
    {
      title: "Inspection",
      content:
        "Examples of toy inspection services are factory inspections of the manufacturing processes and pre-shipment inspections at the factory to determine whether the batch of toy products complies with the buyer's specifications.",
    },
    {
      title: "Certfication",
      content:
        "Product certification is required for toys, e.g. China Compulsory Certification (CCC) System.",
    },
  ];

  return (
    <div className="w-full pb-[48px]">
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/ToysAndChildren_banner.png"
        }
      />
      <div id="breadcrumb">
        <Breadcrumb
          items={handleReturnDifferentBusinessAreasBreadcrumb(
            "Toys and Children's Products"
          )}
        />
      </div>
      <div className="w-full flex flex-row pt-[48px] pr-[24px]">
        <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
          <DirectorySidebar
            disabled // TODO to be removed
            directorySidebarItems={directoryItems}
            activatedItems={directoryItems[0]} // Toys and Children's Products
            setActivatedItems={() => {}}
          />
        </div>
        <div className="flex-1">
          <SquareTitle title="Toys and Children's Products" />
          <div className="border-2 border-[#E0E0E0] w-full flex flex-row h-[278px] gap-[24px] my-[24px]">
            <img
              className="h-full w-auto object-contain"
              src={`${process.env.PUBLIC_URL}/assets/tcSector/servicesDifferentBusinessAreas/ManpowerDevelopmentAward.png`}
              alt={"file icon"}
            />

            <div className="flex flex-col justify-center items-start pr-[24px] gap-[16px]">
              <p className="text-heading-m">
                T&C Manpower Development Award Scheme 2023-24
              </p>
              <div className="flex flex-row gap-[8px] items-center">
                <img
                  className="w-[16px] h-[16px]"
                  src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                  alt={"calendar"}
                />
                <p className="text-body-s text-grey">4 December 2023</p>
              </div>
            </div>
          </div>

          <FileTemplate
            title={"Toys"}
            imagePath="assets/tcSector/servicesDifferentBusinessAreas/ToysPDF.png"
          />
          <p className="text-heading-l my-[24px]">
            Benefits of Toy Testing & Certification
          </p>
          <p className="text-body-m">
            When it comes to toys, safety is of paramount concern. The toy
            industry uses a lot of third-party testing and certification
            services to assure compliance with international safety standards.
            <br />
            <br />
            Testing and certification help assure the quality of toys, minimise
            the chance of recalls, returns and complaints — reducing financial
            risks to suppliers, traders and retailers — and help to establish a
            good reputation. This in turn leads to increasing product sales
            which has a positive impact upon everyone's bottom-line.
          </p>
          <p className="text-heading-l my-[24px]">
            Testing & Certification Services for Toys
          </p>
          <div className="w-full flex flex-col gap-[8px]">
            {servicesForToys.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                details={<div className="text-body-m">{item.content}</div>}
              />
            ))}
          </div>
          <p className="text-heading-l my-[24px]">
            Laboratories Accredited by HKAS Providing Testing Services on Toy
            and Children's Products
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
