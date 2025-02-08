import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo/hkctc_logo.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import { navItemEnum } from "../../const";

type Sub = {
  label: string;
  link: string;
  items?: Sub[];
};
type FooterData = {
  title: string;
  link: string;
  subs: Sub[];

  secSubs?: FooterData[];
};

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const [sitemapCollapsed, setSitemapCollapsed] = useState<boolean>(true);

  const footerData: FooterData[] = [
    {
      title: "About Us",
      link: "/about-us",
      subs: [
        {
          label: "Terms of Reference",
          link: "/about-us",
        },
        {
          label: "Membership",
          link: "/about-us",
        },
        {
          label: "Panel on Manpower Development",
          link: "/about-us",
        },
      ],
      secSubs: [
        {
          title: "",
          link: "",
          subs: [
            {
              label: "Resources Library",
              link: "",
            },
            {
              label: "Important Notices",
              link: "/about-the-site?am=Important+Notices",
            },
            {
              label: "Accessibility",
              link: "/about-the-site?am=Accessibility",
            },
            {
              label: "Privacy Policy",
              link: "/about-the-site?am=Privacy+Policy",
            },
            {
              label: "Related Site",
              link: "",
            },
            // {
            //   label: "Contact Us",
            //   link: "/about-the-site?am=Contact+Us",
            // },
          ],
        },

        {
          title: "What’s New",
          link: "/whats-new",
          subs: [],
        },
      ],
    },
    {
      title: "About T&C Sector",
      link: "/tc-sector",
      subs: [
        {
          label: "Profile and Role of T&C Sector",
          link: `/tc-sector?section=${navItemEnum.profile_and_role}`,
        },
        {
          label: "Strengths of Hong Kong's T&C Sector",
          link: `/tc-sector?section=${navItemEnum.tc_sector_strengths}`,
        },
        {
          label: "Services Provided by T&C Sector",
          link: `/tc-sector?section=${navItemEnum.services_provided}`,
        },
        {
          label: "Services for Different Business Areas",
          link: `/tc-sector?section=${navItemEnum.different_business_areas}`,
          items: [
            {
              label: "Toys and Children's Products",
              link: "/tc-sector/toys_and_children_products",
            },
            {
              label: "Textiles and Apparel",
              link: "/tc-sector/textiles_and_apparel",
            },
            {
              label: "Electrical and Electronic Products",
              link: "/tc-sector/electrical_and_electronic_products",
            },
            {
              label: "Construction Materials and Buildings",
              link: "/tc-sector/construction_materials_and_buildings",
            },
            {
              label: "Medical Testing",
              link: "/tc-sector/medical_testing",
            },
            {
              label: "Food",
              link: "/tc-sector/textiles_and_apparel",
            },
            {
              label: "Chinese Medicines",
              link: "/tc-sector/chinese_medicines",
            },
            {
              label: "Jewellery",
              link: "/tc-sector/jewellery",
            },
            {
              label: "Information and Communications Technologies",
              link: "/tc-sector/food",
            },
            {
              label: "Environmental Protection",
              link: "/tc-sector/environmental_protection",
            },
          ],
        },
        {
          label: "Accreditation Services",
          link: `/tc-sector?section=${navItemEnum.accreditation_services}`,
        },
      ],
    },
    {
      title: "Support",
      link: "/tc-sector",

      subs: [
        {
          label: "HKCTC Exhibition Programme",
          link: `/tc-sector?section=${navItemEnum.exhibition_programme}`,
        },
        {
          label: "Funding Schemes",
          link: `/tc-sector?section=${navItemEnum.funding_schemes}`,
        },
        {
          label: "Testing and Certification Sector Job Creation Scheme (TCJS)",
          link: `/tc-sector?section=${navItemEnum.tcjs}`,
        },
        {
          label: "Accommodation and Land",
          link: `/tc-sector?section=${navItemEnum.accommodation_and_land}`,
          items: [
            {
              label:
                "Relaxation of Waiver Application for Existing Industrial Buildings",
              link: `/tc-sector?section=${navItemEnum.accommodation_and_land}#0`,
            },
            {
              label: `"Nil Waiver Fee" for Testing Labs Operating in Industrial Buildings`,
              link: `/tc-sector?section=${navItemEnum.accommodation_and_land}#1`,
            },
          ],
        },
        {
          label: "Entering into the Mainland Market",
          link: `/tc-sector?section=${navItemEnum.entering_into_the_mainland_market}`,
          items: [
            {
              label: "Overview on CEPA",
              link: `/tc-sector?section=${navItemEnum.entering_into_the_mainland_market}#0`,
            },
            {
              label: `CEPA Agreements`,
              link: `/tc-sector?section=${navItemEnum.entering_into_the_mainland_market}#1`,
            },
            {
              label: `Summary of CEPA Clauses Relating to Testing and Certification`,
              link: `/tc-sector?section=${navItemEnum.entering_into_the_mainland_market}#2`,
            },
            {
              label: `GBA Standard and Certification`,
              link: `/tc-sector?section=${navItemEnum.entering_into_the_mainland_market}#3`,
            },
          ],
        },
        {
          label: "Other Support",
          link: `/tc-sector?section=${navItemEnum.other_support}`,
        },
      ],

      secSubs: [
        {
          title: "Career & Education",
          link: `/career_and_education`,
          subs: [
            {
              label: "Career",
              link: `/career_and_education`,
              items: [
                {
                  label: "Career Development",
                  link: `/career_and_education?section=${navItemEnum.career_development}`,
                },
                {
                  label: "Career Opportunities",
                  link: `/career_and_education?section=${navItemEnum.career_opportunities}`,
                },
                {
                  label: "Other Professional Schemes",
                  link: `/career_and_education?section=${navItemEnum.other_professional_schemes}`,
                },
              ],
            },
            {
              label: "Education & Training",
              link: `/career_and_education`,
              items: [
                {
                  label: "Programmes and Courses",
                  link: `/career_and_education?section=${navItemEnum.programmes_and_courses}`,
                },
                {
                  label: "Learning and Teaching Resources",
                  link: `/career_and_education?section=${navItemEnum.learning_teaching_resources}`,
                },
                {
                  label: "Qualifications Framework",
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
      link: `/events-promotion`,
      subs: [
        {
          label: "Events",
          link: `/events-promotion?section=${navItemEnum.award_scheme}`,
          items: [
            {
              label: "T&C Manpower Development Award Scheme",
              link: `/events-promotion?section=${navItemEnum.award_scheme}`,
            },
            {
              label: "Seminars and Workshops",
              link: `/events-promotion?section=${navItemEnum.seminar_workshop}`,
            },
            {
              label: "Student Competitions",
              link: `/events-promotion?section=${navItemEnum.student_competition}`,
            },
          ],
        },
        {
          label: "Publications",
          link: `/events-promotion?section=${navItemEnum.hkctc_newsletter}`,
          items: [
            {
              label: "HKCTC Newsletter",
              link: `/events-promotion?section=${navItemEnum.hkctc_newsletter}`,
            },
            {
              label: "Pamphlets and Booklets",
              link: `/events-promotion?section=${navItemEnum.pamphlets_booklets}`,
            },
            {
              label: "Comics",
              link: `/events-promotion?section=${navItemEnum.comics}`,
            },
            {
              label: "Corruption Prevention Guide for T&C Industry",
              link: `/events-promotion?section=${navItemEnum.corruption_prevention}`,
            },
            {
              label: "Other Useful Information",
              link: `/events-promotion?section=${navItemEnum.useful_information}`,
            },
          ],
        },
        {
          label: "Reports",
          link: `/events-promotion?section=${navItemEnum.hkctc_reports}`,
          items: [
            {
              label: "HKCTC Reports",
              link: `/events-promotion?section=${navItemEnum.hkctc_reports}`,
            },
            {
              label: `Legislative Council Papers `,
              link: `/events-promotion?section=${navItemEnum.council_papers}`,
            },
          ],
        },
        {
          label: "News and Videos",
          link: `events-promotion?section=${navItemEnum.press_releases}`,
          items: [
            {
              label: "Press Releases",
              link: `events-promotion?section=${navItemEnum.press_releases}`,
            },
            {
              label: `Advertorials`,
              link: `events-promotion?section=${navItemEnum.advertorials}`,
            },
            {
              label: `Videos`,
              link: `events-promotion?section=${navItemEnum.videos}`,
            },
          ],
        },
      ],
    },
  ];

  const downsideLogos = [
    {
      logoSize: "h-[31px] w-[88px]",
      img: "w3c_logo.png",
      hyperlink: "http://www.w3.org/WAI/WCAG2AA-Conformance",
    },
    {
      logoSize: "h-[56px] w-[88px]",
      img: "WA_Gold_TC.png",
      hyperlink: "http://www.webforall.gov.hk/recognition_scheme",
    },

    {
      logoSize: "h-[48px] w-[120px]",
      img: "brandhk.png",
      hyperlink: "http://www.brandhk.gov.hk/html/en/index.html",
    },
    {
      logoSize: "h-[74px] w-[100px]",
      img: "SIPS_logo.png",
      hyperlink: "https://www.science.gov.hk/",
    },
    {
      logoSize: "h-[34px] w-[160px]",
      img: "IHHK_logo_tc.png",
      hyperlink: "https://www.innovationhub.hk/",
    },
  ];
  return (
    <footer>
      <div className="bg-newPrimary text-white px-[24px]">
        <div className="h-[100px] w-full flex justify-end items-end">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "14px",
              paddingRight: "72px",
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
                window.location.href = "https://www.instagram.com/hkctcgovhk/";
              }}
            />
            <Icon
              icon="fa6-brands:facebook-f"
              className="h-[32px] w-[32px] text-white cursor-pointer"
              onClick={() => {
                window.location.href = "https://www.facebook.com/hkctcgovhk";
              }}
            />
          </div>
        </div>
        <div className="h-[42px] w-full flex justify-center items-center">
          <div
            className="flex flex-row gap-[6px] items-center cursor-pointer"
            onClick={() => {
              setSitemapCollapsed(!sitemapCollapsed);
            }}
          >
            <p className="text-body-s">Sitemap</p>
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
                  {col.title}
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

                        {sub.label}
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
                              {item.label}
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
                        <p className="text-heading-l">{sec.title}</p>
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

                                {sub.label}
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
                                      {item.label}
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
      </div>
      <div className="bg-white h-[90px] flex items-center justify-center gap-[12px]">
        {downsideLogos.map((logo, index) => (
          <div
            className={logo.logoSize}
            key={index}
            onClick={() => {
              window.location.href = logo.hyperlink;
            }}
          >
            <img
              className="w-full h-auto object-fit cursor-pointer"
              src={`${process.env.PUBLIC_URL}/assets/footer/${logo.img}`}
              alt={logo.img}
            />
          </div>
        ))}
      </div>
      <div className="bg-[#333333] h-[50px] flex px-[24px] items-center">
        <p className="text-white text-body-s">
          {`Copyright © 2024 Hong Kong Council for Testing and Certification. All
          Rights Reserved`}
        </p>
      </div>
    </footer>
  );
};
