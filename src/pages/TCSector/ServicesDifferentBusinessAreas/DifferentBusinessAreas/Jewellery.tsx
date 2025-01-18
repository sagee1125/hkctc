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
  maxContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";

export const Jewellery: React.FC = () => {
  const businessAreaTitle = "Jewellery" as BusinessAreaTitle;

  const acc: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "a. Testing Services for Fei Cui (Jadeite Jade) and Diamond",
      content: (
        <p>
          1. Authentication of natural Fei Cui (Jadeite Jade) and diamond is
          carried out by Hong Kong laboratories using scientific methods.
          <br />
          <br />
          2. There are internationally renowned gemstone laboratories and local
          laboratories in Hong Kong providing professional gemstone
          identification services.
          <br />
          <br />
          3. Hong Kong Accreditation Service (HKAS) assesses the technical
          competence and quality system of laboratories according to the
          International Standard, ISO/IEC 17025, and provides accreditation to
          competent laboratories.
          <br />
          <br />
          4. Accredited laboratories may issue endorsed test reports bearing
          HKAS accreditation symbol for Fei Cui (Jadeite Jade) and diamond after
          test.
        </p>
      ),
    },
    {
      title: "b. Trade Descriptions Order",
      content: `Under the Trade Descriptions (Provision of Information on Natural Fei
          Cui) Order and the Trade Descriptions (Provision of Information on
          Diamond) Order of the Laws of Hong Kong, retailers are required to
          issue to the buyers invoices or receipts showing, among others, the
          description of any article of natural Fei Cui or diamond sold in
          accordance with the Orders.`,
    },
    {
      title: "c. Accreditation of Laboratories",
      content:
        "Application for accreditation is open and voluntary in Hong Kong. All Hong Kong Accreditation Service (HKAS) accredited laboratories meet the management and technical requirements of the international standard, ISO/IEC 17025, in the provision of high quality testing services.",
    },

    {
      title:
        "d. Laboratories Providing Accredited Testing Services for Gemstone",
      content: (
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
            The lists of laboratories accredited by HKAS on the provision of
            testing services for gemstone are available at&nbsp;
            <a
              href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html#t_services"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              HKAS's website
            </a>
            . (Please choose the test category, "Physical and Mechanical
            Testing", under "Services" to search the relevant laboratories.)
          </p>
        </div>
      ),
    },
  ];

  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={"tcSector/servicesDifferentBusinessAreas/Jewellery_banner.png"}
      />
      <div style={maxContainer}>
        <div id="breadcrumb">
          <Breadcrumb
            items={handleReturnDifferentBusinessAreasBreadcrumb(
              businessAreaTitle
            )}
          />
        </div>
        <div className="w-full flex flex-row pt-[48px] pr-[24px]">
          <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
            <DifferentBusinessAreasDirectorySidebar
              businessAreaTitle={businessAreaTitle}
            />
          </div>
          <div className="flex-1">
            <SquareTitle title={businessAreaTitle} />

            <div className="my-[24px]">
              <MediaTemplate
                title="Hong Kong's Testing Services for Fei Cui (Jadeite Jade) and Diamond"
                imagePath="/assets/tcSector/servicesDifferentBusinessAreas/JewelleryVideo.png"
                iconPath={"VIDEO.png"}
              />
            </div>
            <p className="text-heading-l mb-[24px]">About Jewellery Testing</p>
            <div className="grid grid-cols-2 w-full gap-[24px] mb-[24px]">
              <FileTemplate
                title={"Testing of Fei Cui and Diamond in Hong Kong"}
                imagePath="assets/tcSector/servicesDifferentBusinessAreas/Testing_FeiCui.png"
              />
              <FileTemplate
                title={"Diamond Testing Services in Hong Kong"}
                imagePath="assets/tcSector/servicesDifferentBusinessAreas/DiamondPDF.png"
              />
            </div>
            <div className="w-full flex flex-col gap-[24px]">
              {acc.map((item, index) => (
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
    </div>
  );
};
