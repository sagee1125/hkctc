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
  programmes_and_courses = "programmes_and_courses",
  learning_teaching_resources = "learning_teaching_resources",
  qualifications_framework = "qualifications_framework",
  // Events & Promotion
  award_scheme = "award_scheme",
  seminar_workshop = "seminar_workshop",
  student_competition = "student_competition",

  hkctc_newsletter = "hkctc_newsletter",
  pamphlets_booklets = "pamphlets_booklets",
  comics = "comics",
  corruption_prevention = "corruption_prevention",
  useful_information = "useful_information",

  hkctc_reports = "hkctc_reports",
  council_papers = "council_papers",

  press_releases = "press_releases",
  advertorials = "advertorials",
  videos = "videos",

  seminar_article = "seminar_article",

  // about (for mobile use)
  about_HKCTC = "about_HKCTC",
  panel_on_manpower_development = "panel_on_manpower_development",
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
    title: "About HKCTC",
    showSidebar: false,
    items: [],
    navUrl: "about-us",
  },
  {
    title: "About T&C Sector",
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
            subTitle: "Strengths of Hong Kong's T&C Industry",
            imgUrl: "Strengths.png",
            navUrl: `/tc-sector?section=${navItemEnum.tc_sector_strengths}`,
          },
          {
            enum: navItemEnum.services_provided,
            subTitle: "Services Provided by T&C Industry",
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
          // hide it from 02/03/2025
          // {
          //   enum: navItemEnum.tcjs,
          //   subTitle:
          //     "Testing and Certification Sector Job Creation Scheme (TCJS)",
          //   imgUrl: "tcjs.png",
          //   navUrl: `/support?section=${navItemEnum.tcjs}`,
          // },
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
          { enum: "", subTitle: "", imgUrl: "", navUrl: "" },
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
            navUrl: `/career_and_education?section=${navItemEnum.career_development}`,
          },
          {
            enum: navItemEnum.career_opportunities,
            subTitle: "Career Opportunities",
            imgUrl: "Career_Opportunities.png",
            navUrl: `/career_and_education?section=${navItemEnum.career_opportunities}`,
          },
          {
            enum: navItemEnum.other_professional_schemes,
            subTitle: "Other Professional Schemes",
            imgUrl: "Other_Professional_Schemes.png",
            navUrl: `/career_and_education?section=${navItemEnum.other_professional_schemes}`,
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
            enum: navItemEnum.programmes_and_courses,
            subTitle: "Programmes and Courses",
            imgUrl: "Programmes_and_Courses.png",
            navUrl: `/career_and_education?section=${navItemEnum.programmes_and_courses}`,
          },
          {
            enum: navItemEnum.learning_teaching_resources,
            subTitle: "Learning and Teaching Resources",
            imgUrl: "Learning_and_Teaching_Resources.png",
            navUrl: `/career_and_education?section=${navItemEnum.learning_teaching_resources}`,
          },
          {
            enum: navItemEnum.qualifications_framework,
            subTitle: "Qualifications Framework",
            imgUrl: "Qualifications_Framework.png",
            navUrl: `/career_and_education?section=${navItemEnum.qualifications_framework}`,
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
            enum: navItemEnum.award_scheme,
            subTitle: "T&C Manpower Development Award Scheme",
            imgUrl: "Manpower_Development.png",
            navUrl: `/events-promotion?section=${navItemEnum.award_scheme}`,
          },
          {
            enum: navItemEnum.seminar_workshop,
            subTitle: "Seminars and Workshops",
            imgUrl: "Seminars_Workshops.png",
            navUrl: `/events-promotion?section=${navItemEnum.seminar_workshop}`,
          },
          {
            enum: navItemEnum.student_competition,
            subTitle: "Student Competitions",
            imgUrl: "Student_Competitions.png",
            navUrl: `/events-promotion?section=${navItemEnum.student_competition}`,
          },
          // keep the following placeholder, because the length of subItems should equal 5
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
            enum: navItemEnum.hkctc_newsletter,
            subTitle: "HKCTC Newsletters",
            imgUrl: "HKCTC_Newsletter.png",
            navUrl: `/events-promotion?section=${navItemEnum.hkctc_newsletter}`,
          },
          {
            enum: navItemEnum.pamphlets_booklets,
            subTitle: "Pamphlets And Booklets",
            imgUrl: "Pamphlets_And_Booklets.png",
            navUrl: `/events-promotion?section=${navItemEnum.pamphlets_booklets}`,
          },
          {
            enum: navItemEnum.comics,
            subTitle: "Comics",
            imgUrl: "Comics.png",
            navUrl: `/events-promotion?section=${navItemEnum.comics}`,
          },
          {
            enum: navItemEnum.corruption_prevention,
            subTitle: "Corruption Prevention Guide for T&C Industry",
            imgUrl: "Corruption_Prevention.png",
            navUrl: `/events-promotion?section=${navItemEnum.corruption_prevention}`,
          },
          {
            enum: navItemEnum.useful_information,
            subTitle: "Other Useful Information",
            imgUrl: "Other_Useful.png",
            navUrl: `/events-promotion?section=${navItemEnum.useful_information}`,
          },
        ],
      },
      {
        name: "Reports",
        subItems: [
          {
            enum: navItemEnum.hkctc_reports,
            subTitle: "HKCTC Reports",
            imgUrl: "HKCTC_Reports.png",
            navUrl: `/events-promotion?section=${navItemEnum.hkctc_reports}`,
          },
          {
            enum: navItemEnum.council_papers,
            subTitle: "Legislative Council Papers ",
            imgUrl: "Legislative_Council_Papers.png",
            navUrl: `/events-promotion?section=${navItemEnum.council_papers}`,
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
        name: "News & Videos",
        subItems: [
          {
            enum: navItemEnum.press_releases,
            subTitle: "Press Releases",
            imgUrl: "Press_Releases.png",
            navUrl: `events-promotion?section=${navItemEnum.press_releases}`,
          },
          {
            enum: navItemEnum.advertorials,
            subTitle: "Advertorials",
            imgUrl: "Advertorials.png",
            navUrl: `events-promotion?section=${navItemEnum.advertorials}`,
          },
          {
            enum: navItemEnum.videos,
            subTitle: "Videos",
            imgUrl: "video.png",
            navUrl: `events-promotion?section=${navItemEnum.videos}`,
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
    navUrl: "whats-new",
  },
];
