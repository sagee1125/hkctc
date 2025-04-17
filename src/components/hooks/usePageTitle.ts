import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { routesConfiguration } from "../../const/RoutesConfiguration";

const DEFAULT_TITLE = "HKCTC";

export const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // 匹配当前路由配置
    const currentRoute = routesConfiguration.find(
      (route) => route.path === location.pathname
    );

    // 处理特殊路径
    let finalTitle = currentRoute?.title || DEFAULT_TITLE;

    // 自动处理重复标题（如 /hkctc 和 /）
    if (location.pathname === "/hkctc") {
      finalTitle = "Homepage";
    }

    // 设置文档标题
    document.title = `${finalTitle} | ${DEFAULT_TITLE}`;

    // 404页面特殊处理
    if (location.pathname === "/*") {
      document.title = `Not Found | ${DEFAULT_TITLE}`;
    }
  }, [location.pathname]);
};
