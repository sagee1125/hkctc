import React from "react";
import {
  InternalBackButton,
  MediaTemplateWithDialog,
  type ProxyDomain,
  SquareTitle,
} from "../../../../components";
import { MEDIA_TYPE, navItemEnum } from "../../../../const";
import { Language, useSettings } from "../../../../context";

const mediaCoverageList = [
  {
    title: "檢測認證 衣食住行 專業把關",
    date: "15 Mar 2024",
    link: "https://www.recruit.com.hk/article/%E6%AA%A2%E6%B8%AC%E8%AA%8D%E8%AD%89-%E8%A1%A3%E9%A3%9F%E4%BD%8F%E8%A1%8C-%E5%B0%88%E6%A5%AD%E6%8A%8A%E9%97%9C/44038",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
  {
    title: "檢測認證人力發展嘉許計劃 冀青年加入 促業界發展’",
    date: "16 Dec 2023",
    link: "/resfile/PDF/20231216/PDF/b6_screen.pdf",
    mediaType: MEDIA_TYPE.PDF,
    mediaDomain: "takungpao",
  },

  {
    title: "檢測認證人力發展嘉許計劃頒獎典禮圓滿結束",
    date: "8 Dec 2023",
    link: "/resfile/PDF/20231216/PDF/b6_screen.pdf",
    mediaType: MEDIA_TYPE.PDF,
    mediaDomain: "takungpao",
  },
  {
    title: "「2023-24年度檢測認證人力發展嘉許計劃」頒獎",
    date: "8 Dec 2023",
    link: "https://www.hkcd.com.hk/hkcdweb/content/2023/12/08/content_8613613.html",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
  {
    title:
      "2023-24年度檢測認證人力發展嘉許計劃 鼓勵機構投入人才培育 表揚從業員力臻專業發展",
    date: "8 Dec 2023",
    link: "/en/doc/20231208-HKET-ceremony_tcmpaward_2023-24.pdf",
    mediaType: MEDIA_TYPE.PDF,
    mediaDomain: "hkctc",
  },
  {
    title: "「2023-24年度檢測認證人力發展嘉許計劃」頒獎典禮",
    date: "8 Dec 2023",
    link: "https://today.line.me/hk/v2/article/wJGjVrw",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
  {
    title: "2023-24年度檢測認證人力發展嘉許計劃舉行頒獎禮",
    date: "7 Dec 2023",
    link: "https://www.wenweipo.com/a/202312/07/AP6571b0e3e4b0fdf828a9488c.html",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
  {
    title: "「2023-24年度檢測認證人力發展嘉許計劃」頒獎典禮圓滿結束",
    date: "7 Dec 2023",
    link: "https://portal.sina.com.hk/lifestyle/v1paper/2023/12/07/660315/%e3%80%8c2023-24%e5%b9%b4%e5%ba%a6%e6%aa%a2%e6%b8%ac%e8%aa%8d%e8%ad%89%e4%ba%ba%e5%8a%9b%e7%99%bc%e5%b1%95%e5%98%89%e8%a8%b1%e8%a8%88%e5%8a%83%e3%80%8d%e9%a0%92%e7%8d%8e%e5%85%b8%e7%a6%ae%e5%9c%93/",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
  {
    title: "「2023-24年度檢測認證人力發展嘉許計劃」頒獎典禮圓滿結束",
    date: "7 Dec 2023",
    link: "https://v1paper.com/archives/35989",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
  {
    title:
      "香港檢測和認證局主辦、創新科技署全力支持 「2023-24年度檢測認證人力發展嘉許計劃」頒...",
    date: "6 Dec 2023",
    link: "https://www.headline4hk.com/article/20231206/am730/415867/",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
  {
    title: "HKCTC年度檢測認證人力發展嘉許計劃舉頒獎禮 19位檢測認證從業員獲表揚",
    date: "6 Dec 2023",
    link: "https://www.am730.com.hk/%E6%9C%AC%E5%9C%B0/hkctc%E5%B9%B4%E5%BA%A6%E6%AA%A2%E6%B8%AC%E8%AA%8D%E8%AD%89%E4%BA%BA%E5%8A%9B%E7%99%BC%E5%B1%95%E5%98%89%E8%A8%B1%E8%A8%88%E5%8A%83%E8%88%89%E9%A0%92%E7%8D%8E%E7%A6%AE-19%E4%BD%8D%E6%AA%A2%E6%B8%AC%E8%AA%8D%E8%AD%89%E5%BE%9E%E6%A5%AD%E5%93%A1%E7%8D%B2%E8%A1%A8%E6%8F%9A/415867",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },

  {
    title: "檢測認證人力發展嘉許計劃頒獎禮 孫東冀得獎者為國家科創發展貢獻力量",
    date: "6 Dec 2023",
    link: "https://www.dotdotnews.com/a/202312/06/AP65704b23e4b05139963b9a68.html",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
  {
    title: "香港2023-24年度檢測認證人力發展嘉許計畫結果公佈",
    date: "4 Dec 2023",
    link: "https://www.tongmedia.com.hk/TcmNews/News202312050928550000000655/CNA001.html",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
  {
    title: "「2023-24年度檢測認證人力發展嘉許計劃」公布得獎結果",
    date: "4 Dec 2023",
    link: "https://portal.sina.com.hk/finance/gia-info-gov-hk/2023/12/04/655455/%e3%80%8c2023-24%e5%b9%b4%e5%ba%a6%e6%aa%a2%e6%b8%ac%e8%aa%8d%e8%ad%89%e4%ba%ba%e5%8a%9b%e7%99%bc%e5%b1%95%e5%98%89%e8%a8%b1%e8%a8%88%e5%8a%83%e3%80%8d%e5%85%ac%e5%b8%83%e5%be%97%e7%8d%8e%e7%b5%90/",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
  {
    title: "香港2023-24年度檢測認證人力發展嘉許計劃结果公布",
    date: "4 Dec 2023",
    link: "https://www.hkcna.hk/docDetail.jsp?id=100538552&channel=4372",
    mediaType: MEDIA_TYPE.NEW_PAGE,
  },
];
const multilingual = {
  en: {
    media_coverage: "Media Coverage",
  },
  cn: {
    media_coverage: "媒體報道",
  },
};
export const MediaCoverage2324: React.FC = () => {
  const { isPC, language } = useSettings();
  const isEn = language === Language.EN;
  const page_text = isEn ? multilingual.en : multilingual.cn;
  const { media_coverage } = page_text;
  return (
    <div className="w-full">
      <SquareTitle title={media_coverage} />
      <div
        className={`w-full mt-[24px] grid ${
          isPC
            ? "grid-cols-3 gap-x-[24px] gap-y-[36px]"
            : "grid-cols-1 gap-[24px]"
        }`}
      >
        {mediaCoverageList.map((item, index) => {
          const { title, date, mediaType, link, mediaDomain } = item;
          const isPDF = mediaType === MEDIA_TYPE.PDF;
          const maskIcon = isPDF ? "PDF.png" : "PRESS.png";
          return (
            <div
              key={index}
              className={`w-full ${
                isPC ? "h-[290px]" : "h-auto"
              } flex flex-col gap-[14px]`}
            >
              <MediaTemplateWithDialog
                title={title.length > 53 ? title.slice(0, 53) + "..." : title}
                maskIcon={maskIcon}
                date={date as string}
                mediaDomain={mediaDomain as ProxyDomain}
                imagePath={undefined}
                mediaLink={link}
                mediaType={mediaType}
              />
            </div>
          );
        })}
      </div>
      <hr className="my-[24px]" />
      <InternalBackButton
        targetUrl={`/events-promotion?section=${navItemEnum.award_scheme}`}
      />
    </div>
  );
};
