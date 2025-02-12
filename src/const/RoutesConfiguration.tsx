/**
 * This is a simple routing configuration for your React project.
 * Each route is defined with a `path`, `element` (the React component to render),
 * and an optional `description`. This allows easy maintenance and addition of new pages.
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
 *    - Optionally, add a `description` for better clarity.
 *    ```tsx
 *    import NewPageName from "../pages/NewPageName";
 *
 *    export const routesConfiguration: RouteConfig[] = [
 *      ... // Existing routes
 *      {
 *        path: "/new-page-name", // The URL path for the new page
 *        element: <NewPageName />, // The component to render when this route is matched
 *        description: "About New Page", // Optional description for clarity
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
  description?: string;
};

export const routesConfiguration: RouteConfig[] = [
  { path: "/", element: <Home />, description: "Homepage" },
  { path: "/hkctc", element: <Home />, description: "Homepage" },
  { path: "/general-public", element: <GeneralPublic />, description: "" },
  {
    path: "/educators-students",
    element: <EducatorsStudents />,
    description: "",
  },
  { path: "/industry", element: <Industry />, description: "" },
  { path: "/service-users", element: <ServiceUsers />, description: "" },
  { path: "/about-us", element: <AboutUs />, description: "" },
  { path: "/about-the-site", element: <AboutSite />, description: "" },

  { path: "/support", element: <Support />, description: "" },
  {
    path: "/support/agreement-clause",
    element: <AgreementClause />,
    description: "",
  },
  {
    path: "/support/CCC_testing",
    element: <CCCTesting />,
    description: "China Compulsory Certification (CCC) Testing",
  },
  {
    path: "/support/international_multilateral_systems_on_mutual_recognition",
    element: <InternationalMultilateralSystems />,
    description: "International Multilateral Systems on Mutual Recognition",
  },
  {
    path: "/career_and_education",
    element: <CareerEducation />,
    description: "Career & Education",
  },
  {
    path: "/events-promotion",
    element: <EventsPromotion />,
    description: "",
  },
  {
    path: "/events-promotion/award-scheme2324",
    element: <AwardScheme23to24 />,
    description: "",
  },
  {
    path: "/events-promotion/award-scheme2122",
    element: <AwardScheme21to22 />,
    description: "",
  },
  {
    path: "/events-promotion/seminars-registration",
    element: <SeminarsRegistration />,
    description: "",
  },
  { path: "/tc-sector", element: <TCSector />, description: "" },

  {
    path: "/tc-sector/toys_and_children_products",
    element: <ToysChildrenProducts />,
    description: `Toys and Children's Products`,
  },

  {
    path: "/tc-sector/textiles_and_apparel",
    element: <TextilesAndApparel />,
    description: `Textiles and Apparel`,
  },

  {
    path: "/tc-sector/electrical_and_electronic_products",
    element: <ElectricalElectronicProducts />,
    description: `Electrical and Electronic Products`,
  },
  {
    path: "/tc-sector/construction_materials_and_buildings",
    element: <ConstructionMaterialsBuildings />,
    description: `Construction Materials and Buildings`,
  },
  {
    path: "/tc-sector/medical_testing",
    element: <MedicalTesting />,
    description: `Medical Testing`,
  },
  {
    path: "/tc-sector/chinese_medicines",
    element: <ChineseMedicines />,
    description: `Chinese Medicines`,
  },
  {
    path: "/tc-sector/jewellery",
    element: <Jewellery />,
    description: `Jewellery`,
  },
  {
    path: "/tc-sector/food",
    element: <Food />,
    description: `Food`,
  },
  {
    path: "/tc-sector/environmental_protection",
    element: <EnvironmentalProtection />,
    description: `Environmental Protection`,
  },
  {
    path: "/tc-sector/information_and_communications_technologies",
    element: <InformationAndCommunicationsTechnologies />,
    description: "Information and Communications Technologies",
  },
  { path: "/whats-new", element: <WhatsNew />, description: "" },
  {
    path: "/resources-reports",
    element: <ResourcesReports />,
    description: "",
  },
];
