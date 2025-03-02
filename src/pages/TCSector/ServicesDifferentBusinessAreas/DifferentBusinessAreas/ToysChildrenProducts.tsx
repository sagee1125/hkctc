import React from "react";
import {
  type BusinessAreaTitle,
  DifferentBusinessAreasDirectorySidebar,
  handleReturnDifferentBusinessAreasBreadcrumb,
} from "./utils";
import {
  Accordion,
  BannerPhotoBox,
  Breadcrumb,
  FileTemplate,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { useSettings } from "../../../../context";

export const ToysChildrenProducts: React.FC = () => {
  const businessAreaTitle = "Toys and Children's Products" as BusinessAreaTitle;
  const { isPC } = useSettings();

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
          <div className="flex flex-col gap-[12px]">
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
              Mechanical testing such as load stresses like torsion, traction
              and compression
            </li>
            <li>
              Physical testing such as presence of sharp points or hard edges
            </li>
            <li>
              Performance testing such as durability and resistance to wear and
              tear
            </li>
          </div>
        </>
      ),
    },
    {
      title: "Inspection",
      content:
        "Examples of toy inspection services are factory inspections of the manufacturing processes and pre-shipment inspections at the factory to determine whether the batch of toy products complies with the buyer's specifications.",
    },
    {
      title: "Certification",
      content:
        "Product certification is required for toys, e.g. China Compulsory Certification (CCC) System.",
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
          title="Hong Kong's Testing and Certification Services for Toys and Children's Products"
          iconPath="VIDEO.png"
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ToysAndChildren_Video.png"
          mediaLink="https://www.youtube.com/embed/fKkwNRX0i6c"
        />
      </div>

      <FileTemplate
        title={"Toys"}
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/ToysPDF.png"
        pdfHyperlink="/en/doc/toys_booklet_eng.pdf"
      />
      <p className="text-heading-l my-[24px]">
        Benefits of Toy Testing & Certification
      </p>
      <p className="text-body-m">
        When it comes to toys, safety is of paramount concern. The toy industry
        uses a lot of third-party testing and certification services to assure
        compliance with international safety standards.
        <br />
        <br />
        Testing and certification help assure the quality of toys, minimise the
        chance of recalls, returns and complaints — reducing financial risks to
        suppliers, traders and retailers — and help to establish a good
        reputation. This in turn leads to increasing product sales which has a
        positive impact upon everyone's bottom-line.
      </p>
      <hr className="my-[24px]" />

      <p className="text-heading-l mb-[24px]">
        Testing & Certification Services for Toys
      </p>

      <div className="w-full flex flex-col gap-[24px]">
        {servicesForToys.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            details={<div className="text-body-m">{item.content}</div>}
          />
        ))}
      </div>
      <hr className="my-[24px]" />

      <p className="text-heading-l mb-[24px]">
        Laboratories Accredited by HKAS Providing Testing Services on Toy and
        Children's Products
      </p>
      <p className="text-body-m">
        Details of the laboratories providing the public with accredited
        electrical and electronic product (EEP) testing services are available
        at&nbsp;
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
    </>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/ToysAndChildren_banner.png"
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
