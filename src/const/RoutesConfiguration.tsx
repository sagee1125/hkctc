/**
 * This is a simple routing configuration for your React project.
 * Each route is defined with a `path`, `element` (the React component to render),
 * and an optional `title`. This allows easy maintenance and addition of new pages.
 *
 * ### How to Add a New Route for a New Page:
 *
 * 1. **Create a New Page Component**:
 *    - First, create a new React component for the page you want to add.
 *    - Save it in the `pages` folder.
 *    - For example, if you want to add a page for "New Page", create a new file `NewPageName.tsx` and define your React component inside it.
 *    ```tsx
 *    // pages/NewPageName.tsx
 *
 *    import React from "react";
 *    const NewPageName = () => {
 *      return <div>Your HTML</div>;
 *    };
 *    export default NewPageName;
 *    ```
 *
 * 2. **Update the Routes Configuration**:
 *    - In the `routesConfiguration` array, add a new object for your page.
 *    - Set the `path` to the URL path where you want this page to be accessed.
 *    - Set the `element` to the component you just created.
 *    - Optionally, add a `title` for better clarity.
 *    ```tsx
 *    import NewPageName from "../pages/NewPageName";
 *
 *    export const routesConfiguration: RouteConfig[] = [
 *      ... // Existing routes
 *      {
 *        path: "/new-page-name", // The URL path for the new page
 *        element: <NewPageName />, // The component to render when this route is matched
 *        title: "About New Page", // Optional title for clarity
 *      },
 *    ];
 *    ```
 *
 * 3. **Navigate to the New Page**:
 *    - Now that the route is added, you can navigate to it using a `<Link>` component or programmatically with `useNavigate` from `react-router-dom`.
 *    - Example:
 *    ```tsx
 *    import { Link } from "react-router-dom";
 *    // Add a link to navigate to the new page
 *    <Link to="/new-page-name">About New Page</Link>
 *    ```
 *
 * ### Configuration Flexibility:
 * - The route configuration is flexible and can be easily modified. You can add, remove, or modify routes without touching the core application logic.
 * - This setup is ideal for clients who want a simple and maintainable solution for managing multiple pages.
 *
 * ### Notes for Maintenance:
 * - Always ensure that the component path (`element`) points to the correct page file.
 */

import React from "react";
import {
  EducatorsStudents,
  GeneralPublic,
  Home,
  Industry,
  ResourcesReports,
  ServiceUsers,
  Support,
  AboutUs,
  CCCTesting,
  InternationalMultilateralSystems,
  WhatsNew,
  ToysChildrenProducts,
  TextilesAndApparel,
  ElectricalElectronicProducts,
  ConstructionMaterialsBuildings,
  MedicalTesting,
  ChineseMedicines,
  Jewellery,
  EnvironmentalProtection,
  InformationAndCommunicationsTechnologies,
  Food,
} from "../pages";
import { TCSector } from "../pages/TCSector/TCSector";
import { AboutSite } from "../pages/AboutSite/AboutSite";
import { EventsPromotion } from "../pages/EventsPromotion/EventsPromotion";
import {
  AwardScheme23to24,
  AwardScheme21to22,
} from "../pages/EventsPromotion/EventsLanding";
import { CareerEducation } from "../pages/CareerEducation/CareerEducation";
import { AgreementClause } from "../pages/Support/EnteringIntoTheMainlandMarket/AgreementClause";
import { SeminarsRegistration } from "../pages/EventsPromotion/EventsLanding/SeminarsWorkshops/SeminarsRegistration";

export type RouteConfig = {
  path: string;
  element: React.ReactNode;
  title: string;
  titleCN?: string; // Tradition Chinese
};

export const routesConfiguration: RouteConfig[] = [
  { path: "/", element: <Home />, title: "Homepage", titleCN: "主頁" },
  { path: "/hkctc", element: <Home />, title: "Homepage", titleCN: "主頁" },
  {
    path: "/general-public",
    element: <GeneralPublic />,
    title: "General Public",
    titleCN: "公眾人士",
  },
  {
    path: "/educators-students",
    element: <EducatorsStudents />,
    title: "Educators & Students",
    titleCN: "老師與學生",
  },
  {
    path: "/industry",
    element: <Industry />,
    title: "T&C Bodies & Practitioners",
    titleCN: "檢測認證機構及從業員",
  },
  {
    path: "/service-users",
    element: <ServiceUsers />,
    title: "T&C Service Users",
    titleCN: "檢測認證服務使用者",
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    title: "About HKCTC",
    titleCN: "關於我們",
  },
  {
    path: "/about-the-site",
    element: <AboutSite />,
    title: "About the Site",
    titleCN: "關於本網站",
  },

  { path: "/support", element: <Support />, title: "Support", titleCN: "支援" },
  {
    path: "/support/agreement-clause",
    element: <AgreementClause />,
    title: "Clauses",
    titleCN: "有關條文",
  },
  {
    path: "/support/CCC_testing",
    element: <CCCTesting />,
    title: "China Compulsory Certification (CCC) Testing",
    titleCN: "中國強制性產品認證（CCC）檢測",
  },
  {
    path: "/support/international_multilateral_systems_on_mutual_recognition",
    element: <InternationalMultilateralSystems />,
    title: "International Multilateral Systems on Mutual Recognition",
    titleCN: "國際多邊互認體系",
  },
  {
    path: "/career_and_education",
    element: <CareerEducation />,
    title: "Career & Education",
    titleCN: "職業與教育",
  },
  {
    path: "/events-promotion",
    element: <EventsPromotion />,
    title: "Events & Promotions",
    titleCN: "活動與宣傳",
  },
  {
    path: "/events-promotion/award-scheme2324",
    element: <AwardScheme23to24 />,
    title: "List of Awardees/ Award Ceremony 2023-2024",
    titleCN: "2023-2024年度得獎名單/ 頒獎典禮",
  },
  {
    path: "/events-promotion/award-scheme2122",
    element: <AwardScheme21to22 />,
    title: "List of Awardees/ Award Ceremony 2021-2022",
    titleCN: "2021-2022年度得獎名單/ 頒獎典禮",
  },
  {
    path: "/events-promotion/seminars-registration",
    element: <SeminarsRegistration />,
    title: "Register for New Seminars",
    titleCN: "註冊參加研討會",
  },
  {
    path: "/tc-sector",
    element: <TCSector />,
    title: "About T&C Industry",
    titleCN: "關於檢測認證業",
  },

  {
    path: "/tc-sector/toys_and_children_products",
    element: <ToysChildrenProducts />,
    title: `About T&C Industry - Toys and Children's Products`,
    titleCN: `關於檢測認證業 - 玩具及兒童產品`,
  },

  {
    path: "/tc-sector/textiles_and_apparel",
    element: <TextilesAndApparel />,
    title: `About T&C Industry - Textiles and Apparel`,
    titleCN: `關於檢測認證業 - 紡織與成衣`,
  },

  {
    path: "/tc-sector/electrical_and_electronic_products",
    element: <ElectricalElectronicProducts />,
    title: `About T&C Industry - Electrical and Electronic Products`,
    titleCN: `關於檢測認證業 - 電氣及電子產品`,
  },
  {
    path: "/tc-sector/construction_materials_and_buildings",
    element: <ConstructionMaterialsBuildings />,
    title: `About T&C Industry - Construction Materials and Buildings`,
    titleCN: `關於檢測認證業 - 樓宇及建築材料`,
  },
  {
    path: "/tc-sector/medical_testing",
    element: <MedicalTesting />,
    title: `About T&C Industry - Medical Testing`,
    titleCN: `關於檢測認證業 - 醫務化驗`,
  },
  {
    path: "/tc-sector/chinese_medicines",
    element: <ChineseMedicines />,
    title: `About T&C Industry - Chinese Medicines`,
    titleCN: `關於檢測認證業 - 中藥`,
  },
  {
    path: "/tc-sector/jewellery",
    element: <Jewellery />,
    title: `About T&C Industry - Jewellery`,
    titleCN: `關於檢測認證業 - 珠寶`,
  },
  {
    path: "/tc-sector/food",
    element: <Food />,
    title: `About T&C Industry - Food`,
    titleCN: `關於檢測認證業 - 食品`,
  },
  {
    path: "/tc-sector/environmental_protection",
    element: <EnvironmentalProtection />,
    title: `About T&C Industry - Environmental Protection`,
    titleCN: `關於檢測認證業 - 環保`,
  },
  {
    path: "/tc-sector/information_and_communications_technologies",
    element: <InformationAndCommunicationsTechnologies />,
    title: "About T&C Industry - Information and Communications Technologies",
    titleCN: `關於檢測認證業 - 資訊及通訊科技`,
  },
  {
    path: "/whats-new",
    element: <WhatsNew />,
    title: "What’s New",
    titleCN: `最新消息`,
  },
  {
    path: "/resources-reports",
    element: <ResourcesReports />,
    title: "Resources",
    titleCN: `資源`,
  },
];
