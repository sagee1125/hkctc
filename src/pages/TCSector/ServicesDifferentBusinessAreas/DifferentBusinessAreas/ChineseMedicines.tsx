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
  activatedButtonStyle,
  normalButtonStyle,
  fullContainer,
  maxPCContainer,
  maxMobileContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";
import { useSettings } from "../../../../context";

const buttonArray = ["Proprietary Chinese medicines", "Chinese Materia Medica"];

export const ChineseMedicines: React.FC = () => {
  const { isPC } = useSettings();

  const businessAreaTitle = "Chinese Medicines" as BusinessAreaTitle;
  const [activeButton, setActiveButton] = useState<number>(0);
  const servicesForChineseMedicine: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "Proprietary Chinese Medicines Testing",
      content: (
        <p>
          Under the Chinese Medicine Ordinance (Chapter 549 of the Laws of Hong
          Kong), testing for heavy metals, toxic elements, pesticide residues
          and microbial limits has been required for the registration of
          proprietary Chinese Medicines (pCm) since 2003 to ensure that they can
          meet the safety requirements. For more details, please visit the&nbsp;
          <a
            href="https://www.cmchk.org.hk/index_en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            website of the Chinese Medicine Council of Hong Kong
          </a>
          .
        </p>
      ),
    },
    {
      title: "Chinese Materia Medica Testing",
      content: (
        <p>
          Many types of Chinese medicines can now be tested against the&nbsp;
          <a
            href="http://www.cmd.gov.hk/html/eng/GCMTI/hkcmms/volumes.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00E]"
          >
            Hong Kong Chinese Materia Medica Standards (HKCMMS)
          </a>
          &nbsp;or the Pharmacopeia of the People's Republic of China. The
          HKCMMS is of great importance because it can provide relevant
          standards for safety and quality testing of Chinese materia medica. As
          Chinese materia medica are raw materials for pCm, the testing could
          help to ensure the quality of pCm concerned.
        </p>
      ),
    },

    {
      title:
        "Chinese Medicines Testing Services Provided by Laboratories in Hong Kong",
      content: (
        <div>
          <div className="flex flex-wrap gap-[8px] mb-[16px]">
            {buttonArray.map((btn, index) => {
              const isActivated = index === activeButton;
              return (
                <button
                  key={index}
                  style={isActivated ? activatedButtonStyle : normalButtonStyle}
                  onClick={() => {
                    setActiveButton(index);
                  }}
                >
                  {btn}
                </button>
              );
            })}
          </div>
          {activeButton === 0 ? (
            <>
              <p className="text-highlight-m">Safety testing:</p>
              <br />
              <p className="text-body-m">
                1. Heavy metals and toxic elements
                <br />
                <br />
                2. Pesticide residues
                <br />
                <br />
                3. Microbiological examinations
              </p>
              <br />
              <p className="text-highlight-m">Quality and other testing:</p>
              <br />
              <p className="text-body-m">
                1. Analysis to product specifications
                <br />
                <br />
                2. Stability
                <br />
                <br />
                3. Other tests according to the Pharmacopeia of People's
                Republic of China, e.g. water, weight variation, filling
                variation and disintegration
              </p>
            </>
          ) : (
            <>
              <p className="text-highlight-m">Authentication:</p>
              <br />
              <p className="text-body-m">
                1. Authentication by visual examination, microscopic
                identification and chromatographic fingerprinting
              </p>
              <br />
              <p className="text-highlight-m">Safety testing:</p>
              <br />
              <p className="text-body-m">
                1. Heavy metals and toxic elements
                <br />
                <br />
                2. Pesticide residues
                <br />
                <br />
                3. Aflatoxins
              </p>
              <br />
              <p className="text-highlight-m">Quality and other testing:</p>
              <br />
              <p className="text-body-m">
                1. Testing according to the&nbsp;
                <a
                  href="http://www.cmd.gov.hk/html/eng/GCMTI/hkcmms/volumes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#00E]"
                >
                  Hong Kong Chinese Materia Medica Standards(HKCMMS)
                </a>
                &nbsp;or the Pharmacopeia of People's Republic of China for
                quality, e.g. assay, ash, water content and extractives
              </p>
            </>
          )}
        </div>
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
          title="Hong Kong's Testing Services for Chinese Medicines"
          iconPath={"VIDEO.png"}
          imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ChineseMedicinesVideo.png"
          mediaLink="https://www.youtube.com/embed/WRYVmv0SzrQ"
        />
      </div>

      <FileTemplate
        title={"Chinese Medicines Testing"}
        imagePath="assets/tcSector/servicesDifferentBusinessAreas/MedicalTestingPDF.png"
        pdfHyperlink="/en/doc/Chinese_Medicines_Pamphlet_2018.pdf"
      />

      <p className="text-heading-l my-[24px]">
        Benefits of Chinese Medicines Testing & Certification
      </p>

      <div className="text-body-m">
        Hong Kong is an international trading hub of Chinese medicines. Chinese
        herbal medicines and proprietary Chinese medicines (pCm) sold in Hong
        Kong are generally with good quality. To ensure that products are
        genuine, not misprocessed (such as bleached), and are free from
        adulteration and contamination, testing and certification is
        indispensable. Hong Kong has an efficient and competent testing and
        certification industry to provide the relevant support.
        <br />
        <br />
        Testing and certification of Chinese medicines can bring about many
        benefits to:
        <br />
        <br />
        <ol>
          <li>
            <span className="text-highlight-m">Users:</span>
            &nbsp;It can help users to identify genuine products, reduces the
            chance of buying fake, misprocessed (such as bleached), adulterated
            or contaminated products.
          </li>
          <br />
          <li>
            <span className="text-highlight-m">Manufacturers and Traders:</span>
            &nbsp;It can help enhance customer confidence and satisfaction,
            increase sales, and reduce the risk of costly recalls and lawsuits.
          </li>
          <br />
          <li>
            <span className="text-highlight-m">
              Chinese Medicine Practitioners:
            </span>
            &nbsp;It can ensure that prescriptions are filled with genuine and
            quality medicinal herbs.
          </li>
          <br />
          <li>
            <span className="text-highlight-m">Hong Kong:</span>
            &nbsp;It can promote the further development of the testing and
            certification industry and reinforce the position and strategic
            advantage of Hong Kong as a testing and certification hub of Chinese
            medicines. This in turn will sustain the economic growth of Hong
            Kong in the long run.
          </li>
        </ol>
      </div>

      <div className="w-full flex flex-col gap-[24px] mt-[24px]">
        {servicesForChineseMedicine.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            defaultExpanded={false}
            details={<div className="text-body-m">{item.content}</div>}
          />
        ))}
      </div>

      <hr className="my-[24px]" />
      <p className="text-heading-l">
        Laboratories Accredited by HKAS Providing Testing Services on Chinese
        Medicines
      </p>
      <p className="text-body-m py-[24px]">
        The laboratories providing accredited testing services on Chinese
        Medicines are available at&nbsp;
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
      <hr className="mb-[24px]" />

      <InternalBackButton
        targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
      />
    </>
  );
  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/chinese_medicines_banner.png"
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
