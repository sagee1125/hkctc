import React from "react";
import { SquareTitle, MediaTemplateWithDialog } from "../../../components";
import { useNavigate } from "react-router-dom";
import { MEDIA_TYPE, navItemEnum } from "../../../const";
import { useSettings } from "../../../context";

const multilingual = {
  en: {
    title: "Career Development",
    resources: "Resources",
    related_links: "Related Sections",
    intro: [
      "Testing and certification play a crucial role in our daily life. They provide assurance on the quality and safety of products and services for a wide spectrum of industries.",
      "The demand for quality products and services has never been higher. Given the growing need for testing and certification services, the testing and certification industry has a keen demand for talent. Pursuing a career in testing and certification will bring you a wide range of opportunities!",
    ],
    how_to_prepare:
      "How to prepare yourself to join the testing and certification sector",
    senior_level: "At the senior secondary level",
    post_level: "At the post-secondary / university level",
    senior_level_to_do: [
      "To be proficient in languages and scientific thinking",
      "To study at least one science subject, e.g. Biology, Chemistry, Physics, Combined Science, Integrated Science, etc.",
    ],
    post_level_to_do: [
      "Examples of major: Science, Engineering, Testing and Certification, Applied Science, Fashion and Textiles, etc.",
    ],
  },

  cn: {
    title: "職業發展",
    resources: "資源",
    related_links: "相關內容",
    intro: [
      "檢測和認證服務與日常生活息息相關，為各行各業的產品和服務提供安全和品質保證。",
      "市民對產品及服務質素要求愈來愈高，因而對檢測認證服務需求有増無減，行業的人才需求亦十分殷切。投身檢測認證行業可帶給你多元化的發展機遇！",
    ],
    how_to_prepare: "如何裝備自己 加入檢測和認證業",
    senior_level: "高中階段",
    post_level: "專上 / 大學階段",
    senior_level_to_do: [
      "培養良好語文和科學思維能力",
      "選修最少一個科學科目，例如生物、化學、物理、組合科學、綜合科學等",
    ],
    post_level_to_do: [
      "選讀相關學科，例如科學、工程、檢測和認證、應用科學、時裝與紡織等",
    ],
  },
};
export const CareerDevelopment: React.FC = () => {
  const navigate = useNavigate();
  const { isPC, getPageText, getSingleText } = useSettings();
  const page_text = getPageText(multilingual);

  const {
    title,
    resources,
    related_links,
    intro,
    how_to_prepare,
    senior_level,
    post_level,
    senior_level_to_do,
    post_level_to_do,
  } = page_text;

  const careerDev = [
    {
      title: "Profile and Role of Testing and Certification Industry",
      titleCN: "檢測認證業的概況和角色",
      imgUrl: "Profile_and_Role.png",
      nav: `/tc-sector?section=${navItemEnum.profile_and_role}`,
    },
    {
      title: "Strengths of Hong Kong's Testing and Certification Industry",
      titleCN: "香港檢測認證業的優勢",
      imgUrl: "Strengths.png",
      nav: `/tc-sector?section=${navItemEnum.tc_sector_strengths}`,
    },
    {
      title: "Services Provided by Testing and Certification Industry",
      titleCN: "檢測認證業提供的服務",
      imgUrl: "Services_Provided.png",
      nav: `/tc-sector?section=${navItemEnum.services_provided}`,
    },
  ];

  const relatedLinks = [
    {
      title:
        "List of Tertiary Programmes Dedicated to Testing and Certification",
      titleCN: "與檢測認證相關的專上課程名單",
      imgUrl: "Programmes_and_Courses.png",
      nav: `/career_and_education?section=${navItemEnum.programmes_and_courses}`,
    },
    {
      title: "Professional Certification Scheme for Testing Personnel",
      titleCN: "檢測認證從業員的專業發展",
      imgUrl: "Other_Professional_Schemes.png",
      nav: `/career_and_education?section=${navItemEnum.other_professional_schemes}`,
    },
    {
      title: "Qualifications Framework",
      titleCN: "資歷架構",
      imgUrl: "Qualifications_Framework.png",
      nav: `/career_and_education?section=${navItemEnum.qualifications_framework}`,
    },
  ];

  const resourcesData: Array<{
    title: string;
    imgUrl: string;
    iconPath: string;
    titleCN: string;
    mediaType: MEDIA_TYPE;
    mediaDomain?: "hkctc" | "youtube";
    link: string;
  }> = [
    {
      title: "Testing and Certification Create Your Future",
      titleCN: "檢測認證創未來",
      imgUrl: "TestingPdf.png",
      iconPath: "PDF.png",
      mediaType: MEDIA_TYPE.PDF,
      mediaDomain: "hkctc",
      link: "/en/doc/brochure_e.pdf",
    },
    {
      title: "認識檢測和認證業 (Chinese Version Only)",
      titleCN: "認識檢測和認證業 (Chinese Version Only)",
      imgUrl: "TestingPdf_Chinese.png",
      iconPath: "PDF.png",
      mediaType: MEDIA_TYPE.PDF,
      mediaDomain: "hkctc",
      link: "/tc/doc/brochure_b.pdf",
    },
    {
      title: "檢測認證青雲路 (Chinese Version Only)",
      titleCN: "檢測認證青雲路 (Chinese Version Only)",
      imgUrl: "QYL.png",
      iconPath: "PDF.png",
      mediaType: MEDIA_TYPE.PDF,
      mediaDomain: "hkctc",
      link: "/tc/doc/brochure_c.pdf",
    },
    {
      title: "檢測認證工作透視 (Chinese Version Only)",
      titleCN: "檢測認證工作透視 (Chinese Version Only)",
      imgUrl: "toushi.png",
      iconPath: "PDF.png",
      mediaType: MEDIA_TYPE.PDF,
      mediaDomain: "hkctc",
      link: "/tc/doc/brochure_d.pdf",
    },
    {
      title: "Career Development in Testing and Certification Industry",
      titleCN: "檢測認證職業發展",
      imgUrl: "defaultCover.png",
      iconPath: "PDF.png",
      mediaType: MEDIA_TYPE.PDF,
      mediaDomain: "hkctc",
      link: "/en/doc/pamphlet_a.pdf",
    },
    {
      title: "Testing and Certification Create Your Future",
      titleCN: "檢測認證創未來",
      imgUrl: "defaultCover.png",
      iconPath: "VIDEO.png",
      mediaType: MEDIA_TYPE.VIDEO,
      mediaDomain: "youtube",
      link: "https://www.youtube.com/embed/GDuq9I9J9IU",
    },
    {
      title: "Young Testing and Certification Practitioners Talks",
      titleCN: "後生仔傾檢測",
      imgUrl: "defaultCover.png",
      iconPath: "VIDEO.png",
      mediaType: MEDIA_TYPE.VIDEO,
      mediaDomain: "youtube",
      link: "https://www.youtube.com/embed/_baqA4hraQc",
    },

    {
      title:
        "Know More About T&C (1): Electronic Product Testing & Food Management System Certification",
      titleCN: "檢測認證工作睇真啲（一）：電子產品測試及食品管理體系認證",

      imgUrl: "defaultCover.png",
      iconPath: "VIDEO.png",
      mediaType: MEDIA_TYPE.VIDEO,
      mediaDomain: "youtube",
      link: "https://www.youtube.com/embed/ly4dgf0K6Gc",
    },
    {
      title:
        "Know More About T&C (2): Textile Testing & Construction Materials Product Certification",
      imgUrl: "defaultCover.png",
      titleCN: "檢測認證工作睇真啲（二）：紡織及成衣測試及建材產品認證",
      iconPath: "VIDEO.png",
      mediaType: MEDIA_TYPE.VIDEO,
      mediaDomain: "youtube",
      link: "https://www.youtube.com/embed/2P9Vbmh4Wok",
    },
    {
      title:
        "Know More About T&C (3): Building / Construction Testing and Indoor Air Quality Inspection",
      imgUrl: "defaultCover.png",
      titleCN: "檢測認證工作睇真啲（三）：樓宇及建材檢測及室內空氣質素檢驗",
      iconPath: "VIDEO.png",
      mediaType: MEDIA_TYPE.VIDEO,
      mediaDomain: "youtube",
      link: "https://www.youtube.com/embed/lph2_v1FTwU",
    },
  ];

  return (
    <div className="w-full">
      <SquareTitle title={title as string} />

      <div className="my-[24px]">
        <p className="text-body-m text-justify">
          {(intro as string[])[0]}
          <br />
          <br />
          {(intro as string[])[1]}
        </p>
      </div>
      <div>
        {careerDev.map((item, index) => {
          const { title, titleCN, imgUrl, nav } = item;
          const displayTitle = getSingleText(title, titleCN);
          return (
            <div
              key={index}
              className="flex flex-row items-center h-[90px] gap-[24px] mb-[24px] cursor-pointer"
              tabIndex={0}
              role="button"
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                navigate(nav);
              }}
            >
              <img
                className="w-[130px] h-full object-contain"
                src={process.env.PUBLIC_URL + "/assets/images/" + imgUrl}
                alt={imgUrl}
              />
              <div
                className={`text-highlight-m text-black py-[8px] ${
                  isPC ? "pr-[16px]" : ""
                } w-[414px]`}
              >
                {displayTitle.length > 42 && !isPC
                  ? displayTitle.slice(0, 42) + "..."
                  : displayTitle}
              </div>
              <svg
                tabIndex={0}
                role="img"
                aria-label="icon"
                className="flex-shrink-0"
                xmlns="https://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_2682_55750)">
                  <path
                    d="M4.70996 16L12.71 8L4.70996 0L3.28996 1.42L9.86996 8L3.28996 14.58L4.70996 16Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2682_55750">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          );
        })}
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />

      <div className="text-heading-l">
        {how_to_prepare as React.ReactNode[]}
      </div>
      <div className="text-heading-m my-[24px] text-newPrimary">
        {senior_level as React.ReactNode[]}
      </div>
      <div className="mt-[24px] border-[1px] border-[#E0E0E0] py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/blue-tick.svg`}
            alt={"tick"}
          />
          <p className="text-highlight-m flex-grow min-w-0 text-justify">
            {(senior_level_to_do as string[])[0]}
          </p>
        </div>
      </div>
      <div className="mt-[24px] border-[1px] border-[#E0E0E0] py-[24px] px-[36px] mt-[24px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/blue-tick.svg`}
            alt={"tick"}
          />
          <p className="text-highlight-m flex-grow min-w-0 text-justify">
            {(senior_level_to_do as string[])[1]}
          </p>
        </div>
      </div>
      <div className="text-heading-m my-[24px] text-newPrimary">
        {post_level as React.ReactNode}
      </div>

      <div className="mt-[24px] border-[1px] border-[#E0E0E0] py-[24px] px-[36px]">
        <div className="flex flex-row gap-[24px] items-center w-full">
          <img
            className="w-[32px] h-[32px] flex-shrink-0"
            src={`${process.env.PUBLIC_URL}/assets/icons/blue-tick.svg`}
            alt={"tick"}
          />
          <div className="text-highlight-m flex-grow min-w-0 text-justify">
            {(post_level_to_do as string[])[0]}
          </div>
        </div>
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />
      <div>
        <img
          className="w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/assets/careerEducation/career_path_en.png`}
          alt={"career path"}
        />
      </div>
      <hr className="my-[24px] text-[#E0E0E0]" />

      <div className="text-heading-l">{related_links as React.ReactNode}</div>
      <div className="mt-[24px]">
        {relatedLinks.map((item, index) => {
          const { title, titleCN, imgUrl, nav } = item;
          const displayTitle = getSingleText(title, titleCN);
          return (
            <div
              key={index}
              className="flex flex-row items-center h-[90px] gap-[24px] mb-[24px] cursor-pointer"
              tabIndex={0}
              role="button"
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                navigate(nav);
              }}
            >
              <img
                className="w-[130px] h-full object-contain"
                src={process.env.PUBLIC_URL + "/assets/images/" + imgUrl}
                alt={imgUrl}
              />

              <div
                className={`text-highlight-m text-black py-[8px] ${
                  isPC ? "pr-[16px]" : ""
                } w-[414px]`}
              >
                {displayTitle.length > 42 && !isPC
                  ? displayTitle.slice(0, 42) + "..."
                  : displayTitle}
              </div>
              <svg
                tabIndex={0}
                role="img"
                className="flex-shrink-0"
                xmlns="https://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-label="icon"
              >
                <g clipPath="url(#clip0_2682_55750)">
                  <path
                    d="M4.70996 16L12.71 8L4.70996 0L3.28996 1.42L9.86996 8L3.28996 14.58L4.70996 16Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2682_55750">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          );
        })}
      </div>

      <hr className="my-[24px] text-[#E0E0E0]" />

      <div className="text-heading-l">{resources as string}</div>
      <div className="mt-[24px]">
        <div className={`grid grid-cols-${isPC ? "2" : "1"} gap-[24px]`}>
          {resourcesData.map((item, index) => {
            const {
              title,
              titleCN,
              imgUrl,
              link,
              mediaDomain,
              mediaType,
              iconPath,
            } = item;
            return (
              <div
                key={index}
                className="flex flex-row items-center h-[90px] mt-[24px] gap-[24px]"
              >
                <MediaTemplateWithDialog
                  title={getSingleText(title, titleCN)}
                  imagePath={imgUrl}
                  date=""
                  mediaLink={link}
                  mediaType={mediaType}
                  mediaDomain={mediaDomain}
                  direction="row"
                  maskIcon={iconPath}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
