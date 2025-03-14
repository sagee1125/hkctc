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

export const Jewellery: React.FC = () => {
  const businessAreaTitle = "Jewellery" as BusinessAreaTitle;
  const { isPC } = useSettings();

  const acc: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "Trade Descriptions Order",
      content: `Under the Trade Descriptions (Provision of Information on Natural Fei
          Cui) Order and the Trade Descriptions (Provision of Information on
          Diamond) Order of the Laws of Hong Kong, retailers are required to
          issue to the buyers invoices or receipts showing, among others, the
          description of any article of natural Fei Cui or diamond sold in
          accordance with the Orders.`,
    },
    {
      title: "Accreditation of Laboratories",
      content:
        "Application for accreditation is open and voluntary in Hong Kong. All Hong Kong Accreditation Service (HKAS) accredited laboratories meet the management and technical requirements of the international standard, ISO/IEC 17025, in the provision of high quality testing services.",
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
          title="Hong Kong's Testing Services for Fei Cui (Jadeite Jade) and Diamond"
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/JewelleryVideo.png"
          iconPath={"VIDEO.png"}
          mediaLink="https://www.youtube.com/embed/ODofaE4w6Sc"
        />
      </div>
      <div
        className={`grid grid-cols-${
          isPC ? "2" : "1"
        } w-full gap-[24px] mb-[24px]`}
      >
        <FileTemplate
          title={"Testing of Fei Cui and Diamond in Hong Kong"}
          imagePath="assets/tcSector/servicesDifferentBusinessAreas/Testing_FeiCui.png"
          pdfHyperlink="/en/doc/Testing_of_Fei_Cui_and_Diamond_in_Hong_Kong.pdf"
        />
        <FileTemplate
          title={"Diamond Testing Services in Hong Kong"}
          imagePath="assets/tcSector/servicesDifferentBusinessAreas/DiamondPDF.png"
          pdfHyperlink="/en/doc/HKCTC_Diamond_Testing_Services_in_HK.pdf"
        />
      </div>
      <p className="text-heading-l">
        Testing Services for Fei Cui (Jadeite Jade) and Diamond
      </p>
      <ol className="mt-[24px]">
        <li>
          Authentication of natural Fei Cui (Jadeite Jade) and diamond is
          carried out by Hong Kong laboratories using scientific methods.
        </li>
        <br />
        <li>
          There are internationally renowned gemstone laboratories and local
          laboratories in Hong Kong providing professional gemstone
          identification services.
        </li>
        <br />
        <li>
          Hong Kong Accreditation Service (HKAS) assesses the technical
          competence and quality system of laboratories according to the
          International Standard, ISO/IEC 17025, and provides accreditation to
          competent laboratories.
        </li>
        <br />
        <li>
          Accredited laboratories may issue endorsed test reports bearing HKAS
          accreditation symbol for Fei Cui (Jadeite Jade) and diamond after
          test.
        </li>
      </ol>
      <hr className="my-[24px]" />
      <div className="w-full flex flex-col gap-[24px]">
        {acc.map((item, index) => (
          <Accordion
            key={index}
            defaultExpanded={false}
            title={item.title}
            details={<div className="text-body-m">{item.content}</div>}
          />
        ))}
      </div>

      <hr className="my-[24px]" />
      <p className="text-heading-l mb-[24px]">
        Laboratories Accredited by HKAS Providing Testing Services on Jewellery
      </p>

      <div>
        <p>
          Accredited laboratories in Hong Kong adopt the&nbsp;
          <a
            href="http://www.gahk.org/en/gemtest.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            Standard Methods for Testing Fei Cui (Jadeite Jade) for Hong Kong
          </a>
          &nbsp;and&nbsp;
          <a
            href="http://www.gahk.org/en/gemtest.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            Standard Methods for Testing Diamond for Hong Kong
          </a>
          , formulated by The Gemmological Association of Hong Kong, for
          identification purpose.
          <br />
          <br />
          The laboratories providing accredited testing services on Jewellery
          are available at&nbsp;
          <a
            href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html#t_services"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            HKAS's website
          </a>
          . (Please choose the test category, "Physical and Mechanical Testing",
          under "Services" to search the relevant laboratories.)
        </p>
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
        src={"tcSector/servicesDifferentBusinessAreas/Jewellery_banner.png"}
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
