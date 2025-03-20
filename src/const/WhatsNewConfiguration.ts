/**
 * Configuration for the "What's New" section on the homepage.
 *
 * Each object in the `WhatsNewConfiguration` array represents a single module displayed in the horizontal showcase.
 *
 * ### Key Structure:
 * - `title` (string): The headline text for the module.
 * - `date` (string): The publication date of the module, formatted as "DD MMM YYYY".
 * - `imagePath` (string): The path to the primary image for this module.
 *   Images must be stored under the directory: `public/assets/whatsNew`.
 * - `imagePathSwitch` (string): The path to an alternative image used for toggling or switching.
 *   It must also be stored in the same directory as `imagePath`.
 *   Ensure that both `imagePath` and `imagePathSwitch` maintain consistent naming and file type.
 * - `onClick` (function): A placeholder function for the click event.
 *   Currently, this is unused and implemented as an empty arrow function `() => {}`.
 *
 * ### Guidelines for Maintenance:
 * 1. **Adding New Modules**:
 *    - Add a new object to the `WhatsNewConfiguration` array with the required `title`, `date`, `imagePath`, and optionally, `imagePathSwitch`.
 *    - Ensure the image files exist in `public/assets/whatsNew` and use descriptive and consistent filenames.
 * 2. **Removing Modules**:
 *    - Simply remove the corresponding object from the array.
 *    - Consider deleting unused images from the directory to keep it clean.
 * 3. **Modifying Modules**:
 *    - Edit the relevant fields in the specific object.
 *    - Ensure any changes to the image paths are reflected in the corresponding filenames in the `public/assets/whatsNew` directory.
 *
 */

import { navItemEnum } from "./NavigationBarConfiguration";

export type WhatsNewData = {
  title: string;
  date: string;
  imagePath: string;
  imagePathSwitch?: string;
  redirectTo?: string;
  onClick?: () => void;
};

export const WhatsNewConfiguration: WhatsNewData[] = [
  {
    title: 'Twelfth "HKCTC Newsletter" has been issued',
    date: "23 Dec 2024",
    imagePath: "whatsnew_3.png",
    imagePathSwitch: "Testing_1.png",
    redirectTo: `/events-promotion?section=${navItemEnum.hkctc_newsletter}`,
  },
  {
    title:
      "Further liberalisation measures for testing and certification under CEPA",
    date: "9 Oct 2024",
    imagePath: "whatsnew_1.png",
    imagePathSwitch: "Trade_Show_1.png",
    redirectTo: `/support?section=${navItemEnum.entering_into_the_mainland_market}#1`,
  },
  {
    title:
      "Report of the Hong Kong Council for Testing and Certification 2023-24 has been uploaded",
    date: "6 Aug 2024",
    imagePath: "whatsnew_2.png",
    imagePathSwitch: "Mid_Autumn_1.png",
    redirectTo: `/events-promotion?section=${navItemEnum.hkctc_newsletter}`,
  },

  {
    title:
      "Statistics of the testing and certification activities in Hong Kong in 2022 have been uploaded",
    date: "16 Apr 2024",
    imagePath: "whatsnew_4.png",
    imagePathSwitch: "Belt_1.png",
    redirectTo: `/tc-sector?section=${navItemEnum.profile_and_role}`,
  },
  {
    title:
      "Recruit雜誌封面故事: 檢測認證 衣食住行 專業把關 (Chinese version only)",
    date: "15 Mar 2024",
    imagePath: "whatsnew_5.png",
    redirectTo:
      "https://www.recruit.com.hk/article/%E6%AA%A2%E6%B8%AC%E8%AA%8D%E8%AD%89-%E8%A1%A3%E9%A3%9F%E4%BD%8F%E8%A1%8C-%E5%B0%88%E6%A5%AD%E6%8A%8A%E9%97%9C/44038",
  },
  {
    title: "“The BUD Fund - Easy BUD” has been launched",
    date: "16 Jun 2023",
    imagePath: "whatsnew_6.png",
    redirectTo: "/support?section=funding_schemes",
  },
];
