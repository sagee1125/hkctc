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
  maxContainer,
} from "../../../../components";
import { navItemEnum } from "../../../../const";

const buttonArray = ["Proprietary Chinese medicines", "Chinese Materia Medica"];

export const ChineseMedicines: React.FC = () => {
  const businessAreaTitle = "Chinese Medicines" as BusinessAreaTitle;
  const [activeButton, setActiveButton] = useState<number>(0);
  const servicesForToys: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "a. Benefits of Chinese Medicines Testing",
      content: (
        <>
          <p>
            Hong Kong is an international trading hub of Chinese medicines.
            Chinese herbal medicines and proprietary Chinese medicines (pCm)
            sold in Hong Kong are generally with good quality. To ensure that
            products are genuine, not misprocessed (such as bleached), and are
            free from adulteration and contamination, testing and certification
            is indispensable. Hong Kong has an efficient and competent testing
            and certification sector to provide the relevant support
            <br />
            <br />
            Testing and certification of Chinese medicines can bring about many
            benefits to:
            <br />
            <br />
            <span className="text-highlight-m">1. Users:</span>&nbsp;It can help
            users to identify genuine products, reduces the chance of buying
            fake, misprocessed (such as bleached), adulterated or contaminated
            products.
            <br />
            <br />
            <span className="text-highlight-m">
              2. Manufacturers and Traders:
            </span>
            &nbsp;It can help enhance customer confidence and satisfaction,
            increase sales, and reduce the risk of costly recalls and lawsuits.
            <br />
            <br />
            <span className="text-highlight-m">
              3. Chinese Medicine Practitioners:
            </span>
            &nbsp;It can ensure that prescriptions are filled with genuine and
            quality medicinal herbs.
            <br />
            <br />
            <span className="text-highlight-m">4. Hong Kong:</span>
            &nbsp;It can promote the further development of the testing and
            certification sector and reinforce the position and strategic
            advantage of Hong Kong as a testing and certification hub of Chinese
            medicines. This in turn will sustain the economic growth of Hong
            Kong in the long run.
          </p>
        </>
      ),
    },
    {
      title: "b. Proprietary Chinese Medicines Testing",
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
      title: "c. Chinese Materia Medica Testing",
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
        "d. Chinese Medicines Testing Services Provided by Laboratories in Hong Kong",
      content: (
        <div>
          <div className="flex flex-wrap gap-[8px] mb-[16px]">
            {buttonArray.map((btn, index) => {
              const isActivated = index === activeButton;
              return (
                <button
                  key={index}
                  className="p-0 transition-all duration-800 ease-in-out bg-newPrimary"
                  style={isActivated ? activatedButtonStyle : normalButtonStyle}
                  onClick={() => {
                    setActiveButton(index);
                  }}
                >
                  <p className="px-[12px] py-[6px] text-highlight-xs">{btn}</p>
                </button>
              );
            })}
          </div>
          {activeButton === 0 ? (
            <>
              <p className="text-highlight-m">Safety testing:</p>
              <p className="text-body-m">
                1. Heavy metals and toxic elements
                <br />
                2. Pesticide residues
                <br />
                3. Microbiological examinations
              </p>
              <br />
              <p className="text-highlight-m">Quality and other testing:</p>
              <p className="text-body-m">
                1. Analysis to product specifications
                <br />
                2. Stability
                <br />
                3. Other tests according to the Pharmacopeia of People's
                Republic of China, e.g. water, weight variation, filling
                variation and disintegration
              </p>
            </>
          ) : (
            <>
              <p className="text-highlight-m">Authentication:</p>
              <p className="text-body-m">
                1. Authentication by visual examination, microscopic
                identification and chromatographic fingerprinting
              </p>
              <br />
              <p className="text-highlight-m">Safety testing:</p>
              <p className="text-body-m">
                1. Heavy metals and toxic elements
                <br />
                2. Pesticide residues
                <br />
                3. Aflatoxins
              </p>
              <br />
              <p className="text-highlight-m">Quality and other testing:</p>
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
    {
      title:
        "e. Laboratories Accredited by HKAS Providing Testing Services on Chinese Medicines",
      content: (
        <p>
          Details of the organisations providing the public with one or several
          types of accredited Chinese medicines testing services are available
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
      ),
    },
  ];

  return (
    <div style={fullContainer}>
      <BannerPhotoBox
        src={
          "tcSector/servicesDifferentBusinessAreas/chinese_medicines_banner.png"
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

            <div className="my-[24px]">
              <MediaTemplate
                title="Hong Kong's Testing Services for Chinese Medicines"
                iconPath={"VIDEO.png"}
                imagePath="/assets/tcSector/servicesDifferentBusinessAreas/ChineseMedicinesVideo.png"
              />
            </div>
            <p className="text-heading-l mb-[24px]">
              About Chinese Medicines Testing
            </p>
            <FileTemplate
              title={"Chinese Medicines Testing"}
              imagePath="assets/tcSector/servicesDifferentBusinessAreas/MedicalTestingPDF.png"
            />

            <p className="text-heading-l my-[24px]">
              About Chinese Medicines Testing
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
            <InternalBackButton
              targetUrl={`/tc-sector?section=${navItemEnum.different_business_areas}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
