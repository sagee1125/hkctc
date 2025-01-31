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

export const legislativeCouncilList: PublicationType[] = [
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

export const hkctcNewsletterList: PublicationType[] = [
  {
    title: "No. 12",
    date: "31 Dec 2024",
    link: "/tc/doc/hkctc_newsletter_issue12.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [24, 25],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 11",
    date: "31 May 2024",
    link: "/tc/doc/hkctc_newsletter_issue11.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [23, 23],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 10",
    date: "31 Dec 2023",
    link: "/tc/doc/hkctc_newsletter_issue10.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [23, 23],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 9",
    date: "31 May 2023",
    link: "/tc/doc/hkctc_newsletter_issue9.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [23, 23],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 8",
    date: "31 Aug 2022",
    link: "/tc/doc/hkctc_newsletter_issue8.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [22, 22],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 7",
    date: "31 Jul 2021",
    link: "/tc/doc/hkctc_newsletter_issue7.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [21, 21],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 6",
    date: "31 Dec 2020",
    link: "/tc/doc/hkctc_newsletter_issue6.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [20, 20],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 5",
    date: "31 Jan 2020",
    link: "/tc/doc/hkctc_newsletter_issue5.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [20, 20],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 4",
    date: "31 Jul 2019",
    link: "/tc/doc/hkctc_newsletter_issue4.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [19, 19],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 3",
    date: "31 Oct 2018",
    link: "/tc/doc/hkctc_newsletter_issue3.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [18, 18],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 2",
    date: "31 Dec 2017",
    link: "/tc/doc/hkctc_newsletter_issue2.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [17, 17],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
  {
    title: "No. 1",
    date: "31 Jul 2017",
    link: "/tc/doc/hkctc_newsletter_issue1.pdf",
    mediaType: MEDIA_TYPE.PDF,
    yearRange: [17, 17],
    category: [CATEGORIES.NEWSLETTER, CATEGORIES.PUBLICATIONS],
  },
];

export const pamphletsList = [
  {
    title: "Tested in Hong Kong Certified in Hong Kong",
    img: "p_1.png",
    date: "",
    link: "/en/doc/Tested_in_Hong_Kong_Certified_in_Hong_Kong_en_tc.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "Product Certification - An Upstream Quality Control",
    img: "p_2.png",
    date: "",
    link: "/en/doc/HKCTC_Leaflet_construction_product_certification.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title:
      "Testing and Inspection Services for Buildings and Construction Materials",
    img: "p_3.png",
    date: "",
    link: "/en/doc/HKCTC_Leaflet_Building_inspection.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "What you Need to Know about Medical Testing",
    img: "p_4.png",
    date: "",
    link: "/en/quality/hkas/doc/pamphlets/HKAS_PB004.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "Food Testing and Certification",
    img: "p_5.png",
    date: "",
    link: "/en/doc/Food_Pamphlet_2018.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "Chinese Medicines Testing",
    img: "p_6.png",
    date: "",
    link: "/en/doc/Chinese_Medicines_Pamphlet_2018.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "Testing of Fei Cui and Diamond in Hong Kong",
    img: "p_7.png",
    date: "",
    link: "/en/doc/Testing_of_Fei_Cui_and_Diamond_in_Hong_Kong.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "Diamond Testing Services in Hong Kong",
    img: "p_8.png",
    date: "",
    link: "/en/doc/HKCTC_Diamond_Testing_Services_in_HK.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title:
      "Understanding Information Security Management System (ISMS) Certification",
    img: "p_9.png",
    date: "",
    link: "/en/doc/ISMS_Flyer_Communications_5.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "Greenhouse Gas (GHG) Quantification, Validation and Verification",
    img: "p_9.png", // TODO: not sure using photos or access pdf directly
    date: "",
    link: "/en/doc/2017_ITC_Leaflet_ISO14064.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "ISO 50001 Energy Management System Certification",
    img: "p_9.png",
    date: "",
    link: "/en/doc/2017_ITC_Leaflet_ISO50001.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "Career Development in Testing and Certificate Sector",
    img: "p_9.png",
    date: "",
    link: "/en/doc/pamphlet_a.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
];

export const bookletsList = [
  {
    title: "Electrical and Electronic Products",
    img: "p_1.png",
    date: "",
    link: "/en/doc/EEP_booklet_eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "Textile and Apparel",
    img: "p_1.png",
    date: "",
    link: "/en/doc/textile_booklet_low_res_eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "Toys",
    img: "p_1.png",
    date: "",
    link: "/en/doc/toys_booklet_eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "Food",
    img: "p_1.png",
    date: "",
    link: "/en/doc/food_booklet_eng.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },

  {
    title: "Testing and Certification Create Your Future",
    img: "p_1.png",
    date: "",
    link: "/en/doc/brochure_e.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
];
