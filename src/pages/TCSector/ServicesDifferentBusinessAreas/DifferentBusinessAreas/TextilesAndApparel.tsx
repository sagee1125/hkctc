import React from "react";
import {
  handleReturnDifferentBusinessAreasBreadcrumb,
  type BusinessAreaTitle,
  DifferentBusinessAreasDirectorySidebar,
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
import { Language, useSettings } from "../../../../context";

export const TextilesAndApparel: React.FC = () => {
  const businessAreaTitle = "Textiles and Apparel" as BusinessAreaTitle;
  const { isPC, language } = useSettings();
  const isEn = language === Language.EN;
  const servicesForTextile: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "Testing",
      content: (
        <>
          <p>Examples of tests to meet regulatory requirements:</p>
          <br />
          <ul>
            <li>
              Physical tests, such as fibre analysis on composition, colour
              fastness tests, assessments on shrinkage and appearance in
              conjunction with labelling, flammability tests on general
              clothing, nightwear and vinyl film
            </li>
            <li>
              Chemical tests, such as azo dyes, cadmium, nickel release, lead
              and phthalates, etc.
            </li>
          </ul>
          <br />
          <p>Examples of tests to fulfill quality performance requirements:</p>
          <br />
          <ul>
            <li>
              Physical tests, such as strength tests on tensile, tearing and
              bursting strengths, colour fastness tests to washing, water,
              rubbing, light and perspiration, construction tests on yarn count,
              performance tests on pilling, abrasion and snagging resistance,
              functional tests on air permeability, water resistance and UV
              protection
            </li>
            <li>
              Chemical tests such as pH value, extractable heavy metals,
              chlorinated organic careers, etc.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Inspection",
      content:
        "Examples include factory inspection of manufacturing processes, pre-shipment inspection to determine whether a particular batch of products complies with the relevant buyer's specifications, supervision of loading, etc.",
    },
    {
      title: "Certification",
      content:
        "Certification related to products, processes, systems and persons, such as ISO 9001 for quality management, ISO 14001 for environmental management and ISO 50001 for energy management systems.",
    },
  ];

  const sidebar = (
    <DifferentBusinessAreasDirectorySidebar
      businessAreaTitle={businessAreaTitle}
    />
  );

  const content = (
    <>
      <SquareTitle title="Textiles and Apparel" />

      <div className="my-[24px]">
        <MediaTemplate
          iconPath="VIDEO.png"
          title="Hong Kong's Testing and Certification Services for Textiles and Garment"
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/Textiles_Garment.png"
          mediaLink="https://www.youtube.com/embed/JL54Sx8IFF0"
        />
      </div>

      <FileTemplate
        title={"Textile and Apparel"}
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/TextilesPDF.png"
        pdfHyperlink="/en/doc/textile_booklet_low_res_eng.pdf"
      />
      <p className="text-heading-l my-[24px]">
        Benefits of Textile and Apparel Testing & Certification
      </p>
      <p className="text-body-m">
        Not only Hong Kong's traditional trade partners but also the new
        emerging market have imposed&nbsp;
        <span className="text-highlight-m text-newPrimary">
          more stringent regulations and requirements
        </span>
        &nbsp;over imported textile and apparel. At the same time, consumers
        also have an increasing expectation on product quality and concern
        about&nbsp;
        <span className="text-highlight-m text-newPrimary">
          impact on the environment
        </span>
        .
        <br />
        <br />
        Testing and certification can help assure textile and apparel's
        compliance with relevant regulatory requirements of importing countries,
        as well as those specific quality and performance requirements by their
        clients. Examples on quality aspects of fabric include breathability,
        high-stretch, anti-bacterial, UV protection, wrinkle-free and water
        resistant properties, etc.
        <br />
        <br />
        Testing and certification can enhance consumers' confidence over the
        safety and quality of textile and apparel. Manufacturers, traders and
        retailers alike can also reduce their financial risks arising from
        rejects, recalls and complaints, and build up their brand reputation
        resulting in increased sales.
      </p>
      <hr className="my-[24px]" />

      <p className="text-heading-l">
        Testing & Certification Services for Toys
      </p>
      <p className="text-body-m my-[24px]">
        Hong Kong's testing and certification industry provides valuable support
        on various stages of the supply chain. Apart from testing, certification
        and inspection services, the industry also provides advisory services in
        relation to international/national regulatory requirements, as well as
        standards on raw materials and finished products.
      </p>
      <div className="w-full flex flex-col gap-[24px]">
        {servicesForTextile.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            details={<div className="text-body-m">{item.content}</div>}
          />
        ))}
      </div>
      <hr className="my-[24px]" />

      <p className="text-heading-l mt-[24px]">
        Laboratories Accredited by HKAS Providing Testing Services on Textile
        and Apparel
      </p>
      <p className="text-body-m pt-[24px]">
        The laboratories providing accredited testing services on Textile and
        Apparel are available at&nbsp;
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
          "tcSector/servicesDifferentBusinessAreas/Textiles_Garment_banner.png"
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
