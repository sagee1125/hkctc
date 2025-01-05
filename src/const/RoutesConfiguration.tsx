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
  AwardScheme,
  EducatorsStudents,
  EventsLanding,
  GeneralPublic,
  ProfileAndRole,
  Home,
  Industry,
  ResourcesReports,
  SeminarsWorkshops,
  ServiceUsers,
  StudentCompetitions,
  Support,
  AboutUs,
  AgreementOnTradeInServicesClauses,
  AgreementOnTradeInGoodsClauses,
  AgreementOnEconomicTechnicalCooperationClauses,
} from "../pages";

export type RouteConfig = {
  path: string;
  element: React.ReactNode;
  description?: string;
};

export const routesConfiguration: RouteConfig[] = [
  { path: "/hkctc", element: <Home />, description: "home page" },
  { path: "/general-public", element: <GeneralPublic />, description: "" },
  {
    path: "/educators-students",
    element: <EducatorsStudents />,
    description: "",
  },
  { path: "/industry", element: <Industry />, description: "" },
  { path: "/service-users", element: <ServiceUsers />, description: "" },
  { path: "/about-us", element: <AboutUs />, description: "" },

  { path: "/support", element: <Support />, description: "" },
  {
    path: "/support/agreement_on_trade_in_services_clauses",
    element: <AgreementOnTradeInServicesClauses />,
    description: "",
  },

  {
    path: "/support/agreement_on_trade_in_goods_clauses",
    element: <AgreementOnTradeInGoodsClauses />,
    description: "",
  },
  {
    path: "/support/agreement_on_economic&technical_cooperation_clauses",
    element: <AgreementOnEconomicTechnicalCooperationClauses />,
    description: "",
  },
  { path: "/events-landing", element: <EventsLanding />, description: "" },
  {
    path: "/events-landing/award-scheme",
    element: <AwardScheme />,
    description: "",
  },
  { path: "/profile-and-role", element: <ProfileAndRole />, description: "" },
  {
    path: "/seminars-workshops",
    element: <SeminarsWorkshops />,
    description: "",
  },
  {
    path: "/student-competitions",
    element: <StudentCompetitions />,
    description: "",
  },
  {
    path: "/resources-reports",
    element: <ResourcesReports />,
    description: "",
  },
];
