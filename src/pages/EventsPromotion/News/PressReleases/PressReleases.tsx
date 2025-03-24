import React from "react";
import { SquareTitle, Link } from "../../../../components";
import { Language, useSettings } from "../../../../context";

export const PressReleases: React.FC = () => {
  const { language } = useSettings();
  const isEN = language === Language.EN;

  const publicationsInfo = [
    {
      title:
        "Appointments to Hong Kong Council for Testing and Certification announced",
      link: "https://www.info.gov.hk/gia/general/202312/29/P2023122900309.htm",
      date: "29 Dec 2023",
    },
    {
      title:
        "Testing and Certification Manpower Development Award Scheme 2023-24 announces award results",
      link: "https://www.info.gov.hk/gia/general/202312/04/P2023120400310.htm",
      date: "4 Dec 2023",
    },
    {
      title:
        "Testing and Certification Manpower Development Award Scheme 2023-24 opens for applications",
      link: "https://www.info.gov.hk/gia/general/202305/02/P2023042700373.htm",
      date: "2 May 2023",
    },
    {
      title:
        "Appointments to Hong Kong Council for Testing and Certification announced",
      link: "https://www.info.gov.hk/gia/general/202112/28/P2021122800493.htm",
      date: "28 Dec 2021",
    },
    {
      title:
        "Testing and Certification Manpower Development Award Scheme 2021-22 announces award results",
      link: "https://www.info.gov.hk/gia/general/202112/22/P2021122200211.htm",
      date: "22 Dec 2021",
    },
    {
      title:
        "Appointments to Hong Kong Council for Testing and Certification announced",
      link: "https://www.info.gov.hk/gia/general/201912/20/P2019122000275.htm",
      date: "20 Dec 2019",
    },
    {
      title: "Appointments to Hong Kong Council for Testing and Certification",
      link: "https://www.info.gov.hk/gia/general/201712/20/P2017122000348.htm",
      date: "20 Dec 2017",
    },
    {
      title:
        "Implementation details of new measure under CEPA Agreement on Trade in Services on testing and certification announced",
      link: "https://www.info.gov.hk/gia/general/201709/21/P2017092100377.htm",
      date: "21 Sep 2017",
    },
    {
      title:
        "Government announces implementation arrangements for measure to facilitate operation of testing laboratories in industrial buildings",
      link: "https://www.info.gov.hk/gia/general/201601/25/P201601250593.htm",
      date: "21 Jan 2016",
    },
  ];

  const publicationsInfo_CN = [
    {
      title: "政府公布香港檢測和認證局成員任命",
      link: "https://www.info.gov.hk/gia/general/202312/29/P2023122900309.htm",
      date: "2023年12月29日",
    },
    {
      title: "「2023-24年度檢測認證人力發展嘉許計劃」公布得獎結果",
      link: "https://www.info.gov.hk/gia/general/202312/04/P2023120400310.htm",
      date: "2023年12月4日",
    },
    {
      title: "「2023-24年度檢測認證人力發展嘉許計劃」現接受申請",
      link: "https://www.info.gov.hk/gia/general/202305/02/P2023042700373.htm",
      date: "2023年5月2日",
    },
    {
      title: "政府公布香港檢測和認證局成員任命",
      link: "https://www.info.gov.hk/gia/general/202112/28/P2021122800493.htm",
      date: "2021年12月28日",
    },
    {
      title: "「2021-22年度檢測認證人力發展嘉許計劃」公佈得獎結果",
      link: "https://www.info.gov.hk/gia/general/202112/22/P2021122200211.htm",
      date: "2021年12月22日",
    },
    {
      title: "政府公布香港檢測和認證局成員任命",
      link: "https://www.info.gov.hk/gia/general/201912/20/P2019122000275.htm",
      date: "2019年12月20日",
    },
    {
      title: "政府公布香港檢測和認證局成員任命",
      link: "https://www.info.gov.hk/gia/general/201712/20/P2017122000348.htm",
      date: "2017年12月20日",
    },
    {
      title: "《服務貿易協議》有關檢測和認證的新措施實施詳情",
      link: "https://www.info.gov.hk/gia/general/201709/21/P2017092100377.htm",
      date: "2017年9月21日",
    },
    {
      title: "政府公布協助測試實驗所於工業大廈營運的措施實施安排",
      link: "https://www.info.gov.hk/gia/general/201601/25/P201601250593.htm",
      date: "2016年1月25日",
    },
  ];

  return (
    <div className="flex flex-col gap-[24px]">
      <SquareTitle title={isEN ? "Press Releases" : "新聞公報"} />
      {(isEN ? publicationsInfo : publicationsInfo_CN).map((item, i) => {
        const { title, link, date } = item;
        return (
          <div key={i} className="flex flex-col">
            <div className="text-heading-m underline-offset-4 mb-[16px]">
              <Link outerLink={link} linkColor="#203136">
                {title}
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <img
                className="w-[16px] h-[16px] mr-[8px]"
                src={`${process.env.PUBLIC_URL}/assets/icons/calendar.svg`}
                alt={date}
              />
              <span>{date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
