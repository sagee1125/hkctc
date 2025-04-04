import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo/hkctc_logo.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import { navItemEnum } from "../../const";
import { Language, useSettings } from "../../context";
import { ABOUT_SIDE_MODULE } from "../../pages";
import { t2s } from "chinese-s2t";

type Sub = {
  label: string;
  link: string;
  labelCN: string;
  items?: Sub[];
};
type FooterData = {
  title: string;
  titleCN: string;
  link: string;
  subs: Sub[];

  secSubs?: FooterData[];
};

const multilingual = {
  en: {
    copyright_desc: `Copyright © 2024 Hong Kong Council for Testing and Certification. All Rights Reserved`,
    sitemap: "Sitemap",
  },
  cn: {
    copyright_desc: "©2025香港檢測和認證局 版權所有",
    sitemap: "網站地圖",
  },
};

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { isPC, language, getPageText } = useSettings();
  const isEn = language === Language.EN;
  const isSimpleCN = language === Language.ZH_CN;
  const page_text = getPageText(multilingual);

  const { copyright_desc, sitemap } = page_text;

  const [sitemapCollapsed, setSitemapCollapsed] = useState<boolean>(true);

  const commonDate: Sub[] = [
    {
      label: "Resources Library",
      labelCN: "資源庫",
      link: "/resources-reports",
    },
    {
      label: "Important Notices",
      labelCN: "重要告示",
      link: `/about-the-site?section=${ABOUT_SIDE_MODULE.IMPORTANT_NOTE}`,
    },
    {
      label: "Accessibility",
      labelCN: "無障礙網頁守則",
      link: `/about-the-site?section=${ABOUT_SIDE_MODULE.ACCESSIBILITY}`,
    },
    {
      label: "Privacy Policy",
      labelCN: "私隱政策聲明",
      link: `/about-the-site?section=${ABOUT_SIDE_MODULE.PRIVACY}`,
    },
    {
      label: "Contact Us",
      labelCN: "聯絡我們",
      link: `/about-the-site?section=${ABOUT_SIDE_MODULE.CONTACT}`,
    },
    {
      label: "Related Site",
      labelCN: "相關網址",
      link: `/about-the-site?section=${ABOUT_SIDE_MODULE.RELATED_SITE}`,
    },
  ];

  const footerData: FooterData[] = [
    {
      title: "About HKCTC",
      titleCN: "關於檢測認證業",
      link: "/about-us",
      subs: [
        {
          label: "Terms of Reference",
          labelCN: "職權範圍",
          link: "/about-us",
        },
        {
          label: "Membership",
          labelCN: "成員",
          link: "/about-us",
        },
        {
          label: "Panel on Manpower Development",
          labelCN: "人力發展小組",
          link: "/about-us",
        },
      ],
      secSubs: [
        {
          title: "",
          link: "",
          titleCN: "",
          subs: commonDate,
        },
        {
          title: "What’s New",
          titleCN: "最新消息",
          link: "/whats-new",
          subs: [],
        },
      ],
    },
    {
      title: "About T&C Industry",
      titleCN: "關於檢測認證業",
      link: "/tc-sector",
      subs: [
        {
          label: "Profile and Role of T&C Industry",
          labelCN: "檢測認證業的概況及角色",
          link: `/tc-sector?section=${navItemEnum.profile_and_role}`,
        },
        {
          label: "Strengths of Hong Kong's T&C Industry",
          labelCN: "香港檢測認證業的優勢",
          link: `/tc-sector?section=${navItemEnum.tc_sector_strengths}`,
        },
        {
          label: "Services Provided by T&C Industry",
          labelCN: "檢測認證業提供的服務",
          link: `/tc-sector?section=${navItemEnum.services_provided}`,
        },
        {
          label: "Services for Different Business Areas",
          labelCN: "為不同業務範疇提供的服務",
          link: `/tc-sector?section=${navItemEnum.different_business_areas}`,
          items: [
            {
              label: "Toys and Children's Products",
              labelCN: "玩具及兒童產品",
              link: "/tc-sector/toys_and_children_products",
            },
            {
              label: "Textiles and Apparel",
              labelCN: "紡織與成衣",
              link: "/tc-sector/textiles_and_apparel",
            },
            {
              label: "Electrical and Electronic Products",
              labelCN: "電氣及電子產品",
              link: "/tc-sector/electrical_and_electronic_products",
            },
            {
              label: "Construction Materials and Buildings",
              labelCN: "樓宇及建築材料",
              link: "/tc-sector/construction_materials_and_buildings",
            },
            {
              label: "Medical Testing",
              labelCN: "醫務化驗",
              link: "/tc-sector/medical_testing",
            },
            {
              label: "Food",
              labelCN: "食品",
              link: "/tc-sector/textiles_and_apparel",
            },
            {
              label: "Chinese Medicines",
              labelCN: "中藥",
              link: "/tc-sector/chinese_medicines",
            },
            {
              label: "Jewellery",
              labelCN: "珠寶",
              link: "/tc-sector/jewellery",
            },
            {
              label: "Information and Communications Technologies",
              labelCN: "資訊及通訊科技",
              link: "/tc-sector/food",
            },
            {
              label: "Environmental Protection",
              labelCN: "環保",
              link: "/tc-sector/environmental_protection",
            },
          ],
        },
        {
          label: "Accreditation Services",
          labelCN: "認可服務",
          link: `/tc-sector?section=${navItemEnum.accreditation_services}`,
        },
      ],
    },
    {
      title: "Support",
      titleCN: "支援",
      link: "/tc-sector",

      subs: [
        {
          label: "HKCTC Exhibition Programme",
          labelCN: "香港檢測和認證局展覽計劃",
          link: `/tc-sector?section=${navItemEnum.exhibition_programme}`,
        },
        {
          label: "Funding Schemes",
          labelCN: "資助計劃",
          link: `/tc-sector?section=${navItemEnum.funding_schemes}`,
        },
        // {
        //   label:
        //     "Testing and Certification Industry Job Creation Scheme (TCJS)",
        //   labelCN: "",
        //   link: `/tc-sector?section=${navItemEnum.tcjs}`,
        // },
        {
          label: "Accommodation and Land",
          labelCN: "工作地方及土地",
          link: `/tc-sector?section=${navItemEnum.accommodation_and_land}`,
          items: [
            {
              label:
                "Relaxation of Waiver Application for Existing Industrial Buildings",
              labelCN: "放寬現有工業大廈地契豁免書申請",
              link: `/tc-sector?section=${navItemEnum.accommodation_and_land}#0`,
            },
            {
              label: `"Nil Waiver Fee" for Testing Labs Operating in Industrial Buildings`,
              labelCN: "在工業大廈營運的測試實驗所「免繳豁免書費用」安排",
              link: `/tc-sector?section=${navItemEnum.accommodation_and_land}#1`,
            },
          ],
        },
        {
          label: "Entering into the Mainland Market",
          labelCN: "進入內地市場",
          link: `/tc-sector?section=${navItemEnum.entering_into_the_mainland_market}`,
          items: [
            {
              label: "Overview on CEPA",
              labelCN: "CEPA概覽",
              link: `/tc-sector?section=${navItemEnum.entering_into_the_mainland_market}#0`,
            },
            {
              label: `CEPA Agreements`,
              labelCN: "CEPA協議",
              link: `/tc-sector?section=${navItemEnum.entering_into_the_mainland_market}#1`,
            },
            {
              label: `Summary of CEPA Clauses Relating to Testing and Certification`,
              labelCN: "CEPA下檢測認證相關條文摘要",
              link: `/tc-sector?section=${navItemEnum.entering_into_the_mainland_market}#2`,
            },
            {
              label: `GBA Standard and Certification`,
              labelCN: "灣區標準及認證",
              link: `/tc-sector?section=${navItemEnum.entering_into_the_mainland_market}#3`,
            },
          ],
        },
        {
          label: "Other Support",
          labelCN: "其他支援",
          link: `/tc-sector?section=${navItemEnum.other_support}`,
        },
      ],

      secSubs: [
        {
          title: "Career & Education",
          titleCN: "職業與教育",
          link: `/career_and_education`,
          subs: [
            {
              label: "Career",
              labelCN: "職業",
              link: `/career_and_education`,
              items: [
                {
                  label: "Career Development",
                  labelCN: "職業發展",
                  link: `/career_and_education?section=${navItemEnum.career_development}`,
                },
                {
                  label: "Career Opportunities",
                  labelCN: "就業機會",
                  link: `/career_and_education?section=${navItemEnum.career_opportunities}`,
                },
                {
                  label: "Other Professional Schemes",
                  labelCN: "其他專業計劃",
                  link: `/career_and_education?section=${navItemEnum.other_professional_schemes}`,
                },
              ],
            },
            {
              label: "Education & Training",
              labelCN: "教育及培訓",
              link: `/career_and_education`,
              items: [
                {
                  label: "Programmes and Courses",
                  labelCN: "課程資訊",
                  link: `/career_and_education?section=${navItemEnum.programmes_and_courses}`,
                },
                {
                  label: "Learning and Teaching Resources",
                  labelCN: "學習及教學資源",
                  link: `/career_and_education?section=${navItemEnum.learning_teaching_resources}`,
                },
                {
                  label: "Qualifications Framework",
                  labelCN: "資歷架構",
                  link: `/career_and_education?section=${navItemEnum.qualifications_framework}`,
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: "Events & Promotions",
      titleCN: "活動與宣傳",
      link: `/events-promotion`,
      subs: [
        {
          label: "Events",
          labelCN: "活動",
          link: `/events-promotion?section=${navItemEnum.award_scheme}`,
          items: [
            {
              label: "T&C Manpower Development Award Scheme",
              labelCN: "檢測認證人力發展嘉許計劃",
              link: `/events-promotion?section=${navItemEnum.award_scheme}`,
            },
            {
              label: "Seminars and Workshops",
              labelCN: "研討會與工作坊",
              link: `/events-promotion?section=${navItemEnum.seminar_workshop}`,
            },
            {
              label: "Student Competitions",
              labelCN: "學生比賽",
              link: `/events-promotion?section=${navItemEnum.student_competition}`,
            },
          ],
        },
        {
          label: "Publications",
          labelCN: "刊物",
          link: `/events-promotion?section=${navItemEnum.hkctc_newsletter}`,
          items: [
            {
              label: "HKCTC Newsletters",
              labelCN: "香港檢測和認證局通訊",
              link: `/events-promotion?section=${navItemEnum.hkctc_newsletter}`,
            },
            {
              label: "Pamphlets and Booklets",
              labelCN: "宣傳單張及小冊子",
              link: `/events-promotion?section=${navItemEnum.pamphlets_booklets}`,
            },
            {
              label: "Comics",
              labelCN: "漫畫",
              link: `/events-promotion?section=${navItemEnum.comics}`,
            },
            {
              label: "Corruption Prevention Guide for T&C Industry",
              labelCN: "檢測和認證業防貪指引",
              link: `/events-promotion?section=${navItemEnum.corruption_prevention}`,
            },
            {
              label: "Other Useful Information",
              labelCN: "其他有用資料",
              link: `/events-promotion?section=${navItemEnum.useful_information}`,
            },
          ],
        },
        {
          label: "Reports",
          labelCN: "報告",
          link: `/events-promotion?section=${navItemEnum.hkctc_reports}`,
          items: [
            {
              label: "HKCTC Reports",
              labelCN: "香港檢測和認證局報告",
              link: `/events-promotion?section=${navItemEnum.hkctc_reports}`,
            },
            {
              label: `Legislative Council Papers `,
              labelCN: "立法會文件",
              link: `/events-promotion?section=${navItemEnum.council_papers}`,
            },
          ],
        },
        {
          label: "News and Videos",
          labelCN: "新聞和短片",
          link: `events-promotion?section=${navItemEnum.press_releases}`,
          items: [
            {
              label: "Press Releases",
              labelCN: "新聞公報",
              link: `events-promotion?section=${navItemEnum.press_releases}`,
            },
            {
              label: `Advertorials`,
              labelCN: "特約專輯",
              link: `events-promotion?section=${navItemEnum.advertorials}`,
            },
            {
              label: `Videos`,
              labelCN: "短片",
              link: `events-promotion?section=${navItemEnum.videos}`,
            },
          ],
        },
      ],
    },
  ];
  const downsideLogos = [
    {
      logoSize: isPC ? "h-[31px] w-[88px]" : "h-[24px]",
      img: "w3c_logo.png",
      hyperlink: "https://www.w3.org/WAI/WCAG2AA-Conformance",
    },
    {
      logoSize: isPC ? "h-[56px] w-[88px]" : "h-[43px]",
      img: "WA_Gold_TC.png",
      hyperlink: "https://www.webforall.gov.hk/recognition_scheme",
    },

    {
      logoSize: isPC ? "h-[48px] w-[120px]" : "h-[27px]",
      img: "brandhk.png",
      hyperlink: "https://www.brandhk.gov.hk/html/en/index.html",
    },
    {
      logoSize: isPC ? "h-[74px] w-[100px]" : "h-[50px]",
      img: "SIPS_logo.png",
      hyperlink: "https://www.science.gov.hk/",
    },
    {
      logoSize: isPC ? "h-[34px] w-[160px]" : "h-[14px]",
      img: "IHHK_logo_tc.png",
      hyperlink: "https://www.innovationhub.hk/",
    },
  ];

  return (
    <footer>
      <div className="bg-newPrimary text-white px-[24px]">
        <div
          className={`${
            isPC ? "h-[100px]" : "h-auto"
          } w-full flex justify-end items-end`}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "14px",
              paddingRight: isPC ? "72px" : "0px",
              paddingTop: isPC ? "0px" : "24px",
            }}
          >
            <Logo
              style={{ filter: "brightness(0) invert(1)", cursor: "pointer" }}
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
            <Icon
              icon="mage:camera-2"
              className="h-[38px] w-[38px] text-white cursor-pointer"
              onClick={() => {
                window.open("https://www.instagram.com/hkctcgovhk/");
              }}
            />
            <Icon
              icon="fa6-brands:facebook-f"
              className="h-[32px] w-[32px] text-white cursor-pointer"
              onClick={() => {
                window.open("https://www.facebook.com/hkctcgovhk");
              }}
            />
          </div>
        </div>
        {isPC ? (
          <>
            <div className="h-[42px] w-full flex justify-center items-center">
              <div
                className="flex flex-row gap-[6px] items-center cursor-pointer"
                onClick={() => {
                  setSitemapCollapsed(!sitemapCollapsed);
                }}
              >
                <p className="text-body-s">{sitemap as string}</p>
                <ExpandMoreIcon
                  sx={{
                    transform: !sitemapCollapsed
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </div>

            <Collapse in={!sitemapCollapsed} timeout="auto" unmountOnExit>
              <div className="grid grid-cols-4 gap-[24px] px-[25px] py-[42px]">
                {footerData.map((col, index) => (
                  <div key={index} className="flex flex-col">
                    <p
                      className="text-heading-l cursor-pointer"
                      onClick={() => {
                        if (col.link) {
                          navigate(col.link);
                          window.scroll({
                            top: 0,
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      {isEn
                        ? col.title
                        : isSimpleCN
                        ? t2s(col.titleCN)
                        : col.titleCN}
                    </p>
                    <hr className="bg-white w-[77px] h-[4px] my-[16px]" />
                    <div className="flex flex-col gap-[16px] text-body-m">
                      {col.subs.map((sub, index) => (
                        <div key={index}>
                          <div className="flex flex-row gap-[8px] items-center cursor-pointer">
                            <Icon
                              icon="weui:arrow-outlined"
                              className="h-[36px] w-[10px] text-white"
                              onClick={() => {
                                if (sub.link) {
                                  navigate(sub.link);
                                  window.scroll({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }
                              }}
                            />

                            {isEn
                              ? sub.label
                              : isSimpleCN
                              ? t2s(sub.labelCN)
                              : sub.labelCN}
                          </div>
                          {sub.items && (
                            <div className="flex flex-col gap-[16px] pl-[16px]">
                              {sub.items.map((item, index) => (
                                <li
                                  className="cursor-pointer"
                                  key={index}
                                  onClick={() => {
                                    if (item.link) {
                                      navigate(item.link);
                                      window.scroll({
                                        top: 0,
                                        behavior: "smooth",
                                      });
                                    }
                                  }}
                                >
                                  {isEn
                                    ? item.label
                                    : isSimpleCN
                                    ? t2s(item.labelCN)
                                    : item.labelCN}
                                </li>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {col.secSubs && (
                      <div>
                        {(col.secSubs ?? []).map((sec, index) => (
                          <div key={index} className="mt-[42px] flex flex-col">
                            <p className="text-heading-l">
                              {isEn
                                ? sec.title
                                : isSimpleCN
                                ? t2s(sec.titleCN)
                                : sec.titleCN}
                            </p>
                            <hr className="bg-white w-[77px] h-[4px] my-[16px]" />

                            <div className="flex flex-col gap-[16px] text-body-m">
                              {sec.subs.map((sub, index) => (
                                <div key={index}>
                                  <div
                                    className="flex flex-row gap-[8px] items-center cursor-pointer h-[22px]"
                                    onClick={() => {
                                      if (sub.link) {
                                        navigate(sub.link);
                                        window.scroll({
                                          top: 0,
                                          behavior: "smooth",
                                        });
                                      }
                                    }}
                                  >
                                    <Icon
                                      icon="weui:arrow-outlined"
                                      className="h-full w-[10px] text-white"
                                    />

                                    {isEn
                                      ? sub.label
                                      : isSimpleCN
                                      ? t2s(sub.labelCN)
                                      : sub.labelCN}
                                  </div>
                                  {sub.items && (
                                    <div className="flex flex-col gap-[16px] pl-[16px]">
                                      {sub.items.map((item, index) => (
                                        <li
                                          className="cursor-pointer"
                                          key={index}
                                          onClick={() => {
                                            if (item.link) {
                                              window.scroll({
                                                top: 0,
                                                behavior: "smooth",
                                              });
                                              navigate(item.link);
                                            }
                                          }}
                                        >
                                          {isEn
                                            ? item.label
                                            : isSimpleCN
                                            ? t2s(item.labelCN)
                                            : item.labelCN}
                                        </li>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Collapse>
          </>
        ) : (
          <div className="w-full flex flex-col items-center gap-[8px] py-[24px]">
            <div className="flex justify-center gap-4 text-white">
              {commonDate.slice(0, 3).map((item, index) => (
                <p
                  key={index}
                  className="text-body-s cursor-pointer"
                  onClick={() => {
                    if (item.link) {
                      window.scroll({
                        top: 0,
                        behavior: "smooth",
                      });
                      navigate(item.link);
                    }
                  }}
                >
                  {isEn
                    ? item.label
                    : isSimpleCN
                    ? t2s(item.labelCN)
                    : item.labelCN}
                </p>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              {commonDate.slice(3, 5).map((item, index) => (
                <p
                  key={index}
                  className="text-body-s cursor-pointer"
                  onClick={() => {
                    if (item.link) {
                      window.scroll({
                        top: 0,
                        behavior: "smooth",
                      });
                      navigate(item.link);
                    }
                  }}
                >
                  {isEn
                    ? item.label
                    : isSimpleCN
                    ? t2s(item.labelCN)
                    : item.labelCN}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`bg-white ${
          isPC ? "h-[90px]" : "py-[16px] px-[24px]"
        } flex flex-row items-center justify-center gap-[12px]`}
      >
        {downsideLogos.map((logo, index) => (
          <div
            className={isPC ? logo.logoSize : ""}
            key={index}
            onClick={() => {
              window.open(logo.hyperlink);
            }}
          >
            <img
              className="object-fit cursor-pointer"
              src={`${process.env.PUBLIC_URL}/assets/footer/${logo.img}`}
              alt={logo.img}
            />
          </div>
        ))}
      </div>
      <div className="bg-[#333333] h-[50px] flex px-[24px] items-center">
        <p className="text-white text-body-s">{copyright_desc as string}</p>
      </div>
    </footer>
  );
};
