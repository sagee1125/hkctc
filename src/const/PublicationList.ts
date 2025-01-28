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

// Reports
export const hktctReportsList: PublicationType[] = [
  {
    title: "HKCTC Report 2023-24",
    date: "31 Jul 2023",
    link: "/en/doc/HKCTCAnnualReport_2023-24.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [23, 24], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "Report Highlights 23-24",
    date: "1 Jul 2023",
    link: "/videos/en/hkctc_report_2023-24_highlights_en.mp4",
    mediaType: MEDIA_TYPE.VIDEO,
    yearRange: [23, 24], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 22-23",
    date: "27 Jun 2023",
    link: "/en/doc/HKCTCAnnualReport_2022-23.pdf",
    mediaType: MEDIA_TYPE.VIDEO,
    yearRange: [22, 23], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "Report Highlights 22-23",
    date: "27 Jun 2023",
    link: "/videos/en/hkctc_report_2022-23_highlights.mp4",
    mediaType: MEDIA_TYPE.VIDEO,
    yearRange: [22, 23], // start, end
    category: [CATEGORIES.REPORTS],
  },

  {
    title: "HKCTC Report 21-22",
    date: "",
    link: "/en/doc/HKCTCAnnualReport_2021-22_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [21, 22], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 20-21",
    date: "",
    link: "/en/doc/HKCTCAnnualReport_2020-21_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [20, 21],
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 19-20",
    date: "",
    link: "/en/doc/HKCTCAnnualReport_2019-20_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [19, 20], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 18-19",
    date: "",
    link: "/en/doc/HKCTCAnnualReport_2018-19_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [18, 19], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 17-18",
    date: "",
    link: "/en/doc/HKCTCAnnualReport_2017-18_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [17, 18], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 16-17",
    date: "",
    link: "/en/doc/HKCTCAnnualReport_2016-17_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [16, 17], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 15-16",
    date: "",
    link: "en/doc/HKCTCAnnualReport_2015-16_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [15, 16], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 14-15",
    date: "",
    link: "/en/doc/HKCTCAnnualReport_2014-15_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [14, 15], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 13-14",
    date: "",
    link: "/en/doc/HKCTCAnnualReport_2013-14_Eng_F.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [13, 14], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "Report Review 13-14",
    date: "",
    link: "/en/doc/HKCTC_Report_Eng(2013)LR.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [13, 14], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 11-12",
    date: "",
    link: "/en/doc/HKCTC_annual_report_2011-12_e_final2.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [11, 12], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report 10-11",
    date: "",
    link: "/en/doc/HKCTC_Report_2010-11_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [10, 11], // start, end
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "HKCTC Report",
    date: "",
    link: "/en/doc/HKCTC_Report_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [10, 11], // start, end
    category: [CATEGORIES.REPORTS],
  },
];

export const legislativeCouncilList = [
  {
    title: "Latest Development of the T&C Industry 2023",
    date: "",
    link: "/en/doc/ci20230620cb1-661-3-e.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [23, 23],
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "Latest Development of the T&C Industry 2021",
    date: "",
    link: "/en/doc/CIPanel_20210219_Paper_Eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [21, 21],
    category: [CATEGORIES.REPORTS],
  },

  {
    title: "Latest Development of the T&C Industry 2018",
    date: "",
    link: "/en/doc/AdministrationPaper_ci20180227cb1-604-3-e.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [18, 18],
    category: [CATEGORIES.REPORTS],
  },
  {
    title: "Latest Development of the T&C Industry 2015",
    date: "/en/doc/ci20151117cb1-148-3-e.pdf",
    link: "",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [15, 15],
    category: [CATEGORIES.REPORTS],
  },
  {
    title:
      "Measures to Regularise and Facilitate the Operation of Testing Laboratories in Industrial Buildings",
    date: "",
    link: "/en/doc/itc-hkctc-17-7-1c-e.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [15, 15],
    category: [CATEGORIES.REPORTS],
  },
];
