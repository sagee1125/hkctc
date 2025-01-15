import React, { Fragment, useState } from "react";
import { Icon } from "@iconify/react";
import { Radio, RadioGroup, Menu, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Slider, Box } from "@mui/material";
import {
  normalButtonStyle,
  EmailBox,
  SquareTitle,
  activatedButtonStyle,
} from "../../components";

const reportsButtons = ["All", "HKCTC Reports", "Legislative Council Papers"];
const mediaType = ["PDF", "Video"];
const currentYear = new Date().getFullYear(); // 获取当前年份

export const ResourcesReportsContent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const [layoutButton, setLayoutButton] = useState<number>(0);
  const [selectedMediaType, setSelectedMediaType] = useState(mediaType[0]);
  const [rangeValue, setRangeValue] = useState<number[]>([currentYear, 2009]);
  const [selectedItem, setSelectedItem] = useState<string>(
    "From latest to oldest"
  );

  const [selectedCategory, setSelectedCategory] = useState<number>(0);
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

  const categories: Array<{ label: string; totalNumber: number }> = [
    { label: "Reports", totalNumber: 22 },
    { label: "Newsletter", totalNumber: 26 },
    { label: "Publications", totalNumber: 14 },
    { label: "Courses", totalNumber: 32 },
    { label: "Advertorials", totalNumber: 68 },
  ];
  const resourcesReportsList: Array<{
    title: string;
    year: string;
    description: string;
    date: string;
    maskIcon: string;
    imgUrl: string;
  }> = [
    {
      title: "HKCTC Report",
      year: "2023-24",
      description:
        "Hong Kong's sound legal system, low tax rate and simple tax system, good law and order, and good language skills in general help foreign...",
      date: "31 Jul 2023",
      maskIcon: "PDF.png",
      imgUrl: "2023-24.png",
    },
    {
      title: "Report Highlights",
      year: "2023-24",
      description: "",
      date: "1 Jul 2023",
      maskIcon: "VIDEO.png",
      imgUrl: "2023-24-2.png",
    },
    {
      title: "HKCTC Report",
      year: "2022-23",
      description:
        "Hong Kong's sound legal system, low tax rate and simple tax system, good law and order, and good language skills in general help foreign...",
      date: "31 Jul 2023",
      maskIcon: "PDF.png",
      imgUrl: "2022-23.png",
    },
    {
      title: "Report Highlights",
      year: "2022-23",
      description:
        "Hong Kong's sound legal system, low tax rate and simple tax system, good law and order, and good language skills in general help foreign...",
      date: "31 Jul 2023",
      maskIcon: "PDF.png",
      imgUrl: "2022-23-2.png",
    },
    {
      title: "HKCTC Report",
      year: "2021-22",
      description:
        "Hong Kong's sound legal system, low tax rate and simple tax system, good law and order, and good language skills in general help foreign...",
      date: "31 Jul 2023",
      maskIcon: "PDF.png",
      imgUrl: "2022-23-2.png",
    },
  ];
  return (
    <div className="w-full px-[24px] mt-[48px] grid grid-cols-[2fr,1fr] gap-[24px]">
      <div>
        <SquareTitle title="Resources" />

        <div className="flex flex-row gap-[8px] items-center mt-[28px] mb-[10px]">
          <p className="text-highlight-m">Reports</p>
          <img
            className="w-[12px] h-[12px]"
            src={`${process.env.PUBLIC_URL}/assets/icons/arrow_up.svg`}
            alt={"arrow_up"}
          />
        </div>
        <div className="flex flex-wrap gap-[8px]">
          {reportsButtons.map((btn, index) => {
            const isActivated = index === activeButton;
            return (
              <button
                key={index}
                className="p-2 transition-all duration-800 ease-in-out"
                style={isActivated ? activatedButtonStyle : normalButtonStyle}
                onClick={() => {
                  setActiveButton(index);
                }}
              >
                <p className="px-[12px] text-highlight-xs">{btn}</p>
              </button>
            );
          })}
        </div>
        <div className="flex flex-row justify-between mt-[16px] items-center">
          <div className="text-body-s">
            Showing <b className="text-button-s">21</b> results for{" "}
            <b className="text-button-s">Reports</b>
          </div>
          <div className="border-[1px] border-[#E0E0E0] flex flex-row p-[4px]">
            {" "}
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

        {layoutButton === 0 ? (
          <div className="flex flex-col w-full gap-[36px] mt-[24px] mb-[48px]">
            {resourcesReportsList.map((item, index) => {
              const { imgUrl, maskIcon, title, year, description, date } = item;
              return (
                <div
                  key={index}
                  className="w-full border-[1px] border-[#E0E0E0] h-[278px] grid grid-cols-2 gap-[24px]"
                >
                  <div className="flex-shrink-0 relative w-full h-[278px]">
                    <img
                      className="border-2 border-inherit w-full h-full object-cover"
                      src={`${process.env.PUBLIC_URL}/assets/resourcesReports/${imgUrl}`}
                      alt={imgUrl}
                    />
                    {/* Icon */}
                    <img
                      className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
                      src={`${process.env.PUBLIC_URL}/assets/icons/${maskIcon}`}
                      alt="PDF Icon"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-heading-m">{title}</p>
                    <p className="text-heading-m">{year}</p>
                    {description && (
                      <p className="text-body-m mt-[16px] mb-[8px]">
                        {description}
                      </p>
                    )}
                    <div className="flex flex-row gap-[8px] mt-[8px] items-center">
                      <img
                        className="w-[16px] h-[16px]"
                        src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                        alt={"calendar"}
                      />
                      <p className="text-body-s text-grey">{date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full grid grid-cols-3 gap-x-[24px] gap-y-[36px]">
            {resourcesReportsList.map((item, index) => {
              const { imgUrl, maskIcon, title, year, date } = item;
              return (
                <div
                  key={index}
                  className="w-full h-[282px] flex flex-col gap-[14px] mt-[24px] mb-[48px]"
                >
                  <div className="flex-shrink-0 relative w-full h-[190px]">
                    <img
                      className="border-2 border-inherit w-full h-full object-cover"
                      src={`${process.env.PUBLIC_URL}/assets/resourcesReports/${imgUrl}`}
                      alt={imgUrl}
                    />
                    {/* Icon */}
                    <img
                      className="absolute bottom-[10px] right-[6px] w-[32px] h-[32px]"
                      src={`${process.env.PUBLIC_URL}/assets/icons/${maskIcon}`}
                      alt="PDF Icon"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-highlight-l">{title}</p>
                    <p className="text-highlight-l">{year}</p>
                    <div className="flex flex-row gap-[8px] mt-[8px] items-center">
                      <img
                        className="w-[16px] h-[16px]"
                        src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                        alt={"calendar"}
                      />
                      <p className="text-body-s text-grey">{date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* pagination  */}
        <div className="flex justify-center flex-row items-center py-[48px] gap-[9px]">
          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-highlight-l h-[48px] w-[48px]">
            <Icon icon="fluent:arrow-left-12-filled" />
          </button>
          <button
            style={activatedButtonStyle}
            className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-highlight-l h-[48px] w-[48px]"
          >
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-highlight-l h-[48px] w-[48px]">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-highlight-l h-[48px] w-[48px]">
            3
          </button>
          <span className="px-4 py-2 text-gray-600">...</span>
          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-highlight-l h-[48px] w-[48px]">
            <Icon icon="fluent:arrow-right-12-filled" />
          </button>
        </div>
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
              {mediaType.map((type, index) => (
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
                  <p className="text-body-m">{type}</p>
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

            <button
              className="w-full text-white p-[16px] mt-[16px] mb-[22px] bg-newPrimary"
              style={{
                lineHeight: 1.5,
              }}
            >
              Apply
            </button>
          </div>

          <p className="text-heading-l mt-[32px] mb-[16px]">Categories</p>
          <div className="flex flex-col gap-[16px] mb-[32px]">
            {categories.map((cat, index) => {
              const { label, totalNumber } = cat;
              const isActivated = index === selectedCategory;
              return (
                <div
                  key={index}
                  className="flex flex-row justify-between w-full h-[77px] items-center px-[20px] transition-all duration-800 ease-in-out"
                  style={{
                    backgroundColor: isActivated ? "#233F55" : "#EAEAE5",
                    color: !isActivated ? "#242A31" : "#EAEAE5",
                  }}
                  onClick={() => {
                    setSelectedCategory(index);
                  }}
                >
                  <p className="text-heading-l">{label}</p>
                  <p className="text-highlight-l">{"(" + totalNumber + ")"}</p>
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
