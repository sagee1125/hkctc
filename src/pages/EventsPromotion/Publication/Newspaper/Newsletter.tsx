import React from "react";
import { SquareTitle } from "../../../../components";

export const Newsletter: React.FC = () => {
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
    <div>
      <SquareTitle title="HKCTC Newsletter" />

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
    </div>
  );
};
