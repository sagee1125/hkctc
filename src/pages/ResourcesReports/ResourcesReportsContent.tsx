import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Radio, RadioGroup, Menu, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Slider, Box } from "@mui/material";
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
} from "../../components";
import {
  CATEGORIES,
  CategoryLabel,
  hktctReportsList,
  legislativeCouncilList,
  hkctcNewsletterList,
  advertorialsList,
  type PublicationType,
  MEDIA_TYPE,
} from "../../const";

const mediaTypeMapping: Partial<Record<MEDIA_TYPE, string>> = {
  [MEDIA_TYPE.PDF]: "PDF",
  [MEDIA_TYPE.VIDEO]: "Video",
};
const currentYear = new Date().getFullYear(); // get current year

const resourcesList: PublicationType[] = [
  ...hktctReportsList,
  ...legislativeCouncilList,
  ...hkctcNewsletterList,
  ...advertorialsList,
];

const itemsPerPage = 9;
export const ResourcesReportsContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<number>(0);

  // Reports filter buttons inside the Accordion
  const [activeReport, setActiveReport] = useState(0);
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

  // Publication filter buttons inside the Accordion
  const filterPublicationButtons = [
    "All",
    "Pamphlets",
    "Booklets",
    "Comics",
    "Corruption Prevention Guide",
    "Other Useful Information",
  ];
  const publicationList: Record<string, PublicationType[]> = {
    All: [],
    Pamphlets: [],
    Booklets: [],
    Comics: [],
    "Corruption Prevention Guide": [],
    "Other Useful Information": [],
  };

  // layout display
  const [layoutButton, setLayoutButton] = useState<number>(0);

  // filter conditions display on the left side
  const [selectedMediaType, setSelectedMediaType] = useState(MEDIA_TYPE.PDF);
  const [rangeValue, setRangeValue] = useState<number[]>([2009, currentYear]);
  const [selectedItem, setSelectedItem] = useState<string>(
    "From latest to oldest"
  );
  const [filterCondition, setFilterCondition] = useState({
    mediaType: MEDIA_TYPE.PDF,
    rangeValue: [2009, currentYear],
    selectedItem: selectedItem,
  });

  const handleApplyFilter = () => {
    setFilterCondition({
      mediaType: selectedMediaType,
      rangeValue: rangeValue,
      selectedItem: selectedItem,
    });
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

  const handleChangeCategory = (item: string) => {
    setSelectedCategory(item as CATEGORIES);
    navigate(`?section=${item}`);
    setCurrentPage(0);
  };

  const items = ["Option 1", "Option 2", "Option 3"];
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
            <div className="flex flex-row gap-[8px]">
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
      categoryArray: resourcesList.filter((item) =>
        item.category.includes(CATEGORIES.PUBLICATIONS)
      ),
      subComponent: <></>,
    },
    [CategoryLabel.COURSES]: {
      enum: CATEGORIES.COURSES,
      categoryArray: resourcesList.filter((item) =>
        item.category.includes(CATEGORIES.COURSES)
      ),
      subComponent: <></>,
    },
    [CategoryLabel.ADVERTORIALS]: {
      enum: CATEGORIES.ADVERTORIALS,
      categoryArray: resourcesList.filter((item) =>
        item.category.includes(CATEGORIES.ADVERTORIALS)
      ),
      subComponent: <></>,
    },
  };

  const activeCategoryList =
    Object.values(categories).filter(
      (item) => item.enum === selectedCategory
    )?.[0] ?? {};
  const displayList = (activeCategoryList?.categoryArray ?? []).filter(
    (cat) =>
      cat.mediaType === filterCondition.mediaType &&
      cat.yearRange &&
      cat.yearRange[0] <= filterCondition.rangeValue[1] &&
      cat.yearRange[1] >= filterCondition.rangeValue[0]
  );

  const subComponent = activeCategoryList?.subComponent;

  console.log(
    displayList,
    Object.values(categories).filter((item) => item.enum === selectedCategory)
  );

  const { currentPageData, startIndex, endIndex } = handleGetPaginatorProp(
    currentPage,
    itemsPerPage,
    displayList
  );

  return (
    <div className="w-full px-[24px] mt-[48px] grid grid-cols-[2fr,1fr] gap-[24px]">
      <div className="flex flex-col gap-[24px]">
        <SquareTitle title="Resources" />
        {subComponent && <div>{subComponent}</div>}
        <div className="flex flex-row justify-between items-center">
          <div className="text-body-s">
            Showing <b className="text-button-s">{currentPageData.length}</b>{" "}
            results for{" "}
            <b className="text-button-s">{selectedCategory.toLowerCase()}</b>
          </div>
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
        </div>

        <div
          className={
            layoutButton === 0
              ? "flex flex-col gap-[24px]"
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
                className="w-full h-[282px] flex flex-col gap-[14px]"
              >
                <MediaTemplateWithDialog
                  title={title}
                  maskIcon={maskIcon}
                  date={date}
                  mediaLink={link}
                  mediaType={mediaType}
                  direction={layoutButton === 0 ? "full" : "column"}
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
      </div>

      <div>
        <div className="border-2 border-inherit p-[24px]">
          <p className="text-heading-l">Filter</p>
          <div className="bg-[#EEEEEA] mt-[16px] pt-[22px] px-[24px]">
            <p className="text-highlight-l mb-[16px]">Media type</p>

            <RadioGroup
              value={selectedMediaType}
              onChange={setSelectedMediaType}
              aria-label="Media type"
              className="flex flex-col gap-4"
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

            <p className="text-highlight-l mb-[16px] mt-[24px]">Year</p>

            <Box sx={{ width: "100%" }}>
              <Slider
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
                    bgcolor: "#233F55",
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
                }}
              />
            </Box>
            <p className="text-body-m mb-[16px]">
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
                        {items.map((item, index) => (
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

            <Button
              style={{
                lineHeight: 1.5,
                width: "100%",
                color: "#fff",
                backgroundColor: "#233F55",
                margin: "16px 0 22px 0",
                padding: "16px",
                textTransform: "none",
              }}
              onClick={handleApplyFilter}
              variant="contained"
            >
              Apply
            </Button>
          </div>

          <p className="text-heading-l mt-[32px] mb-[16px]">Categories</p>
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
          <hr className="mb-[24px]" />
          <EmailBox />
        </div>
      </div>
    </div>
  );
};
