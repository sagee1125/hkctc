import {
  DirectorySidebar,
  type DirectorySidebarItems,
} from "../../../components";
import { navItemEnum } from "../../../const";
import { directorySidebarItemsMap } from "../Support";

export const ClausesDirectorySidebar: React.FC = () => {
  const directorySidebarMap =
    directorySidebarItemsMap[navItemEnum.entering_into_the_mainland_market];
  const directoryItems = Object.keys(directorySidebarMap ?? {}) ?? [];

  const handleBackTo = (toItem: string) => {
    const index = directoryItems.findIndex((item) => item === toItem);

    window.open(
      `/support?section=${navItemEnum.entering_into_the_mainland_market}#${index}`,
      "_self"
    );
  };
  const directorySidebarItems: DirectorySidebarItems[] = directoryItems.map(
    (i) => ({
      label: directorySidebarMap?.[i]?.label ?? i,
      labelCN: directorySidebarMap?.[i]?.labelCN ?? i,
      value: directorySidebarMap?.[i]?.label ?? i,
    })
  );
  return (
    <DirectorySidebar
      directorySidebarItems={directorySidebarItems}
      activatedItems={directoryItems[2]} // "Summary of CEPA Clauses Relating to Testing and Certification"
      setActivatedItems={handleBackTo}
    />
  );
};
