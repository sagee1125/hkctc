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

export const ConstructionMaterialsBuildings: React.FC = () => {
  const directoryItems = displayBusinessAreas.map((area) => area.title);

  const productData: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "a. What is Product Certification?",
      content: (
        <>
          <li>
            A product certification scheme stipulates a set of rules and
            procedures for suppliers of specific products to comply with.
          </li>
          <br />
          <li>
            A third party certification body will conduct rigorous evaluation on
            the product manufacturer in accordance with the specifications, and
            may issue a certificate to confirm that a product of a given
            supplier satisfies the requirements set out in the specified
            certification scheme.
          </li>
        </>
      ),
    },
    {
      title: "b. What are the Benefits of Product Certification ?",
      content: (
        <>
          <li>Promoting product quality through upstream control</li>
          <br />
          <li>
            Ensuring consistency in production quality through continuous
            surveillance of production process in the factory
          </li>
          <br />
          <li>
            Giving greater confidence on product quality to recognized standards
          </li>
          <br />
          <li className="mb-[16px]">
            Reducing the risk of failure in on-site compliance testing, hence
            reducing the risk of project delay in case reordering is required,
            as well as avoiding wasting time and money
          </li>

          <FileTemplate
            title={"Feature Article on Benefits of Product Certification"}
            imagePath="assets/tcSector/servicesDifferentBusinessAreas/FeatureArticlePDF.png"
          />
        </>
      ),
    },
    {
      title:
        "c. Local Product Certification Schemes for Construction Materialst",
      content: (
        <>
          <p>
            The following product certification schemes are available in Hong
            Kong (as at 30 September 2022):
          </p>
          <p className="text-red-700 mt-[24px]">TODO</p>
        </>
      ),
    },
    {
      title:
        "d. Use of Product Certification by Housing Authority and Information on its Suppliers",
      content: (
        <li>
          The Hong Kong Housing Authority (HA) is a pioneer in using certified
          construction products in their building projects. A number of
          suppliers are able to provide many of the certified products in the
          table in (c) above. Information on these suppliers is available
          at&nbsp;
          <a
            className="underline"
            href="https://www.housingauthority.gov.hk/en/business-partnerships/resources/construction-product-certification/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HA's product certification webpage
          </a>
          &nbsp;(OR&nbsp;
          <a
            className="underline"
            href="https://www.housingauthority.gov.hk/en/common/pdf/business-partnerships/resources/construction-product-certification/ManufacturersOrSuppliers-ProductCertStatus(20220930)_EngW3C.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact list of relevant manufacturers or suppliers
          </a>
          ). Certification bodies may also provide information on the suppliers
          for which their construction products have been certified.
        </li>
      ),
    },
    {
      title:
        "e. Use of Product Certification by Architectural Services Department",
      content: (
        <>
          <li>
            The Architectural Services Department (ArchSD) has drawn up a flyer
            to present the mechanism of product certification and the benefits
            of using certified construction products in construction works.
            Examples have also been given to illustrate a product certification
            scheme in action. Please refer to the&nbsp;
            <a
              href="https://www.archsd.gov.hk/media/consultants-contractors/product-conformity-certification-schemes/pccs_leaflet_posting%20to%20internet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              flyer
            </a>
            &nbsp;for details.
          </li>
          <br />
          <li>
            ArchSD is considering specifying the use of certain certified
            construction products in its works contracts. Further details are in
            the above flyer.
          </li>
        </>
      ),
    },
    {
      title: "f. Use of Product Certification under BEAM Plus New Buildings",
      content: (
        <>
          <li>
            <a
              href="https://www.hkgbc.org.hk/eng/beam-plus/introduction/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              BEAM
            </a>
            &nbsp;Plus assessment is the Hong Kong's leading initiative to offer
            independent assessments of building sustainability performance.
            Recognised and certified by the Hong Kong Green Building Council,
            BEAM Plus offers a comprehensive set of performance criteria for a
            wide range of sustainability issues relating to the planning,
            design, construction, commissioning, management, operation and
            maintenance of a building. By providing a fair and objective
            assessment of a building's overall performance throughout its life
            cycle, BEAM Plus enables organisations and companies of all sizes to
            demonstrate their commitment to sustainable development.
          </li>
          <br />
          <li>
            BEAM Plus New Buildings covers the demolition, planning, design,
            construction and commissioning of a new building project. It can
            also be applied to major renovations, alterations and additions.
            Under the scheme, credits would be given for using certified
            building materials and products under the Materials and Waste
            Aspects (MWA). For details, please refer to the scheme's&nbsp;
            <a
              href="https://www.hkgbc.org.hk/eng/beam-plus/beam-plus-new-buildings/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              webpage
            </a>
            .
          </li>
        </>
      ),
    },
    {
      title: "g. How does a Manufacturer get its Products Certified?",
      content: (
        <>
          <li>
            The certification process starts with the manufacturer selecting an
            accredited certification body
          </li>

          <br />
          <li>
            The accredited certification body then makes an initial evaluation
            for the manufacturer including factory assessment of production and
            on-site selection for testing of one or more samples of products
            representative of the production
          </li>
          <br />
          <li>
            Next, surveillance visits will be conducted at periodic intervals
            including audit testing of selected samples; and
          </li>
          <br />
          <li>
            Re-evaluation is undertaken at three-year intervals including audit
            testing of selected samples.
          </li>
        </>
      ),
    },
  ];

  const testingData: Array<{
    title: string;
    descriptionTitle?: string;
    description: string[];
    contentTitle: string;
    content: React.ReactNode;
  }> = [
    {
      title: "a. Laboratory and on-site testing services",
      descriptionTitle: "The services below are available in Hong Kong :",
      description: [
        "Physical testing of construction materials",
        "Foundation and geotechnical testing",
        "Non-destructive testing on concrete, welds and steel",
        "Functional and durability testing of building components",
        "Chemical analysis of construction materials (e.g., concrete, cement, aggregate and steel)",
        "Calibration of construction materials testing equipment and other equipment",
        "On-site building diagnostic testing",
      ],
      contentTitle: "Building Diagnostic Testing",
      content: (
        <>
          <p>
            To facilitate the implementation of the Mandatory Building
            Inspection Scheme, HOKLAS-accredited laboratories are providing the
            following building diagnostic tests to help registered personnel in
            obtaining objective evidence on building conditions such as concrete
            strength, water seepage, corrosion and spalling concrete to ensure
            building safety:
          </p>
          <br />
          {[
            "Carbonation test",
            "Chloride content determination",
            "Covermeter survey",
            "Half-cell potential measurement",
            "Infrared thermography",
            "Resistivity measurement",
            "Surface hardness measurement",
            "Surface penetration radar survey",
            "Ultrasonic pulse velocity measurement",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </>
      ),
    },
    {
      title: "b. Inspection Services",
      description: [
        "Assessment of welding procedures in construction projects",
        "Inspection on production of construction materials (e.g., waterworks and paint)",
        "Indoor air quality measurement and inspection",
      ],
      contentTitle: "Indoor Air Quality Measurement and Inspection",
      content: (
        <>
          <p>
            To improve indoor air quality (IAQ) and promote public awareness, a
            voluntary IAQ Certification Scheme is launched by the Environmental
            Protection Department. IAQ inspection bodies provide the following
            measurement and inspection services for the IAQ Certification Scheme
            :
          </p>
          <br />
          {[
            "Walk-through inspection of premises/buildings",
            "On-site measurements of IAQ parameters (e.g., air movement, carbon monoxide and volatile organic compounds)",
            "IAQ compliance assessment",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <br />
          <p>
            More information is available on the{" "}
            <a
              href="https://www.iaq.gov.hk/en/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              website
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
        src={"tcSector/servicesDifferentBusinessAreas/Construction_banner.png"}
      />
      <div id="breadcrumb">
        <Breadcrumb
          items={handleReturnDifferentBusinessAreasBreadcrumb(
            "Construction Materials and Buildings"
          )}
        />
      </div>
      <div className="w-full flex flex-row pt-[48px] pr-[24px]">
        <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
          <DirectorySidebar
            disabled // TODO to be removed
            directorySidebarItems={directoryItems}
            activatedItems={directoryItems[3]} // Construction Materials and Buildings
            setActivatedItems={() => {}}
          />
        </div>
        <div className="flex-1">
          <SquareTitle title="Construction Materials and Buildings" />
          <div className="my-[24px]">
            <MediaTemplate
              iconPath="VIDEO.png"
              title="Hong Kong's Testing and Certification Services for Construction Materials and Buildings"
              imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ConstructionVideo.png"
            />
          </div>
          <p className="text-heading-l mb-[24px]">
            Product Certification for Construction Materials
          </p>
          <FileTemplate
            title={"Product Certification - An Upstream Quality Control"}
            imagePath="assets/tcSector/servicesDifferentBusinessAreas/ConstructionPDF.png"
          />

          <div className="w-full flex flex-col gap-[24px] mt-[24px]">
            {productData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                details={<div className="!text-body-m">{item.content}</div>}
              />
            ))}
          </div>

          <hr className="my-[24px]" />
          <p className="text-heading-l my-[24px]">
            Testing and Inspection Services for Buildings and Construction
            Materials
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

          <div className="w-full flex flex-col gap-[24px] mt-[24px]">
            {testingData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                details={
                  <div>
                    <div className="!text-body-m">{item.descriptionTitle}</div>
                    <div className="!text-body-m">
                      {[...item.description].map((desc, index) => (
                        <div key={index}>
                          <li>{desc}</li>
                        </div>
                      ))}
                    </div>

                    <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] mt-[16px]">
                      <p className="text-heading-m">{item.contentTitle}</p>
                      <p className="text-body-m mt-[16px]">{item.content}</p>
                    </div>
                  </div>
                }
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
