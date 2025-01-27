import React from "react";
import { Icon } from "@iconify/react";
import { FileTemplateTitleCenter, SquareTitle } from "../../../components";
import { useNavigate } from "react-router-dom";
import { navItemEnum } from "../../../const";

type RelatedLinks = {
  title: string;
  imgUrl: string;
  nav: string;
};

export const CareerDevelopment: React.FC = () => {
  const navigate = useNavigate();

  const careerDev: RelatedLinks[] = [
    {
      title: "Profile and Role of Testing and Certification Sector",
      imgUrl: "Profile_and_Role.png",
      nav: `/tc-sector?section=${navItemEnum.profile_and_role}`,
    },
    {
      title: "Strengths of Hong Kong's Testing and Certification Sector",
      imgUrl: "Strengths.png",
      nav: `/tc-sector?section=${navItemEnum.tc_sector_strengths}`,
    },
    {
      title: "Services Provided by Testing and Certification Sector",
      imgUrl: "Services_Provided.png",
      nav: `/tc-sector?section=${navItemEnum.services_provided}`,
    },
  ];

  const relatedLinks: RelatedLinks[] = [
    {
      title:
        "List of Tertiary Programmes Dedicated to Testing and Certification",
      imgUrl: "Programmes_and_Courses.png",
      nav: `/career_and_education?section=${navItemEnum.programmes_and_courses}`,
    },
    {
      title: "Professional Certification Scheme for Testing Personnel",
      imgUrl: "Other_Professional_Schemes.png",
      nav: `/career_and_education?section=${navItemEnum.other_professional_schemes}`,
    },
    {
      title: "Qualifications Framework",
      imgUrl: "Qualifications_Framework.png",
      nav: `/career_and_education?section=${navItemEnum.qualifications_framework}`,
    },
  ];

  const resourcesData: Array<{
    title: string;
    imgUrl: string;
    link: string;
    iconPath: string;
  }> = [
    {
      title: "Testing and Certification Create Your Future",
      imgUrl: "TestingPdf.png",
      iconPath: "PDF.png",
      link: "https://www.hkctc.gov.hk/en/doc/brochure_e.pdf",
    },
    {
      title: "認識檢測和認證業 (Chinese Version Only)",
      imgUrl: "TestingPdf_Chinese.png",
      iconPath: "PDF.png",
      link: "https://www.hkctc.gov.hk/tc/doc/brochure_b.pdf",
    },
    {
      title: "檢測認證青雲路 (Chinese Version Only)",
      imgUrl: "QYL.png",
      iconPath: "PDF.png",
      link: "https://www.hkctc.gov.hk/tc/doc/brochure_c.pdf",
    },
    {
      title: "檢測認證工作透視 (Chinese Version Only)",
      imgUrl: "toushi.png",
      iconPath: "PDF.png",
      link: "https://www.hkctc.gov.hk/tc/doc/brochure_d.pdf",
    },
    {
      title: "Career Development in Testing and Certification Sector",
      imgUrl: "defaultCover.png",
      iconPath: "PDF.png",
      link: "https://www.hkctc.gov.hk/en/doc/pamphlet_a.pdf",
    },
    {
      title: "Testing and Certification Create Your Future",
      imgUrl: "defaultCover.png",
      iconPath: "VIDEO.png",
      link: "https://www.youtube.com/embed/GDuq9I9J9IU",
    },
    {
      title: "Young Testing and Certification Practitioners Talks",
      imgUrl: "defaultCover.png",
      iconPath: "VIDEO.png",
      link: "https://www.youtube.com/embed/_baqA4hraQc",
    },

    {
      title:
        "Know More About T&C (1): Electronic Product Testing & Food Management System Certification",
      imgUrl: "defaultCover.png",
      iconPath: "VIDEO.png",
      link: "https://www.youtube.com/embed/ly4dgf0K6Gc",
    },
    {
      title:
        "Know More About T&C (2): Textile Testing & Construction Materials Product Certification",
      imgUrl: "defaultCover.png",
      iconPath: "VIDEO.png",
      link: "https://www.youtube.com/embed/2P9Vbmh4Wok",
    },
    {
      title:
        "Know More About T&C (3): Building / Construction Testing and Indoor Air Quality Inspection",
      imgUrl: "defaultCover.png",
      iconPath: "VIDEO.png",
      link: "https://www.youtube.com/embed/lph2_v1FTwU",
    },
  ];

  return (
    <div className="w-full flex flex-row gap-[24px] pr-[24px]">
      <div className="flex-1">
        <SquareTitle title="Career Development" />

        <div className="my-[24px]">
          <p className="text-body-m">
            Testing and certification play a crucial role in our daily life.
            They provide assurance on the quality and safety of products and
            services for a wide spectrum of industries.
            <br />
            <br />
            The demand for quality products and services has never been higher.
            Given the growing need for testing and certification services, the
            testing and certification sector has a keen demand for talent.
            Pursuing a career in testing and certification will bring you a wide
            range of opportunities!
          </p>
        </div>
        <div>
          {careerDev.map((item, index) => {
            const { title, imgUrl, nav } = item;
            return (
              <div
                key={index}
                className="flex flex-row items-center h-[90px] gap-[24px] mb-[24px] cursor-pointer"
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
                <div className="text-highlight-m text-black py-[8px] pr-[16px] w-[414px]">
                  {title}
                </div>
                <Icon
                  icon="teenyicons:right-outline"
                  style={{ height: "16px", width: "16px", strokeWidth: "2px" }}
                />
              </div>
            );
          })}
        </div>
        <hr className="my-[24px] text-[#E0E0E0]" />

        <p className="text-heading-l">
          How to prepare yourself to join the testing and certification sector
        </p>
        <p className="text-heading-m my-[24px] text-trustfulBlue">
          At the senior secondary level
        </p>
        <div className="mt-[24px] border-[1px] border-[#E0E0E0] py-[24px] px-[36px]">
          <div className="flex flex-row gap-[24px] items-center w-full">
            <img
              className="w-[32px] h-[32px] flex-shrink-0"
              src={`${process.env.PUBLIC_URL}/assets/icons/blue-tick.svg`}
              alt={"tick"}
            />
            <p className="text-highlight-m flex-grow min-w-0">
              To be proficient in languages and scientific thinking
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
            <p className="text-highlight-m flex-grow min-w-0">
              To study at least one science subject, e.g. Biology, Chemistry,
              Physics, Combined Science, Integrated Science, etc.
            </p>
          </div>
        </div>
        <p className="text-heading-m my-[24px] text-trustfulBlue">
          At the post-secondary / university level{" "}
        </p>

        <div className="mt-[24px] border-[1px] border-[#E0E0E0] py-[24px] px-[36px]">
          <div className="flex flex-row gap-[24px] items-center w-full">
            <img
              className="w-[32px] h-[32px] flex-shrink-0"
              src={`${process.env.PUBLIC_URL}/assets/icons/blue-tick.svg`}
              alt={"tick"}
            />
            <p className="text-highlight-m flex-grow min-w-0">
              Examples of major: Science, Engineering, Testing and
              Certification, Applied Science, Fashion and Textiles, etc.{" "}
            </p>
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

        <p className="text-heading-l">Related Links</p>
        <div className="mt-[24px]">
          {relatedLinks.map((item, index) => {
            const { title, imgUrl, nav } = item;
            return (
              <div
                key={index}
                className="flex flex-row items-center h-[90px] gap-[24px] mb-[24px] cursor-pointer"
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
                <div className="text-highlight-m text-black py-[8px] pr-[16px] w-[414px]">
                  {title}
                </div>
                <Icon
                  icon="teenyicons:right-outline"
                  style={{ height: "16px", width: "16px", strokeWidth: "2px" }}
                />
              </div>
            );
          })}
        </div>

        <hr className="my-[24px] text-[#E0E0E0]" />

        <p className="text-heading-l">Resources</p>
        <div className="mt-[24px]">
          <div className="grid grid-cols-2 gap-[24px]">
            {resourcesData.map((item, index) => {
              const { title, imgUrl, link, iconPath } = item;
              return (
                <div
                  key={index}
                  className="flex flex-row items-center h-[90px] gap-[24px] cursor-pointer"
                  onClick={() => {
                    window.open(link, "_blank");
                  }}
                >
                  <FileTemplateTitleCenter
                    title={title}
                    imagePath={"assets/careerEducation/" + imgUrl}
                    iconPath={iconPath}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
