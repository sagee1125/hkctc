import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleBackTo = (toItem: string) => {
    const index = directoryItems.findIndex((item) => item === toItem);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    navigate(
      `/support?section=${navItemEnum.entering_into_the_mainland_market}#${index}`
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
