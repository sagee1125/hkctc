import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  BannerPhotoBox,
  Breadcrumb,
  MultipleSidebars,
  fullContainer,
  maxContainer,
} from "../../components";
import {
  type NavData,
  type NavItems,
  type SubItems,
  NavigationBarConfiguration,
  navItemEnum,
} from "../../const";

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
    component: <>1</>,
  },
  [navItemEnum.career_opportunities]: {
    bannerImage: "careerEducation/career_opportunities.png",
    component: <>2</>,
  },
  [navItemEnum.other_professional_schemes]: {
    bannerImage: "careerEducation/other_professional_schemes.png",
    component: <>3</>,
  },

  // education
  [navItemEnum.programmes_and_courses]: {
    bannerImage: "careerEducation/programmes_and_courses.png",
    component: <>4</>,
  },
  [navItemEnum.learning_teaching_resources]: {
    bannerImage: "careerEducation/learning_teaching_resources.png",
    component: <>5</>,
  },
  [navItemEnum.qualifications_framework]: {
    bannerImage: "careerEducation/qualifications_framework.png",
    component: <>6</>,
  },
};

const sidebarKeys = [
  // events
  navItemEnum.award_scheme,
  navItemEnum.seminar_workshop,
  navItemEnum.student_competition,
  // publications
  navItemEnum.hkctc_newsletter,
  navItemEnum.pamphlets_booklets,
  navItemEnum.comics,
  navItemEnum.corruption_prevention,
  navItemEnum.useful_information,
];

export const CareerEducation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

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
      sidebarItems: careersItems,
    },
    {
      title: "Education & Training",
      sidebarItems: educationItem,
    },
  ];

  const activeSidebarItemsLabel = sidebarData
    .map((section) =>
      section.sidebarItems.find((item) => item.enum === activeItem)
    )
    .find((matchedItem) => matchedItem !== undefined)?.subTitle;

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
    { label: "Home", href: "/" },
    {
      label: "Career & Education",
      href: `/career_and_education?section=${navItemEnum.career_development}`,
    },
    {
      label: activeSidebarItemsLabel ?? "",
    },
  ];
  return (
    <div style={fullContainer}>
      {bannerImage && <BannerPhotoBox src={bannerImage} />}
      <div style={maxContainer}>
        <div id="breadcrumb">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="w-full flex flex-row pt-[48px] pr-[24px]">
          <div className="px-[24px] min-w-[440px] w-1/3">
            <MultipleSidebars
              sidebars={sidebarData}
              activatedItems={activeItem}
              setActivatedItems={handleChangeSidebar}
            />
          </div>
          <div className="flex-1">{component}</div>
        </div>
      </div>
    </div>
  );
};
