import React, { useState } from "react";
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
  activatedPagingButtonStyle,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
  normalPagingButtonStyle,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { Icon } from "@iconify/react";
import { useSettings } from "../../../../context";

type HyperlinkData = {
  label: string;
  link: string;
};
enum CertificationBodies {
  Castco,
  Fugro,
  HongKongQuality,
  SGS,
  Takwin,
  MINSEN,
}
const certificationBodiesMap: Record<CertificationBodies, HyperlinkData> = {
  [CertificationBodies.Castco]: {
    label: "Castco Certification Services Ltd.",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB009.pdf",
  },
  [CertificationBodies.Fugro]: {
    label: "Fugro Certification Services Ltd.",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB009.pdf",
  },
  [CertificationBodies.HongKongQuality]: {
    label: "Hong Kong Quality Assurance Agency",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB001.pdf",
  },
  [CertificationBodies.SGS]: {
    label: "SGS Hong Kong Ltd.",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB003.pdf",
  },
  [CertificationBodies.Takwin]: {
    label: "Takwin (Hong Kong) Ltd.",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB020.pdf",
  },
  [CertificationBodies.MINSEN]: {
    label: "MINSEN Certification (Asia) Ltd.",
    link: "https://www.itc.gov.hk/en/quality/hkas/doc/scopes/CB012.pdf",
  },
};

const schemeOwnerCol: HyperlinkData[] = [
  {
    label: "Hong Kong Quality Assurance Agency",
    link: "https://www.hkqaa.org/en/home?catid=1",
  },
  ...Array(4).fill({
    label: "Hong Kong Institute of Steel Construction",
    link: "https://www.hkisc.org/",
  }),
  ...Array(6).fill({
    label: "Hong Kong Concrete Institute",
    link: "https://www.hongkongci.org/",
  }),
  ...Array(3).fill({
    label: "Castco Certification Services Ltd.",
    link: "https://en.castcocert.com/productcert",
  }),
  ...Array(2).fill({
    label: "Hong Kong Institution of Plumbing and Drainage Ltd.",
    link: "https://www.hkipd.com.hk/index.php?lang=en",
  }),
  {
    label:
      "Hong Kong Association for Testing, Inspection and Certification Ltd.",
    link: "https://www.hktic.org/zh_HK/pccs_pp",
  },
];

const handleGenerateA = (hyperlinkData: HyperlinkData): React.ReactNode => {
  return (
    <ul>
      <li>
        <a
          href={hyperlinkData.link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#2F2F2F]"
        >
          {hyperlinkData.label}
        </a>
      </li>
    </ul>
  );
};
export const ConstructionMaterialsBuildings: React.FC = () => {
  const businessAreaTitle =
    "Construction Materials and Buildings" as BusinessAreaTitle;
  const { isPC } = useSettings();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  // Calculate the indices for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Slice the data array based on the current page
  const currentPageData = schemeOwnerCol.slice(startIndex, endIndex);

  // Maximum number of pages (0-based index)
  const maxPage = Math.ceil(schemeOwnerCol.length / itemsPerPage) - 1;
  const schemeOwnerColArray: React.ReactNode[] = schemeOwnerCol.map(
    (item, index) => (
      <a
        href={item.link}
        key={index}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-[#2F2F2F]"
      >
        {item.label}
      </a>
    )
  );
  const tableRowsData: Array<React.ReactNode[]> = [
    [
      "Concrete",
      "Fire Doors and Partition Walls",
      "Heat-soaked Tempered Glass",
      "Aluminum Window",
      "Frictional Hinges for Aluminum Window",
      "Tile Adhesives",
      "Cement Products",
      "Ceramic Tiles",
      "Repair Mortars",
      "Mesh Reinforcement",
      "Aggregates for Concrete",
      "Standard Sands",
      "Replacement Sands",
      "Mechanical Couplers",
      "Drainage uPVC Pipe and Fitting",
      "Close-coupled Water Closet Suites",
      "Paint",
    ],
    [
      "Quality Scheme for the Production and Supply of Concrete	",
      "Product Conformity Certification Scheme for Passive Fire Protection Products",
      "Product Conformity Certification Scheme for Heat Soaked Tempered Glass",
      "Product Conformity Certification Scheme for Aluminum Window",
      "Product Conformity Certification Scheme for Frictional Hinges",
      "Product Conformity Certification Scheme for Tile Adhesives",
      "Product Conformity Certification Scheme for Cement Products",
      "Product Conformity Certification Scheme for Ceramic Tiles",
      "Product Conformity Certification Scheme for Repair Mortar",
      "Product Conformity Certification Scheme for Mesh Reinforcement",
      "Product Conformity Certification Scheme - Aggregates for Concrete",
      "Quality Scheme for Standard Sand",
      "Quality Scheme for Replacement Sand",
      "Product Conformity Certification Scheme for Mechanical Couplers",
      "Product Conformity Certification Scheme for uPVC Pipe and Fittings for Foul Water Drainage Above Ground",
      "Product Conformity Certification Scheme for Close-coupled Water Closet Suites",
      "Product Conformity Certification Scheme for Paint Products",
    ],
    schemeOwnerColArray,
    [
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        {handleGenerateA(
          certificationBodiesMap[CertificationBodies.HongKongQuality]
        )}
      </>,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.SGS])}
      </>,
      "Accredited certification body not yet available",
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Takwin])}
      </>,
      handleGenerateA(certificationBodiesMap[CertificationBodies.Takwin]),

      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        {handleGenerateA(
          certificationBodiesMap[CertificationBodies.HongKongQuality]
        )}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.MINSEN])}
      </>,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.MINSEN])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.SGS])}
      </>,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
      </>,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.MINSEN])}
      </>,
      <>
        {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
        {handleGenerateA(certificationBodiesMap[CertificationBodies.MINSEN])}
      </>,
      handleGenerateA(
        certificationBodiesMap[CertificationBodies.HongKongQuality]
      ),

      ...Array(3).fill(
        handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])
      ),
      handleGenerateA(certificationBodiesMap[CertificationBodies.MINSEN]),
      ...Array(2).fill(
        <>
          {handleGenerateA(certificationBodiesMap[CertificationBodies.Castco])}
          {handleGenerateA(certificationBodiesMap[CertificationBodies.Fugro])}
        </>
      ),
    ],
  ];

  const productData: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "What is Product Certification?",
      content: (
        <ul>
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
        </ul>
      ),
    },
    {
      title: "What are the Benefits of Product Certification ?",
      content: (
        <>
          <ul>
            <li>Promoting product quality through upstream control</li>
            <br />
            <li>
              Ensuring consistency in production quality through continuous
              surveillance of production process in the factory
            </li>
            <br />
            <li>
              Giving greater confidence on product quality to recognized
              standards
            </li>
            <br />
            <li className="mb-[16px]">
              Reducing the risk of failure in on-site compliance testing, hence
              reducing the risk of project delay in case reordering is required,
              as well as avoiding wasting time and money
            </li>
          </ul>
          <FileTemplate
            title={"Feature Article on Benefits of Product Certification"}
            imagePath="assets/tcSector/servicesDifferentBusinessAreas/FeatureArticlePDF.png"
            pdfHyperlink="/en/doc/hkctc_newsletter_issue2.pdf"
          />
        </>
      ),
    },
    {
      title: "Local Product Certification Schemes for Construction Materialst",
      content: (
        <>
          <p>
            The following product certification schemes are available in Hong
            Kong (as at 30 September 2022):
          </p>
          <div>
            {/* Pagination Controls */}
            <div className="flex justify-center gap-[9px] my-[24px] !text-highlight-l">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 0}
                style={{
                  ...normalPagingButtonStyle,
                  cursor: currentPage === 0 ? "not-allowed" : "pointer",
                  color: currentPage === 0 ? "#AAAAAA" : "black",
                }}
              >
                <Icon icon="mingcute:arrow-left-fill" width="24" height="24" />
              </button>

              {Array.from({ length: maxPage + 1 }, (_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentPage(pageIndex)}
                  style={
                    currentPage === pageIndex
                      ? activatedPagingButtonStyle
                      : normalPagingButtonStyle
                  }
                >
                  {pageIndex + 1}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === maxPage}
                style={{
                  ...normalPagingButtonStyle,
                  cursor: currentPage === maxPage ? "not-allowed" : "pointer",
                  color: currentPage === maxPage ? "#AAAAAA" : "black",
                }}
              >
                <Icon icon="mingcute:arrow-right-fill" width="24" height="24" />
              </button>
            </div>
            <div style={{ overflowX: "auto" }}>
              <div className="grid grid-cols-[2fr,3fr,3fr,4fr] gap-[24px] py-[16px] px-[10px] !text-body-s !text-[#7E7E7E] min-w-[900px]">
                {[
                  "Product",
                  "Name of Scheme",
                  "Scheme Owner",
                  "Certification Bodies Accredited by Hong Kong Accreditation Service",
                ].map((head, index) => (
                  <p key={index}>{head}</p>
                ))}
              </div>
              <hr
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "black",
                }}
              />
              <div className="!text-[#2F2F2F]">
                {/* Map over the sliced data */}
                {currentPageData.map((_, index) => (
                  <div
                    key={startIndex + index} // Key should be unique and based on the actual index in the full array
                    className="grid grid-cols-[2fr,3fr,3fr,4fr] gap-[24px] py-[16px] px-[10px] min-w-[900px]"
                    style={{
                      borderBottom: "1px dashed #C8CFD6",
                    }}
                  >
                    <p className="text-body-s">
                      {tableRowsData[0][startIndex + index]}
                    </p>
                    <p className="text-body-s">
                      {tableRowsData[1][startIndex + index]}
                    </p>
                    <div className="text-linked-s">
                      {tableRowsData[2][startIndex + index]}
                    </div>
                    <div className="text-linked-s">
                      {tableRowsData[3][startIndex + index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title:
        "Use of Product Certification by Housing Authority and Information on its Suppliers",
      content: (
        <ul>
          <li>
            The Hong Kong Housing Authority (HA) is a pioneer in using certified
            construction products in their building projects. A number of
            suppliers are able to provide many of the certified products in the
            table in (c) above. Information on these suppliers is available
            at&nbsp;
            <a
              className="underline text-links"
              href="https://www.housingauthority.gov.hk/en/business-partnerships/resources/construction-product-certification/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              HA's product certification webpage
            </a>
            &nbsp;(OR&nbsp;
            <a
              className="underline text-links"
              href="https://www.housingauthority.gov.hk/en/common/pdf/business-partnerships/resources/construction-product-certification/ManufacturersOrSuppliers-ProductCertStatus(20220930)_EngW3C.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact list of relevant manufacturers or suppliers
            </a>
            ). Certification bodies may also provide information on the
            suppliers for which their construction products have been certified.
          </li>
        </ul>
      ),
    },
    {
      title:
        "Use of Product Certification by Architectural Services Department",
      content: (
        <ul>
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
              className="underline text-links"
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
        </ul>
      ),
    },
    {
      title: "Use of Product Certification under BEAM Plus New Buildings",
      content: (
        <ul>
          <li>
            <a
              href="https://www.hkgbc.org.hk/eng/beam-plus/introduction/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-links"
            >
              BEAM Plus
            </a>
            &nbsp;assessment is the Hong Kong's leading initiative to offer
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
              className="underline text-links"
            >
              webpage
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      title: "How does a Manufacturer get its Products Certified?",
      content: (
        <ul>
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
        </ul>
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
      title: "Laboratory and on-site testing services",
      descriptionTitle: "The services below are available in Hong Kong:",
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
      title: "Inspection Services",
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
          <ul>
            {[
              "Walk-through inspection of premises/buildings",
              "On-site measurements of IAQ parameters (e.g., air movement, carbon monoxide and volatile organic compounds)",
              "IAQ compliance assessment",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
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
          iconPath="VIDEO.png"
          title="Hong Kong's Testing and Certification Services for Construction Materials and Buildings"
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ConstructionVideo.png"
          mediaLink="https://www.youtube.com/embed/06_ec-i3gCo"
        />
      </div>
      <p className="text-heading-l mb-[24px]">
        Benefits of Product Certification for Construction Materials
      </p>
      <FileTemplate
        title={"Product Certification - An Upstream Quality Control"}
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/ConstructionPDF.png"
        pdfHyperlink="/en/doc/HKCTC_Leaflet_construction_product_certification.pdf"
      />

      <div className="w-full flex flex-col gap-[24px] mt-[24px]">
        {productData.map((item, index) => (
          <Accordion
            key={index}
            defaultExpanded={false}
            title={item.title}
            details={<div className="!text-body-m">{item.content}</div>}
          />
        ))}
      </div>

      <hr className="my-[24px]" />
      <p className="text-heading-l my-[24px]">
        Testing and Inspection Services for Construction Materials and Buildings
      </p>

      <FileTemplate
        title={
          "Testing and Inspection Services for Buildings and Construction Materials"
        }
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/ConstructionPDF_testing.png"
        pdfHyperlink="/en/doc/HKCTC_Leaflet_Building_inspection.pdf"
      />

      <div className="w-full flex flex-col gap-[24px] mt-[24px]">
        {testingData.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            defaultExpanded={false}
            details={
              <div>
                <div className="!text-body-m">{item.descriptionTitle}</div>
                <div className="!text-body-m flex flex-col gap-[12px]">
                  {[...item.description].map((desc, index) => (
                    <div key={index}>
                      <ul>
                        <li>{desc}</li>
                      </ul>
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

      <p className="text-heading-l my-[24px]">
        Laboratories Accredited by HKAS Providing Testing Services on
        Construction Materials
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
        src={"tcSector/servicesDifferentBusinessAreas/Construction_banner.png"}
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
