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

export const comicsList = [
  {
    title: "第一話 : 講個「信」字？",
    link: "/tc/doc/comic_issue_no_1.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二話：我要 check 清楚",
    link: "/tc/doc/comic_issue_no_2.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第三話：抗菌防臭襪",
    link: "/tc/doc/comic_issue_no_3.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第四話：生日禮物",
    link: "/tc/doc/comic_issue_no_4.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第五話：壓力煲風雲",
    link: "/tc/doc/comic_issue_no_5.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第六話：能源效益測試",
    link: "/tc/doc/comic_issue_no_6.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第七話：神奇縮水毛衣",
    link: "/tc/doc/comic_issue_no_7.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第八話：我很大方",
    link: "/tc/doc/comic_issue_no_8.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第九話：明明都是碟",
    link: "/tc/doc/comic_issue_no_9.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第十話：手機干擾",
    link: "/tc/doc/comic_issue_no_10.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第十一話：愈深愈擋光？",
    link: "/tc/doc/comic_issue_no_11.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第十二話：個磅呃秤？",
    link: "/tc/doc/comic_issue_no_12.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第十三話：另類測試",
    link: "/tc/doc/comic_issue_no_13.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第十四話：有機大計",
    link: "/tc/doc/comic_issue_no_14.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第十五話：紅唇烈焰",
    link: "/tc/doc/comic_issue_no_15.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第十六話：新裝潢新味道",
    link: "/tc/doc/comic_issue_no_16.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第十七話：可愛動物裝",
    link: "/tc/doc/comic_issue_no_17.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第十八話：爸爸忙什麼",
    link: "/tc/doc/comic_issue_no_18.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第十九話：超軟床褥",
    link: "/tc/doc/comic_issue_no_19.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二十話：試造新衫",
    link: "/tc/doc/comic_issue_no_20.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二十一話：返工就打噴嚏？",
    link: "/tc/doc/comic_issue_no_21.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二十二話：自製冰袋",
    link: "/tc/doc/comic_issue_no_22.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二十三話：遙控機械人",
    link: "/tc/doc/comic_issue_no_23.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二十四話：鑽的疑惑",
    link: "/tc/doc/comic_issue_no_24.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二十五話：香味專家",
    link: "/tc/doc/comic_issue_no_25.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二十六話：各有所好",
    link: "/tc/doc/comic_issue_no_26.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二十七話：試食曲奇",
    link: "/tc/doc/comic_issue_no_27.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二十八話：奪命喊聲",
    link: "/tc/doc/comic_issue_no_28.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第二十九話：深宵驚魂",
    link: "/tc/doc/comic_issue_no_29.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title: "第三十話：學生模範",
    link: "/tc/doc/comic_issue_no_30.pdf",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
];
