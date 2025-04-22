import React from "react";
import { SquareTitle, Link } from "../../../../components";
import { useSettings } from "../../../../context";
import { formatDateToChinese } from "../Advertorials";

export const PressReleases: React.FC = () => {
  const { getSingleText } = useSettings();

  const publicationsInfo = [
    {
      title:
        "Appointments to Hong Kong Council for Testing and Certification announced",
      titleCN: "政府公布香港檢測和認證局成員任命",
      link: "https://www.info.gov.hk/gia/general/202312/29/P2023122900309.htm",
      tcLink:
        "https://www.info.gov.hk/gia/general/202312/29/P2023122900307.htm?fontSize=1",
      scLink:
        "https://sc.isd.gov.hk/TuniS//www.info.gov.hk/gia/general/202312/29/P2023122900307.htm?fontSize=1",
      date: "29 Dec 2023",
    },
    {
      titleCN: "「2023-24年度檢測認證人力發展嘉許計劃」公布得獎結果",
      title:
        "Testing and Certification Manpower Development Award Scheme 2023-24 announces award results",
      link: "https://www.info.gov.hk/gia/general/202312/04/P2023120400310.htm",
      tcLink:
        "https://www.info.gov.hk/gia/general/202312/29/P2023122900307.htm?fontSize=1",
      scLink:
        "https://sc.isd.gov.hk/TuniS//www.info.gov.hk/gia/general/202312/29/P2023122900307.htm?fontSize=1",
      date: "4 Dec 2023",
    },
    {
      titleCN: "「2023-24年度檢測認證人力發展嘉許計劃」現接受申請",

      title:
        "Testing and Certification Manpower Development Award Scheme 2023-24 opens for applications",
      link: "https://www.info.gov.hk/gia/general/202305/02/P2023042700373.htm",
      tcLink:
        "https://www.info.gov.hk/gia/general/202305/02/P2023042700370.htm",
      scLink:
        "https://sc.isd.gov.hk/TuniS/www.info.gov.hk/gia/general/202305/02/P2023042700370.htm",
      date: "2 May 2023",
    },
    {
      titleCN: "政府公布香港檢測和認證局成員任命",
      title:
        "Appointments to Hong Kong Council for Testing and Certification announced",
      link: "https://www.info.gov.hk/gia/general/202112/28/P2021122800493.htm",
      tcLink:
        "https://www.info.gov.hk/gia/general/202112/28/P2021122800492.htm",
      scLink:
        "hhttps://sc.isd.gov.hk/TuniS/www.info.gov.hk/gia/general/202112/28/P2021122800492.htm",
      date: "28 Dec 2021",
    },
    {
      titleCN: "「2021-22年度檢測認證人力發展嘉許計劃」公佈得獎結果",
      title:
        "Testing and Certification Manpower Development Award Scheme 2021-22 announces award results",
      link: "https://www.info.gov.hk/gia/general/202112/22/P2021122200211.htm",
      tcLink:
        "https://www.info.gov.hk/gia/general/202112/22/P2021122200209.htm",
      scLink:
        "https://sc.isd.gov.hk/TuniS/www.info.gov.hk/gia/general/202112/22/P2021122200209.htm",
      date: "22 Dec 2021",
    },
    {
      titleCN: "政府公布香港檢測和認證局成員任命",
      title:
        "Appointments to Hong Kong Council for Testing and Certification announced",
      link: "https://www.info.gov.hk/gia/general/201912/20/P2019122000275.htm",
      tcLink:
        "https://www.info.gov.hk/gia/general/201912/20/P2019122000269.htm",
      scLink:
        "https://sc.isd.gov.hk/TuniS/www.info.gov.hk/gia/general/201912/20/P2019122000269.htm",
      date: "20 Dec 2019",
    },
    {
      titleCN: "政府公布香港檢測和認證局成員任命",
      title: "Appointments to Hong Kong Council for Testing and Certification",
      link: "https://www.info.gov.hk/gia/general/201712/20/P2017122000348.htm",
      tcLink:
        "https://www.info.gov.hk/gia/general/201712/20/P2017122000343.htm",
      scLink:
        "https://sc.isd.gov.hk/TuniS/www.info.gov.hk/gia/general/201712/20/P2017122000343.htm?fontSize=1",
      date: "20 Dec 2017",
    },
    {
      titleCN: "《服務貿易協議》有關檢測和認證的新措施實施詳情",
      title:
        "Implementation details of new measure under CEPA Agreement on Trade in Services on testing and certification announced",
      link: "https://www.info.gov.hk/gia/general/201709/21/P2017092100377.htm",
      tcLink:
        "https://www.info.gov.hk/gia/general/201709/21/P2017092100371.htm",
      scLink:
        "https://sc.isd.gov.hk/TuniS/www.info.gov.hk/gia/general/201709/21/P2017092100371.htm?fontSize=1",
      date: "21 Sep 2017",
    },
    {
      titleCN: "政府公布協助測試實驗所於工業大廈營運的措施實施安排",

      title:
        "Government announces implementation arrangements for measure to facilitate operation of testing laboratories in industrial buildings",
      link: "https://www.info.gov.hk/gia/general/201601/25/P201601250593.htm",
      tcLink: "https://www.info.gov.hk/gia/general/201601/25/P201601250596.htm",
      scLink:
        " https://sc.isd.gov.hk/gb/www.info.gov.hk/gia/general/201601/25/P201601250596.htm",
      date: "21 Jan 2016",
    },
  ];

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title={getSingleText("Press Releases", "新聞公報")} />
      {publicationsInfo.map((item, i) => {
        const { title, titleCN, link, date } = item;
        return (
          <div key={i} className="flex flex-col">
            <div className="text-heading-m underline-offset-4 mb-[16px]">
              <Link outerLink={link} linkColor="#203136">
                {getSingleText(title, titleCN)}
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <img
                className="w-[16px] h-[16px] mr-[8px]"
                src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                alt={date}
              />
              <span>{getSingleText(date, formatDateToChinese(date))}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
