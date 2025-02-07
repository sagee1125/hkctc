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

export enum CategoryLabel {
  REPORTS = "Reports",
  NEWSLETTER = "Newsletter",
  PUBLICATIONS = "Publications",
  COURSES = "Courses",
  ADVERTORIALS = "Advertorials",
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
    link: "/en/doc/HKCTCAnnualReport_2015-16_Eng.pdf",
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
    date: "",
    link: "/en/doc/ci20151117cb1-148-3-e.pdf",
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

export const corruptionGuideList = [
  {
    title: "Corruption Prevention Guide for Testing and Certification Industry",
    link: "https://cpas.icac.hk/UPloadImages/InfoFile/cate_43/2016/f0cf22b8-ca79-403e-9682-16b6a2166abe.pdf",
    img: "c_1.png",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
  {
    title:
      "Pamphlet for Frontline Materials Testing Staff (Chinese Version Only)",
    link: "http://www.hkbedc.icac.hk/tc_chi/files/publications/PamphletforFrontlineMaterialsTestingStaff.pdf",
    img: "c_2.png",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
];

export const otherInformationList = [
  {
    title: "Hong Kong: The Facts – Testing and Certification",
    link: "/en/doc/Testing_and_Certification_EN.pdf",
    img: "other_1.png",
    mediaType: MEDIA_TYPE.PDF,
    category: [CATEGORIES.PUBLICATIONS],
  },
];

enum ADVERTORIALS_SECTOR {
  OVERVIEW = "OVERVIEW",
  MAINLAND_OPPORTUNITY = "MAINLAND_OPPORTUNITY",
  MANPOWER = "MANPOWER",
  METROLOGY = "METROLOGY",
  TC_SUPPORT = "TC_SUPPORT",
}

export const advertorialsList = [
  // overview
  {
    title: "25 Mar 2022",
    link: "/en/doc/20220325-SkyPost-Promotion_of_Professionalism_of_TC_Practitioners.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.OVERVIEW,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "28 Feb 2022",
    link: "/en/doc/20220228-Professionalism_of_TC_Practitioners.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.OVERVIEW,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "13 Mar 2018",
    link: "/en/doc/20180313_AM730_Supply_Chain.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.OVERVIEW,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "27 Jul 2017",
    link: "/en/doc/20170727-SCMP-Overview_of_T&C_Industry.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.OVERVIEW,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "27 Jul 2017",
    link: "/en/doc/20170727-Sing_Tao-Overview_of_T&C_Industry.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.OVERVIEW,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "8 Mar 2017",
    link: "/en/doc/20170308-Ming_Pao_Consumer_Product_Testing.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.OVERVIEW,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "22 Dec 2016",
    link: "/en/doc/20161222-Headline_Daily-Consumer_Council.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.OVERVIEW,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "22 Dec 2016",
    link: "/en/doc/20161222-Oriental_Daily-Consumer_Council.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.OVERVIEW,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "16 Dec 2016",
    link: "/en/doc/20161216-HKET-Trade_Description_Ordinance.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.OVERVIEW,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "12 Jul 2016",
    link: "/en/doc/20160712-Singtao-Outlook_of_T&C.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.OVERVIEW,
    category: [CATEGORIES.ADVERTORIALS],
  },

  // Mainland Opportunity
  {
    title: "24 Apr 2018",
    link: "/en/doc/20180424_China_Daily_CEPA_Seminar.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "18 Apr 2018",
    link: "/en/doc/20180418_HKET_CEPA_Seminar.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "20 Jun 2017",
    link: "/en/doc/20170620-China_Daily-Mainland_Opp.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "16 Jun 2017",
    link: "/en/doc/20170616-HKET-Mainland_Opp.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "8 Mar 2017",
    link: "/en/doc/20170308-Ming_Pao_Consumer_Product_Testing.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MAINLAND_OPPORTUNITY,
    category: [CATEGORIES.ADVERTORIALS],
  },

  // Manpower Development
  {
    title: "9 Oct 2024",
    link: "/en/doc/20241009-MingPao-Digi_Sci_video_prod_comp_secondary_2023_24.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "7 Oct 2024",
    link: "/en/doc/20241007-YoungPost-Digi_Sci_video_prod_comp_secondary_2023_24.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "21 Jun 2024",
    link: "/en/doc/240621_recruit_magazine.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "23 May 2024",
    link: "/en/doc/20240523-SingTao-HKCTC_Special_Award.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "20 May 2024",
    link: "/en/doc/20240520-Young_post-HKCTC_Special_Award.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "8 Dec 2023",
    link: "/en/doc/20231208-HKET-ceremony_tcmpaward_2023-24.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "6 Aug 2023",
    link: "/en/doc/202307-YP-Digi_Science.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "27 Jul 2023",
    link: "/en/doc/20230727-SingTao-Digi_Science_Video_Production_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "19 Jun 2023",
    link: "/en/doc/20230619-YP-HKCTC_Special_Award.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "15 Jun 2023",
    link: "/en/doc/20230615-Ming_Pao-Advertorial_on_HKCTC_Award.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "17 Oct 2022",
    link: "/en/doc/20221017-Young_Post-Digi-Science_2022.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "13 Oct 2022",
    link: "/en/doc/20221013-Digi_Sciece_Video_Production_Competition_22_MP.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "10 Oct 2022",
    link: "/en/doc/20221010-Young_Post-HKCTC_Special_Award.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "6 Oct 2022",
    link: "/en/doc/20221006-Sing_Tao-HKCTC_Special_Award.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "23 Aug 2022",
    link: "/en/doc/20220823-Corporate_Awardees.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "30 Dec 2021",
    link: "/en/doc/20211230-HKET-TnC_Manpower_Development_Award_Scheme.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "30 Dec 2021",
    link: "/en/doc/20211230-Headline_Daily-TnC_Manpower_Development_Award_Scheme.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "30 Nov 2021",
    link: "/en/doc/20211130-Ming_Pao-HK_Youth_Science_and_Technology_Innovation_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "15 Nov 2021",
    link: "/en/doc/20211115-Young_Post-HK_Youth_Science_and_Technology_Innovation_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "11 Oct 2021",
    link: "/en/doc/20211011_Digi-Science_Video_Production_Competition_Young_Post.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "29 Sep 2021",
    link: "/en/doc/20210929_Digi-Science_Video_Production_Competition_Sing_Tao.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "29 Oct 2020",
    link: "/en/doc/20201029_Young_Post_Science_Technology_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "15 Oct 2020",
    link: "/en/doc/20201015_Sing_Tao_Young_Post_Science_Technology_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "5 Aug 2019",
    link: "/en/doc/20190805_Headline_Daily_Manpower.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "28 Jun 2019",
    link: "/en/doc/20190628_Student_Competition_Young_Post.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "20 Jun 2019",
    link: "/en/doc/20190620_Student_Competition_Sing_Tao_Daily.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "11 Jun 2019",
    link: "/en/doc/20190611_Student_Competition_Ming_Pao.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "28 Jun 2018",
    link: "/en/doc/20180628_Sing_Tao_Student_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "28 Jun 2018",
    link: "/en/doc/20180628_Ming_Pao_Student_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "28 Jun 2018",
    link: "/en/doc/20180628_Young_Post_Student_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "28 Mar 2018",
    link: "/en/doc/20180328_Ming_Pao_Manpower_Development.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "29 Jun 2017",
    link: "/en/doc/20170629_Ming_Pao_School_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "29 Jun 2017",
    link: "/en/doc/20170629_Young_Post_SCMP_School_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "11 May 2017",
    link: "/en/doc/20170511_Sing_Tao_Daily_School_Competition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "28 Apr 2017",
    link: "/en/doc/20170428-Ming_Pao-Professional_Development.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "28 Apr 2017",
    link: "/en/doc/20170428-The_Standard.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "15 Jun 2016",
    link: "/en/doc/20160615_Oriental_Daily.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "15 Feb 2016",
    link: "/en/doc/20160215_MingPao_Prof_recognition.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.MANPOWER,
    category: [CATEGORIES.ADVERTORIALS],
  },

  // Metrology, accreditation and standards
  {
    title: "30 Jul 2019",
    link: "/en/doc/20190730_HKET_ITC_Advertorial.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.METROLOGY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "30 Jul 2019",
    link: "/en/doc/20190730_The_Standard_WAD.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.METROLOGY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "26 Jul 2018",
    link: "/en/doc/20180726_HKET_HP26Jul.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.METROLOGY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "26 Jul 2018",
    link: "/en/doc/20180726_The_Standard.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.METROLOGY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "3 May 2018",
    link: "/en/doc/20180503_Sing_Tao_Daily_Accreditation.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.METROLOGY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "21 Dec 2017",
    link: "/en/doc/20171221_Sky_Post_Metrology_Symposium.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.METROLOGY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "21 Jul 2017",
    link: "/en/doc/20170721_Ming_Pao_3W_Day.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.METROLOGY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "21 Jul 2017",
    link: "/en/doc/20170721_The_Standard_3W_Day.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.METROLOGY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "5 Aug 2016",
    link: "/en/doc/20160805-Mingpao-3W_Day.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.METROLOGY,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "5 Aug 2016",
    link: "/en/doc/20160805-The_Standard.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.METROLOGY,
    category: [CATEGORIES.ADVERTORIALS],
  },

  // Support to T&C Sector
  {
    title: "5 Jan 2018",
    link: "/en/doc/20180105_HKET_Support_to_the_T&C_Industry.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.TC_SUPPORT,
    category: [CATEGORIES.ADVERTORIALS],
  },
  {
    title: "27 Jul 2017",
    link: "/en/doc/20170727-HKET-ITF_Projects.pdf",
    mediaType: MEDIA_TYPE.PDF,
    sector: ADVERTORIALS_SECTOR.TC_SUPPORT,
    category: [CATEGORIES.ADVERTORIALS],
  },
];
