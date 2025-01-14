import React from "react";
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

export const MedicalTesting: React.FC = () => {
  const directoryItems = displayBusinessAreas.map((area) => area.title);

  return (
    <div className="w-full pb-[48px]">
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/medicalTesting_banner.png"
        }
      />
      <div id="breadcrumb">
        <Breadcrumb
          items={handleReturnDifferentBusinessAreasBreadcrumb(
            "Medical Testing"
          )}
        />
      </div>
      <div className="w-full flex flex-row pt-[48px] pr-[24px]">
        <div className="flex flex-col px-[24px] min-w-[440px] w-1/3 gap-[24px]">
          <DirectorySidebar
            disabled // TODO to be removed
            directorySidebarItems={directoryItems}
            activatedItems={directoryItems[0]} // Medical Testing
            setActivatedItems={() => {}}
          />
        </div>
        <div className="flex-1">
          <SquareTitle title="Medical Testing" />

          <div className="mt-[24px]">
            <MediaTemplate
              title="T&C Manpower Development Award Scheme 2023-24"
              imagePath="/assets/tcSector/servicesDifferentBusinessAreas/medicalTestingEvent.png"
              date="4 December 2023"
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
            accordance with international standards. In Hong Kong, the Hong Kong
            Accreditation Service of the Government provides accreditation to
            medical laboratories through the&nbsp;
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00E]"
            >
              Hong Kong Laboratory Accreditation Scheme (HOKLAS)
            </a>
            . It is a voluntary scheme open to participation from any medical
            laboratories.
            <br />
            <br />
            ParaParagraph B
          </p>
          <hr className="my-[24px]" />

          <p className="text-heading-l mb-[24px]">
            b. Why Should We Use Accredited Medical Testing Service?
          </p>

          <img
            className="w-full h-auto"
            src={`${process.env.PUBLIC_URL}/assets/tcSector/servicesDifferentBusinessAreas/Accredited-Medical-Testing-Service-1.png`}
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
            against international standards. After obtaining the accreditation,
            the laboratory will also need to undergo regular review to ensure
            its conforming to the professional technical standards. Quality of
            test results provided by accredited medical laboratories is thus
            assured.
            <br /> <br />
            ParaParagraph B
          </p>
          <hr className="my-[24px] text-[#E0E0E0]" />
          <p className="text-heading-l">
            c. Find an Accredited Medical Laboratory
          </p>
          <div className="w-full bg-[#F7F7F5] py-[36px] px-[42px] my-[24px] text-body-m">
            Please note that accreditation is test-specific. When choosing
            medical laboratories, please check their respective scope of
            accreditation from the above “List of Medical Laboratories
            Accredited under HOKLAS”, or from the HKAS website.
          </div>
          <p className="text-body-m">
            (As at 11 Nov 2024)
            <br />
            <br />
            Remarks: Accreditation is test-specific. Please check the scope of
            accreditation of medical laboratories by clicking the respective
            HOKLAS Registration No. in the table below, or visit the HKAS
            website.
          </p>

          <p className="text-orange-600"> TODO</p>
          <hr className="my-[24px]" />
          <InternalBackButton
            targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
          />
        </div>
      </div>
    </div>
  );
};
