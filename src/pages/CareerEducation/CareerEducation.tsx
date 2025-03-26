import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  BannerPhotoBox,
  Breadcrumb,
  type BreadcrumbItem,
  MultipleSidebars,
  fullContainer,
  maxMobileContainer,
  maxPCContainer,
} from "../../components";
import {
  type NavData,
  type NavItems,
  type SubItems,
  NavigationBarConfiguration,
  navItemEnum,
} from "../../const";
import { CareerDevelopment } from "./CareerDevelopment/CareerDevelopment";
import { OtherProfessionalSchemes } from "./OtherProfessionalSchemes/OtherProfessionalSchemes";
import { CareerOpportunities } from "./CareerOpportunities/CareerOpportunities";
import { ProgrammesCourses } from "./ProgrammesCourses/ProgrammesCourses";
import { QualificationsFramework } from "./QualificationsFramework/QualificationsFramework";
import { LearningTeachingResources } from "./LearningTeachingResources/LearningTeachingResources";
import { Language, useSettings } from "../../context";

const sidebarComponent: Partial<
  Record<
    navItemEnum,
    {
      bannerImage: string;
      component: React.ReactNode;
    }
  >
> = {
  // career
  [navItemEnum.career_development]: {
    bannerImage: "careerEducation/career_development.png",
    component: <CareerDevelopment />,
  },
  [navItemEnum.career_opportunities]: {
    bannerImage: "careerEducation/career_opportunities.png",
    component: <CareerOpportunities />,
  },
  [navItemEnum.other_professional_schemes]: {
    bannerImage: "careerEducation/other_professional_schemes.png",
    component: <OtherProfessionalSchemes />,
  },

  // education
  [navItemEnum.programmes_and_courses]: {
    bannerImage: "careerEducation/programmes_and_courses.png",
    component: <ProgrammesCourses />,
  },
  [navItemEnum.learning_teaching_resources]: {
    bannerImage: "careerEducation/learning_teaching_resources.png",
    component: <LearningTeachingResources />,
  },
  [navItemEnum.qualifications_framework]: {
    bannerImage: "careerEducation/qualifications_framework.png",
    component: <QualificationsFramework />,
  },
};

const sidebarKeys = Object.keys(
  sidebarComponent
) as (keyof typeof sidebarComponent)[];

const multilingual = {
  en: {
    home: "Home",
    career_development: "Career & Education",
  },

  cn: {
    home: "主頁",
    career_development: "職業與教育",
  },
};

export const CareerEducation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const { isPC, getPageText, getSingleText } = useSettings();

  const page_text = getPageText(multilingual);

  const { home, career_development } = page_text;
  const initialSection = queryParams.get("section") ?? "";

  const initialParam: navItemEnum = sidebarKeys.includes(
    initialSection as navItemEnum
  )
    ? (initialSection as navItemEnum)
    : navItemEnum.career_development;

  const [activeItem, setActiveItem] = useState<navItemEnum>(initialParam);

  useEffect(() => {
    if (initialParam !== activeItem) {
      navigate(`?section=${initialParam}`);

      setActiveItem(initialParam);
    }
  }, [initialParam, navigate]);

  const careersItems: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === "Career & Education"
    )
      ?.items.find((subNav: NavItems) => subNav.name === "Careers")
      ?.subItems?.filter((item) => item.enum) ?? [];

  const educationItem: SubItems[] =
    NavigationBarConfiguration.find(
      (nav: NavData) => nav.title === "Career & Education"
    )
      ?.items.find((subNav: NavItems) => subNav.name === "Education & Training")
      ?.subItems?.filter((item) => item.enum) ?? [];

  const sidebarData = [
    {
      title: "Careers",
      titleCN: "職業",
      sidebarItems: careersItems,
    },
    {
      title: "Education & Training",
      titleCN: "教育及培訓",
      sidebarItems: educationItem,
    },
  ];
  const { title, titleCN } = sidebarData.filter((section) =>
    section.sidebarItems.find((item) => item.enum === activeItem)
  )?.[0];
  const activeSidebarItemsLabel = getSingleText(title, titleCN);
  const firstActiveItem = sidebarData
    .map((section) =>
      section.sidebarItems.find((item) => item.enum === activeItem)
    )
    .find((matchedItem) => matchedItem !== undefined);

  const firstActiveItemEnum = firstActiveItem?.enum;
  const activeSidebarItemsSubLabel = getSingleText(
    firstActiveItem?.subTitle ?? "",
    firstActiveItem?.subTitleCN ?? ""
  );

  const handleChangeSidebar = (item: string) => {
    setActiveItem(item as navItemEnum);
    const element = document.getElementById("breadcrumb");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    navigate(`?section=${item}`);
  };

  const component = sidebarComponent[activeItem]?.component;
  const bannerImage = sidebarComponent[activeItem]?.bannerImage ?? "";
  const breadcrumbItems = [
    { label: home, href: "/" },
    {
      label: career_development,
      href: `/career_and_education?section=${navItemEnum.career_development}`,
    },
    {
      label: activeSidebarItemsLabel,
      href: `/career_and_education?section=${firstActiveItemEnum}`,
    },
    {
      label: activeSidebarItemsSubLabel ?? "",
    },
  ];

  const multipleSidebars = (
    <MultipleSidebars
      sidebars={sidebarData}
      activatedItems={activeItem}
      setActivatedItems={handleChangeSidebar}
    />
  );

  return (
    <div style={fullContainer}>
      {bannerImage && <BannerPhotoBox src={bannerImage} />}
      <div style={isPC ? maxPCContainer : maxMobileContainer}>
        {isPC && (
          <div id="breadcrumb">
            <Breadcrumb items={breadcrumbItems as BreadcrumbItem[]} />
          </div>
        )}

        {isPC ? (
          <div className="w-full flex flex-row pt-[48px] pr-[24px]">
            <div className="px-[24px] min-w-[440px] w-1/3">
              {multipleSidebars}
            </div>
            <div className="flex-1">{component}</div>
          </div>
        ) : (
          <div className="p-[24px] flex flex-col gap-[24px]">
            <div>{multipleSidebars}</div>
            <div className="pr-[24px]">{component}</div>
          </div>
        )}
      </div>
    </div>
  );
};
