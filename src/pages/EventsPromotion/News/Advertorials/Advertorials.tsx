import React, { useState, useEffect } from "react";
import {
  SquareTitle,
  NormalAccordion,
  activatedButtonStyle,
  normalButtonStyle,
  MediaTemplateWithDialog,
  Paginator,
  handleGetPaginatorProp,
} from "../../../../components";
import {
  advertorialsList as unsortedAdvertorialsList,
  ADVERTORIALS_SECTOR,
  MEDIA_TYPE,
} from "../../../../const";
import { useSettings } from "../../../../context";

const itemsPerPage = 9;

function parseTitleToDate(title: string): Date {
  const months: { [key: string]: number } = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const parts = title.split(" ");
  if (parts.length === 2) {
    // eg. `Mar 2021` without `day`
    const [month, year] = parts;
    return new Date(parseInt(year), months[month]);
  } else if (parts.length === 3) {
    // eg. "4 Oct 2018"
    const [day, month, year] = parts;
    return new Date(parseInt(year), months[month], parseInt(day));
  }
  return new Date(0); // a default earliest date
}

export const Advertorials: React.FC = () => {
  const [activeAboutSector, setActiveAboutSector] = useState<number>(0);
  const [activeCertificateSector, setActiveCertificateSector] =
    useState<number>(-1);

  const aboutTestingTags = [
    ADVERTORIALS_SECTOR.OVERVIEW,
    ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY,
    ADVERTORIALS_SECTOR.MANPOWER,
    ADVERTORIALS_SECTOR.METROLOGY,
    ADVERTORIALS_SECTOR.TC_SUPPORT,
  ];
  // sorted AdvertorialsList
  const advertorialsList = unsortedAdvertorialsList.sort((a, b) => {
    const dateA = parseTitleToDate(a.title);
    const dateB = parseTitleToDate(b.title);
    return dateB.getTime() - dateA.getTime();
  });

  const aboutTestingSector: Record<string, any[]> = {
    All: advertorialsList.filter((item) =>
      item.sector?.some((s) => aboutTestingTags.includes(s))
    ),
    Overview: advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.OVERVIEW)
    ),
    "Mainland Opportunities": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY)
    ),
    "Manpower Development": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.MANPOWER)
    ),
    "Metrology, Accreditation and Standards": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.METROLOGY)
    ),
    "Support to T&C Industry": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.TC_SUPPORT)
    ),
  };

  const certificateTags = [
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
  ];
  const certificateSector: Record<string, any[]> = {
    All: advertorialsList.filter((item) =>
      item?.sector?.some((s) => certificateTags.includes(s))
    ),
    "Management System Certification": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.MANAGEMENT_SYSTEM)
    ),
    "Chinese Medicines": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.CHINESE_MEDICINE)
    ),
    "Construction Materials": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.CONSTRUCTION)
    ),
    "Electrical & Electronic Products": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.ELECTRICAL_PRODUCTS)
    ),
    "Environmental Protection": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.ENVIRONMENT_PROTECTION)
    ),
    Food: advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.FOOD)
    ),
    "Information and Communications Technologies": advertorialsList.filter(
      (item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.INFORMATION_TECHNOLOGY)
    ),
    Jewellery: advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.JEWELLERY)
    ),
    "Medical testing": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.MEDICAL_TESTING)
    ),
    "Textile, Clothing & Footwear": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.TEXTILE_CLOTHING)
    ),
    "Toys & Children's Products": advertorialsList.filter((item) =>
      item.sector?.includes(ADVERTORIALS_SECTOR.TOYS)
    ),
  };

  const displayList = [
    ...(activeAboutSector >= 0
      ? aboutTestingSector[Object.keys(aboutTestingSector)[activeAboutSector]]
      : []),
    ...(activeCertificateSector >= 0
      ? certificateSector[
          Object.keys(certificateSector)[activeCertificateSector]
        ]
      : []),
  ];

  const [currentPage, setCurrentPage] = useState<number>(0);
  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    displayList
  );
  const { isPC } = useSettings();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title="Advertorials" />
      <div>
        <NormalAccordion
          title="About the testing and certification industry"
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
                      setActiveCertificateSector(-1);
                      setCurrentPage(0);
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
          title="Services offered by the testing and certification industry"
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
                      setActiveAboutSector(-1);
                      setCurrentPage(0);
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

      <div
        className={`w-full grid ${
          isPC
            ? "grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "grid-cols-1 gap-[24px]"
        }`}
      >
        {currentPageData.map((item, index) => {
          const { title, date, mediaType, link } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "VIDEO.png";
          return (
            <div
              key={index}
              className={`w-full ${
                isPC ? "h-[282px]" : "h-auto"
              } flex flex-col gap-[14px]`}
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

      <Paginator
        dataSet={displayList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </div>
  );
};
