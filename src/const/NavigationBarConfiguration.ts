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
export type SubItems = {
  subTitle: string;
  imgUrl: string;
  navUrl?: string;
};

export type NavItems = {
  name: string;
  subItems: SubItems[];
};
export type NavData = {
  title: string;
  showSidebar: boolean;
  items: NavItems[];
  onClick?: () => void;
};
export const NavigationBarConfiguration: NavData[] = [
  {
    title: "About Us",
    showSidebar: false,
    items: [],
  },
  {
    title: "T&C Sector",
    showSidebar: true,
    items: [
      {
        name: "Introducing the Testing and Certificate sector, and what service we can provide",
        subItems: [
          {
            subTitle: "Profile and Role of T&C Sector",
            imgUrl: "Profile_and_Role.png",
            navUrl: "profile-and-role",
          },
          {
            subTitle: "Strengths of Hong Kong's T&C Sector",
            imgUrl: "Strengths.png",
            navUrl: "",
          },
          {
            subTitle: "Services Provided by T&C Sector",
            imgUrl: "Services_Provided.png",
            navUrl: "",
          },
          {
            subTitle: "Services for Different Business Areas",
            imgUrl: "Business_Areas.png",
            navUrl: "",
          },
          {
            subTitle: "Accreditation Services",
            imgUrl: "Accreditation_Services.png",
            navUrl: "",
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
            subTitle: "HKCTC Exhibition Programme",
            imgUrl: "nav_event_2_1.png",
            navUrl: "",
          },
          {
            subTitle: "Funding Schemes",
            imgUrl: "nav_event_2_2.png",
            navUrl: "",
          },
          {
            subTitle:
              "Testing and Certification Sector Job Creation Scheme (TCJS)",
            imgUrl: "nav_event_2_3.png",
            navUrl: "",
          },
          {
            subTitle: "Accommodation and Land",
            imgUrl: "nav_event_2_4.png",
            navUrl: "",
          },
          {
            subTitle: "Entering into the Mainland Market",
            imgUrl: "nav_event_2_5.png",
            navUrl: "",
          },
          {
            subTitle: "Other Support",
            imgUrl: "nav_event_2_6.png",
            navUrl: "",
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
            subTitle: "Career Development",
            imgUrl: "Career_Development.png",
            navUrl: "",
          },
          {
            subTitle: "Career Opportunities",
            imgUrl: "Career_Opportunities.png",
            navUrl: "",
          },
          {
            subTitle: "Other Professional Schemes",
            imgUrl: "Other_Professional_Schemes.png",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
        ],
      },
      {
        name: "Education & Training",
        subItems: [
          {
            subTitle: "Programmes and Courses",
            imgUrl: "Programmes_and_Courses.png",
            navUrl: "",
          },
          {
            subTitle: "Learning and Teaching Resources",
            imgUrl: "Learning_and_Teaching_Resources.png",
            navUrl: "",
          },
          {
            subTitle: "Qualifications Framework",
            imgUrl: "Qualifications_Framework.png",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
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
            subTitle: "T&C Manpower Development Award Scheme",
            imgUrl: "Manpower_Development.png",
            navUrl: "events-landing",
          },
          {
            subTitle: "Seminars and Workshops",
            imgUrl: "Seminars_Workshops.png",
            navUrl: "seminars-workshops",
          },
          {
            subTitle: "Student Competitions",
            imgUrl: "Student_Competitions.png",
            navUrl: "student-competitions",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
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
            subTitle: "HKCTC Newsletter",
            imgUrl: "HKCTC_Newsletter.png",
            navUrl: "",
          },
          {
            subTitle: "Pamphlets And Booklets",
            imgUrl: "Pamphlets_And_Booklets.png",
            navUrl: "",
          },
          {
            subTitle: "Comics",
            imgUrl: "Comics.png",
            navUrl: "",
          },
          {
            subTitle: "Corruption Prevention Guide for T&C Industry",
            imgUrl: "Corruption_Prevention.png",
            navUrl: "",
          },
          {
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
            subTitle: "HKCTC Reports",
            imgUrl: "HKCTC_Reports.png",
            navUrl: "",
          },
          {
            subTitle: "Legislative Council Papers ",
            imgUrl: "Legislative_Council_Papers.png",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
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
            subTitle: "Press Releases",
            imgUrl: "Press_Releases.png",
            navUrl: "",
          },
          {
            subTitle: "Advertorials",
            imgUrl: "Advertorials.png",
            navUrl: "",
          },
          {
            subTitle: "Videos",
            imgUrl: "video.png",
            navUrl: "",
          },
          {
            subTitle: "",
            imgUrl: "",
            navUrl: "",
          },
          {
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
