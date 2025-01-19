import React from "react";
import {
  type BusinessAreaTitle,
  DifferentBusinessAreasDirectorySidebar,
  handleReturnDifferentBusinessAreasBreadcrumb,
} from "./utils";
import {
  BannerPhotoBox,
  Breadcrumb,
  InternalBackButton,
  MediaTemplate,
  SquareTitle,
  fullContainer,
  List,
  maxContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";

export const MedicalTesting: React.FC = () => {
  const businessAreaTitle = "Medical Testing" as BusinessAreaTitle;
  const listData = [
    "AceCGT Diagnostic Limited",
    "Bright Growth Medical Laboratory Limited",
    "Canossa Hospital (Caritas) Management Company Limited - Clinical Laboratory",
    "CareLink Bioscience Limited",
    "Chan & Hou Medical Laboratories Ltd.",
    "China Inspection Medical Laboratories Limited",
    "Codex Genetics Limited",
    "CUHK Medical Centre - Department of Pathology",
    "Department of Health - Centre for Health Protection, Public Health Laboratory Services Branch, Chemical Pathology and Haematology Division*#",
    "Department of Health - Centre for Health Protection, Public Health Laboratory Services Branch, Histopathology and Cytology Division*#	",
  ];

  const listRowRender: React.ReactNode[] = listData.map((item, index) => (
    <div
      key={index}
      className="grid grid-cols-[1fr,8fr,2fr] gap-[10px] !text-body-m h-[70px]"
    >
      <p className="flex items-center justify-center px-[10px] h-full text-center">
        {(index + 1).toString().padStart(2, "0")}
      </p>
      <p className="flex items-center justify-start px-[10px] h-full">{item}</p>
      <p className="flex items-center justify-center px-[10px] h-full underline text-links text-center">
        01
      </p>
    </div>
  ));

  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/medicalTesting_banner.png"
        }
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

            <div className="mt-[24px]">
              <MediaTemplate
                title="What you Need to Know about Medical Testing"
                imagePath="/assets/tcSector/servicesDifferentBusinessAreas/medicalTestingEvent.png"
              />
            </div>
            <p className="text-heading-l my-[24px]">
              a. What is Accredited Medical Testing Service?
            </p>

            <img
              className="w-full h-auto"
              src={`${process.env.PUBLIC_URL}/assets/tcSector/servicesDifferentBusinessAreas/Accredited-Medical-Testing-Service-1.png`}
              alt="Accredited Medical Testing Service"
            />

            <p className="text-body-m mt-[24px]">
              Reliable test results are crucial for proper diagnosis and
              treatment. The technical competence of a laboratory depends on a
              number of factors including equipment, sampling procedure and
              qualifications of chemists. Each aspect of them could affect the
              accuracy of test results.
              <br />
              <br />
              Accreditation is the third-party recognition to affirm a medical
              laboratory’s competence to carry out specific testing services in
              accordance with international standards. In Hong Kong, the Hong
              Kong Accreditation Service of the Government provides
              accreditation to medical laboratories through the&nbsp;
              <a
                href="https://www.itc.gov.hk/en/quality/hkas/accreditation/hoklas.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#00E]"
              >
                Hong Kong Laboratory Accreditation Scheme (HOKLAS)
              </a>
              . It is a voluntary scheme open to participation from any medical
              laboratories.
            </p>
            <hr className="my-[24px]" />

            <p className="text-heading-l mb-[24px]">
              b. Why Should We Use Accredited Medical Testing Service?
            </p>

            <img
              className="w-full h-auto"
              src={`${process.env.PUBLIC_URL}/assets/tcSector/servicesDifferentBusinessAreas/Accredited-Medical-Testing-Service-2.png`}
              alt="Accredited Medical Testing Service"
            />
            <p className="text-body-m mt-[24px]">
              The accreditation criteria of HOKLAS are in accordance with ISO
              15189 "Medical laboratories - Requirements for quality and
              competence", which contains both management and technical
              requirements. For example, laboratories should set up an effective
              management system, follow strictly the procedures and document any
              instructions related to test operations.
              <br /> <br />
              To get accreditation, the testing service of a medical laboratory
              will need to be rigorously assessed by independent medical experts
              against international standards. After obtaining the
              accreditation, the laboratory will also need to undergo regular
              review to ensure its conforming to the professional technical
              standards. Quality of test results provided by accredited medical
              laboratories is thus assured.
            </p>
            <hr className="my-[24px] text-[#E0E0E0]" />
            <p className="text-heading-l">
              c. Find an Accredited Medical Laboratory
            </p>
            <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] my-[24px] text-body-m">
              Please note that accreditation is test-specific. When choosing
              medical laboratories, please check their respective scope of
              accreditation from the above “List of Medical Laboratories
              Accredited under HOKLAS”, or from the&nbsp;
              <a
                href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html#t_services"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-links"
              >
                HKAS website
              </a>
              .
            </div>
            <p className="text-body-m">
              (As at 11 Nov 2024)
              <br />
              <br />
              Remarks: Accreditation is test-specific. Please check the scope of
              accreditation of medical laboratories by clicking the respective
              HOKLAS Registration No. in the table below, or visit the&nbsp;
              <a
                href="https://www.itc.gov.hk/en/quality/hkas/conformity_assessment_bodies/hoklas.html#t_services"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-links"
              >
                HKAS website
              </a>
              .
            </p>
            <div className="my-[24px]">
              <List
                title={
                  <div className="grid grid-cols-[1fr,8fr,2fr] !text-highlight-m h-[70px]">
                    <div />
                    <p className="flex items-center justify-start px-[10px] h-full">
                      Name of Accredited Medical Laboratory (in alphabetical
                      order)
                    </p>
                    <p className="flex items-center justify-center text-center px-[10px] h-full w-full">
                      HOKLAS Registration No.
                    </p>
                  </div>
                }
                rowData={listRowRender}
              />
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
