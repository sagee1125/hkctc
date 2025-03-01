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
  CategoryLabel,
  hktctReportsList,
  legislativeCouncilList,
  hkctcNewsletterList,
  advertorialsList,
  pamphletsList,
  bookletsList,
  comicsList,
  corruptionGuideList,
  otherInformationList,
  type PublicationType,
  MEDIA_TYPE,
  ADVERTORIALS_SECTOR,
  convertedCoursesList,
  coursesList,
  LANGUAGE,
} from "../../const";
import { useSettings } from "../../context";

const mediaTypeMapping: Partial<Record<string, string>> = {
  All: "All",
  [MEDIA_TYPE.PDF]: "PDF",
  [MEDIA_TYPE.VIDEO]: "Video",
};
const currentYear = new Date().getFullYear(); // get current year

const resourcesList: PublicationType[] = [
  ...hktctReportsList,
  ...legislativeCouncilList,
  ...hkctcNewsletterList,
  ...advertorialsList,
  ...convertedCoursesList,
];

const filterReportsButtons = [
  "All",
  "HKCTC Reports",
  "Legislative Council Papers",
];

const reportsList: Record<string, PublicationType[]> = {
  All: [...hktctReportsList, ...legislativeCouncilList],
  "HKCTC Reports": hktctReportsList,
  "Legislative Council Papers": legislativeCouncilList,
};

const filterPublicationButtons = [
  "All",
  "Pamphlets",
  "Booklets",
  "Comics",
  "Corruption Prevention Guide",
  "Other Useful Information",
];
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

const aboutTestingSector: Record<string, any[]> = {
  All: advertorialsList.filter((item) =>
    [
      ADVERTORIALS_SECTOR.OVERVIEW,
      ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY,
      ADVERTORIALS_SECTOR.MANPOWER,
      ADVERTORIALS_SECTOR.METROLOGY,
      ADVERTORIALS_SECTOR.TC_SUPPORT,
    ].includes(item.sector as ADVERTORIALS_SECTOR)
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
    ].includes(item.sector as ADVERTORIALS_SECTOR)
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

const coursesButtonMap: Record<string, PublicationType[]> = {
  All: [...convertedCoursesList],
  "English Version": coursesList
    .filter((c) => c.language === LANGUAGE.EN)
    .map((c) => ({
      title: c.title,
      link: c.link,
      mediaType: MEDIA_TYPE.VIDEO,
      category: c.category,
    })),
  "Cantonese Version": coursesList
    .filter((c) => c.language === LANGUAGE.CH)
    .map((c) => ({
      title: c.title,
      link: c.link,
      mediaType: MEDIA_TYPE.VIDEO,
      category: c.category,
    })),
};

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
  const { isPC } = useSettings();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Reports filter buttons inside the Accordion
  const [activeReport, setActiveReport] = useState(0);
  // Publication filter buttons inside the Accordion
  const [activePublication, setActivePublication] = useState(0);
  // Advertorials filter button inside the Accordion
  const [activeAboutSector, setActiveAboutSector] = useState<number>(0);
  const [activeCertificateSector, setActiveCertificateSector] =
    useState<number>(-1);
  const [activeCoursesCategory, setActiveCoursesCategory] = useState(
    Object.keys(coursesButtonMap)[0]
  );

  // layout display
  const [layoutButton, setLayoutButton] = useState<number>(0);

  // filter conditions display on the left side
  const [selectedMediaType, setSelectedMediaType] = useState("All");
  const [needRangeValue, setNeedRangeValue] = useState(true);
  const [rangeValue, setRangeValue] = useState<number[]>([2009, currentYear]);
  const filterOptions = ["From Latest to Oldest", "From Oldest to Latest"];
  const [selectedItem, setSelectedItem] = useState<string>(filterOptions[0]);
  const defaultFilterCondition = {
    mediaType: "All",
    rangeValue: [2009, currentYear],
    needRangeValue,
    selectedItem: selectedItem,
  };

  const [filterCondition, setFilterCondition] = useState(
    defaultFilterCondition
  );

  const advertorialsFilterList = [
    ...(activeAboutSector >= 0
      ? aboutTestingSector[Object.keys(aboutTestingSector)[activeAboutSector]]
      : []),
    ...(activeCertificateSector >= 0
      ? certificateSector[
          Object.keys(certificateSector)[activeCertificateSector]
        ]
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
    setSelectedMediaType("All");
    setRangeValue([2009, currentYear]);
    setNeedRangeValue(true);
    setSelectedItem(filterOptions[0]);
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
    }
  > = {
    [CategoryLabel.REPORTS]: {
      enum: CATEGORIES.REPORTS,
      categoryArray: reportsList[filterReportsButtons[activeReport]].filter(
        (item) => item.category.includes(CATEGORIES.REPORTS)
      ),
      subComponent: (
        <NormalAccordion
          title="Reports"
          details={
            <div className="flex flex-wrap gap-[8px]">
              {filterReportsButtons.map((name, index) => {
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
    [CategoryLabel.NEWSLETTER]: {
      enum: CATEGORIES.NEWSLETTER,
      categoryArray: resourcesList.filter((item) =>
        item.category.includes(CATEGORIES.NEWSLETTER)
      ),
    },
    [CategoryLabel.PUBLICATIONS]: {
      enum: CATEGORIES.PUBLICATIONS,
      categoryArray:
        publicationList[filterPublicationButtons[activePublication]],
      subComponent: (
        <NormalAccordion
          title="Publications"
          details={
            <div className="flex flex-wrap gap-[8px]">
              {filterPublicationButtons.map((name, index: number) => {
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
                    <p className="text-highlight-xs">{name}</p>
                  </button>
                );
              })}
            </div>
          }
        />
      ),
    },
    [CategoryLabel.COURSES]: {
      enum: CATEGORIES.COURSES,
      categoryArray: coursesButtonMap[activeCoursesCategory],
      subComponent: (
        <NormalAccordion
          title="Courses"
          details={
            <div className="flex flex-row gap-[8px]">
              {Object.keys(coursesButtonMap).map((name, index) => {
                const isActivated = activeCoursesCategory === name;
                return (
                  <button
                    key={index}
                    style={
                      isActivated ? activatedButtonStyle : normalButtonStyle
                    }
                    onClick={() => {
                      setActiveCoursesCategory(name);
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
    [CategoryLabel.ADVERTORIALS]: {
      enum: CATEGORIES.ADVERTORIALS,
      categoryArray: advertorialsFilterList,
      subComponent: (
        <div className="flex flex-col gap-[24px]">
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
    filterCondition.selectedItem === filterOptions[0]
      ? sortByDateDescending
      : sortByDateAscending
  )(
    (activeCategoryList?.categoryArray ?? []).filter((cat) => {
      // Media Type filter
      const mediaTypeFilter =
        filterCondition.mediaType === "All"
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
        <p className="text-heading-l w-full">Filter</p>
        <div
          onClick={handleClearFilter}
          className="w-[50%] flex flex-row-reverse "
        >
          <Link>Clear Filters</Link>
        </div>
      </div>
      <div className="bg-[#EEEEEA] mt-[16px] pt-[22px] px-[24px]">
        <p className="text-highlight-l mb-[16px]">Media type</p>

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
                Year
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
              Year: {rangeValue[0]}-{rangeValue[1]}
            </p>

            <div className="w-full">
              <Menu as="div" className="relative inline-block text-left w-full">
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex w-full justify-between items-center border border-gray-300 p-[16px] bg-white text-body-m text-gray-700">
                      {selectedItem}
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
                        {filterOptions.map((item, index) => (
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
                                {item}
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
          Apply
        </Button>
      </div>
    </>
  );

  const categoriesBox = (
    <>
      <p className={`text-heading-l mt-[${isPC ? 32 : 0}px] mb-[16px]`}>
        Categories
      </p>
      <div className="flex flex-col gap-[16px] mb-[32px]">
        {Object.keys(categories).map((cat, index) => {
          const { enum: catEnum, categoryArray = [] } = categories[cat];
          const isActivated = catEnum === selectedCategory;
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
              <p className="text-heading-l">{cat}</p>
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
        <SquareTitle title="Resources" />
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
