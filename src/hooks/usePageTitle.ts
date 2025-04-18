import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { t2s } from "chinese-s2t";
import { routesConfiguration } from "../const/RoutesConfiguration";
import { Language } from "../context";

export const usePageTitle = (lang: Language) => {
  const location = useLocation();

  function getSingleText(singleText: string, singleCNText: string): string {
    switch (lang) {
      case Language.EN:
        return singleText;
      case Language.ZH_TW:
        return singleCNText;
      case Language.ZH_CN:
        return t2s(singleCNText);
      default:
        return singleText;
    }
  }
  const DEFAULT_TITLE = getSingleText("HKCTC", "香港檢測和認證局");

  useEffect(() => {
    const currentRoute = routesConfiguration.find(
      (route) => route.path === location.pathname
    );

    let finalTitle =
      getSingleText(currentRoute?.title ?? "", currentRoute?.titleCN ?? "") ||
      DEFAULT_TITLE;

    // duplicated path（ /hkctc & /）
    if (location.pathname === "/hkctc") {
      finalTitle = "Homepage";
    }

    // HKCTC - XXX /香港檢測和認證局 - XXX

    document.title = `${DEFAULT_TITLE} | ${finalTitle}`;

    if (location.pathname === "/*") {
      document.title = `${DEFAULT_TITLE} | Not Found`;
    }
  }, [location.pathname, lang]);
};
