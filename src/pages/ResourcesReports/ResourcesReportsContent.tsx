import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Radio, RadioGroup, Menu, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Slider, Box, Drawer } from "@mui/material";
import {
  normalButtonStyle,
  EmailBox,
  SquareTitle,
  activatedButtonStyle,
  MediaTemplateWithDialog,
  Paginator,
  handleGetPaginatorProp,
  NormalAccordion,
  Button,
  Link,
  Checkbox,
} from "../../components";
import {
  CATEGORIES,
  hktctReportsList as hktctReportsList_en,
  legislativeCouncilList as legislativeCouncilList_en,
  hkctcNewsletterList as hkctcNewsletterList_en,
  advertorialsList as advertorialsList_en,
  pamphletsList as pamphletsList_en,
  bookletsList as booletsList_en,
  comicsList,
  corruptionGuideList as corruptionGuideList_en,
  otherInformationList as otherInformationList_en,
  type PublicationType,
  MEDIA_TYPE,
  ADVERTORIALS_SECTOR,
  convertedCoursesList as coursesList_en,
  LANGUAGE,
  hktctReportsList_cn,
  advertorialsList_cn,
  legislativeCouncilList_cn,
  hkctcNewsletterList_cn,
  convertedCoursesList_cn as coursesList_cn,
  pamphletsList_cn,
  booletsList_cn,
  corruptionGuideList_cn,
  otherInformationList_cn,
} from "../../const";
import { Language, useSettings } from "../../context";

const multilingual = {
  en: {
    title: "Resources",
    filter: "Filter",
    Clear_Filters: "Clear Filters",
    Media_type: "Media type",
    Media_type_list: ["All", "PDF", "Video"],
    Year: "Year",
    Apply: "Apply",

    Advertorials: "Advertorials",
    about_tc: "About the testing and certification industry",
    sv: "Services offered by the testing and certification industry",

    filterOptions: ["From Latest to Oldest", "From Oldest to Latest"],
    Categories: "Categories",

    filterReportButtons: ["All", "HKCTC Reports", "Legislative Council Papers"],

    Reports: "Reports",

    courseButtons: ["All", "English Version", "Cantonese Version"],

    Publications: "Publications",

    filterPublicationButtons: [
      "All",
      "Pamphlets",
      "Booklets",
      "Comics",
      "Corruption Prevention Guide",
      "Other Useful Information",
    ],
  },
  cn: {
    title: "資源",
    filter: "篩選",
    Clear_Filters: "清除篩選",
    Media_type: "媒體類型",
    Media_type_list: ["全部", "PDF", "影片"],
    Year: "年份",
    Apply: "套用",

    Advertorials: "特約專輯",
    about_tc: "關於檢測和認證業",
    sv: "檢測和認證業提供的服務",
    filterOptions: ["從最新到最舊", "從最舊到最新"],

    Categories: "類別",

    filterReportButtons: ["全部", "香港檢測和認證局報告", "立法會文件"],

    Reports: "報告",

    courseButtons: ["全部", "英文版本", "粤语版本"],

    Publications: "刊物",

    filterPublicationButtons: [
      "全部",
      "宣傳單張",
      "小冊子",
      "漫畫",
      "檢測和認證業防貪指引",
      "其他有用資料",
    ],
  },
};

enum TimeFilterType {
  LatestToOld = "LatestToOld",
  OldToLatest = "OldToLatest",
}

const currentYear = new Date().getFullYear(); // get current year

const aboutTestingTags = [
  ADVERTORIALS_SECTOR.OVERVIEW,
  ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY,
  ADVERTORIALS_SECTOR.MANPOWER,
  ADVERTORIALS_SECTOR.METROLOGY,
  ADVERTORIALS_SECTOR.TC_SUPPORT,
];

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

const parseDate = (dateString: string) => {
  return new Date(dateString);
};

// Set the date as the middle of the year
const getMiddleDateFromYearRange = (yearRange: number[]): string => {
  const middleYear = Math.floor((yearRange[0] + yearRange[1]) / 2);
  return `${middleYear}-07-01`;
};

const sortByDateAscending = (list: PublicationType[]) => {
  const validDateList = list.every(
    (l) => Boolean(l.date) || Boolean(l.yearRange)
  );
  if (!validDateList) return list;
  return list.slice().sort((a, b) => {
    const aDate = Boolean(a.date)
      ? parseDate(a.date as string)
      : parseDate(getMiddleDateFromYearRange(a.yearRange as number[]));
    const bDate = Boolean(b.date)
      ? parseDate(b.date as string)
      : parseDate(getMiddleDateFromYearRange(b.yearRange as number[]));

    return aDate.getTime() - bDate.getTime();
  });
};

const sortByDateDescending = (list: PublicationType[]) => {
  const validDateList = list.every(
    (l) => Boolean(l.date) || Boolean(l.yearRange)
  );
  if (!validDateList) return list;
  return list.slice().sort((a, b) => {
    const aDate = Boolean(a.date)
      ? parseDate(a.date as string)
      : parseDate(getMiddleDateFromYearRange(a.yearRange as number[]));
    const bDate = Boolean(b.date)
      ? parseDate(b.date as string)
      : parseDate(getMiddleDateFromYearRange(b.yearRange as number[]));

    return bDate.getTime() - aDate.getTime();
  });
};

const itemsPerPage = 9;
export const ResourcesReportsContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { language, isPC } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;

  const hktctReportsList = isEn ? hktctReportsList_en : hktctReportsList_cn;
  const legislativeCouncilList = isEn
    ? legislativeCouncilList_en
    : legislativeCouncilList_cn;

  const hkctcNewsletterList = isEn
    ? hkctcNewsletterList_en
    : hkctcNewsletterList_cn;

  const resourcesList: PublicationType[] = [
    ...hktctReportsList,
    ...legislativeCouncilList,
    ...hkctcNewsletterList,
    // ...convertedCoursesList,
  ];

  const mediaTypeMapping: Partial<Record<string, string>> = {
    [MEDIA_TYPE.ALL]: page_text.Media_type_list[0],
    [MEDIA_TYPE.PDF]: page_text.Media_type_list[1],
    [MEDIA_TYPE.VIDEO]: page_text.Media_type_list[2],
  };

  const timeFilterMapping: Partial<Record<string, string>> = {
    [TimeFilterType.LatestToOld]: page_text.filterOptions[0],
    [TimeFilterType.OldToLatest]: page_text.filterOptions[1],
  };

  const filterReportsButtonsMapping: Partial<Record<string, string>> = {
    All: page_text.filterReportButtons[0],
    "HKCTC Reports": page_text.filterReportButtons[1],
    "Legislative Council Papers": page_text.filterReportButtons[2],
  };

  const reportsList: Record<string, PublicationType[]> = {
    All: [...hktctReportsList, ...legislativeCouncilList],
    "HKCTC Reports": hktctReportsList,
    "Legislative Council Papers": legislativeCouncilList,
  };

  const filterPublicationButtonsMapping: Record<string, string> = {
    All: page_text.filterPublicationButtons[0],
    Pamphlets: page_text.filterPublicationButtons[1],
    Booklets: page_text.filterPublicationButtons[2],
    Comics: page_text.filterPublicationButtons[3],
    "Corruption Prevention Guide": page_text.filterPublicationButtons[4],
    "Other Useful Information": page_text.filterPublicationButtons[5],
  };

  const pamphletsList = isEn ? pamphletsList_en : pamphletsList_cn;
  const bookletsList = isEn ? booletsList_en : booletsList_cn;
  const corruptionGuideList = isEn
    ? corruptionGuideList_en
    : corruptionGuideList_cn;
  const otherInformationList = isEn
    ? otherInformationList_en
    : otherInformationList_cn;
  const publicationList: Record<string, PublicationType[]> = {
    All: [
      ...pamphletsList,
      ...bookletsList,
      ...comicsList,
      ...corruptionGuideList,
      ...otherInformationList,
    ],
    Pamphlets: pamphletsList,
    Booklets: bookletsList,
    Comics: comicsList,
    "Corruption Prevention Guide": corruptionGuideList,
    "Other Useful Information": otherInformationList,
  };

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Reports filter buttons inside the Accordion
  const [activeReport, setActiveReport] = useState(0);
  // Publication filter buttons inside the Accordion
  const [activePublication, setActivePublication] = useState(0);
  // Advertorials filter button inside the Accordion
  const [activeAboutSector, setActiveAboutSector] = useState<number>(0);
  const [activeCertificateSector, setActiveCertificateSector] =
    useState<number>(-1);
  const [activeCoursesCategory, setActiveCoursesCategory] = useState<number>(0);

  // layout display
  const [layoutButton, setLayoutButton] = useState<number>(0);

  // filter conditions display on the left side
  const [selectedMediaType, setSelectedMediaType] = useState(MEDIA_TYPE.ALL);
  const [needRangeValue, setNeedRangeValue] = useState(true);
  const [rangeValue, setRangeValue] = useState<number[]>([2009, currentYear]);
  const [selectedItem, setSelectedItem] = useState<string>(
    TimeFilterType.LatestToOld
  );
  const defaultFilterCondition = {
    mediaType: MEDIA_TYPE.ALL,
    rangeValue: [2009, currentYear],
    needRangeValue,
    selectedItem: selectedItem,
  };

  const [filterCondition, setFilterCondition] = useState(
    defaultFilterCondition
  );

  const courseButtonMapping: Record<string, string> = {
    All: page_text.courseButtons[0],
    "English Version": page_text.courseButtons[1],
    "Cantonese Version": page_text.courseButtons[2],
  };

  const courseContent = isEn ? coursesList_en : coursesList_cn;
  const coursesContentMapping: Record<string, PublicationType[]> = {
    All: [...courseContent],
    "English Version": courseContent
      .filter((c) => c.language === LANGUAGE.EN)
      .map((c) => ({
        title: c.title,
        link: c.link,
        mediaType: MEDIA_TYPE.VIDEO,
        category: c.category,
      })),
    "Cantonese Version": courseContent
      .filter((c) => c.language === LANGUAGE.CH)
      .map((c) => ({
        title: c.title,
        link: c.link,
        mediaType: MEDIA_TYPE.VIDEO,
        category: c.category,
      })),
  };

  const advertorialsList = (
    isEn ? advertorialsList_en : advertorialsList_cn
  ).map((ad) => {
    return {
      title: ad.title,
      link: ad.link,
      mediaType: ad.mediaType,
      sector: ad.sector,
      category: ad.category,
      date: ad.date,
      yearRange: ad.yearRange,
    };
  });

  const aboutTestingSector: Record<
    string,
    { list: any[]; label: string; labelCN: string }
  > = {
    All: {
      list: advertorialsList.filter((item) =>
        item.sector?.some((s) =>
          aboutTestingTags.includes(s as ADVERTORIALS_SECTOR)
        )
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
  const certificateSector: Record<
    string,
    { list: any[]; label: string; labelCN: string }
  > = {
    All: {
      list: advertorialsList.filter((item) =>
        item?.sector?.some((s) =>
          certificateTags.includes(s as ADVERTORIALS_SECTOR)
        )
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
      list: advertorialsList.filter((item: any) =>
        item?.sector?.includes(ADVERTORIALS_SECTOR.TOYS)
      ),
      label: "Toys & Children's Products",
      labelCN: "玩具及兒童產品",
    },
  };

  const advertorialsFilterList = [
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

  const handleApplyFilter = () => {
    setFilterCondition({
      mediaType: selectedMediaType,
      rangeValue: rangeValue,
      selectedItem: selectedItem,
      needRangeValue: needRangeValue,
    });
    if (!isPC && mobileFilterOpen) setMobileFilterOpen(false);
  };

  const queryParams = new URLSearchParams(location.search);
  const initialSection = queryParams.get("category") ?? "";

  const initialParam: CATEGORIES = Object.values(CATEGORIES).includes(
    initialSection as CATEGORIES
  )
    ? (initialSection as CATEGORIES)
    : CATEGORIES.REPORTS;

  const [selectedCategory, setSelectedCategory] =
    useState<CATEGORIES>(initialParam);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedMediaType]);

  const handleClearFilter = (): void => {
    setFilterCondition(defaultFilterCondition);
    setSelectedMediaType(MEDIA_TYPE.ALL);
    setRangeValue([2009, currentYear]);
    setNeedRangeValue(true);
    setSelectedItem(TimeFilterType.LatestToOld);
  };

  const handleChangeCategory = (item: string) => {
    setSelectedCategory(item as CATEGORIES);
    handleClearFilter();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    navigate(`?section=${item}`);
    setCurrentPage(0);
  };

  const layoutIcons = ["row_layout.svg", "grid_layout.svg"];

  function rangValuetext(value: number): string {
    return `${value}`;
  }

  const handleRangeChange = (
    event: Event,
    newValue: number | number[]
  ): void => {
    setRangeValue(newValue as number[]);
  };

  const categories: Record<
    string,
    {
      enum: CATEGORIES;
      categoryArray: PublicationType[];
      subComponent?: React.ReactNode;
      label_en: string;
      label_cn: string;
    }
  > = {
    [CATEGORIES.REPORTS]: {
      enum: CATEGORIES.REPORTS,
      label_en: "Reports",
      label_cn: "報告",
      categoryArray: reportsList[
        Object.keys(filterReportsButtonsMapping)[activeReport]
      ].filter((item) => item.category.includes(CATEGORIES.REPORTS)),
      subComponent: (
        <NormalAccordion
          title={page_text.Reports}
          details={
            <div className="flex flex-wrap gap-[8px]">
              {Object.values(filterReportsButtonsMapping).map((name, index) => {
                const isActivated = activeReport === index;
                return (
                  <button
                    key={index}
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveReport(index);
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
      ),
    },
    [CATEGORIES.NEWSLETTER]: {
      enum: CATEGORIES.NEWSLETTER,
      label_en: "Newsletter",
      label_cn: "通訊",
      categoryArray: resourcesList.filter((item) =>
        item.category.includes(CATEGORIES.NEWSLETTER)
      ),
    },
    [CATEGORIES.PUBLICATIONS]: {
      enum: CATEGORIES.PUBLICATIONS,
      label_en: "Publications",
      label_cn: "刊物",
      categoryArray:
        publicationList[
          Object.keys(filterPublicationButtonsMapping)[activePublication]
        ],
      subComponent: (
        <NormalAccordion
          title={page_text.Publications}
          details={
            <div className="flex flex-wrap gap-[8px]">
              {Object.keys(filterPublicationButtonsMapping).map(
                (name, index: number) => {
                  const isActivated = activePublication === index;
                  return (
                    <button
                      key={index}
                      style={
                        isActivated ? activatedButtonStyle : normalButtonStyle
                      }
                      onClick={() => {
                        setActivePublication(index);
                        setCurrentPage(0);
                      }}
                    >
                      <p className="text-highlight-xs">
                        {filterPublicationButtonsMapping[name]}
                      </p>
                    </button>
                  );
                }
              )}
            </div>
          }
        />
      ),
    },
    [CATEGORIES.COURSES]: {
      enum: CATEGORIES.COURSES,
      categoryArray:
        coursesContentMapping[
          Object.keys(courseButtonMapping)[activeCoursesCategory]
        ],
      label_en: "Courses",
      label_cn: "課程",
      subComponent: (
        <NormalAccordion
          title="Courses"
          details={
            <div className="flex flex-row gap-[8px]">
              {Object.keys(courseButtonMapping).map((name, index) => {
                const isActivated = activeCoursesCategory === index;
                return (
                  <button
                    key={index}
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveCoursesCategory(index);
                      setCurrentPage(0);
                    }}
                  >
                    <p className="text-highlight-xs">
                      {courseButtonMapping[name]}
                    </p>
                  </button>
                );
              })}
            </div>
          }
        />
      ),
    },
    [CATEGORIES.ADVERTORIALS]: {
      enum: CATEGORIES.ADVERTORIALS,
      label_en: "Advertorials",
      label_cn: "特約專輯",
      categoryArray: advertorialsFilterList,
      subComponent: (
        <div className="flex flex-col gap-[24px]">
          <div>
            <NormalAccordion
              title={page_text.about_tc}
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
                          {isEn
                            ? aboutTestingSector[name].label
                            : aboutTestingSector[name].labelCN}
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
              title={page_text.sv}
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
                          {isEn
                            ? certificateSector[name].label
                            : certificateSector[name].labelCN}
                        </p>
                      </button>
                    );
                  })}
                </div>
              }
            />
          </div>
        </div>
      ),
    },
  };

  const activeCategoryList =
    Object.values(categories).filter(
      (item) => item.enum === selectedCategory
    )?.[0] ?? {};

  // apply filter on the displayed list
  const displayList = (
    filterCondition.selectedItem === TimeFilterType.LatestToOld
      ? sortByDateDescending
      : sortByDateAscending
  )(
    (activeCategoryList?.categoryArray ?? []).filter((cat) => {
      // Media Type filter
      const mediaTypeFilter =
        filterCondition.mediaType === MEDIA_TYPE.ALL
          ? true
          : cat.mediaType === filterCondition.mediaType;

      // Year Range Filter
      const yearRangeFilter = filterCondition.needRangeValue
        ? cat.yearRange
          ? cat.yearRange[0] <= filterCondition.rangeValue[1] &&
            cat.yearRange[1] >= filterCondition.rangeValue[0]
          : true
        : true;
      return mediaTypeFilter && yearRangeFilter;
    })
  );

  const subComponent = activeCategoryList?.subComponent;

  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    displayList
  );

  const dataCount = (displayList ?? []).length;

  const displayDateRelatedFilter = displayList.every((i) =>
    Boolean(i.yearRange)
  );

  const filterBox = (
    <>
      <div className="flex flex-row items-center">
        <p className="text-heading-l w-full">{page_text.filter}</p>
        <div
          onClick={handleClearFilter}
          className="w-[50%] flex flex-row-reverse "
        >
          <Link>{page_text.Clear_Filters}</Link>
        </div>
      </div>
      <div className="bg-[#EEEEEA] mt-[16px] pt-[22px] px-[24px]">
        <p className="text-highlight-l mb-[16px]">{page_text.Media_type}</p>

        <RadioGroup
          value={selectedMediaType}
          onChange={setSelectedMediaType}
          aria-label="Media type"
          className="flex flex-row gap-4"
        >
          {Object.keys(mediaTypeMapping).map((type, index) => (
            <div key={index} className="flex items-center gap-[8px]">
              <Radio
                value={type}
                className={`group flex h-[24px] w-[24px] items-center justify-center rounded-full border transition-all ${
                  selectedMediaType === type
                    ? "bg-newPrimary"
                    : "bg-[#D3D4D6] border-[#AAAAAA]"
                }`}
              >
                <CheckIcon
                  className={`size-4 transition ${
                    selectedMediaType === type
                      ? "fill-white opacity-100"
                      : "opacity-0"
                  }`}
                />
              </Radio>
              <p className="text-body-m">
                {mediaTypeMapping[type as MEDIA_TYPE]}
              </p>
            </div>
          ))}
        </RadioGroup>

        {displayDateRelatedFilter && (
          <>
            <div className="flex flex-row content-space-between w-full items-center flex-1">
              <p className="text-highlight-l mb-[16px] mt-[24px] w-full">
                {page_text.Year}
              </p>
              <Checkbox
                checked={needRangeValue}
                value={needRangeValue}
                label=""
                sx={{
                  marginRight: "0 !important",
                  ".MuiButtonBase-root": {
                    color: "#233F55 !important",
                    padding: 0,
                  },
                }}
                onClick={() => {
                  setNeedRangeValue(!needRangeValue);
                }}
              />
            </div>
            <Box sx={{ width: "100%", padding: "0.5rem" }}>
              <Slider
                disabled={!needRangeValue}
                value={rangeValue}
                min={2009}
                max={currentYear}
                onChange={handleRangeChange}
                valueLabelDisplay="on"
                getAriaValueText={rangValuetext}
                step={1}
                sx={{
                  zIndex: 10,
                  "& .MuiSlider-track": {
                    bgcolor: needRangeValue ? "#233F55" : "#AAA",
                    height: "6px",
                    border: "none",
                  },
                  "& .MuiSlider-rail": {
                    bgcolor: "white",
                    opacity: 1,
                    height: "6px",
                  },
                  "& .MuiSlider-root": {
                    boxShadow: "none",
                    border: "none",
                  },
                  "& .MuiSlider-thumb": {
                    bgcolor: "white", // 滑块内部颜色
                    borderColor: "#50555A", // 滑块边框颜色
                    borderWidth: "2px", // 滑块边框宽度
                    borderStyle: "solid",
                    height: "12px", // 滑块直径 = 8px (内部) + 2px (边框) * 2
                    width: "12px",
                    boxSizing: "border-box",
                  },
                  "& .MuiSlider-valueLabel": {
                    fontSize: 12,
                    fontWeight: "normal",
                    top: -6,
                    backgroundColor: "unset",
                    "&::before": {
                      display: "none",
                    },
                    "& *": {
                      background: "transparent",
                      color: needRangeValue ? "#233F55" : "#AAA",
                    },
                  },
                }}
              />
            </Box>
            <p
              className={`text-body-m mb-[16px]`}
              style={{
                color: needRangeValue ? "#233F55" : "#AAA",
              }}
            >
              {page_text.Year}: {rangeValue[0]}-{rangeValue[1]}
            </p>

            <div className="w-full">
              <Menu as="div" className="relative inline-block text-left w-full">
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex w-full justify-between items-center border border-gray-300 p-[16px] bg-white text-body-m text-gray-700">
                      {timeFilterMapping[selectedItem]}
                      <ChevronDownIcon
                        className={`h-5 w-5 text-[#666666] transform transition-transform ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-10 mt-2 w-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {Object.keys(timeFilterMapping).map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <button
                                onClick={() => setSelectedItem(item)}
                                className={`block w-full text-left px-4 py-3 text-sm ${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                }`}
                              >
                                {timeFilterMapping[item]}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </>
        )}

        <Button
          style={{
            lineHeight: 1.5,
            width: "100%",
            color: "#fff",
            backgroundColor: "#233F55",
            margin: "16px 0 22px 0",
            padding: "16px",
            textTransform: "none",
            borderRadius: 0,
          }}
          onClick={handleApplyFilter}
          variant="contained"
        >
          {page_text.Apply}
        </Button>
      </div>
    </>
  );

  const categoriesBox = (
    <>
      <p className={`text-heading-l mt-[${isPC ? 32 : 0}px] mb-[16px]`}>
        {page_text.Categories}
      </p>
      <div className="flex flex-col gap-[16px] mb-[32px]">
        {Object.keys(categories).map((cat, index) => {
          const {
            enum: catEnum,
            categoryArray = [],
            label_cn,
            label_en,
          } = categories[cat];
          const isActivated = catEnum === selectedCategory;
          const label = isEn ? label_en : label_cn;
          return (
            <div
              key={index}
              className="cursor-pointer flex flex-row justify-between w-full h-[77px] items-center px-[20px] transition-all duration-800 ease-in-out"
              style={{
                backgroundColor: isActivated ? "#233F55" : "#EAEAE5",
                color: !isActivated ? "#242A31" : "#EAEAE5",
              }}
              onClick={() => {
                handleChangeCategory(catEnum);
              }}
            >
              <p className="text-heading-l">{label}</p>
              <p className="text-highlight-l">
                {"(" + categoryArray.length + ")"}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );

  const main = (
    <div className="flex flex-col gap-[24px]">
      <div
        className={`w-full ${
          isPC ? "" : "flex flex-row justify-between items-center"
        }`}
      >
        <SquareTitle title={page_text.title} />
        {!isPC && (
          <div
            className="border-[1px] border-[#E0E0E0] flex flex-row py-[14px] px-[14px] items-center gap-[8px] cursor-pointer"
            onClick={() => {
              setMobileFilterOpen(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="22"
              viewBox="0 0 25 22"
              fill="none"
            >
              <path
                d="M9.79102 0.49817C8.86004 0.497682 7.95182 0.785953 7.19154 1.32325C6.43126 1.86056 5.85634 2.62044 5.54602 3.49817H0.791016V6.49817H5.54602C5.85592 7.37647 6.43062 8.13702 7.19092 8.67499C7.95121 9.21295 8.85965 9.50185 9.79102 9.50185C10.7224 9.50185 11.6308 9.21295 12.3911 8.67499C13.1514 8.13702 13.7261 7.37647 14.036 6.49817H24.791V3.49817H14.036C13.7257 2.62044 13.1508 1.86056 12.3905 1.32325C11.6302 0.785953 10.722 0.497682 9.79102 0.49817ZM8.29102 4.99817C8.29102 4.60035 8.44905 4.21881 8.73036 3.93751C9.01166 3.65621 9.39319 3.49817 9.79102 3.49817C10.1888 3.49817 10.5704 3.65621 10.8517 3.93751C11.133 4.21881 11.291 4.60035 11.291 4.99817C11.291 5.39599 11.133 5.77753 10.8517 6.05883C10.5704 6.34013 10.1888 6.49817 9.79102 6.49817C9.39319 6.49817 9.01166 6.34013 8.73036 6.05883C8.44905 5.77753 8.29102 5.39599 8.29102 4.99817ZM15.791 12.4982C14.86 12.4977 13.9518 12.786 13.1915 13.3233C12.4313 13.8606 11.8563 14.6204 11.546 15.4982H0.791016V18.4982H11.546C11.8559 19.3765 12.4306 20.137 13.1909 20.675C13.9512 21.213 14.8596 21.5018 15.791 21.5018C16.7224 21.5018 17.6308 21.213 18.3911 20.675C19.1514 20.137 19.7261 19.3765 20.036 18.4982H24.791V15.4982H20.036C19.7257 14.6204 19.1508 13.8606 18.3905 13.3233C17.6302 12.786 16.722 12.4977 15.791 12.4982ZM14.291 16.9982C14.291 16.6003 14.4491 16.2188 14.7304 15.9375C15.0117 15.6562 15.3932 15.4982 15.791 15.4982C16.1888 15.4982 16.5704 15.6562 16.8517 15.9375C17.133 16.2188 17.291 16.6003 17.291 16.9982C17.291 17.396 17.133 17.7775 16.8517 18.0588C16.5704 18.3401 16.1888 18.4982 15.791 18.4982C15.3932 18.4982 15.0117 18.3401 14.7304 18.0588C14.4491 17.7775 14.291 17.396 14.291 16.9982Z"
                fill="#233F55"
              />
            </svg>
            <p className="text-highlight-m text-newPrimary">Filter</p>
          </div>
        )}
      </div>
      {subComponent && <div>{subComponent}</div>}
      <div className="flex flex-row justify-between items-center">
        <div className="text-body-s">
          Showing <b className="text-button-s">{dataCount}</b> results for{" "}
          <b className="text-button-s">{selectedCategory.toLowerCase()}</b>
        </div>
        {isPC && (
          <div className="border-[1px] border-[#E0E0E0] flex flex-row p-[4px]">
            {layoutIcons.map((icon, index) => {
              const isActivated = layoutButton === index;
              return (
                <div
                  key={index}
                  className="m-auto p-[8px] h-[40px] w-[40px] cursor-pointer"
                  style={{ background: isActivated ? "#233F55" : "white" }}
                  onClick={() => {
                    setLayoutButton(index);
                  }}
                >
                  <div
                    className="h-[24px] w-[24px]"
                    style={{
                      color: isActivated ? "white" : "#233F55",
                      WebkitMask: `url(${process.env.PUBLIC_URL}/assets/icons/${icon}) no-repeat center`,
                      mask: `url(${process.env.PUBLIC_URL}/assets/icons/${icon}) no-repeat center`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      backgroundColor: isActivated ? "white" : "#233F55",
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {dataCount > 0 ? (
        <>
          <div
            className={
              layoutButton === 0
                ? `flex flex-col gap-[24px]`
                : `w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]`
            }
          >
            {currentPageData.map((item, index) => {
              const { title, date, link, mediaType } = item;
              const maskIcon =
                mediaType === MEDIA_TYPE.PDF ? "PDF.png" : "VIDEO.png";
              return (
                <div
                  key={index}
                  className={`h-[282px] ${
                    isPC ? "" : "items-start"
                  } flex flex-col gap-[14px]`}
                >
                  <MediaTemplateWithDialog
                    title={title}
                    maskIcon={maskIcon}
                    date={date}
                    mediaLink={link}
                    mediaType={mediaType}
                    direction={
                      !isPC ? "column" : layoutButton === 0 ? "full" : "column"
                    }
                  />
                </div>
              );
            })}
          </div>
          {/* pagination  */}
          <Paginator
            dataSet={displayList}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            startIndex={startIndex}
            endIndex={endIndex}
          />
        </>
      ) : (
        <div className="flex flex-col text-center w-full gap-[20px]">
          <div className="text-newPrimary text-heading-l">No Results Match</div>
          <div>
            Please try to select a different Media Type/ expand the Year range.
          </div>
          <div onClick={handleClearFilter}>
            <Link>Clear Filters and Apply</Link>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <>
      {isPC ? (
        <div className="w-full px-[24px] mt-[48px] grid grid-cols-[2fr,1fr] gap-[24px]">
          {main}
          <div>
            <div className="border-2 border-inherit p-[24px]">
              {filterBox}
              {categoriesBox}
              <hr className="mb-[24px]" />
              <EmailBox />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full px-[24px] flex flex-col gap-[24px]">
          <hr className="mt-[24px]" />
          {main}
          <div className="border-2 border-inherit p-[24px]">
            {categoriesBox}
            <hr className="mb-[24px]" />
            <EmailBox />
          </div>

          <Drawer
            anchor="top"
            open={mobileFilterOpen}
            onClose={() => {
              setMobileFilterOpen(false);
            }}
            sx={{
              "& .MuiDrawer-paper": {
                width: "100%",
                height: "auto",
                padding: "24px",
              },
            }}
          >
            {filterBox}
          </Drawer>
        </div>
      )}
    </>
  );
};
