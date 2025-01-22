export enum MEDIA_TYPE {
  PDF = "PDF",
  VIDEO = "VIDEO",
}

export enum CATEGORIES {
  REPORTS = "REPORTS",
  NEWSLETTER = "NEWSLETTER",
  PUBLICATIONS = "PUBLICATIONS",
  COURSES = "COURSES",
  ADVERTORIALS = "ADVERTORIALS",
}

type PublicationType = {
  title: string;
  date: string;
  link: string;
  mediaType: MEDIA_TYPE;
  yearRange: number[];
  category: CATEGORIES[];
};

export const hktctReportsList: PublicationType[] = [
  {
    title: "HKCTC Report 2023-24",
    date: "31 Jul 2023",
    link: "HKCTCAnnualReport_2023-24.pdf",
    mediaType: MEDIA_TYPE.VIDEO,
    yearRange: [23, 24], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "Report Highlights 23-24",
    date: "1 Jul 2023",
    link: "https://www.hkctc.gov.hk/videos/en/hkctc_report_2023-24_highlights_en.mp4",
    mediaType: MEDIA_TYPE.VIDEO,
    yearRange: [23, 24], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 22-23",
    date: "27 Jun 2023",
    link: "https://www.hkctc.gov.hk/videos/en/hkctc_report_2023-24_highlights_en.mp4",
    mediaType: MEDIA_TYPE.VIDEO,
    yearRange: [22, 23], // start, end
    category: [CATEGORIES.REPORTS],
  },
];

export const legislativeCouncilList = [];
