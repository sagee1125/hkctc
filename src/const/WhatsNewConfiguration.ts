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

export type WhatsNewData = {
  title: string;
  date: string;
  imagePath: string;
  imagePathSwitch?: string;
  onClick: () => void;
};

export const WhatsNewConfiguration: WhatsNewData[] = [
  {
    title: "Trade show open for application",
    date: "28 Aug 2024",
    imagePath: "Trade_Show.png",
    imagePathSwitch: "Trade_Show_1.png",
    onClick: () => {},
  },
  {
    title: "Mid-Autumn Festival brings family reunion and joy",
    date: "28 Aug 2024",
    imagePath: "Mid_Autumn.png",
    imagePathSwitch: "Mid_Autumn_1.png",
    onClick: () => {},
  },
  {
    title: "The Testing And Certification Industry Has Always Played An...",
    date: "28 Aug 2024",
    imagePath: "Testing.png",
    imagePathSwitch: "Testing_1.png",
    onClick: () => {},
  },
  {
    title: "Belt and Road Summit Forum",
    date: "28 Aug 2024",
    imagePath: "Belt.png",
    imagePathSwitch: "Belt_1.png",
    onClick: () => {},
  },
];
