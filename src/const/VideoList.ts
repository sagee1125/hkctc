export enum VIDEO_TYPE {
  HKCTC_REPORT = "HKCTC_REPORT",
  TC_SERVICES = "TC_SERVICES",
  CAREER_DEVELOPMENT = "CAREER_DEVELOPMENT",
  MANPOWER_DEVELOPMENT = "MANPOWER_DEVELOPMENT",
}

export type VideoListData = {
  title: string;
  titleCN: string;
  link: string;
  domain: "hkctc" | "youtube";
  category: VIDEO_TYPE[];
};

export const videoList: VideoListData[] = [
  {
    title: "Report Highlights 2023-24",
    titleCN: "2023-24年度",
    link: "/videos/en/hkctc_report_2023-24_highlights_en.mp4",
    domain: "hkctc",
    category: [VIDEO_TYPE.HKCTC_REPORT],
  },
  {
    title: "Report Highlights 2022-23",
    titleCN: "2022-23年度",
    link: "/videos/en/hkctc_report_2022-23_highlights.mp4",
    domain: "hkctc",
    category: [VIDEO_TYPE.HKCTC_REPORT],
  },
  {
    title: "Overview",
    titleCN: "綜覽",
    link: "https://www.youtube.com/embed/bu6XbDPJLKg",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Toys and Children's Products",
    titleCN: "玩具及兒童產品",
    link: "https://www.youtube.com/embed/fKkwNRX0i6c",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Textiles and Garment",
    titleCN: "紡織品及成衣",
    link: "https://www.youtube.com/embed/JL54Sx8IFF0",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Electrical and Electronic Products",
    titleCN: "電氣及電子產品",
    link: "https://www.youtube.com/embed/P270J9iaZ0s",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Construction Materials and Buildings",
    titleCN: "建築材料",
    link: "https://www.youtube.com/embed/06_ec-i3gCo",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Food",
    titleCN: "食品",
    link: "https://www.youtube.com/embed/oGRho-M6kEg",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Chinese Medicines",
    titleCN: "中藥",
    link: "https://www.youtube.com/embed/WRYVmv0SzrQ",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Fei Cui and Diamond",
    titleCN: "翡翠及鑽石",
    link: "https://www.youtube.com/embed/ODofaE4w6Sc",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Environmental Protection",
    titleCN: "環保",
    link: "https://www.youtube.com/embed/5ncIXAbe9mI",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title:
      "HKCTC - Manpower Development Award Scheme 2021-22 Professional Awardee Miss LI Cheuk Ting, Vivian",
    titleCN:
      "香港檢測和認證局 – 2021-22年度嘉許計劃 專業人員獎得獎者李芍葶小姐",
    link: "https://www.youtube.com/embed/dedVhTUT4Aw",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT, VIDEO_TYPE.MANPOWER_DEVELOPMENT],
  },
  {
    title:
      "HKCTC - Manpower Development Award Scheme 2021-22 Professional Awardee Mr YAU Cheuk On",
    titleCN:
      "香港檢測和認證局 – 2021-22年度嘉許計劃 專業人員獎得獎者邱卓安先生",
    link: "https://www.youtube.com/embed/F12slb-A7xc",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT, VIDEO_TYPE.MANPOWER_DEVELOPMENT],
  },
  {
    title:
      "HKCTC - Manpower Development Award Scheme 2021-22 Professional Awardee Mr PUN Chi Kit, Patrick",
    titleCN:
      "香港檢測和認證局 – 2021-22年度嘉許計劃 專業人員獎得獎者潘志傑先生",
    link: "https://www.youtube.com/embed/fmPKw_e2Crc",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT, VIDEO_TYPE.MANPOWER_DEVELOPMENT],
  },
  {
    title:
      "HKCTC - Manpower Development Award Scheme 2021-22 Professional Awardee Miss TAM Ka Ming",
    titleCN:
      "香港檢測和認證局 – 2021-22年度嘉許計劃 專業人員獎得獎者譚嘉明小姐",

    link: "https://www.youtube.com/embed/Zi2ddlEtOSA",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT, VIDEO_TYPE.MANPOWER_DEVELOPMENT],
  },
  {
    title: "Testing and Certification Create Your Future",
    titleCN: "檢測認證創未來",
    link: "https://www.youtube.com/embed/GDuq9I9J9IU",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT],
  },
  {
    title: "Young Testing and Certification Practitioners Talks",
    titleCN: "後生仔傾檢測",
    link: "https://www.youtube.com/embed/_baqA4hraQc",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT],
  },
  {
    title:
      "Know More About T&C (1): Electronic Product Testing & Food Management System Certification",
    titleCN: "檢測認證工作睇真啲（一）：電子產品測試及食品管理體系認證",
    link: "https://www.youtube.com/embed/ly4dgf0K6Gc",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT],
  },
  {
    title:
      "Know More About T&C (2): Textile Testing & Construction Materials Product Certification",
    titleCN: "檢測認證工作睇真啲（二）：紡織及成衣測試及建材產品認證",
    link: "https://www.youtube.com/embed/2P9Vbmh4Wok",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT],
  },
  {
    title:
      "Know More About T&C (3): Building / Construction Testing and Indoor Air Quality Inspection",
    titleCN: "檢測認證工作睇真啲（三）：樓宇及建材檢測及室內空氣質素檢驗",

    link: "https://www.youtube.com/embed/lph2_v1FTwU",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT],
  },
];
