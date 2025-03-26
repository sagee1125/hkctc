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
import { Language, useSettings } from "../../../../context";

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

export function formatDateToChinese(dateStr: string): string {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    return dateStr;
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0-based
  const day = date.getDate();

  //  "YYYY年MM月DD日"
  return `${year}年${month.toString().padStart(2, "0")}月${day
    .toString()
    .padStart(2, "0")}日`;
}

const multilingual = {
  en: {
    title: "Advertorials",
    about_tc: "About the testing and certification industry",
    sv: "Services offered by the testing and certification industry",
  },
  cn: {
    title: "特約專輯",
    about_tc: "關於檢測和認證業",
    sv: "檢測和認證業提供的服務",
  },
};

export const Advertorials: React.FC = () => {
  const { language, isPC, getPageText, getSingleText } = useSettings();
  const isEn = language === Language.EN;

  const page_text = getPageText(multilingual);
  const { title, about_tc, sv } = page_text;
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

  const aboutTestingSector: Record<
    string,
    { list: any[]; label: string; labelCN: string }
  > = {
    All: {
      list: advertorialsList.filter((item) =>
        item.sector?.some((s) => aboutTestingTags.includes(s))
      ),
      label: "All",
      labelCN: "全部",
    },
    Overview: {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.OVERVIEW)
      ),
      label: "Overview",
      labelCN: "總覽",
    },
    "Mainland Opportunities": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY)
      ),
      label: "Mainland Opportunities",
      labelCN: "在內地的發展機遇",
    },
    "Manpower Development": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.MANPOWER)
      ),
      label: "Manpower Development",
      labelCN: "人力發展",
    },
    "Metrology, Accreditation and Standards": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.METROLOGY)
      ),
      label: "Metrology, Accreditation and Standards",
      labelCN: "計量學、認可服務和標準",
    },
    "Support to T&C Industry": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.TC_SUPPORT)
      ),
      label: "Support to T&C Industry",
      labelCN: "對檢測和認證業的支援",
    },
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
  const certificateSector: Record<
    string,
    { list: any[]; label: string; labelCN: string }
  > = {
    All: {
      list: advertorialsList.filter((item) =>
        item?.sector?.some((s) => certificateTags.includes(s))
      ),
      label: "All",
      labelCN: "全部",
    },
    "Management System Certification": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.MANAGEMENT_SYSTEM)
      ),
      label: "Management System Certification",
      labelCN: "管理體系認證",
    },
    "Chinese Medicines": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.CHINESE_MEDICINE)
      ),
      label: "Chinese Medicines",
      labelCN: "中藥",
    },
    "Construction Materials": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.CONSTRUCTION)
      ),
      label: "Construction Materials",
      labelCN: "建築材料",
    },
    "Electrical & Electronic Products": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.ELECTRICAL_PRODUCTS)
      ),
      label: "Electrical & Electronic Products",
      labelCN: "電氣及電子產品",
    },
    "Environmental Protection": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.ENVIRONMENT_PROTECTION)
      ),
      label: "Environmental Protection",
      labelCN: "環保",
    },
    Food: {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.FOOD)
      ),
      label: "Food",
      labelCN: "食品",
    },
    "Information and Communications Technologies": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.INFORMATION_TECHNOLOGY)
      ),
      label: "Information and Communications Technologies",
      labelCN: "資訊及通訊科技",
    },
    Jewellery: {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.JEWELLERY)
      ),
      label: "Jewellery",
      labelCN: "珠寶",
    },
    "Medical testing": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.MEDICAL_TESTING)
      ),
      label: "Medical testing",
      labelCN: "醫務化驗",
    },
    "Textile, Clothing & Footwear": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.TEXTILE_CLOTHING)
      ),
      label: "Textile, Clothing & Footwear",
      labelCN: "紡織品、衣服和鞋履",
    },
    "Toys & Children's Products": {
      list: advertorialsList.filter((item) =>
        item.sector?.includes(ADVERTORIALS_SECTOR.TOYS)
      ),
      label: "Toys & Children's Products",
      labelCN: "玩具及兒童產品",
    },
  };

  const displayList = [
    ...(activeAboutSector >= 0
      ? aboutTestingSector[Object.keys(aboutTestingSector)[activeAboutSector]]
          .list
      : []),
    ...(activeCertificateSector >= 0
      ? certificateSector[
          Object.keys(certificateSector)[activeCertificateSector]
        ].list
      : []),
  ];

  const [currentPage, setCurrentPage] = useState<number>(0);
  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    displayList
  );

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title={title as string} />
      <div>
        <NormalAccordion
          title={about_tc as string}
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
                    <p className="text-highlight-xs">
                      {getSingleText(
                        aboutTestingSector[name].label,
                        aboutTestingSector[name].labelCN
                      )}
                    </p>
                  </button>
                );
              })}
            </div>
          }
        />
      </div>

      <div>
        <NormalAccordion
          title={sv as string}
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
                    <p className="text-highlight-xs">
                      {getSingleText(
                        certificateSector[name].label,
                        certificateSector[name].labelCN
                      )}
                    </p>
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
                title={isEn ? title : formatDateToChinese(title)}
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
