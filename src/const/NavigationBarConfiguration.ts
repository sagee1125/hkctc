/**
 * Navigation Bar Configuration
 *
 * The following NavigationBarConfiguration defines the structure for the navigation bar, including top-level titles,
 * sidebar toggles, and nested items for each section. Each configuration is designed
 * to display in a structured, user-friendly format.
 *
 * ### Key Structure:
 * - `title`: The main title displayed on the navigation bar.
 * - `showSidebar`: Boolean flag to determine if the sidebar should be shown when
 *   the section is expanded.
 * - `items`: An array of modules displayed when a section is expanded. Each module includes:
 *   - `name`: The module's title (not directly displayed on the navigation bar).
 *   - `subItems`: An array of 5 elements, where each element represents a submodule.
 *       * `subTitle`: Subtitle for the submodule (can be empty if not in use).
 *       * `imgUrl`: Path to the main image for the submodule. It **must** be located in  `public/assets/images`.
 *       * `navUrl`: URL for redirection when the submodule is clicked. It can be empty if no redirection is needed.
 *       * The `subItems` array **must have exactly 5 elements** (to align with UI constraints). If fewer are needed,
 *         use empty objects as placeholders.
 *
 * Example `subItems`:
 * ```json
 * [
 *   { subTitle: "Example 1", imgUrl: "example1.png", navUrl: "example1" },
 *   { subTitle: "", imgUrl: "", navUrl: "" },
 *   { subTitle: "", imgUrl: "", navUrl: "" },
 *   { subTitle: "", imgUrl: "", navUrl: "" },
 *   { subTitle: "", imgUrl: "", navUrl: "" }
 * ]
 * ```
 *
 * ### Guidelines for Maintenance:
 * 1. **Adding/Removing Sections**:
 *    - To add a new section, include a new object in the `navData` array with the required structure.
 *    - To remove a section, simply delete the corresponding object.
 *
 * 2. **Validating `imgUrl` Paths**:
 *    - Ensure all images are stored under `public/assets/images` to prevent missing images on the UI.
 *    - Use a script or automated linter to validate that all `imgUrl` values point to existing files.
 *
 *
 * By adhering to this structure and the maintenance guidelines, future updates to the navigation bar
 * will be seamless and efficient.
 */

export enum navItemEnum {
  // support
  exhibition_programme = "exhibition_programme",
  funding_schemes = "funding_schemes",
  tcjs = "tcjs",
  accommodation_and_land = "accommodation_and_land",
  entering_into_the_mainland_market = "entering_into_the_mainland_market",
  other_support = "other_support",
  // t&c sector
  profile_and_role = "profile_and_role",
  tc_sector_strengths = "tc_sector_strengths",
  services_provided = "services_provided",
  different_business_areas = "different_business_areas",
  accreditation_services = "accreditation_services",
  // Careers
  career_development = "career_development",
  career_opportunities = "career_opportunities",
  other_professional_schemes = "other_professional_schemes",
  // Education & Training
  education_training = "education_training",
}

export type SubItems = {
  enum: navItemEnum | "";
  subTitle: string;
  imgUrl: string;
  navUrl?: string;
};

export type NavItems = {
  name: string;
  subItems: SubItems[];
};
export type NavData = {
  id?: string;
  title: string;
  showSidebar: boolean;
  items: NavItems[];
  navUrl?: string;
};

export const NavigationBarConfiguration: NavData[] = [
  {
    title: "About Us",
    showSidebar: false,
    items: [],
    navUrl: "about-us",
  },
  {
    title: "T&C Sector",
    showSidebar: true,
    items: [
      {
        name: "Introducing the Testing and Certificate sector, and what service we can provide",
        subItems: [
          {
            enum: navItemEnum.profile_and_role,
            subTitle: "Profile and Role of T&C Sector",
            imgUrl: "Profile_and_Role.png",
            navUrl: `/tc-sector?section=${navItemEnum.profile_and_role}`,
          },
          {
            enum: navItemEnum.tc_sector_strengths,
            subTitle: "Strengths of Hong Kong's T&C Sector",
            imgUrl: "Strengths.png",
            navUrl: `/tc-sector?section=${navItemEnum.tc_sector_strengths}`,
          },
          {
            enum: navItemEnum.services_provided,
            subTitle: "Services Provided by T&C Sector",
            imgUrl: "Services_Provided.png",
            navUrl: `/tc-sector?section=${navItemEnum.services_provided}`,
          },
          {
            enum: navItemEnum.different_business_areas,
            subTitle: "Services for Different Business Areas",
            imgUrl: "Business_Areas.png",
            navUrl: `/tc-sector?section=${navItemEnum.different_business_areas}`,
          },
          {
            enum: navItemEnum.accreditation_services,
            subTitle: "Accreditation Services",
            imgUrl: "Accreditation_Services.png",
            navUrl: `/tc-sector?section=${navItemEnum.accreditation_services}`,
          },
        ],
      },
    ],
  },
  {
    title: "Support",
    showSidebar: false,
    items: [
      {
        name: "Events",
        subItems: [
          {
            enum: navItemEnum.exhibition_programme,
            subTitle: "HKCTC Exhibition Programme",
            imgUrl: "exhibition_programme.png",
            navUrl: `/support?section=${navItemEnum.exhibition_programme}`,
          },
          {
            enum: navItemEnum.funding_schemes,
            subTitle: "Funding Schemes",
            imgUrl: "funding_schemes.png",
            navUrl: `/support?section=${navItemEnum.funding_schemes}`,
          },
          {
            enum: navItemEnum.tcjs,
            subTitle:
              "Testing and Certification Sector Job Creation Scheme (TCJS)",
            imgUrl: "tcjs.png",
            navUrl: `/support?section=${navItemEnum.tcjs}`,
          },
          {
            enum: navItemEnum.accommodation_and_land,
            subTitle: "Accommodation and Land",
            imgUrl: "accommodation_and_land.png",
            navUrl: `/support?section=${navItemEnum.accommodation_and_land}`,
          },
          {
            enum: navItemEnum.entering_into_the_mainland_market,
            subTitle: "Entering into the Mainland Market",
            imgUrl: "entering_into_the_mainland_market.png",
            navUrl: `/support?section=${navItemEnum.entering_into_the_mainland_market}`,
          },
          {
            enum: navItemEnum.other_support,
            subTitle: "Other Support",
            imgUrl: "other_support.png",
            navUrl: `/support?section=${navItemEnum.other_support}`,
          },
        ],
      },
    ],
  },
  {
    title: "Career & Education",
    showSidebar: true,
    items: [
      {
        name: "Careers",
        subItems: [
          {
            enum: navItemEnum.career_development,
            subTitle: "Career Development",
            imgUrl: "Career_Development.png",
            navUrl: "",
          },
          {
            enum: navItemEnum.career_opportunities,
            subTitle: "Career Opportunities",
            imgUrl: "Career_Opportunities.png",
            navUrl: "",
          },
          {
            enum: navItemEnum.other_professional_schemes,
            subTitle: "Other Professional Schemes",
            imgUrl: "Other_Professional_Schemes.png",
            navUrl: "",
          },
          {
            enum: "",
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          { enum: "", subTitle: "", imgUrl: "", navUrl: "" },
        ],
      },
      {
        name: "Education & Training",
        subItems: [
          {
            enum: navItemEnum.education_training,
            subTitle: "Programmes and Courses",
            imgUrl: "Programmes_and_Courses.png",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "Learning and Teaching Resources",
            imgUrl: "Learning_and_Teaching_Resources.png",
            navUrl: "",
          },
          {
            enum: "",
            subTitle: "Qualifications Framework",
            imgUrl: "Qualifications_Framework.png",
            navUrl: "",
          },
          {
            enum: "",
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            enum: "",
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
        ],
      },
    ],
  },
  {
    title: "Events & Promotions",
    showSidebar: true,
    items: [
      {
        name: "Events",
        subItems: [
          {
            enum: "",

            subTitle: "T&C Manpower Development Award Scheme",
            imgUrl: "Manpower_Development.png",
            navUrl: "events-landing",
          },
          {
            enum: "",

            subTitle: "Seminars and Workshops",
            imgUrl: "Seminars_Workshops.png",
            navUrl: "seminars-workshops",
          },
          {
            enum: "",

            subTitle: "Student Competitions",
            imgUrl: "Student_Competitions.png",
            navUrl: "student-competitions",
          },
          {
            enum: "",

            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
        ],
      },
      {
        name: "Publications",
        subItems: [
          {
            enum: "",

            subTitle: "HKCTC Newsletter",
            imgUrl: "HKCTC_Newsletter.png",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "Pamphlets And Booklets",
            imgUrl: "Pamphlets_And_Booklets.png",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "Comics",
            imgUrl: "Comics.png",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "Corruption Prevention Guide for T&C Industry",
            imgUrl: "Corruption_Prevention.png",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "Other Useful Information",
            imgUrl: "Other_Useful.png",
            navUrl: "",
          },
        ],
      },
      {
        name: "Reports",
        subItems: [
          {
            enum: "",

            subTitle: "HKCTC Reports",
            imgUrl: "HKCTC_Reports.png",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "Legislative Council Papers ",
            imgUrl: "Legislative_Council_Papers.png",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
        ],
      },
      {
        name: "News and Videos",
        subItems: [
          {
            enum: "",

            subTitle: "Press Releases",
            imgUrl: "Press_Releases.png",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "Advertorials",
            imgUrl: "Advertorials.png",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "Videos",
            imgUrl: "video.png",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            enum: "",

            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
        ],
      },
    ],
  },
  {
    title: "What's new",
    showSidebar: false,
    items: [],
  },
];
