import React, { useState } from "react";
import {
  SquareTitle,
  NormalAccordion,
  activatedButtonStyle,
  normalButtonStyle,
  MediaTemplateWithDialog,
} from "../../../../components";
import {
  advertorialsList,
  ADVERTORIALS_SECTOR,
  MEDIA_TYPE,
} from "../../../../const";

export const Advertorials: React.FC = () => {
  const [activeAboutSector, setActiveAboutSector] = useState<number>(0);
  const [activeCertificateSector, setActiveCertificateSector] =
    useState<number>(0);
  const aboutTestingSector: Record<string, any[]> = {
    All: advertorialsList.filter((item) =>
      [
        ADVERTORIALS_SECTOR.OVERVIEW,
        ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY,
        ADVERTORIALS_SECTOR.MANPOWER,
        ADVERTORIALS_SECTOR.METROLOGY,
        ADVERTORIALS_SECTOR.TC_SUPPORT,
      ].includes(item.sector)
    ),
    Overview: advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.OVERVIEW
    ),
    "Mainland Opportunities": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY
    ),
    "Manpower Development": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.MANPOWER
    ),
    "Metrology, Accreditation and Standards": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.METROLOGY
    ),
    "Support to T&C Sector": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.TC_SUPPORT
    ),
  };

  const certificateSector: Record<string, any[]> = {
    All: advertorialsList.filter((item) =>
      [
        ADVERTORIALS_SECTOR.MANAGEMENT_SYSTEM,
        ADVERTORIALS_SECTOR.CHINESE_MEDICINE,
        ADVERTORIALS_SECTOR.CONSTRUCTION,
        ADVERTORIALS_SECTOR.ELECTRICAL_PRODUCTS,
        ADVERTORIALS_SECTOR.ENVIRONMENT_PROTECTION,
        ADVERTORIALS_SECTOR.FOOD,
        ADVERTORIALS_SECTOR.INFORMATION_TECHNOLOGY,
        ADVERTORIALS_SECTOR.JEWELLERY,
        ADVERTORIALS_SECTOR.MEDICAL_TESTING,
        ADVERTORIALS_SECTOR.TEXTILE_CLOTHING,
        ADVERTORIALS_SECTOR.TOYS,
      ].includes(item.sector)
    ),
    "Management System Certification": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.MANAGEMENT_SYSTEM
    ),
    "Chinese Medicines": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.CHINESE_MEDICINE
    ),
    "Construction Materials": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.CONSTRUCTION
    ),
    "Electrical & Electronic Products": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.ELECTRICAL_PRODUCTS
    ),
    "Environmental Protection": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.ENVIRONMENT_PROTECTION
    ),
    Food: advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.FOOD
    ),
    "Information and Communications Technologies": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.INFORMATION_TECHNOLOGY
    ),
    Jewellery: advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.JEWELLERY
    ),
    "Medical testing": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.MEDICAL_TESTING
    ),
    "Textile, Clothing & Footwear": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.TEXTILE_CLOTHING
    ),
    "Toys & Children's Products": advertorialsList.filter(
      (item) => item.sector === ADVERTORIALS_SECTOR.TOYS
    ),
  };

  const displayList = [
    ...aboutTestingSector[Object.keys(aboutTestingSector)[activeAboutSector]],
    ...certificateSector[
      Object.keys(certificateSector)[activeCertificateSector]
    ],
  ];

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="Advertorials" />
      <div>
        <NormalAccordion
          title="About the testing and certification sector"
          details={
            <div className="flex flex-row flex-wrap gap-[8px]">
              {Object.keys(aboutTestingSector).map((name, index) => {
                const isActivated = activeAboutSector === index;
                return (
                  <button
                    key={index}
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveAboutSector(index);
                    }}
                  >
                    <p className="text-highlight-xs">{name}</p>
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      <div>
        <NormalAccordion
          title="Services offered by the testing and certification sector"
          details={
            <div className="flex flex-row flex-wrap gap-[8px]">
              {Object.keys(certificateSector).map((name, index) => {
                const isActivated = activeCertificateSector === index;
                return (
                  <button
                    key={index}
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveCertificateSector(index);
                    }}
                  >
                    <p className="text-highlight-xs">{name}</p>
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
        {displayList.map((item, index) => {
          const { title, date, mediaType, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className="w-full h-[282px] flex flex-col gap-[14px]"
            >
              <MediaTemplateWithDialog
                title={title}
                maskIcon={maskIcon}
                date={date}
                mediaLink={link}
                mediaType={mediaType}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
