import { useNavigate } from "react-router-dom";
import { DirectorySidebar } from "../../../components";
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
  return (
    <DirectorySidebar
      directorySidebarItems={directoryItems}
      activatedItems={directoryItems[2]} // "Summary of CEPA Clauses Relating to Testing and Certification"
      setActivatedItems={handleBackTo}
    />
  );
};
