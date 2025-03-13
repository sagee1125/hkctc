export enum VIDEO_TYPE {
  HKCTC_REPORT = "HKCTC_REPORT",
  TC_SERVICES = "TC_SERVICES",
  CAREER_DEVELOPMENT = "CAREER_DEVELOPMENT",
  MANPOWER_DEVELOPMENT = "MANPOWER_DEVELOPMENT",
}

export type VideoListData = {
  title: string;
  link: string;
  domain: "hkctc" | "youtube";
  category: VIDEO_TYPE[];
};

export const videoList: VideoListData[] = [
  {
    title: "Report Highlights 2023-24",
    link: "/videos/en/hkctc_report_2023-24_highlights_en.mp4",
    domain: "hkctc",
    category: [VIDEO_TYPE.HKCTC_REPORT],
  },
  {
    title: "Report Highlights 2022-23",
    link: "/videos/en/hkctc_report_2022-23_highlights.mp4",
    domain: "hkctc",
    category: [VIDEO_TYPE.HKCTC_REPORT],
  },
  {
    title: "Overview",
    link: "https://www.youtube.com/embed/bu6XbDPJLKg",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Toys and Children's Products",
    link: "https://www.youtube.com/embed/fKkwNRX0i6c",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Textiles and Garment",
    link: "https://www.youtube.com/embed/JL54Sx8IFF0",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Electrical and Electronic Products",
    link: "https://www.youtube.com/embed/P270J9iaZ0s",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Construction Materials and Buildings",
    link: "https://www.youtube.com/embed/06_ec-i3gCo",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Food",
    link: "https://www.youtube.com/embed/oGRho-M6kEg",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Chinese Medicines",
    link: "https://www.youtube.com/embed/WRYVmv0SzrQ",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Fei Cui (Jadeite Jade) and Diamond",
    link: "https://www.youtube.com/embed/ODofaE4w6Sc",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title: "Environmental Protection",
    link: "https://www.youtube.com/embed/5ncIXAbe9mI",
    domain: "youtube",
    category: [VIDEO_TYPE.TC_SERVICES],
  },
  {
    title:
      "HKCTC - Manpower Development Award Scheme 2021-22 Professional Awardee Miss LI Cheuk Ting, Vivian",
    link: "https://www.youtube.com/embed/dedVhTUT4Aw",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT, VIDEO_TYPE.MANPOWER_DEVELOPMENT],
  },
  {
    title:
      "HKCTC - Manpower Development Award Scheme 2021-22 Professional Awardee Mr YAU Cheuk On",
    link: "https://www.youtube.com/embed/F12slb-A7xc",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT, VIDEO_TYPE.MANPOWER_DEVELOPMENT],
  },
  {
    title:
      "HKCTC - Manpower Development Award Scheme 2021-22 Professional Awardee Mr PUN Chi Kit, Patrick",
    link: "https://www.youtube.com/embed/fmPKw_e2Crc",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT, VIDEO_TYPE.MANPOWER_DEVELOPMENT],
  },
  {
    title:
      "HKCTC - Manpower Development Award Scheme 2021-22 Professional Awardee Miss TAM Ka Ming",
    link: "https://www.youtube.com/embed/Zi2ddlEtOSA",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT, VIDEO_TYPE.MANPOWER_DEVELOPMENT],
  },
  {
    title: "Testing and Certification Create Your Future",
    link: "https://www.youtube.com/embed/GDuq9I9J9IU",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT],
  },
  {
    title: "Young Testing and Certification Practitioners Talks",
    link: "https://www.youtube.com/embed/_baqA4hraQc",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT],
  },
  {
    title:
      "Know More About T&C (1): Electronic Product Testing & Food Management System Certification",
    link: "https://www.youtube.com/embed/ly4dgf0K6Gc",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT],
  },
  {
    title:
      "Know More About T&C (2): Textile Testing & Construction Materials Product Certification",
    link: "https://www.youtube.com/embed/2P9Vbmh4Wok",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT],
  },
  {
    title:
      "Know More About T&C (3): Building / Construction Testing and Indoor Air Quality Inspection",
    link: "https://www.youtube.com/embed/lph2_v1FTwU",
    domain: "youtube",
    category: [VIDEO_TYPE.CAREER_DEVELOPMENT],
  },
];
